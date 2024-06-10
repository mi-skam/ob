---
parent:
  - "[[01011 - Vorkurs Mathematik]]"
created: 2024-03-14
tags: []
---

> [!NOTE] Menge
> Ein Menge $M$ ist eine Sammlung von Objekten die als _Elemente_ von $M$ bezeichnet werden.
>
> - Mengen können beliebige Elemente enthalten
> - Reihenfolge ist egal
> - jedes Element kommt nur einmal vor
> - d.h. alle Elemente sind verschieden

Zwei Mengen $M$ und $N$ gelten als **gleich** wenn alle Elemente in $M$ auch in $N$ sind und umgekehrt auch alle Elemente in $N$ auch in $M$ sind.

Wenn $M$ eine Menge ist und $m$ ein Element von M ist, dann schreibt man $m \in M$

## Wie man Mengen beschreibt

Neben den endlichen Mengen wie z.B. $M_1 = \{ 1, 2, 3, 4\}$ gibt es natürlich auch unendliche Mengen wie z.B. die Menge aller ganzen Zahlen, die durch _3 teilbar_ sind.

Zunächst kann man das so aufschreiben:
$M_2 = \{..., -9, -6, -3, 0, 3, 6, 9, ...\}$

Man "trickst" hier indem man mit den Pünktchen die unendlichen Elemente vor und nach dem letzten Element andeutet und darauf setzt dass die expliziten Elemente den Kontext klar machen.

Zweiter Ansatz
$M_3 = \{ k \in \mathbb{Z} \; | \; \text{k ist teilbar durch 3} \}$

## Mächtigkeit von Mengen und die leere Menge

Die Mächtigkeit einer Menge $|M|$ ist eine Aussage über die _Anzahl der Elemente einer Menge_

1. Die leere Menge enthält keine Elemente: $|\emptyset| = 0$
2. Die endliche Menge $M$ enthält $n$ Elemente: $|M| = n$
3. Die unendliche Menge $M$ enthält _unendlich_ viele Elemente: $|M| = \infty$

## Teilmengen und echte Teilmengen

Von Teilmengen spricht man wenn _alle Elemente_ einer Menge $N$ auch in einer Menge $M$ enthalten sind: $M \subseteq N$ (d.h. $M$ und $N$ können auch gleich sein!)

Von einer echten Teilmenge spricht man, wenn darüber hinaus noch gilt $M \neq N$, d.h. es in $N$ noch Elemente gibt, die nicht in $M$ sind: $M \subset N$

## Durchschnitt

> [!NOTE] Definition
> Der Durchschnitt $M\cap N$ von zwei Mengen $M$ und $N$ ist die Menge: $$M\cap N = \{a | a \in M \; \text{und} \; a \in N\} $$

### Disjunkte Mengen

> [!NOTE] Definition
> Wenn $M$ und $N$ Mengen sind, die kein gemeinsames Element besitzen, sagt man, dass M und N _disjunkt_ sind.

## Vereinigung

> [!NOTE] Definition
> Die Vereinigung $M \cup N$ von zwei Mengen $M$ und $N$ ist die Menge
> $$M \cup N = \{ a | a \in M \text{ und / oder } a \in N \}$$

## Differenzmenge

> [!NOTE] Definition
> Seien $M$ und $N$ Mengen. Die Mengen $M \backslash N$ ist definiert als
> $$M \backslash N = \{ m \in M | m \notin N\}$$
> Man sagt auch die Differenzmenge $M$ ohne $N$

## Kartesisches Produkt

> [!NOTE] Definition
> Seien $M$ und $N$ Mengen, Dann ist
> $$M \times N = \{(m, n)\;|\; m \in M, n \in N\}$$
> das **kartesische Produkt** von $M$ und $N$ (ausgesprochen "M kreuz N"). Die Elemente von $M \times N$ nennt man **geordnete Paare**.

Beispiel:
$M = \{ 1, 2\} \; \text{und} \; N = \{3, 6\}$ Dann ist
$$ M \times N = \{1, 2\} \times \{3, 6\} = \{(1, 3), (1, 6), (3, 1), (3, 6)\}$$

Man sieht also dass geordnet bedeutet, dass die Reihenfolge relevant ist, z.B. $(1, 6) \in M \times N$ , aber $(6, 1) \notin M \times N$
