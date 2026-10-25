(function () {
  var storedLang = localStorage.getItem('site_lang');
  var path = window.location.pathname || '/';
  var isCn = path.indexOf('/cn/') === 0;
  var isJa = path.indexOf('/ja/') === 0;
  var cleanPath = path.replace(/^\/(cn|ja)/, '') || '/';

  if (storedLang === 'en') {
    return;
  }

  if (storedLang === 'ja') {
    if (!isJa) {
      window.location.href = '/ja' + (cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath);
    }
    return;
  }

  if (storedLang === 'zh') {
    if (!isCn) {
      window.location.href = '/cn' + (cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath);
    }
    return;
  }

  var userLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (userLang.indexOf('ja') !== -1) {
    if (!isJa) {
      window.location.href = '/ja' + (cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath);
    }
  } else if (userLang.indexOf('zh') !== -1) {
    if (!isCn) {
      window.location.href = '/cn' + (cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath);
    }
  }
})();
