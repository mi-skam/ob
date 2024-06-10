


This post documents my journey setting up a home lab, where I run open source software like shaarli, wallabag and nextcloud, and exposing it on the internet using a cheap VPS and [Wireguard](https://wireguard.com/).

There is no shortage of online tutorials on installing wireguard on Ubuntu, Debian, and Raspberry pi. However, it still took me about 1 full day to get a full system working. Half of it was debugging why it wireguard wasn’t installed properly. The other half was me trying to fix an accidental OS upgrade.

Hosting a server at home is a cost efficient way to have an online presence or to have your own personal cloud. However, your internet service provider might not issue you a static IP address. This means that you need to set up a script to periodically update the DNS entry to point to your current IP address. You’ll also need a router that allows you to configure port-forwarding, or DMZ, to route connections to your server. Even after all that’s done, it still feels unnecessary to expose your personal IP address to the internet, where tonnes of bots are constantly trying to find vulnerable targets. Such IP addresses are foot prints left behind when you visit a website.

Wireguard can solve this by peering the network from the home server to a bastion public server, typically a VPS. The bastion server will simply act as a proxy, like a PO box, forwarding traffic to it to the actual backend server at home. This way, the public IP address assigned to your home network will never need to accept public connection, thus reducing the attack surface.

The idea is not new, but wireguard has certainly made it easier to create a reliable set up.

# Specifications

- Raspberry pi 4 model b, 32bit arm 4GB RAM set up using
- VPS hosting with OpenVZ virtualization.

# Implementation

The rough steps are:

1. Install wireguard on the server and client.
2. Configure them so that they are peered.
3. Set up iptable rules and system to forward traffic from server to client.
4. Test to make sure only the server is visible.

The VPS box runs Ubuntu 20.04 so I tried to follow [the official instructions](https://www.wireguard.com/install/) but kept getting “unknown protocol” errors. I checked `sudo modprobe wireguarrd` and it told me the kernel module is not installed. After searching high and low for instructions on how to install it (and installing a bunch of unnecessary linux header files), I realized the box was running OpenVZ virtualization (vs KVM) which my gut feeling told me had something to do with my struggle. I searched OpenVZ and Wireguard and found articles explaining that OpenVZ doesn’t allow kernel module installations which explained my struggle.

Thankfully, I quickly found [a suitable tutorial](https://d.sb/2019/07/wireguard-on-openvz-lxc) for how to install a userland version (wireguard-go) which will work for OpenVZ. The userland version is less performant but I doubt a single-user set up I intend this for will make much difference. With that, the server is set up.

## Wireguard on pi and the mistakes I made

When I set up the pi within my local network server over two years ago, I installed Rasbian, which is based on debian. I thought the instructions would be similar to the server and I tried to follow the first [wireguard-instructions](https://www.wireguard.com/install/) and did `apt install wireguard` but alas, it didn’t work.

I thought I needed to upgrade and made the rookie mistake of just doing `apt upgrade` which upgraded the kernel to 5.9.x, broke my /boot partition and upgraded a bunch of software that broke my local php set up.

To fix the boot partition, I copied over missing img files from a fresh Rasbian download. I then had to fix some software incompatibilities by disabling some unnecessary system software and fix my local server set up by downgrading php back to 7.3.

Even after the kernel upgrade and following the instructions again, I still couldn’t get wireguard to install properly. I probably fixed my apt source list properly which allowed me to `apt install wireguard`. However, starting it up with `wg-quick wg0` gave an unknown protocol error and `sudo modprobe wireguard` tells me that the module isn’t installed for the kernel. I tried to get the linux header for the current kernel to reinstall wireguard but couldn’t get it to compile against the kernel I had. This was way beyond my understanding of kernel module development.

Even after following instructions tailored to raspberry pi like [this](https://www.sigmdel.ca/michel/ha/wireguard/wireguard_03_en.html), I still ran into issues like [this](https://blog.meer-web.nl/wireguard-attempting-to-install-and-configure-wireguard-fails-with-unknown-device-type-and-fatal-module-wireguard-not-found-in-directory/).

I decided to downgrade back to a more stable kernel since I had no good reason to be on the latest kernel. I followed [the instructions here](https://www.raspberrypi.org/documentation/raspbian/applications/rpi-update.md) and got back to 5.4.72.

```
pi@raspberrypi:~ $ uname -r
5.4.72-v7l+

```

Even then, I still couldn’t get it to compile. I chalked this up to the combination of architecture/debian/kernel being incompatible and gave up compiling the kernel module. Along the way I had to learn to resolve apt dependency resolution because my initial upgrade installed package dependencies that were incompatible with the current version. I found [this website on apt](https://debian-handbook.info/browse/stable/sect.apt-get.html) very useful to explain the cryptic errors that apt produces.

I was installing wireguard on both the VPS and raspberry pi, and at this point I found out that the server was running OpenVZ and couldn’t install it on the kernel. Then it hit me that I could just run wireguard in userland the same as as the server! I followed the [instructions to do that](https://d.sb/2019/07/wireguard-on-openvz-lxc) and now I have a working client!

## Setting up the server for forwarding

Setting up the server was only half the battle. I had to configure it so that traffic reaching the VPS will be routed to my home lab server. The first task is to configure wireguard so that the pi and the VPS could be peered, which mean that they can route traffic to one another via an internal IP subnet.

I followed [this tutorial on youtube](https://www.youtube.com/watch?v=9tDeh9mutmI) for configuring the settings but there are [plenty out there](https://medium.com/@anton.puetz/creating-a-wireguard-vpn-server-on-a-raspberry-pi-4-fce1e647abf4) to choose from. Like the video, I configured the server to take the address 10.0.4.1 and the pi to take 10.0.4.2. On the server, I uncommented `net.ipv4.ip_forward=1` in **/etc/sys.conf** to allow ip forwarding and `sysctl -p` to load it.

I verified that the two nodes could ping each other and pat myself on the back. That’s the easy part. The next part is the annoying part: iptables.

In order for traffic reaching the VPS to be forwarded to the home lab, I need to set up rules to forward incoming traffic to the internal IP address. I faithfully followed the video and replaced the name of the interface, eth0 in the video and venet0 on my OpenVZ VPS, and it seemed to work fine.

I knew I needed to persist this settings and tried to use `netfilter-persistent` package. However, I think because I also set up `ufw` on that machine to filter out traffic coming into other ports, it affected that package. I went for the “duck tape” solution and just wrote a script that will run the commands to set up the forwarding properly.

```
#!/bin/bash
iptables -A FORWARD -i venet0 -o wg0 -p tcp --syn --dport 80 -m conntrack --ctstate NEW -j ACCEPT
iptables -A FORWARD -i venet0 -o wg0 -p tcp --syn --dport 443 -m conntrack --ctstate NEW -j ACCEPT
iptables -A FORWARD -i venet0 -o wg0 -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -A FORWARD -i wg0 -o venet0 -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -t nat -A PREROUTING -i venet0 -p tcp --dport 443 -j DNAT --to-destination 192.168.4.2
iptables -t nat -A PREROUTING -i venet0 -p tcp --dport 80 -j DNAT --to-destination 192.168.4.2
iptables -t nat -A POSTROUTING -o wg0 -p tcp --dport 80 -d 192.168.4.2 -j SNAT --to-source 192.168.4.1
iptables -t nat -A POSTROUTING -o wg0 -p tcp --dport 443 -d 192.168.4.2 -j SNAT --to-source 192.168.4.1

```

I reckon the VPS is reliable enough to stay up most of the time so the next time I have to do this is for a new VPS set up or when it goes down for maintenance.

That concludes the configuration on the server!

## Testing

To check I had everything set up properly, I did the following tests:

- From the VPS, ran `ping 10.0.4.2` to check connectivity to the pi.
- From the pi, ran `ping 10.0.4.1` to check connectivity to the VPS.
- Ran an nginx server on the pi that listens to 80 and 443, set the DNS record to point to the VPS, and visited the URL from the browser and checked that the response is served by the pi.
- Did a DNS lookup for that domain name and checked that it resolved to the VPS.
- Checked that connections to the public address of the home server are refused.
- The raspberry pi 4 has made it extremely affordable to run a home server. Comparing against a 5USD/month hosting, it practically pays itself after 1 year of hosting.
- I found a cheap VPS for 20 USD/year. The only specification I care about is network bandwidth and quota since it will just be forwarding traffic.
- Domain registration: About 10 USD/year for an easy to remember vanity domain name.
- Check virtualization technology of VPS. This would have saved me hours trying to build the kernel module on the VPS.
- Do not do `apt upgrade` unnecessarily. This made me spent hours trying to fix my pi and the existing software.
- `rpi-upgrade` or trying to upgrade the kernel for the raspberry pi is probably the wrong solution. I contemplated whether it was possible to just run debian on the raspberry pi. After searching online, it seems like Rasbian has some optimization for its floating point hardware module but it might not be necessary in the later versions. So in theory it’s not necessary to run rasbian on the pi.

Here are some additional resources that I read along the way when trying to implement the design.

- [Using wireguard on raspberry as a VPN server](https://www.bachmann-lan.de/raspberry-pi-mit-wireguard-als-vpn-server-mit-wireguard/).