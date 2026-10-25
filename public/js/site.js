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

    // Support all language switcher links with data-lang
    var langLinks = document.querySelectorAll('[data-lang]');
    for (var i = 0; i < langLinks.length; i++) {
      langLinks[i].addEventListener('click', function () {
        var targetLang = this.getAttribute('data-lang');
        if (targetLang) {
          localStorage.setItem('site_lang', targetLang);
        }
      });
    }

    // Language dropdown click toggle & dismiss
    var langBtn = document.getElementById('lang-toggle-btn');
    var langPanel = document.getElementById('lang-dropdown-panel');
    if (langBtn && langPanel) {
      langBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = langPanel.classList.toggle('is-open');
        langBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      document.addEventListener('click', function (e) {
        if (!langPanel.contains(e.target) && !langBtn.contains(e.target)) {
          langPanel.classList.remove('is-open');
          langBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });
})();
