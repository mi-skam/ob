---
aliases: 
publish: true
created: 2023-09-20
---
# JSDoc

## Typescript configuration for JSDoc
We still use typescript for JSDoc (type checking, type inference)
```shell
npm i -D typescript
```

tsconfig.json
```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "strict": true,
  }
}
```

## @type
Allows to define **primitive** and **compound** types and **union** types. 

```js
/** @type {string} */
let myString = 'Hello World';

/** @type {number} */
let myNumber = 1;

/** @type {number[]} */
let myNumbers = [1, 2, 3];

/** @type {{a: string, b: string}} */
let myObject = {a: "hi", b: "world"}

/** @type {HTMLVideoElement|null} */
const webcam = document.querySelector("#webcam");

```

## @typedef and @property
Defines new types, which can then be used with `@type`

```javascript
/**
  * @typedef {Object} Point
  * @property {number} x - x coordinate
  * @property {number} y - y coordinate
  */

/** @type {Point} */
let myPoint = {x: 10, y: 20};
```

## @param and @return
Defines optional and mandatory parameters of a function.
1. mandatory: `@param {string} param1
2. optional: `@param {string} [param2]`

`@return` defines the return type.

```js
/**
 * @param {string} param1 - A string parameter
 * @param {number} [param2] - A optional number parameter
 * @returns {string}
 */
function myFunction(param1, param2) {
  return param1 + (param2 || '');
}
```

## @type any

Any-Type as defined like `/** @type{*} */` accepts any type.

## Use typescript syntax
```js
/** @type {(price: number, isOnSale: boolean) => number} */
let calculateTotalPrice;

calculateTotalPrice = (price, isOnSale) => {
  const tax = .07;
  let discount = 0;

  if (isOnSale) {
    discount = .01;
  }

  return (price - (price * discount)) * (1 + tax)
}
```

## Use d.ts files

```typescript
export type Car = {
  make: string,
  model: string,
  year: number
}
```

```javascript
/**
 * @param {import("./car").Car} car
 */
function printCarDetails(car) {
  console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`)
}
```