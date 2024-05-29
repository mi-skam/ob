---
parent: "[[Obsidian]]"
date: 2024-01-29
tags:
  - gui
  - javascript
modified: 2024-01-31T18:45:00+01:00
---

Starts with a `dataview` block or with a `dataviewjs`

---

## Queries

- Queries accept Boolean Operators `OR` and `AND`

### LIST
Simple _List_ of articles 

> [!NOTE] List dataview of every(!) item in your vault
> <pre>
> ```dataview
> LIST
> ```</pre>

```dataview
LIST
WHERE file = this.file
```

---

### TABLE
Creates a _Table_ with parameters

> [!NOTE] TABLE with renamed parameters "AS"
> <pre>
> ```dataview
> TABLE author as Author, date as Date
> ```
> </pre>
```dataview
TABLE author as Author, date as Date
WHERE file = this.file
```

### FROM
It's the statement to specify where the Data comes _from_

Accepts 
1. Tags ( `#foo`)
2. Folders (`"Books/Literature"`) or Files (`"Dataview"`)
3. Back Links (`[[JavaScript]]`)
4. Outgoing Links (`outgoing([[JavaScript]]`)

```dataview
LIST
FROM [[OOP]]
```

### WHERE
Filters articles based on _specific_ values

> [!NOTE] TABLE that shows only entries that have not-empty `tag` metadata
> <pre>
> ```dataview
> TABLE file.tags
> FROM "Dailies"
> WHERE length(file.tags) > 0
> ```
> </pre>

```dataview
TABLE file.tags as tags
FROM "Dailies"
WHERE length(file.tags) > 0

```
### SORT
Sorts the output by a field.

- Ascending (`SORT field asc`)
- Descending (`SORT field desc`)

---

## Datatypes

_Date_
[Date2:: 2023-07-27T04:19:35.000+06:30]

_Duration_
[birthday:: 1991-09-03]
[today:: [[2023-07-27]]]
`= this.date2 - this.birthday`

_Text_ (default)
[Text1:: "foo"]

_Bool_
[Bool1:: true]

_Number_
[Number1:: 23]

_Link_
[Date1:: [[2023-07-27]] ]]


> [!WARNING] Links in Frontmatter
> This is only a link for dataview,, which means it won't show up in the outgoing links, it won't be displayed on graph view and won't be updated on i.e. a rename.

```yaml
parent: "[[parentPage]]"
```

_List_
```yaml
key3: [one, two, three]
key4: 
  - four
  - five
  - six
```

[Example1:: 1, 2, 3]
[Example2:: "yes", "no", "maybe"]

### Predefined Metadata

These values are always on every page. Very useful for querying statements in the _WHERE_ clause.
[Metadata on Pages](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-pages/)

Interesting properties are: 
- `file.name` (name as in sidebar)
- `file.tags` (All unique tags, e.g. `#Tag/1/A` will return `[#Tag, #Tag/1, #Tag/1/A]`)
- `file.etags` (Explicit tags only, e.G. `[#Tag/1/A]`)
- `file.tasks` (List of all tasks)
- `file.lists` (List of all lists)
- `this` (similar to `file`, but instead of referring to each of the selected files, it's referring to the page of the dataview code block )

## Expressions

[Reference](https://blacksmithgu.github.io/obsidian-dataview/reference/expressions/) to expressions. 

[start:: 2014-11-30T08:15:30-05:30]
[end:: 2014-11-30T08:15:30-05:30 ]


```dataview
TABLE start, end, (end - start) - dur(8 h) AS "Overtime", date(today) - date(1991-09-03)
WHERE file = this.file
```

## Use Dataviewjs to execute page specific Javascript

As `dataviewjs` allows us to execute local javascript code, we can access the [plugin api](https://docs.obsidian.md/Home) starting with `this.container`, e.G. `this.container.createEl`

> [!NOTE] Create a h1 and text block with dataview js and the plugin api

> <pre>
> ```dataviewjs
> const el = this.container;
> el.createEl("h1", { text: "Heading 1" });
> 
> const book = el.createEl("div");
> book.createEl("div", { text: "How to Take Smart Notes" });
> book.createEl("small", { text: "Sönke Ahrens" });
> ```
> </pre>