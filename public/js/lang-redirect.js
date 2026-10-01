(function () {
  var storedLang = localStorage.getItem('site_lang');
  var path = window.location.pathname || '/';
  var isCn = path.indexOf('/cn/') === 0;

  if (storedLang === 'en') {
    return;
  }

  var targetPath = isCn ? path.replace(/^\/cn/, '') : '/cn' + path;

  if (storedLang === 'zh') {
    if (!isCn) {
      window.location.href = targetPath;
    }
    return;
  }

  var userLang = navigator.language || navigator.userLanguage || '';
  if (userLang.toLowerCase().indexOf('zh') !== -1) {
    if (!isCn) {
      window.location.href = targetPath;
    }
  }
})();
