---
tags: programming
---
The `g.next()` method runs until it reaches the `yield` keyword. `yield` interrupts the execution flow and returns the value on the _right_ hand side as an property of `{ value: ..., done: ... }` and stops there. It doesn't even evaluate the expression to the _left_ side. When called with an argument, it replaces the expression with the value of the argument.

```js
/** 10 **/ function* calculate() {
  /** 20 **/ yield 10;
  /** 30 **/ const result = yield 5;
  /** 40 **/ console.log(`Result = ${result}`);
  /** 50 **/
}

// creates a generator
const g = calculate();
// execute the function until line 20 and returns {value: 10, done: false}
const res1 = g.next();
// continues the execution flow until line 30 and returns {value: 5, done: false}
const res2 = g.next();
// 1. replaces yield 5 with res1.value + res2.value => 10 + 5 => const result = 15
// 2. runs until the end of the function as there is no yield left => generator is exhausted
// 3. prints "Result = 15"
g.next(res1.value + res2.value);
```

### Example with a command pattern

The idea is that `robot()` and `commander()` are communicating back and forth.

| command              | direction            | description                                                                                                       |
| -------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------- |
| commander(gen, ...)  | commander->commander | recursive call to commander to pass results of the single commands back                                           |
| `yield`              | robot -> commander   | All data right of yield will be effectively returned to the variable left of `gen.next()`                         |
| `gen.next(passBack)` | commander -> robot   | `passBack` will be returned to the variable left of yield. Continues to the next `yield` or end of the generator. |

```js
commander(robot());
function* robot() {
  const catURL = yield ["get-cat"];
  const imgTag = yield ["format", catURL];
  console.log(imgTag);
}
async function commander(gen, passBack) {
  let state = gen.next(passBack);
  switch (state.value ? state.value[0] : null) {
    case "get-cat":
      const res = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await res.json();
      return commander(gen, data[0].url);
    case "format":
      return commander(gen, `<img src="${state.value[1]}" />`);
  }
  // TODO: When do we get here?
  if (!state.done) {
    commander(gen);
  }
}
```


