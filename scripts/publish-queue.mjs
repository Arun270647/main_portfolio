/**
 * Publishes due posts from blog-queue/.
 *
 * For every blog-queue/<slug>.md whose `date` has passed:
 *   git mv blog-queue/<slug>.md         -> src/content/blog/<slug>.md
 *   git mv blog-queue/assets/<slug>/*   -> public/blog/<slug>/
 * and adds https://www.arunvignesh.my/blog/<slug> to public/sitemap.xml.
 *
 * Prints the published slugs and, on GitHub Actions, writes them to the step
 * output `published` (comma-separated, empty when nothing was due).
 * PUBLISH_NOW=<ISO date> overrides the current time for testing.
 */
import { execFileSync } from 'node:child_process';
import { appendFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const QUEUE = join(ROOT, 'blog-queue');
const SITEMAP = join(ROOT, 'public', 'sitemap.xml');
const SITE = 'https://www.arunvignesh.my';
const now = process.env.PUBLISH_NOW ? new Date(process.env.PUBLISH_NOW) : new Date();

const git = (...args) => execFileSync('git', args, { cwd: ROOT, stdio: 'inherit' });

const frontMatter = (raw) => {
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
  const get = (k) => fm.match(new RegExp('^' + k + ':\\s*(.+)$', 'm'))?.[1]?.trim();
  return { slug: get('slug'), date: get('date') };
};

const due = readdirSync(QUEUE)
  .filter((f) => f.endsWith('.md') && f !== 'README.md')
  .map((f) => ({ file: f, ...frontMatter(readFileSync(join(QUEUE, f), 'utf8')) }))
  .filter((p) => {
    if (!p.slug || !p.date || p.file !== `${p.slug}.md`) {
      console.warn(`skipping ${p.file}: needs slug and date, and the file name must match the slug`);
      return false;
    }
    return new Date(p.date) <= now;
  })
  .sort((a, b) => new Date(a.date) - new Date(b.date));

let sitemap = readFileSync(SITEMAP, 'utf8');
const today = now.toISOString().slice(0, 10);

for (const { slug, date } of due) {
  git('mv', `blog-queue/${slug}.md`, `src/content/blog/${slug}.md`);

  const assets = join(QUEUE, 'assets', slug);
  if (existsSync(assets)) {
    mkdirSync(join(ROOT, 'public', 'blog', slug), { recursive: true });
    for (const f of readdirSync(assets)) git('mv', `blog-queue/assets/${slug}/${f}`, `public/blog/${slug}/${f}`);
  }

  const loc = `${SITE}/blog/${slug}`;
  if (!sitemap.includes(`<loc>${loc}</loc>`)) {
    const entry = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${date.slice(0, 10)}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
    sitemap = sitemap.replace('</urlset>', entry + '</urlset>');
  }
}

if (due.length) {
  sitemap = sitemap.replace(
    /(<loc>https:\/\/www\.arunvignesh\.my\/blog<\/loc>\s*<lastmod>)[^<]+/,
    `$1${today}`,
  );
  writeFileSync(SITEMAP, sitemap);
}

const published = due.map((p) => p.slug).join(',');
console.log(published ? `published: ${published}` : 'nothing due');
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `published=${published}\n`);
