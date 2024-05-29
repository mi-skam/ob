---
parent:
  - "[[Fleeting MOC]]"
date: 2024-04-15
modified: 2024-04-15T22:00:00+02:00
tags:
  - code/tutorial
  - code/deno
languages: typescript
---


Deno uses URLs for dependency management.

One convention places all these dependent URLs into a local `deps.ts` file. Functionality is then exported out of `deps.ts` for use by local modules.

Continuing this convention, dev only dependencies can be kept in a `dev_deps.ts` file.

See also [Modules](https://docs.deno.com/runtime/manual/basics/modules/).

## Example
`deps.ts`
```js
/** * deps.ts * * This module re-exports the required methods  * from the dependant remote Ramda module. */

export {  add,  multiply,} from "https://x.nest.land/ramda@0.27.0/source/index.js";
```
`example.ts`
```js
import { add, multiply } from "./deps.ts";
...
```

---
[[Tutorials]]