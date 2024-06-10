## NFS

```bash
[Unit]
Description = nfs mount for nfsfiles

[Mount]
What=example.server:/srv/nfsfiles
Where=/mnt/nfs/nfsshare
Type=nfs
Options=defaults
TimeoutSec=5

[Install]
WantedBy=multi-user.target
```

```bash
[Unit]
Description=nfs automount for nfsfiles

[Automount]
Where=/mnt/nfs/nfsshare
TimeoutIdleSec=0

[Install]
WantedBy=multi-user.target
```

## CIFS

Example for a windows share mounted on Linux

```bash
[Unit]
Description=c drive of windows-1 (cifs)
Requires=systemd-networkd.service
After=network-online.target
Wants=network-online.target

[Mount]
What=//windows-1.lan/c
Where=/home/plumps/Sync/windows-1/c
Type=cifs
Options=vers=2.1,credentials=/etc/wincreds,iocharset=utf8,rw,x-systemd.automount,uid=1000
TimeoutSec=30

[Install]
WantedBy=multi-user.target
```

```bash
[Unit]
Description=c drive of windows-1 (cifs)
Requires=systemd-networkd.service
After=network-online.target
Wants=network-online.target

[Mount]
What=//windows-1.lan/c
Where=/home/plumps/Sync/windows-1/c
Type=cifs
Options=vers=2.1,credentials=/etc/wincreds,iocharset=utf8,rw,x-systemd.automount,uid=1000
TimeoutSec=30

[Install]
WantedBy=multi-user.target
```