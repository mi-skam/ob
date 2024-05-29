---
parent:
  - "[[Fleeting MOC]]"
date: 2024-04-11
modified: 2024-04-15T21:58:49+02:00
tags:
  - code/snippet
  - code/deno
languages: javascript
---

To also type-check javascript files on a file basis

```js
// @ts-check
```

per project:

`deno.json`: 
```json
{
  "compilerOptions": {
    "checkJs": true
  }
}
```

---
[[Code snippets]]