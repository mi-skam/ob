## Document API

Getting the root element, which is mostly (always?) the `<html>` element, is done via `document.documentElement`

`document.documentElement.scrollHeight` means the height from `<html>` to `</html>` including the part that is not visible on the screen (including padding)

![](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight/scrollheight.png)

### Calculate the current distance to the bottom of the page (Infinite Scroll)

We use this measure to find the right position to add additional content

```js
const scrollDistanceToBottom =
  document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
```

Together with an event-listener `scroll` on the window Object:

```js
window.addEventListener("scroll", () => {
  // update scrollDistanceToBottom
  if (scrollDistanceToBottom < someValue) {
    // add stuff
  }
});
```

### Infinite Scroll

The infinite scroll is based around the [[#Calculate the current distance to the bottom of the page|current distance to the bottom of the page]]. It runs a function which checks if this distance is bigger or smaller than a certain threshold and triggers the creation of new elements if needed. This function is set up by a event listener listen to the _scroll_ Event.

```js
function loadMoreItems() {
  const scrollDistanceToBottom =
    document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

  if (scrollDistanceToBottom < 200) {
    console.log("LOADING DATA FROM AN API!!!");
    for (let i = 0; i < 10; i++) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.textContent = "Item " + (content.children.length + 1);
      // item.style.backgroundColor = getRandomColor();
      content.appendChild(item);
    }
  }
}

window.addEventListener("scroll", () => {
  loadMoreItems();
});

loadMoreItems();
```
