---
parent:
  - "[[Fleeting MOC]]"
date: 2024-04-04
modified: 2024-04-08T13:19:19+02:00
tags:
  - code/tutorial
languages: nix
---

Build it with:

```shell
nix build .#nixosConfigurations.exampleIso.config.system.build.isoImage
```

`flake.nix`:

```nix
{
  description = "Minimal NixOS installation media";

  inputs = { nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11"; };

  outputs = { self, nixpkgs }: {
    nixosConfigurations = {
      exampleIso = nixpkgs.lib.nixosSystem {
        system = "x86_64-linux";
        modules = [
          "${nixpkgs}/nixos/modules/installer/cd-dvd/installation-cd-minimal.nix"
          ({ pkgs, ... }: {
            environment.systemPackages = with pkgs; [ neovim ];

            # Enable SSH in the boot process.
            systemd.services.sshd.wantedBy =
              pkgs.lib.mkForce [ "multi-user.target" ];
            users.users.root.openssh.authorizedKeys.keys = [
              "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCphP9WmFxenrVjlorHMNS2704AKsT+rthEW3lXJwf8i7Ye0LU9eBD7mNSY+zZMZGO74tascnq07jOO64BS+yLhs4/D9K5bFgyUC2RTvT2NkOct/9YqW5NAvAlb31RMe0K107qWjlA0lkkPBM9ObFoe+zx36c1vlArb7XsrWv/uEDdDnE/nUZXLbEFBiu0Zv8dHG5VscvqIc6dFEFVLv5Uve1C5wsJxMCWE+cq+XDvHoJQPPXR6b6eDA84akjH8hxhKIxBZ4fikgVKpd4kUvytMRCj5JUTxSiBnoSDjt8LgytkwnYQ/L+btYAZ8vV8WGsh2BStoTMfREBkEVMNdWJ6lAF4safOVJYujFq4jAjLjs5k5Zmu3RRfg6VpR+yLoCOSWIyd8wuDDc6rk8VTnCC1E7fX28Ofbz239GSrLJSDaPtMbBlqI2kKcbuIAzfCqWC4XoklZGzUnpapIcYPNJAdqaoYZOj4pz3F/3zJEEYWSUsKdL69NQn5CXsipJz8NP2E= plumps@MSI-GS65"
            ];
            users.users.root.password = "nixos";
            
            # improve iso build time
            isoImage.squashfsCompression = "gzip -Xcompression-level 1";
          })
        ];
      };
    };
  };
}

```
---
[[Tutorials]]