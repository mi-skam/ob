---
parent:
  - "[[Fleeting MOC]]"
created: 2024-04-12
  2024-04-12T17:02:46+02:00
tags:
  - code/tutorial
languages: typescript
---

Using Generics in statically typed languages we may work with the type as a **type variable**

```ts
const identity = <T>(arg: T): T => {
  return arg;
};

console.log(identity(1));
console.log(identity(true));
```

---

[[Tutorials]]
