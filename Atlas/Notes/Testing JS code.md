---
parent: "[[JavaScript]]"
date: 2023-12-26
tags:
  - 🦠
modified: 2024-01-31T18:45:00+01:00
---

It's rather important to get unit-tests done, for JavaScript [[jest]] is quite popular, but as we already using [[vite]] we might use [[vitest]] as well, which is supposed to be quite compatible with *jest* anyway.

I follow the definition of Roy Osherove in  "The art of unit testing"[^1]  is a piece of code, that calls another piece of code and compares it with expected values.

## expect / match
## handle asynchronous code
## mock functions (apis)
## setup / teardown
	isolate the behaviour even more, by guaranteeing the data is setup or removed as needed for the specific tests.

[^1]: [[osherove_etal20]]