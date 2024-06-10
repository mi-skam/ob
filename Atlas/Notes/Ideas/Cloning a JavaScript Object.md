---
in: "[[JS and TS Fullstack Development]]"
created: 2024-06-10
tags:
  - code/js
---
We use [[JSON stringify]] and its inverse `JSON.parse()` to create a _deep clone_ of a JavaScript Object.
 
```js
const foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

const fooJSON = JSON.stringify(foo);
const fooCopy = JSON.parse(fooJSON);

console.log(fooCopy);
```
