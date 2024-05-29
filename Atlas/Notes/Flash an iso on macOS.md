
You cannot simply _dd_ a iso to an external medium unless it's no longer mounted, which happens automatically after the device got inserted. Ejecting not only unmounts the device, but also removes it from the device tree. So what to do?

```sh
# get an overview of all devices
diskutil list

...
/dev/disk4 (synthesized):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      APFS Container Scheme -                      +31.7 GB    disk4
                                 Physical Store disk5s2
   1:                APFS Volume Untitled                1.0 MB     disk4s1

/dev/disk5 (external, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *32.0 GB    disk5
   1:                        EFI EFI                     209.7 MB   disk5s1
   2:                 Apple_APFS Container disk4         31.7 GB    disk5s2
...

# In this case there is a virtual and a physical device which I had to unmount.
diskutil unmountDisk /dev/disk4
diskutil unmountDisk /dev/disk5

# Now you can use dd as usual
sudo dd if=<input> of=<output> bs=1M

```