```js
const albums = [
  {
    title: "Push the Sky Away",
    artist: "Nick Cave",
    released: 2013,
  },
  {
    title: "No more shell we part",
    artist: "Nick Cave",
    released: 2001,
  },
  {
    title: "Live from Mars",
    artist: "Ben Harper",
    released: 2003,
  },
  {
    title: "The Will to Live",
    artist: "Ben Harper",
    released: 1997,
  },
];

const result = albums.filter((album) => {
  return album.released < 2000;
});
console.log(result);
```
