# 3. Markdown Linter in Pipeline

Datum: 14.11.2024

## Status

Genehmigt

## Kontext

In unserem Projekt verwenden wir Markdown-Dateien wie zum Beispiel README.md, um wichtige Informationen klar und verständlich darzustellen.
Damit diese Dateien einheitlich formatiert und fehlerfrei sind, benötigen wir ein Tool, das Markdown-Dateien automatisch auf Syntaxfehler und Stilabweichungen überprüft.

## Entscheidung

Wir haben uns entschieden, die GitHub Action DavidAnson/markdownlint-cli2-action@v17 zu verwenden, um die Markdown-Validierung in unserem Workflow zu implementieren.
Diese Entscheidung haben wir aus folgenden Gründen getroffen:

- Sie hat auf dem Github-Marketplace mit die meisten und besten Bewertungen.
- Eine benutzerdefinierte Konfigurationdatei (.markdownlint.json) kann erstellt und nach Wunsch konfiguriert werden.
- Die Ausgaben sind gut und klar, es werden sowohl Fehler als auch Empfehlungen ausgegeben.

## Konsequenzen

Durch die Integration von DavidAnson/markdownlint-cli2-action@v17 wird sichergestellt, dass alle Markdown-Dateien im Projekt automatisch auf Syntaxfehler und Stilabweichungen geprüft werden. Dies führt zu einer einheitlichen und konsistenten Dokumentation, was die Lesbarkeit und Wartbarkeit der Dateien verbessert. Teammitglieder müssen sich mit der Konfigurationsdatei .markdownlint.json und den Fehlermeldungen vertraut machen, um Probleme effizient zu beheben. Der Workflow wird regelmäßig ausgeführt.