---
parent: "[[Fleeting MOC]]"
date: 2024-01-10
tags:
  - 🦠
modified: 2024-02-18T17:00:00+01:00
---

It's firm's Tablet running Android 12 with the Samsung OneUi 4.1. As a former flagship Tablet it's still running beautifully, but a lot of crap is running on the system.

## Debloat

To get parts of the pre-installed apps. One can use [[Android|Android's]] `adb shell` command to remove packages.

Requirements:
1. Enable developer tools
2. Enable remote usb debugging
3. Install adb tools

Login to your device
```shell
adb shell

```

And follow the list to debloat
[^1]. To recover from losing Dex, reinstall the following packages

```shell
cmd package install-existing com.sec.android.app.dexonpc
cmd package install-existing com.sec.android.desktopmode.uiservice
cmd package install-existing com.sec.android.app.desktoplauncher
cmd package install-existing com.samsung.desktopsystemui
```

[^1]: https://github.com/carafizi1/debloat-samsung-android/blob/master/debloat.txt