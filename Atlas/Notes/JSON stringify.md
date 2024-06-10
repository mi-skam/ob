Converts a JavaScript Object to JSON:

```js
const user = {
  name: "Molecule Man",
  age: 29,
  secretIdentity: "Dan Jukes",
  powers: ["Radiation resistance", "Radiation blast"],
};
// JSON.stringify(object, replacer, indentation)

// everything will be printed out in one line!
console.log(JSON.stringify(user));
console.log(JSON.stringify(user, null, 2));
```

Use a replacer function

```js
function replacer(_, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

const foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

console.log(JSON.stringify(foo, replacer, 2));
```
