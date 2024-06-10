---
parent: "[[Fleeting MOC]]"
created: 2024-04-24
  2024-05-14T13:53:18+02:00
tags:
  - code/tutorial
languages:
---

``Get the submodules which are currently **tracked** (it's inside`.git/modules`):

```shell
git submodule update --recursive
```

Update the local repo to the current state of the repo:

```shell
git submodule foreach git pull

# commit the updates
git add <submodule_repo>
git commit
```

---

[[Snippets]]
