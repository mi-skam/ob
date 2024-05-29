#linux 

## Unit files for mounting Stuff

To create unit files for mounts, the name of the unit file must match the _Where_ clause of the mount path.

Example:

```bash
$ systemd-escape -p --suffix=mount "/home/plumps/Sync/windows-1/c"
home-plumps-Sync-windows\\x2d1-c.mount

```

[Systemd mount fails. Where= setting doesn't match unit name](https://unix.stackexchange.com/questions/283442/systemd-mount-fails-where-setting-doesnt-match-unit-name)