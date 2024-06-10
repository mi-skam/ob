---
created: 2024-03-14
---

In diesem Vorbereitungskurs der [[Fernuni Hagen MOC]] geht es darum die Voraussetzungen zu erfüllen, die man für die Uni-Mathematik braucht.

Hier ein wichtiger Hinweis aus dem Informationsschreiben

> Der Kurs ist so angelegt, dass Sie _nach Bedarf_ einzelne Teile davon bearbeiten können. Es ist nicht nötig, dass Sie am Anfang Ihres Studiums alle Inhalte des Vorkurses parat haben. Das Kapitel **„Rechnen“ sollten Sie gut beherrschen**, denn die Inhalte dieses Kapitels werden immer und überall benötigt und vorausgesetzt. Auch **im Kapitel „Funktionen“ sollten Sie sich zu Studienbeginn auskennen**. Zwar werden die Funktionen auch im Studium noch einmal behandelt, aber immer mit dem Hintergedanken, dass da ja Vieles aus der Schule bekannt ist. **Bei den Kapiteln „Geometry“ und „Stochastik“ reicht es under Umständen aus, wenn Sie die bei Bedarf zu Rate ziehen.**

## Rechnen

[[Mengen]]
[[Zahlenmengen]]
[[Rechnen mit Zahlen]]

### [[Mengen#Wie man Mengen beschreibt]]

Aufgabe:

1. $M_1 = \{ n \in \mathbb{N} \; | \; \text{n ist ungerade} \}$
2. $M_2 = \{n \in \mathbb{N} \; | \; n^2 \}$

### [[Mengen#Durchschnitt]]

Aufgabe:

1. "- Wenn M und N unendliche Mengen sind, dann ist auch M ∩ N eine unendliche Menge." Das gilt nicht immer, man kann sich einen Durchschnitt der negativen Ganzzahlen mit den positiven Ganzzahlen vorstellen, und dann ist M ∩ N die leere Menge.
2. - "Wenn M∩N eine unendlichen Menge ist, dann sind M und N unendliche Mengen." Das stimmt, da ein beliebiges Element von M∩N sowohl in M also auch in N vorkommen muss. **Lösung aus dem Heft**: M∩N sind Teilmenge von M und von N, daher gilt |M∩N| <= |M| und |M∩N| <= |N|, also haben M und N mindestens so viele Elemente
3. "- Wenn M eine endliche und N eine unendliche Menge ist, dann ist M∩N eine endliche Menge." Das stimmt auch, da die mögliche Anzahl der Menge von der Mächtigkeit aller Elemente in M begrenzt wird.
4. "Wenn M∩N=M ist, dann ist M eine Teilmenge von N." Das stimmt, wenn M eine Teilmenge von N ist, bedeutet dass das alle Elemente von M in N sein müssen und das ist gegeben, da der Durchschnitt von M und N gleich M ist, anders ausgedrückt in M sind nicht mehr Elemente also in N und N besitzt mindestens genau die gleichen Elemente wie in M oder mehr. **Lösung aus dem Heft**: M∩N ist Teilmenge von N und nach Voraussetzung gilt M auch also Teilmenge von N

### [[Mengen#Vereinigung]]

Aufgabe:

1. "Wenn $M \cup N$ eine unendliche Menge ist, dann ist mindestens eine der Mengen $M$ oder $N$ unendlich." Ja, denn wenn beide Mengen endlich wären, wäre auch die Addition (Vereinigung) der beiden Menge in jedem Fall endlich.
   **Lösung des Buchs**: $|M| = m$ und $|N| = n$ mit $m, n \in \mathbb{N}$: $|M \cup N| \le m + n$ . (Die vereinigte Menge kann nur maximal so viele Elemente haben wie die Summe der Mächtigkeit der Einzelmengen M und N)
2. "Wenn $N = \emptyset$ ist, dann ist $M \cup N = M$" Ja, da $|N| = 0$ und somit $|M \cup N| = |M|$ **Lösung des Buchs**: $M \cup N = M \cup \emptyset = M$
3. "Wenn $M \cup N = M$ ist, dann ist $N$ die leere Menge". Falsch, wenn $N \subseteq M$ , dann ist $M \cup N = M$ und $N$ kann, muss aber nicht $\emptyset$ sein, z.B. $M = \{ 1, 2, 3\}$ und $N = \{1, 2 \}$

### [[Mengen#Kartesisches Produkt]]

Aufgabe:
$M = \{ n \in \mathbb{N} \; | \; \text{n ist gerade} \}$ und $N = \{ z \in \mathbb{Z} \; | \; \text{z ist teilbar durch 3}\}$

1. "(4, 6)" -> True
2. "(-2, 3)" -> False, -2 liegt nicht in M
3. "(2, -3)" -> True
4. "(6, 6)" -> True
5. "(6, -6)" -> True
6. "(6, 4)" -> False, 4 ist nicht in N
7. "(3, -2)" -> False, -2 liegt nicht in N
8. "(-3, 2)" -> False, -3 liegt nicht in M und 2 nicht in N
9. "(-6, 6)" -> False, -6 liegt nicht in M

### [[Zahlenmengen#Irrationale Zahlen]]

Aufgabe:
Stellen Sie $-12,345\overline{67}$ also Bruch dar

$$
\begin{aligned}
\frac{611111}{49500}
\end{aligned}
$$

### [[Rechnen mit Zahlen#Rechnen mit ganzen Zahlen]]

| Aufgabe                                             | Lösungsweg                                                                                                                                             |     |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| $a + b + c = c + b + a$<br>                         | Assoziativgesetz 1: $= (a + b) + c$<br>Kommutativgesetz 1: $= c + (a + b)$<br>Kommutativgesetz 2: $= c + (b + a)$<br>Assoziativgesetz 2: $= c + b + a$ |     |
| $(a + b) * c = a * c + b * c$                       | Kommutativgesetz 1: $= c * (a + b)$<br>Distributivgesetz 1: $= c * a + c *b$<br>Kommutativgesetz 2: $= a * c + b *c$                                   |     |
| $(a + b) * (c + d) = a * c + b * c + a * d + b * d$ | Distributivgesetz 1:$(a + b) * c + (a + b) * d$<br>siehe Aufgabe 2<br>                                                                                 |     |

### [[Rechnen mit Zahlen]]

Aufgabe:

1.  $$
    \begin{aligned}
    -3 * (5 + (- 7) * (-1)) + (-2) * 5 &= -3 * (5 + 7) - 10  \\
    &= -46
    \end{aligned}
    $$
2.  $$
    \begin{aligned}
    -(17 + (-1)) * (-1) * 2 - (-3 + 5)* (-1 - 1) &= -(17 - 1) * -2 -(-4) \\
    &=-16 * -2 + 4 \\ &= 36
    \end{aligned}
    $$

### [[Rechnen mit Zahlen#Division mit Rest]]

Aufgabe:
$a = 56, b = -4$

$$
\begin{aligned}
\frac{a}{b} &= -\frac{56}{4} = -14\\
m &= -14 \\
r &= 56 - (-14) * (-4) = 0
\end{aligned}
$$

Aufgabe:
$a = -389, b = -5$

$$
\begin{aligned}
\frac{a}{b}& = \frac{389}{5} = 77,8 \\
m &= 78 \\
r &= (-389) - 78 * (-5) = 1
\end{aligned}
$$

Aufgabe:
Erweitern Sie die folgenden rationalen Zahlen

1.  $-\frac{2}{27} = -\frac{2 * 2}{2 * 9 * 3} = -\frac{4}{54}$
    $\frac{5}{18} = \frac{5 * 3}{2 * 9 * 3} = \frac{15}{54}$

2.  $1 \text{ und } \frac{1}{n}$
    $1 = \frac{1}{1} = \frac{n}{n}$

Kürzen Sie die folgenden Brüche so weit wie möglich.

1.  $\frac{24}{36} = \frac{2}{3}$, $-\frac{15}{27} = -\frac{5}{9}$ $\frac{123}{6} = \frac{41}{2}$
2.  $\frac{(n+1)(n + 2)}{(n+2)(n+3)} = \frac{(n+1)}{(n+3)}$

[[Rechnen mit Zahlen#Rechnen mit Brüchen]]

Aufgabe:
Zeigen Sie, dass $-\frac{a}{b} = \frac{-a}{b} = \frac{a}{-b}$

## Geometrie

## Funktionen

## Stochastik
