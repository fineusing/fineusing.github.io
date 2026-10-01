/**
 * Fineusing Google Analytics 4 (GA4) Tracker
 * Tracking Measurement ID: G-F65HXNPQRY
 * Custom Dimensions:
 * - event_action: 事件Action (动作类型)
 * - event_label: 事件标签 (按钮位置/名称/目标)
 * - soft_name: 软件来源 (Rightly, ZipGo, NTFSSync, AppPad, DeviceMirror, Fineusing_Portal 等)
 * - system_version: 系统版本 (macOS, Windows, iOS, etc.)
 * - track_version: 跟踪版本号 (web_v1.0)
 * - serial: 设备序列号 (Web端匿名访客序列号)
 */

(function () {
  'use strict';

  // 1. 获取/初始化匿名设备序列号
  function getWebSerial() {
    try {
      var serial = localStorage.getItem('fu_serial');
      if (!serial) {
        serial = 'web_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
        localStorage.setItem('fu_serial', serial);
      }
      return serial;
    } catch (e) {
      return 'web_anonymous';
    }
  }

  // 2. 获取操作系统版本
  function getSystemVersion() {
    var ua = navigator.userAgent;
    if (ua.indexOf('Mac OS X') !== -1) {
      var match = ua.match(/Mac OS X ([0-9_]+)/);
      return match ? 'macOS ' + match[1].replace(/_/g, '.') : 'macOS';
    }
    if (ua.indexOf('Windows NT 10.0') !== -1) return 'Windows 10/11';
    if (ua.indexOf('Windows') !== -1) return 'Windows';
    if (ua.indexOf('iPhone') !== -1 || ua.indexOf('iPad') !== -1) return 'iOS';
    if (ua.indexOf('Android') !== -1) return 'Android';
    if (ua.indexOf('Linux') !== -1) return 'Linux';
    return 'Other';
  }

  // 3. 根据当前页面推断软件归属
  function getPageSoftName() {
    var path = window.location.pathname.toLowerCase();
    if (path.indexOf('rightly') !== -1) return 'Rightly';
    if (path.indexOf('zipgo') !== -1) return 'ZipGo';
    if (path.indexOf('ntfssync') !== -1) return 'NTFSSync';
    if (path.indexOf('apppad') !== -1) return 'AppPad';
    if (path.indexOf('devicemirror') !== -1) return 'DeviceMirror';
    if (path.indexOf('blog') !== -1) return 'Blog_Portal';
    if (path.indexOf('contact') !== -1) return 'Contact';
    if (path.indexOf('privacy') !== -1) return 'Privacy';
    if (path.indexOf('cleanhelper') !== -1) return 'CleanHelper';
    return 'Fineusing_Portal';
  }

  // 4. 根据 App Store / 下载链接解析具体软件名
  function resolveSoftFromUrl(url) {
    if (!url) return getPageSoftName();
    var lower = url.toLowerCase();
    if (lower.indexOf('6806805796') !== -1 || lower.indexOf('rightly') !== -1) return 'Rightly';
    if (lower.indexOf('6799313183') !== -1 || lower.indexOf('zipgo') !== -1) return 'ZipGo';
    if (lower.indexOf('6475194342') !== -1 || lower.indexOf('ntfssync') !== -1) return 'NTFSSync';
    if (lower.indexOf('1598771178') !== -1 || lower.indexOf('devicemirror') !== -1) return 'DeviceMirror';
    if (lower.indexOf('apppad') !== -1) return 'AppPad';
    if (lower.indexOf('cleanhelper') !== -1 || lower.indexOf('hotlaunch') !== -1) return 'CleanHelper';
    return getPageSoftName();
  }

  // 5. 核心事件上报函数
  function sendTrackEvent(eventName, action, label, softName, extra) {
    if (typeof window.gtag !== 'function') return;

    var finalSoft = softName || getPageSoftName();
    var payload = {
      event_action: action || eventName,
      event_label: label || 'default_label',
      soft_name: finalSoft,
      track_version: 'web_v1.0',
      system_version: getSystemVersion(),
      serial: getWebSerial()
    };

    if (extra && typeof extra === 'object') {
      for (var key in extra) {
        if (extra.hasOwnProperty(key)) {
          payload[key] = extra[key];
        }
      }
    }

    window.gtag('event', eventName, payload);
  }

  // 暴露全局便捷调用工具
  window.FineusingTracker = {
    track: sendTrackEvent,
    getSerial: getWebSerial,
    getSystemVersion: getSystemVersion
  };

  // 6. DOM 事件委托监听
  function initEventTracking() {
    document.addEventListener('click', function (e) {
      var target = e.target;
      var anchor = target.closest ? target.closest('a') : null;
      var button = target.closest ? target.closest('button') : null;

      // --- A. 超链接点击检测 ---
      if (anchor) {
        var href = anchor.getAttribute('href') || '';
        var trackSoft = anchor.getAttribute('data-track-soft') || resolveSoftFromUrl(href);
        var trackLabel = anchor.getAttribute('data-track-label');

        // 1. 软件下载点击 (App Store 链接)
        if (href.indexOf('apps.apple.com') !== -1) {
          var label = trackLabel || (anchor.id === 'download' ? 'hero_appstore_download' : 'appstore_download_button');
          if (anchor.closest('.bg-gradient-to-r')) {
            label = 'bottom_cta_appstore_download';
          } else if (anchor.closest('article')) {
            label = 'blog_card_appstore_download';
          }

          sendTrackEvent('download_click', 'download_appstore', label, trackSoft, {
            destination_url: href
          });
          return;
        }

        // 2. 软件下载点击 (DMG 安装包直接下载)
        if (href.indexOf('.dmg') !== -1 || href.indexOf('installer') !== -1) {
          var dmgLabel = trackLabel || 'apppad_dmg_download';
          if (anchor.closest('.bg-gradient-to-r')) {
            dmgLabel = 'bottom_cta_dmg_download';
          } else if (anchor.closest('article')) {
            dmgLabel = 'blog_card_dmg_download';
          }

          sendTrackEvent('download_click', 'download_dmg', dmgLabel, 'AppPad', {
            destination_url: href
          });
          return;
        }

        // 3. 语言切换按钮 (CN <-> EN)
        if (anchor.id === 'lang-toggle' || anchor.getAttribute('data-lang')) {
          var targetLang = anchor.getAttribute('data-lang') || 'toggle';
          sendTrackEvent('user_preference', 'toggle_language', 'switch_to_' + targetLang, getPageSoftName());
          return;
        }

        // 4. “了解更多 / Learn more” 引导点击
        var anchorText = (anchor.textContent || '').trim().toLowerCase();
        if (anchorText === 'learn more' || anchorText === '了解更多') {
          var learnSoft = resolveSoftFromUrl(href);
          sendTrackEvent('navigate_click', 'click_learn_more', href, learnSoft);
          return;
        }

        // 5. 导航栏产品下拉菜单项点击
        if (anchor.closest('.dropdown-menu')) {
          var navProduct = resolveSoftFromUrl(href);
          sendTrackEvent('nav_click', 'nav_product_dropdown', href, navProduct);
          return;
        }

        // 6. 博客文章点击
        if (anchor.closest('#blog-list') && href.indexOf('/blog/') !== -1) {
          sendTrackEvent('blog_click', 'click_blog_article', href, getPageSoftName());
          return;
        }

        // 7. 自定义 data-track 属性支持
        var customAction = anchor.getAttribute('data-track-action');
        if (customAction) {
          sendTrackEvent('custom_click', customAction, trackLabel || href, trackSoft);
          return;
        }
      }

      // --- B. 按钮点击检测 ---
      if (button) {
        // 1. 博客分类筛选按钮点击
        if (button.closest('#blog-filters')) {
          var filterName = button.getAttribute('data-filter') || button.textContent.trim();
          sendTrackEvent('filter_click', 'filter_blog_category', filterName, filterName === 'all' ? 'Blog_Portal' : filterName);
          return;
        }

        // 2. 自定义 data-track 按钮
        var btnAction = button.getAttribute('data-track-action');
        if (btnAction) {
          var btnLabel = button.getAttribute('data-track-label') || button.textContent.trim();
          var btnSoft = button.getAttribute('data-track-soft') || getPageSoftName();
          sendTrackEvent('custom_click', btnAction, btnLabel, btnSoft);
          return;
        }
      }
    }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEventTracking);
  } else {
    initEventTracking();
  }
})();
