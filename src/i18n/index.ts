export const locales = ["en", "cn", "ja"] as const;
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
      apppadSubtitle: "The Ultimate Launchpad Alternative for macOS 26+",
      apppadHeading: "Organize, launch, and deep-clean apps with native Swift speed",
      apppadBody:
        "AppPad restores and supercharges the classic visual Launchpad experience on macOS 26 Tahoe and beyond. Featuring customizable grid densities, full-screen and floating window modes, right-click deep uninstallation, and seamless trackpad pinch gestures.",
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
      ntfssyncSubtitle: "Zero-Kext NTFS Read-Write & Formatter for Mac",
      ntfssyncHeading: "Read, write & format NTFS drives with zero security risks",
      ntfssyncBody:
        "Built on a modern FUSE-T userspace architecture using NFS v4. Plug in external NTFS drives for instant read-write access, or format any USB flash drive or portable hard drive to NTFS directly on your Mac — without disabling SIP or installing risky kernel extensions.",
      ctaTitle: "Start using Fineusing apps today",
      ctaBody:
        "DeviceMirror supports casting your iPhone/iPad screen to your macOS computer for watching movies, playing games, listening to music, and demo presentations on a larger screen.",
      ctaPrimary: "Download",
      ctaSecondary: "Learn more →",
      learnMore: "Learn more"
    },
    apppad: {
      title: "AppPad",
      subtitle: "The definitive macOS 26+ Launchpad alternative. Native Swift speed, custom grid layout, deep uninstaller, and flawless gesture controls.",
      cta: "Free Download",
      downloadUrl: "https://fineusing.com/installer/AppPad-Installer.dmg",
      featuresTitle: "Core Features",
      features: [
        {
          title: "Visual Grid & Multi-Page Layout",
          body: "Display all your Mac applications in clean, paginated grids. Freely customize row and column counts and icon sizes, or toggle between immersive Fullscreen and sleek Windowed modes."
        },
        {
          title: "Intuitive Drag & Drop Organization",
          body: "Drag apps to create and nest folders, adjust sorting order, drag across pages, or drag icons directly from AppPad into your macOS Dock."
        },
        {
          title: "Right-Click Organization & Deep Uninstall",
          body: "Right-click any app to move it to a specific page or group, reveal in Finder, or trigger Deep Uninstall to scan and nuke hidden ~/Library caches, preferences, and leftover files."
        },
        {
          title: "Smart Group Management",
          body: "Right-click any folder to quickly rename, move the entire group to another page, or ungroup to automatically dissolve icons back into the current page."
        },
        {
          title: "Trackpad Pinch, Hotkeys & Hot Corners",
          body: "Trigger AppPad exactly how you like: authentic 4-finger or 5-finger pinch gestures on the trackpad, custom global keyboard shortcuts, or screen Hot Corners."
        },
        {
          title: "Layout Backup & Old Launchpad Restore",
          body: "Never rearrange apps from scratch. Export and import AppPad layout backups, or restore your legacy macOS Launchpad folder structure with a single click."
        },
        {
          title: "Custom App Scan Directories",
          body: "Index apps beyond the default /Applications and /System/Applications folders. Add ~/Applications, Steam libraries, Setapp tools, or custom portable directories."
        },
        {
          title: "Fluid Multi-Input Page Flipping",
          body: "Flip between pages naturally with standard mouse scroll wheels, fluid two-finger trackpad swipes, or mouse click-and-drag gestures."
        },
        {
          title: "Instant Precision Search",
          body: "Start typing anywhere to filter apps in real time. Combine visual spatial layout with fast fuzzy matching to launch any app in milliseconds."
        }
      ],
      showcase: [
        {
          title: "Total Layout Freedom & Windowed Mode",
          body: "Break free from fixed 5×7 grids with giant wasted borders. Tailor your grid density, scale icons to your liking, and choose between full-screen and floating window layouts."
        },
        {
          title: "Right-Click Deep Clean & App Management",
          body: "Move apps across pages without clumsy dragging. When you're done with an app, use Deep Uninstall to wipe application support files, logs, and caches in seconds."
        }
      ]
    },
    devicemirror: {
      title: "DeviceMirror",
      subtitle: "Mirror your iPhone/iPad screen to your macOS computer",
      cta: "Free Download",
      downloadUrl: "https://apps.apple.com/app/id1598771178",
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
      downloadUrl: "https://apps.apple.com/app/id6806805796",
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
      downloadUrl: "https://apps.apple.com/app/id6799313183",
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
      subtitle: "Userspace NTFS read-write driver & direct formatter for macOS. No kernel extensions, no security compromises.",
      cta: "Download on Mac App Store",
      downloadUrl: "https://apps.apple.com/app/id6475194342",
      featuresTitle: "Core Features",
      features: [
        {
          title: "100% Userspace (Zero Kernel Extensions)",
          body: "Powered by modern FUSE-T over local NFS v4 protocol. Runs completely in userspace without requiring third-party kexts, keeping System Integrity Protection (SIP) untouched and eliminating kernel panics."
        },
        {
          title: "Format Any External Drive to NTFS on Mac",
          body: "Bypass macOS Disk Utility limitations. Easily erase and format non-NTFS external USB thumb drives, SSDs, and mechanical hard drives directly into clean, standard NTFS format."
        },
        {
          title: "Auto-Mount on Plug-in",
          body: "Plug in your external drive and start working right away. Partitions mount automatically with full read and write access without running manual terminal commands."
        },
        {
          title: "Fast, Native Transfer Speeds",
          body: "Optimized for both Apple Silicon (M1–M4) and Intel Macs. Copies large 4K video clips, virtual disk images, and massive project archives at native hardware speeds."
        },
        {
          title: "NTFS First Aid & Repair",
          body: "Diagnose volume health and fix dirty bit errors caused by unsafe disconnections on Windows PCs, restoring write access without wiping your data."
        },
        {
          title: "One-Click Batch Eject",
          body: "Safely unmount all connected external disks with a single menu bar click to protect filesystem headers before pulling cables."
        }
      ],
      showcase: [
        {
          title: "Auto-Mount & Direct NTFS Formatting",
          body: "No Windows machine nearby? Plug in your drive, format it to NTFS in seconds, and start transferring large files across platforms without hitting FAT32's 4GB ceiling."
        },
        {
          title: "Zero Security Degradation (SIP Untouched)",
          body: "Forget holding the power button to boot into Recovery Mode or lowering security policies. NTFSSync runs entirely in userspace, making it fully safe for personal setups and corporate MDM devices."
        }
      ],
      whenNeedTitle: "When Do You Need NTFSSync?",
      whenNeed: [
        {
          title: "NTFS Drives Are Read-Only on Mac",
          desc: "You plug in a colleague's or client's Windows drive, but Finder blocks dragging, editing, or saving files onto it."
        },
        {
          title: "Need to Format a USB Drive to NTFS",
          desc: "macOS Disk Utility cannot create NTFS partitions. You need a Windows-ready drive without hunting for a PC."
        },
        {
          title: "Unwilling to Downgrade M-Series Security",
          desc: "Tired of older drivers forcing you into Recovery Mode to enable reduced security just to read an external disk."
        },
        {
          title: "Company Mac Blocked by IT Policies",
          desc: "Corporate MDM profiles strictly prohibit installing kernel extensions, rendering legacy NTFS tools unusable."
        }
      ],
      whyTitle: "Why Choose NTFSSync?",
      whyPoints: [
        "Zero kernel extensions: 100% userspace execution powered by FUSE-T and NFS v4",
        "Keeps Apple Silicon security policies fully intact — no Recovery Mode or SIP disabling",
        "Full read-write access plus direct NTFS formatting for non-NTFS external drives",
        "Automatic plug-and-play mounting at full hardware bus speeds",
        "Built-in filesystem first aid and safe batch ejection from the menu bar",
        "Process-level isolation prevents crashes or kernel panics from freezing macOS"
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
      apppadSubtitle: "macOS 26 及以上系统原生级启动台替代品",
      apppadHeading: "原生极速启动、自由网格布局与深度卸载清理",
      apppadBody:
        "AppPad 完美找回并大幅超越经典启动台体验。基于 Swift 原生开发，支持自定义网格行列与窗口/全屏双模式，提供四指/五指触控板捏合唤出、右键深度卸载残留缓存、老启动台布局一键无损还原，以及直接拖拽图标到 Dock 栏。",
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
      ntfssyncSubtitle: "免内核扩展的 macOS 原生级 NTFS 读写与格式化利器",
      ntfssyncHeading: "轻松读写、格式化 NTFS 移动硬盘，零系统安全风险",
      ntfssyncBody:
        "底层采用 FUSE-T 通过 NFS v4 协议在用户空间实现。插入 NTFS 移动硬盘秒级自动挂载读写，更支持将外置 U 盘/硬盘直接格式化为 NTFS。无需进入恢复模式降级安全，彻底告别内核扩展崩溃隐患。",
      ctaTitle: "立即体验 Fineusing 应用",
      ctaBody: "DeviceMirror支持将您的iPhone/iPad屏幕投射到macOS电脑，在大屏幕上观看电影、玩游戏、听音乐和演示展示。",
      ctaPrimary: "立即下载",
      ctaSecondary: "了解更多 →",
      learnMore: "了解更多"
    },
    apppad: {
      title: "AppPad",
      subtitle: "专为 macOS 26 及更高版本打造的原生级启动台利器。毫秒级极速响应，自由网格布局，右键深度卸载，手势肌肉记忆无缝衔接。",
      cta: "免费下载",
      downloadUrl: "https://fineusing.com/installer/AppPad-Installer.dmg",
      featuresTitle: "核心功能亮点",
      features: [
        {
          title: "视觉网格与分页浏览",
          body: "清晰分页呈现 Mac 上的所有应用程序。自由定义网格行数与列数、调节图标大小，支持全屏沉浸与小窗口悬浮双显示模式。"
        },
        {
          title: "自由拖拽排序与建组",
          body: "像使用手机一样自然。拖拽 App 合并创建分组文件夹、随心调整排列顺序、跨页拖动收纳，更支持直接将 App 拖拽添加至系统 Dock 栏。"
        },
        {
          title: "App 右键快捷整理与深度卸载",
          body: "右键单个 App 即可快速“移动到分组”、“移动到指定页”或在 Finder 中定位；内置深度卸载功能，全盘深层扫描关联的 ~/Library 缓存与残留配置文件并彻底清除。"
        },
        {
          title: "分组右键快捷管理",
          body: "右键分组文件夹支持一键重命名、快速将整个分组迁移到其他页面，或一键“取消分组”自动解散还原图标至当前页面。"
        },
        {
          title: "四指/五指捏合手势、快捷键与触发角",
          body: "肌肉记忆无需改变。完美还原触控板四指或五指捏合手势呼出启动台，更支持自定义全局快捷键与屏幕四个触发角即时唤起。"
        },
        {
          title: "布局数据备份与老启动台还原",
          body: "换机或升级不用重新排图标。支持导出与导入 AppPad 布局备份文件，更能一键读取并精准还原老系统原生启动台的原有分组与排列。"
        },
        {
          title: "自定义 App 数据扫描目录",
          body: "突破限制，不仅默认扫描 /Applications 与 /System/Applications，还能自由添加个人目录（~/Applications）、Steam 游戏库、Setapp 等额外软件来源。"
        },
        {
          title: "多维丝滑翻页交互",
          body: "为各种输入设备量身打造。支持普通鼠标滚轮平滑滚页、苹果触控板双指滑动切页，以及鼠标按住空白处拖拽翻页。"
        },
        {
          title: "快速精准即时搜索",
          body: "无需点击搜索框，呼出后直接敲击键盘即可实时过滤筛选软件，结合视觉网格定位与模糊拼写匹配，毫秒级快速打开应用。"
        }
      ],
      showcase: [
        {
          title: "网格自由定制与全屏/窗口双形态",
          body: "告别大屏幕上粗暴浪费黑边的固定布局。按需自定义 6×8、7×10 等高密网格，在超宽带鱼屏上更可切换为精致小窗口模式，随光标呼之即来。"
        },
        {
          title: "右键深度卸载清理与多维文件联动",
          body: "不再需要单独购买商业清理软件。右键 App 即可一键透视所有残留缓存文件并干净抹除，还能随手拖拽 App 固化到 Dock 栏，效率成倍提升。"
        }
      ]
    },
    devicemirror: {
      title: "DeviceMirror",
      subtitle: "将iPhone/iPad屏幕镜像到macOS电脑",
      cta: "免费下载",
      downloadUrl: "https://apps.apple.com/app/id1598771178",
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
      downloadUrl: "https://apps.apple.com/app/id6806805796",
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
      downloadUrl: "https://apps.apple.com/app/id6799313183",
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
      subtitle: "纯用户态架构的专业 macOS NTFS 读写与格式化工具，免内核扩展，安全不降级",
      cta: "App Store 免费下载",
      downloadUrl: "https://apps.apple.com/app/id6475194342",
      featuresTitle: "主要功能",
      features: [
        {
          title: "纯用户态架构（免内核扩展）",
          body: "底层采用 FUSE-T 通过本地 NFS v4 协议在用户空间实现。无需安装老旧内核扩展（kext），无需降低系统安全性，从根源杜绝五国蓝屏死锁（Kernel Panic）。"
        },
        {
          title: "在 Mac 上直接格式化为 NTFS",
          body: "突破 macOS 自带“磁盘工具”无法格式化 NTFS 的限制。随时把外置 U 盘、移动硬盘或固态 SSD 抹除并格式化为标准 NTFS 分区，无缝兼容 Windows。"
        },
        {
          title: "插盘即用，自动读写挂载",
          body: "插上移动硬盘或 U 盘，系统静默识别并自动以完全读写模式挂载。拖拽拷贝、重命名、直接编辑保存文件，体验与原生 Mac 磁盘毫无二致。"
        },
        {
          title: "原生级文件传输吞吐",
          body: "深度优化 Apple Silicon（M1~M4）与 Intel 架构。拷贝数十 GB 的 4K 视频原片、虚拟机镜像或工程归档，跑满外接硬盘物理读写上限。"
        },
        {
          title: "NTFS 磁盘急救与修复",
          body: "内置磁盘修复工具。在 Mac 上直接检测并修复因 Windows 快速启动或意外拔盘导致的“脏标记（Dirty Bit）”，快速恢复可写状态。"
        },
        {
          title: "菜单栏一键安全推出",
          body: "连接多个外接存储设备时，可通过菜单栏一键安全推出全部磁盘，防止拔掉数据线造成文件头损坏或未写入缓存丢失。"
        }
      ],
      showcase: [
        {
          title: "自动读写挂载与直接格式化 NTFS",
          body: "手头没有 Windows 电脑？插上 U 盘或移动硬盘，直接在 Mac 上抹成标准 NTFS 格式，即插即写，跨平台传输大文件告别 FAT32 4GB 限制。"
        },
        {
          title: "无需进恢复模式，系统安全零妥协",
          body: "不用关机长按开机键去改“降低安全性”，完全保留苹果原生系统完整性保护（SIP）。个人主力机省心安全，企业受管（MDM）Mac 也能合规即装即用。"
        }
      ],
      whenNeedTitle: "什么时候需要 NTFSSync？",
      whenNeed: [
        {
          title: "Windows 移动硬盘在 Mac 上只读",
          desc: "插上同事或客户的 NTFS 移动硬盘，文件只能看不能改，往里拖文件直接弹禁止符号。"
        },
        {
          title: "需要在 Mac 上把 U 盘格式化为 NTFS",
          desc: "Mac 自带磁盘工具抹掉列表里根本没有 NTFS 选项，无法为 Windows 环境准备现成硬盘。"
        },
        {
          title: "不想改安全策略降低 Apple Silicon 防御",
          desc: "厌倦了老牌软件要求进 Recovery 模式放行第三方内核扩展的繁琐流程和潜在崩溃风险。"
        },
        {
          title: "企业受管电脑无法安装内核驱动",
          desc: "公司 IT 部门开启了 MDM 策略，严格限制安装 kext 驱动，常规 NTFS 工具全部被拦截报错。"
        }
      ],
      whyTitle: "为什么选择 NTFSSync",
      whyPoints: [
        "零内核扩展：基于 FUSE-T + NFS v4 纯用户空间运行，架构现代纯净",
        "完美适配 Apple Silicon（M1~M4）与最新 macOS，无需进恢复模式降低安全性",
        "完整读写支持，兼具将非 NTFS 盘一键直接格式化为 NTFS 的能力",
        "即插即用自动挂载，文件传输跑满磁盘硬件物理带宽",
        "内置 NTFS 磁盘健康检查与急救修复，告别数据损坏与只读锁死",
        "用户态进程隔离，彻底杜绝因文件系统异常导致整个 macOS 死锁或崩溃"
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
  },
  ja: {
  "langTag": "ja-JP",
  "nav": {
    "home": "ホーム",
    "products": "製品一覧",
    "blog": "ブログ",
    "contact": "お問い合わせ",
    "privacy": "プライバシーポリシー",
    "apppadTag": "macOS 26 対応 Launchpad 代替アプリ",
    "devicemirrorTag": "iPhone 画面を Mac に高画質ミラーリング",
    "rightlyTag": "Finder 右クリック拡張ツール",
    "zipgoTag": "Finder 右クリック解凍・圧縮ツール",
    "ntfssyncTag": "Mac 用 NTFS 読み書き＆フォーマット",
    "lang": "日本語"
  },
  "footer": {
    "slogan": "macOS のために丹精込めて設計されたツール",
    "contact": "お問い合わせ",
    "privacy": "プライバシーポリシー",
    "rights": "All Rights Reserved"
  },
  "home": {
    "title": "Mac ユーザーのための究極の生産性ツール",
    "subtitle": "作業効率の劇的な向上と、洗練されたネイティブな操作体験を追求",
    "apppadTitle": "AppPad",
    "apppadSubtitle": "macOS 26+ 向け次世代 Launchpad 代替アプリ",
    "apppadHeading": "ネイティブ Swift の爆速レスポンスでアプリを整理・起動・完全アンインストール",
    "apppadBody": "AppPad は、macOS 26 以降でクラシックな視覚的 Launchpad 体験を復元し、大幅に進化させます。自由なグリッド行・列とアイコンサイズ設定、フルスクリーン／ウィンドウの 2 つの表示モード、右クリックからの関連ファイル完全アンインストール、直感的なトラックパッドのピンチ操作に対応。",
    "devicemirrorTitle": "DeviceMirror",
    "devicemirrorSubtitle": "iPhone の画面を Mac に超低遅延ミラーリング",
    "devicemirrorHeading": "大画面でゲーム・動画・プレゼンをゼロ遅延で共有",
    "devicemirrorBody": "DeviceMirror は、iPhone や iPad の画面を Mac にワイヤレス（AirPlay）および USB 有線接続で瞬時にミラーリングします。動画視聴、スマホゲームのプレイ、音楽鑑賞、プレゼンテーションを Mac の大画面で快適に楽しめます。",
    "rightlyTitle": "Rightly",
    "rightlySubtitle": "Mac の Finder を強化する右クリック拡張ツール",
    "rightlyHeading": "日常の頻出操作をすべて右クリックメニューへ集約",
    "rightlyBody": "Rightly は macOS の Finder 右クリックメニューを進化させます。新規ファイル作成（Excel、Word、PowerPoint、テキスト、JSON など）、30 種類以上のアーカイブ解凍・圧縮、よく使うフォルダやアプリへのクイックアクセス、パスのコピーなど、必須の作業を右クリックひとつで完結させます。",
    "zipgoTitle": "ZipGo",
    "zipgoSubtitle": "Finder 右クリックで完結する高機能アーカイブツール",
    "zipgoHeading": "右クリックから直接解凍・圧縮・中身のプレビュー",
    "zipgoBody": "ZipGo は macOS の Finder 右クリックメニューに深く統合。Shift-JIS の文字化けを自動解消し、ZIP / 7Z / TAR.GZ への暗号化圧縮、30 種類以上のフォーマット解凍、解凍不要のアーカイブ内プレビューに対応。Windows への送信時に「__MACOSX」や「.DS_Store」を自動で除外します。",
    "ntfssyncTitle": "NTFSSync",
    "ntfssyncSubtitle": "カーネル拡張不要の Mac 用 NTFS 読み書き＆フォーマットツール",
    "ntfssyncHeading": "セキュリティを損なうことなく、NTFS ドライブを自由自在に読み書き・初期化",
    "ntfssyncBody": "NFS v4 プロトコルを採用した現代的な FUSE-T ユーザー空間アーキテクチャを採用。外付けの NTFS ハードディスクや USB メモリを接続するだけで即座に読み書きでき、Mac 上で直接 NTFS 形式へのフォーマットも可能。SIP（システム整合性保護）の無効化や危険なカーネル拡張の導入は一切不要です。",
    "ctaTitle": "今すぐ Fineusing の Mac アプリを体験",
    "ctaBody": "洗練されたデザインと快適な操作性で、日々の Mac での作業効率を次の次元へ引き上げましょう。",
    "ctaPrimary": "無料ダウンロード",
    "ctaSecondary": "詳細を見る →",
    "learnMore": "詳細を見る"
  },
  "apppad": {
    "title": "AppPad",
    "subtitle": "macOS 26+ 向けの決定版 Launchpad 代替ツール。ネイティブ Swift の爆速動作、自由なグリッド配置、完全アンインストーラー、直感的なトラックパッドジェスチャー。",
    "cta": "無料ダウンロード",
    "downloadUrl": "https://fineusing.com/installer/AppPad-Installer.dmg",
    "featuresTitle": "主な機能",
    "features": [
      {
        "title": "グリッドレイアウト＆マルチページ表示",
        "body": "すべてのアプリを清潔で整理されたグリッドページで一覧表示。行数・列数やアイコンサイズを自由にカスタマイズ可能。没入感のあるフルスクリーンと快適なウィンドウモードを瞬時に切り替えられます。"
      },
      {
        "title": "直感的なドラッグ＆ドロップ整理",
        "body": "アプリ同士を重ねてグループフォルダを作成、表示順の並べ替え、ページ間の移動、さらに AppPad から直接 Dock へのアイコン追加にも対応しています。"
      },
      {
        "title": "右クリック管理＆完全アンインストール",
        "body": "アプリアイコンを右クリックして、指定ページやグループへの移動、Finder での表示、または「完全アンインストール」を実行。~/Library 以下の残骸キャッシュや設定ファイルを徹底スキャンして一掃します。"
      },
      {
        "title": "スマートなグループフォルダ管理",
        "body": "グループフォルダを右クリックして、素早く名称変更、別ページへの一括移動、またはグループ解除（元のページへアイコンを自動展開）が行えます。"
      },
      {
        "title": "トラックパッドのピンチ操作・ショートカット・ホットコーナー",
        "body": "お好みの操作で AppPad を即座に起動：トラックパッドでの 4 本指または 5 本指ピンチ、グローバルショートカットキー、画面の四隅を使ったホットコーナーに対応。"
      },
      {
        "title": "レイアウトのバックアップ＆旧 Launchpad からの復元",
        "body": "アプリの配置をイチからやり直す必要はありません。AppPad のレイアウトデータをエクスポート／インポートできるほか、従来の macOS Launchpad のフォルダ構造をワンクリックで復元できます。"
      },
      {
        "title": "カスタムアプリスキャンディレクトリ",
        "body": "デフォルトの /Applications や /System/Applications だけでなく、~/Applications、Steam ライブラリ、Setapp、Homebrew Cask などの独自フォルダもスキャン対象に追加可能です。"
      },
      {
        "title": "スムーズなマルチ入力ページめくり",
        "body": "マウスのスクロールホイール、トラックパッドの 2 本指スワイプ、またはマウスクリック＆ドラッグによる滑らかなページ切り替えに対応しています。"
      },
      {
        "title": "ミリ秒級のインクリメンタル曖昧検索",
        "body": "AppPad 起動後、キーボードを叩くだけで即座にインクリメンタル検索を開始。アプリ名やローマ字入力で目的のアプリを瞬時に見つけて Enter で起動できます。"
      }
    ],
    "showcase": [
      {
        "title": "アプリを右クリックして関連残骸ファイルを完全削除",
        "body": "本体ファイルをゴミ箱に入れただけでは消えない ~/Library/Application Support、Caches、Preferences 内のキャッシュや設定残骸を自動検出し、ディスク容量を安全に解放します。"
      },
      {
        "title": "旧 Launchpad のレイアウトを一撃で復元",
        "body": "macOS の SQLite データベースを読み込み、元のグループ分けやアイコン配置をそのまま自動インポート。長年慣れ親しんだレイアウトを瞬時に再現できます。"
      }
    ]
  },
  "devicemirror": {
    "title": "DeviceMirror",
    "subtitle": "iPhone や iPad の画面を Mac に超低遅延でミラーリング。大画面での動画視聴、ゲームプレイ、プレゼンテーション、システム音声付きの高画質録画に対応。",
    "cta": "Mac App Store でダウンロード",
    "downloadUrl": "https://apps.apple.com/app/id1598771178",
    "featuresTitle": "主な機能",
    "features": [
      {
        "title": "ワイヤレス（AirPlay）画面ミラーリング",
        "body": "同じ Wi-Fi ネットワーク内であれば、AirPlay を使ってワンクリックで iPhone/iPad の画面を Mac にワイヤレス投影できます。"
      },
      {
        "title": "USB 有線による超低遅延接続",
        "body": "Lightning または USB-C ケーブルで Mac と接続することで、電波干渉のない極限の低遅延と安定した高画質ミラーリングを実現します。"
      },
      {
        "title": "端末画面の高画質録画",
        "body": "ミラーリング中に、iPhone の画面と音声をワンクリックで高品質な MP4 ビデオファイルとして Mac 上に直接録画・保存できます。"
      },
      {
        "title": "Mac システム音声の録音対応",
        "body": "追加の仮想オーディオドライバをインストールすることなく、Mac で再生されているサウンドを MP3 ファイルとして手軽に録音できます。"
      }
    ],
    "showcase": [
      {
        "title": "迫力の大画面でゲームや動画を満喫",
        "body": "iPhone/iPad のお気に入りの動画やスマホゲームを Mac の美しいディスプレイに瞬時に投影し、圧倒的な臨場感を楽しめます。"
      },
      {
        "title": "iPhone/iPad 画面をワンタッチで録画",
        "body": "ゲームの神プレイやアプリの操作デモ、プレゼンテーションの様子を、劣化のないクリアな画質と音声で簡単にキャプチャできます。"
      }
    ]
  },
  "rightly": {
    "title": "Rightly",
    "subtitle": "日常の頻出操作を Finder の右クリックメニューへ集約。Mac のファイル管理を究極に効率化する右クリック拡張ツール",
    "cta": "Mac App Store でダウンロード",
    "downloadUrl": "https://apps.apple.com/app/id6806805796",
    "featuresTitle": "主な機能",
    "features": [
      {
        "title": "瞬時に新規ファイル作成",
        "body": "右クリックから直接新規ファイルを作成：Excel（.xlsx）、Word（.docx）、PowerPoint（.pptx）、テキスト（.txt）、Markdown（.md）、JSON、XML などに対応。自作の業務テンプレート追加も自由自在です。"
      },
      {
        "title": "30種類以上の解凍・圧縮に対応",
        "body": "7Z, ZIP, RAR, TAR, GZIP, BZIP2, XZ, ISO などの解凍と圧縮を手軽に実行。メール送信用の分割圧縮や暗号化保護も右クリックから直接行えます。"
      },
      {
        "title": "よく使うフォルダ＆アプリへクイックアクセス",
        "body": "プロジェクトディレクトリ、ダウンロード、素材フォルダや常用アプリを右クリックメニューにピン留め。深い階層のフォルダ移動をなくし、迷わず一発アクセス。"
      },
      {
        "title": "必須の Finder 拡張ユーティリティ群",
        "body": "POSIX 絶対パスのコピー、ファイル名コピー、隠しファイル（.env / .gitignore）の表示切替、現在パスでターミナル／VS Code を開くなど、作業を劇的に高速化するツールを凝縮。"
      }
    ],
    "showcase": [
      {
        "title": "ワンクリックで新規ファイル＆定型テンプレートを作成",
        "body": "空のドキュメントを作るためだけに重い Office アプリを立ち上げる必要はもうありません。10種類以上の標準プリセットに加え、社内規定書やコード雛形などのカスタムテンプレートも登録可能です。"
      },
      {
        "title": "軍用レベルの暗号化とメール向け分割圧縮",
        "body": "機密性の高いビジネス文書を強固なパスワードで保護し、大容量ファイルをメール添付のサイズ制限に合わせて自動で分割圧縮します。"
      }
    ],
    "audienceTitle": "あらゆるワークフローにフィット",
    "audience": [
      {
        "role": "開発者・エンジニア",
        "desc": "JSON/XML/plist を秒速で新規作成、ファイルパスのコピー、現在フォルダでターミナルや VS Code をワンクリック起動。"
      },
      {
        "role": "ビジネス・オフィス",
        "desc": "Excel/Word/PowerPoint を右クリックから即座に作成。機密シートの暗号化やメール添付用圧縮もスムーズに完結。"
      },
      {
        "role": "デザイナー・クリエイター",
        "desc": "頻繁に使う素材ライブラリへ即座にジャンプ。無駄なウィンドウ切り替えをなくし、Finder を常に整理整頓。"
      },
      {
        "role": "Windows からの乗り換えユーザー",
        "desc": "Windows の「右クリック → 新規作成」の操作感を Mac でも完全再現。直感的で迷わない操作環境を提供。"
      }
    ],
    "whyTitle": "なぜ Rightly を選ぶのか？",
    "whyPoints": [
      "macOS ネイティブの Finder 右クリック体験、いつでも必要な瞬間に即座に呼び出し可能",
      "アプリの起動待ちや複数ウィンドウの往復を大幅に削減",
      "チームや業務に合わせたカスタムテンプレート作成とショートカットの登録に対応",
      "新規作成、パス取得、ターミナル起動、解凍・圧縮までをひとつのメニューで完結"
    ]
  },
  "zipgo": {
    "title": "ZipGo",
    "subtitle": "Finder 右クリックで完結する高機能アーカイブツール：30種以上の形式に対応、解凍・圧縮・中身のプレビューを瞬時に実行",
    "cta": "Mac App Store でダウンロード",
    "downloadUrl": "https://apps.apple.com/app/id6799313183",
    "featuresTitle": "主な特長",
    "features": [
      {
        "title": "右クリックでスマートに解凍",
        "body": "現在のフォルダまたは独立したサブフォルダへ、1クリックで解凍。Finder が散らかるのを防ぎ、ファイルを美しく整理します。"
      },
      {
        "title": "右クリックで高速圧縮",
        "body": "ZIP、7Z、TAR.GZ へ瞬時に圧縮。圧縮レベルの調整、暗号化パスワード、メール添付サイズに合わせた分割圧縮にも柔軟に対応。"
      },
      {
        "title": "解凍不要のアーカイブ内プレビュー",
        "body": "巨大な圧縮ファイルをわざわざ展開することなく、通常のフォルダのように内部構造を即座に確認。必要なファイルだけを個別にドラッグ＆ドロップで抽出できます。"
      },
      {
        "title": "30種類以上の形式をフルサポート",
        "body": "7Z, ZIP, RAR (RAR5対応), TAR, GZIP, BZIP2, XZ, ISO, CAB, ARJ, LZIP, VHD, Linux パッケージなど、あらゆるアーカイブをスムーズに処理します。"
      }
    ],
    "showcase": [
      {
        "title": "解凍せずにアーカイブ内を即座にプレビュー＆個別抽出",
        "body": "内部のドキュメント、画像、階層フォルダを一瞬でブラウズ。たった1つのファイルを確認・取り出すためだけに、数十GBのディスク容量や解凍時間を無駄にすることはありません。"
      },
      {
        "title": "AES-256 暗号化保護とスマートな分割圧縮",
        "body": "強固なパスワード暗号化でビジネス機密やプライベートなデータを堅牢に保護。さらに、メール添付の容量上限に合わせて指定サイズ（25MBなど）で自動分割圧縮が可能です。"
      }
    ],
    "whyTitle": "なぜ ZipGo を選ぶのか？",
    "whyPoints": [
      "macOS ネイティブの Finder 右クリック統合 — 余計なウィンドウを開かず、その場で瞬時に実行",
      "30 種類以上の多彩なアーカイブ形式に対応（最新の RAR5 や Linux パッケージも網羅）",
      "解凍不要のプレビューと個別ファイル抽出により、SSD の空き容量と作業時間を大幅に節約",
      "Windows ユーザーとのやり取りで発生する「文字化け（Shift-JIS）」や「__MACOSX」の混入を自動で防止"
    ]
  },
  "ntfssync": {
    "title": "NTFSSync",
    "subtitle": "カーネル拡張不要の Mac 用 NTFS 読み書き＆ダイレクトフォーマットツール。Mac のセキュリティを一切犠牲にせず、快適な NTFS ドライブ操作を実現。",
    "cta": "Mac App Store でダウンロード",
    "downloadUrl": "https://apps.apple.com/app/id6475194342",
    "featuresTitle": "主な特長",
    "features": [
      {
        "title": "100% ユーザー空間動作（カーネル拡張機能 kext ゼロ）",
        "body": "ローカル NFS v4 プロトコルを用いた最新の FUSE-T ユーザー空間アーキテクチャを採用。サードパーティ製 kext を一切使用しないため、システム整合性保護（SIP）を無効化する必要がなく、カーネルパニックのリスクもゼロです。"
      },
      {
        "title": "Mac 上で外付けドライブを直接 NTFS にフォーマット",
        "body": "macOS 標準のディスクユーティリティの制限を突破。外付けの USB メモリ、ポータブル SSD、外付けハードディスクを Mac から直接クリーンな標準 NTFS 形式に初期化できます。"
      },
      {
        "title": "接続するだけで自動マウント（プラグ＆プレイ）",
        "body": "外付けドライブを Mac に接続するだけで即座に作業開始。ターミナルコマンドや手動操作をすることなく、全自動で読み書き両用モードとしてマウントされます。"
      },
      {
        "title": "ハードウェア性能を引き出すネイティブ転送速度",
        "body": "Apple Silicon（M1〜M4）および Intel Mac の両方に完全最適化。大容量の 4K 映像データ、仮想マシンイメージ、膨大なプロジェクトファイルも高速かつ安定してコピー可能です。"
      },
      {
        "title": "NTFS ドライブの診断・修復（ファーストエイド）",
        "body": "Windows PC 上で不意に取り外されたドライブの「ダーティビット（Dirty Bit）」エラーを自動検出し、データを消去することなく安全に書き込み権限を復旧します。"
      },
      {
        "title": "メニューバーから全ドライブを安全に一括取り出し",
        "body": "ケーブルを抜く前に、接続されているすべての外部ドライブをメニューバーからワンクリックで安全に取り出し。ファイルシステムの破損を未然に防ぎます。"
      }
    ],
    "showcase": [
      {
        "title": "自動マウントと Mac 上での直接 NTFS フォーマット",
        "body": "周囲に Windows PC がなくても問題ありません。Mac にドライブを接続し、数秒で NTFS 形式に初期化して、FAT32 の 4GB 上限を気にせず大容量データをやり取りできます。"
      },
      {
        "title": "セキュリティレベルの低下ゼロ（SIP をそのまま維持）",
        "body": "電源ボタンを長押しして Recovery モードに入ったり、セキュリティポリシーを「低セキュリティ」に変更したりする必要は一切ありません。個人の Mac はもちろん、企業管理（MDM）端末でも安心して導入可能です。"
      }
    ],
    "whenNeedTitle": "こんなお悩みはありませんか？",
    "whenNeed": [
      {
        "title": "Mac で NTFS ドライブが「読み取り専用」になってしまう",
        "desc": "Windows を使う同僚やクライアントから受け取った外付けハードディスクに、Mac からファイルを保存したり編集したりできない。"
      },
      {
        "title": "USB メモリを NTFS 形式にフォーマットしたい",
        "desc": "Mac のディスクユーティリティでは NTFS が選択できないが、Windows 環境で確実に使えるドライブを急ぎで準備したい。"
      },
      {
        "title": "Apple Silicon のセキュリティ設定を下げたくない",
        "desc": "外付けディスクを読み書きするためだけに、Mac をリカバリーモードで起動してセキュリティポリシーを下げるのが不安・抵抗がある。"
      },
      {
        "title": "会社の Mac でカーネル拡張の導入が禁止されている",
        "desc": "企業の IT 管理（MDM プロファイル）によってサードパーティ製 kext のインストールが厳しく制限されており、従来の NTFS ソフトが動かない。"
      }
    ],
    "whyTitle": "なぜ NTFSSync を選ぶのか？",
    "whyPoints": [
      "カーネル拡張機能（kext）ゼロ：FUSE-T と NFS v4 による 100% ユーザー空間での安全動作",
      "Apple Silicon の高度なセキュリティ設定（SIP）を完全に維持 — リカバリーモード不要",
      "読み書き両対応に加え、外付けドライブの NTFS 直接フォーマット機能を標準搭載",
      "ドライブを挿すだけで即座に認識・マウントする完全自動プラグ＆プレイ",
      "メニューバーからの安全な一括取り出しとファイルシステム修復機能を統合",
      "プロセスレベルの完全分離により、万一のエラー時にもカーネルパニック（Mac のフリーズ・再起動）を根絶"
    ]
  },
  "contact": {
    "title": "お問い合わせ",
    "subtitle": "ご質問、不具合の報告、機能のご要望などがございましたら、お気軽にお知らせください。",
    "label": "お問い合わせ内容",
    "placeholder": "フィードバックやご質問内容をここに入力してください...",
    "button": "メールを送信",
    "error": "入力内容が空です。メッセージを入力してください。",
    "subject": "Fineusing フィードバック"
  },
  "privacy": {
    "title": "プライバシーポリシー",
    "updated": "最終更新日: 2025年4月1日",
    "sections": [
      {
        "title": "1. 収集する情報について",
        "body": "Fineusing はユーザーのプライバシー保護を最重要事項と考えています。当社のアプリケーションは基本的にオフラインツールとして動作し、個人を特定できる情報、ファイルの内容、キーボードの入力履歴などを収集することはありません。"
      },
      {
        "title": "2. データの利用目的",
        "body": "アプリケーションで予期せぬクラッシュが発生した場合、不具合の修正と品質向上のために匿名のクラッシュログが送信されることがあります。これらのログに個人を特定できる情報は一切含まれません。"
      },
      {
        "title": "3. 外部サービスへのリンク",
        "body": "当社のウェブサイトには、外部サイトへのリンクが含まれている場合があります。外部サイトにおける個人情報の取り扱いについては、それぞれのサイトのプライバシーポリシーをご確認ください。"
      },
      {
        "title": "4. お問い合わせ窓口",
        "body": "本プライバシーポリシーに関してご質問やご懸念がある場合は、「お問い合わせ」ページよりご連絡ください。"
      }
    ]
  },
  "cleanHelper": {
    "metaTitle": "Fineusing: アンインストール補助ツールのインストール手順",
    "title": "アプリ完全削除用ヘルパーツールについて",
    "whyTitle": "なぜヘルパーツールが必要なのか？",
    "whyDesc": "Apple の Mac App Store によるサンドボックス（Sandboxing）保護機構の制限により、メインアプリは隔離された安全な環境で実行されています。そのため、アプリケーション本体（/Applications）やシステムキャッシュを直接削除するための特権を直接取得することができません。",
    "howDesc": "選択したアプリケーションおよび関連キャッシュを完全に消去できるよう、安全な軽量バックグラウンド補助ツール（Helper tool）をご用意しています。このツールは削除リクエストを安全に実行し、Mac を常にクリーンな状態に保ちます。",
    "downloadBtn": "ヘルパーツールをダウンロードしてインストール",
    "compat": "macOS 10.15 以降に対応",
    "downloadUrl": "/installer/HotLaunchHelperInstaller.pkg",
    "stepsTitle": "インストールと使用手順",
    "step1Title": "1. インストーラーをダウンロード",
    "step1Desc": "上のボタンをクリックして、Apple 公式署名済みの .pkg インストーラーをダウンロードします。",
    "step2Title": "2. ダブルクリックしてインストール",
    "step2Desc": "ダウンロードした .pkg ファイルを開き、インストーラーの指示に従ってインストールを進めます。",
    "step3Title": "3. 完了・即時有効化",
    "step3Desc": "インストール完了後、バックグラウンドで安全に完全削除処理が連携動作するようになります。"
  }
}
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries[DEFAULT_LOCALE];
}

export function getBasePath(locale: Locale) {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

export function getLocalizedPath(targetLocale: Locale, path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (targetLocale === DEFAULT_LOCALE) {
    return cleanPath;
  }
  return `/${targetLocale}${cleanPath}`;
}

export function getLangHref(locale: Locale, path: string) {
  if (locale === DEFAULT_LOCALE) {
    return `/cn${path}`;
  }
  return path;
}
