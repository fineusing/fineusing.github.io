---
layout: ../../../layouts/BlogPostLayout.astro
title: "Nie wieder Apps mühsam neu sortieren: Launchpad-Layout auf dem Mac sichern, wiederherstellen und übertragen"
date: "2025-03-06"
description: "Nach einem macOS-Update oder dem Umstieg auf einen neuen Mac sind alle mühsam erstellten Launchpad-Ordner verschwunden? Wie AppPad alte Launchpad-Strukturen mit einem Klick klont und portable Backups erstellt."
tags: ["AppPad", "Launchpad Backup", "Launchpad wiederherstellen", "Mac Migration", "macOS Layout", "App Organisation", "macOS"]
product: "AppPad"
locale: "de"
---

Jeder, der schon einmal ein großes macOS-Upgrade durchgeführt, das System neu aufgesetzt oder Daten auf ein neues MacBook Pro migriert hat, kennt diesen Frustmoment:

Man öffnet nach dem ersten Einrichten den Programmstarter – und stellt mit Schrecken fest: **Sämtliche Ordner und Kategorien, die man über Jahre hinweg sorgfältig gepflegt hat, wurden spurlos gelöscht.**

Thematische Ordner („Design“, „Entwicklung“, „Office“, „Audio & Video“) sind verschwunden. Stattdessen liegen über 200 Programme wild gewürfelt in rein alphabetischer Reihenfolge über mehrere Seiten verstreut.

Die Konsequenz: Man verbringt zwei zähe Stunden damit, App-Symbole einzeln per Drag-and-Drop wieder in Ordner zu bugsieren.

Warum bietet Apple in macOS keine native Exportfunktion für das Launchpad an? Und wie stellt [AppPad](https://fineusing.com/installer/AppPad-Installer.dmg) Ihre gewohnte Ordnerstruktur in Sekundenschnelle wieder her?

---

## Die Schwachstelle der Apple-Launchpad-Datenbank

Viele Nutzer glauben, das Launchpad verwalte seine Anordnung über eine simple Einstellungsdatei.

In der Praxis speichert macOS Symbolkoordinaten, Ordnerhierarchien und Seitenaufteilungen in einer unzugänglichen SQLite-Datenbank:
`~/Library/Application Support/Dock/<UUID>.db`

Dieser Aufbau birgt gravierende Nachteile:

1. **Keinerlei Backup-Optionen**: In den Systemeinstellungen oder im Finder existiert keine Möglichkeit, das Layout zu sichern oder zu exportieren;
2. **Aggressive automatische Resets**: Weicht eine Programmkennung ab oder kommt es beim Migrationsassistenten zu einem Indexkonflikt, greift macOS zu radikalen Mitteln: **Die Datenbank wird verworfen und alle Apps werden stur nach Alphabet neu einsortiert**;
3. **Keine Synchronisierung zwischen zwei Macs**: Wer ein MacBook für unterwegs und einen Mac mini oder Mac Studio am Schreibtisch nutzt, muss Ordner auf beiden Geräten doppelt von Hand anlegen.

---

## Die AppPad-Lösung: Altes Layout mit einem Klick importieren & portable Backups

[AppPad](https://fineusing.com/installer/AppPad-Installer.dmg) löst dieses Dilemma mit integrierten Werkzeugen zur Layout-Verwaltung:

### 1. Altes Launchpad-Layout mit einem Klick wiederherstellen
Wenn Sie auf macOS 26 umgestiegen sind oder einen neuen Mac eingerichtet haben:
1. Öffnen Sie die **AppPad-Einstellungen**;
2. Navigieren Sie zum Bereich **Daten & Layout-Verwaltung** und klicken Sie auf **Altes Launchpad-Layout wiederherstellen**;
3. AppPad liest die im System zwischengespeicherte SQLite-Datenbank des bisherigen Docks automatisch aus und erfasst Ihre bisherigen Ordnernamen, App-Zuordnungen und Positionen;
4. Nach zwei Sekunden spiegelt das AppPad-Raster **Ihre vertraute Ordnerstruktur zu 100 % wider**.

Das mühevolle Sortieren von hunderten Icons entfällt komplett.

---

### 2. Portable AppPad-Backups exportieren und importieren
Schützen Sie Ihre Anordnung dauerhaft vor künftigen System-Resets:

- **Export per Mausklick**: Sichern Sie Ihre aktive Konfiguration (inklusive Rasterdichte, benutzerdefinierten Zeilen/Spalten, Seitenaufteilung und Ordnern) als kompakte Backup-Datei;
- **Sekundenschneller Transfer**: Senden Sie die Backup-Datei per AirDrop an Ihren Zweit-Mac oder legen Sie sie in iCloud Drive ab. Nach einem Klick auf **Layout importieren** verfügen beide Computer über exakt dieselbe Programmanordnung.

Setzen Sie Ihren Mac in Zukunft neu auf, genügt ein Klick, um Ihre Arbeitsumgebung wiederherzustellen.

---

## Empfohlene Checkliste für den Mac-Umzug

So sparen Sie bei der Einrichtung eines neuen Rechners wertvolle Zeit:

1. **Auf dem bisherigen Mac**: AppPad öffnen, Layout-Backup exportieren und in iCloud Drive speichern;
2. **Auf dem neuen Mac**: [AppPad](https://fineusing.com/installer/AppPad-Installer.dmg) herunterladen und installieren;
3. **Daten importieren**: In den AppPad-Einstellungen auf **Backup importieren** klicken (oder bei direkter macOS-Migration auf **Altes Launchpad-Layout wiederherstellen**);
4. **Sofort loslegen**: Ihre gewohnte Programmlandschaft steht sofort zur Verfügung.

---

## Fazit

In professionellen Arbeitsabläufen spart räumliche Beständigkeit spürbar kognitive Energie. Die Zeit, die Sie in das Strukturieren Ihrer Software investiert haben, sollte nicht durch Systemupdates entwertet werden.

Behalten Sie die volle Kontrolle über Ihre Programmübersicht mit automatischem Import und verlässlichen Backups.

[Laden Sie AppPad für macOS herunter](https://fineusing.com/installer/AppPad-Installer.dmg) und sichern Sie Ihre persönliche App-Anordnung dauerhaft.
