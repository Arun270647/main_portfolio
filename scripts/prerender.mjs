/**
 * Post-build prerender.
 *
 * Serves `dist/` locally, opens every known route in headless Chrome, waits for
 * react-helmet-async to inject the page's <title>/<meta>/<link rel="canonical">,
 * and writes the fully rendered document to `dist/<route>/index.html`.
 *
 * Vercel serves static files before applying the SPA rewrite in vercel.json, so
 * crawlers hitting /about, /blog/<slug>, ... get route-specific HTML, while
 * unknown routes still fall back to /index.html.
 *
 * Locally this uses the Chrome bundled with `puppeteer`. On Vercel (Linux build
 * image without Chrome's shared libs) it falls back to `@sparticuz/chromium`.
 */
import { createServer } from 'node:http';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SITE_ORIGIN = 'https://www.arunvignesh.my';

const STATIC_ROUTES = ['/', '/about', '/skills', '/projects', '/certificates', '/experience', '/contact', '/blog'];

/** Derive blog slugs from the `blogPosts` array in src/pages/BlogPost.tsx. */
const blogSlugs = () => {
  const source = readFileSync(join(ROOT, 'src/pages/BlogPost.tsx'), 'utf8');
  const slugs = [...source.matchAll(/^\s*slug:\s*['"]([^'"]+)['"]/gm)].map((m) => m[1]);
  if (slugs.length === 0) throw new Error('prerender: no blog slugs found in src/pages/BlogPost.tsx');
  return slugs;
};

const routes = [...STATIC_ROUTES, ...blogSlugs().map((slug) => `/blog/${slug}`)];

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.ico': 'image/x-icon', '.webp': 'image/webp', '.woff': 'font/woff',
  '.woff2': 'font/woff2', '.txt': 'text/plain', '.xml': 'application/xml', '.pdf': 'application/pdf',
};

/** Minimal static server with SPA fallback, mirroring the Vercel rewrite. */
const startServer = () =>
  new Promise((resolveServer) => {
    const server = createServer((req, res) => {
      const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      let filePath = join(DIST, urlPath);
      if (!existsSync(filePath) || statSync(filePath).isDirectory()) filePath = join(DIST, 'index.html');
      res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] ?? 'application/octet-stream' });
      res.end(readFileSync(filePath));
    });
    server.listen(0, '127.0.0.1', () => resolveServer(server));
  });

const launchBrowser = async () => {
  const onVercel = Boolean(process.env.VERCEL) || process.env.PRERENDER_USE_SPARTICUZ === '1';
  if (!onVercel) {
    try {
      const puppeteer = (await import('puppeteer')).default;
      return await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    } catch (err) {
      console.warn('prerender: bundled puppeteer Chrome failed to launch, trying @sparticuz/chromium:', err.message);
    }
  }
  const [{ default: chromium }, { default: puppeteerCore }] = await Promise.all([
    import('@sparticuz/chromium'),
    import('puppeteer-core'),
  ]);
  return puppeteerCore.launch({
    args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: await chromium.executablePath(),
    headless: true,
  });
};

const canonicalFor = (route) => (route === '/' ? SITE_ORIGIN : `${SITE_ORIGIN}${route}`);

/**
 * Remove the generic tags from index.html that Helmet duplicates per page, so
 * the prerendered head has exactly one title/description/og/twitter set.
 */
const dedupeHead = (html) => {
  const helmetMeta = new Set();
  for (const m of html.matchAll(/<meta\s+([^>]*?)data-rh="true"([^>]*)>/g)) {
    const attrs = m[1] + m[2];
    const key = attrs.match(/\b(?:name|property)="([^"]+)"/)?.[1];
    if (key) helmetMeta.add(key);
  }
  let out = html;
  for (const key of helmetMeta) {
    const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp('\\s*<meta\\s+(?![^>]*data-rh)(?:name|property)="' + escaped + '"[^>]*>', 'g');
    out = out.replace(re, '');
  }
  return out;
};

const outputPathFor = (route) => join(DIST, ...route.split('/').filter(Boolean), 'index.html');

const main = () => startServer().then(async (server) => {
  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;
  const browser = await launchBrowser();
  const failures = [];

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      page.setDefaultTimeout(30_000);
      await page.setViewport({ width: 1280, height: 800 });
      try {
        await page.goto(`${base}${route}`, { waitUntil: 'networkidle0' });
        const expected = canonicalFor(route);
        await page.waitForFunction(
          (href) => {
            const canonical = document.querySelector('link[rel="canonical"][data-rh="true"]');
            const hasContent = (document.getElementById('root')?.textContent ?? '').trim().length > 0;
            return canonical?.getAttribute('href') === href && hasContent;
          },
          {},
          expected,
        );
        // Scroll through the page so framer-motion `whileInView` sections finish
        // their entrance animations before the snapshot, then return to the top.
        await page.evaluate(async () => {
          const step = window.innerHeight / 2;
          for (let y = 0; y < document.body.scrollHeight; y += step) {
            window.scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 80));
          }
          window.scrollTo(0, 0);
        });
        await new Promise((r) => setTimeout(r, 1200));
        const html = dedupeHead(await page.content());
        const outPath = outputPathFor(route);
        mkdirSync(dirname(outPath), { recursive: true });
        writeFileSync(outPath, html.startsWith('<!DOCTYPE') ? html : `<!DOCTYPE html>\n${html}`);
        console.log(`prerendered ${route} -> ${outPath.slice(ROOT.length + 1)}`);
      } catch (err) {
        failures.push(route);
        console.error(`prerender FAILED ${route}: ${err.message}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  if (failures.length) {
    console.error(`prerender: ${failures.length} route(s) failed: ${failures.join(', ')}`);
    process.exit(1);
  }
  console.log(`prerender: ${routes.length} routes written`);
});

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
