---
in: "[[JS and TS Fullstack Development]]"
created: 2024-06-10
tags:
  - code/js/lang
cssclasses:
  - wide
---
 
Asynchronous Code is one of the most typical parts of JavaScript, as it is the only way (there are exceptions) to execute code in a pseudo-parallel way, as JS is running as a single thread.

## Callback Functions

Historically there have been `Callback Functions`  to run code in parallel with a uncertain runtime. And also when called by Timers and Events. 

The drawback is the resulting nesting of callback into callback into callback..., which makes code reading rather annoying and tedious, especially if combined with error handling.

![[Pasted image 20231023034239.png]]
`````col
````col-md
flexGrow=2
===
```javascript
function loadScript(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  document.head.append(script);

  script.onload = () => callback(script);
}

loadScript('./src/js/my-script.js', script => {
  console.log(`Cool, the ${script.src} is loaded`);
  // eslint-disable-next-line
  console.log(`from my-script.js: ${foo()}`);
});

function foo() {
  return 'foo';
}

```
````
````col-md
flexGrow=1
===
```javascript
let script = document.createElement('script');

// can load any script, from any domain
script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"
document.head.append(script);

script.onload = function() {
  // the script creates a variable "_"
  alert( _.VERSION ); // shows library version
};
```
````
`````

## Promises

### Creating promises

Simple example which creates a wrapper around `setTimeout()`, so that you can wait without using callbacks.

```js
function wait(durationMs) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("waited :-)");
    }, durationMs);
  });
}

async function waitDemo() {
  console.log("Hi");
  const result = await wait(2000);
  console.log(result);
}

```


### Quirks

Promises sind nicht **lazy!**

Wenn man einen Rückgabewert eines Promise in einer Function returned, dann muss sowohl der Wert innerhalb des Promise `.then` callbacks also auch der Aufruf des Promise selber returned werden. In dem Beispiel sieht man in der Function `stupidProxy()` Hätte man nur ein return, wäre `result` in `stupidOutput()` nicht **Done.**

```javascript
const waitForTimeout = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done.");
    }, 1000);
  });
};

const stupidProxy = async () => {
  // hier is der doppelte return, der gezeigt werden soll
  return waitForTimeout().then((result) => {
    return result;
  });
};

const stupidOutput = async () => {
  let result = await stupidProxy();
  alert(result);
};

stupidOutput();
```

## Await / Async

Those keywords are syntactic sugar like [[OOP#'class' keyword]], under the hood it's still promise based. It looks more like *conventional* js code. 

Comparison

| Promise                                      | Async/Await               | Description                                                                                                                                                                                                             |
|:-------------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `new Promise((resolved, rejected) => {...})` | `async function(){...}`   | The body of the async function is the same as the callback of the promise constructor.                                                                                                                                  |
| `.then((value) => {...})`                    | `const value = await ...` | In promises the returned value of a promise is accessible via a parameter to its callback, in async/await the await key "waits" until the async function is returned and passes it to the value left of the equal sign. |
| `.catch((err) => {...})`                       | `try {} catch(err) {...}` | The `.catch()` clause is mapped to a try-catch construct.                                                                                                                                                               | 
### Async IIFE's

In einigen JS Umgebungen ist es *nicht* gestattet asynchrone Funktionen im Module-Scope auszuführen, eine IIFE - also eine Function, die direkt nach der Definition aufgerufen wird, umgeht das. 

```js
const url = "https://api.thecatapi.com/v1/images/search";
(async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data[0].url); // cat image url
 })();
```

## Patterns

### Sequential 

If you run a series of async operations, e.G. a chain of `<promise>().then().then()...` then you can push the results in each then-clause to a common result Array.

### Promise.all

`Promise.all(arrayOfPromises)` creates a promise that handles an array of promises and resolves to a value, if **all** of the ran successfully, otherwise an error is to be handled. 

It comes in handy if you have to run something specifically after a lot of promises have to be run. 

### Promise.allSettled
Like [[#Promise.all]], but also resolves successfully, if one of the promises were rejected.

### Promise.race
Resolves to the first fulfilled promise of a list of promises or rejects the first rejected promise whatever comes first.
