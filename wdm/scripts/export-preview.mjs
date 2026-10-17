import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { dirname, extname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';

// Build an offline review file from dist without changing the website or its build.
// Usage: node scripts/export-preview.mjs [absolute-or-relative-output.html]
const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = join(projectRoot, 'dist');
const outputPath = process.argv[2]
  ? resolve(process.argv[2])
  : resolve(projectRoot, '..', 'wdm-review', 'wdm-vista-previa.html');

const mimeTypes = {
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.gif': 'image/gif', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.ttf': 'font/ttf', '.otf': 'font/otf', '.avif': 'image/avif',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.mp3': 'audio/mpeg'
};

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.map(entry => entry.isDirectory()
    ? walk(join(directory, entry.name))
    : [join(directory, entry.name)]));
  return groups.flat().sort();
}

const files = await walk(distRoot);
const fileMap = new Map(files.map(file => [
  `/${relative(distRoot, file).split(sep).join('/')}`, file
]));
const assetData = {};
const styles = {};
const scripts = {};
const pages = {};
const titles = {};
const virtualOrigin = 'https://wdm-offline.invalid';
const localOrigins = new Set([virtualOrigin, 'https://wedomarketing.mx', 'https://www.wedomarketing.mx']);

function getAttribute(tag, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return tag.match(new RegExp(`\\b${escaped}\\s*=\\s*(["'])([\\s\\S]*?)\\1`, 'i'))?.[2] ?? null;
}

function htmlAttribute(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function setAttribute(tag, name, value) {
  const pattern = new RegExp(`\\b${name}\\s*=\\s*(["'])([\\s\\S]*?)\\1`, 'i');
  const attribute = `${name}="${htmlAttribute(value)}"`;
  return pattern.test(tag) ? tag.replace(pattern, attribute) : tag.replace(/>$/, ` ${attribute}>`);
}

function pageRoute(filePath) {
  return filePath.endsWith('/index.html') ? filePath.slice(0, -10) : filePath;
}

function assetToken(path) {
  if (!assetData[path]) throw new Error(`Missing embedded asset: ${path}`);
  return `@@WDM_ASSET:${path}@@`;
}

function localPath(reference, basePath = '/') {
  const url = new URL(reference, virtualOrigin + basePath);
  if (!localOrigins.has(url.origin)) throw new Error(`Network resource is not permitted in this offline export: ${reference}`);
  return decodeURIComponent(url.pathname);
}

// Collect every supplied image, including unused brand assets, and every font.
for (const [path, file] of fileMap) {
  const mime = mimeTypes[extname(path).toLowerCase()];
  if (mime) assetData[path] = `data:${mime};base64,${(await readFile(file)).toString('base64')}`;
}

for (const [path, file] of fileMap) {
  if (!path.endsWith('.html')) continue;
  const html = await readFile(file, 'utf8');
  const canonical = html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i)?.[0];
  if (canonical) localOrigins.add(new URL(getAttribute(canonical, 'href')).origin);
  pages[pageRoute(path)] = html;
  titles[pageRoute(path)] = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? 'WDM | WeDoMarketing';
}

for (const [path, file] of fileMap) {
  if (path.endsWith('.css')) {
    const css = await readFile(file, 'utf8');
    if (/@import\s/i.test(css)) throw new Error(`CSS imports must be resolved before export: ${path}`);
    styles[path] = css.replace(/url\(\s*(["']?)(.*?)\1\s*\)/g, (match, _quote, reference) => {
      if (reference.startsWith('data:') || reference.startsWith('#')) return match;
      const resolvedPath = localPath(reference, path);
      if (!assetData[resolvedPath]) throw new Error(`Missing CSS asset: ${resolvedPath}`);
      return `url("${assetData[resolvedPath]}")`;
    });
  }
  if (path.endsWith('.js')) {
    const source = await readFile(file, 'utf8');
    new Script(source, { filename: path });
    scripts[path] = source;
  }
}

const offlineCsp = "default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; img-src data:; font-src data:; media-src data:; connect-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'";

for (const [route, source] of Object.entries(pages)) {
  const deferredScripts = [];
  let html = source.replace(/<link\b[^>]*>/gi, tag => {
    const rel = (getAttribute(tag, 'rel') || '').toLowerCase();
    const href = getAttribute(tag, 'href');
    if (['preload', 'prefetch', 'preconnect', 'dns-prefetch', 'modulepreload'].includes(rel)) return '';
    if (rel === 'stylesheet') {
      const path = localPath(href, route);
      if (!styles[path]) throw new Error(`Missing stylesheet: ${path}`);
      return `<!--WDM_STYLE:${path}-->`;
    }
    if (rel.includes('icon') && href) return setAttribute(tag, 'href', assetToken(localPath(href, route)));
    return tag;
  });

  html = html.replace(/<script\b[^>]*\bsrc\s*=\s*(["'])(.*?)\1[^>]*>\s*<\/script>/gi, (_tag, _quote, reference) => {
    const path = localPath(reference, route);
    if (!scripts[path]) throw new Error(`Missing script: ${path}`);
    deferredScripts.push(`<!--WDM_SCRIPT:${path}-->`);
    return '';
  });

  html = html.replace(/<(?:img|source|video|audio|track|input|embed)\b[^>]*>/gi, tag => {
    if (/\bsrcset\s*=/i.test(tag)) throw new Error(`Add explicit srcset support before exporting ${route}`);
    for (const attribute of ['src', 'poster']) {
      const reference = getAttribute(tag, attribute);
      if (!reference || reference.startsWith('data:')) continue;
      tag = setAttribute(tag, attribute, assetToken(localPath(reference, route)));
    }
    return tag;
  });

  html = html.replace(/<a\b[^>]*>/gi, tag => {
    const href = getAttribute(tag, 'href');
    if (!href || href.startsWith('mailto:')) return tag;
    const target = new URL(href.replace(/&amp;/g, '&'), virtualOrigin + route);
    if (target.protocol === 'https:' && /(^|\.)linkedin\.com$/i.test(target.hostname)) {
      return setAttribute(setAttribute(tag, 'target', '_blank'), 'rel', 'noopener noreferrer');
    }
    if (!localOrigins.has(target.origin)) throw new Error(`Unsupported external navigation: ${href}`);
    const pathname = target.pathname.endsWith('/index.html') ? target.pathname.slice(0, -10) : target.pathname;
    if (!pages[pathname]) throw new Error(`Broken internal route in ${route}: ${pathname}`);
    const destination = pathname + target.hash;
    tag = setAttribute(tag, 'data-preview-href', destination);
    return setAttribute(tag, 'href', `#${encodeURIComponent(destination)}`);
  });

  // The original deferred script runs after the complete body in srcdoc.
  // The adapter only changes navigation and offline clipboard handling.
  html = html.replace(/<head>/i, `<head><meta http-equiv="Content-Security-Policy" content="${htmlAttribute(offlineCsp)}">`);
  html = html.replace(/<\/body>/i, `${deferredScripts.join('')}<!--WDM_ADAPTER--></body>`);
  pages[route] = html;
}

function previewRuntime(payload) {
  'use strict';
  const frame = document.getElementById('wdm-preview');
  const routeKeys = Object.keys(payload.pages);
  let currentRoute = '';

  function childAdapter(config) {
    'use strict';
    const english = document.documentElement.lang.startsWith('en');
    function scrollToFragment(fragment) {
      if (!fragment || fragment === '#') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        return;
      }
      let id = fragment.slice(1);
      try { id = decodeURIComponent(id); } catch {}
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
    }

    const navigate = event => {
      const anchor = event.target.closest?.('a');
      if (!anchor) return;
      const route = anchor.getAttribute('data-preview-href');
      if (route) {
        event.preventDefault();
        parent.postMessage({ type: 'wdm:route', target: route }, '*');
      } else {
        const href = anchor.getAttribute('href') || '';
        if (/^mailto:/i.test(href)) return;
        try {
          const url = new URL(href);
          if (url.protocol === 'https:' && /(^|\.)linkedin\.com$/i.test(url.hostname)) return;
        } catch {}
        event.preventDefault();
      }
    };
    document.addEventListener('click', navigate, true);
    document.addEventListener('auxclick', navigate, true);
    document.addEventListener('submit', event => event.preventDefault());

    // Local file contexts may not expose the Clipboard API. Preserve the
    // existing action using the browser's local copy command when needed.
    document.getElementById('copy-message')?.addEventListener('click', event => {
      if (window.isSecureContext && navigator.clipboard) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const mail = document.getElementById('prepared-email')?.getAttribute('href') || '';
      const text = new URLSearchParams(mail.split('?')[1] || '').get('body') || '';
      const temporary = document.createElement('textarea');
      temporary.value = text;
      temporary.setAttribute('aria-hidden', 'true');
      temporary.style.cssText = 'position:fixed;left:-10000px;top:0;opacity:0';
      document.body.append(temporary);
      temporary.select();
      let copied = false;
      try { copied = document.execCommand('copy'); } catch {}
      temporary.remove();
      const feedback = document.querySelector('.form-feedback');
      if (feedback) feedback.textContent = copied
        ? (english ? 'Message copied. Paste it into an email to contacto@wedomarketing.mx.' : 'Mensaje copiado. Puedes pegarlo en un correo a contacto@wedomarketing.mx.')
        : (english ? 'Use the link to open your email with the prepared message.' : 'Usa el enlace para abrir tu correo con el mensaje preparado.');
    }, true);

    window.addEventListener('message', event => {
      if (event.source !== parent || event.data?.type !== 'wdm:scroll') return;
      scrollToFragment(event.data.fragment);
    });

    window.addEventListener('load', async () => {
      if (document.fonts) await document.fonts.ready;
      scrollToFragment(config.fragment);
      parent.postMessage({ type: 'wdm:ready', route: config.route, title: document.title }, '*');
    });
  }

  function safeJson(value) {
    return JSON.stringify(value).replace(/</g, '\\u003c');
  }

  function inlineScript(source) {
    return '<script>' + source.replace(/<\/script/gi, '<\\/script') + '</' + 'script>';
  }

  function inflate(route, fragment) {
    return payload.pages[route]
      .replace(/@@WDM_ASSET:([^@]+)@@/g, (_match, path) => payload.assets[path])
      .replace(/<!--WDM_STYLE:([^>]+)-->/g, (_match, path) => '<style>' + payload.styles[path] + '</style>')
      .replace(/<!--WDM_SCRIPT:([^>]+)-->/g, (_match, path) => inlineScript(payload.scripts[path]))
      .replace('<!--WDM_ADAPTER-->', inlineScript('(' + childAdapter.toString() + ')(' + safeJson({ route, fragment }) + ');'));
  }

  function parseTarget(target) {
    const hashAt = target.indexOf('#');
    let route = hashAt >= 0 ? target.slice(0, hashAt) : target;
    const fragment = hashAt >= 0 ? target.slice(hashAt) : '';
    if (!route) route = '/';
    if (!routeKeys.includes(route)) route = '/404.html';
    return { route, fragment };
  }

  function readAddress() {
    try { return decodeURIComponent(location.hash.slice(1)) || '/'; }
    catch { return '/'; }
  }

  function show(target, updateHistory = false) {
    const { route, fragment } = parseTarget(target);
    if (updateHistory) {
      const nextHash = '#' + encodeURIComponent(route + fragment);
      if (location.hash !== nextHash) history.pushState({ wdmRoute: route + fragment }, '', nextHash);
    }
    document.title = payload.titles[route] + ' · Vista previa';
    document.documentElement.lang = route.startsWith('/en/') ? 'en' : 'es-MX';
    if (currentRoute === route) {
      frame.contentWindow.postMessage({ type: 'wdm:scroll', fragment }, '*');
      return;
    }
    currentRoute = route;
    frame.srcdoc = inflate(route, fragment);
  }

  window.addEventListener('message', event => {
    if (event.source !== frame.contentWindow) return;
    if (event.data?.type === 'wdm:route' && typeof event.data.target === 'string') show(event.data.target, true);
  });
  window.addEventListener('popstate', () => show(readAddress()));
  window.addEventListener('hashchange', () => show(readAddress()));
  show(readAddress());
}

const payload = {
  pages, titles, styles, scripts,
  // Font data already lives in the embedded CSS; avoid duplicating it in JSON.
  assets: Object.fromEntries(Object.entries(assetData).filter(([path]) => !/\.(?:woff2?|ttf|otf)$/.test(path)))
};
const serialized = JSON.stringify(payload).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
const runtime = `(${previewRuntime.toString()})(JSON.parse(document.getElementById('wdm-payload').textContent));`;
new Script(runtime, { filename: 'wdm-offline-runtime.js' });
if (/<\/script/i.test(runtime)) throw new Error('The runtime must not contain a raw script closing tag.');

const html = `<!doctype html>
<html lang="es-MX"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="referrer" content="no-referrer"><title>WDM | Vista previa</title>
<style>html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#f7f7f2}#wdm-preview{display:block;width:100%;height:100vh;height:100dvh;border:0}noscript{display:block;padding:2rem;font:16px/1.6 system-ui,sans-serif;color:#093b4d}</style></head>
<body><iframe id="wdm-preview" title="WDM WeDoMarketing, vista previa navegable" allow="clipboard-write" referrerpolicy="no-referrer"></iframe><noscript>Activa JavaScript para recorrer esta vista previa de WDM. El archivo incluye sus páginas, imágenes y tipografías.</noscript>
<script type="application/json" id="wdm-payload">${serialized}</script><script>${runtime}</script></body></html>`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, html, 'utf8');
console.log(JSON.stringify({
  output: outputPath,
  pages: Object.keys(pages).filter(route => route !== '/404.html').length,
  fallback404: Boolean(pages['/404.html']),
  embeddedImages: Object.keys(assetData).filter(path => /\.(?:png|jpe?g|webp|gif|svg|ico|avif)$/.test(path)).length,
  embeddedFonts: Object.keys(assetData).filter(path => /\.(?:woff2?|ttf|otf)$/.test(path)).length,
  bytes: Buffer.byteLength(html),
  externalNavigation: ['LinkedIn', 'mailto']
}, null, 2));
