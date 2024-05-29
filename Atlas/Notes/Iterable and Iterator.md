We can use this protocol to iterate over custom data structures. To adhere to the *iterable protocol* one needs to create a _special object_ using the **[Symbol.iterator]** property. This property needs to adhere to the *iterator protocol*

### Iterable Protocol

```js
const myCustomIterable = {
  [Symbol.iterator]: function () {
    return myCustomIterator;
  }
};
```

### Iterator protocol

```js
const myCustomIterator = {
  step: 0,
  next: function () {
    this.step++;
    if (this.step === 1) return { value: "Hi.", done: false }
    else return { value: undefined, done: true }
  }
};
```

As we see, the *iterator* will be part of the *iterable*.

To use it, we can access the values either via a **for-of loop** or **destructuring**

```js
for (const word of myCustomIterable) {
  console.log(word);
}

// or

const [greeting] = myCustomIterable;
console.log(greeting);
```


There is a special type of functions called [[Generators]] that return an iterable. They make it easier to create iterators and make the code less verbose.

Example of `myCustomIterable` expressed as a **generator function**
```js
function* myCustomIterable2() {
  yield "Hi."
}
```

### Examples

**Emulation of an Array**

```js
const myArr2 = {
  data: ["HTML", "PHP", "JS"],
  [Symbol.iterator]: function () {
    let i = 0;
    return {
      next: () => {
        return {
          value: this.data[i++],
          done: i > this.data.length,
        };
      },
    };
  },
};
```

Use it for **custom destructing**

```js
const user = {
  name: { first: "Krasimir", last: "Tsonev" },
  position: "engineer",
  [Symbol.iterator]: function () {
    let i = 0;
    return {
      next: () => {
        i++;
        if (i === 1) {
          return { value: `${this.name.first} ${this.name.last}`, done: false };
        } else if (i === 2) {
          return { value: this.position, done: false };
        }
        return { done: true };
      },
    };
  },
};
const [name, position] = user;
console.log(`${name}: ${position}`); // Krasimir Tsonev: engineer
```

The same as a generator function
```js
function* getPerson({first, last, position}) {
  yield `${first} ${last}\n`
  yield position
}
const [name, job] = getPerson({first: "Krassimir", last: "Tsonev", position: "engineer"})
console.log(name, job)
```