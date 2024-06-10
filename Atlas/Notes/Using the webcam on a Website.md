

> [!tip] 
> Look at the **webcam** example in [mi-skam/learn-lil-gui](https://github.com/mi-skam/learn-lil-gui/tree/main/pages/webcam)
>
> 

We use the `navigator.mediaDevices` API to access the webcam.

There are two import functions (both return promises):

1. `enumerateDevices()`
2. `getUserMedia(constraints)`

Let's have two examples for both:

## enumerateDevices

We print all found webcams filtering all mediaDevices of type "videoinput"

```js
let webcamsFound = await navigator.mediaDevices
  .enumerateDevices()
  .then(function (devices) {
    const videoDevices = devices.filter(
      (device) => device.kind === "videoinput");
```

## getUserMedia(constraints)

Checking the support of getUserMedia

```js
const hasGetUserMedia = () => !!navigator.mediaDevices?.getUserMedia;
```

In `constraints` the devices of interest are setup. There are two important properties:

1. `audio` (default: false)
2. `video` (default: false)

Example: To enable a video stream of a webcam you set `video` in `constraints` to true.

Example code for displaying a webcam video:

```html
<body>
  <video id="webcam"></video>
</body>
```

```js
navigator.mediaDevices.getUserMedia({ constraints: true }).then((stream) => {
  // get video element
  const webcam = document.querySelector("#webcam");
  webcam.src = stream;
  webcam.onmetadataloaded = () => {
    webcam.play();
  };
});
```
