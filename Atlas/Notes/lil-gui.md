---
parent: "[[Obsidian]]"
date: 2024-01-29
tags:
  - gui
  - javascript
modified: 2024-01-29T16:59:51+01:00
---

>[!INFO]
> Repo with Notes [mi-skam/learn-lil-gui](https://github.com/mi-skam/learn-lil-gu
> i)
> Upstream [documentation](https://lil-gui.georgealways.com/)


Creates a floating panel to adjust parameters in web projects. Drop-In replacement for `dat.gui`.

## Minimal Example

https://github.com/mi-skam/learn-lil-gui/tree/main/pages/minimal

We install lil-gui via npm `npm i -D lil-gui`. To make things easy we create an extra js file like `controlPanel.js` with the following content

```js
import GUI from 'lil-gui'

const gui = new GUI();
gui.add(document, 'title') // -> document.title
```

This creates a small control in the top right corner, where we can change the value of the current's document title. 




