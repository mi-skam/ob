

# Konzept

### Ideen
1. "Gieß mich" (Feuchtigkeitssenoren)
2. Umweltdaten (Feinstaub, Temperatur)
3. Low-Energy solare Sensoren

## Gieß Mich & Umweltdaten

## Architektur

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/37kGva3NW8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/U3uoa0QX5X4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>![[4093_Bird_Bestueck_PLAN.jpg|2]]!


![[Screenshot 2023-05-26 at 21.22.31.png]]
1. Hardware (Kosten ~100€ pro Controller)
	1. Gehäuse 
		1. Selber drucken  [[Gehäuse Aus Dem 3d-Drucker – Wasserdicht Und Lichtdurchlässig#^211cff]]
	2. Controller
		1. D1 / ESP32 5-15€
	3. Solarpanel
		1. 5,5 - 6V Panels
	4. Batterien 
		1. NiMH oder LiPo
	5. Sensoren
		1.  Feuchtigkeit
		2. Luftdruck
		3. PM25, PM50
	6. Ausgaben
		1. EINK Display ~50-70€
2. Externe Daten 
	1. OpenAQ?
3. lokale Daten

### Low-Energy solare Sensoren
![[4093_Bird_Bestueck_PLAN.jpg|500]]
![[Suneater-Schüler-Board.jpg|500]]

### Projektschritte

1. Design thinking (Drinnen, Draußen, Display, Sound, Autonomie)
2. Hardware bestellen
3. Zusammen bauen / messen / debuggen
4. Software schreiben 
	1. Sensor anbindung
	2. Ausgabe auf Display
	3. 
#zeitz 





## Gedanken zur ersten Skizze von Claudia

| Kontext            | Dateninterpretation                                                                                                                                                                     | Kommentar |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Feuchtesensor      | "Gieß mich" anzeigen (Schwellwert Trockenheit)                                                                                                                                          | Display   |
| **Temperatur**     | Kontrastierende Darstellung von positiven Einflüssen                                                                                                                                    |           |
| Bodenfeuchtigkeit  | zwei Orte in unmittelbarer Nähe                                                                                                                                                         |           |
| Feinstaubbelastung | siehe Bodenfeuchtigkeit, _(Wasser: Strömungsgeschwindigkeit, Sauerstoffgehalt, Temperatur von Elster/Mühlgraben/Wilder Bach/Schwanenteich … ? Sensoren als gelbe Quietsche-Entchen? …)_ |           |
| Mobilität          | _Kalorienverbrauch, Schritte, durchlaufene Schuhsohlen versus Reifenabrieb (humorvoll - was könnte das sein?)_                                                                          |   ruhiger Ort, Hörsitz     |
| Pflanzengeräusche  | Mikrofon, Lautsprecher, Verstärker, Sonifikation                                                                                                                                                                                    |           |

