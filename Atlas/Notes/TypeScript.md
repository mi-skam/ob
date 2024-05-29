---
tutorial: https://www.youtube.com/watch?v=_CaGUZNEobk
repo: https://github.com/mi-skam/vault-typescript
---

#code/ts

strukturelles Typensystem ("Duck Typing")

## Checks Types 💪

You cannot assign a number to a string

```ts
let text = "Hello world"; // derives the type string of text

text = 23; // breaks ❌

console.log(text);
```

## Getting Started

The easiest way to start a typescript project (or to convert a vanilla js project for that matter) is to use / look at the current `vanilla-ts` template of `vite`. 
```shell
npm create vite@latest <target_dir> -- --template vanilla-ts
```

There you find the important bits in:
- `package.json` (which tools are needed and how are they invoked)
- `tsconfig.json` (configuration of tsc, typescript transpiler)
-  and a basic directory structure, which is bot so important after all

Cool thing is, that `vite` runs typescript natively in dev mode. 🤓

## Type assertions

There are two ways to assert a type of a variable

|             | Colon ":"                                                                                          | "as"                                                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Description | This syntax is used in type annotations when declaring *variables*, *parameters* or *return types* | Is primarily used for *type assertions*, where you tell the compiler that you know more about the type of an expression than TypeScript can deduce. |

## Interface

> [!warning] Definiert eine Typensignatur - nur für Objekte

```typescript
// definiert die Signatur des Objektes Todo
interface Todo {
  description: string;
  status: string;
  assignee?: string; // optional
}

// Zuordnung todo -> Todo
const todo: Todo = {
  description: "Typescript lernen",
  status: "open",
};
```

## Type

> [!info] Definiert eine Typensignatur

Man könnte mit `Type` auch Objekte definieren, sollte man aber nicht 😂

```typescript
type listNumbers = number[]; // Array mit Zahlen
const numbers: listNumbers = [1, 2, 3, 4, 5];
```

## Typkomposition mit Unions

Status wird also `type` herausfaktoriert.

```typescript
type Status = "open" | "done" | "discarded";

interface Todo {
  description: string;
  // schränkt den Status auf drei Werte ein
  status: Status;
}
```

## Generics

Wenn man das `interface` erweitern möchte, aber die zukünftige Datenstruktur noch nicht kennt, führt man Generics ein. Generics sind Variable, aber nicht für Wertet, sondern für Datentypen.

```typescript
//Todo ist ein Generic mit der Typvariablen TData
interface Todo<TData> {
  description: string;
  // schränkt den Status auf drei Werte ein
  status: Status;
  data: TData;
}

// Wertetyp Metadata
interface Metadata {
  assignee: string;
}

// todo ist ein Todo auf dem Wertetyp Metadata
const todo: Todo<Metadata> = {
  description: 'Typescript lernen',
  status: 'open',
  data: {
    assignee: 'Max',
  },
```

Man kann die Typvariable genauso weiter reichen wie klassische Variable.

```ts
class TodoList<TData> {
  private todos: Todo<TData>[];

  public constructor() {
    this.todos = [];
  }
}
```

## Strukturen

- ein Typ pro Datei (in unserem Fall Metadata, Status, Todo)

### mit externen Modulen umgehen

Wenn man in Typescript mit externen Modulen umgehen will, muss man auch Javascript mit Typdeklarationen finden.
Wie damit umgehen?

1. anderes Module suchen
2. .d.ts selber schreiben
3. `@types/<modul>` nach installieren

### Klassen

- public, private und protected
