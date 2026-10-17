import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Checks the emitted site, not the templates. No network or browser is required.
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, 'dist');
const errors = [];
const warnings = [];
const requireThat = (condition, message) => { if (!condition) errors.push(message); };
const warn = (condition, message) => { if (!condition) warnings.push(message); };
const decode = value => value.replace(/&(?:amp|lt|gt|quot|#39|apos);/g, entity => ({ '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&apos;': "'" }[entity]));
const text = html => decode(html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map(match => [match[1], decode(match[2] ?? match[3])]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(match => attrs(match[0]));
const walk = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);

if (!fs.existsSync(path.join(dist, 'index.html'))) {
  console.error('No built site found. Run npm run build before npm run check.');
  process.exit(1);
}

const files = walk(dist);
const pages = new Map(files.filter(file => file.endsWith('.html')).map(file => {
  const relative = path.relative(dist, file).replaceAll(path.sep, '/');
  const route = relative === 'index.html' ? '/' : relative.endsWith('/index.html') ? '/' + relative.slice(0, -10) : '/' + relative;
  const html = fs.readFileSync(file, 'utf8');
  return [route, { file, route, html, ids: new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])), links: tags(html, 'link'), meta: tags(html, 'meta') }];
}));
const canonicalOf = page => page.links.find(link => link.rel === 'canonical')?.href;
const canonicalHome = canonicalOf(pages.get('/'));
requireThat(Boolean(canonicalHome), '/: canonical is missing');
let origin;
try { origin = new URL(canonicalHome).origin; } catch { errors.push('/: canonical URL is invalid'); }
if (!origin) { console.error(errors.join('\n')); process.exit(1); }

const fileFor = pathname => {
  const decoded = decodeURIComponent(pathname);
  const candidate = path.join(dist, decoded);
  if (!candidate.startsWith(dist + path.sep) && candidate !== dist) return null;
  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
  const index = path.join(candidate, 'index.html');
  return fs.existsSync(index) ? index : null;
};
let localReferences = 0;
const checkReference = (reference, source, checkAnchor = true) => {
  if (!reference || reference === '#' || /^(?:mailto:|tel:|data:)/i.test(reference)) return;
  let url;
  try { url = new URL(reference, origin + source); } catch { errors.push(`${source}: invalid URL ${reference}`); return; }
  if (url.origin !== origin) return;
  localReferences++;
  const targetFile = fileFor(url.pathname);
  requireThat(Boolean(targetFile), `${source}: missing local target ${reference}`);
  if (targetFile && url.hash && checkAnchor && targetFile.endsWith('.html')) {
    const targetHtml = fs.readFileSync(targetFile, 'utf8');
    const id = decodeURIComponent(url.hash.slice(1));
    requireThat([...targetHtml.matchAll(/\bid="([^"]+)"/g)].some(match => match[1] === id), `${source}: missing anchor ${reference}`);
  }
};

const titles = new Set();
const descriptions = new Set();
let faqCount = 0;
for (const page of pages.values()) {
  const { route, html, ids, links, meta } = page;
  const isError = route === '/404.html';
  const title = text(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '');
  const description = meta.find(item => item.name === 'description')?.content;
  const language = tags(html, 'html')[0]?.lang;
  const robots = meta.find(item => item.name === 'robots')?.content ?? '';
  const canonical = canonicalOf(page);
  requireThat(['es-MX', 'en'].includes(language), `${route}: missing or unsupported language`);
  requireThat((html.match(/<h1\b/gi) ?? []).length === 1, `${route}: expected exactly one h1`);
  requireThat(tags(html, 'main').some(tag => tag.id === 'main'), `${route}: missing main content / skip-link target`);
  requireThat(Boolean(title) && !titles.has(title), `${route}: missing or repeated title`);
  requireThat(Boolean(description) && !descriptions.has(description), `${route}: missing or repeated description`);
  requireThat(Boolean(robots), `${route}: missing indexing instruction`);
  titles.add(title); descriptions.add(description);
  requireThat(!/\b(?:undefined|NaN)\b/.test(text(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ''))), `${route}: unresolved content value`);
  const allIds = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  requireThat(allIds.length === ids.size, `${route}: repeated HTML id`);
  for (const tag of tags(html, '[a-z][a-z0-9-]*')) {
    for (const attribute of ['aria-controls', 'aria-labelledby', 'aria-describedby']) {
      for (const id of (tag[attribute] ?? '').split(/\s+/).filter(Boolean)) requireThat(ids.has(id), `${route}: ${attribute} references missing id ${id}`);
    }
  }
  for (const image of tags(html, 'img')) {
    requireThat(Object.hasOwn(image, 'alt'), `${route}: image has no alt: ${image.src}`);
    requireThat(Number(image.width) > 0 && Number(image.height) > 0, `${route}: image has no dimensions: ${image.src}`);
  }
  const labels = new Set(tags(html, 'label').map(tag => tag.for));
  for (const field of [...tags(html, 'input'), ...tags(html, 'textarea'), ...tags(html, 'select')]) {
    requireThat(field.type === 'hidden' || labels.has(field.id) || field['aria-label'], `${route}: unlabeled form field ${field.name}`);
  }
  for (const anchor of tags(html, 'a')) {
    checkReference(anchor.href, route);
    requireThat(anchor.target !== '_blank' || /\bnoopener\b/.test(anchor.rel ?? ''), `${route}: new-tab link lacks noopener`);
  }
  for (const tag of [...tags(html, 'img'), ...tags(html, 'script')]) if (tag.src) checkReference(tag.src, route);
  for (const link of links) if (['stylesheet', 'preload', 'icon', 'apple-touch-icon'].includes(link.rel)) checkReference(link.href, route);
  for (const social of meta.filter(tag => ['og:image', 'og:url'].includes(tag.property))) {
    if (!(isError && social.property === 'og:url')) checkReference(social.content, route, false);
  }
  if (!isError) {
    requireThat(canonical === origin + route, `${route}: canonical does not match the page URL: ${canonical}`);
    const alternateLinks = links.filter(link => link.rel === 'alternate' && link.hreflang);
    for (const expected of ['es-MX', 'en', 'x-default']) requireThat(alternateLinks.some(link => link.hreflang === expected), `${route}: missing ${expected} hreflang`);
    requireThat(alternateLinks.some(link => link.hreflang === language && link.href === canonical), `${route}: missing self hreflang`);
    for (const alternate of alternateLinks) {
      checkReference(alternate.href, route, false);
      const alternatePage = pages.get(new URL(alternate.href).pathname);
      requireThat(Boolean(alternatePage) && alternatePage.links.some(link => link.rel === 'alternate' && link.href === canonical), `${route}: non-reciprocal hreflang ${alternate.href}`);
    }
  } else {
    warn(/noindex/.test(robots), '404: should remain noindex even when the production site becomes indexable');
    warn(!links.some(link => link.rel === 'alternate'), '404: should not declare a homepage as its translated equivalent');
  }
  const schemaScripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  requireThat(schemaScripts.length > 0, `${route}: missing JSON-LD`);
  for (const match of schemaScripts) {
    try {
      const schema = JSON.parse(match[1]);
      requireThat(schema['@context'] === 'https://schema.org' && Array.isArray(schema['@graph']), `${route}: invalid JSON-LD graph`);
      const graph = schema['@graph'] ?? [];
      requireThat(graph.some(node => node['@type'] === 'Organization'), `${route}: missing organization schema`);
      const visible = text(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ''));
      for (const faq of graph.filter(node => node['@type'] === 'FAQPage')) {
        for (const question of faq.mainEntity ?? []) {
          faqCount++;
          requireThat(visible.includes(text(question.name)) && visible.includes(text(question.acceptedAnswer?.text ?? '')), `${route}: FAQ schema differs from the visible answer`);
        }
      }
    } catch (error) { errors.push(`${route}: invalid JSON-LD: ${error.message}`); }
  }
  if (tags(html, 'form').length) {
    requireThat(/mailto:contacto@wedomarketing\.mx/.test(html), `${route}: no direct contact fallback`);
    requireThat(/No guardamos los datos|We do not store the information/.test(html), `${route}: contact preparation needs a clear explanation`);
    requireThat(/<noscript>/.test(html), `${route}: missing no-JavaScript fallback`);
  }
}

for (const cssFile of files.filter(file => file.endsWith('.css'))) {
  const route = '/' + path.relative(dist, cssFile).replaceAll(path.sep, '/');
  for (const match of fs.readFileSync(cssFile, 'utf8').matchAll(/url\(\s*['"]?([^\s)'";]+)['"]?\s*\)/g)) checkReference(match[1], route, false);
}
for (const required of ['robots.txt', 'sitemap.xml', 'llms.txt', '404.html']) requireThat(fs.existsSync(path.join(dist, required)), `Missing ${required}`);
if (fs.existsSync(path.join(dist, 'sitemap.xml'))) {
  const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => decode(match[1]));
  const expected = [...pages.values()].filter(page => page.route !== '/404.html').map(canonicalOf);
  requireThat(locations.length === new Set(locations).size, 'Sitemap has duplicate entries');
  requireThat(expected.every(url => locations.includes(url)) && locations.length === expected.length, 'Sitemap does not cover the canonical content pages exactly');
  for (const location of locations) checkReference(location, '/sitemap.xml', false);
  for (const match of sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const location = decode(match[1].match(/<loc>([^<]+)<\/loc>/)?.[1] ?? '');
    const alternates = tags(match[1], 'xhtml:link');
    warn(alternates.some(link => link.href === location), `Sitemap missing self hreflang: ${location}`);
  }
}
if (fs.existsSync(path.join(dist, 'robots.txt'))) requireThat(fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8').includes(`${origin}/sitemap.xml`), 'robots.txt uses a different sitemap host');
const socialFile = path.join(dist, 'assets/social-cover.png');
if (fs.existsSync(socialFile)) {
  const data = fs.readFileSync(socialFile);
  requireThat(data.readUInt32BE(16) === 1200 && data.readUInt32BE(20) === 630, 'Social image dimensions do not match Open Graph metadata');
}

for (const message of errors) console.error(`ERROR: ${message}`);
for (const message of [...new Set(warnings)]) console.warn(`WARN: ${message}`);
console.log(`${errors.length ? 'FAILED' : 'PASS'}: ${pages.size} HTML documents, ${localReferences} local references, ${faqCount} visible FAQ/schema answers. ${errors.length} errors; ${new Set(warnings).size} warnings.`);
console.log('Scope: static integrity, metadata and accessibility structure. Browser layout and interactions require a separate review.');
process.exitCode = errors.length ? 1 : 0;
