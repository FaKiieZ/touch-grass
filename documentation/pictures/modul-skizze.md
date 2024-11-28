```mermaid

flowchart TD
    subgraph "Touch Grass"
        subgraph UserVerwaltung
            D["Profile"]
            D2["Freundesliste"]
            D3["Highscore"]
        end

        subgraph Aktivitäten
            A["Quests"]
            A2["Bewegungsverlauf"]
            A3["Reward XP-System"]
        end
    end

    API --> UserVerwaltung
    API --> Aktivitäten
    UI --> UserVerwaltung
    UI --> Aktivitäten

    UserVerwaltung --> Aktivitäten
    Aktivitäten --> UserVerwaltung

    UserVerwaltung --> DB
    Aktivitäten --> DB
