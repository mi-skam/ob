---
parent:
  - "[[JavaScript]]"
created: 2024-01-18
tags: []
---

## Concepts

The idea of unit tests is to assert a certain expression to be of some value, then we calculate it and compare it with a [[#matcher]]

### matcher

## Best practices

1. It's good to start with a failing unit test, just to check indirectly that it really works.

## Configuration

Testing with a browser:

`vitest.config.js`:

```js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      name: "chrome",
    },
    coverage: {
      provider: "instanbul", // browser v8 doesn't provide coverage
    },
  },
});
```

Testing with `jsdom`:

```js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
});
```

`package.json`:

```json
"test": "vitest"
"coverage": "vitest run --coverage"
```

## Examples

### Simple example

```js
import { describe, expect, it } from "vitest";
import { functions } from "./functions";

describe("Testing getAge function", () => {
  it("is defined", () => {
    expect(functions.getAge("Maksim", 32)).toBeDefined();
  });
});
```
