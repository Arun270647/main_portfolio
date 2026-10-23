import { Link } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { Blobs } from '../components/Blobs';
import { SEOHead } from '../components/SEOHead';

const where = [
  ['home', '/', 'var(--must)'],
  ['about', '/about', 'var(--gum)'],
  ['work', '/projects', 'var(--mint)'],
  ['xp', '/experience', 'var(--tang)'],
];

export default function NotFound() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <SEOHead title="Lost? | Arun Vignesh" description="That page does not exist." path="/404" noindex />
      <Blobs a="var(--gum)" b="var(--tang)" />
      <Nav shadow="var(--gum)" />
      <main id="main" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: 'clamp(60px, 12vw, 160px) 20px 120px', maxWidth: 900, margin: '0 auto' }}>
        <div className="mono drop" style={{ display: 'inline-flex', color: 'var(--gum)', border: '2px solid var(--gum)', borderRadius: 999, padding: '8px 16px' }}>404 — nothing here</div>
        <h1 className="display chrome-gum drop" style={{ margin: '24px 0 0', fontSize: 'clamp(72px, 16vw, 240px)', '--d': '.1s' }}>lost?</h1>
        <p className="drop" style={{ margin: '34px auto 0', maxWidth: 520, fontSize: 'clamp(17px, 1.6vw, 22px)', lineHeight: 1.45, fontWeight: 500, '--d': '.4s' }}>
          That URL went the way of my sleep schedule. Pick a real page:
        </p>
        <div className="drop" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 34, '--d': '.6s' }}>
          {where.map(([label, to, bg]) => (
            <Link key={to} to={to} className="footer-btn" style={{ background: bg }}>{label} →</Link>
          ))}
        </div>
      </main>
    </div>
  );
}
