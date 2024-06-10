---
in:
  - "[[Collections]]"
related: 
tags:
  - "#map/view"
created: 2024-05-31
obsidianUIMode: preview
---
This note collects all notes where the `in` property says `Meetings`.

```dataview
TABLE WITHOUT ID
	file.link as Note,
	created as Created,
	one-liner as Summary,
	participants as Participants
WHERE
	contains(in,this.file.link) and
	!contains(file.name, "Template")
SORT created desc
```
