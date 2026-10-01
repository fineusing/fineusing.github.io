---
layout: ../../layouts/BlogPostLayout.astro
title: "How to Create New Files from the Right-Click Menu in macOS Finder"
date: "2025-02-10"
description: "Missing the 'New Text Document' option on Mac? Learn how to add a native right-click file creation menu to Finder for TXT, DOCX, XLSX, JSON, and custom templates."
tags: ["Rightly", "macOS", "Finder", "Productivity"]
product: "Rightly"
---

Switching from Windows to macOS often brings an unexpected surprise: **there is no native "New Document" option in the Finder right-click context menu.**

Whether you need a blank `.txt` note, a new `.docx` document, a clean `.xlsx` spreadsheet, or a `.json` configuration file for coding, macOS forces you to open the target application first, select *File > New*, and then manually save it to your desired folder. 

This multi-step workflow breaks your focus and wastes valuable time. Fortunately, you can bring native right-click file creation back to macOS with zero hassle.

## Why Doesn't macOS Have a "New File" Right-Click Menu?

Apple's design philosophy for macOS emphasizes document-centric and application-centric workflows. macOS assumes users launch an app first, create work within it, and then store files using iCloud Drive or recent documents.

However, for developers, writers, office professionals, and project managers, files are organized by **directory hierarchy**. You navigate to a specific client folder or code repository in Finder and want to create a new file *right there*.

## Common Workarounds (and Why They Fall Short)

Over the years, Mac power users have relied on several workarounds:

1. **Terminal (`touch filename.ext`)**: Fast for programmers, but inconvenient for everyday office files like Word, Excel, or Keynote.
2. **AppleScript & Automator Quick Actions**: Can be clunky, often fail after major macOS updates, and lack document template capabilities.
3. **Third-party background overlay tools**: Many older utilities inject code into system processes, requiring you to disable SIP (System Integrity Protection) or deal with sluggish Finder responsiveness.

## The Clean Solution: Rightly for macOS

To solve this problem without compromising system stability, [Rightly](https://apps.apple.com/app/rightly-right-click-toolkit/id6806805796?mt=12) was built using Apple's official Finder Sync extension API.

Rightly deeply integrates into the macOS Finder context menu, giving you instant file creation wherever you right-click.

### 1. Built-in Support for 10+ Standard Formats
Right out of the box, right-clicking any empty area in Finder reveals a clean "New File" submenu with pre-configured formats:
- **Office documents**: Word (`.docx`), Excel (`.xlsx`), PowerPoint (`.pptx`)
- **Apple iWork**: Pages (`.pages`), Numbers (`.numbers`), Keynote (`.key`)
- **Developer files**: Plain text (`.txt`), JSON (`.json`), XML (`.xml`), Property List (`.plist`)
- **Rich documents**: Rich Text Format (`.rtf`), Markdown (`.md`)

Clicking any format immediately generates a clean, valid file in the current directory, ready for editing.

### 2. Custom Templates: Company Letterheads, Skeletons, and Boilerplates
Standard blank files are helpful, but repetitive work usually requires boilerplate. Rightly allows you to register **Custom File Templates**:
- Company contract templates with headers and legal disclaimers.
- Project starter files (`README.md`, `.gitignore`, boilerplate code).
- Design project briefs and standardized meeting minutes.

Drag any template file into Rightly's preferences, and it immediately appears in your right-click menu.

## How to Set Up Right-Click File Creation in 1 Minute

1. Download **Rightly** from the Mac App Store.
2. Launch the app and grant Finder Extension permissions in *System Settings > Extensions*.
3. Open any Finder window, right-click, and select **New File**.

No background daemons slowing down your system, and no complex setup required.

## Conclusion

A simple right-click file creation feature saves dozens of window switches every workday. If you want a faster, smoother macOS file management workflow, [install Rightly from the Mac App Store](https://apps.apple.com/app/rightly-right-click-toolkit/id6806805796?mt=12) and streamline your daily desk work.
