---
parent: "[[01011 - Vorkurs Mathematik]]"
date: 2024-03-22
tags:
  - 🦠
modified: 2024-04-04T00:54:17+02:00
---

## Natürliche und ganze Zahlen

Wir definieren $\mathbb{N}$ als Menge der natürlichen Zahlen **ohne** 0.
Wenn wir die 0 einschließen wollen, schreiben wir $\mathbb{N_0}$
$$
\begin{aligned}
\mathbb{N_0} &= \mathbb{N}\; \cup \; \{0\}
\end{aligned}
$$
## Rationale Zahlen
$$ \mathbb{Q} = \left \{ \frac{a}{b}\;|\;a,b \in \mathbb{Z} \; \text{und} \; b \neq \ 0 \right \}$$
## Reelle Zahlen
$\mathbb{R}$
Intuition für den Beweis dafür dass die Zahl $\sqrt{2}$ keine rationale Zahl ist:

1. Widerspruchsbeweis, der erstmal die Behauptung aufstellt, dass $\sqrt{2}$ eine rationale Zahl ist, also $\sqrt{2} = \frac{a}{b}$ , wobei a und b teilerfrei (bis auf 1 ) sind und jeweils ganze Zahlen sind
2. Quadrieren und multiplizieren-> $2 = \frac{a^2}{b^2}$ -> $2b^2 = a^2$ 
3. also ist $a^2$ eine gerade Zahl und damit auch $a$, weil sonst das Quadrat ungerade wäre
4. das heißt also dass $a^2$ durch 4 teilbar sein muss, da $a = 2 * n$ und $a^2 = 4 * n^2$ 
5. teilt man den Term durch 4, erhält man $\frac{b^2}{2} = n^2$ und damit  $b^2 = 2 * n^2$, was wie in **3**. gezeigt, bedeutet, dass auch $b^2$ eine gerade Zahl sein muss und damit auch b
6. **Widerspruch** da a und b nicht gleichzeitig gerade sein können und gleichzeitig keinen gemeinsamen Teiler außer 1 haben dürfen.


> [!NOTE] Definition
> Reelle Zahlen, bei denen sich ab einer bestimmten Stelle nach dem Dezimalkomma eine Folge von einer oder mehr Ziffern immer wiederholt, nennt man **periodisch**. Die kleinste sich wiederholende Ziffernfolge wird die Periode der Zahl genannt, und die Anzahl der Ziffern in einer Periode heißt die Periodenlänge.

### Beschränkte Mengen
Eine [[Mengen#Teilmengen und echte Teilmengen|Teilmenge]] $M$ von $\mathbb{R}$ ist beschränkt, wenn gilt: 

> [!NOTE] Definition
> Sei $M \subseteq \mathbb{R}$:
> 1. $M$ ist nach *oben* beschränkt, wenn es eine reelle Zahl S gibt, so dass $m \leq S$  für alle $m \in M$
> 2. $M$ ist nach *unten* beschränkt, wenn es eine reelle Zahl S gibt, so dass $m \geq S$  für alle $m \in M$
> 3. $M$ ist *beschränkt*, wenn $M$ nach oben und nach unten beschränkt ist. Es muss dann also reelle Zahlen $S$ und $S'$ geben, so dass $S' \leq m \leq S$ für alle $m \in M$ gilt.
> 

> [!TIP]
> Um nachzuweisen, dass eine Menge nach oben (oder unten) beschränkt ist, muss eine reelle Zahl $S$ angegeben werden, so dass $x \leq S$ (oder $x \geq S$). In der Regel können sehr viele verschiedene $S$ dafür gewählt werden.


## Irrationale Zahlen

Die irrationalen Zahlen sind die reellen Zahlen ohne die Menge der rationalen Zahlen, also $\mathbb{R} \backslash \mathbb{Q}$

Die rationalen Zahlen sind die Dezimalzahlen, die **endlich viele Nachkommastellen** haben oder **periodisch** sind, beide lassen sich als Bruch darstellen. Ist eine Dezimalzahl nicht periodisch und haben unendlich viele Nachkommastellen, so sind dies die irrationalen Zahlen

### Umrechnen von periodischen Dezimalzahlen in Brüche

Wie kommt man von $0,3\overline{85}$ auf $\frac{191}{495}$ ?

Intuition:
Man stellt eine Gleichung auf, die den periodischen Teil wegsubtrahiert und dann entsprechend dividiert. 

In dem Beispiel ist die Anzahl der nicht-periodischen Stellen nach dem Komma $s=1$ und die Anzahl der periodischen Stellen $t = 2$ , damit ergibt sich $s+t = 3$

$$
\begin{aligned}
(10^{s+t} - 10^s) * 0,3\overline{85} &= 385,\overline{85} - 3,\overline{85} \\
(10^3 - 10) * 0,3\overline{85} &= 385,\overline{85} - 3,\overline{85}
\\
990 * 0,3\overline{85} &= 382
\\
\\
0,3\overline{85} &= \frac{382}{990} = \boldsymbol{\frac{191}{495}}
\end{aligned}
$$
