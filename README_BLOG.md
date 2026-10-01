# 修改文档（新增产品 / 博客）
适用路径根目录：`/Users/luolei/Desktop/AI Coding/Mywebsite`

---

## 一、新增一个产品（首页 + 导航 + 详情页）

### 1. 首页产品模块
文件：`/Users/luolei/Desktop/AI Coding/Mywebsite/src/views/HomePage.astro`

当前首页的产品模块写在两个 `<section>` 内（AppPad / DeviceMirror）。
要新增产品模块：复制其中一个 `<section class="py-20 ...">` 块，修改以下内容：

- 标题：`{dict.home.xxxTitle}`
- 副标题：`{dict.home.xxxSubtitle}`
- 说明：`{dict.home.xxxBody}`
- 图片路径：`/img/xxx.png`
- 下载链接：产品官网或 App Store
- 详情页链接：`/xxx.html` 或 `/cn/xxx.html`

同时在文案字典里新增对应字段：

文件：`/Users/luolei/Desktop/AI Coding/Mywebsite/src/i18n/index.ts`
在 `home` 里新增你产品的文案（英文和中文）：

```ts
home: {
  ...
  newProductTitle: "...",
  newProductSubtitle: "...",
  newProductHeading: "...",
  newProductBody: "...",
  ...
}
```

---

### 2. 导航栏“产品”下拉菜单
文件：`/Users/luolei/Desktop/AI Coding/Mywebsite/src/components/Navbar.astro`

在下拉菜单 `<ul>` 中新增一个 `<li>`：

```html
<li>
  <a href={`${base}/newproduct.html`} class="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors">
    <img src="/img/newproduct-logo.png" class="w-10 h-10 mr-3" />
    <div>
      <div class="font-semibold text-gray-900">NewProduct</div>
      <div class="text-xs text-gray-500">{dict.nav.newProductTag}</div>
    </div>
  </a>
</li>
```

并在字典中加标签文案：

文件：`/Users/luolei/Desktop/AI Coding/Mywebsite/src/i18n/index.ts`
新增：

```ts
nav: {
  ...
  newProductTag: "xxxxx"
}
```

---

### 3. 新增产品详情页
方式：复制一个已有产品页面（推荐 AppPad 或 DeviceMirror）并改内容：

文件：
- `/Users/luolei/Desktop/AI Coding/Mywebsite/src/views/AppPadPage.astro`
- `/Users/luolei/Desktop/AI Coding/Mywebsite/src/views/DeviceMirrorPage.astro`

复制为：
- `/Users/luolei/Desktop/AI Coding/Mywebsite/src/views/NewProductPage.astro`

然后创建页面入口：

**英文入口：**  
`/Users/luolei/Desktop/AI Coding/Mywebsite/src/pages/newproduct.astro`

```astro
---
import NewProductPage from "../views/NewProductPage.astro";
---
<NewProductPage locale="en" enableLangRedirect />
```

**中文入口：**  
`/Users/luolei/Desktop/AI Coding/Mywebsite/src/pages/[lang]/newproduct.astro`（或者如果单独放 `src/pages/cn/newproduct.astro`）

```astro
---
import NewProductPage from "../../views/NewProductPage.astro";
---
<NewProductPage locale="cn" />
```

---

## 二、Blog 新增文章（英文 + 中文）

Blog 已改成“直接放 MD 文件自动生成”。

### 1. 英文文章
放这里：  
`/Users/luolei/Desktop/AI Coding/Mywebsite/src/pages/blog/`

例如：  
`/Users/luolei/Desktop/AI Coding/Mywebsite/src/pages/blog/new-post.md`

模板：

```md
---
layout: ../../layouts/BlogPostLayout.astro
title: "Your English Title"
date: "2025-02-01"
tags: ["AppPad"]
product: "AppPad"
---

Your article content...
```

---

### 2. 中文文章
放这里：  
`/Users/luolei/Desktop/AI Coding/Mywebsite/src/pages/cn/blog/`

例如：  
`/Users/luolei/Desktop/AI Coding/Mywebsite/src/pages/cn/blog/new-post.md`

模板：

```md
---
layout: ../../../layouts/BlogPostLayout.astro
locale: "cn"
title: "中文标题"
date: "2025-02-01"
tags: ["AppPad"]
product: "AppPad"
---

中文内容...
```

---

### 3. Blog 首页如何更新
Blog 首页会自动读取目录下所有 `.md` 文件：

- 英文：`/Users/luolei/Desktop/AI Coding/Mywebsite/src/pages/blog/index.astro`  
  自动读取 `src/pages/blog/*.md`

- 中文：`/Users/luolei/Desktop/AI Coding/Mywebsite/src/pages/cn/blog/index.astro`  
  自动读取 `src/pages/cn/blog/*.md`

你只需要新增 `.md` 文件，首页会自动更新，不需要手动改首页。

---

## 三、注意事项
- 图片放在：`/Users/luolei/Desktop/AI Coding/Mywebsite/public/img/`
- 产品 Logo 在导航栏使用 `public/img` 下的文件
- 中英文文章必须各写一份，否则切换语言会找不到对应文章
