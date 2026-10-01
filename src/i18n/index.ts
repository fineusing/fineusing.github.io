export const locales = ["en", "cn"] as const;
export type Locale = (typeof locales)[number];
export const DEFAULT_LOCALE: Locale = "en";

const dictionaries = {
  en: {
    langTag: "en-US",
    nav: {
      home: "Home",
      products: "Products",
      blog: "Blog",
      contact: "Contact Us",
      privacy: "Privacy Policy",
      apppadTag: "Alternatives to macOS 26 Launchpad",
      devicemirrorTag: "iPhone Screen Mirroring To Mac",
      rightlyTag: "Finder Right-Click Toolkit",
      zipgoTag: "Finder Right-Click Archiver",
      ntfssyncTag: "NTFS Read-Write Driver for Mac",
      lang: "CN"
    },
    footer: {
      slogan: "Designed with care for macOS",
      contact: "Contact Us",
      privacy: "Privacy Policy",
      rights: "All Rights Reserved"
    },
    home: {
      title: "Ultimate tools designed for macOS users",
      subtitle: "Focused on improving efficiency and elegant interactive experience",
      apppadTitle: "AppPad",
      apppadSubtitle: "macOS 26 Launchpad Alternative",
      apppadHeading: "Launch apps instantly",
      apppadBody:
        "AppPad is a lightning-fast macOS Launchpad alternative. Built in Swift and AppKit for native speed, it lets you organize apps in custom groups and open with gestures or hot corners.",
      devicemirrorTitle: "DeviceMirror",
      devicemirrorSubtitle: "iPhone Screen Mirroring to Mac",
      devicemirrorHeading: "Mirror iPhone with zero latency",
      devicemirrorBody:
        "DeviceMirror supports casting your iPhone/iPad screen to your macOS computer for watching movies, playing games, listening to music, and demo presentations on a larger screen.",
      rightlyTitle: "Rightly",
      rightlySubtitle: "Mac Context Menu Enhancer",
      rightlyHeading: "Put frequent actions into right-click",
      rightlyBody:
        "Rightly supercharges your macOS Finder context menu with instant file creation (txt, docx, json...), 30+ archive format compression & extraction, quick directory/app access, and essential productivity tools.",
      zipgoTitle: "ZipGo",
      zipgoSubtitle: "Powerful Finder Archiver for macOS",
      zipgoHeading: "Compress, Extract & Preview via Right-Click",
      zipgoBody:
        "ZipGo seamlessly integrates into the macOS Finder context menu. Compress to ZIP/7Z/TAR.GZ with encryption, extract 30+ archive formats, and preview contents directly without unpacking.",
      ntfssyncTitle: "NTFSSync",
      ntfssyncSubtitle: "Fast & Reliable NTFS Read-Write for macOS",
      ntfssyncHeading: "Read & write NTFS drives seamlessly",
      ntfssyncBody:
        "NTFSSync mounts external NTFS drives in read-write mode automatically. Enjoy high-speed file transfer between Mac and Windows, disk health repair, and one-click unmounting.",
      ctaTitle: "Start using Fineusing apps today",
      ctaBody:
        "DeviceMirror supports casting your iPhone/iPad screen to your macOS computer for watching movies, playing games, listening to music, and demo presentations on a larger screen.",
      ctaPrimary: "Download",
      ctaSecondary: "Learn more →",
      learnMore: "Learn more"
    },
    apppad: {
      title: "AppPad",
      subtitle: "Best alternative to Launchpad in macOS 26",
      cta: "Free Download",
      featuresTitle: "Lightning Fast Launch",
      features: [
        {
          title: "Lightning Fast Launch",
          body: "Built with native Swift using AppKit, fast as lightning."
        },
        {
          title: "Custom Grouping",
          body: "Categorize and group apps according to your preferences."
        },
        {
          title: "Layout Compatibility",
          body: "Automatically compatible with the old Launchpad layout, no manual adjustment needed."
        },
        {
          title: "Hotkey Support",
          body: "One-key shortcut to launch and close Launchpad."
        },
        {
          title: "Trackpad Gesture Support",
          body: "Use gestures to launch and close Launchpad."
        },
        {
          title: "Hot Corner Support",
          body: "Customize hot corners to launch and close Launchpad."
        }
      ],
      showcase: [
        {
          title: "Custom Grouping",
          body: "Group and sort apps according to your preferences."
        },
        {
          title: "Software Settings",
          body: "Customize shortcut keys, trigger angles, and layout modes."
        }
      ]
    },
    devicemirror: {
      title: "DeviceMirror",
      subtitle: "Mirror your iPhone/iPad screen to your macOS computer",
      cta: "Free Download",
      features: [
        {
          title: "Wireless Screen Mirroring via AirPlay 2",
          body: "Supports wireless screen mirroring using the AirPlay 2 protocol; no need to install an app on your iPhone/iPad."
        },
        {
          title: "Wired Connection Screen Mirroring",
          body: "Supports connecting your iPhone/iPad to the computer via a cable for stable 60 FPS output, smooth and without lag."
        },
        {
          title: "Multiple Resolution Options, Up to 4K",
          body: "Supports various resolutions for screen mirroring."
        },
        {
          title: "AirPlay",
          body: "Allows you to cast movies and TV shows from online video platforms to your computer for a big-screen experience."
        },
        {
          title: "Phone Screen Recording",
          body: "During screen mirroring, you can record your phone's screen and audio as an MP4 file."
        },
        {
          title: "Computer System Audio Recording",
          body: "Easily record audio playing on your computer into an MP3 file without installing any audio drivers."
        }
      ],
      showcase: [
        {
          title: "Enjoy the Big Screen",
          body:
            "Instantly mirror movies and games from your iPhone/iPad to the computer with one click, enjoy the big screen experience."
        },
        {
          title: "iPhone/iPad Screen Recording",
          body: "Easily record your iPhone/iPad screen to capture wonderful moments"
        }
      ]
    },
    rightly: {
      title: "Rightly",
      subtitle: "Put frequent actions into the context menu for ultimate Mac file management efficiency",
      cta: "Download on Mac App Store",
      downloadUrl: "https://apps.apple.com/app/rightly-right-click-toolkit/id6806805796?mt=12",
      featuresTitle: "Core Features",
      features: [
        {
          title: "Instant File Creation",
          body: "Create new files directly from right-click: txt, docx, xlsx, pptx, json, xml, plist, and more. Support custom templates for company docs and project skeletons."
        },
        {
          title: "30+ Archive Formats",
          body: "Easily extract and compress 7Z, ZIP, RAR, TAR, GZIP, BZIP2, XZ, ISO, and more. Includes encrypted archives and split-volume compression for email limits."
        },
        {
          title: "Quick Folders & Apps",
          body: "Pin project directories, download folders, asset libraries, and favorite apps directly to your context menu. Eliminate repeated window navigation."
        },
        {
          title: "Essential Utilities",
          body: "Built-in tools: copy file path, copy file name, show/hide file extensions, AirDrop files, and open terminal at current path instantly."
        }
      ],
      showcase: [
        {
          title: "One-Click File & Template Creation",
          body: "Never open an office suite just to create an empty document. Choose from 10+ built-in formats or add your own team templates."
        },
        {
          title: "Military-Grade Encryption & Split Compression",
          body: "Protect confidential commercial data with custom passwords, and slice large archives into parts to easily fit email attachment limits."
        }
      ],
      audienceTitle: "Tailored For Every Workflow",
      audience: [
        {
          role: "Developers",
          desc: "Create json/xml/plist in seconds, copy file paths, and launch terminal directly in the current folder."
        },
        {
          role: "Office Pros",
          desc: "Quickly new docx/xlsx/pptx files, encrypt sensitive sheets, and split-compress for email sending."
        },
        {
          role: "Designers",
          desc: "Jump straight into asset libraries, share designs via AirDrop, and keep Finder organized."
        },
        {
          role: "Students & Teams",
          desc: "Archive courseware, compress research projects, and access daily tools without friction."
        }
      ],
      whyTitle: "Why Choose Rightly?",
      whyPoints: [
        "Native macOS context menu experience, ready when you right-click",
        "Minimize window switching and redundant navigation",
        "Support custom templates and favorite shortcuts",
        "Covers creation, compression, extraction, navigation, and path copying in one place"
      ]
    },
    zipgo: {
      title: "ZipGo",
      subtitle: "Powerful Finder right-click archiver: effortlessly extract, compress, and preview 30+ formats",
      cta: "Download on Mac App Store",
      downloadUrl: "https://apps.apple.com/app/zipgo-unarchive-rar-7z-zip/id6799313183?mt=12",
      featuresTitle: "Core Highlights",
      features: [
        {
          title: "Right-Click Extraction",
          body: "Extract to current directory or automatically create a dedicated subfolder, keeping Finder perfectly clean."
        },
        {
          title: "Right-Click Compression",
          body: "Quickly compress to ZIP, 7Z, or TAR.GZ with customizable compression levels, passwords, and split volumes."
        },
        {
          title: "Instant Archive Preview",
          body: "Browse contents inside archives like ordinary folders directly via right-click without decompressing first."
        },
        {
          title: "30+ Format Support",
          body: "Flawlessly handle 7Z, ZIP, RAR, TAR, GZIP, BZIP2, XZ, ISO, CAB, ARJ, LZIP, VHD, Linux packages, and legacy files."
        }
      ],
      showcase: [
        {
          title: "Browse Archive Contents Without Extracting",
          body: "Preview internal documents, images, and nested structures in a flash. Never waste disk space unpacking massive archives just to check one file."
        },
        {
          title: "Encrypted Protection & Smart Volume Splitting",
          body: "Protect sensitive business files with strong password encryption, and split huge archives into custom-sized chunks to effortlessly meet email limits."
        }
      ],
      whyTitle: "Why Choose ZipGo?",
      whyPoints: [
        "Native Finder right-click integration — zero window clutter, ready instantly",
        "Comprehensive support for over 30 archive and compression formats",
        "Instant archive preview saves disk space and workflow time",
        "Enterprise-grade password protection and smart volume splitting"
      ]
    },
    ntfssync: {
      title: "NTFSSync",
      subtitle: "Professional NTFS read-write driver for macOS with native-speed performance",
      cta: "Download on Mac App Store",
      downloadUrl: "https://apps.apple.com/app/ntfssync-ntfs-read-write/id6475194342?mt=12",
      featuresTitle: "Core Features",
      features: [
        {
          title: "Full Read-Write Mode",
          body: "Effortlessly read, edit, copy, and delete files on any Windows NTFS-formatted external storage without limitations."
        },
        {
          title: "Auto Mount on Insertion",
          body: "Automatically detects and mounts NTFS hard drives, USB flash drives, and SD cards in read-write mode upon connection."
        },
        {
          title: "Comprehensive Disk Management",
          body: "View detailed disk info, open partitions directly, check mount statuses, and safely eject disks with ease."
        },
        {
          title: "Disk Repair & Erase",
          body: "Built-in NTFS disk first aid tool to verify, repair file system errors, and format or erase NTFS partitions directly on macOS."
        },
        {
          title: "One-Click Batch Eject",
          body: "Safely unmount all mounted drives in a single click, preventing data corruption when unplugging multiple devices."
        },
        {
          title: "Rename NTFS Disks",
          body: "Customize and rename NTFS drive labels directly within macOS for clear device identification."
        }
      ],
      showcase: [
        {
          title: "Automatic Read-Write Mounting & Native Speed",
          body: "Plug and play without complex terminal commands. Enjoy blazing-fast file copy speeds between macOS and NTFS storage."
        },
        {
          title: "Complete Disk Health Inspection & Repair",
          body: "Detect partition anomalies, repair corrupted NTFS file systems, and format disks securely without needing a Windows PC."
        }
      ],
      whenNeedTitle: "When Do You Need NTFSSync?",
      whenNeed: [
        {
          title: "Read-Only NTFS Limitation",
          desc: "External NTFS hard drives open as read-only by default on macOS, blocking file saving."
        },
        {
          title: "Unable to Copy or Edit Files",
          desc: "Cannot add new documents, edit existing spreadsheets, or delete outdated files on NTFS drives."
        },
        {
          title: "Cross-Platform File Transfer",
          desc: "Frequently swapping drives and moving heavy files between Windows PCs and Mac computers."
        },
        {
          title: "Organizing NTFS External Drives",
          desc: "Need to manage folders, rename volumes, or fix file errors on NTFS storage directly from your Mac."
        }
      ],
      whyTitle: "Why Choose NTFSSync?",
      whyPoints: [
        "Full read and write capability for all NTFS external storage devices",
        "Plug-and-play automatic mounting without extra manual steps",
        "High-speed, stable data transfer matching native drive speeds",
        "Supports external hard drives, SSDs, USB thumb drives, and SD cards",
        "Fully optimized for both Apple Silicon (M1/M2/M3/M4) and Intel Macs",
        "Rock-solid data integrity guarantees safety without file corruption"
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "Any questions or suggestions? Please let us know.",
      label: "Your message",
      placeholder: "Please enter your feedback here...",
      button: "Send email",
      error: "The content cannot be empty.",
      subject: "Fineusing Feedback"
    },
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: April 1, 2025",
      sections: [
        {
          title: "1. Information We Collect",
          body:
            "Fineusing is committed to protecting your privacy. Our App primarily operates as an offline tool. We do not collect your personal identification information, file content, or keyboard input records."
        },
        {
          title: "2. Data Usage",
          body:
            "If the application crashes, it may send anonymous crash logs to us, which helps us fix bugs. These logs do not contain any personally sensitive information."
        },
        {
          title: "3. Third-Party Services",
          body:
            "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these third-party sites."
        },
        {
          title: "4. Contact Us",
          body: "If you have any questions about this Privacy Policy, please contact us through the \"Contact Us\" page."
        }
      ]
    },
    cleanHelper: {
      metaTitle: "Fineusing: CleanHelper",
      title: "App Uninstaller Helper Instructions",
      whyTitle: "Why do I need a Helper?",
      whyDesc:
        "Due to App Store Sandboxing restrictions, the main application operates in a secure, isolated environment. This prevents it from obtaining the necessary system permissions to directly delete files located in the Applications folder.",
      howDesc:
        "To ensure a complete and successful uninstallation, we utilize a lightweight Helper tool. This backend utility specifically handles deletion commands, allowing your system to stay clean and organized.",
      downloadBtn: "Download & Install Helper",
      compat: "Compatible with macOS 10.15 or later",
      downloadUrl: "/installer/HotLaunchHelperInstaller.pkg",
      stepsTitle: "Installation Guide",
      step1Title: "1. Download Package",
      step1Desc: "Click the download button above to get the official installer package (.pkg).",
      step2Title: "2. Run Installer",
      step2Desc: "Open the downloaded .pkg file and follow the on-screen installer prompts.",
      step3Title: "3. Complete & Enjoy",
      step3Desc: "Once installed, the helper service will seamlessly handle application removals."
    }
  },
  cn: {
    langTag: "zh-CN",
    nav: {
      home: "首页",
      products: "产品",
      blog: "博客",
      contact: "联系我们",
      privacy: "隐私政策",
      apppadTag: "macOS 26启动台替代品",
      devicemirrorTag: "iPhone屏幕镜像到Mac",
      rightlyTag: "macOS 原生右键增强工具",
      zipgoTag: "macOS Finder 原生右键解压缩工具",
      ntfssyncTag: "macOS 专业 NTFS 磁盘读写工具",
      lang: "EN"
    },
    footer: {
      slogan: "为macOS精心设计",
      contact: "联系我们",
      privacy: "隐私政策",
      rights: "保留所有权利"
    },
    home: {
      title: "为macOS用户精心设计的终极工具",
      subtitle: "专注于提升效率和优雅的交互体验",
      apppadTitle: "AppPad",
      apppadSubtitle: "macOS 26原生启动台的最佳替代品",
      apppadHeading: "即时启动应用",
      apppadBody: "AppPad解决了macOS 26缺少启动台的痛点，提供1:1还原的启动台体验，带回最熟悉的启动方式。",
      devicemirrorTitle: "DeviceMirror",
      devicemirrorSubtitle: "iPhone/iPad屏幕镜像到macOS",
      devicemirrorHeading: "低延迟投屏体验",
      devicemirrorBody:
        "DeviceMirror支持将您的iPhone/iPad屏幕投射到macOS电脑，在大屏幕上观看电影、玩游戏、听音乐和演示展示。",
      rightlyTitle: "Rightly",
      rightlySubtitle: "macOS 右键增强工具",
      rightlyHeading: "把常用操作放进右键菜单",
      rightlyBody:
        "Rightly 深度集成 Finder 右键菜单。无需频繁切换窗口，即可完成新建文件、支持 30+ 种格式的压缩解压、快速访问常用目录与 App，以及复制路径等实用工具操作。",
      zipgoTitle: "ZipGo",
      zipgoSubtitle: "macOS Finder 原生右键解压缩工具",
      zipgoHeading: "右键解压、压缩与预览",
      zipgoBody:
        "ZipGo 深度集成于 macOS Finder 的右键菜单中，支持解压超过 30 种格式、快速压缩为 ZIP/7Z/TAR.GZ 并支持密码加密与分卷，更提供免解压直接预览归档内容的强大功能。",
      ntfssyncTitle: "NTFSSync",
      ntfssyncSubtitle: "专业高效的 macOS NTFS 磁盘读写工具",
      ntfssyncHeading: "轻松实现 NTFS 磁盘读写与数据传输",
      ntfssyncBody:
        "NTFSSync 是 macOS 上专业的 NTFS 磁盘读写挂载工具。插盘自动以读写模式挂载，支持原生高速传输、磁盘修复与抹除、一键推出所有磁盘，兼容 Apple Silicon 与 Intel Mac。",
      ctaTitle: "立即体验 Fineusing 应用",
      ctaBody: "DeviceMirror支持将您的iPhone/iPad屏幕投射到macOS电脑，在大屏幕上观看电影、玩游戏、听音乐和演示展示。",
      ctaPrimary: "立即下载",
      ctaSecondary: "了解更多 →",
      learnMore: "了解更多"
    },
    apppad: {
      title: "AppPad",
      subtitle: "macOS 26启动台的最佳替代品",
      cta: "免费下载",
      features: [
        {
          title: "闪电般快速启动",
          body: "使用AppKit原生Swift构建，快如闪电。"
        },
        {
          title: "自定义分组",
          body: "根据您的喜好对应用进行分类和分组。"
        },
        {
          title: "布局兼容性",
          body: "自动兼容旧版启动台布局，无需手动调整。"
        },
        {
          title: "快捷键支持",
          body: "一键快捷键启动和关闭启动台。"
        },
        {
          title: "触控板手势支持",
          body: "使用手势启动和关闭启动台。"
        },
        {
          title: "热角支持",
          body: "自定义热角启动和关闭启动台。"
        }
      ],
      showcase: [
        {
          title: "自定义分组",
          body: "根据您的喜好对应用进行分组和排序。"
        },
        {
          title: "软件设置",
          body: "自定义快捷键、触发角度和布局模式。"
        }
      ]
    },
    devicemirror: {
      title: "DeviceMirror",
      subtitle: "将iPhone/iPad屏幕镜像到macOS电脑",
      cta: "免费下载",
      features: [
        {
          title: "AirPlay 2 无线镜像",
          body: "支持使用 AirPlay 2 协议无线屏幕镜像，无需在 iPhone/iPad 上安装应用。"
        },
        {
          title: "有线连接屏幕镜像",
          body: "支持通过数据线连接 iPhone/iPad，实现稳定 60 FPS 输出，流畅不卡顿。"
        },
        {
          title: "多种分辨率选择，最高支持 4K",
          body: "支持多种屏幕镜像分辨率。"
        },
        {
          title: "AirPlay 大屏播放",
          body: "将在线视频平台电影、电视剧投屏到电脑，享受大屏体验。"
        },
        {
          title: "手机屏幕录制",
          body: "在屏幕镜像过程中，可将手机屏幕与音频录制为 MP4 文件。"
        },
        {
          title: "电脑系统音频录制",
          body: "无需安装音频驱动即可将电脑播放的音频录制为 MP3 文件。"
        }
      ],
      showcase: [
        {
          title: "享受大屏体验",
          body: "一键将 iPhone/iPad 的电影和游戏投射到电脑，享受大屏体验。"
        },
        {
          title: "iPhone/iPad 屏幕录制",
          body: "轻松录制 iPhone/iPad 屏幕，捕捉精彩瞬间。"
        }
      ]
    },
    rightly: {
      title: "Rightly",
      subtitle: "把常用操作放进右键菜单，让 Mac 文件管理更高效",
      cta: "App Store 免费下载",
      downloadUrl: "https://apps.apple.com/app/rightly-right-click-toolkit/id6806805796?mt=12",
      featuresTitle: "主要功能",
      features: [
        {
          title: "新建文件",
          body: "通过右键菜单直接新建文件，内置 txt、docx、xlsx、pptx、pages、numbers、key、wps、json、rtf、xml、plist 等 10 多种格式，更支持自定义添加模版。"
        },
        {
          title: "解压与压缩",
          body: "支持超过 30 种压缩格式（7Z、ZIP、RAR、TAR、GZIP 等）。支持自定义加密压缩保护商业机密，支持分卷压缩突破邮箱附件大小限制。"
        },
        {
          title: "常用文件夹与 App",
          body: "将常用文件夹和 App 添加到右键菜单，快速访问项目目录、下载文件夹、素材库，或一键打开常用应用，大幅减少重复查找。"
        },
        {
          title: "实用工具箱",
          body: "内置多种高频实用工具：复制路径、复制文件（夹）名字、显示/隐藏文件扩展名、隔空投送、在当前目录打开终端等。"
        }
      ],
      showcase: [
        {
          title: "一键新建常用格式与自定义模板",
          body: "再也不用为了新建空白文档而特地启动办公软件。内置常用办公及代码格式，支持将公司规范模版或项目骨架加入右键菜单。"
        },
        {
          title: "专业加密压缩与分卷发送",
          body: "轻松应对各类压缩包。为机密数据添加密码保护，使用分卷压缩将大文件拆分发送，兼顾数据安全与传输效率。"
        }
      ],
      audienceTitle: "适合人群与使用场景",
      audience: [
        {
          role: "开发者",
          desc: "秒级新建 json/xml/plist，一键复制绝对路径，当前目录直接打开终端。"
        },
        {
          role: "办公用户",
          desc: "快速新建 docx/xlsx/pptx，对合同报表加密压缩，大文件分卷轻松发送。"
        },
        {
          role: "设计师",
          desc: "右键直达素材库与项目切图目录，快速通过隔空投送分享作品文件。"
        },
        {
          role: "学生与团队",
          desc: "整理课件资料、打包归档作业与项目文档，高频工具随用随走。"
        }
      ],
      whyTitle: "为什么选择 Rightly",
      whyPoints: [
        "原生右键体验，轻量无感，随用随走",
        "大幅减少窗口切换与重复查找步骤",
        "支持高度自定义模板与快捷入口",
        "全面覆盖新建、压缩、解压、访问、复制等高频操作"
      ]
    },
    zipgo: {
      title: "ZipGo",
      subtitle: "告别繁琐跨应用操作，Finder 右键一键搞定压缩、解压与预览",
      cta: "App Store 免费下载",
      downloadUrl: "https://apps.apple.com/app/zipgo-unarchive-rar-7z-zip/id6799313183?mt=12",
      featuresTitle: "核心亮点",
      features: [
        {
          title: "右键解压",
          body: "支持“解压到当前文件夹”或“解压到独立文件夹”，告别解压后文件散乱桌面的困扰。"
        },
        {
          title: "右键压缩",
          body: "快速压缩为 ZIP、7Z 或 TAR.GZ 格式，支持自定义压缩级别、密码保护以及分卷压缩。"
        },
        {
          title: "免解压右键预览",
          body: "利用独特的归档预览功能，无需先解压即可像浏览普通文件夹一样直接查看压缩包内的文件。"
        },
        {
          title: "涵盖 30+ 种格式",
          body: "支持 7Z、ZIP、RAR、TAR、GZIP、BZIP2、XZ、ISO、CAB、ARJ、LZIP、VHD 等，轻松应对各类系统包与老旧归档。"
        }
      ],
      showcase: [
        {
          title: "免解压秒速预览内部文件",
          body: "不再需要为了看一张图或一个文档而解压整个巨大压缩包。像浏览普通文件夹一样快速检索与查看内容。"
        },
        {
          title: "安全加密压缩与分卷发送",
          body: "自定义加密算法与密码，严密保护商业机密；支持自由分卷大小，轻松突破企业邮箱与即时通讯附件限制。"
        }
      ],
      whyTitle: "为什么选择 ZipGo",
      whyPoints: [
        "原生深度集成 Finder 右键菜单，随用随走，告别窗口频繁切换",
        "超全格式支持，全面覆盖 30+ 种常见及专业压缩格式",
        "免解压预览文件，极大节省磁盘空间与整理时间",
        "支持密码保护与智能分卷，兼顾数据安全与传输效率"
      ]
    },
    ntfssync: {
      title: "NTFSSync",
      subtitle: "专业的以读写模式挂载 NTFS 磁盘软件，快速稳定读写数据",
      cta: "App Store 免费下载",
      downloadUrl: "https://apps.apple.com/app/ntfssync-ntfs-read-write/id6475194342?mt=12",
      featuresTitle: "主要功能",
      features: [
        {
          title: "NTFS 磁盘读写挂载",
          body: "彻底打破 macOS 默认只读限制，以完整的读写模式挂载 NTFS 驱动器，自由新建、编辑与删除文件。"
        },
        {
          title: "插盘自动读写挂载",
          body: "插入移动硬盘、U 盘或 SD 卡时，自动识别并静默挂载为读写模式，即插即用无需手动操作。"
        },
        {
          title: "磁盘状态与快捷管理",
          body: "直观展示已挂载磁盘列表与存储信息，支持在 Finder 中快速打开磁盘或安全推出设备。"
        },
        {
          title: "NTFS 磁盘修复与抹除",
          body: "内置急救修复功能，快速检测并修复文件系统错误；支持直接在 Mac 上抹除与格式化 NTFS 分区。"
        },
        {
          title: "一键推出所有磁盘",
          body: "多设备同时连接时，支持一键安全弹出所有已挂载磁盘，拔出更安心，防止数据损坏。"
        },
        {
          title: "支持自定义磁盘名称",
          body: "随心设置并修改 NTFS 磁盘卷标名称，设备管理更直观清晰。"
        }
      ],
      showcase: [
        {
          title: "自动读写挂载与原生传输速度",
          body: "告别繁琐的终端命令与驱动安装。插入移动硬盘即刻实现读写挂载，跨平台拷贝大文件极速稳定。"
        },
        {
          title: "全方位磁盘健康修复与分区管理",
          body: "无需切换到 Windows 系统。在 Mac 上即可直接进行磁盘急救修复、抹除格式化与状态监控。"
        }
      ],
      whenNeedTitle: "什么时候需要 NTFSSync？",
      whenNeed: [
        {
          title: "NTFS 外接硬盘在 Mac 上只读",
          desc: "插入朋友或同事的移动硬盘，发现只能查看文件，无法修改或保存内容。"
        },
        {
          title: "无法复制或编辑文件",
          desc: "无法将 Mac 上的资料拖拽拷贝到 NTFS 驱动器中，工作流程受阻。"
        },
        {
          title: "Mac 与 Windows 间跨平台传输",
          desc: "双系统或办公环境中，经常需要在两台电脑之间使用移动硬盘互传大文件。"
        },
        {
          title: "在 Mac 上全面管理 NTFS 存储",
          desc: "需要在 macOS 下对 NTFS 设备进行重命名、格式化抹除或文件系统修复。"
        }
      ],
      whyTitle: "为什么选择 NTFSSync",
      whyPoints: [
        "对所有 NTFS 驱动器提供无缝的读写支持",
        "插盘自动挂载，无需手动频繁配置",
        "极速数据传输性能，充分发挥硬盘吞吐能力",
        "广泛支持外接移动硬盘、SSD、U 盘和 SD 卡",
        "深度兼容 Apple Silicon (M系列芯片) 与 Intel 架构 Mac",
        "经过严苛测试的数据安全保护，绝不损坏原有磁盘数据"
      ]
    },
    contact: {
      title: "联系我们",
      subtitle: "有任何问题或建议？请告诉我们。",
      label: "您的留言",
      placeholder: "请在此输入您的反馈...",
      button: "发送邮件",
      error: "内容不能为空。",
      subject: "Fineusing 反馈"
    },
    privacy: {
      title: "隐私政策",
      updated: "最后更新：2025年4月1日",
      sections: [
        {
          title: "1. 我们收集的信息",
          body:
            "Fineusing致力于保护您的隐私。我们的应用主要作为离线工具运行。我们不会收集您的个人识别信息、文件内容或键盘输入记录。"
        },
        {
          title: "2. 数据使用",
          body: "如果应用崩溃，可能会向我们发送匿名崩溃日志，这有助于我们修复错误。这些日志不包含任何个人敏感信息。"
        },
        {
          title: "3. 第三方服务",
          body: "我们的网站可能包含指向第三方网站的链接。我们不对这些第三方网站的隐私做法负责。"
        },
        {
          title: "4. 联系我们",
          body: "如果您对本隐私政策有任何疑问，请通过\"联系我们\"页面与我们联系。"
        }
      ]
    },
    cleanHelper: {
      metaTitle: "Fineusing: 卸载辅助工具安装指南",
      title: "App 卸载辅助工具说明",
      whyTitle: "为什么需要 Helper 辅助工具？",
      whyDesc:
        "受限于苹果 App Store 的沙盒机制（Sandboxing）安全限制，主应用程序运行在受保护的隔离环境中，无法直接获取系统权限来删除“应用程序”（Applications）文件夹内的应用本体及相关系统残留。",
      howDesc:
        "为了确保能够彻底、完整地卸载选定的应用程序及其关联缓存，我们开发了一个轻量级的后台辅助工具（Helper tool）。该工具专门用于安全响应并执行删除指令，让您的 Mac 系统始终保持干净整洁。",
      downloadBtn: "下载并安装 Helper 辅助工具",
      compat: "兼容 macOS 10.15 及更高版本",
      downloadUrl: "/installer/HotLaunchHelperInstaller.pkg",
      stepsTitle: "安装与使用指南",
      step1Title: "1. 下载安装包",
      step1Desc: "点击上方按钮下载官方签名的 .pkg 安装包文件。",
      step2Title: "2. 双击运行安装",
      step2Desc: "双击打开下载的 .pkg 文件，根据 macOS 安装器提示进行安装。",
      step3Title: "3. 完成并生效",
      step3Desc: "安装完成后，辅助工具将在后台自动协助主应用完成彻底卸载。"
    }
  }
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries[DEFAULT_LOCALE];
}

export function getBasePath(locale: Locale) {
  return locale === DEFAULT_LOCALE ? "" : "/cn";
}

export function getLangHref(locale: Locale, path: string) {
  if (locale === DEFAULT_LOCALE) {
    return `/cn${path}`;
  }
  return path;
}
