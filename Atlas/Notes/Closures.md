---
parent: "[[JavaScript]]"
date: 2024-01-07
tags:
  - 🦠
modified: 2024-01-07T21:39:52+01:00
---

Accessing some nested variable, even if the scope is left, like a local variable in a function after the function is invoked.

```js
function idGenerator() {
  let count = 1;
  return function() {
    return count++;
  }
}
const nextId = idGenerator()
let id = nextId();
console.log(id)
id = nextId();
console.log(id)
id = nextId();
console.log(id)
```

You can create *private* variables.

```js
const counter = (function() {
  let count = 0;
  return {
    plus1() {
      return ++count;
    },
    minus1() {
      return --count;
    },
    value() {
      return count;
    }
  }
})()

console.log(counter.value())
console.log(counter.plus1())
console.log(counter.plus1())
console.log(counter.plus1())
console.log(counter.minus1())

```

Allows to create *factory functions*

```js
function toThePowerOf(exp) {
  return function(n) {
    return n ** exp;
  }
}

const square = toThePowerOf(2);
const cube = toThePowerOf(3);

console.log(square(3));
console.log(cube(3));
```