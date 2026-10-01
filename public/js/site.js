(function () {
  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    var menuToggle = document.getElementById('menu-toggle');
    var navbarDropdown = document.getElementById('navbar-dropdown');
    if (menuToggle && navbarDropdown) {
      menuToggle.addEventListener('click', function () {
        navbarDropdown.classList.toggle('hidden');
      });
    }

    var langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', function () {
        var targetLang = langToggle.getAttribute('data-lang');
        if (targetLang) {
          localStorage.setItem('site_lang', targetLang);
        }
      });
    }
  });
})();
