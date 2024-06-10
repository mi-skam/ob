---
parent: "[[JavaScript]]"
created: 2024-01-04
tags: 2024-03-27T09:24:42+01:00
---

## setInterval

```js
let counter = 0;
let intervalId = setInterval(
  () => {
    if (counter > 10) {
      clearInterval(intervalId);
    } else {
      console.log(counter);
      counter += 1;
    }
  },
  1000,
  0
);
```

## Use bind to use callbacks with "this"

When a timer function like `setInterval` triggers a functions, it provides it with the window object as a _new context_, which is not always what one has in mind. It's easy to fix by adding [[OOP#bind|.bind()]] to the callback

```js
class Counter {
  constructor(counter, increment) {
    this.counter = counter;
    this.increment = increment;
  }

  go() {
    // otherwise, this would be equal to window
    setInterval(this.#incrementAndPrint.bind(this), 1000);
  }

  #incrementAndPrint() {
    this.counter += this.increment;
    console.log(this.counter);
  }
}
```

## Debounce and Throttle

Hitting apis to often can create a unwanted pressure on the api service. With
both [[#Throttle]] and [[#Debounce (delay the call)|Debounce]] we limit/control how often code is called. But while _Debounce_ does it by delaying the execution of code after the last call and a timer runs out, _Throttle_ ensures the code is run only one at a time at a certain amount of time.

### Debounce (delay the call)

We can leverage the combo of `setTimeout()` and `clearTimeout()` to create a timeout for every input with a twist. The very next input, like the next character, _cancels the last timeout_ and _creates a new timeout_, meaning the call of the api or whatever gets constantly delayed, until the user stops pressing keys and the _last timeout_ successfully runs.

We start with a fake api function that returns a **JSON** object, we will query.

```js
function fakeApi(user = "nick") {
  const someData = [
    {
      user: "nick",
      id: "2432",
      created: "2923-2-1",
    },

    {
      user: "alfred",
      id: "1111",
      created: "1922-11-1",
    },
  ];

  console.log(JSON.stringify(...someData.filter((u) => u.user == user)));
}
```

Our `fakeApi()` function is called inside the `setTimeout()` callback and uses `event.target.value` to get the value of the search field.

```js
let debounceTimeout;
let inputTimeoutMS = 1000;

const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", function (evt) {
  // kill the timeout of the _last_ input event
  clearTimeout(debounceTimeout);

  // save the current timeout in debounceTimeout
  debounceTimeout = setTimeout(() => {
    fakeApi(evt.target.value);
  }, inputTimeoutMS);
});
```

Now we abstract the timeout magic to a
function, that accepts an arbitrary method and returns a debounced version of fakeApi (higher order function).

```js
function debounce(cb, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const result = cb(...args);
      console.log(result);
    }, delay);
  };
}

const debouncedFakeApi = debounce(fakeApi, 500);

searchInput.addEventListener("input", (evt) => {
  debouncedFakeApi(evt);
});
```

### Throttle

The most simple implementation of a throttle consists of two three things:

- checking a binary state variable (e.g. `isThrottled`) to decide whether to run a call or not.
- "blocking" further calls.
- "unblocking" the throttle after a certain amount of time (`setTimeout`)

```js
let isThrottled = false;
window.addEventListener("scroll", () => {
  if (!isThrottled) {
    isThrottled = true;
    loadMoreItems();
    setTimeout(() => {
      isThrottled = false;
    }, 300);
  }
});

loadMoreItems();
```

^3feb04

As we did with debounce we want to generalize the throttle to a higher order function, accepting any function as callbacks. This implementation also adds the property to save the arguments of the last run to the callback while still be throttled, hence `saveArgs`

We need a function that saves the throttle-state `isThrottled`. We put this in the closure of `throttle` and

```js
function throttle(callback, delaye = 300) {
  let isThrottled = false;
  let savedArgs = null;
  // ...
}

const throttledLoadItems = throttle(loadMoreItems, 300);
```

Now we think about the return value, which must be a function by definition

```js
//...
return (...args) {
  // we save the args if callback is running
  if (isThrottled) {
    savedArgs = args;
    return
  }
  // otherwise we execute the callback with the args
  callback(...args);
  // ... and lock the function for delay ms
  isThrottled = true
  setTimeout(executeCallback, delay) // 💣🧨

}
```

Now let's think what happens when `throttleLoadItems()` will be called again and again (triggered by the scroll event),

There are two possibilities:

1. `isThrottled` is `true`, `args` are saved in `savedArgs`, function returns -> finished
2. it isn't then the call will be called with `callback(...args)`. `isThrottled` will be activated and a `setTimout` timer will be setup. this timer calls `executeCallback()`, which handles the `savedArgs` variable and subsequent calls
   1. savedArgs is null (meaning, there were no calls in between), `isThrottled` will be set to `false`, meaning the execution stops here
   2. if it isn't, it means we are neither throttled (look at [[#^3feb04]] ) nor "empty", we execute the `callback`with the saved arguments, set them to `null` and call ourselves again, meaning we land in the former paragraph and finally stopping the execution

```js
const executeCallback = () => {
  if (savedArgs === null) {
    isThrottled = false;
  } else {
    callback(...savedArgs);
    savedArgs = null;
    setTimeout(executeCallback, delay);
  }
};
```

Here is the whole solution, throttle function:

```js
function throttle(callback, delay = 500) {
  let isThrottled = false;
  let savedArgs = null;

  const executeCallback = () => {
    if (savedArgs === null) {
      isThrottled = false;
    } else {
      callback(...savedArgs);
      savedArgs = null;
      setTimeout(executeCallback, delay);
    }
  };

  return (...args) => {
    if (isThrottled) {
      savedArgs = args;
      return;
    }

    callback(...args);
    isThrottled = true;
    setTimeout(executeCallback, delay);
  };
}
```
