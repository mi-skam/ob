

```dataview
TABLE WITHOUT ID
  file.link as Book,
  author as Author,
  year.year as Year,
  thoughts.rating as Rating
FROM "Books"
WHERE contains(author, "")
```