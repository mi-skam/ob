## KI in der Medienpädagogik 
<!-- slide bg="[[ki--tetris-merseburg.jpeg]]" data-background-opacity="0.2" -->
_Blockseminar, 04.-6.10.23_

Lehrende: Stefan Meißner, Maksim Bronsky (Steffen Hönig)

## Kriterien der Bewertung

Kriterien der Beurteilung:
- Konsistenz und Koherenz des Werkes
- Narration / Narrativ :-> "roter Faden", Argumentation
- Innovation
- Zielgruppenorientierung
- Reflexion der Anwendungsmöglichkeit an konkretem Beispiel (1 - 2 Seiten)

Leistungsnachweis **bis Dezember**.

Ideen für Leistungsnachweise:

Kinderbuch, Handreichung wissenschaftliches Arbeiten, Plot für Seminare/Vorlesung, Webseite (mit Design und Code), Anwendung teachablemachine (Comic, Animation)



## Linksammlung für KI in der Medienpädagogik WS23


### Übersicht

![](https://pads.eigenbaukombinat.de/uploads/5e81d515-fefa-4184-93f5-b13155441756.jpg)


| Beschreibung                                      | Link                                                                                                        |
| ------------------------------------------------- |:----------------------------------------------------------------------------------------------------------- |
| Excallidraw Board                                 | https://excalidraw.com/#room=be0242dc5a29c0a1d67e,a7a9abW0p7Z-VhkqIw9iNQ                                    |
| Discord                                           | https://discord.gg/P2tvuJz2                                                                                 |
| Unsafe Prompts                                    | https://docs.google.com/spreadsheets/d/1nzhxHNN5Wzese3ItND_RWjbl1hqC1XF5CtEd9zNK5Hg/edit#gid=0              |
| teachable machine                                 | https://teachablemachine.withgoogle.com                                                                     |
| Generating Children's Story with GPT-3 and DALL-E | https://www.surgehq.ai//blog/generating-childrens-stories-using-gpt-3-and-dall-e                            |
| DALL-E 2 image database                           | https://dalle2.gallery/#search                                                                              |
| DALL-E 2 Prompt Engineering Guide                 | https://docs.google.com/document/d/11WlzjBT0xRpQhP9tFMtxzd0q6ANIdHPUBkMV-YB043U/edit#heading=h.25onmtjmi79l |
| Scribble Diffusion                                | https://scribblediffusion.com                                                                               |
| Remove bg                                         | https://www.remove.bg/de                                                                                    |
| CapCut Videoeditor                                | https://www.capcut.com/de-de/                                                                               |
| Better ChatGPT Handbook                           | https://www.reddit.com/r/ChatGPTCoding/comments/zjn7ar/the_chatgpt_handbook_tips_for_using_openais/         |
| Best practices for prompt engineering by OpenAI   | https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api           |
| ChatGPT und die Mathematik                        | https://www.youtube.com/watch?v=medmEMktMlQ                                                                 |
| Generate the voiceovers with Elevenlabs.          | https://beta.elevenlabs.io/                                                                                 |
| Generate the AI animation with D-ID               | D-ID - https://www.d-id.com/                                                                                |

## Abstract des Seminars

„Warm-up zum Thema“

    - Was ist Künstliche Intelligenz, Machine Learning und Large Language Models (LLMs)
    - Welche LLMs gibt es ? Welche Modalitäten (Bild, Audio, Video) bedienen Sie
    - Prompting

      „Tutorial - Phase“ 
		1. simples Prompting
		2. kombiniertes Prompting - wie erschaffen ein „Musikvideo“, indem wir LLMs mit anderen Werkzeugen kombinieren

Intermezzo - scribble Diffussion session > Kopf ausschalten und skizzieren und prompten mit kurzen Feedbackintervallen

2. Einheit
    „Improve your prompting“

        - Was ist das Wesen des Prompting? Kann ich die Ergebnisse der LLMs systematischer beeinflussen? 
        - Best practices, Styleguides, Ressourcen


    „Tutorial - Phase“
         Anime / Trickfilm erzeugen, die aus einem Text und Bildern besteht. Der Clou ist, dass wir zueinander passende Fragmente erzeugen müssen.

Intermezzo - scribble Diffussion session > Kopf ausschalten und skizzieren und prompten mit kurzen Feedbackintervallen

3. Einheit
„Going beyond - going back to the roots“

- Mittels teachablemachine von Google arbeiten wir uns an die Grundlagen von KI-Modellen heran, um ein Intuition für die Prinzipien zu entwickeln und
- Ein Beispielmodell trainieren und anwenden

„Tutorial - Phase“
      - Ein eigenes Modell trainieren und präsentieren.



## Kurz zu mir (Maksim)

- Software Engineer @ [newObjects GmbH](https://new-objects.com)
- bis 2022: Projektmitarbeiter Komplexlabor Digitale Kultur an der Hochschule Merseburg
- Modul 7 im [Zertifikatskurs](https://www.hs-merseburg.de/hochschule/information/weiterbildungsangebote/highlights/zertifikatskurs-digitalcoach-fuer-schulen-und-weitere-bildungskontexte/) "Digitalcoach für Schulen und Bildungskontexte"

## Was sind KI und LLMs?

Google: "Das **Large Language Model** (LLM) ist eine Art von Algorithmus der künstlichen Intelligenz (**KI**), der **Deep**-**Learning**-Techniken und massiv große Datensätze verwendet, um neue Inhalte zu verstehen, zusammenzufassen, zu generieren und vorherzusagen."

Was sagt ChatGPT?

## Was ist eigentlich Machine Learning (ML) ?
- Ein Teilbereich der künstlichen Intelligenz
- erlaubt Maschinen aus Daten zu lernen und Vorhersagen zu machen, **ohne** dafür explizit programmiert zu werden
- befähigt dazu:
	- Muster zu erkennen
	- aussagekräftige Erkenntnisse aus Daten zu gewinnen
	- Performance kontinuierlich zu verbessern (weiteres Training)

## Unterschied zur Programmierung von Computern

### Eigenschaften programmierter Software
- Anweisungen werden in Form von Code expliziert, Es geht darum dem Computer zu sagen, was er zu tun hat
-  Regeln, Bedingungen und die Logik sind gesetzt (deterministisch)
--
### Eigenschaften von ML basierter Software
- ML-Modelle werden mit Daten gefüttert und lernen Relationen, Muster, Regeln (heuristisch)
- Können von ihren Trainingsdaten verallgemeinern und diese auf neue (noch nie gesehene Daten) anwenden und Vorhersagen treffen

## Wie werden diese Modelle trainiert?

- Mehrstufiger Prozess:
	- Datenerhebung
	- Aufbereitung der Daten
	- Wahl der statistischen Funktion (Regression, Klassifikation, Deep Learning)
	- Training
	- Evaluation

--
## Beispiel: Ein Bild erkennen

Problem: Wir wollen ein intelligentes Tool entwickeln, das uns sagen kann, ob Vögel auf Bildern zu sehen sind oder nicht.

--

**Datensammlung**:
- Zuerst sammeln wir viele Bilder. Auf einigen dieser Bilder sind Vögel zu sehen, auf anderen nicht. Wir werden diese Bilder verwenden, um unser Tool zu trainieren.

--

**Datenvorverarbeitung**:
- Bevor wir unser Tool unterrichten, müssen wir die Bilder vorbereiten:
   - Wir stellen sicher, dass alle Bilder die gleiche Größe haben.
   - Wir sorgen dafür, dass die Farben in den Bildern für das Tool leichter zu verstehen sind.
   - Wir bringen Abwechslung in die Bilder, indem wir z. B. ihren Winkel oder ihre Position verändern.
   - Wir sagen dem Tool, auf welchen Bildern Vögel zu sehen sind und auf welchen nicht.

--

**Modellauswahl**:
- Als Nächstes wählen wir ein spezielles Verfahren aus, mit dem das Programm aus diesen Bildern lernen kann. Wir entscheiden uns für eine Methode namens "Convolutional Neural Networks", weil sie sehr gut im Verstehen von Bildern ist.

--

**Training**:
- Nun zeigen wir dem Tool die vorbereiteten Bilder:
   - Am Anfang weiß das Tool nichts und stellt zufällige Vermutungen an.
   - Wir helfen ihm, besser zu werden, indem wir ihm sagen, ob seine Vermutungen richtig oder falsch sind.
   - Das Tool nutzt die Mathematik, um sich anzupassen und bessere Vermutungen anzustellen. Wir machen das viele Male mit allen Bildern.
--

**Evaluation**:
-  Um zu überprüfen, wie gut unser Tool ist, müssen wir:
	- Ein Teil des Datensatzes als *Testdatensatz* nehmen, den wir **NICHT** als Trainingsmaterial verwendet haben
	

