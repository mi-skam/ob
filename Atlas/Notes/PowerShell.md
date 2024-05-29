---
parent: "[[Fleeting MOC]]"
date: 2024-04-02
tags: 
modified: 2024-04-03T11:18:13+02:00
---

# Remove the Zone.Identifier

Removing the Zone.Identifier is useful for scripts that have been downloaded, as it removes the "downloaded " flag and the Shell treats it as a local file from now on.

```powershell
Remove-Item -Stream Zone.Identifier -EA Ignore <file>
```