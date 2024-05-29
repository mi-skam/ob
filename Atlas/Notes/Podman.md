---
parent: "[[Fleeting MOC]]"
date: 2024-01-02
tags:
  - 🦠
modified: 2024-01-08T10:27:00+01:00
---

[[Podman]] is a alternative container runtime to [[Docker]]. 


## Machine

To use it on [[MacOS]] or [[Windows]] we need to create a [[Linux]] [[VM]] that ships the podman environment. We can create this machine with

```
podman machine init
podman machine start
```

To log into this machine we can use `podman machine ssh`

We reboot the machine with
```
podman machine stop
podman machine start
```

## Rootless

One of the advantages of podman is the capability to run without a daemon that possesses root capabilities. We can switch between `rootful` and `rootless` 

```
podman set --rootful=<true|false>
```

## Useful commands

```shell
# pull images
podman pull <image>
# show images
podman images
# show running containers
podman ps
# show all containers
podman ps -a

```