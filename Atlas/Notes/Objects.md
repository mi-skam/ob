---
parent:
  - "[[JavaScript]]"
created: 2023-08-15
tags: []
---

# Objects

Objects are collections of key-value pairs.

## Creation

We can create Objects with many different ways:

1. Constructor functions
2. Object literals
3. `Object.create()`

## Iteration

To iterate over the keys or values of an object, you can use `for...in` loops or the `Object.keys`, `Object.values`, or `Object.entries` methods.

Using `for...in` (for keys):

```javascript
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key);
}
```

Using `Object.keys` (for keys):

```javascript
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
keys.forEach((key) => {
  console.log(key);
});

// with a for-of-loop
for (let key of keys) {
  console.log(key);
}
```

Using `Object.values` (for values):

```javascript
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
values.forEach((value) => {
  console.log(value);
});
```

Using `Object.entries` (for key-value pairs):

```javascript
const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
entries.forEach(([key, value]) => {
  console.log(key, value);
});
```

[[Object.assign]]
