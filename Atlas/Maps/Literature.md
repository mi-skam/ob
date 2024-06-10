---
in: "[[Collections]]"
related: 
tags:
  - "#map/view"
created: 2024-05-30
---
We add Notes to `Literature` from [[Zotero]] using the `Cmd-Shift-z` shortcut, this will create a new note based on the [[ZI - Literature Note Template]].

This note collects all notes where the `in` property says `Literature`.

```dataview
TABLE WITHOUT ID
	file.link as Note,
	created as Created
WHERE
	contains(in,this.file.link) and
	!contains(file.name, "Template")
SORT created desc
```
