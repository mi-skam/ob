---
in:
  - "[[Collections]]"
related: 
tags:
  - "#map/view"
created: {{date}}
---
This note collects all notes where the `in` property says `{{title}}`.

```dataview
TABLE WITHOUT ID
	file.link as Note,
	created as Created
WHERE
	contains(in,this.file.link) and
	!contains(file.name, "Template")
SORT created desc
```
