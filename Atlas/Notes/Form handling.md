---
aliases:
publish: true
date: 2023-08-09
---
# Form handling

It's quite easy to process forms in javascript, which might come in handy, when the backend or api is not there or not yet.  We start with a simple setup to handle the `submit` event, triggered by a submit button for example.

```js
const form = document.querySelector("form");

form.addEventListener("submit", formHandler);
```

In this `formHandler()` function we will do three things:
1. prevent the page from reloading, which is the default behaviour by the browser
2. create a `FormData` element
3. process the data, so that we can work with the values

```js
const formHandler = (event) => {
  // 1. prevent the reload of the page
  event.preventDefault();
  // 2. new FormData
  const data = new FormData(event.target);
  // 3. process the data
  const output = jsonForm(data)

  return output
}

```

To process the data we use the auxiliary function `jsonForm()` which prepares the data, to be returned as serialized *JSON*

```js
const jsonForm = (data) => {
  const output = {};

  for (let [key, value] of data) {
    // if output!key] is a string, convert it to an array and push value to it
    if (typeof output[key] === "string") {
      output[key] = [output[key], value];
      // if output[key] is an array, push value to it
    } else if (typeof output[key] === "object") {
      output[key] = [...output[key], value];
    } else {
      output[key] = value;
    }
  }

  return JSON.stringify(output);
};
```