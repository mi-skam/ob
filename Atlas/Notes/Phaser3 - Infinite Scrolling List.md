---
parent:
  - "[[Fleeting MOC]]"
date: 2024-04-11
modified: 2024-04-11T01:16:16+02:00
tags:
  - code/tutorial
  - code/phaser3
languages: javascript
---

To create an infinite scrolling list, you need a difference between an object (here in our snippet `platform`) and a camera. If the difference between those two object is larger than a threshold (here 700px), than the object resets its y-coordinate to the top.

```js
  update(_, delta) {
    this.platforms.children.iterate(platform => {
      // how many units the camera is traveling in y-direction
      const scrollY = this.cameras.main.scrollY;
      // is platform lower than 700 units under scrollY?
      if (platform.y >= scrollY + 700) {
        // if so, put it between 50 and 100 units above platform
        platform.y = scrollY - Phaser.Math.Between(50, 100);
        platform.body.updateFromGameObject();
      }
    });
  }
```

---
[[Tutorials]]