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

/* App shell for mobile: bottom tab bar + "More" sheet. Built from links that
   already exist in the page, so crawlers see nothing new and nothing is lost. */
(() => {
  if (document.querySelector('.app-tabbar')) return;
  const path = location.pathname.replace(/index\.html$/, '');
  const icon = d => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
  const tabs = [
    { href: '/', label: 'Home', match: p => p === '/', svg: icon('<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z"/>') },
    { href: '/work/', label: 'Work', match: p => p.startsWith('/work/'), svg: icon('<rect x="3.5" y="7" width="17" height="13" rx="3"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3.5 12.5h17"/>') },
    { href: '/insights/', label: 'Insights', match: p => p.startsWith('/insights/'), svg: icon('<path d="M5 4.5h10.5L19 8v11.5H5z"/><path d="M8.5 11h7M8.5 14.5h7M8.5 7.5h4"/>') },
    { href: 'https://wa.me/525539013827', label: 'Talk', talk: true, svg: icon('<path d="M4.5 19.5 6 15.6A8 8 0 1 1 9 18.6z"/><path d="M9.2 9.6c.3 2 1.8 3.8 4 4.6l1.2-1.1 1.9.9-.4 1.6c-3.6.2-7.6-3.4-7.7-7.4l1.6-.4.9 1.9z"/>') },
    { label: 'More', more: true, svg: icon('<circle cx="5.5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="18.5" cy="12" r="1.4"/>') }
  ];
  const bar = document.createElement('nav');
  bar.className = 'app-tabbar';
  bar.setAttribute('aria-label', 'App navigation');
  bar.innerHTML = tabs.map(t => {
    if (t.more) return `<button class="app-tab" type="button" aria-haspopup="dialog" aria-controls="app-sheet">${t.svg}<span>${t.label}</span></button>`;
    const current = t.match && t.match(path) ? ' aria-current="page"' : '';
    const ext = t.talk ? ' target="_blank" rel="noopener" data-click-location="tabbar_whatsapp"' : '';
    const ico = t.talk ? `<span class="app-tab-icon">${t.svg}</span>` : t.svg;
    return `<a class="app-tab${t.talk ? ' app-tab--talk' : ''}" href="${t.href}"${current}${ext}>${ico}<span>${t.label}</span></a>`;
  }).join('');

  const groups = [
    ['Explore', [['Engagements', '/#what'], ['Selected work', '/work/'], ['Insights', '/insights/'], ['GEO calculator', '/cotizador-geo/']]],
    ['Alexis', [['About', '/about/'], ['Speaking & teaching', '/speaking-teaching/'], ['Press & references', '/press/'], ['Book · Oops, I Bought It', '/book/'], ['Perfluencer Marketing', '/perfluencer-marketing/']]]
  ];
  const sheet = document.createElement('div');
  sheet.className = 'app-sheet';
  sheet.id = 'app-sheet';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.setAttribute('aria-labelledby', 'app-sheet-title');
  sheet.innerHTML = `<div class="app-sheet-grab" aria-hidden="true"></div>
    <div class="app-sheet-head"><h2 id="app-sheet-title">Menu</h2><button class="app-sheet-close" type="button" aria-label="Close menu">×</button></div>
    ${groups.map(([label, links]) => `<p class="app-sheet-label">${label}</p><div class="app-sheet-group">${links.map(([t, h]) => `<a href="${h}">${t.replace(/&/g, '&amp;')}</a>`).join('')}</div>`).join('')}
    <a class="btn" href="https://calendly.com/alexis-soubran/contact" target="_blank" rel="noopener" data-click-location="sheet_calendly">Book a diagnostic ↗</a>
    <a class="btn secondary" href="mailto:alexis@minimalist.mx">alexis@minimalist.mx</a>`;
  const backdrop = document.createElement('div');
  backdrop.className = 'app-sheet-backdrop';
  document.body.append(bar, sheet, backdrop);

  const moreBtn = bar.querySelector('button.app-tab');
  let lastFocus = null;
  const open = () => {
    lastFocus = document.activeElement;
    sheet.classList.add('is-open'); backdrop.classList.add('is-open');
    document.documentElement.classList.add('sheet-open');
    moreBtn.setAttribute('aria-expanded', 'true');
    sheet.querySelector('.app-sheet-close').focus();
  };
  const close = () => {
    sheet.classList.remove('is-open'); backdrop.classList.remove('is-open');
    document.documentElement.classList.remove('sheet-open');
    moreBtn.setAttribute('aria-expanded', 'false');
    if (lastFocus) lastFocus.focus();
  };
  moreBtn.setAttribute('aria-expanded', 'false');
  moreBtn.addEventListener('click', open);
  backdrop.addEventListener('click', close);
  sheet.querySelector('.app-sheet-close').addEventListener('click', close);
  sheet.addEventListener('click', e => { if (e.target.closest('a')) close(); });
  document.addEventListener('keydown', e => {
    if (!sheet.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'Tab') {
      const f = [...sheet.querySelectorAll('a,button')];
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  window.matchMedia('(max-width: 760px)').addEventListener('change', e => { if (!e.matches && sheet.classList.contains('is-open')) close(); });

  // Swipe down on the sheet to dismiss
  let y0 = null;
  sheet.addEventListener('touchstart', e => { if (sheet.scrollTop <= 0) y0 = e.touches[0].clientY; }, { passive: true });
  sheet.addEventListener('touchmove', e => { if (y0 !== null && e.touches[0].clientY - y0 > 70) { y0 = null; close(); } }, { passive: true });
  sheet.addEventListener('touchend', () => { y0 = null; });
})();
