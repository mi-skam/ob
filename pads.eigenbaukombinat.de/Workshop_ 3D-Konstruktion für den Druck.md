# Workshop: 3D-Konstruktion für den Druck
## mit FreeCAD

![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb46077265872d.png)


### Intro

**ZIELE**

-   Von der Zeichnung zum physischen Objekt: Workflow
- Teile vermessen
![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb460772658722.jpg)
![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb460772658723.png)

- In FreeCAD skizzieren und konstruieren
![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb460772658724.png)

- Druckvorstufe (Cura Screenshot)
![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb460772658725.png)

- Im 3D Drucker ausdrucken 

**EINFÜHRUNG**

- FreeCAD öffnen und Workbenches zeigen (Start und Partdesign)
- Einstellungen anpassen: Rendering, Farben, Workbench, Mauseinstellung
- ![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb460772658731.png)

- DEMO_grindplate öffnen
- Navigation: Maus, Symbolleisten, Ansicht wieder herstellen
- Comboansicht: Leertaste um zwischen den Arbeitsschritten hin und her zu schalten

Pacman
- Variante 1: Erzeugen eines zylindrischen Objektes
- Variante 2: 2D-Skizze und anschließendes Aufpolstern
- Vor- und Nachteile:
    - Aufwand
    - Übertragen auf andere Konstruktionsprogramme (CAD)
    - Gestaltungsmöglichkeiten


### Skizzieren


- Skizzenelemente und Beschränkungen
- Aufgabe 1: Kreis mit Durchmesser 100mm konstruieren
![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb460772658726.png)
    - Aufgabenoptionen durchgehen
    - Kreiswerkzeug (zweimal linke Maus, einmal rechte Maustaste zum Beenden)
    - zum Solver schauen: 3 Freiheitsgrade, was sind Freiheitsgrade
- Aufgabe 2: Kontur aus Linien und Bogen zeichnen
    - Koinzidenzbeschränkung
    - Winkelbemaßung
    - Längenbeschränkung
    - ![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb460772658727.png)
    - Endpunkte und Punkt auf Kreisbogen
    - tangentiale Beschränkung. Was ist eine Tangente?
    - Radius festlegen
    - Linie zeichnen
    - tangentiale Beschränkung
    - Dann Punkt auf Objekt
    - Reicht das? Nein, warum nicht? "Broken face"
    - zusätzliche Linie
    - ![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb460772658728.png)
- Übung 1: L-förmiges Winkelprofil
    - Zusatzhinweis: Polyline Werkzeug nutzen (kurze Demo, wir gehen später noch näher darauf ein)
    -  
- Aufgabe 3: Ein Rechteck mit Nut erzeugen
    - Längeneinschränkung
    - Breiteneinschränkung
    - Symmetrische Einschränkung zum Koordinatenusprung (Reihenfolge ist wichtig)
    - Nut
    - ![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb460772658729.png)
- Aufgabe 4: Linienzugbefehl kombiniert Linien und Bögen
    - Einen Linienzug erstellen. Mit M zwischen fünf Modi wechseln
    - Fünf Freiheitsgrade: Tipp: Erst Geometrisch, dann die Maße
    - ![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb46077265872a.png)
    - ![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb46077265872b.png)
    - Noch einen Kreis malen (Farbe wechselt)
    - Durchmesser festlegen 
    - Durchmesser benamsen und in Sketch parameters rumspielen (Sketch > Constraints > ...)
    - ![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb46077265872c.png)
- Aufgabe 5: Hilfskonstruktionen
    - Hinzufügen eines Polygons
    - Konstruktionskreis umschalten 
    - Haus vom Nikolaus
    - ![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb46077265872e.png)
    - schräge Nut (Beispiel um vorgegebene Constraints zu verändern)
    - ![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb46077265872f.png)
- Aufgabe 6: externe Kanten referenzieren
    - ![](https://pads.eigenbaukombinat.de/uploads/aaa9968eabbbb460772658730.png)

**Ressourcen**

weiterführendes Dokument: Sketcher Tutorial von "chrisb" auf [deutsch](https://owncloud.gwdg.de/index.php/s/p2TZ4VkZs6A3y3B/download) und [englisch](https://owncloud.gwdg.de/index.php/s/eZisrfTTCCjDEd9/download) (minimal aktueller)








