[[Asynchronous Code (Callbacks, Promises, Async Await)]] [[📼 Asynchronus Programming in JavaScript]]

![[Screenshot 2023-07-19 at 14.19.03.png]]

1. Funktionen sind erstklassige Objekte
   1. an Variablen binden
   2. als Parameter für andere Funktionen
   3. als Rückgabewert
2. Datenstrukturen sind in der Hauptsache unveränderlich (z.B. `const`)
3. Deklarativ
4. Unterscheidung zw. _Daten, Funktionen und Effekt_ bewusster (siehe Eric Normand)
5. Komposition: einfache Funktionen werden zu komplizierten verdrahtet

## partielle Ausführung

```javascript
// Funktion, die wir partiell ausführen wollen

function volume(x, y, z) {
  return x * y * z;
}

function subadd(x, y, z) {
  return x - y + z;
}
```

### partial left

```javascript
// Die Idee ist, dass wir je nachdem wie wir die Funktionen angeben, zwei Listen von Parametern haben, die gebundenen Parameter der ersten Funkiton und die nicht gebundenen der inneren.

function partialLeft(f, ...bound) {
  return function (...unbound) {
    return f.apply(this, bound.concat(unbound));
    // return f(...bound, ...unbound) works as well, too many dots for my taste
  };
}

const volume3 = partialLeft(volume, 3);
const volume33 = partialLeft(volume, 3, 3);
console.log(volume3(3, 3));
console.log(volume33(3));
```

### partial right

```javascript
function partialRight(f, ...bound) {
  return function (...unbound) {
    return f.app;
  };
}
```

## Currying

## Closures

[[Memoization Pattern]]

## Reducing

Transform datastructures with [[Filter]] , [[Map]] and [[Reduce]]
