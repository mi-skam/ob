#linux 
### Reload Udev rules without reboot

```bash
udevadm control --reload-rules && udevadm trigger
```