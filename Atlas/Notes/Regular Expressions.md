

## Capture Groups

Rename a file like _script.js_ to _script.dev.js_

```js
// \.(js|ts|jsx|tsx) => matches .js (or .ts ...) => $1
// replaces .js with ${postfix}$1
// .dev$1 => .dev.js => public/js/script.dev.js

function renameFile(file, postfix) {
  return file.replace(/(\.(js|ts|jsx|tsx))/i, `.${postfix}$1`);
}
console.log(renameFile("public/js/script.js", "dev"));
```
