---
in: "[[Collections]]"
related: 
tags:
  - "#map/view"
created: 2024-05-30
---
To add a new person, create a new Note with [[People Template]].

This note collects all notes where the `in` property says `People`.

```dataview
TABLE WITHOUT ID
	file.link as Note,
	created as Created
WHERE
	contains(in,this.file.link) and
	!contains(file.name, "Template")
SORT created desc
```
