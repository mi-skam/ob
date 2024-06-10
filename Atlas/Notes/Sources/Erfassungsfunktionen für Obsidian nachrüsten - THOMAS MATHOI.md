---
in: "[[Clippings]]"
related: 
authors: "[[Thomas Mathoi]]"
url: https://www.mathoi.at/2024/04/27/erfassungsfunktionen-fuer-obsidian-nachruesten/
created: 2024-05-31
tags: source/browser
---

Einige Apps für die Notizensammlung oder das Aufgabenmanagement sind bereits von Haus aus mit diversen Möglichkeiten zum Erfassen neuer Inhalte ausgestattet. Damit lassen sich für die Dateneingaben beispielsweise per Tastenkombination oder Wischgeste Eingabefenster für [Schnellnotizen](https://support.apple.com/de-de/guide/notes/apdf028f7034/mac) oder Webclipper aufrufen. Was wie eine selbstverständliche Kleinigkeit klingt, ist in [Obsidian](https://www.mathoi.at/obsidian-sharpen-your-productivity/) durchaus knifflig. Denn Erfassungsfunktionen für neue Notizen, Ideen oder Aufgaben hat Obsidian erstmal nicht mit eingebaut. Falls gewünscht oder erforderlich, kann man sie jedoch mit Kurzbefehlen oder einer externen Erweiterung selber nachrüsten.

Erfassungsfunktionen beziehen sich auf die Möglichkeit, innerhalb einer Anwendung eine neue Idee, Aufgabe oder Notiz möglichst rasch und unkompliziert aufschreiben und speichern zu können, ohne dabei die aktuelle Tätigkeit aus den Augen zu verlieren, oder den Kontext wechseln zu müssen. Für diese Situationen ist es praktisch, wenn man mit einer Tastenkombination etwas eintippen kann, das dann automatisch zu einer bestimmten Notiz hinzugefügt oder als neue Notiz in einem definierten Ordner in Obsidian gespeichert wird. Von dort aus kann dieser neue Inhalt dann zu einem späteren Zeitpunkt überprüft und weiter verarbeitet werden.

Grundsätzlich gibt es für das Nachrüsten der fehlenden Erfassungsfunktionen in Obsidian zwei Wege, mit demselben Ziel. Einer dieser beiden Wege führt über zusätzliche Apps, mit denen sich verschiedene Inhalte zum Obsidian-Vault hinzufügen lassen. Dafür eignen sich gleich mehrere Apps von Drittanbietern, beispielsweise [Drafts](https://getdrafts.com/) oder [Funnel](https://www.notesightlabs.com/funnel). Auch Launcher-Apps wie [Alfred](https://www.alfredapp.com/) oder [Raycast](https://www.raycast.com/) bieten die Möglichkeit, über spezifische [Workflows](https://github.com/hauselin/obsidian-alfred?tab=readme-ov-file) neue Inhalte in einer neuen Notiz zu erfassen oder in der [täglichen Notiz](https://www.mathoi.at/2023/07/07/die-taegliche-notiz/) hinzuzufügen.

Auf dem anderen Weg – und genau um den geht es hier in diesem Beitrag – kommt man ohne zusätzliche Apps aus und nutzt lediglich das, was eigentlich schon da ist. Dazu benötigt man ein paar Siri-Kurzbefehle oder als Alternative das [QuickAdd](https://www.mathoi.at/2023/09/29/obsidian-kaizen-quickadd/)\-Plugin für Obsidian. Die Siri-Kurzbefehle funktionieren nur auf Geräten von Apple. Windows-Nutzer haben beispielsweise mit [AutoHotkey](https://www.autohotkey.com/) eine Möglichkeit, Skripts zur erstellen, mit denen sich ähnliches bewerkstelligen lässt.

## Um die Inhalte geht’s …

Zunächst geht es aber erst einmal um die Inhalte, die man erfassen möchte. Tiago Forte schreibt in seinem Buch *[Building a Second Brain](https://www.mathoi.at/2023/03/21/buch-tipp-building-a-second-brain-von-tiago-forte/)*, dass man alles aufschreiben bzw. erfassen soll, sobald *something resonates*. Wenn man also beispielsweise beim Lesen oder in einem Vortrag ein inneres Signal bekommt, dass da etwas Wissenswertes oder Interessantes ist, das man sich notieren oder markieren sollte. Vielleicht auch, um später noch damit zu spielen, Ideen zu spinnen, oder etwas daraus zu entwickeln. Und David Allen vertritt in seinem *[Getting Things Done](https://www.mathoi.at/tag/gtd/)*\-Ansatz ebenfalls die Auffassung, dass man alles notieren und in einem sicheren System speichern sollte, damit man die wertvolle Kapazität im eigenen Gehirn nicht für das Merken von noch zu erledigenden Aufgaben und ähnlichem verschwenden muss.

Allerdings ist der Begriff *zweites Gehirn* von Tiago Forte in diesem Zusammenhang jedoch eher irreführend bis [märchenhaft](https://www.mathoi.at/2023/05/12/das-maerchen-vom-zweiten-gehirn/). Da trifft es das *sichere System* oder noch besser, das *[Productive Knowledge Management](https://www.mathoi.at/2024/02/21/das-pkm-schalenmodell/)*\-System (kurz: PKM) schon deutlich besser. Nämlich ein System, in das man alle relevanten Informationen einpflegt und zudem eine Methode entwickelt hat, mit der man dann im Bedarfsfall wieder darauf zugreifen und daran weiter arbeiten kann. So ein PKM-System ist keine einmalige, statische Einrichtung, sondern ständig in Arbeit bzw. im Fluss. Zwar kann man mit Obsidian ein solches System aufbauen, aber es ist letztendlich weniger das Ziel, ein perfektes System zu schaffen, sondern vielmehr den darin gespeicherten Informationen einen Sinn zu geben.

![](Atlas/Utilities/Attachments/Erfassungsfunktionen-Inhalte.png)

Übersicht der zu erfassenden Inhalte

Welche Informationen in das PKM-System eingepflegt werden, bleibt im Endeffekt jedem selbst überlassen. Primär ist es jedenfalls meistens Text, den man erfasst. Natürlich können mitunter auch Fotos, Bilder, gescannte Dateien oder PDFs dabei sein. Aber meistens notiert man sich etwas, indem man es aufschreibt, also textlich erfasst. Die Palette reicht dabei von Aufgaben über Ideen und spontane Gedanken, Textstücke und Zitate aus Gelesenem, bis hin zu Website-Adressen zum späteren Lesen, oder Buch- und Musiktipps.

## Erfassungsfunktionen mit Siri-Kurzbefehlen

Grundsätzlich kann man Obsidian zum Erfassen von neuen Inhalten wie ein digitales Notizbuch verwenden. Das bedeutet, dass man die App öffnet, eine neue Datei anlegt und zu schreiben beginnt. Meistens ist man aber gerade mit etwas anderem beschäftigt, beispielsweise mit dem Lesen einer Website und befindet sich daher in einer anderen App, von der aus man nun eine Information in das PKM-System speichern möchte. Für dieses Erfassen von Informationen außerhalb von Obsidian bietet selbiges wie bereits oben erwähnt von Haus aus keine Funktionen an. Das Wechseln der App zu Obsidian ist Voraussetzung. Möchte man das umgehen, gibt es unter macOS und i(Pad)OS die Möglichkeit, das mit [Siri-Kurzbefehlen](https://www.mathoi.at/tag/kurzbefehle/) zu bewerkstelligen.

![](Atlas/Utilities/Attachments/Erfassungsfunktionen-Uebersicht.png)

Übersicht der eingesetzten Erfassungsfunktionen

Je nach zu erfassendem Inhalt kann man dafür vier verschiedene Kurzbefehle verwenden. Die meisten davon wurden hier im Blog bereits vorgestellt, haben sich aber im Laufe der Zeit weiterentwickelt. Sie kommen ohne zusätzliche Software aus und können mit den vorhandenen Bordmitteln erstellt werden. Wenn man die Kurzbefehle sowohl am Mac als auch am iPhone oder iPad verwenden möchte, wird die [Synchronisation des Vaults über die iCloud](https://www.mathoi.at/2023/06/29/obsidian-sync-mit-icloud-drive/) von Apple empfohlen. Die hier vorgestellten Kurzbefehle wurden nicht für den Einsatz mit [Obsidian-Sync](https://obsidian.md/sync) oder anderen Synchronisationsdiensten entwickelt bzw. getestet. Wenn man Obsidian ausschließlich lokal am Mac verwendet, dann kann man die Kurzbefehle entsprechend anpassen und verwenden. Wer Obsidians eigenen Sync-Service nutzt, sollte unbedingt einen Blick auf das Kurzbefehle-AddOn *[Actions For Obsidian](https://actions.work/actions-for-obsidian)* von Carlo Zottmann werfen. Das klappt nicht nur mit Obsidian-Sync einwandfrei, sondern damit lassen sich manche Problemstellungen teilweise noch eleganter lösen, als mit der sogenannten [Vanilla](https://de.wikipedia.org/wiki/Plain_Vanilla#Beispiele_in_der_Informationstechnik)\-Version der Kurzbefehle-App.

![](Atlas/Utilities/Attachments/Erfassungsfunktionen-Kurzbefehle-1024x193.png)

Erfassungsfunktionen mit Siri-Kurzbefehlen

### Neue Notiz

Für den digitalen Notizblock.md – der hieß hier bis vor kurzem [Skizzenblatt.md](https://www.mathoi.at/2023/12/08/skizzenblatt-md/) – verwende ich einen Kurzbefehl zum Erfassen von neuen Notizen, Ideen, Gedanken, aber auch Aufgaben und alles andere, was ich nicht vergessen sollte. In der ursprünglichen Version war dieser Kurzbefehl zur rein textbasierten Eingabe gedacht. In der Zwischenzeit gibt es auch eine eingebaute Diktierfunktion, mit der man den Text per Spracheingabe erzeugt – also per Diktat. Das ist insbesondere unterwegs sehr praktisch, beispielsweise bei einem Spaziergang oder am Weg zwischen zwei Besprechungen.

![](Atlas/Utilities/Attachments/Erfassungsfunktionen-NeueNotiz-687x1024.png)

Quellcode zum Kurzbefehl *Neue Notiz*

Die Funktionsweise ist einfach: Nach der Abfrage, ob man die neue Notiz diktieren oder tippen möchte, erfolgt die eigentliche Texteingabe. Danach ergänzt der Kurzbefehl mit dem aktuellen Datum den Link zur jeweiligen täglichen Notiz und fügt das Schlagwort `#Notiz` hinzu. Anschließend wird die Datei `Notizblock.md` im Obsidian-Vault gesucht und dort an der Stelle des Platzhalters `%%neueNotiz%%` die neue Notiz eingefügt. Diese neue Notiz beinhaltet ebenfalls wieder diesen Platzhalter für die nächste Notiz und wird im konkreten Fall immer oben am digitalen Notizblock ergänzt, sodass eine umgekehrt chronologische Reihenfolge entsteht, bei der die neuesten Notizen am digitalen Notizblock immer ganz oben stehen.

Download-Link zum Kurzbefehl *[Neue Notiz](https://www.icloud.com/shortcuts/0944222eef3b42b99328bfd181ece235)*

Übrigens wurde dieser Kurzbefehl vor ein paar Wochen der zweiten Ausgabe der [randNOTIZEN](https://www.mathoi.at/newsletter/) bereits vorgestellt.

### Neue Aufgabe

Durch die Vereinfachungen im Aufgabenmanagement – zuletzt durch die [Ango-Methode](https://www.mathoi.at/2024/04/17/aufgabenmanagement-mit-der-ango-methode/) – hat sich auch der Kurzbefehl für das Hinzufügen neuer Aufgaben geändert. Es gibt nun ebenfalls eine Abfrage zu Beginn, ob nämlich die neue Aufgabe gleich direkt in den [Tagesplan](https://www.mathoi.at/2023/10/31/tagesplanung-mit-zeitbloecken/) der täglichen Notiz oder auf der Aufgabenliste eingetragen werden soll.

![](Atlas/Utilities/Attachments/Erfassungsfunktionen-NeueAufgabe-1024x753.png)

Quellcode zum Kurzbefehl *Neue Aufgabe*

Das Prinzip mit einem Platzhalter wird auch hier angewendet und die neue Aufgabe dann jeweils an die Stelle von `%%neueAufgabe%%` eingefügt. Die Markdown-Syntax `- [ ]` für die Aufgabe wird vom Kurzbefehl im Eingabefeld bereits vorausgefüllt und muss nicht jedes Mal aufs neue eingetippt werden.  
Falls man das Einfügen der neuen Aufgabe in den Tagesplan auswählt, wird die Aufgabe in der jeweils gerade aktuellen täglichen Notiz eingetragen. Dazu sucht der Kurzbefehl über das aktuelle Datum ebendiese im Obsidian-Vault heraus und führt dann die Änderungen an der Datei durch. Damit das klappt, muss man im Kurzbefehl den Ordner definieren, in dem man die täglichen Notizen speichert. In meinem Fall ist das der Ordner `Logbuch`. Darin sind die täglichen Notizen in Unterordnern nach Jahren sortiert. Wenn man das anders strukturieren möchte, ist das im Kurzbefehl dann im Abschnitt *Für den Tagesplan* entsprechend anzupassen. Und zwar im letzten und viertletzten Schritt.

Download-Link zum Kurzbefehl *[Neue Aufgabe](https://www.icloud.com/shortcuts/4d9aa5ac369941ce848388a8d556c304)*

### Logbucheintrag

Mit dem Logbucheintrag lässt sich ein Eintrag in der [tägliche Notiz](https://www.mathoi.at/2023/07/07/die-taegliche-notiz/) erstellen. Das können Gedanken, Erlebnisse oder besondere Vorkommnisse sein. Die Logbucheinträge werden in einer Aufzählungsliste mit Bulletpoints erfasst. Zu jedem Logbucheintrag wird die Uhrzeit mit eingetragen und – sofern sinnvoll bzw. notwendig – ein Schlagwort. Im Gegensatz zu den Notizen, die am digitalen Notizblock landen und von dort zu einem späteren Zeitpunkt weiter verarbeitet werden, sind die Logbucheinträge einmalige Notizen, die nicht weiter verarbeitet werden und in der täglichen Notiz bleiben – wie in einem digitalen Logbuch.

![](Atlas/Utilities/Attachments/Erfassungsfunktionen-Logbucheintrag-769x1024.png)

Quellcode zum Kurzbefehl *Logbucheintrag*

Auch in diesem Kurzbefehl wird ein Platzhalter verwendet. Diesmal allerdings schlicht nur `%%neuerEintrag%%`. Zu jedem Eintrag wird vom Kurzbefehl automatisch die Uhrzeit ergänzt und die Formatierung als Element einer Bulletpoint-Liste übernommen. Die Ordnerstruktur für die täglichen Notizen im Ordner `Logbuch` und seinen Unterordnern für die jeweiligen Jahre ist in analoger Weise zu berücksichtigen, wie oben beim Kurzbefehl *Neue Aufgabe* und daher eventuell im letzten und viertletzten Schritt an die eigene Struktur anzupassen.

Download-Link zum Kurzbefehl *[Logbucheintrag](https://www.icloud.com/shortcuts/8b12ef249db14bfcb2de45e3baa9398d)*

### Webseite-Link im Markdown-Format

Auf den Streifzügen durch das Internet stößt man immer wieder auf Artikel, Videos und Webseiten, für die etwas mehr Zeit erforderlich ist und die man daher zu einem späteren Zeitpunkt lesen oder anschauen möchte. Die Links dazu können mit einem Kurzbefehl in der [Später-Lesen/Schauen-Liste](https://www.mathoi.at/2023/06/23/spaeter-lesen-mit-obsidian/) in Obisidan gespeichert werden. Diese Später-Lesen/Schauen-Liste ist eine einfache Link-Liste im [Markdown](https://www.mathoi.at/2023/07/11/markdown-grundlagen/)\-Format mit Checkboxen zum Abhaken, wenn ein Artikel gelesen oder ein Video angeschaut wurde. Videos werden zur besseren Übersichtlichkeit mit einem Fernseher-Emoji und Artikel mit einem Seite-mit-Schrift-Emoji gekennzeichnet. All das bewerkstelligt der Siri-Kurzbefehl *MD-Link* (MD steht für Markdown) völlig automatisch. Dieser Kurzbefehl lässt sich am Mac per Tastenkombination oder am iPhone bzw. iPad über das Teilen-Menü starten und erzeugt zunächst einen Markdown-Link im Format `[Seitentitel](URL)`, der in die Zwischenablage gespeichert wird. Danach kann man dem Kurzbefehl in der Abfrage mitteilen, ob man den Link auch auf der Später-Lesen/Schauen-Liste in Obsidian hinzufügen will und ob es sich dabei um einen Artikel oder ein Video handelt.

![](Atlas/Utilities/Attachments/Erfassungsfunktionen-MDLink-1024x745.png)

Quellcode zum Kurzbefehl *MD-Link*

Der Kurzbefehl wurde nur mit Safari am Mac und unter iOS getestet. In anderen Browsern wird er vermutlich nicht oder nicht fehlerfrei funktionieren. Zu Beginn wird im Kurzbefehl über eine Geräteabfrage zwischen Mac und iOS-Geräten unterschieden. Der Grund liegt in der unterschiedlichen Interpretation der Seiten-URL. Dazu sind für macOS und i(Pad)OS verschiedene Parameter für die Variable `Webseite` notwendig.  
In der Später-Lesen/Schauen-Liste gibt es dann – wie bereits gewohnt – wieder einen Platzhalter `%%neueWebsite%%` für neue Einträge, an dessen Stelle der Kurzbefehl einen neuen Link zu einer Webseite oder zu einem Video einträgt.

Download-Link zum Kurzbefehl *[MD-Link](https://www.icloud.com/shortcuts/849ff28771f0459b84bf674405d4f86c)*

## Alternative: QuickAdd

[QuickAdd](https://www.mathoi.at/2023/09/29/obsidian-kaizen-quickadd/) ist ein leistungsfähiges Plugin, das unter anderem eine sogenannte Capture-Funktion zum Erfassen neuer Inhalte enthält. Diese Capture-Funktion ermöglicht es, über ein auf Wunsch auch mehrzeiliges Eingabefeld rasch und unkompliziert Inhalte zu einer bestimmten Datei unter einer bestimmten Überschrift oder Textstelle hinzuzufügen. Damit kann man Makros ähnlich den oben beschriebenen Siri-Kurzbefehlen für eine neue Notiz, für eine neue Aufgabe oder für einen Logbucheintrag direkt innerhalb von Obsidian einrichten.

Voraussetzung dafür ist, dass Obsidian geöffnet sein muss, da das QuickAdd-Plugin nur innerhalb von Obsidian funktioniert. Das Erfassen von Inhalten aus anderen Apps ist dadurch etwas weniger komfortabel, da man zwischen den Apps hin und her wechseln muss. Und unter i(Pad)OS ist die Bedienung von QuickAdd eher gewöhnungsbedürftig, weil bei einem mehrzeiligen Eingabefenster die *Ok*\-Schaltfläche zum Speichern meistens durch die Softwaretastatur verdeckt wird. Zwar kann man durch eine Wischbewegung nach oben die Schaltflächen hinter der Softwaretastatur hervorholen, aber das ist natürlich nicht intuitiv und eher suboptimal.

![](Atlas/Utilities/Attachments/Erfassungsfunktionen-QuickAdd-iOS-953x1024.jpeg.jpg)

QuickAdd in Obsidian unter iOS ist nicht ideal zu bedienen

Abgesehen von diesen Einschränkungen ist QuickAdd jedenfalls eine brauchbare Alternative zu den Siri-Kurzbefehlen. Die Makros lassen sich mit wenigen Klicks in den Einstellungen der externen Erweiterung zusammenstellen, wie am nachstehenden Beispiel für eine neue Notiz am digitalen Notizblock ersichtlich ist.

![](Atlas/Utilities/Attachments/Erfassungsfunktionen-QuickAdd-NeueNotiz-590x1024.jpeg.jpg)

Einstellungen für das QuickAdd-Makro zum Erstellen einer neuen Notiz

## Fazit

Ein PKM-Sytem lebt von neuen Inhalten, die laufend dazukommen und eingepflegt werden. Diese neuen Inhalte sind quasi die Samen im digitalen PKM-Garten. Womit neue Inhalte erfasst werden, ist zunächst sekundär relevant. Wichtiger ist, dass sie im PKM-System an den richtigen Stellen landen, damit man sie später auch wieder findet und weiter verarbeiten kann. Denkbar ist das natürlich auch mit Stift und Papier, sowie dem späteren manuellen Übertragen in das digitale PKM-System. Da meine Arbeitsweise seit vielen Jahren nahezu ausschließlich digital und daher papierlos ist, suche ich mindestens ebenso lange schon nach dem perfekten Ort, an dem meine Notizen, Aufgaben, Ideen und Gedanken sicher aufbewahrt werden könne. Die perfekte App, oder die perfekte Methode dafür gibt es vermutlich nicht, aber es gibt Obsidian und das funktioniert für mich [nahezu perfekt](https://www.mathoi.at/2023/07/20/sieben-gruende-warum-ich-obsidian-nutze/). Die dort fehlenden Erfassungsfunktionen lassen sich unter macOS und i(Pad)OS dank der Kurzbefehle-App relativ unkompliziert nachrüsten. Wer keine Kurzbefehle verwenden möchte, oder diese nicht zur Verfügung hat – beispielsweise unter Windows oder Linux – kann als Alternative auf das QuickAdd-Plugin zurückgreifen und damit ähnliches bewerkstelligen.

Persönlich bevorzuge ich die Variante mit den Siri-Kurzbefehlen und schätze deren systemweite Verfügbarkeit auf den Apple-Geräten. Am Mac nutze ich meine kleine Sammlung an Kurzbefehlen zum Erfassen ausschließlich über Tastenkürzel. Die Erfassungsfunktionen lassen sich auch bequem über das [Kurzbefehle-Menü](https://www.mathoi.at/2022/09/12/das-kurzbefehl-menu-am-mac/) aus der Menüleiste aufrufen. Am iPhone sind die Erfassungsfunktionen über den neuen Action-Button des iPhone 15 Pro praktisch und rasch erreichbar. Auf älteren Modellen oder am iPad kann man als Alternative ein selber gebautes Kurzbefehle-Menü über ein Icon am Homescreen aufrufen und die Erfassungsfunktionen darüber starten.

Auch wenn das in diesem Beitrag vorgestellte System auf Obsidian basiert, kann es auch durchaus auf andere Notizen- bzw. PKM-Apps übertragen werden. Selbst mit der [Notizen](https://www.mathoi.at/tag/notizen/)\-App von Apple kann man das ähnlich gestalten. Dabei müssen diese Apps jedoch nicht einmal per se die Kurzbefehle von Apple unterstützen. Das macht Obsidian auch nicht. In diesem Fall ist es wichtig, dass die PKM-App ihre Dateien, in denen Notizen gespeichert werden, in einer offen zugänglichen Ordnerstruktur ablegt und dafür kein proprietäres Format, sondern ein offenes Format wie beispielsweise Markdown verwendet.