---
title: 'Backups und Setups'
date: "2018-07-10T12:10:32.169Z"
---

Vor ein paar Tagen wollte ich mein MacBook benutzen. Das kommt vor. Hätte ich
gewusst, welche Reihe von Ereignissen ich damit in Gang gesetzt habe, wäre ich
vielleicht auch einfach im Bett geblieben.  
Jetzt habe ich eine frische Installation von High Sierra und eine frisch
formatierte Festplatte, auf dem nur das absolute Minumum an Programmen
installiert ist. Aber fangen wir am Anfang an.

An besagtem Morgen klappte ich mein MacBook auf, um es, wie bereits geschildert,
zu benutzen. Das war offensichtlich falsch von mir, denn das MacBook stürzte
sofort ab. Das war ich nicht gewohnt, war doch High Sierra eine der stabilsten
macOS-Version bisher überhaupt, mit der niemand auf der Welt irgendwelche
[Probleme hatte](https://www.imore.com/macos-has-root-bug).  
Nach einem Neustart schien aber alles ganz normal zu sein. Nach etwa 30 Minuten
fiel mir dann auf, das die Lüfter sich scheinbar mit maximaler Drehzahl...
drehen. Ein blick in den Activity Monitor zeigte mir, dass zwei Instanzen des
Prozesses `lsd` jeweils 100% CPU in Anspruch nahmen.  
Nach ein paar Minuten Google-Suche und ein paar erfolglosen Versuchen, den
Prozess wieder in den Griff zu bekommen, habe ich den Rechner einfach neu
gestartet. Das hilft ja bekanntlich immer.

Jetzt kommt der Punkt, an dem ich mir absolut nicht sicher bin, was falsch
gelaufen ist. Meine beste Erklärung bis jetzt ist, das ich währen des Neustarts
durch zufall eine satanische Formel murmelte, die dazu führte, das meine
Festplatte von einem Dämonen besessen wurde (dieser Witz ist besonder lustig,
wenn mann weiss, dass der oben genannte Porzess `lsd` für `LaunchServiceDaemon`
steht. Hahaha, Dämon, Deamon, ihr versteht?).  
Was auch immer passierte, es führte dazu, dass ich mich nicht mehr einloggen
konnte. Mein Account wurde mir angezeigt, ich gab mein Passwort ein, der
Ladebalken wurde angezeigt und dann - wurde mir plötzlich der Login für den
Guest-Account angezeigt, für den ich ein Passwort eingeben sollte. Das war
merkwürdig, weil ich den Guest-Account deaktiviert hatte und er schon gar kein
Passwort hatte.

Darauf folgte eine Stunde Googlen und probieren, an dessen Ende eine
Festplattenüberprüfung stand, die nicht zu Ende ausgeführt werden konnte, weil
'Spaceman' nicht funktioniert. Ich habe keine Ahnung, was Spaceman macht (und es
ist irgendwie überraschend schwer herauszufinden), aber es klingt nach
Partitionierung. Nicht gut. Nachdem also nichts funktionierte und das Dateisystem
irgendwie kaputt schien, war die Zeit gekommen, den Rechner von einem Backup
wiederherzustellen. 

Glücklicherweise hatte ich ein aktuelles Backup zur Hand. Da das neue MacBook
die superschnellen USB-C Anschlüße hat und ich mir extra deswegen eine
USB-C-Festplatte für die Backups gekauft habe, sollte das ja fix gehen.  
Der Wizard sagte zunächst etwas von einer Stunde. Das ist für 250GB wohl okay.
Ab da zählte er nur noch weiter nach oben. Nach etwas drei Stunden waren noch
vier Stunden übrig. Dann kam der Fehler, dass das Backup nicht wieder
hergestellt werden konnte. Vor lauter Freude habe ich mir ein bisschen in den
Mund gekotzt.

Nachdem ich nicht noch einmal 3 Stunden warten wollte, nur um dann enttäuscht zu
werden, habe ich die Festplatte einfach Platt gemacht und gehofft, dass ich
irgendwie noch an die wichtigen Dinge aus dem Backup komme. Die wichtigen Dinge
umfasste in diesem Fall einen Ordner mit ein bisschen Papierkram und mein
SSH-Key. Beides klappte, und jetzt habe ich hier eine ziemlich Blanke
macOS-Installation.

Mein Ziel ist es jetzt, möglichst nicht mehr auf Backups angewiesen zu sein.
Alles, an dem ich so arbeite liegt eh in der Dropbox oder auf Github, der
einzige Verlust ist hier also maximal die Zeit, die es zum Clonen/Syncen
braucht.  
Die gesamte Konfiguration meiner Entwicklungsumgebung liegt eh in meinen
Dotfiles, da braucht es also auch nur ein `git clone` und ich bin wieder auf dem
letzten Stand.  
Das einzige Problem stellen alle andern Applikationen dar, die ich so brauche.
Dafür benutze ich jetzt ein `Brewfile` und es ist das allerbeste, was man sich
überhaubt nur vorstellen kann. Wenn ich meinen Rechner jetzt also neu aufsetzen
sollte, brauche ich ein `git clone` und ein `brew bundle` und ich bin wieder
bereit. Großartig!

Außerdem läuf High Sierra nun deutlich stabiler. Als ich dieses MacBook bekam,
stellte ich es von einem Sierra-Backup wieder her, lief aber hinterher aus
irgendwelchen Gründen trotzdem auf High Sierra. Das kam mir ein bisschen Sketchy
vor, und offenbar sind dabei ein, zwei Dinge drucheinander geraten.
