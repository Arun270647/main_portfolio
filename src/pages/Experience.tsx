import { Link } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { Blobs } from '../components/Blobs';
import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { person, webPage, breadcrumb } from '../utils/structuredData';
import { roles, links } from '../data/portfolio';

const colors = ['var(--mint)', 'var(--gum)', 'var(--must)', 'var(--cream)', 'var(--tang)', 'var(--ink-2)'];
const rots = ['1deg', '-1deg', '.8deg', '-.7deg', '1.2deg', '-1.2deg'];

export default function Experience() {
  return (
    // overflow: clip (not hidden): hidden turns this div into the scroll container and the sticky year badges stop sticking
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'clip' }}>
      <SEOHead
        title="Experience | Arun Vignesh, Full-Stack Developer and CTO"
        description="Six roles since Sep 2024 across TrackMy Tech, Track My Academy, Marina Digital, Corizo and Novitech: AI/ML research, web development, product management, and now CTO at TrackMy Tech."
        path="/experience"
        schema={[person, webPage('Experience of Arun Vignesh', 'Six roles since Sep 2024, newest first.', '/experience'), breadcrumb([{ name: 'Home', path: '/' }, { name: 'Experience', path: '/experience' }])]}
      />
      <Blobs a="var(--mint)" b="var(--tang)" />
      <Nav shadow="var(--mint)" />

      <main id="main">
      <section style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: 'clamp(50px, 9vw, 110px) 20px 20px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="mono drop" style={{ display: 'inline-flex', color: 'var(--mint)', border: '2px solid var(--mint)', borderRadius: 999, padding: '8px 16px' }}>experience — sep 2024 → now</div>
        <h1 className="display" style={{ margin: '24px 0 0', fontSize: 'clamp(48px, 9.5vw, 150px)' }}>
          <span className="drop chrome-cream" style={{ display: 'block', '--d': '.1s' }}>where I've</span>
          <span className="drop chrome-mint" style={{ display: 'block', '--d': '.28s' }}>worked</span>
        </h1>
        <p className="drop" style={{ margin: '34px auto 0', maxWidth: 560, fontSize: 'clamp(17px, 1.6vw, 22px)', lineHeight: 1.45, fontWeight: 500, '--d': '.65s' }}>Six roles since Sep 2024: internships, client builds, product work and engineering leadership. Newest first.</p>
      </section>

      {/* timeline */}
      <section style={{ position: 'relative', zIndex: 1, padding: '70px 20px 90px', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 10, borderRadius: 999, background: 'var(--cream)', opacity: .18, transform: 'translateX(-50%)' }} />
        {roles.map((r, i) => {
          const left = i % 2 === 0; // year badge on the left, card on the right
          const bg = colors[i];
          const dark = bg === 'var(--ink-2)';
          const badge = (
            <div className="sticky-wide" style={{ textAlign: left ? 'right' : 'left', alignSelf: 'start', top: 120, display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', justifyContent: left ? 'flex-end' : 'flex-start' }}>
              <div className="display bob" style={{ display: 'inline-block', background: bg, color: dark ? 'var(--cream)' : 'var(--ink)', border: dark ? '3px solid var(--cream)' : 0, fontSize: 'clamp(28px, 4vw, 54px)', padding: '8px 22px', borderRadius: 999, boxShadow: `0 6px 0 ${dark ? 'var(--mint)' : bg === 'var(--cream)' ? 'var(--tang)' : 'var(--cream)'}`, '--r': `${left ? -3 : 3}deg`, '--d': `${i * .6}s`, animationDuration: '5s' }}>{r.year}</div>
              {r.badge && <div className="display" style={{ background: 'var(--tang)', color: 'var(--ink)', fontSize: 13, padding: '8px 14px', borderRadius: 999, boxShadow: '0 4px 0 var(--cream)', transform: 'rotate(-6deg)' }}>{r.badge}</div>}
              {r.current && <div className="mono" style={{ width: '100%', fontSize: 12, color: bg, display: 'flex', gap: 8, alignItems: 'center', justifyContent: left ? 'flex-end' : 'flex-start' }}><span className="blink" style={{ width: 8, height: 8, borderRadius: '50%', background: bg }} />current</div>}
            </div>
          );
          const card = (
            <div className="card" style={{ background: bg, color: dark ? 'var(--cream)' : 'var(--ink)', border: dark ? '3px solid var(--cream)' : 0, borderRadius: left ? '32px 32px 32px 8px' : '32px 32px 8px 32px', padding: 28, boxShadow: `0 12px 0 ${dark ? 'var(--mint)' : bg === 'var(--cream)' ? 'var(--tang)' : 'var(--cream)'}`, transform: `rotate(${rots[i]})` }}>
              <div className="mono" style={{ fontSize: 12, letterSpacing: '.1em', color: dark ? 'var(--mint)' : undefined }}>{r.period}</div>
              <h3 className="display" style={{ margin: '8px 0 2px', fontSize: 'clamp(22px, 2.4vw, 30px)', lineHeight: 1.05, textTransform: 'none' }}>{r.role}</h3>
              <div style={{ fontWeight: 700, fontSize: 17 }}>{r.company}</div>
              <ul style={{ margin: '18px 0 0', paddingLeft: 20, fontSize: 16, lineHeight: 1.5, fontWeight: 500, display: 'grid', gap: 6 }}>{r.bullets.map(b => <li key={b}>{b}</li>)}</ul>
            </div>
          );
          return (
            <Reveal key={r.role + r.company} kind={left ? 'left' : 'right'} style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px 50px', marginBottom: i < roles.length - 1 ? 50 : 0 }}>
              {left ? <>{badge}{card}</> : <>{card}{badge}</>}
            </Reveal>
          );
        })}
      </section>

      <Marquee text="7 certifications ● full-stack web dev · rare minds ● pcap python · udemy ● android dev · corizo ● python essentials · openedg ● web dev · novitech ●" bg="var(--must)" speed={24} size="clamp(18px, 2.6vw, 30px)" margin="20px 0 70px" />
      <p style={{ position: 'relative', zIndex: 1, textAlign: 'center', margin: '-30px 20px 60px', fontWeight: 700 }}><Link to="/about#certificates" style={{ color: 'var(--cream)', textDecoration: 'none', borderBottom: '3px solid var(--must)' }}>see the certificates →</Link></p>

      </main>
      <Footer title="next role?" buttons={[
        { label: "let's talk →", href: links.email, bg: 'dark' },
        { label: 'resume ↓', href: links.resume, bg: 'var(--mint)' },
        { label: 'linkedin', href: links.linkedin, bg: 'var(--gum)', external: true },
        { label: 'see the work', href: '/projects', bg: 'var(--must)' },
      ]} />
    </div>
  );
}
