---
created: 2024-04-23 2024-04-25T11:44:20+02:00
languages: nix
---

I needed a webdav server as a backing server for [[Zotero MOC]] and I went with [[Caddy]] and [[webdav-server-rs]] which I found on the [[NixOS]] page.

> [!INFO] TLDR;
>
> 1. Create a directory for webdav user
> 2. Create a htpasswd for http auth
> 3. Enable caddy and webdav-rs-server

## Webdav directory

We use the `webdav` user

```shell
sudo mkdir /var/www/webdav/zotero # needs to end on /zotero/
sudo chown -R webdav /var/www/webdav
sudo chmod 755 /var/www
```

## Create a htpasswd

```shell
htpasswd -nbB <user> <pass> # copy to /etc/htpasswd
```

## Caddy (reverse proxy) and Webdav-rs-server

`services/webdav.nix`

```nix
{ config, lib, pkgs, ... }:
let
  app = "webdav";
  appDir = "/var/www/${app}";
in {
  networking.firewall.allowedTCPPorts = [ 80 443 ];                                                                                                                                                   services = {
    # reverse proxy
    caddy = {
      enable = true;
      user = app;
      virtualHosts = {
        "web.marco.miskam.xyz" = {
          extraConfig = ''
            reverse_proxy localhost:4918 {
              header_up Host {host}
              header_up X-Real-IP {remote}
              header_up Connection {>Connection}
              header_up X-Forwarded-Port {port}
              header_up X-Forwarded-Ssl on
            }
          '';
        };
      };
    };
    webdav-server-rs = {
      enable = true;
      user = app;
      settings = {
        server.listen = [ "127.0.0.1:4918" ];
        accounts = {
          auth-type = "htpasswd.default";
          acct-type = "unix";
        };
        htpasswd.default = {
          htpasswd = "/etc/htpasswd";
        };

        location = [
          {
            route = [ "/zotero/*path" ];
            directory = "/var/www/webdav/zotero/";
            handler = "filesystem";
            methods = [ "webdav-rw" ];
            autoindex = true;
            auth = "true";
          }
        ];
      };
    };
  };

  # user for caddy and phpfpm
  users.users.${app} = {
    isSystemUser = true;
    createHome = true;
    home = appDir;
    group = app;
  };
  users.groups.${app} = { };
}
```

---

[[Tutorials]]
