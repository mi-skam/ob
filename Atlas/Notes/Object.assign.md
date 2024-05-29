
Like the spread [[Operator]] we can use to construct new Objects from already existing ones with `Object.assign`.

One advantage of `Object.assign()` is, that it's faster than the spread-operator, while the latter can look more concise and it's a bit more versatile as it can be used in lists as well.

```js
const objA = {'a': 'DEFAULT', 'c': 'DEFAULT'}
const objB = {'a': 'mymy', 'b': 'pypy'}

const mergedObj = {...objA, ...objB}

const mergedObj2 = Object.assign(objA, objB)
console.log(mergedObj, mergedObj2)

// Doesn't work, as the dot operator is not allowed in this place
//let myObj3 = { Object.assign(myObj, objA) }
```

Creates an object, depending on the evaluation of accessToken ()
```js
function createUser(accessToken) {
  const user = Object.assign(
    { name: "Krasimir" },
    // if accessToken is false/falsy Object.assign ignores it
    accessToken && { accessToken } // shorthand for: accessToken: accessToken
  );
  return user;
}
console.log(createUser("xxx"));

```