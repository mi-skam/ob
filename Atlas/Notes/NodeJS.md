---
aliases: 
publish: true
created: 2023-10-09
---
# [[NodeJS]]

To get the current directory of a running script depends on whether you are using the `commonjs` or the `es6 modules`.

### commonjs

```js
console.log(__dirname)
// returns /path/to/file without file.js
```

### es6 modules

```js
// __dirname does NOT exist
// but there is import.meta.url
console.log(import.meta.url)
// returns file://path/to/file/file.js
// we need to create a URL object
new URL("some-relative-path", import.meta.url)
// returns 
URL {
  href: 'file:///Users/plumps/Development/snake-game/some-relative',
  origin: 'null',
  protocol: 'file:',
  username: '',
  password: '',
  host: '',
  hostname: '',
  port: '',
  pathname: '/Users/plumps/Development/snake-game/some-relative',
  search: '',
  searchParams: URLSearchParams {},
  hash: ''
}

// so we need the pathname property
new URL("some-relative", import.meta.url).pathname
// returns '/Users/plumps/Development/snake-game/some-relative'

// to get rid of some-relative, but not to add the filen name, we can use '.' as the placeholder for the current directory

// FINAL RESULT

const __dirname = new URL('.', import.meta.url).pathname

```

[[Node.js minimal example  to serve files in public]]

[[npm]]