---
parent: "[[Fleeting MOC]]"
date: 2024-04-09
modified: 2024-04-09T14:41:45+02:00
tags:
  - code/snippet
languages: javascript
---

```js
const videoEl = document.querySelector(`#${videoId}`) ||
      (() => {
        const newVideoEl = document.createElement('video');
        newVideoEl.setAttribute('id', videoId);
        document.body.appendChild(newVideoEl);
        return newVideoEl;
      })();
```
---
[[Code snippets]]