---
in:
  - "[[Collections]]"
related: 
tags:
  - "#map/view"
created: 2024-05-29
cssclasses:
  - wide
---
We add books using the `Book Search` Addon for [[Zotero]]. `Cmd-Shift-N`

This note collects all notes where the `in` property says `Books`.

> [!book]+ Books
> Books sorted by `Ratings` & `YearXP`
> ```dataview
> TABLE WITHOUT ID
> 	year as Year,
> 	"![|60](" + cover + ")" as Cover,
> 	title as Title,
> 	join(list(by)) as Author,
> 	yearXP as YearXP,
> 	rating as Rating
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT rating desc, year asc
> ```


```dataview
TABLE WITHOUT ID
	year as Year,
	"![|60](" + cover + ")" as Cover,
	file.link as Note,
	rating as Rating,
	created as Created
WHERE
	contains(in,this.file.link) and
	!contains(file.name, "Template")
SORT created desc
```
