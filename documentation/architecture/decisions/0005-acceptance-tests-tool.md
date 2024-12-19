# 5. acceptance-tests-tool

Datum: 19.12.2024

## Status

Genehmigt

## Kontext

In unserem Projekt ist es entscheidend, die Qualität der Software kontinuierlich sicherzustellen, indem die Funktionalitäten regelmäßig durch Akzeptanztests überprüft werden. Diese Tests müssen klar definiert, leicht verständlich und einfach wartbar sein, um die Zusammenarbeit zwischen technischen und nicht-technischen Teammitgliedern zu fördern. Zudem benötigen wir ein Tool, das sich gut in bestehende CI/CD-Pipelines integrieren lässt und eine klare Trennung von Testlogik und Testdaten ermöglicht.

## Entscheidung

Wir haben uns entschieden, das Tool **Gauge** für die Implementierung von Akzeptanztests zu verwenden. Diese Entscheidung basiert auf folgenden Faktoren:

- **Lesbarkeit**: Gauge verwendet eine leicht verständliche Syntax für Testszenarien, die auch für Nicht-Entwickler zugänglich ist.
- **Flexibilität**: Unterstützt mehrere Programmiersprachen und ermöglicht einfache Anpassungen.
- **Modularität**: Trennung von Spezifikationen (Testfälle) und Logik (Implementierung).
- **Integration**: Leichte Integration in CI/CD-Pipelines und mit anderen Tools wie Selenium oder REST-Assured.
- **Community-Support**: Etablierte Community und aktive Weiterentwicklung.
- **Erweiterbarkeit**: Unterstützt benutzerdefinierte Plugins für zusätzliche Funktionalität.

## Konsequenzen

Durch die Verwendung von Gauge wird sichergestellt, dass Akzeptanztests klar strukturiert und leicht wartbar sind. Die Lesbarkeit der Tests fördert die Zusammenarbeit zwischen Entwicklern, Testern und Stakeholdern. Zudem vereinfacht die Modularität die Wiederverwendbarkeit von Testbausteinen. Teammitglieder müssen sich jedoch mit der Syntax und den Best Practices von Gauge vertraut machen, um das Tool effektiv zu nutzen. Die Integration in bestehende Workflows wird zusätzliche Initialarbeit erfordern, bietet jedoch langfristig große Vorteile für die Testautomatisierung.
