# Tetraxpix 2.0


![Tetrapix Cover](https://i.imgur.com/PZg44Yl.png =800x500)

## Intro

Das Tetrapix ist auch in der zweiten Iteration ein physisches Objekt, bestehend aus einem Matrix-Display, welches von einem Mikrocontroller gesteuert wird und als ein "merkwürdiges Artefakt" zu einem anderen Zugang zu informatorischer Bildung einlädt. Es ist nicht nur simpler (grobe Auflösung, einfachere Microcontroller-Architektur), sondern auch "anders", es ist riesig, aber kein Computer, eingeschränkt, aber kein Tablet oder Smartphone, und verhindert damit eine voreilige Klassifikation in diese oder jene Nutzungskategorie. Die Hoffnung, die wir daran knüpfen, lautet, ein spielerisch-unbelastetes Verhältnis zu programmierbaren Systemem aufzubauen.

## Projektstand

![Tetrapix Tiles](https://i.imgur.com/A3xuRur.png =500x300)
Mit einem neuen 5x8 oder 11x12 Kachel großen Display, welches in einem Rahmen aus Aluminiumprofilen steckt, ergibt sich die Möglichkeit, die Kacheln selber als Eingabegeräte zu nutzen. Der Wechsel der Gehäusekonstruktion auf Aluminiumprofile war notwendig, da die upcyclten Milchtüten leider nicht stabil genug waren. Wie man auf dem Bild sehen kann, ist auf der Rückseite der 6cm x 6cm großen Kachel eine Erhöhung, welche auf einen Knopf wirkt, der neben die LED gelötet wird. Die Knöpfe haben einen sehr geringen Hub (1-2mm), sodass die Flexibilität der im 3D-Druckverfahren erzeugten Kacheln ausreicht, um diese auszulösen.

An der Hardware hat sich sonst nichts weiter geändert, wir arbeiten weiterhin mit einem Arduino 328P, an dem eine RGB-Lichterkette hängt, und ein zusätzlicher NES-Klon Controller zur Eingabe. 

![Tetrapix Display Simulator](https://i.imgur.com/LHLnHXH.jpeg =300x300)

Als wir die erste Version von Tetris für das Tetrapix entwickelt haben, ging es vor allem darum einen funktionalen Prototypen herzustellen, das galt für die Software genauso wie die Hardware. Dabei zeigte sich, dass wir für die RGB-Lichterkette eine zusätzliche Software-Abstraktion entwickeln mussten, eine kleine Bibliothek welche es dem/der Entwickler/Entwicklerinleichter macht in 2D-Koordinaten zu denken (siehe rosa Pfeile) und nicht als eine eindimensionale Kette von LED-Ids (siehe schwarze Zahlen.)
Mit dieser Bibliothek hat sich das ursprüngliche Tetris-Programm enorm vereinfacht. 

Unsere Softwareentwicklungen befinden sich auf https://github.com/digitalekultur/tetrapix und stehen unter der freien und offenen GPL3.0 Lizenz.


## Ausblick

Tetrapix 2.0 ist in Teilen bereits fertiggestellt, so ist z.B. der Satz an Kacheln für das kleine Display bereits gedruckt und softwareseitig die Demo-Anwendung wie beschrieben an die neue Umgebung angepasst. Bezogen auf das Gehäuse gibt es allerdings noch offene Punkte, was die Konzeption und Produktion anbelangt. Auch sind die Knöpfe und die LEDs noch gemeinsam zu verlöten und auf einen passenden Träger aufzubringen.


---

https://imgur.com/a/tqlf8CQ#A3xuRur (Alle Grafiken)