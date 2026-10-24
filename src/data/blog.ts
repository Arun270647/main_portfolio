// Blog posts live as Markdown files in src/content/blog/*.md with a small front-matter block:
//
// ---
// title: I built Tinder for attendance. Then I swiped left on it.
// slug: tinder-for-attendance
// date: 2026-10-31T10:45:00+05:30   (publish time; the post stays hidden until then)
// cover: /blog/tinder-for-attendance/cover.png
// excerpt: One-line summary for the list page and social cards.
// tags: Track My Academy, UX
// linkedin: https://www.linkedin.com/pulse/...   (optional, added once it is live there)
// ---

export type Post = {
  slug: string;
  title: string;
  date: string;
  cover?: string;
  excerpt: string;
  tags: string[];
  linkedin?: string;
  body: string;
  readMins: number;
};

export type BlogImage = { src: string; thumb?: string; width?: number; height?: number };

// Written by scripts/optimize-blog-images.mjs before dev/build; missing (e.g. a bare typecheck) means originals are used.
const imageManifest = (Object.values(
  import.meta.glob('../content/blog-images.json', { import: 'default', eager: true }),
)[0] ?? {}) as Record<string, Required<BlogImage>>;

/** WebP version and intrinsic size of a /blog/... image, falling back to the original file. */
export const blogImage = (src: string): BlogImage => imageManifest[src] ?? { src };

const sizeAttrs = (img: BlogImage) => (img.width ? ` width="${img.width}" height="${img.height}"` : '');

const files = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

function parse(raw: string): Post | null {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return null;
  const meta: Record<string, string> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  if (!meta.title || !meta.slug || !meta.date) return null;
  const body = m[2].trim();
  return {
    slug: meta.slug,
    title: meta.title,
    date: meta.date,
    cover: meta.cover || undefined,
    excerpt: meta.excerpt || '',
    tags: meta.tags ? meta.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
    linkedin: meta.linkedin || undefined,
    body,
    readMins: Math.max(1, Math.round(body.split(/\s+/).length / 220)),
  };
}

const all: Post[] = Object.values(files)
  .map(parse)
  .filter((p): p is Post => p !== null)
  .sort((a, b) => +new Date(b.date) - +new Date(a.date));

/** Posts whose publish time has passed, newest first. Future-dated posts stay hidden. */
export const publishedPosts = (now = new Date()) => all.filter(p => new Date(p.date) <= now);

export const findPost = (slug: string, now = new Date()) => publishedPosts(now).find(p => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata' });

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Inline Markdown: links, bold, italic, inline code. Input is escaped first. */
const inline = (s: string) =>
  esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]*)\)/g, (_m, t, u) =>
      `<a href="${u}"${u.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${t}</a>`);

/** Small Markdown renderer for our own posts: ## / ### headings, paragraphs, lists, images, quotes. */
export function renderMarkdown(md: string): string {
  const out: string[] = [];
  const blocks = md.split(/\r?\n\s*\r?\n/);
  for (const block of blocks) {
    const lines = block.split(/\r?\n/).filter(l => l.trim() !== '');
    if (!lines.length) continue;
    const first = lines[0];
    let h;
    if ((h = first.match(/^(#{2,3})\s+(.*)$/)) && lines.length === 1) {
      out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`);
    } else if (lines.every(l => /^\d+\.\s+/.test(l))) {
      out.push(`<ol>${lines.map(l => `<li>${inline(l.replace(/^\d+\.\s+/, ''))}</li>`).join('')}</ol>`);
    } else if (lines.every(l => /^[-*]\s+/.test(l))) {
      out.push(`<ul>${lines.map(l => `<li>${inline(l.replace(/^[-*]\s+/, ''))}</li>`).join('')}</ul>`);
    } else if (lines.every(l => /^>\s?/.test(l))) {
      out.push(`<blockquote>${inline(lines.map(l => l.replace(/^>\s?/, '')).join(' '))}</blockquote>`);
    } else if ((h = first.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/)) && lines.length === 1) {
      const img = blogImage(h[2]);
      out.push(`<figure><img src="${img.src}"${sizeAttrs(img)} alt="${esc(h[1])}" loading="lazy" decoding="async" />${h[1] ? `<figcaption>${esc(h[1])}</figcaption>` : ''}</figure>`);
    } else {
      out.push(`<p>${lines.map(inline).join('<br />')}</p>`);
    }
  }
  return out.join('\n');
}
