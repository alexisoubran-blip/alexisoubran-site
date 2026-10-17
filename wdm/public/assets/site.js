const language = document.documentElement.lang.startsWith('en') ? 'en' : 'es';
const t = (es, en) => language === 'en' ? en : es;

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
if (menuButton && mobileNav) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', t('Abrir menú', 'Open menu'));
    mobileNav.hidden = true;
  };
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? t('Abrir menú', 'Open menu') : t('Cerrar menú', 'Close menu'));
    mobileNav.hidden = expanded;
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); }
  });
  window.matchMedia('(min-width: 961px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
}

const tabs = [...document.querySelectorAll('[role="tab"]')];
const activateTab = (tab, focus = false) => {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  if (focus) tab.focus();
};
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); activateTab(tabs[next], true); }
  });
});

// The contact assistant prepares a message locally. Nothing is submitted or stored.
const form = document.querySelector('#contact-form');
if (form) {
  const feedback = form.querySelector('.form-feedback');
  const result = form.querySelector('.form-summary');
  const emailLink = form.querySelector('#prepared-email');
  const copyButton = form.querySelector('#copy-message');
  let preparedText = '';
  let emailHref = '';
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const clean = key => String(data.get(key) || '').trim();
    const subject = `${t('Platiquemos de', "Let's talk about")} ${clean('company')}`;
    preparedText = t(
      `Hola, equipo WDM.\n\nSoy ${clean('name')} de ${clean('company')}.\nCorreo: ${clean('email')}\nMe interesa: ${clean('interest')}\n\n${clean('message')}\n\nMe gustaría platicar sobre cómo pueden ayudarnos.`,
      `Hello, WDM team.\n\nI'm ${clean('name')} from ${clean('company')}.\nEmail: ${clean('email')}\nI'm interested in: ${clean('interest')}\n\n${clean('message')}\n\nI'd like to discuss how you could support our business.`
    );
    emailHref = `mailto:contacto@wedomarketing.mx?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(preparedText)}`;
    emailLink.href = emailHref;
    result.hidden = false;
    feedback.textContent = t('Tu mensaje está listo. Elige cómo enviarlo abajo.', 'Your message is ready. Choose how to send it below.');
    emailLink.focus();
  });
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(preparedText);
      feedback.textContent = t('Mensaje copiado. Puedes pegarlo en un correo a contacto@wedomarketing.mx.', 'Message copied. Paste it into an email to contacto@wedomarketing.mx.');
    } catch {
      feedback.textContent = t('No pudimos copiarlo automáticamente. Usa el enlace para abrir tu correo.', 'We could not copy it automatically. Use the link to open your email.');
    }
  });
  form.addEventListener('input', () => {
    if (!result.hidden) { result.hidden = true; feedback.textContent = ''; }
  });
}

// Content is always visible without JS or reduced-motion support.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
