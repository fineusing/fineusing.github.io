---
layout: ../../../layouts/BlogPostLayout.astro
title: "Neue Dateien direkt per Rechtsklick im macOS Finder erstellen"
date: "2025-02-10"
description: "Vermissen Sie die Option „Neues Textdokument erstellen“ auf dem Mac? So erweitern Sie das Finder-Kontextmenü für Word, Excel, TXT, JSON und eigene Dateivorlagen mit Rightly."
tags: ["Rightly", "macOS", "Finder", "Rechtsklick macOS", "Produktivität", "Dateiverwaltung"]
product: "Rightly"
locale: "de"
---

Beim Wechsel von Windows zu macOS erleben viele Anwender eine ernüchternde Überraschung: **Im standardmäßigen Rechtsklick-Kontextmenü des Finders gibt es keinen Befehl zum Erstellen einer neuen Datei.**

Egal ob Sie eine kurze `.txt`-Notiz anlegen, ein neues Word-Dokument (`.docx`), eine saubere Excel-Tabelle (`.xlsx`) vorbereiten oder eine `.json`-Konfigurationsdatei für ein Softwareprojekt benötigen: Auf dem Mac müssen Sie üblicherweise erst die jeweilige Anwendung starten, dort ein leeres Dokument anlegen und dieses anschließend mühsam über den Speichern-Dialog in das gewünschte Verzeichnis navigieren.

Dieser umständliche Umweg unterbricht den Arbeitsfluss und kostet im Berufsalltag unnötig Zeit. Glücklicherweise lässt sich die native Dateierstellung per Rechtsklick auf dem Mac im Handumdrehen nachrüsten.

---

## Warum bietet macOS standardmäßig kein „Neues Dokument“-Menü?

Die Produktphilosophie von Apple basiert traditionell auf anwendungs- und dokumentenzentrierten Abläufen: macOS geht davon aus, dass Anwender zunächst ein Programm öffnen, darin Inhalte erzeugen und die Datei dann in der Cloud (iCloud Drive) oder unter „Zuletzt verwendet“ ablegen.

Im professionellen Alltag – egal ob in der Softwareentwicklung, im Projektmanagement, im Controlling oder bei Textern – organisieren Menschen ihre Arbeit jedoch fast immer über **klare Ordnerstrukturen**. Man öffnet einen Kundenordner oder ein Code-Repository im Finder und möchte genau an Ort und Stelle ein neues Dokument erzeugen.

---

## Typische Behelfslösungen und ihre Schwächen

Im Laufe der Jahre haben Mac-Nutzer verschiedene Workarounds entwickelt, die jedoch alle an Grenzen stoßen:

1. **Terminal (`touch dateiname.txt`)**: Für Entwickler schnell getippt, für formatierte Dokumente wie Word, Excel oder Keynote jedoch völlig ungeeignet, da hierbei nur leere Null-Byte-Dateien entstehen, die Programme oft als beschädigt einstufen.
2. **Automator- und Kurzbefehle-Schnellaktionen**: Häufig fehleranfällig, träge in der Ausführung und nicht in der Lage, dynamische Dokumentvorlagen sauber einzubinden.
3. **Veraltete Drittanbieter-Tools**: Viele ältere Werkzeuge greifen tief in das Betriebssystem ein, verlangen die Deaktivierung des Systemintegritätsschutzes (SIP) oder verlangsamen den Finder spürbar.

---

## Die saubere Lösung: Rightly für macOS

Um dieses Problem ohne Eingriffe in die Systemsicherheit zu lösen, nutzt [Rightly](https://apps.apple.com/app/id6806805796) die offizielle **Finder Sync Extension API** von Apple.

Rightly integriert sich nahtlos in das Finder-Kontextmenü. Überall dort, wo Sie mit der rechten Maustaste auf eine freie Fläche in einem Finder-Fenster klicken, steht Ihnen das Untermenü „Neue Datei“ zur Verfügung.

### 1. Über 10 gängige Formate sofort einsatzbereit
Direkt nach der Installation unterstützt Rightly alle essenziellen Büro- und Entwicklerformate:
- **Office-Dokumente**: Word (`.docx`), Excel (`.xlsx`), PowerPoint (`.pptx`)
- **Apple iWork**: Pages (`.pages`), Numbers (`.numbers`), Keynote (`.key`)
- **Entwickler- & Systemdateien**: Reiner Text (`.txt`), JSON (`.json`), XML (`.xml`), macOS Property List (`.plist`)
- **Formatierter Text & Markdown**: Rich Text Format (`.rtf`), Markdown (`.md`)

Ein Klick erzeugt sofort eine gültige, formatkonforme Datei im aktuellen Verzeichnis, die Sie direkt umbenennen und öffnen können.

### 2. Eigene Dokumentvorlagen einbinden
Leere Dokumente sind nützlich, doch repetitive Aufgaben verlangen oft nach vordefinierten Layouts. In Rightly können Sie im Handumdrehen **eigene Dateivorlagen** hinterlegen:
- Standardisierte Kundenverträge mit offiziellem Briefkopf und rechtlichen Hinweisen.
- Entwickler-Starterdateien (`README.md`, `.gitignore`, boilerplate configs).
- Vordefinierte Kalkulationstabellen für Spesenabrechnungen oder Angebotserstellungen.

Ziehen Sie die gewünschte Musterdatei einfach in die Einstellungen von Rightly – schon steht sie im Finder-Rechtsklick-Menü dauerhaft bereit.

---

## In einer Minute eingerichtet

1. Laden Sie **Rightly** kostenlos aus dem [Mac App Store](https://apps.apple.com/app/id6806805796) herunter.
2. Öffnen Sie die App und aktivieren Sie die Finder-Erweiterung unter *Systemeinstellungen > Datenschutz & Sicherheit > Erweiterungen > Finder-Erweiterungen*.
3. Öffnen Sie ein beliebiges Finder-Fenster, klicken Sie mit rechts auf eine freie Fläche und wählen Sie **Neue Datei**.

Keine Hintergrunddienste, die Ihr MacBook verlangsamen, und kein mühsames Einrichten von Skripten.

---

## Fazit

Eine einfache Funktion zum Erstellen neuer Dateien per Rechtsklick spart im Laufe eines Arbeitstages unzählige Fensterwechsel und Mausklicks. Wer eine schnelle, zeitgemäße Dateiverwaltung auf dem Mac schätzt, erweitert seinen Finder am besten mit [Rightly aus dem Mac App Store](https://apps.apple.com/app/id6806805796).
