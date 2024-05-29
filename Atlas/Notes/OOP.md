## Objektorientierter Still

1. you couple data with the methods
2. composition with new classes that exend base classes.
3. prototypical inheritance

## Syntax

### "constructor functions" ( old style)

Those constructor functions are used to create instance objects.  The convention is to write the functions upper-case to avoid confusion with common functions.

old style:
```js

// 1. This is the constructor function
// all properties live in the Object
function Triangle(a, b) {
	this.a = a;
    this.b = b;
}
// 2. Those methods are shared with all other Objects
// This avoids code duplication. It's like class methods / properties
Triangle.prototype.getArea = function() {
  return (this.a * this.b) / 2;
}

Triangle.prototype.getHypotenuse = function() {
  return Math.sqrt(this.a ** 2 + this.b ** 2);
}
```
### 'class' keyword

The *class* keyword is a syntactic sugar to ease use of OOP in JS and to make it easier for developers coming from other languages. Under the hood it's still prototypical inheritence.

The same example as above but written as a class

```js
class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}
```

``
### 'new' keyword

The `new` operator takes a factory function as input and returns an object,  with the following rules:
1. create an empty object `{}`
2. setting the context to this object `this`
3. return the object
4. creates a link to the object's prototype 🚨‼️

```js
function House() {
  this.rooms = 4;
}
const house = new House();
console.log(house.rooms) // -> 4
```

```js
class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}
```

## Static methods and properties

Usage:
1. group methods under one name (namespacing)
2. create factory functions

### grouping methods

```js
class MyMath {
  static add(a, b) {
    return a + b;
  }
  static multiply(a, b) {
    return a * b;
  }
  // many more static functions
  // ...
}

```

### factory functions
```js
class Cat {
  // static property: only lives on Cat, like Cat.specie
  static specie = "felis catus";

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  static meow() {
    return "MEOW MEOW MEOW";
  }
  // static function: factory function to create a new cat with a random name and "unknown" breed
  static registerRandomCat() {
    function choice(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }
    const names = [
      "Muffin",
      "Biscuit",
      "Sleepy",
      "Dodo",
      "Princess Butterface",
    ];

    return new Cat(choice(names), "unknown");
  }
}
```




## Getters and Setters

Examplesto use methods as if they were properties

```js
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newName) {
    const [firstName, lastName] = newName.trim().split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

```js
class Triangle {
  // DRY the validation of acceptable side values
  setSide(value) {
    if (!Number.isFinite(value) || value <= 0)
      throw new Error(`Invalid value: ${value}`);
    return value;
  }
  constructor(a, b) {
    this._a = this.setSide(a);
    this._b = this.setSide(b);
  }

  // _a is only for internal use
  // a is for public access
  get a() {
    return this._a;
  }

  set a(value) {
    this._a = this.setSide(value);
  }

  // like _a and a
  get b() {
    return this._b;
  }

  set b(value) {
    this._b = this.setSide(value);
  }

  get area() {
    return (this._a * this._b) / 2;
  }

  get hypotenuse() {
    return Math.sqrt(this._a ** 2 + this._b ** 2);
  }
}

const triangle = new Triangle(5, 6);
console.log(triangle.area) // 15
console.log(triangle.hypotenuse) // 7.810249675906654
triangle.a = 222 // 222
console.log(triangle.area) // 555
triangle.a = -3 // // Uncaught Error: Invalid a: -3
const triangle2 = new Triangle(-3, 4)
// Uncaught Error: Invalid a: -3
```

## Public class fields

Basically they are creating values for each class instance as the `constructor()` method does.  They may be set right at the top where usually *static properties* are set. 

```js
class Cat {
  static numOfCats = 0; // static property (class property)
  name; // public class field, every instance has this property with the value 'undefined'
  numLegs = 4; // same as name, but has a default value
}
```

Usage:
- Documentation: It's easier to read all properties which are in the class / instance
- Clean-up the `constructor()`, all values which don't need to have passed values by the constructor can be moved up there
- Provide default values

## Private class fields

^1809c0

They are private values of instances. 

Before private fields were part of the language, there was only a convention to declare variables for internal use by prefixing it with a underscore (e.G. `const _internal = true`). This didn't stopped accessing the values from outside of the instance if somebody really wanted it to do. That's where private class fields come into play

### Old vs new private value for instances

```js

class hideItOld {
  constructor(permissionFlag) {
    this._internalPermissions = permissionFlag;
  }
  status() {
    console.log(this._internalPermissions);
  }
}

class hideItNew {
  #internalPermissions; // required!
  constructor(permissionFlag) {
    this.#internalPermissions = permissionFlag;
  }
  status() {
    console.log(this.#internalPermissions);
  }
}
const hide1 = new hideItOld(true);
const hide2 = new hideItNew(false);
hide1.status() // -> true
hide2.status() // -> false
hide1._internalPermissions = false; // is not protected!
hide1.status() // -> false
hide2.#internalPermissions = false; // does not work!

```

## Private methods

The same as [[#Private class fields]], but for methods. Prefix a function like `#someMethod()` and it will be accessible only from within the instance.

## 'this' keyword

The keyword `this` is a tricky beast in js. Depending on the context it leads to different behaviour. **It's evaluated at the point of function execution**
1. defined inside of an object it refers to the object. If defined inside of an object, but called in a different context (e.G.  created a reference to another scope), this changes to that new context
2. all functions are implicit methods on the *global object* (depending on the js interpreter), so `this` inside of "simple functions" refers to that context
3. if this is defined inside of class methods, and the method is called on *nothing* then `this` does not refer to *global object* but is *undefined* 💣💥
### call

With call we can provide a different *context* to a *method*

`someMethod.call(newContext)` and if this method requires arguments, just pass them, as additional parameters `someMethod.call(newContext, arg1, arg2, ...)` 

### apply

It has almost the same signature as `call`, but instead of a series of arguments, it expects an array as the last argument, which it then passes as single arguments to `someMethod`

`someMethod.apply(newContext, arr)`

### bind

It creates a new function with the provided *context* perma-bound.

`const someMethodWithNewConext = someMethod.bind(newContext)`
`someMethodWithNewContext()`

But it's not only used for binding a different *context*, one can also use it, to pre-populate values, ignoring a different context.

`const someMethodValue2 = someMethod.bind(null, 2);`

Comes in hand when dealing with *indirect function calls*

![[JS Function calls|500]]

### arrow functions

They don't change `this`, so we don't need to play around with contexts.