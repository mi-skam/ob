---
parent: "[[01011 - Vorkurs Mathematik]]"
created: 2024-04-02
tags: 2024-04-03T15:07:09+02:00
---

## Rechnen mit ganzen Zahlen

Wir beginnen mit den **natürlichen Zahlen** $\mathbb{N}$:

> [!abstract] Kommutativgesetz
>
> $$
> \begin{aligned}
> a + b &= b + a \\
> a * b &= b * a
> \end{aligned}
> $$

> [!abstract] Assoziativgesetz
>
> $$
> \begin{aligned}
> (a + b) + c &= a + (b + c) \\
> (a * b) * c &= a * (b * c)
> \end{aligned}
> $$

♥️ Die Klammern "erzwingen" ja die Reihenfolge der Rechenoperationen, z.B. $(a + b) + c$ bedeutet, dass man zuerst $a$ und $b$ addieren _muss_, da dies aber gleich gesetzt wird mit $a + (b + c)$, heißt das dass es "egal" ist, ob man zu erst diese oder jene Zahlen addiert.

> [!abstract] Distributivgesetz
>
> $$
> \begin{aligned}
> a * (b + c) &= a * b + a * c
> \end{aligned}
> $$

Die gleichen Regeln gelten für die **ganzen Zahlen** $\mathbb{Z}$ und dazu kommen jetzt die _additiven Inversen_, die in der Summe 0 ergeben

Beispiel: Für $a = 3$ gibt es die _additive Inverse_ $-3$, so dass gilt: $a + (-a) = 0$

> [!abstract] Rechenregeln additive Inverse
>
> 1. $-(-a) = a$ Für alle $a \in \mathbb{Z}$
> 2. $-(a + b) = (-a) + (-b)$ Für alle $a, b \in \mathbb{Z}$
> 3. $-(a * b) = (-a) * b = a * (-b)$ Für alle $a,b \in \mathbb{Z}$
> 4. $(-a) * (-b) = a *b$ Für alle $a,b \in \mathbb{Z}$

## Division mit Rest

> [!abstract] Division mit Rest
> Zu den ganzen Zahlen $a, b \text{ mit } b \neq 0$ gibt es ganze Zahlen $m \text{ und } r$ so, dass $a = m*b + r$ und $r \geq 0$ und $r \leq |b|$
>
> Ist $a \geq 0$ und $b \gt 0$, dann ist $m = a_r ...a_0$ und $r = a - m * b$
> Ist $a \lt 0$ und $b \gt 0$, dann ist $m = -a_r ...a_0 - 1$ und $r = a - m * b$
> Ist $a \geq 0$ und $b \lt 0$, dann ist $m = -a_r ...a_0$ und $r = a - m * b$
> Ist $a \lt 0$ und $b \lt 0$, dann ist $m = a_r ...a_0 + 1$ und $r = a - m * b$

Beispiele
$a = 18$ und $b=5$, so ist $a = 3 * 5 + 3$ und $0 \leq 3 \leq 5$
$a = -73$ und $b = 11$, so ist $a = -7 * 11 + 4$ und $0 \leq 4 \leq 11$
$a = 206$ und $b=-4$, so ist $a = -51 * -4 + 2$ und $0 \leq 2 \leq |-4|$

## Rechnen mit Brüchen

1. Erweitern von Brüchen $\frac{a}{b} = \frac{a * s}{b *s}$
2. Kürzen von Brüchen $\frac{a * s}{b * s} = \frac{a}{b}$
3. Addition / Subtraktion:
   1. gleicher Nenner: $\frac{a}{b} \pm \frac{c}{b} = \frac{a \pm c}{b}$
   2. allgemein: $\frac{a}{b} \pm \frac{c}{d} = \frac{ad \pm bc}{bd}$
4. Multiplikation:
   1. $\frac{a}{b} * \frac{c}{d} = \frac{a * b}{c *d}$
   2. $a * \frac{b}{c} = \frac{a * b}{c}$
5. Division:
   1. $\frac{a}{b} : \frac{c}{d} = \frac{a}{b} * \frac{d}{c} = \frac{ad}{bc}$ für $c \neq 0$

## Rechnen mit reelen Zahlen

1. Wurzeln sind nur für Zahlen $\ge 0$ definiert, und $\sqrt{a} \gt 0$ für alle $a\gt0$, d.h. $\sqrt{4} = 2$ und nicht etwa auch $-2$
2.
