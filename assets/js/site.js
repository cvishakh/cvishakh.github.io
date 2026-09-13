/* =========================================================
   Shared site behaviour — theme toggle, sticky nav, ctrl+k search
   Loaded by every page. The initial theme is applied by a small
   inline snippet in each <head> so there is no flash of wrong theme.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- theme ---------- */
  var themeBtn = document.getElementById('themeBtn');
  var themeIcon = document.getElementById('themeIcon');

  function syncThemeIcon() {
    if (!themeIcon) return;
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeIcon.className = dark ? 'fas fa-moon' : 'fas fa-sun';
  }
  syncThemeIcon();

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var root = document.documentElement;
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncThemeIcon();
    });
  }

  /* ---------- nav border on scroll ---------- */
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 8);
    });
  }

  /* ---------- search ---------- */
  var SEARCH_INDEX = [
    { title: 'about', sub: 'bio, news and affiliations', url: 'index.html' },
    { title: 'profile', sub: 'career and education timeline', url: 'timeline.html' },
    { title: 'projects', sub: 'research and side projects', url: 'projects.html' },
    { title: 'blog', sub: 'articles on nature, hiking and wandering', url: 'blogs.html' },
    { title: 'gallery', sub: 'photography from the road', url: 'photos.html' },
    { title: 'EOS GmbH', sub: 'master thesis and working student — profile', url: 'timeline.html' },
    { title: 'Siemens Mobility', sub: 'process automation and data analysis — profile', url: 'timeline.html' },
    { title: 'Institute FAPS', sub: 'project thesis, gesture recognition — profile', url: 'timeline.html' },
    { title: 'Hindustan Aeronautics Limited', sub: 'graduate engineer, project management — profile', url: 'timeline.html' },
    { title: 'FAU Erlangen-Nürnberg', sub: 'M.Sc. Electromobility (ACES) — profile', url: 'timeline.html' },
    { title: 'APJ Abdul Kalam Technological University', sub: 'B.Tech Mechanical Engineering — profile', url: 'timeline.html' },
    { title: 'Vision based interaction for AMR', sub: 'gesture recognition with ROS2 and ZED2i — projects', url: 'projects.html' },
    { title: 'email', sub: 'vishakh.cheruparambath@outlook.com', url: 'mailto:vishakh.cheruparambath@outlook.com' },
    { title: 'GitHub', sub: 'github.com/cvishakh', url: 'https://github.com/cvishakh' },
    { title: 'LinkedIn', sub: 'linkedin.com/in/cvishakh', url: 'https://www.linkedin.com/in/cvishakh/' }
  ];

  var overlay = null;
  var activeIndex = 0;

  function renderResults(listEl, q) {
    var query = q.trim().toLowerCase();
    var matches = query
      ? SEARCH_INDEX.filter(function (i) {
          return (i.title + ' ' + i.sub).toLowerCase().indexOf(query) !== -1;
        })
      : SEARCH_INDEX.slice(0, 5);

    activeIndex = 0;
    listEl.innerHTML = '';

    if (!matches.length) {
      var empty = document.createElement('div');
      empty.className = 'search-empty';
      empty.textContent = 'No results for "' + q + '"';
      listEl.appendChild(empty);
      return;
    }

    matches.forEach(function (m, idx) {
      var a = document.createElement('a');
      a.href = m.url;
      if (/^https?:/.test(m.url)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      if (idx === 0) a.className = 'is-active';

      var t = document.createElement('div');
      t.className = 'r-title';
      t.textContent = m.title;

      var s = document.createElement('div');
      s.className = 'r-sub';
      s.textContent = m.sub;

      a.appendChild(t);
      a.appendChild(s);
      listEl.appendChild(a);
    });
  }

  function moveActive(listEl, delta) {
    var items = listEl.querySelectorAll('a');
    if (!items.length) return;
    items[activeIndex].classList.remove('is-active');
    activeIndex = (activeIndex + delta + items.length) % items.length;
    items[activeIndex].classList.add('is-active');
    items[activeIndex].scrollIntoView({ block: 'nearest' });
  }

  function closeSearch() {
    if (!overlay) return;
    overlay.remove();
    overlay = null;
  }

  function openSearch() {
    if (overlay) return;

    overlay = document.createElement('div');
    overlay.className = 'search-overlay';
    overlay.innerHTML =
      '<div class="search-panel">' +
      '<input type="text" placeholder="Search…" aria-label="Search" autocomplete="off"/>' +
      '<div class="search-results"></div>' +
      '</div>';
    document.body.appendChild(overlay);

    var input = overlay.querySelector('input');
    var listEl = overlay.querySelector('.search-results');
    renderResults(listEl, '');
    input.focus();

    input.addEventListener('input', function () { renderResults(listEl, input.value); });
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeSearch(); });
    overlay.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeSearch(); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); moveActive(listEl, 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); moveActive(listEl, -1); }
      else if (e.key === 'Enter') {
        var active = listEl.querySelector('a.is-active');
        if (active) { e.preventDefault(); active.click(); }
      }
    });
  }

  var searchBtn = document.getElementById('searchBtn');
  if (searchBtn) searchBtn.addEventListener('click', openSearch);

  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (overlay) { closeSearch(); } else { openSearch(); }
    }
  });
})();
