******![](https://pads.eigenbaukombinat.de/uploads/upload_ba248df7d4aba1a6f72f4ea056bad790.png)


# Blockseminar: VR / AR
*Impuls: Maksim Bronsky*


## Was ist VR / AR?
![](https://pads.eigenbaukombinat.de/uploads/upload_b828862d2d4db8973c8a3d47d24d68df.jpg)

oder???

### Definitionen

**VR**
> Als virtuelle Realität, kurz VR, wird die **Darstellung** und **gleichzeitige Wahrnehmung der Wirklichkeit** und ihrer physikalischen Eigenschaften *in einer* in Echtzeit computergenerierten, interaktiven *virtuellen Umgebung bezeichnet.*

**AR**
> Unter erweiterter Realität (auch englisch augmented reality , kurz AR versteht man die computergestützte Erweiterung der Realitätswahrnehmung. 
> 

<iframe width="560" height="315" src="https://www.youtube.com/embed/_UkLnOdF7VE?start=28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- Erweiterung der "realen Umgebung" um eine digitale Ebene (AR)
- Erzeugung einer "überzeugenden" digitalen Realität (VR)

- Oberbegriff Mixed Reality

![](https://pads.eigenbaukombinat.de/uploads/upload_16789d4ce7db3911e0d2511d8fcaec6a.jpeg)



| Aspekte                                                                    | Komponente                             |
| -------------------------------------------------------------------------- | -------------------------------------- |
| ...Darstellung und ... Wahrnehmung der Wirklichkeit                        | Hardware (Brille, Controller, Sound) |
| in einer in Echtzeit computergenerierten, interaktiven virtuellen Umgebung | Software (z.B. 3D Gameengine)          |

### Hardware

1. Brille (+ Tracker)
2. Controller
3. Sound

![](https://pads.eigenbaukombinat.de/uploads/upload_c17d33c292690d67096ba1efb68a9691.jpg)

![](https://pads.eigenbaukombinat.de/uploads/upload_30225ca6e60318f03f8353a811012a4b.png)

![](https://pads.eigenbaukombinat.de/uploads/upload_787183a3ae16727eca5a4ed8f1468367.png)




#### Kurzer Exkurs - Stereoskopie


- Das linke Auge sieht einen anderen Bildausschnitt als das rechte [Beispiel](https://upload.wikimedia.org/wikipedia/de/thumb/d/d8/168ce63b-bebe-44aa-ab2c-79049dadc85f.gif/330px-168ce63b-bebe-44aa-ab2c-79049dadc85f.gif)
- Das Gehirn interpriert diesen Unterschied und kreiert daraus einen räumliche Sichtweise
![](https://pads.eigenbaukombinat.de/uploads/upload_be3826baaeaf721218f5046bd5cc1443.png)

![](https://pads.eigenbaukombinat.de/uploads/upload_18c7353713a805f7a8a5147bb4c0e189.png)


- technisch wird dies mit Linsen erzeugt

![](https://pads.eigenbaukombinat.de/uploads/upload_1976a5a8955bed6dac435ee6e0f8db7a.png)



- Das Scharfstellen, die sogenenannte Akkomodation ist techisch noch nicht gelöst

- Beispiel: Oculus Quest 2 DEMO

#### Kurzer Exkurs - Geschichte


- VR
  - The Sword of Damocles (1968) https://www.youtube.com/watch?v=Hp7YgZAHLos^
  - VIEWlab by Nasa (1989) https://www.youtube.com/watch?v=3L0N7CKvOBA
  - VFX1 (1995) https://youtu.be/RRLAY8vC0iw?t=341
  - CAVE https://youtu.be/STMcWUtQr1Y


### Software 

- die Umgebung ist das Ergebnis einer Pipeline (digitale Arbeitsteiligkeit) 
    1. Inhalte (Assets) -> Models, Texturen, Sounds 
    2. 3D-Engine -> erzeugt eine digitale Welt und aktualisiert diese mindestens 25 mal pro Sekunde

- dabei gibt es neben den kommerziellen Lösungen (die auch von Indie-Entwicklern genutzt werden) niedrig schwellige Umgebungen wie AFrame (Framework) und Mozilla Hubs (Plattform).
- diese benötigen ein geringeres Vorwissen
- erlauben schnellere Resultate
- geringere Gestaltungsmöglichkeiten


Pipelines im Vergleich

| Pipelines im Vergleich  | klassisch | Framework basiert | Plattform basiert |
| ----------------------- | --------- | ----------------- | ----------------- |
| Umgebung programmieren  | ja        | nein              | nein              |
| Umgebung gestalten      | ja        | ja                | optional          |
| Inhalte erzeugen        | ja        | ja                | optional          |
| Interaktionen gestalten | ja        | ja                | nein              |


#### Kurzer Exkurs - AFrame Framework AR/VR im Web

![](https://pads.eigenbaukombinat.de/uploads/upload_c82ef5fec4981dd3e3d5d873458de710.png)

[Page](https://aframe.io/)

```htmlmixed=
<!DOCTYPE html>
<html>
  <head>
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" src="https://cdn.glitch.com/458655f7-097c-43f8-84f1-9d539751dbbc%2Freticle.png?v=1629468131761" material="transparent: true"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </body>
</html>
```
[DEMO](https://miskam-aframe-base.glitch.me/)

- Einsatzmöglichkeiten: 

Medienpädagogische Themen: Visualierung, Animationen, Interaktionen, einfache Spiele


#### Kurzer Exkurs - Mozilla Hubs eine Soziale Plattform für Desktop / Mobile / VR

![](https://pads.eigenbaukombinat.de/uploads/upload_7f2a42c141df3e5c46f1db67343ce8c8.png)

[DEMO](https://hubs.mozilla.com/2SkiZHc/incomparable-wellmade-turf)

- Einsatzmöglichkeiten: 

E-Learning, Shows, Messen, Festivals, Ausstellungen 


### Anforderungen an die Gestaltung von AR / VR-Räumen


#### 3dof vs 6dof

- Begriff der **Freiheitsgrade**: 0dof 3dof vs 6dof (dof = degrees of freedom, freiheitsgrade)

- 3dof: "in den raum schauen"
    - nach links und rechts schauen
    - nach oben und unten schauen
    - den kopf nach links und rechts verschieben
- 6dof: "den raum durchschreiten"
    - 3dof
    - vorwärts und rückwärts gehen
    - nach links und rechts gehen
    - sich strecken oder bücken

- 3dof eignet sich für das stationäre konsumieren von Inhalten (Architektur, 3D-Videos, Produkte)

- die Wahl von 3dof oder 6dof wird stark von technischen Parametern bestimmt

#### Simulatorkrankheit (Simulator sickness, Motion sickness, Kinetose)

- Bewegung in der VR kann zu widersprüchlichen Sinneseindrücken führen und Übelkeit auslösen
- Achterbahnfahrt in VR ❌ 
- Autofahren in VR ✅

- Tipps: solange das Auge eine statische Referenz hat, die sicht nicht zu einem selbst verändert, wird die motion sickness reduziert
- Workaround: Teleportation
    - springen im Raum

<iframe width="560" height="315" src="https://www.youtube.com/embed/RCQhz4NKJqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Räumlicher Klang

- VR ist nicht nur auf visuelle räumliche Informationen beschränkt
- Sound ist per definitionem räumlich, aber erst in einem VR Kontext sinnlich gut erfahrbar

- kann genutzt werden um Gruppen zu bilden und zu vereinzeln. Ermöglicht Breakoutrooms ohne Räume bilden zu müssen, allein über die Distanz

#### Interaktionen gestalten (wenn möglich)

- Nutzerinteraktionen müssen in "Reichweite" sein
- Nutzerinteraktionen dürfen sich nicht zu weit über den Sichtwinkel der Brille ausstrecken
- Einschränkungen des Sichtwinkels der Brille
- die Nutzergesten sollten so gestaltet werden, dass die Controller jederzeit von den Trackern der Brille gesehen werden können 



