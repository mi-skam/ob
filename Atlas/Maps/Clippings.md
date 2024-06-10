---
in:
  - "[[Collections]]"
related:
tags:
  - "#map/view"
created: 2024-05-30
---

I use kepano's [[Clippings/Obsidian Web Clipper]] to import ressources into [[Clippings]]. 

Here are our modifications to fit the clippings into our system. [[clipper.js]]




This note collects all notes where the `in` property says `Clippings`.

```dataview
TABLE WITHOUT ID
	file.link as Note,
	created as Created
WHERE
	contains(in,this.file.link) and
	!contains(file.name, "Template")
SORT created desc
```
