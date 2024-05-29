# Promises and Async/Await

```javascript    
let asyncRandom = function () {
  // zwischen einer halben und 5 Sekunden
  let wait = (Math.floor(Math.random() * 10) + 1) * 500;
  let result;
  setTimeout(() => {
    result = 23;
    console.log(result, wait);
  }, wait);
  return result;
};

console.log(asyncRandom());
console.log(asyncRandom());
console.log(asyncRandom());
```