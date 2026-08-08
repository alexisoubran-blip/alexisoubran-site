const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const preloader = document.querySelector('.mv-preloader');
const counter = document.querySelector('[data-mv-counter]');

if (preloader && !reducedMotion) {
  document.body.classList.add('mv-loading');
  const started = performance.now();
  const duration = 2000;

  function count(now) {
    const progress = Math.min((now - started) / duration, 1);
    if (counter) counter.textContent = String(Math.round(progress * 100));
    if (progress < 1) {
      requestAnimationFrame(count);
      return;
    }
    window.setTimeout(() => {
      preloader.classList.add('is-ready');
      document.body.classList.remove('mv-loading');
      window.setTimeout(() => preloader.setAttribute('aria-hidden', 'true'), 700);
    }, 260);
  }

  requestAnimationFrame(count);
} else if (preloader) {
  preloader.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll(
  'main > section:not(.mv-principles), main > .architecture-section, main > .positioning, .operating-card, .result, .testimonial, .facet'
).forEach((element, index) => {
  element.setAttribute('data-mv-reveal', '');
  element.style.transitionDelay = `${Math.min((index % 4) * 70, 210)}ms`;
});

const revealItems = document.querySelectorAll('[data-mv-reveal]');
if (!reducedMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('mv-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('mv-visible'));
}

document.querySelectorAll('.operating-card').forEach((card, index) => {
  card.dataset.index = String(index + 1).padStart(2, '0');
});
document.querySelectorAll('.facet').forEach((card, index) => {
  card.dataset.index = String(index + 1).padStart(2, '0');
});

if (!reducedMotion) {
  import('https://cdn.jsdelivr.net/npm/lenis@1.3.19/dist/lenis.mjs')
    .then(({ default: Lenis }) => {
      const lenis = new Lenis({ smoothWheel: true, lerp: 0.085 });
      const frame = (time) => {
        lenis.raf(time);
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
      document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
          const target = document.querySelector(link.getAttribute('href'));
          if (!target) return;
          event.preventDefault();
          lenis.scrollTo(target, { offset: -72 });
        });
      });
    })
    .catch(() => {});
}
