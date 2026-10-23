import { Link } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { Blobs } from '../components/Blobs';
import { Reveal } from '../components/Reveal';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { breadcrumb } from '../utils/structuredData';
import { links } from '../data/portfolio';
import { publishedPosts, formatDate } from '../data/blog';

const tints = ['var(--must)', 'var(--gum)', 'var(--mint)', 'var(--tang)'];
const tilts = ['-1.2deg', '1deg', '-.6deg', '1.4deg'];

export default function Blog() {
  const posts = publishedPosts();
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <SEOHead
        title="Blog by Arun Vignesh | Build Stories from a Student CTO"
        description="Build stories, product lessons and behind-the-scenes notes from Arun Vignesh, CTO at TrackMy Tech: Track My Academy, client websites, internships and AI tools."
        path="/blog"
        schema={[breadcrumb([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])]}
      />
      <Blobs a="var(--mint)" b="var(--tang)" />
      <Nav shadow="var(--mint)" />

      <main id="main">
        <section style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: 'clamp(50px, 9vw, 110px) 20px 20px', maxWidth: 1100, margin: '0 auto' }}>
          <div className="mono drop" style={{ display: 'inline-flex', color: 'var(--mint)', border: '2px solid var(--mint)', borderRadius: 999, padding: '8px 16px' }}>blog — {posts.length} {posts.length === 1 ? 'story' : 'stories'} so far</div>
          <h1 className="display" style={{ margin: '24px 0 0', fontSize: 'clamp(52px, 11vw, 170px)' }}>
            <span className="drop chrome-mint" style={{ display: 'block', '--d': '.1s' }}>build</span>
            <span className="drop chrome-cream" style={{ display: 'block', '--d': '.28s' }}>stories</span>
          </h1>
          <p className="drop" style={{ maxWidth: 620, margin: '36px auto 0', fontSize: 19, lineHeight: 1.5, '--d': '.5s' }}>
            What I built, what broke, and what I'd do differently. Written for humans, not for search engines.
          </p>
        </section>

        <section style={{ position: 'relative', zIndex: 1, padding: '40px 20px 110px', maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 30 }}>
          {posts.length === 0 && (
            <p className="mono" style={{ textAlign: 'center', gridColumn: '1 / -1' }}>first story lands soon ✦</p>
          )}
          {posts.map((p, i) => (
            <Reveal key={p.slug} kind="pop" delay={(i % 3) * 90} style={{ display: 'flex' }}>
              <Link to={`/blog/${p.slug}`} className="card" style={{ flex: 1, background: tints[i % tints.length], transform: `rotate(${tilts[i % tilts.length]})` }}>
                {p.cover && <div className="shot" style={{ padding: 0, background: 'var(--ink)' }}><img src={p.cover} alt="" loading="lazy" /></div>}
                <div className="mono" style={{ fontSize: 11, marginTop: 16 }}>{formatDate(p.date)} · {p.readMins} min read</div>
                <h2 style={{ fontFamily: 'var(--display)', fontWeight: 400, textTransform: 'uppercase', lineHeight: 1, fontSize: 26, margin: '10px 0 10px' }}>{p.title}</h2>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.45 }}>{p.excerpt}</p>
                {p.tags.length > 0 && (
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'auto', paddingTop: 16 }}>
                    {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                )}
              </Link>
            </Reveal>
          ))}
        </section>
      </main>

      <Footer title="read more?" buttons={[
        { label: 'see the work →', href: '/projects', bg: 'dark' },
        { label: 'follow on linkedin', href: links.linkedin, bg: 'var(--mint)', external: true },
      ]} />
    </div>
  );
}
