---
parent:
  - "[[Fleeting MOC]]"
date: 2024-04-16
tags:
  - code/cs
  - code/js
modified: 2024-04-16T01:51:01+02:00
---

A curry function is a function which transform a function which accepts multiple arguments to a series of nested functions which accepts one argument at a time.
**function(a,b) => function(a)(b)**

In JavaScript we can implement the curry functions in many ways:

(source: [chatgpt](https://chat.openai.com/share/5517fbdb-45c1-4e80-8ef0-8c8f606000eb))
```js
const curry = (func)  => {
  return curried = (...args) => {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return (...nextArgs) => {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

``` 

(source: [How to Curry Functions | An Advanced Javascript Tutorial on Currying](https://www.youtube.com/watch?v=I4MebkHvj8g))

```js
const curry = (fn) => {
  return function curried(...args) {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args)
    }
    return fn(...args)
  }
}
```