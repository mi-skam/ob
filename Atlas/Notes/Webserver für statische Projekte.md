Für Projekte, die nicht gebundelt werden, kann man sich einen kleinen Stack selber zusammenbauen.

1. [local-web-server](https://github.com/lwsjs/local-web-server) - unterstützt HTTP, HTTP2, SSL out of the box
2. [nodemon](https://www.npmjs.com/package/nodemon) - lauscht auf Änderungen in Source files und starten ggfs. neue Projekte

## Installation

```shell
npm i -D local-web-server nodemon
```

In die `package.json` folgende Zeile hinzufügen

```json
"scripts": {
  "dev": "nodemon --exec ws --https",
},
```

## Nutzung

```shell
npm run dev
```
