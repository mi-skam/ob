#code/debugging

## Debugging

To debug [[JavaScript Overview]] code (node and browser) we ma use the built-in [[VSCode]] js debugger **ms-vscode.js-debug**

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
