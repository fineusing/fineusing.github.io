(function () {
  var storedLang = localStorage.getItem('site_lang');
  var path = window.location.pathname || '/';
  var isCn = path.indexOf('/cn/') === 0 || path === '/cn';
  var isJa = path.indexOf('/ja/') === 0 || path === '/ja';
  var isTc = path.indexOf('/tc/') === 0 || path === '/tc';
  var isFr = path.indexOf('/fr/') === 0 || path === '/fr';
  var isDe = path.indexOf('/de/') === 0 || path === '/de';
  var cleanPath = path.replace(/^\/(cn|ja|tc|fr|de)/, '') || '/';
  var targetPath = cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath;

  if (storedLang === 'en') {
    return;
  }

  if (storedLang === 'ja') {
    if (!isJa) {
      window.location.href = '/ja' + targetPath;
    }
    return;
  }

  if (storedLang === 'zh-CN' || storedLang === 'zh' || storedLang === 'cn') {
    if (!isCn) {
      window.location.href = '/cn' + targetPath;
    }
    return;
  }

  if (storedLang === 'zh-TW' || storedLang === 'tc') {
    if (!isTc) {
      window.location.href = '/tc' + targetPath;
    }
    return;
  }

  if (storedLang === 'fr') {
    if (!isFr) {
      window.location.href = '/fr' + targetPath;
    }
    return;
  }

  if (storedLang === 'de') {
    if (!isDe) {
      window.location.href = '/de' + targetPath;
    }
    return;
  }

  var userLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (userLang.indexOf('ja') !== -1) {
    if (!isJa) {
      window.location.href = '/ja' + targetPath;
    }
  } else if (
    userLang.indexOf('zh-tw') !== -1 ||
    userLang.indexOf('zh-hk') !== -1 ||
    userLang.indexOf('zh-mo') !== -1 ||
    userLang.indexOf('zh-hant') !== -1
  ) {
    if (!isTc) {
      window.location.href = '/tc' + targetPath;
    }
  } else if (userLang.indexOf('zh') !== -1) {
    if (!isCn) {
      window.location.href = '/cn' + targetPath;
    }
  } else if (userLang.indexOf('fr') !== -1) {
    if (!isFr) {
      window.location.href = '/fr' + targetPath;
    }
  } else if (userLang.indexOf('de') !== -1) {
    if (!isDe) {
      window.location.href = '/de' + targetPath;
    }
  }
})();
