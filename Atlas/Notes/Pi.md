#nobj/documentation 

1. Plugged-In the Pi (HDMI, Power)
2. Reading a Tutorials on [nix-dev](https://nix.dev/tutorials/nixos/installing-nixos-on-a-raspberry-pi)
3. Download [NixOS Image](https://hydra.nixos.org/build/228543556/download/1/nixos-sd-image-23.11pre506249.9ca785644d0-aarch64-linux.img.zst) for Raspberry Pi 4 
4. [[Flash an iso on macOS]] to the sdcard
5. Installed the os with user user. 
6. Adding [hardware-repo](https://github.com/NixOS/nixos-hardware)
7. At the moment 22.07.23 there is a Bug when activating the 3D acceleration, thats why we need a [pinned version of NixOS](https://github.com/NixOS/nixos-hardware/issues/631#issuecomment-1640643051)
8. I cannot get cage to run with RaspberryPi -> Let's move to sway (depends on homemanager)
9. [Install homemanager](https://nix-community.github.io/home-manager/index.html#sec-install-nixos-module) 

```shell
[root@client1:~]# nix-channel --list
home-manager https://github.com/nix-community/home-manager/archive/6a1922568337e7cf21175213d3aafd1ac79c9a2e.tar.gz
nixos https://github.com/NixOS/nixpkgs/archive/29339c1529b2c3d650d9cf529d7318ed997c149f.tar.gz
nixos-hardware https://github.com/NixOS/nixos-hardware/archive/ca29e25c39b8e117d4d76a81f1e229824a9b3a26.tar.gz
```
10. Using sway and autostarting chromium