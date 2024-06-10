---
aliases: Rest operator, spread operator
---

## Overview

| feature | beschreibung                                  |
| ------- | --------------------------------------------- |
| `!!`    | Double negation operator.                     |
| `?.`    | Optional chaining operator.                   |
| `...`   | The spread operator expands iterable objects. / Destructuring |
|??| Nullish Coalescing |


## Double negation operator

Um aus Werten Booleans zu erzeugen, nutzt man gerne den Negations-Operator zweimal hintereinander. Aus `null`, `undefined`, and `false` wird `true`, and die meisten anderen Werte werden `false`. Danach dreht man es wieder um, und man hat entweder `true` oder `false`.

## Optional chaining operator

When you call `navigator.mediaDevices?.getUserMedia`, it means that `getUserMedia` will only be referenced if `mediaDevices` is not null or undefined. If `mediaDevices` is null or undefined, it will short-circuit the evaluation and return undefined.
This is to prevent an Exception thrown.

```js
const user = {
  name: "Rubens",
};
// returns undefined
console.log(user?.skills?.main);
// throws an exception 🤮
console.log(user.skills.main);
```

## Spread operator

Construct a new object and add / update some values.

```js
const name = {
  firstName: "Krasimir",
  lastName: "Tsonev",
};
// Name gets expanded, all properties are in the scope of profile then.
const profile = { age: 36, ...name };

// Update age
const updates = { age: 37 };
const updatedProfile = { ...profile, ...updates };
console.log(updatedProfile); // age=37
```

Pass multiple arguments to a function

```js
const values = [10, 33, 42, 2, 9];
console.log(Math.max(...values));
```

## Destructing

Extract (partial) values to individual variables.

```js
const name = {
  firstName: "Krasimir",
  lastName: "Tsonev",
};
// Extract the properties firstName, lastName
const { firstName, lastName } = name;
console.log(firstName, lastName);

// Extract the same properties, but use different variable names
const { firstName: first, lastName: last } = name;
console.log(first, last);
```


## Nullish Coalescing

It's similar to a logical or (`||`) that it returns the right hand side of an expression, if the left hand side one is false. The difference is that that it only treats `undefined` and `null` as false values

```js
let a = undefined;
let b = null;
let c = 0;
let d = false;
let e = ""

let s = "second"

console.log(`a: ${a} \n (a || second => ${a || s}) (a ?? s => ${a ?? s})`)
console.log(`b: ${b} \n (b || second => ${b || s}) (b ?? s => ${b ?? s})`)
console.log(`c: ${c} \n (c || second => ${c || s}) (c ?? s => ${c ?? s})`)
console.log(`d: ${d} \n (d || second => ${d || s}) (d ?? s => ${d ?? s})`)
console.log(`e: ${e} \n (e || second => ${e || s}) (e ?? s => ${e ?? s})`)
```