```dataview
TABLE
  rows.file.link AS Book
FROM #book 
WHERE !contains(file.folder, "Template")
GROUP BY thoughts.status AS Status
```

```dataview
TABLE WITHOUT ID
  ("![](" + poster + ")") AS Poster,
  file.link as Title,
  ("[[" + author + "]]") as Author,
  year as Year,
  genre as Genre,
  thoughts.rating as Rating
FROM #book
WHERE !contains(file.folder, "Template")
```
