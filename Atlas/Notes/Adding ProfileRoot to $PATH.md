---
parent: "[[Fleeting MOC]]"
date: 2024-04-02
modified: 2024-04-02T17:24:27+02:00
tags:
  - code/snippet
languages: powershell
---

Add this to `$PROFILE`

```powershell
$ProfileRoot = (Split-Path -Parent $MyInvocation.MyCommand.Path)
$env:path += ";$ProfileRoot"
```


---
[[Code snippets]]