---
parent:
  - "[[Fleeting MOC]]"
created: 2024-04-15
  2024-05-14T12:52:39+02:00
tags:
  - code/tutorial

languages: typescript
---

As deno is mostly url based - avoiding any package manager (in contrast to npm), management is different.

The easiest approach to create import maps is using the `deno add` command. This adds modules from [jsr.io](jsr.io)

We can use the [esm.sh](https://esm.sh/#cli), which provides `deno task` jobs to ease creating [**import maps**](https://docs.deno.com/runtime/manual/basics/import_maps). Then we can work with _bare_ imports as we are used to.

> [!danger] Import maps are for Applications
> Don't use import maps for Libraries. Create a [[Deno - deps.ts pattern|deps.ts]], which _re-exports the dependencies_

```bash
# add esm.sh cli to deno tasks
deno run -A -r https://esm.sh init

# install a package
deno task esm:add package # or package@version (for more look at the docs)

# update all packages
deno task esm:update # or deno task esm update package
```

---

[[Tutorials]]
