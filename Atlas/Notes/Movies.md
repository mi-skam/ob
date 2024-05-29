
```dataview
TABLE
 rows.file.link AS Movie
FROM #movie
WHERE !contains(file.folder, "Template")
GROUP BY thoughts.status AS Status
```

```dataview
TABLE WITHOUT ID
 ("![](" + poster + ")") AS Poster,
 file.link AS Title,
 director AS Director,
 year AS Year,
 genre,
 "⭐ " + scoreImdb AS "IMDB",
 thoughts.rating AS Rating
FROM #movie
WHERE !contains(file.folder, "Template")
```
