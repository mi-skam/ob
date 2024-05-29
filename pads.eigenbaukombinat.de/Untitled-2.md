## Partner:
1. Ilka Bickmann
Vorstandsvorsitzende
science2public – Gesellschaft für Wissenschaftskommunikation e.V.
Krukenbergstraße 2
06112 Halle (Saale)          


2. Steffen Hönig
Elsterweg 4
06722 Wetterzeube


## Präambel:
Der Verein Science2public bringt Forschung, Gesellschaft und Zukunft zusammen. Ausgehend von der Tatsache, dass Wissenschaft für eine gelungene Kommunikation neue, andere Wege und Formen der Interaktion braucht, gestaltet der Verein verschiedene Formate der Wissenschaftskommunikation.

Steffen Hönig ist freier Entwickler, der sich in seinem Wirken und Schaffen für innovative, nutzerfreundliche Interfaces, im Speziellen AR/VR, interessiert. Hierfür erarbeitet er Umgebungen und gestaltet verschiedene Sensibilisierungsformate.

## Aufgabenbeschreibung:
Der Verein Science2public ist Ausrichter der KI-Convention im Land Sachsen-Anhalt. Pandemiebedingt soll ein virtuelles Format für diese Veranstaltung erarbeitet und genutzt werden. Als virtuelles Format wurde von Science2public die Plattform Mozilla Hubs ausgewählt. Steffen Hönig soll nun den Aufbau, das Testen und die Gewährleistung der Infrastruktur der virtuellen KI-Convention 2021 auf Basis der Plattform Mozilla Hubs sicher stellen. Science2public erstellt dagegen die virtuellen Räume für die einzelnen Vortragssessions.


### Infrastruktur:

Bereitstellen und Betrieb einer privaten Instanz von Mozilla Hubs auf der Service Plattform von Amazon (AWS) auf EU-Servern, um DSGVO konform arbeiten zu können. Wir sorgen für den Betrieb der Plattform bis 31.12.2021.  

### Bereitstellung

Zu dieser Plattform gehören folgende Komponenten.

- zwei Templates (für dev- und prod-Umgebung) für den Betrieb von Mozilla Hubs auf AWS (CloudFormation)
- Einbinden von 2 DNS-Einträgen (Subdomänen), die von Science2public bis 1.9.2021 zur Verfügung gestellt werden. 
    - Hauptadresse für das Erreichen der Hubs-Instanz (hubs.*)
    - Addresse für den Link-Service (link.* oder *.link) 
    

Es werden für die jeweilige Projektphase notwendige Templateanpassungen geliefert. Diese hängen vor allem von der zu erwartenden Nutzermenge ab. Wir erwarten ca. 150 Teilnehmer:innen an der KI-Convention. In der Phase der Entwicklung der Räume und der Tests genügt eine - mit geringeren Ressourcen ausgestattete - Entwicklungsumgebung (ab hier: "dev" genannt.) Für den Zeitraum der Convention wird auf ein Produktiv-Template (ab hier: "prod") gewechselt.

### Betrieb

 In der Entwicklungsphase wird die dev-Umgebung ab dem **1.10.2021** rund um die Uhr Science2public zur Verfügung stehen, um die erstellten virtuellen Räume einbinden zu können. Wir werden in dieser Zeit die prod-Umgebung parallel entwickeln und spätestens zum **15.11.2021** auf diese migrieren, um den Betrieb sicher zu gewährleisten. Nach der Convention wird diese bis zum Ende der Vertragslaufzeit wieder auf die dev-Umgebung zurück migriert. Diese Zeit steht für Übergaben, Dokumentation und dergleichen zur Verfügung. 
 
### Testing
Steffen Hönig evaluiert in der dev-Umgebung die technische Performance der privaten Hubs-Instanz bzgl. der möglichen Teilnehmer:innenmenge und deren Interaktionsmöglichkeiten und liefert erfahrungsgesättigte Angaben. 

### Beratung
Steffen Hönig berät Science2public bei der Erstellung eines Workflows für die Erstellung der eigenen Räume in der VR. 
Er erstellt ein Konzept, um entsprechend der technischen Möglichkeiten drei Level von Interaktionen seitens der Teilnehme:innen der KI-Conventionen zu ermöglichen: 1. direkte Interaktion mittels Avatar in der VR-Welt; 2. Perzeption (Ghostfunktion) in der VR-Welt; 3. Streaming aus der VR-Welt auf eine Plattform (bspw. youtube). Damit wird eine Teilnahme an der KI-Convention mit verschiedenen Interaktionsgraden entsprechend der technischen Restriktionen ermöglicht. 
Steffen Hönig dokumentiert den Implementierungsprozess der Hubs-Instanz, um das Wissen an künftige Projektpartner von Science2public weitergeben zu können. 

## Kosten
Es wird eine pauschalisierte Abrechnung für die definierten Leistungen vereinbart. Die Summe beträgt 5.000 EUR (netto).

## Rechte:
Die Rechte für die Erstellung der VR-Räume verbleiben bei Science2public. Die von Steffen Hönig erstellten Skripte werden unter einer Open Source-Lizenz veröffentlicht. 

## Laufzeit:
Der Vertrag tritt zum 1.9.2021 in Kraft und endet zum 31.12.2021.
