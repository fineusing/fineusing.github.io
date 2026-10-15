---
layout: ../../layouts/BlogPostLayout.astro
title: "Beyond /Applications: How to Scan and Launch Steam Games, Setapp, and Custom App Directories"
date: "2025-03-08"
description: "Have apps installed in ~/Applications, Setapp, or an external SSD for Steam games that never show up in Launchpad? Learn how AppPad scans custom directories to unify all your Mac applications in one place."
tags: ["AppPad", "Custom App Paths", "Steam Games Mac", "Setapp", "Homebrew Cask", "Mac Storage"]
product: "AppPad"
---

As Macs increasingly serve as primary machines for both intensive professional work and gaming, your application library rarely lives exclusively in `/Applications`:

- **Steam & Game Libraries**: Because modern games exceed 80GB to 150GB each, many gamers install Steam libraries onto external Thunderbolt NVMe SSDs;
- **User-Specific Applications**: Specialized tools, portable Chrome PWAs, and internal company builds often install by default into your personal user directory: `~/Applications`;
- **Developer Tools**: Command-line utilities, Homebrew Cask GUI binaries, or standalone `.app` tools downloaded directly from GitHub.

Yet, when you opened Apple's legacy Launchpad, you were greeted by a frustrating limitation:

**Launchpad hardcoded its search exclusively to `/Applications` and `/System/Applications`.**

If software was stored on an external volume, a secondary partition, or your user folder, it was completely invisible in the application grid. Historically, the only workaround was opening Terminal and manually creating symbolic links (`ln -s`) for every single app—a tedious, fragile process.

Here is how [AppPad](https://fineusing.com/installer/AppPad-Installer.dmg) eliminates this barrier, allowing you to add unlimited custom scanning directories to create a unified software launcher.

---

## Why Modern Mac Applications Are Scattered Across Drives

This is not user error—it is a natural response to the macOS hardware ecosystem:

1. **High Internal Storage Costs**: Upgrading internal Mac SSD storage at purchase is notoriously expensive. Running games like *Baldur's Gate 3* or *Cyberpunk 2077* from a high-speed external portable drive is standard practice, but Apple's native tools ignore non-system drives;
2. **Multi-User Isolation**: On shared family Macs or corporate workstations, personal productivity tools or encrypted password managers belong in `~/Applications`, shielded from other user accounts;
3. **Portable & Standalone Binaries**: Many open-source utilities are self-contained. Unzipping them into a dedicated `~/Tools` directory keeps your root system tidy.

A capable application launcher must adapt to where you choose to store your tools, rather than forcing you to bend to an arbitrary system path.

---

## The AppPad Solution: Custom Scan Directory Manager

[AppPad](https://fineusing.com/installer/AppPad-Installer.dmg) scans `/Applications` and `/System/Applications` by default for out-of-the-box convenience.

Inside AppPad Preferences, you will also find the **Custom Scan Directories** panel:

### 1. Add Any Volume or Nested Folder
- Click **Add Directory** to summon the native macOS open dialog;
- Point it to your external SSD game path (e.g., `/Volumes/GameDrive/SteamLibrary/steamapps/common/...`), your personal `~/Applications` folder, or custom developer directories;
- Add as many paths as your workflow requires across internal partitions, external drives, or network volumes.

### 2. Intelligent Recursive Indexing & Deduplication
- AppPad scans the designated paths recursively in the background, identifying genuine macOS `.app` bundles;
- Built-in bundle signature deduplication ensures that symlinks or aliased launchers never create duplicate ghost icons in your grid;
- If an external drive is unplugged, AppPad gracefully holds its layout state in reserve. When you plug the drive back in, the associated icons and folders reappear instantly in their exact positions.

### 3. Unified Search, Gestures, and Folders
Once indexed, external applications and games enjoy first-class citizenship alongside system utilities:
- Group your Steam games into a custom "Gaming" folder;
- Start typing to fuzzy-search and launch them in milliseconds;
- Use right-click context menus to rearrange them or pin them directly to the macOS Dock.

---

## Suggested 3-Tier Layout for Power Users

With custom directory scanning enabled, you can build a streamlined application workflow:

- **Page 1 (Core Work & Daily Drivers)**: System productivity tools from `/Applications` (browsers, office suites, Final Cut Pro, Slack);
- **Page 2 (Developer & Personal Tools)**: Add `~/Applications` to house specialized utilities, local scripts, and testing binaries;
- **Page 3 (Games & Leisure Matrix)**: Point to your external SSD to create a dedicated high-density gaming launchpad.

---

## Summary

Your Mac belongs to you, and your launcher should index everything your machine is capable of running, regardless of physical disk boundaries.

Ditch the limitation of hardcoded system paths. Consolidate every application, tool, and game into one cohesive, native visual launcher.

[Download AppPad for macOS](https://fineusing.com/installer/AppPad-Installer.dmg) and bring all your distributed software under unified command today.
