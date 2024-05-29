#code/cs

## Big O

### Time Complexity

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// gauss algorithm
function addUpTo_(n) {
  return (n * (n + 1)) / 2;
}
```

<details>  
<summary>Which issues bring the measurement of runtime of  functions ?</summary>  
  
1. Hard to grade. Is it fast? or slow? Problem of time
2. Depending on the machine it's running on
3. Will be different on the *same* machine
  
</details>

```js
let t1, t2;

t1 = performance.now();
addUpTo(1000000000);
t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);

t1 = performance.now();
addUpTo_(1000000000);
t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);
```

> We say that an algorithm is **O(f(n))** if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

- O(f(n)) gibt also die obere Grenze einer Laufzeit an ("worst case scenario")

#### Analyse-Tipps

1.  Arithmetic operations are constant
2.  Variable assignment is constant
3.  Accessing elements in an array (by index) or object (by key) is constant
4.  In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

### Space Complexity

Man unterscheidet, ob man den Speicherplatz der Eingabewerte mit zählt oder nicht im Begriff der Space Complexity. Zählt man es _nicht_ dazu, spricht man von **auxiliary space complexity**

#### JavaScript

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

### Data Structures

- Objects: perfekt, wenn es nicht auf die Reihenfolge ankommt.
  - Access: O(1)
  - Removal: O(1)
  - Insertion: O(1)
  - Search: O(n)
  - Mit Search ist die rechte Seite des Doppelpunktes gemeint. Wenn man schaut, ob irgendein Key einen speziellen Wert hat.
  - keys: O(n)
  - values: O(n)
  - entries: O(n)
  - hasOwnProperty: O(1)
- Arrays: wenn man eine Reihenfolge braucht
  - Access: O(1)
  - Removal: varies, , on the beginning: O(n), at the end: O(1)
  - Insertion: varies, on the beginning: O(n), at the end: O(1)
  - Search: O(n)
  - push: O(1)
  - pop: O(1)
  - shift: O(n)
  - unshift: O(n)
  - concat: O(n)
  - slice: O(n)
  - splice: O(n)
  - sort: O(n _ log _ n)
  - forEach/map/filter/reduce: O(n)

## Problems solving

"Mach einen Plan"

### Understand the problem

1. Kann ich das Problem in meinen eigenen Worten ausdrücken?
2. Was sind die Inputs des Problems?
3. Was sind die Outputs?
4. Kann ich die Outputs von den Inputs ableiten?
5. Wie benenne ich die wichtigen Teile des Problems?

### Explore Examples

- Hilft sicher zu stellen, dass man das Problem richtig erfasst hat
- Geben eine Orientierung für die Lösung (User stories / Unit Tests)
- Start with simple examples
- Gehe dan zu komplexeren Beispielen
- Erkunden Sie Beispiele mit leeren Eingaben
- Erkunden Sie Beispiele mit ungültigen Eingaben

### Break it down (Computer spielen)

- Mit Kommentaren Funktionalitäten ausformulieren
- Lädt dazu ein, noch einmal genau über das Problem nach zu denken, bevor man anfängt zu coden
- Hilft dabei, noch offene Stellen zu identfizieren

### Solve/Simplify the problem

1. Finde die Hürden
2. Erst einmal ignorieren
3. Und ein vereinfachtes Problem lösen

### Refactor stuff

- Code aufräumen
- Performance
- Ästhetik
- Begrenztes Wissen formulieren

"Bekannte Muster"

### Problem solving Patterns

[[Frequency counter pattern]]



[[Multiple Pointers pattern]]

- Voraussetzung sind eine sortierte Datenstruktur, z.B. ein Array
- Dann laufen die beiden Pointer los

[[Sliding Window Pattern]]

- versucht arithmetische Operationen nicht unnötig oft zu wiederholen
- Hat man z.B. ein Array von 8 Zahlen 2, 5, -3, 7, 0, 7, 1, 2 und sucht das Triple mit der größen Summe, addiert man nicht immer wieder alle drei Zahlen, 2, 5, -3 -> 5, -3, 7
- sondern man hat ein "sliding window", man substrahiert die zahl, die aus dem fenster fällt und fügt die neue hinzu
- man unterscheidet zwischen einem statischen und einer dynamischen Variante
- statisch: das Fenster (die Anzahl der Elemente) bleibt gleich und wandert durch ein größeres Array
- dynamisch: die linke und rechte Grenze können unabhängig voneinander wachsen und schrumpfen

Design and Conquer Pattern

- Daten in kleinere Häppchen aufteilen und dann wiederholt mit ihnen arbeiten

### Recursion

> a process that calls itself

Invoke the same function with **different input**, stops at the **base case**

![[Call Stack]]

#### Helper Method Recursion Pattern

- Funktion, die rekursiv ist, ist als Hilfsfunktion in einer Hauptfunktion definiert oder zumindest aufgerufen
- Die Idee ist, dass man eine Variable im Scope haben will, die durch den rekursiven Aufruf **nicht** überschrieben wird.

Beispiel:

```js
// recursive function - without helper
function collectOddNums(nums) {
  let result = []; // result would be overwritten each time
  collectOddNums(nums) ...
}

// non-recursive function - with a recursive helper function
function collectOddNums(nums) {
  let result = [];

  result =  helper(nums)
}
```

#### Pure Recursion

- komplizierter als Helper Method Recursion
- Tipps:
  - Für Arrays: slice, spread-Operator, concat
  - Für Objekte: Object. assign, spread-Operator
  - Für Strings: slice, substr, substring

## Going Further

| Ressource                                         | Description                                                                                        |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| https://github.com/trekhleb/javascript-algorithms | This repository contains JavaScript based examples of many popular algorithms and data structures. |
