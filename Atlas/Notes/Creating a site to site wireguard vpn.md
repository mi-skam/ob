#network/vpn #network/wireguard 

  
The solution comes in the form of an Internet-facing server with a static IP. That server will receive requests and forward them to the LAN server through an encrypted, performant [WireGuard](https://www.wireguard.com/) tunnel:

```
┌-------------------┐     ┌------------------------┐
| Internet Traffic  | <-> | Internet-Facing Server |
└-------------------┘     └------------------------┘
                                    /\
                                    || WireGuard Site-to-Site VPN
                                    \/
                             ┌-----------------┐
                             | Home LAN Server |
                             └-----------------┘

```

I chose [WireGuard](https://www.wireguard.com/) over other VPN candidates because of the simplicity of configuration and low server overhead. Without further ado, let’s get into how to set this up.

### Step 1: Internet-Facing Server Setup

Since WireGuard is really efficient, you don’t need a beefy, expensive server to run it on. I chose a server with 512MB of RAM, 1 CPU core, and 2 TB of outgoing bandwidth per month for $3/mo. This will be the only real expense of this project.

I installed CentOS on my Internet-facing server, but WireGuard is compatible with [a wide variety of operating systems](https://www.wireguard.com/install/).

Once you have your server, SSH in and follow this guide to configuring WireGuard:

1. Install WireGuard by following [the instructions for your server OS](https://www.wireguard.com/install/).
2. After installing WireGuard, you will have access to the `[wg](https://git.zx2c4.com/WireGuard/about/src/tools/man/wg.8)` command, which we will use to generate public/private keypairs for the server and client. 
    - Run `wg genkey` to generate a private key. This will be the server’s private key. This should be kept a secret, as it can be used to decrypt data sent to the server.
    
    ```bash
    wg genkey | sudo tee /etc/wireguard/private.key
    sudo chmod go= /etc/wireguard/private.key
    ```
    
    - Now, pipe that result into `wg pubkey` to generate the server’s public key. This will used later to configure the client to send encrypted messages to the server.
    
    ```bash
    sudo cat /etc/wireguard/private.key | wg pubkey | sudo tee /etc/wireguard/public.key
    ```
    
    - Repeat the above steps to generate a private & public key for the LAN client.
3. Create a file using your favorite text editor in `/etc/wireguard/wg0.conf`, and fill it out using the below template. If you’re curious about the `wg0.conf` file format, check out the `[wg-quick` man page](https://git.zx2c4.com/WireGuard/about/src/tools/man/wg-quick.8) for more information. 
    
    
4. 
    
    Now that you’ve configured the server, you can bring up the WireGuard interface by doing `wg-quick up wg0`.
    
5.  
    
    Do `wg show` to see the status of your WireGuard network:
    
    ```
    ~ wg show
    interface: wg0
    public key: your-server-public-key
    private key: (hidden)
    listening port: 51820
    
    peer: your-client-public-key
    allowed ips: 10.222.0.2/32
    persistent keepalive: every 25 seconds
    
    ```
    
6. 
    
    Now use `systemctl enable wg-quick@wg0` to ensure that this interface is brought up on every boot.
    

Congrats! Your Internet-facing server is now set up to act as a WireGuard host. Now let’s proceed to the client configuration on the LAN server.

### Step 2: LAN Server Setup

Follow these instructions on your home LAN server to set it up as a WireGuard client:

1. Install WireGuard using the [installation instructions for your OS](https://www.wireguard.com/install/).
2. Create a file using your favorite text editor in `/etc/wireguard/wg0.conf`, and fill it out using the below template. Again, for more info on the `wg0.conf` file format, check out the `[wg-quick` man page](https://git.zx2c4.com/WireGuard/about/src/tools/man/wg-quick.8).

```bash
[Interface]
# Configuration for the server

# Set the IP subnet that will be used for the WireGuard network.
# 10.222.0.1 - 10.222.0.255 is a memorable preset that is unlikely to conflict.
Address = 10.222.0.1/24

# The port that will be used to listen to connections. 51820 is the default.
ListenPort = 51820

# The output of `wg genkey` for the server.
PrivateKey = server-private-key-here

[Peer]
# Configuration for the server's client

# The output of `echo "client private key" | wg pubkey`.
PublicKey = client-public-key-here

# The IP address that this client is allowed to use.
AllowedIPs = 10.222.0.2/32

# Ensures that your home router does not kill the tunnel, by sending a ping
# every 25 seconds.
PersistentKeepalive = 25
```

1. 
    
    Now that you’ve configured the client, you can bring up the WireGuard interface by doing `wg-quick up wg0`.
    
2.  
    
    Do `wg show` to see the status of your WireGuard network:
    
    ```
    ~ wg show
    interface: wg0
      public key: your-client-private-key
      private key: (hidden)
      listening port: 55018
    
    peer: your-server-public-key
      endpoint: your-server-domain-name-or-IP-address:51820
      allowed ips: 10.222.0.0/16
      latest handshake: 1 minute, 41 seconds ago
      transfer: 959.23 MiB received, 1.57 GiB sent
      persistent keepalive: every 25 seconds
    
    ```
    
3. 
    
    At this point, you should be able to do `ping 10.222.0.1` to reach your WireGuard server through your new VPN.
    
4. 
    
    Now use `systemctl enable wg-quick@wg0` to ensure that this interface is brought up on every boot.
    

Now your VPN is set up and you are ready to start exposing services on your home server through your VPN.

### Step 3: Start Exposing Services

You’ll need a way to proxy traffic that hits your Internet-facing server through the VPN to your home server.

- For **HTTP traffic**, set up a reverse proxy on the Internet-facing server. My tool of choice for this is [nginx](https://nginx.org/), which has a fantastic [reverse proxy module](https://nginx.org/en/docs/http/ngx_http_proxy_module.html). Here’s a very basic nginx config to proxy traffic for `example.com` to port 8080 on your LAN server:
    
    ```
    server {
      server_name example.com;
      location / {
        proxy_pass http://10.222.0.2:8080/;
      }
    }
    
    ```
    
- For **other TCP/IP traffic**, set up `[rinetd](https://github.com/boutell/rinetd)` on the Internet-facing server. It will tunnel TCP traffic on one port/interface to another port/interface. For example, if you have an IRC server running on port 6667 of your home server, you could put this in `/etc/rinetd.conf` to forward traffic from port 6667 of the Internet-facing server:
    
    ```
    # bind to all interfaces on 6667 and pass to LAN server
    0.0.0.0 6667 10.222.0.2 6667
    
    ```
    

With both of these methods, keep in mind that the IP of the original client will be obscured by the reverse proxy. You’ll need to use other methods (such as an `[X-Proxied-For` header](https://en.wikipedia.org/wiki/X-Forwarded-For) containing the real client’s IP address) if you want to receive the client’s real IP at your home server.

Now you can start moving all of the services you want to self-host under your own roof! In future articles, I will discuss setting up your own self-hosted photo storage, continuous integration pipelines, web hosting, and others.

### Extra: Securing Your Internet-Facing Server

One of the benefits to this setup is that you no longer need to expose your Internet-facing server’s SSH port publicly. You can use the VPN to access it instead.

1. Set up your computer as a WireGuard client using the same method that you used to set up your home LAN server as a client. Or, just use your home LAN server as a [bastion host](https://en.wikipedia.org/wiki/Bastion_host), so you must be SSH’d into it to SSH into your Internet-facing server.
2. Set up `ufw` on your Internet-facing server using these commands: 
    
    ```
      # turn on ufw
      ufw enable
      # allow inbound access to WireGuard's port
      ufw allow 51820/udp
      # allow VPN IPs to access SSH on port 22
      ufw allow from 10.222.0.0/24 to any port 22 proto tcp
      # remove default SSH allow rules
      ufw delete allow SSH
      ufw delete allow 22/tcp
    
    ```
    

Now you should only be able to access SSH on your Internet-facing server via the VPN IP address, `10.222.0.1`.

### Extra: Alternative WireGuard Distributions

The official [WireGuard](https://www.wireguard.com/) distribution comes as a kernel mod. While the official implementation is best, there are also some alternatives that run in userspace, if you’re unwilling/unable to install a kernel mod:

- `[wireguard-go](https://git.zx2c4.com/wireguard-go/about/)` - This is WireGuard’s official userspace implementation, written in Go. Recommended.
- `[wireguard-rs](https://git.zx2c4.com/wireguard-rs)` - Another userspace implementation, also by the WireGuard authors, written in Rust. WIP, not recommended for production.
- `[boringtun](https://github.com/cloudflare/boringtun)` - Cloudflare’s unofficial userspace WireGuard client, also written in Rust. Used in their proprietary [Argo Tunnel](https://developers.cloudflare.com/argo-tunnel/) Site-to-Site VPN. *Note: the original author of WireGuard, Jason A. Donenfield, [has expressed some opinions about Cloudflare’s involvement in WireGuard](https://lists.zx2c4.com/pipermail/wireguard/2019-March/004048.html).*