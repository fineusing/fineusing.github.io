---
layout: ../../../layouts/BlogPostLayout.astro
title: "Passwortgeschützte und mehrteilige Split-Archive auf dem Mac erstellen"
date: "2025-02-20"
description: "Sensible Daten vertraulich versenden oder E-Mail-Größenlimits umgehen? Erfahren Sie, wie Sie auf dem Mac verschlüsselte ZIP/7Z- und Split-Archive direkt im Finder mit ZipGo anlegen."
tags: ["ZipGo", "macOS", "Sicherheit", "Verschlüsselung", "Split-Archive", "Produktivität"]
product: "ZipGo"
locale: "de"
---

Beim digitalen Versand von geschäftlichen Vereinbarungen, Bilanzen, vertraulichen Kundenunterlagen oder Quellcode über das Internet stellen unverschlüsselte Dateianhänge ein unkalkulierbares Datenschutz- und Compliance-Risiko dar.

Gleichzeitig setzen E-Mail-Server und Chatplattformen strikte Grenzen bei der Dateigröße:
- Gmail, Outlook und Apple Mail weisen Dateianhänge über **25 MB** regelmäßig ab.
- Unternehmens-Chat-Systeme wie Teams oder Slack beschränken Uploads oft auf **50 MB** oder **100 MB**.

Müssen Sie eine 300 MB große Präsentation mit einem sicheren Passwort schützen oder eine 2 GB große Bildbibliothek in handliche 50-MB-Häppchen aufteilen, stehen Sie unter macOS vor verschlossenen Türen: **Die integrierte Komprimierungsfunktion des Finders bietet weder eine Passworteingabe noch eine Split-Option.**

Mit [ZipGo](https://apps.apple.com/app/id6799313183) lösen Sie beide Anforderungen direkt und unkompliziert im macOS Finder.

---

## 1. Starke AES-256-Verschlüsselung: Sensible Daten effektiv schützen

Durch das Erstellen eines verschlüsselten Archivs stellen Sie sicher, dass selbst bei versehentlicher Fehlleitung einer E-Mail oder einem geleakten Cloud-Link niemand ohne den Masterschlüssel Einsicht in Ihre Unterlagen erhält.

### Warum herkömmlicher Passwortschutz nicht genügt
Die in den 1990er-Jahren standardisierte ZipCrypto-Verschlüsselung gilt längst als gebrochen. Moderne Grafikkarten können solche Passwörter in wenigen Minuten per Known-Plaintext-Angriff ermitteln.

Moderne IT-Sicherheit verlangt daher zwingend **AES-256 (Advanced Encryption Standard mit 256-Bit-Schlüsseln)**:
- Weltweit von Sicherheitsbehörden und Banken für hochsensible Daten freigegeben.
- Bei Wahl eines starken Passworts mathematisch unknackbar durch Brute-Force-Angriffe.

### So verschlüsseln Sie Dateien mit ZipGo:
1. Markieren Sie die gewünschten Dateien oder Ordner im Finder.
2. Klicken Sie mit der rechten Maustaste und wählen Sie **Mit ZipGo komprimieren**.
3. Wählen Sie das Format (`.zip` oder `.7z`) und aktivieren Sie **Passwortschutz**.
4. Tragen Sie Ihr Passwort ein und klicken Sie auf **Komprimieren**.

ZipGo nutzt auf modernen Macs mit Apple Silicon die integrierte Hardware-Kryptografie. Ihre Daten werden in Sekundenschnelle ohne nennenswerte Systemlast verschlüsselt.

---

## 2. Mehrteilige Split-Archive: Dateigrößenlimits gezielt überwinden

Überschreitet eine Datei die maximal erlaubte Größe für E-Mail-Anhänge, teilt man das Archiv in durchnummerierte Segmente auf (z. B. `.z01`, `.z02`, `.zip` oder `.7z.001`, `.7z.002`).

### Typische Einsatzbereiche in der Praxis:
- **E-Mail-Anhänge**: Zerteilen Sie ein 75-MB-Dokument in drei 24-MB-Teile, damit jede Datei problemlos durch die Mail-Gateways gelangt.
- **FAT32-formatierte USB-Sticks**: Das alte FAT32-Dateisystem verweigert Dateien, die größer als 4 GB sind. Ein 12-GB-Festplatten-Image lässt sich in sechs 2-GB-Segmente aufteilen und passt so auf jeden Stick.
- **Zuverlässigere Cloud-Uploads**: Bricht ein 10 GB großer Einzel-Upload kurz vor dem Ende ab, muss man von vorn beginnen. Bei Teildateien laden Sie nur das fehlgeschlagene Teilstück erneut hoch.

### So teilen Sie Archive mit ZipGo auf:
1. Wählen Sie den Ordner im Finder aus und öffnen Sie **Mit ZipGo komprimieren**.
2. Wählen Sie unter **Teilarchiv / Split** ein passendes Preset (z. B. `25 MB (E-Mail)`, `100 MB`, `1 GB` oder geben Sie eine freie Megabyte-Größe ein).
3. Starten Sie den Vorgang. ZipGo teilt das Archiv vollautomatisch in durchnummerierte Sequenzdateien auf.

Empfänger müssen lediglich alle Teildateien im selben Verzeichnis speichern und den ersten Teil mit ZipGo doppelklicken – die gesamte Datei wird nahtlos rekonstruiert.

---

## Format-Vergleich: ZIP vs. 7Z

- **ZIP**: Maximale Kompatibilität. Lässt sich ohne Zusatzsoftware auf praktisch jedem Mac-, Windows- und Linux-Rechner öffnen.
- **7Z**: Höchste Kompressionsrate. Spart gegenüber ZIP oft weitere 20 bis 40 % Speicherplatz und erlaubt zusätzlich das **Verschlüsseln von Dateinamen (Header Encryption)**.

---

## Fazit

Sicherheitsvorgaben und strenge Dateigrößenbeschränkungen müssen Ihren Arbeitsfluss nicht aufhalten. Mit ZipGo werden militärische AES-256-Verschlüsselung und flexible Split-Archive zu schnellen Handgriffen im Finder-Kontextmenü.

[Laden Sie ZipGo jetzt im Mac App Store](https://apps.apple.com/app/id6799313183) herunter und versenden Sie Ihre Daten sicher und normgerecht.
