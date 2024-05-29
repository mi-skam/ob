---
aliases: 
publish: true
date: 2023-10-09
---
# minimal example  to serve files in public
```shell
npm init -y
npm i express
npm i -D nodemon
```

```json
"scripts": {
  "dev": "nodemon index.js"
}
```

```js
import express from 'express';

const app = express();
const port = 3000;

// get the current directory of the current script without the file name
const __dirname = new URL('.', import.meta.url).pathname;

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

```