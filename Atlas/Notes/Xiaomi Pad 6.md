---
parent: "[[Fleeting MOC]]"
date: 2024-02-18
tags:
  - 🦠
modified: 2024-02-18T17:05:44+01:00
---

It's the model we use for [[AiA MOC]] project. [[Android]] tablet.

## ADB connectivity

To get access to chrome's remote debugger, one needs to pair the device with the computer

### Enable ADB

1. Enable developer mode
2. Enable debugging via USB
3. Enable debugging via WiFi
4. Disable time out for adb authorisation
5. In WiFi Debugging 
	1. Pair via Code -> adb pair ip:port (the one you see in this menu)
	2. Connect -> adb connect ip:port (the one in the wifi debugging submenu)

### Chrome remote debugging

Open the following url in Chrome: `chrome://inspect/#devices`