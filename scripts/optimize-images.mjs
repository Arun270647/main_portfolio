// Generates resized WebP versions of site images so code and posts can keep referencing the original PNG/JPG.
//
// For every PNG/JPG under each source folder (or each listed file) below it writes, next to the original:
//   <name>.webp        at most `width` px wide
//   <name>.thumb.webp  `thumb` px wide, when the folder sets one
// and records every image in src/content/images.json, which src/utils/images.ts reads to swap in
// the WebP files and set width/height. Outputs are gitignored and rebuilt before every dev/build
// run; unchanged images are skipped.

import { existsSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const MANIFEST = join(ROOT, 'src', 'content', 'images.json');
const QUALITY = 78;

const SOURCES = [
  // Post covers and inline images (~740px column); the thumb is the card on /blog.
  { dir: 'blog', width: 1400, thumb: 680 },
  // Project card screenshots, shown at ~350px.
  { dir: 'projects', width: 800 },
  // Portraits (already 400px) and the home-page desk photo (up to ~1100px).
  { files: ['me.jpg', 'me-goofy.jpg', 'workspace.jpg'], width: 1400 },
];

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const fresh = (out, src) => existsSync(out) && statSync(out).mtimeMs >= statSync(src).mtimeMs;

const toWebp = (src, out, width) =>
  fresh(out, src)
    ? null
    : sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(out);

const url = (p) => '/' + relative(PUBLIC, p).split('\\').join('/');

const manifest = {};
let found = 0;
let written = 0;

for (const { dir, files: listed, width, thumb } of SOURCES) {
  const root = dir && join(PUBLIC, dir);
  const files = listed
    ? listed.map((f) => join(PUBLIC, f)).filter(existsSync)
    : existsSync(root) ? walk(root).filter((f) => /\.(png|jpe?g)$/i.test(f)) : [];
  found += files.length;
  for (const src of files) {
    const base = src.replace(/\.(png|jpe?g)$/i, '');
    const full = `${base}.webp`;
    const small = thumb && `${base}.thumb.webp`;
    const jobs = [toWebp(src, full, width), small && toWebp(src, small, thumb)].filter(Boolean);
    written += jobs.length;
    await Promise.all(jobs);
    const meta = await sharp(full).metadata();
    manifest[url(src)] = { src: url(full), ...(small && { thumb: url(small) }), width: meta.width, height: meta.height };
  }
}

writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
console.log(`images: ${found} found, ${written} WebP files written`);
