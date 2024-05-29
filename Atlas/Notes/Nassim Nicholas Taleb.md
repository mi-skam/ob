---
tags: author
---
```dataview
TABLE WITHOUT ID
  file.link as Book,
  author as Author,
  year.year as Year,
  thoughts.rating as Rating
FROM #book 
WHERE contains(author, "Taleb")
```
