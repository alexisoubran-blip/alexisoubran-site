(() => {
  const toggle = document.querySelector('.site-menu-toggle');
  const menu = document.querySelector('.site-menu');
  if (toggle && menu) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
    });
    menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
    document.addEventListener('click', event => {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });
    window.matchMedia('(max-width: 900px)').addEventListener('change', closeMenu);
  }
  document.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link || link.hasAttribute('onclick')) return;
    let name;
    if (link.href.startsWith('https://wa.me/')) name = 'whatsapp_click';
    else if (link.href.startsWith('mailto:')) name = 'email_click';
    else if (link.href.startsWith('https://calendly.com/')) name = 'calendly_click';
    if (name) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({event:name,click_location:link.dataset.clickLocation || location.pathname});
    }
  });
  const ticker = document.querySelector('.brand-ticker');
  const pause = document.querySelector('.ticker-toggle');
  if (ticker && pause) pause.addEventListener('click', () => {
    const paused = ticker.classList.toggle('is-paused');
    pause.setAttribute('aria-pressed', String(paused));
    pause.textContent = paused ? 'Resume motion' : 'Pause motion';
  });
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.08,rootMargin:'0px 0px -24px 0px'});
  const selector = document.body.classList.contains('site-home')
    ? '[data-reveal]'
    : '.hero, section, .card, .result-tile, .reference';
  document.querySelectorAll(selector).forEach(element => {
    if (element.closest('.site-footer, .brand-directory, .workspace') || element.getBoundingClientRect().top < innerHeight - 24) return;
    element.classList.add('site-reveal');
    observer.observe(element);
  });
  motion.addEventListener('change', event => {
    if (event.matches) {
      observer.disconnect();
      document.querySelectorAll('.site-reveal').forEach(element => element.classList.add('is-visible'));
    }
  });
})();
