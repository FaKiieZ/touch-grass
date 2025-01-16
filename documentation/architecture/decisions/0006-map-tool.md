# 6. map-tool

Datum: 16.01.2025

## Status

Genehmigt

## Kontext

Wir benötigen eine Lösung um nicht nur eine Map anzuzeigen, sondern auch einen Pfad zwischen verschiedenen Punkten auf dieser Map. Das wird benötigt um die Wanderwege darzustellen.

## Entscheidung

Wir haben uns entschieden, das Tool **Grasshopper** für die Erstellung von Karten zu verwenden. Danach werden die Karten nach **umap** exportiert um die Maps embedable zu machen. Diese Entscheidung basiert auf folgenden Faktoren:

- **Editor**: Grasshopper bietet einen online Editor, mit welchem einfach Karten mit einem Pfad erstellt werden können.
- **Embedable**: Die erstellten Karten können durch umap gehostet und embeded werden.
- **Kosten**: Beide Tools basieren auf OpenStreetMap und somit kostenlos.
- **Komplexität**: Die Map benötigt nur ein einzelnes Iframe und sind somit einfach zu implementieren.
- **Anpassbarkeit**: Die Map welche durch umap kann nur schlecht während der runtime editiert werden. Sollte das benötigt werden, muss nach einer anderen Lösung gesucht werden.

## Konsequenzen

Diese Tools nehmen uns den Aufwand ab, selber eine Lösung zu Implementieren um die Wanderwege darstellen zu können. Falls die Map während der runtime editiert werden muss, können wir mit hoher Wahrscheinlichkeit die generierten Maps von Grasshopper weiterverwenden.