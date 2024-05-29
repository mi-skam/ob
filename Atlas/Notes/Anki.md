---
aliases:
publish: true
date: 2023-09-20
---
# Anki

## Issues with default Shortcuts

When inserting symbols in cards, they might collide with default keyboard shortcuts as `@` or `-` to burry or suspend cards. 

### Use the "Custom shortcuts extension"
To change the keyboard shortcuts in Anki, you'll need to install an add-on as the default version of Anki doesn't provide an option for this. Here's how to do it:

1. Open Anki.
2. From the menu, select `Tools > Add-ons`.
3. In the add-ons window, click on `Get Add-ons...`.
4. You'll need to enter the code of the add-on you want to install. For customizing keyboard shortcuts, you can use `Customize Keyboard Shortcuts` add-on. Its code is `24411424`.
5. Enter the code `24411424` in the box and click `OK`.
6. Anki will download the add-on and ask you to restart the application. After restarting Anki, the add-on will be installed and ready to use.

To customize the keyboard shortcuts:

1. Go to `Tools > Add-ons`.
2. Select `Customize Keyboard Shortcuts` and click on `Config`.
3. A new window will open where you can customize your keyboard shortcuts.

### Examples for unmapping
```
...
"reviewer bury card": "<nop>",
"reviewer bury note": "<nop>",
"reviewer suspend card": "<nop>",
"reviewer suspend note": "<nop>",
...
```