---
created: 2024-04-22 2024-04-22T18:06:59+02:00
tags:
  - code/tutorial
languages:
---

Open this path in the registry editor
`HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\HID`

Expand the key (folder) that matches the "VID ID" of your mouse — for example, **VID_0E0F&PID_0003&MI_01** (you get this via device manager)

Change **FlipFlopWheel** DWORD and set the value from **0** to **1**.

Restart the computer.

![[4g51fwf5.bmp]]

---

[[Tutorials]]
