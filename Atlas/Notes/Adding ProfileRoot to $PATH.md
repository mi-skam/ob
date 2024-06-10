---
in: "[[Snippets]]"
up: 
related: 
created: 2024-05-31
tags:
  - code/snippet
---
Add this to `$PROFILE`

```powershell
$ProfileRoot = (Split-Path -Parent $MyInvocation.MyCommand.Path)
$env:path += ";$ProfileRoot"
```


---
[[Snippets]]