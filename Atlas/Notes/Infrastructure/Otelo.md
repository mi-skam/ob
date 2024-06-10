---
comment:
  - HP N54L server (1*256GB SSD, 1*Raid-1 2TB, 1*Raid-1 8TB)
roles:
  - vm-host, container-host
os: proxmox
ip: 192.168.178.99
status: inactive
created:
  - - 2023-08-02
---


# [[Otelo]]

## Log

## IBM P410 Raid Controller commands

- needs **hpssacli** utility (thank god it’s in the repos of proxmox)
    
- Get a configuration overview
    
    ```shell
    hpssacli "ctrl all show config"
    ```
    
- Scan for new Disks
    
    ```shell
    hpssacli rescan
    ```
    
- Check controller status
    
    ```shell
    hpssacli ctrl all show status
    ```
    
- Check status for all logical disks
    
    ```shell
    hpssacli ctrl slot=1 ld all show status
    ```
    
- Check status for all _**physical**_ disks
    
    ```shell
    hpssacli ctrl slot=1 pd all show status
    ```
    
- Create a RAID1 set
  ```shell
  hpssacli ctrl slot=1 create type=ld drives=2I:0:7,2I:0:8 raid=1
	```

## Tasks

- [ ] Disassemble the device
- [ ] Move Date from the disks