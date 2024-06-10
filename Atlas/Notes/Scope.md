---
parent: "[[JavaScript]]"
created: 2024-01-07
tags: 2024-01-07T21:10:08+01:00
---

## Lexical scoping (static scoping)

The scope of a variable is determined, when it's defined, not dynamically at run time.

```js
const animal = "Dog";

function printAnimal() {
  console.log(animal);
}

function alsoPrintAnimal() {
  const animal = "Burrowing Owl";
  printAnimal();
}

alsoPrintAnimal();
```

## Hoisting

Moves the variable _declarations_ (excluding its initialisation) to the top of the scope

```js
console.log(food); // -> "undefined", not an error!
var food = "french fries";
```

equals to

```js
var food;
console.log(food);
food = "french fries";
```

it does it differently for let and const, where it's hidden to the top as well, but hidden at the same time, so it's not there in practice.

## var scope

it's either globally available, or in a functional scope - nothing in between. all var declared variables are hoisted to the top.

additionally they are linked to the global object, e.G. `window` in a browser.

```js
var moinMoin = "hello friend.";
console.log(window.moinMoin); // -> "hello friend."
```

## let and const scope

respects the following scopes:

1. globally
2. function
3. block (everything in curly braces)

let is for variables that are supposed to change their value, const is immutable.
