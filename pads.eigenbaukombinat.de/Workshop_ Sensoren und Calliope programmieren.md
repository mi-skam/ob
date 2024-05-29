# Workshop: Sensoren und Calliope programmieren
## 


Diese Präsentation findet ihr hier: https://pads.eigenbaukombinat.de/PuuraZmHT7mzWF_7RNIjZQ?view
![](https://pads.eigenbaukombinat.de/uploads/upload_3927adf04513ca2ac17deb75a5bbe7b5.png)



## Intro

Umfang, Erwartungshaltung, Vorkenntnisse

- rein virtueller Calliope
- Blockprogrammiersprachen vs. textliche Programmiersprachen
- Programmierübung
- Was sind Sensoren ? Was sind Aktoren? 
- Programmierübung


## Calliope kennenlernen


### Features

![](https://pads.eigenbaukombinat.de/uploads/upload_08338ffbbf850347c2259f18bb8ca140.png)

![](https://pads.eigenbaukombinat.de/uploads/upload_9e90ef7c325ebe7a07472e5a3409af23.png)

![](https://pads.eigenbaukombinat.de/uploads/upload_02cb33e99ceb9f5ebd2742eb4dc822c8.png)

![](https://pads.eigenbaukombinat.de/uploads/upload_df5e77f3f1271c354668abede708f713.png)

![](https://pads.eigenbaukombinat.de/uploads/upload_4f77f1b982d2029a5c37ce1e96c04694.png)

![](https://pads.eigenbaukombinat.de/uploads/upload_7e659b2aa4e08f0f7e0f3538083264b3.png)

![](https://pads.eigenbaukombinat.de/uploads/upload_b9891b6680b20a7369fa1912bf1510b8.png)

![](https://pads.eigenbaukombinat.de/uploads/upload_3931f5705f65d21c5182b3095cabb5e8.png)

![](https://pads.eigenbaukombinat.de/uploads/upload_7d3770ceeffa405c60a199925cdcd8d9.png)

![](https://pads.eigenbaukombinat.de/uploads/upload_d26cbaa65ff62f9c5cba38e1a0591dba.png)


![](https://pads.eigenbaukombinat.de/uploads/upload_c31ee1ccc7a3da02c6ab521a35794551.png)

![](https://pads.eigenbaukombinat.de/uploads/upload_424371fe15a859e9310327e137fe44f4.png)

## Wir bauen den Calliope und das Boson-Set zusammen

![](https://pads.eigenbaukombinat.de/uploads/upload_1993dc4f47163730c67707bd9554bdd6.png)

### So verbinden wir die Sensoren / Aktoren mit dem Calliope / Boson

![](https://pads.eigenbaukombinat.de/uploads/upload_701f2e5759822619da0b5db3929608e0.png)


## Programmieren
https://makecode.calliope.cc/#editor
Sprache abhängig von der Sprache des Betriebssystems / des Browsers


### MakeCode kennenlernen

1. App starten
2. Menüs 
3. Programmblöcke kennen lernen
4. Mein erstes Programm
5. Dateien importieren / exportieren / hex und xml Files 
6. Programm auf den Calliope überspielen
7. Den Simulator kennen lernen
8. sich Hilfe suchen

### Bausteine


*Ihr könnt den Code auch gerne herunterladen und selber ausprobieren. Folgt dabei den Links hinter den einzelnen Beispielen. Dabei erhaltet ihr ein xml-File, welches ihr aber erst entpacken müsst (zip). Dann könnt ihr das File in open roberta importieren.*
*Falls ihr alle Beispiele herunterladen laden wollt, folgt [dem](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/mi-skam/Calliope/) hier.*

1. LED testen 
2. Spiele Note
3. Zeige Bild
4. Zeige Text

### Was sind Sensoren ? Was sind Aktoren ?

elektronisch Bauelemente, die auf Umweltinformationen reagieren

## Alarmanlage

Warum eine Alarmanlage?

- Stell dir vor, du möchtest wissen, wenn jemand in deinem Zimmer ist
- Beobachtung von wilden Tieren in der Natur (Foto schießen, Benachrichtigung, Videos)


Wir brauchen:
- Bewegungssensor

Wir lernen:
- Umgang mit einem Sensor und einem Aktor kennenlernen
- Was sind die Unterschiede

##### Bewegungssensor

- PIR Sensor - pyroelektrischer Infrarotsensor
- ~50 Jahre alte Erfindung
- misst die Wärmestrahlung (Bespiel mit dem Feuer -> dann Mensch 37 Grad -> Bewegung)
- die halbkugelartige Form verbessert die Empfindlichkeit

Aufbau:

![](https://pads.eigenbaukombinat.de/uploads/upload_98437457ff398600c7076902ca6aa734.png)


##### Lautsprecher



- nicht die Mebran eindrücken!
- diese Membran schwingt mehre hundert Mal pro Sekunde!
- damit werden Schallwellen erzeugt, die unsere Ohren als Töne wahrnehmen
- hinter der Membran befindet sich ein kleiner Elektromagnet, der die Spule anzieht und abstößt

![](https://pads.eigenbaukombinat.de/uploads/upload_4e77acd280f677908d8b49527ca78ac2.png)

### Programmierung

Ziel: 
- Wir wollen dass der Sensor _dauerhaft_ schaut, ob sich etwas bewegt
- Wenn sich etwas bewegt, soll die LED rot leuchten, zwei Töne (zwei Noten) abgespielt werden
- Und wenn das geschehen ist, soll die LED ausgeschaltet werden
- Beginne wieder von vorn


1. ![](https://pads.eigenbaukombinat.de/uploads/upload_2e809ef72690d9cda35993ef54b2af34.png)
2. ![](https://pads.eigenbaukombinat.de/uploads/upload_4d8cee64cb53d1e98572f62c33621afc.png)
3. ![](https://pads.eigenbaukombinat.de/uploads/upload_26266b04fa90d8c6b97b7453d38a24f0.png)
4. ![](https://pads.eigenbaukombinat.de/uploads/upload_c5527287861a929d980f17a9caf47627.png)
5. ![](https://pads.eigenbaukombinat.de/uploads/upload_70421362916776a5011af7e740350df1.png)
6. ![](https://pads.eigenbaukombinat.de/uploads/upload_10985ee053c13e917dcc790cb67dd989.png)
7. ![](https://pads.eigenbaukombinat.de/uploads/upload_5f6b3291faf47fad6114ee2a2d7ad6d8.png)


## Wir steuern einen Ventilator mit einem roten Knopf
Warum einen Ventilator bauen?

- Fönen
- Kühlen
- Hubschrauber bauen


Wir brauchen: 
- Knopf
- Propeller

Wir lernen:
- einen neuen Sensor
- wir verbinden Sensoren, Aktoren und Eingabedaten

##### Ventilator

![](https://pads.eigenbaukombinat.de/uploads/upload_fb31e7c6297a7f4a56fc8f485749a107.png)


- Strom fließt durch eine Spule im Ventilator und erzeugt dabei ein magnetisches Feld

- Damit der Ventilator drehen kann, müssen wir den den Regler auf dem Boson Module auf 5V stellen

##### Knopf

- ist eigentlich ein Taster
- überbrückt zwei Kabel, solange man den Taster gedrückt hält

Aufbau

![](https://pads.eigenbaukombinat.de/uploads/upload_dc309bba36b72dc451b915dfc7e0373a.png)


### Programmierung

Ziel:

- Ventilator soll den Motor mit dem Propeller anschalten, sobald der rote Druckknopf gedrückt ist.
- Wenn der Knopf nicht gedrückt ist, soll der Motor ausgeschaltet sein. - Zusätzlich wird auf dem Calliope mini noch die RGB-LED von rot (Motor ist aus) auf grün (Motor ist an) umgeschaltet.
- Zeige auf der Anzeige ein Kreuz (wenn der Ventilator aus ist), Zeigen einen Haken wenn der Ventilator läuft

![](https://pads.eigenbaukombinat.de/uploads/upload_bba9b81eb8ec8db483d37199045f820e.png)


1. ![](https://pads.eigenbaukombinat.de/uploads/upload_9929436732f2d458e03dc7816b8efab6.png)

2. ![](https://pads.eigenbaukombinat.de/uploads/upload_457c1aab4963a53c277d7f0e40edffc0.png)

3. ![](https://pads.eigenbaukombinat.de/uploads/upload_e8ef9bc0ca6bc6ced148c408ea6f65d5.png)

4. ![](https://pads.eigenbaukombinat.de/uploads/upload_93858c4808df5ab5973efac9669aadae.png)


## Feuchtigkeit einer Pflanze messen

Warum brauchen wir sowas?

- Damit die Pflanzen nicht immer vertrocknen, weil man sie schon wieder vergessen hat zu gießen :+1: 

Wir brauchen:
- Feuchtigkeitssensor

Wir lernen:
- einen neuen Sensor kennen
- Verarbeitung von komplizierteren Eingabedaten

###### Feuchtigkeitssensor

![](https://pads.eigenbaukombinat.de/uploads/upload_0f56689583fd950beff80b0c842e58b9.png)

- zwei Elektroden, elektrisch leitend
- vergoldet, damit sie nicht rosten
- wenn genug Feuchtigkeit in der Erde ist, kann ein Strom fließen
- je feuchter der Boden, um so höher der Stromfluss


Aufbau

![](https://pads.eigenbaukombinat.de/uploads/upload_3e6908b5e19682689f7f177c6d75ec56.png)


### Programmierung

1. Variable anlegen mit dem Namen Feuchtigkeit
2. ![](https://pads.eigenbaukombinat.de/uploads/upload_e7030ae6c4bd0b559f9f1dbeb9382939.png)
3. ![](https://pads.eigenbaukombinat.de/uploads/upload_68531055d41e65de994580a9002427f9.png)
4. ![](https://pads.eigenbaukombinat.de/uploads/upload_2d2e709e2f658381cbc5038661af965d.png)
5. 










