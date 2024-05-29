The **memoization** pattern is using _closures_ to avoid re-executing (costly) steps like long-running functions. There are slightly nuances.

1. Embedding a worker function `worker()` which can access a cache `const cache = {}`
2. Re-writing the function by re-defining the function.

The "calculation" function we use as an example: `fib()`

```js
function fib(n) {
  const fibNumbers = [0, 1];
  for (let i = 0; i < n; i++) {
    fibNumbers.push(fibNumbers[0] + fibNumbers[1]);
    fibNumbers.shift();
  }
  return fibNumbers[0];
}
```

## Embedded function

We use `cache` object which is in scope of `getResult()` and return it as a factory function `getResultFactory()` to the outer scope. Thus the outer `getResult()` can cache the results in `cache` .

```js
function getResultFactory() {
  const cache = {};

  const getResult = (calculate, n) => {
    let result = cache[n];
    if (typeof result === "undefined") {
      cache[n] = calculate(n);
      result = cache[n];
    } else {
      console.log("Fetching from cache...");
    }
    return result;
  };
  return getResult;
}
const getResult = getResultFactory();
```

> [!WARNING] Cache
> This general version of getResultFactory() does not cache intermediary results of e.G. recursive calls, just the final result.

To optimise for recursive functions, one would need to write a _custom_ factory function. Like this.

```js
function fibWithCache() {
  const cache = [0, 1];
  return (n) => {
    if (!(n in cache)) {
      console.log(`Computing result: ${n}`);
      cache[n] = fib(n - 1) + fib(n - 2);
    }
    return cache[n];
  };
}

const fib = fibWithCache();

console.log(fib(11)); // Computes result and returns "result"
console.log(fib(11)); // Computes result and returns "result"
```

## Self-Defining functions

```js
function getResult(calculate, n) {
  const result = calculate(n);

  // we re-write the function to NOT calculate() again
  getResult = () => {
    console.log("Fetching from cache...");

    return result;
  };
  return result;
}
```

To test our functions, we run this:

```js
console.log(getResult(fib, 11)); // Computes result
console.log(getResult(fib, 11)); // Fetches from cache and returns without recomputing
```
