---
comment:
  - intel i5 6500u (4c, 8gb, 512GBSSD)
roles:
  - dev, backup, vm-server
os: nixos
ip: 192.168.178.184
status: active
created:
  - - 2023-08-02
---
# [[Victor]]

It's my main Server at the moment. I am running my dev stuff on it, and it's also mirroring the syncthing service of [[Atlas/Notes/Infrastructure/Zigzag]] as of [[2023-08-02]]  

I can use this server to connect to with VSCode (there is a hack installed to make the node-server binary compatible).

Interesting dirs:
- ~/dev:
	- all the projects that I am developing on
- ~/sync
	- syncthing shares
- ~/backup
	- temporary data


## Log

I added a backup Samba share [[2023-08-02]],  just to create a space, where I can dump stuff from my workstations. For example I had to temporarily move some backups off of [[nc-app2]] to save some space. 



## Tasks

- [ ] Conversion of `/etc/nixos/configuration.nix` to `nix flakes`
- [ ] Deploy code to other machines, Deploy target? Deploy host?



