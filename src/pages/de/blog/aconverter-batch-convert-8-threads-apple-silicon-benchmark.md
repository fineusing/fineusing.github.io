---
layout: ../../../layouts/BlogPostLayout.astro
title: "Über 500 verlustfreie Songs im Mac-Stapel konvertieren: 8-Thread-Benchmark auf Apple Silicon"
date: "2026-10-29"
description: "Große Musiksammlungen aus APE, FLAC und WAV in 320 kbps MP3 für unterwegs umwandeln? Benchmark-Test mit AConverter unter 8-Thread-Volllast auf Apple Silicon: Konvertierungszeit, RAM-Bedarf und Temperatur im Praxistest."
tags: ["AConverter", "Stapelkonvertierung", "Batch Audio Converter", "Apple Silicon", "Multi-Threading", "Audio-Transkodierung", "macOS"]
product: "AConverter"
locale: "de"
---

Das Aufräumen und Umstrukturieren einer über Jahre gewachsenen digitalen Musikbibliothek erfordert Geduld.

Auf einer externen Festplatte schlummerte ein Archiv aus Studienzeiten: 520 verlustfreie Musiktitel in den unterschiedlichsten Dateiformaten – vom betagten Monkey's Audio (`.ape`) über unkomprimierte Master-Dateien (`.wav`) bis hin zu modernen Free-Lossless-Audio-Codecs (`.flac`). Gesamtgröße: stolze 22,8 GB.

Das Ziel: Die gesamte Sammlung sollte per Stapelverarbeitung in universell kompatibles, erstklassiges 320 kbps MP3 gewandelt werden, um sie auf einem USB-Stick für das Auto und einem mobilen Hi-Res-Player mitzunehmen.

Bei herkömmlichen, einkernigen Audiokonvertern dauert das Transkodieren von 520 Titeln bei durchschnittlich 3 bis 4 Sekunden pro Song schnell über 25 bis 30 Minuten. Da **AConverter** auf dem Mac **bis zu 8 parallele Konvertierungs-Threads** nativ unterstützt, haben wir auf einem MacBook Pro einen realitätsnahen Stresstest unter Volllast durchgeführt.

---

## Testumgebung und Datensatz

* **Testgerät**: 14-Zoll MacBook Pro (Apple M3-Chip, 16 GB gemeinsamer Arbeitsspeicher, aktuelles macOS).
* **Testdatensatz**:
  - Gesamtzahl: 520 verlustfreie Audiodateien.
  - Formatverteilung: APE (160 Titel), FLAC (220 Titel), WAV (140 Titel).
  - Gesamtdatenmenge: 22,8 GB.
* **Ziel-Konfiguration**: MP3-Container, konstante Bitrate (CBR) von 320 kbps, Stereo, Abtastrate 44.100 Hz, vollständige Übernahme aller ID3-Tags und Cover-Bilder.

---

## Benchmark: 1 Thread vs. 4 Threads vs. 8 Threads

In den Einstellungen von AConverter lässt sich die Anzahl paralleler Threads flexibel zwischen 1 und 8 festlegen. Das waren die gestoppten Zeiten:

| Parallelisierungsmodus | Gesamtdauer (520 Titel) | Durchschnitt pro Titel | Hardware-Auslastung & Lüfterakustik |
| :---: | :---: | :---: | :--- |
| **Einzelthread (1 Task)** | 26 Min. 14 Sek. | ca. 3,02 Sek. / Titel | Effizienzkerne aktiv; Lüfter steht still (0 U/min) |
| **4 Threads parallel** | 7 Min. 18 Sek. | ca. 0,84 Sek. / Titel | 4 Performance-Kerne unter Last; SoC-Temperatur 48 °C |
| **8 Threads parallel (Max)** | **3 Min. 42 Sek.** | **ca. 0,42 Sek. / Titel** | Volle Auslastung aller 8 Kerne; 56 °C; Lüfter unhörbar |

```text
[Stapelverarbeitung von 520 Songs - Gesamtdauer im Vergleich]
Einzel-Thread [████████████████████████████████████████] 26m 14s
4 Threads     [██████████] 7m 18s
8 Threads     [█████] 3m 42s ── Über 700 % schneller als sequenzielle Verarbeitung!
```

Das Aktivieren der 8-Thread-Parallelisierung reduzierte die Wartezeit von knapp einer halben Stunde auf **weniger als 4 Minuten**!

Zieht man die 520 Dateien per Drag-and-Drop in AConverter und klickt auf Start, arbeiten 8 Transkodierer synchron nebeneinander und haken die Warteschlange im Sekundentakt ab.

---

## Systemressourcen: RAM-Verbrauch und Wärmeentwicklung

Führt eine Auslastung mit 8 parallelen Worker-Threads zu Rucklern in der Benutzeroberfläche von macOS, explodierendem RAM-Bedarf oder lauten Lüftern?

Während des gesamten Testlaufs lief die macOS-Aktivitätsanzeige zur Überwachung mit:

### 1. Arbeitsspeicher (RAM)
AConverter begnügte sich durchgehend mit stabilen **65 MB bis 85 MB RAM**. Dank einer speicheroptimierten Streaming-Puffer-Architektur liest die App Datenblöcke kontinuierlich von der SSD ein, encodiert die Audio-Frames und gibt den belegten Speicher sofort wieder frei. Selbst nach 22 GB an Rohdaten gab es weder Speicherlecks noch Auslagerungsdateien (Swap).

### 2. Multi-Core-Scheduling
Die Architektur von Apple Silicon mit Unified Memory und asymmetrischen CPU-Kernen spielt hier ihre Stärken voll aus: Während die 8 Threads die Rechenwerke im Hintergrund voll auslasten, blieb das Betriebssystem im Vordergrund verzögerungsfrei bedienbar. 4K-Videowiedergabe und 120-Hz-Scrolling in Safari liefen ohne jeden Frame-Drop.

### 3. Thermisches Verhalten
Die Chiptemperatur des M3 stabilisierte sich bei moderaten 56 °C. Die internen Lüfter des MacBook Pro blieben unterhalb der hörbaren Wahrnehmungsschwelle – der Mac arbeitete vollkommen lautlos.

---

## Praxistipps für große Musiksammlungen

1. **Für Apple-Silicon-Macs (M1 / M2 / M3 / M4)**: Stellen Sie die Parallelisierung in AConverter bedenkenlos auf **8 Threads**. Dies bietet das ideale Verhältnis aus maximalem Durchsatz und hoher Energieeffizienz.
2. **Für ältere Intel-Macs mit Dual-Core**: Wählen Sie 2 bis 4 Threads, um thermisches Throttling zu vermeiden und dem System ausreichend Puffer für Hintergrundaufgaben zu lassen.
3. **ID3-Tag-Integrität**: Nach Abschluss des Vorgangs waren alle Titelnummern, Künstlernamen, Albumnamen und Cover-Arts bitgenau erhalten – das Infotainmentsystem im Auto ordnete alle Alben fehlerfrei zu.

Wer große Musikarchive, Live-Mitschnitte oder Hörspielserien effizient migrieren möchte, nutzt mit AConverter das volle Multi-Core-Potenzial des Mac.
