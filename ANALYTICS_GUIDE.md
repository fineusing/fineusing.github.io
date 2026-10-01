# Fineusing Google Analytics (GA4) 埋点与数据跟踪指南

本项目已全面集成 Google Analytics 4（GA4），用于全方位追踪网站访问量（PV / Pageview）、用户来源与各产品核心按钮（下载转化、了解更多、语言切换等）的点击交互情况。

---

## 一、基础配置信息

- **Google Tag 测量 ID**：`G-F65HXNPQRY`
- **SDK 全局引入入口**：`src/layouts/SiteLayout.astro`（自动覆盖全站所有 46 个静态页面）
- **核心事件捕获引擎**：`public/js/analytics.js`
- **客户端版本标识**：`web_v1.0`

---

## 二、GA4 自定义维度（Custom Dimensions）映射规范

您在 GA4 后台创建的 **6 个自定义维度** 已在前端完成 1:1 自动化数据填充：

| 维度名称 | 参数代码 (GA4 Parameter) | 范围 (Scope) | 取值说明与规范示例 |
| :--- | :--- | :--- | :--- |
| **事件Action** | `event_action` | 事件 (Event) | 具体的行为动作代码：<br>• `page_view`（页面浏览）<br>• `download_appstore`（App Store 下载点击）<br>• `download_dmg`（DMG 安装包直接下载）<br>• `click_learn_more`（点击“了解更多”）<br>• `toggle_language`（切换中英文语言）<br>• `nav_product_dropdown`（点击顶部导航产品项）<br>• `filter_blog_category`（点击博客分类筛选） |
| **事件标签** | `event_label` | 事件 (Event) | 按钮具体位置、标题或目标链接：<br>• `hero_appstore_download`（首屏大下载按钮）<br>• `bottom_cta_appstore_download`（底部 CTA 下载卡片）<br>• `blog_card_appstore_download`（博客底部转化卡片）<br>• `homepage_download_button`（首页列表下载按钮）<br>• `switch_to_zh` / `switch_to_en`（切换到的语言）<br>• 页面标题（`document.title`） |
| **软件来源** | `soft_name` | 事件 (Event) | 标识当前操作所关联的软件产品：<br>• `Rightly`<br>• `DeviceMirror`<br>• `NTFSSync`<br>• `AppPad`<br>• `ZipGo`<br>• `Fineusing_Portal`（首页/联系我们/隐私政策等通用页面）<br>• `Blog_Portal`（博客聚合列表） |
| **跟踪版本号** | `track_version` | 事件 (Event) | 固定填充：`web_v1.0`<br>用于在同一个 GA4 媒体资源中区分数据来源于 Web 网页端还是客户端桌面软件。 |
| **系统版本** | `system_version` | 事件 (Event) | 自动通过浏览器 User-Agent 解析访客的操作系统：<br>• `macOS 14.5`、`macOS 15.0` 等<br>• `Windows 10/11`<br>• `iOS`、`Android`、`Linux` |
| **设备序列号** | `serial` | 事件 (Event) | 网页端自动为每位访客生成并持久化在 `localStorage` 中的匿名设备标识符（例如 `web_a1b2c3d4e5`）。<br>保证 Web 端数据格式与客户端软硬件上报逻辑对齐。 |

---

## 三、自动捕获的事件字典（Event Catalog）

全站已启用基于事件委托（Event Delegation）的无侵入式自动追踪机制，只要用户发生以下行为，系统均会自动向 GA4 发送结构化数据：

### 1. 网页访问事件（Pageview）
- **触发时机**：用户进入或刷新全站任意页面时自动触发。
- **上报事件名**：`page_view`
- **携带核心参数**：
  - `page_title`：当前网页标题
  - `page_location`：完整网页 URL
  - `page_path`：相对路径（如 `/ntfssync.html`、`/cn/rightly.html`）
  - `soft_name`：自动识别所属产品（如 `NTFSSync`、`Rightly`、`ZipGo`）
  - `system_version`：访客操作系统
  - `serial`：访客匿名序列号
  - `track_version`：`web_v1.0`

### 2. 核心转化：软件下载点击事件（Download Click）
- **触发时机**：用户点击任何指向 Mac App Store（`apps.apple.com`）或 DMG 安装包（`.dmg`）的链接。
- **上报事件名**：`download_click`
- **上报参数示例**：
  ```javascript
  {
    event_action: "download_appstore", // 或 "download_dmg"
    event_label: "hero_appstore_download",
    soft_name: "NTFSSync", // 自动解析归属于哪个 App
    system_version: "macOS 14.5",
    serial: "web_xxxxxxxx",
    track_version: "web_v1.0",
    destination_url: "https://apps.apple.com/app/ntfssync-ntfs-read-write/id6475194342?mt=12"
  }
  ```

### 3. 导航与探索类事件
| 用户操作 | GA4 事件名 | `event_action` | `event_label` | `soft_name` |
| :--- | :--- | :--- | :--- | :--- |
| 点击各产品卡片的“了解更多 / Learn more” | `navigate_click` | `click_learn_more` | 目标链接地址 | 目标软件名 |
| 点击顶部导航栏「产品」下拉菜单中的某款软件 | `nav_click` | `nav_product_dropdown` | 链接地址 | 所选软件名 |
| 点击切换中英文语言（CN / EN 按钮） | `user_preference` | `toggle_language` | `switch_to_zh` 或 `switch_to_en` | 当前页面软件名 |
| 点击博客列表顶部的分类筛选标签 | `filter_click` | `filter_blog_category` | 分类名（如 `Rightly`、`All` 等） | 所选分类名 |
| 在博客列表中点击某篇文章卡片 | `blog_click` | `click_blog_article` | 文章链接地址 | 当前页面软件名 |

---

## 四、未来页面如何扩展自定义埋点（操作指南）

如果您日后新建了按钮、广告位或弹窗，希望精准统计点击情况，无需修改 JS 脚本，直接在 HTML 标签中添加 `data-track-*` 属性即可：

### 示例 1：为某个特殊按钮自定义追踪
```html
<a 
  href="https://apps.apple.com/..." 
  data-track-action="download_spring_campaign" 
  data-track-label="spring_banner_button" 
  data-track-soft="Rightly"
  class="btn"
>
  春季特惠下载
</a>
```

### 示例 2：在 JavaScript 代码中主动触发
全局已注入 `window.FineusingTracker` 对象，可在任意 JS 逻辑中直接调用：
```javascript
window.FineusingTracker.track(
  'custom_event_name', // 事件名称
  'submit_feedback',   // event_action (事件Action)
  'contact_form',      // event_label (事件标签)
  'NTFSSync'           // soft_name (软件来源)
);
```

---

## 五、在 GA4 后台查看数据与制作转化漏斗

### 1. 实时数据验证（Realtime）
在部署上线后，用浏览器访问网站并点击一次下载按钮：
1. 登录 Google Analytics，进入左侧菜单 **「报告 > 实时（Realtime）」**；
2. 在“按事件名称划分的事件计数”卡片中，即可看到 `page_view` 与 `download_click`；
3. 点击 `download_click` 事件，展开即可实时看到上报的 `soft_name`、`event_action`、`event_label`、`system_version`。

### 2. 查看每个网页的访问次数（PV）
1. 进入 **「报告 > 互动度 > 网页和屏幕（Pages and screens）」**；
2. 可以按“页面路径和屏幕类”清晰查看每一个页面（如 `/index.html`、`/cn/ntfssync.html`、各篇博客）的具体浏览量。

### 3. 创建各产品下载量排行报表（探索报表）
为了清晰看清每个产品的下载转化情况：
1. 进入左侧菜单 **「探索（Explore）」**，创建一张“空白（Blank）”探索报表；
2. **导入维度**：
   - 您的自定义维度：`软件来源`（`soft_name`）
   - 您的自定义维度：`事件标签`（`event_label`）
   - 您的自定义维度：`系统版本`（`system_version`）
3. **导入指标**：
   - `事件计数`（`Event count`）
4. **设置筛选器**：
   - 添加筛选条件：`事件名称` 等于 `download_click`；
5. **拖拽布局**：
   - 将 `软件来源` 拖入【行（Rows）】；
   - 将 `事件计数` 拖入【值（Values）】。
6. 即可生成一份直观表格，清晰展示 **Rightly、NTFSSync、ZipGo、AppPad、DeviceMirror 各自被下载了多少次**。
