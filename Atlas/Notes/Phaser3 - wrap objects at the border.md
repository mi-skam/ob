---
parent:
  - "[[Fleeting MOC]]"
date: 2024-04-11
modified: 2024-04-11T01:16:08+02:00
tags:
  - code/tutorial
  - code/phaser3
languages: javascript
---

We wrap the object on the ...
- left by comparing it with `-halfWidth`
- right by comparing it with `gameWidtho + halfWidth`

This is symmetrical and looks like this:

![[Drawing 2024-04-11 01.02.15.excalidraw]]

```js
  horizontalWrap(sprite) {
    const halfWidth = sprite.displayWidth * 0.5;
    const gameWidth = this.scale.width;
    if (sprite.x < -halfWidth) {
      sprite.x = gameWidth + halfWidth;
    } else if (sprite.x > gameWidth + halfWidth) {
      sprite.x = -halfWidth;
    }
  }
```
---
[[Tutorials]]