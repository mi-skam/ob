---
parent: "[[JavaScript]]"
created: 2024-01-04
tags: 
modified: 2024-06-05T14:29:30+02:00
---

## Use bind to use callbacks with "this"

When a event listener lick `click` triggers a method, it provides it with the html element of the button as a _new context_, which is not always what one has in mind. It's easy to fix by adding [[OOP#bind|.bind()]] to the callback

```js
const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    console.log("THIS is: ", this);
    console.log(`${this.name} sings LA LA LA`);
  },
};

// requires <button id="clickMe">
const btn = document.querySelector("#clickMe");

// otherwise this would refer to the buttonEl
btn.addEventListener("click", conan.sing.bind(conan));
```

## Use [[Closures]] to keep state private

```js
// we emulate three button elements
const button1El = "btn1";
const button2El = "btn2";
const button3El = "btn3";

function createCounterButton(id) {
  const button = id; // would be document.getElementById
  let count = 0;

  // would be an event listener
  return {
    // simulate click
    click() {
      count += 1;
      console.log(`Clicked ${id} ${count} times.`);
    },
  };
}

const button1 = createCounterButton(button1El);
const button2 = createCounterButton(button2El);
const button3 = createCounterButton(button3El);

button1.click();
button1.click();
button2.click();
button3.click();
button3.click();
```
