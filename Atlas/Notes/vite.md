---
parent:
  - "[[Fleeting MOC]]"
created: 2024-01-29
tags: []
---

## Create Multi-Page applications

### dev server

By default the `vite` dev serves the content of a file directory if requested, meaning routes are automatically set-up if vite can resolve them.

A directory by the name `/some/directory` automatically is served at `http://localhost:4173/some/directory/`

It's important to append the slash at the end 💥

### build-out

To also get the route working for the build out, we need to alter vite's configuration:
The main config is in[`build.rollupOptions.input`](https://rollupjs.org/configuration-options/#input)

```js
// we need to add resolve and __dirname (does not exist in modules)
import { resolve } from 'path';
const __dirname = new URL('.', import.meta.url).pathname;
// ...
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        minimal: resolve(__dirname, 'pages/minimal/index.html'),
      },
    },
  },
// ...
```
