---
layout: ../../../layouts/BlogPostLayout.astro
title: "Mehr als /Programme: Steam-Spiele, Setapp und eigene App-Verzeichnisse auf dem Mac einbinden"
date: "2025-03-08"
description: "Apps in ~/Programme, Setapp oder Steam-Spiele auf einer externen SSD tauchen im Launchpad nicht auf? So scannt AppPad benutzerdefinierte Verzeichnisse und vereint alle Mac-Programme und Games an einem Ort."
tags: ["AppPad", "App Scan Pfade", "Steam Spiele Mac", "Setapp", "Homebrew Cask", "Mac Speicherplatz", "macOS"]
product: "AppPad"
locale: "de"
---

Da moderne Macs sowohl als mobile Workstations für grafikintensive Aufgaben als auch für Gaming genutzt werden, liegen Anwendungen längst nicht mehr ausschließlich im zentralen Systemordner `/Programme`:

- **Steam-Bibliotheken & Spiele**: Da moderne Spiele 80 GB bis 150 GB Speicherplatz beanspruchen, lagern viele Gamer ihre Steam-Bibliotheken auf schnelle externe Thunderbolt-NVMe-SSDs aus;
- **Benutzereigene Programme**: Spezielle Entwicklertools, portable Chrome-PWAs oder interne Firmensoftware installieren sich standardmäßig im persönlichen Benutzerordner: `~/Programme` (`~/Applications`);
- **Entwickler-Werkzeuge**: Kommandozeilen-Tools, Homebrew Cask GUI-Binaries oder eigenständige `.app`-Pakete, die direkt von GitHub bezogen wurden.

Das klassische macOS-Launchpad zeigte sich hierbei von einer unflexiblen Seite:

**Launchpad scannte starr nur `/Programme` und `/System/Programme`.**

Lag eine Software auf einer externen SSD, einer zweiten Partition oder im Benutzerordner, blieb sie im Launchpad-Raster unsichtbar. Wer sie dort sehen wollte, musste mühsam im Terminal symbolische Links (`ln -s`) anlegen – ein fragiles und umständliches Unterfangen.

Hier erfahren Sie, wie [AppPad](https://fineusing.com/installer/AppPad-Installer.dmg) diese Barriere beseitigt, indem es beliebig viele benutzerdefinierte Scan-Pfade unterstützt und Ihre Softwarelandschaft zentral zusammenführt.

---

## Warum Mac-Anwendungen heute über mehrere Laufwerke verteilt sind

Das ist kein Fehlverhalten von Anwendern, sondern eine pragmatische Reaktion auf moderne Arbeitsumgebungen:

1. **Kostspielige interne SSD-Upgrades**: Speicherupgrades beim Mac-Kauf sind bekanntlich teuer. Aufwendige Spiele wie *Baldur's Gate 3* oder anspruchsvolle Simulationen von einer schnellen externen SSD auszuführen, ist gängige Praxis. Apples native Werkzeuge ignorieren externe Laufwerke jedoch konsequent;
2. **Rechte-Trennung für mehrere Benutzer**: Auf geteilten Macs gehören private Passwort-Manager oder persönliche Messenger in `~/Programme`, um sie vor den Blicken anderer Benutzerkonten zu schützen;
3. **Standalone- und Open-Source-Tools**: Viele unabhängige Werkzeuge kommen ohne Installer aus. Wer sie in einem separaten Arbeitsordner entpackt, hält sein Stammsystem sauber.

Ein zukunftsfähiger Programmstarter muss sich flexibel an die Speicherstruktur des Nutzers anpassen – statt diesen in starre Systempfade zu zwingen.

---

## Die AppPad-Lösung: Eigene Scan-Pfade flexibel hinzufügen

[AppPad](https://fineusing.com/installer/AppPad-Installer.dmg) erfasst standardmäßig die Ordner `/Programme` und `/System/Programme`.

Zusätzlich steht Ihnen in den AppPad-Einstellungen der Bereich **Eigene Scan-Verzeichnisse** zur Verfügung:

### 1. Beliebige Festplatten und Unterordner einbinden
- Klicken Sie auf **Verzeichnis hinzufügen**, um den macOS-Dateidialog zu öffnen;
- Wählen Sie den Spiele-Pfad Ihrer externen SSD (z. B. `/Volumes/GameSSD/SteamLibrary/steamapps/common/...`), Ihren persönlichen Ordner `~/Programme` oder ein Entwicklerverzeichnis aus;
- Fügen Sie beliebig viele Pfade auf internen Partitionen, externen Festplatten oder Netzlaufwerken hinzu.

### 2. Intelligente Indizierung & Duplikaterkennung
- AppPad durchsucht die angegebenen Pfade im Hintergrund rekursiv nach echten `.app`-Bundles;
- Ein automatischer Abgleich verhindert, dass symbolische Links oder Aliase doppelte Geister-Icons im Raster erzeugen;
- Wird eine externe Festplatte getrennt, behält AppPad die Anordnung im Ruhezustand bei. Sobald das Laufwerk wieder angeschlossen wird, erscheinen alle Spiele und Tools sofort wieder an ihrer angestammten Position.

### 3. Einheitliche Suche, Gesten und Ordner
Einmal erfasst, genießen externe Programme denselben Komfort wie native System-Apps:
- Fassen Sie Steam-Spiele in einem eigenen Ordner „Gaming“ zusammen;
- Starten Sie die Sofortsuche durch einfaches Tippen;
- Nutzen Sie das Kontextmenü für Rechtsklick-Aktionen oder ziehen Sie Titel direkt ins Dock.

---

## 3-Ebenen-Strategie für Power-User

Mit der flexiblen Verzeichnissuche strukturieren Sie Ihre Arbeitsumgebung sauber auf:

- **Seite 1 (Tägliche Produktivität)**: Wichtigste System-Apps aus `/Programme` (Browser, Office, Slack, Final Cut Pro);
- **Seite 2 (Entwickler & Spezialwerkzeuge)**: Benutzerordner `~/Programme` mit Skripten und Spezialtools;
- **Seite 3 (Gaming & Freizeit)**: Externe SSD als dediziertes, hochauflösendes Spiele-Launchpad.

---

## Fazit

Ihr Mac gehört Ihnen – und Ihr Programmstarter sollte alle installierten Anwendungen im Blick behalten, unabhängig davon, auf welchem Datenträger sie liegen.

Befreien Sie sich von starren Systempfaden. Vereinen Sie all Ihre Programme, Tools und Spiele in einem durchdachten, nativen Launcher.

[Laden Sie AppPad für macOS herunter](https://fineusing.com/installer/AppPad-Installer.dmg) und bündeln Sie Ihre Softwarelandschaft zentral an einem Ort.
