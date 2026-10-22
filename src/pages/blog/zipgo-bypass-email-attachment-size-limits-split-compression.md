---
layout: ../../layouts/BlogPostLayout.astro
title: "Bypass Email Attachment Size Limits on Mac: How to Split Files into 25MB Chunks via Right-Click"
date: "2026-10-19"
description: "Email servers like Gmail and Outlook reject attachments over 25MB. Learn how to automatically split large Keynote decks, video files, and datasets into sequenced 25MB parts on Mac with ZipGo."
tags: ["ZipGo", "macOS", "Email", "Productivity", "File Transfer"]
product: "ZipGo"
---

Almost every corporate, academic, and government email infrastructure in the world enforces a hard ceiling on incoming and outgoing attachment sizes:

- **Gmail & Google Workspace**: 25MB limit.
- **Microsoft Outlook & Exchange Online**: 20MB to 25MB default limit (often strictly filtered by enterprise mail gateways).
- **Apple Mail (iCloud Mail)**: 20MB message limit.
- **ProtonMail, Yahoo, and regional mail servers**: 25MB standard cap.

When you need to send an urgent 85MB Keynote pitch deck, a 120MB high-res print catalog, or a 300MB CAD design to an external client whose corporate firewall blocks third-party cloud links (Dropbox, Google Drive, WeTransfer, or Baidu Netdisk are banned in many corporate banking and defense intranets), email remains the only permitted delivery channel.

If you try to compress the folder using macOS’s native Finder tool, you get a single 80MB `.zip` file. You hit "Send" in Mail or Outlook, and five seconds later your inbox receives a harsh Mail Delivery Subsystem bounce-back:
> *"552 5.3.4 Message size exceeds fixed maximum limit."*

Here is how you can slice large assets into sequenced 25MB multi-volume archives on Mac in seconds without opening Terminal.

---

## Why Splitting Files Manually in Terminal Is Risky

Technically, macOS includes the Unix `split` utility. If you know shell commands, you might try:

```bash
# Compress the folder first
zip -r presentation.zip ./Presentation_Folder

# Split the zip into 24MB chunks using Unix split
split -b 24m presentation.zip presentation.part_
```

### Why this approach breaks down in real corporate workflows:
1. **Broken ZIP Header Structure**: The raw Unix `split` command cuts binary bytes blindly like a knife through butter. It does not output standard ZIP multi-volume headers (`.z01`, `.z02`, `.zip` or `.7z.001`). 
2. **Recipient Friction**: When the recipient receives `presentation.part_aa` and `presentation.part_ab`, they have no idea what software can open it. On Windows, double-clicking those parts does nothing. The recipient has to run command-line `cat` or `copy /b` commands just to merge the chunks back together before unzipping.
3. **No Encryption**: Slicing an unencrypted zip leaves confidential commercial data vulnerable if any email is forwarded or intercepted.

---

## The One-Click Solution: Smart Volume Splitting with ZipGo

[ZipGo](https://apps.apple.com/app/id6799313183) provides native, standardized split-volume compression directly through macOS Finder's right-click menu.

Instead of raw binary chopping, ZipGo uses official 7-Zip and PKWARE ZIP multi-volume specifications recognized universally across all major operating systems.

### Step-by-Step: Splitting an 85MB File for Email

1. **Select the Asset**: Highlight the large folder, video file, or document package in Finder.
2. **Right-Click** and choose **Compress with ZipGo**.
3. **Set Split Volume**:
   - In the settings sheet, find the **Split Volume** dropdown.
   - Click the preset: **25MB (Email)** (or choose 10MB, 50MB, 100MB, 1GB, or enter a custom megabyte value).
   - Format: Select `.zip` (universal) or `.7z` (better compression).
   - Optional: Add an **AES-256 password** if the material is confidential.
4. **Click Compress**.

ZipGo immediately generates clean, numbered sequence files:
```text
Pitch_Deck_Final.z01   (24.9 MB)
Pitch_Deck_Final.z02   (24.9 MB)
Pitch_Deck_Final.z03   (24.9 MB)
Pitch_Deck_Final.zip   (10.2 MB)
```
*(Every single file comfortably passes Gmail, Outlook, and Apple Mail size thresholds.)*

---

## How to Send and How the Recipient Extracts

### Sending Strategy:
Because each part is under 25MB, you can either:
- Attach all 4 parts across 2 separate emails (e.g. Parts 1 & 2 in Email #1, Parts 3 & 4 in Email #2).
- Or send one part per email if the client gateway has an ultra-strict 20MB per-message limit.

### How the Recipient Opens It:
No technical knowledge is required from your recipient:
1. The recipient saves all parts into the same folder on their machine.
2. **On Windows**: They double-click `Pitch_Deck_Final.zip` (or `.7z.001`). WinRAR, 7-Zip, or modern Windows Explorer automatically stitches the parts together in memory and extracts the full original 85MB presentation cleanly.
3. **On Mac**: They right-click `Pitch_Deck_Final.zip` and extract with ZipGo.

---

## Split Volume Presets in ZipGo

| Preset Name | Target Size | Ideal Use Case |
| :--- | :--- | :--- |
| **Email (Standard)** | 25 MB | Gmail, Outlook, Exchange, iCloud Mail, Yahoo |
| **Enterprise Chat** | 50 MB / 100 MB | Slack, Microsoft Teams, WeChat, Discord |
| **FAT32 USB Drive** | 2000 MB (2 GB) | Transferring to USB flash drives formatted with FAT32 |
| **Custom Size** | Any MB / GB | Tailored cloud storage chunking or backup scripts |

Stop fighting email bounce notifications. Download [ZipGo on the Mac App Store](https://apps.apple.com/app/id6799313183) and easily clear any corporate attachment ceiling.
