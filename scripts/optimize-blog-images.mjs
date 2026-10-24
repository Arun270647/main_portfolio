// Generates WebP versions of blog images so posts can keep referencing the original PNG/JPG.
//
// For every public/blog/<slug>/<name>.(png|jpg|jpeg) it writes, next to the original:
//   <name>.webp        at most 1400px wide, used in the post
//   <name>.thumb.webp  680px wide, used for the card on /blog
// and records every image's size in src/content/blog-images.json, which src/data/blog.ts
// reads to swap in the WebP files and set width/height. Outputs are gitignored and rebuilt
// before every dev/build run; unchanged images are skipped.

import { existsSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const BLOG = join(PUBLIC, 'blog');
const MANIFEST = join(ROOT, 'src', 'content', 'blog-images.json');

const FULL_WIDTH = 1400;
const THUMB_WIDTH = 680;
const QUALITY = 78;

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

const manifest = {};
const sources = existsSync(BLOG) ? walk(BLOG).filter((f) => /\.(png|jpe?g)$/i.test(f)) : [];
let written = 0;

for (const src of sources) {
  const base = src.replace(/\.(png|jpe?g)$/i, '');
  const full = `${base}.webp`;
  const thumb = `${base}.thumb.webp`;
  const jobs = [toWebp(src, full, FULL_WIDTH), toWebp(src, thumb, THUMB_WIDTH)].filter(Boolean);
  written += jobs.length;
  await Promise.all(jobs);
  const { width, height } = await sharp(full).metadata();
  const url = (p) => '/' + relative(PUBLIC, p).split('\\').join('/');
  manifest[url(src)] = { src: url(full), thumb: url(thumb), width, height };
}

writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
console.log(`blog images: ${sources.length} found, ${written} WebP files written`);
