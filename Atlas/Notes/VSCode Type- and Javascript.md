
## Debugging

To debug [[JavaScript Overview]] code (node and browser) we may use the built-in [[VSCode]] js debugger **ms-vscode.js-debug**

This configuration launches a extra chrome window, expecting a webserver listen on the _url_ and _webroot_ (the directory where the js files are in) be set. If that is not the case, the debugger may not pick up the runtime, no variables are set.

```json
{
  // Verwendet IntelliSense zum Ermitteln möglicher Attribute.

  // Zeigen Sie auf vorhandene Attribute, um die zugehörigen Beschreibungen anzuzeigen.

  // Weitere Informationen finden Sie unter https://go.microsoft.com/fwlink/?linkid=830387

  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

### Programme mit VSCode starten (+debuggen)

Damit wir einzelne Breakpoints im Editor setzen können, müssen wir den Process des Übersetzens von Typescript in Javascript also Task definieren (_tasks.json_). Diese Schnipsel liegen im Order _.vscode_ im Projektverzeichnis.

#### tasks.json

Dieser Schnipsel ist nicht Projekt spezifisch und kann unverändert wieder verwendet werden.

**.vscode\tasks.json**

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "typescript",
      "tsconfig": "tsconfig.json",
      "problemMatcher": ["$tsc"],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "label": "tsc: build - tsconfig.json"
    }
  ]
}
```

#### launch.json

Der erste Task `node: index.ts` ist Projekt spezifisch und hängt vom zu debuggenden Program ab (In diesem Beispiel _index.ts_ im _src_-Verzeichnis). Mit dieser Konfiguration wird zunächst `tsc: build - tsconfing.json` aufgerufen und dann das Programm ausgeführt. Werden Breakpoints konfiguriert, kommt der Debugger zum Einsatz.

`node: current file` ist eine einfache Möglichkeit, das aktuell geöffnete File zu debuggen.

**.vscode\launch.json**

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "node: index.ts",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/src/index.ts",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["${workspaceFolder}/**/*.js"],
      "console": "integratedTerminal"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "node: current file",
      "skipFiles": ["<node_internals>/**"],
      "program": "${file}",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["${workspaceFolder}/**/*.js"],
      "console": "integratedTerminal"
    }
  ]
}
```