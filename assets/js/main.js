// Language toggle: EN / 中文
// Priority: ?lang=zh|en in the URL, then the visitor's saved choice, then the browser language.
(function () {
  var root = document.documentElement;
  var KEY = 'ctci-lang';

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function save(l) {
    try { localStorage.setItem(KEY, l); } catch (e) {}
  }
  function initial() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'zh' || q === 'en') return q;
    var s = saved();
    if (s === 'zh' || s === 'en') return s;
    return /^zh/i.test(navigator.language || '') ? 'zh' : 'en';
  }

  function apply(l) {
    root.setAttribute('data-lang', l);
    root.setAttribute('lang', l === 'zh' ? 'zh-Hans' : 'en-CA');
    var t = root.getAttribute('data-title-' + l);
    if (t) document.title = t;
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-set-lang') === l ? 'true' : 'false');
    });
    // Translate placeholders / aria-labels that carry data-en / data-zh
    document.querySelectorAll('[data-en-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', el.getAttribute('data-' + l + '-placeholder'));
    });
    document.querySelectorAll('[data-en-label]').forEach(function (el) {
      el.setAttribute('aria-label', el.getAttribute('data-' + l + '-label'));
    });
  }

  apply(initial());

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-set-lang]');
    if (!b) return;
    var l = b.getAttribute('data-set-lang');
    save(l);
    apply(l);
    // Drop any ?lang= from the address so a reload keeps the visitor's choice
    var u = new URL(location.href);
    if (u.searchParams.has('lang')) {
      u.searchParams.delete('lang');
      history.replaceState(null, '', u.pathname + u.search + u.hash);
    }
  });
})();

// Mobile menu toggle
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// Contact form: no server yet, so it opens the visitor's email app with the message filled in.
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    var msg = form.elements.message.value.trim();
    var subject = 'Website enquiry from ' + name;
    var body = msg + '\n\n— ' + name + ' <' + email + '>';
    location.href = 'mailto:chanandteacultureinternational@gmail.com?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
})();

// Footer year
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
