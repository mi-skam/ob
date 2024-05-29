---
date: 2023-12-06
tags:
---

```dataview
TABLE WITHOUT ID file.link AS Name, length(file.outlinks) AS "Count of Outbound Articles"
FROM "Notes"
WHERE contains(file.name, "MOC") AND file.path != this.file.path
SORT file.name ASC
```