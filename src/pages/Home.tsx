import { Link } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { Blobs } from '../components/Blobs';
import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';
import { AdviceButton } from '../components/AdviceModal';
import { ProjectCard } from '../components/ProjectCard';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { person, website, profilePage } from '../utils/structuredData';
import { projects, roles, links } from '../data/portfolio';

const sticker = (bg: string): React.CSSProperties => ({ position: 'absolute', background: bg, color: 'var(--ink)', fontFamily: 'var(--display)', fontSize: 15, padding: '12px 18px', borderRadius: 999, boxShadow: '0 5px 0 var(--ink)' });
const pillRow = ['var(--must)', 'var(--gum)', 'var(--mint)', 'var(--tang)', 'var(--must)'];

export default function Home() {
  const featured = projects.filter(p => p.featured).slice(0, 4);
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <SEOHead
        title="Arun Vignesh | Full-Stack Developer, Chennai"
        description="Full-stack web developer and BCA student in Chennai building fast React apps for academies, e-commerce brands and agencies. 11 live projects, open for freelance and full-time."
        path="/"
        schema={[person, website, profilePage]}
      />
      <Blobs />
      <Nav shadow="var(--tang)" />

      <main id="main">
      {/* HERO */}
      <section style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: 'clamp(50px, 9vw, 120px) 20px 30px', maxWidth: 1300, margin: '0 auto' }}>
        <div className="mono drop" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--mint)', border: '2px solid var(--mint)', borderRadius: 999, padding: '8px 16px' }}>
          <span className="blink" style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--mint)' }} />open for freelance + full-time
        </div>
        <h1 className="display" style={{ margin: '24px 0 0', lineHeight: .88, fontSize: 'clamp(64px, 13vw, 210px)' }}>
          <span className="drop chrome-gum" style={{ display: 'block', '--d': '.1s' }}>Arun</span>
          <span className="drop chrome-must" style={{ display: 'block', '--d': '.28s' }}>Vignesh</span>
        </h1>
        <p className="drop" style={{ margin: '34px auto 0', maxWidth: 620, fontSize: 'clamp(18px, 1.7vw, 24px)', lineHeight: 1.4, fontWeight: 500, '--d': '.55s' }}>
          Full-stack dev + BCA student in Chennai. I turn briefs into fast, shiny React apps for academies, e-com brands and filmmakers. Sometimes I teach a webcam to play cricket.
        </p>
        <div className="drop" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 34, '--d': '.7s' }}>
          <Link to="/projects" className="btn tang">see the work</Link>
          <AdviceButton />
        </div>

        {/* photo blob + stickers */}
        <div className="popin" style={{ position: 'relative', width: 'min(100%, 420px)', aspectRatio: '1', margin: '70px auto 0', '--d': '.5s' }}>
          <div className="blobby" style={{ position: 'absolute', inset: 0, background: 'var(--tang)', transform: 'rotate(8deg)' }} />
          <div className="blobby" style={{ position: 'absolute', inset: 14, overflow: 'hidden', background: 'var(--ink-2)', '--d': '1s' }}>
            <img src="/me.jpg" alt="Arun Vignesh" width={840} height={840} fetchPriority="high" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="bob" style={{ ...sticker('var(--must)'), left: -40, top: 30, '--r': '-10deg' }}>15+ projects</div>
          <div className="bob" style={{ ...sticker('var(--mint)'), right: -50, top: 110, '--r': '8deg', '--d': '.7s' }}>2+ yrs</div>
          <div className="bob" style={{ ...sticker('var(--gum)'), left: -10, bottom: 30, '--r': '5deg', '--d': '1.3s' }}>chennai, IN</div>
          <div className="spin mono" aria-hidden style={{ position: 'absolute', right: -20, bottom: -20, width: 96, height: 96, borderRadius: '50%', background: 'var(--cream)', color: 'var(--ink)', display: 'grid', placeItems: 'center', fontSize: 10, textAlign: 'center', lineHeight: 1.1, letterSpacing: '.08em' }}>✦ hire ✦<br />me ✦<br />pls ✦</div>
        </div>
      </section>

      <Marquee text="React ● Node ● Firebase ● TypeScript ● Tailwind ● TensorFlow.js ● MediaPipe ● Vite ●" bg="var(--must)" margin="60px 0 0" />

      {/* ABOUT teaser: trading card */}
      <section id="about" style={{ position: 'relative', zIndex: 1, padding: '110px 20px', maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 50, alignItems: 'center' }}>
        <Reveal kind="pop" style={{ background: 'var(--cream)', color: 'var(--ink)', borderRadius: 28, padding: 22, boxShadow: '0 14px 0 var(--gum)', transform: 'rotate(-4deg)' }}>
          <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}><span>player card</span><span>#001</span></div>
          <div className="shot" style={{ margin: '14px 0', aspectRatio: '1', background: 'repeating-linear-gradient(45deg, #ffe7c2 0 12px, var(--cream) 12px 24px)' }}>
            <img src="/me-goofy.jpg" alt="Arun, goofy portrait" loading="lazy" width={400} height={400} />
          </div>
          <div className="display" style={{ fontSize: 28, lineHeight: 1, textTransform: 'none' }}>Arun V.</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 14px', marginTop: 14, fontSize: 15, fontWeight: 500 }}>
            <span>curiosity</span><b style={{ color: 'var(--tang)' }}>99</b>
            <span>shipping speed</span><b style={{ color: 'var(--tang)' }}>92</b>
            <span>sleep</span><b style={{ color: 'var(--tang)' }}>12</b>
            <span>coffee</span><b style={{ color: 'var(--tang)' }}>∞</b>
          </div>
        </Reveal>
        <div>
          <Reveal className="mono" style={{ color: 'var(--gum)', marginBottom: 14 }}>01 — about</Reveal>
          <Reveal as="h2" className="display h2-cream" style={{ margin: '0 0 26px', fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: .95 }}>hands-on,<br />heads-down.</Reveal>
          <Reveal as="p" style={{ margin: '0 0 16px', fontSize: 'clamp(17px, 1.5vw, 21px)', lineHeight: 1.5 }}>I'm a Full-Stack Web Developer and BCA student who learns by building real things for real clients — management platforms, storefronts, agency sites, portfolios.</Reveal>
          <Reveal as="p" style={{ margin: '0 0 30px', fontSize: 'clamp(17px, 1.5vw, 21px)', lineHeight: 1.5, color: 'var(--cream-2)' }}>Strong curiosity, zero fear of the docs. New tool drops, I'm already poking at it.</Reveal>
          <Reveal style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', fontWeight: 700, fontSize: 14 }}>
            {[['15+ projects', 'var(--tang)', '-3deg', '0s'], ['7 certs', 'var(--mint)', '2deg', '.4s'], ['8 happy clients', 'var(--gum)', '-2deg', '.8s']].map(([t, bg, r, d]) => (
              <span key={t} className="squish" style={{ padding: '10px 16px', borderRadius: 999, background: bg, color: 'var(--ink)', '--r': r, '--d': d }}>{t}</span>
            ))}
            <Link to="/about" style={{ marginLeft: 6, color: 'var(--cream)', textDecoration: 'none', borderBottom: '3px solid var(--gum)', fontSize: 16 }}>the long version →</Link>
          </Reveal>
        </div>
      </section>

      {/* WORK strip */}
      <section id="work" style={{ position: 'relative', zIndex: 1, padding: '40px 0 110px' }}>
        <Reveal style={{ padding: '0 20px', maxWidth: 1100, margin: '0 auto 40px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <div>
            <div className="mono" style={{ color: 'var(--mint)', marginBottom: 14 }}>02 — work</div>
            <h2 className="display h2-must" style={{ margin: 0, fontSize: 'clamp(44px, 7vw, 100px)' }}>shipped &amp; live</h2>
          </div>
          <Link to="/projects" style={{ fontWeight: 700, fontSize: 16, color: 'var(--cream)', textDecoration: 'none', borderBottom: '3px solid var(--tang)' }}>all {projects.length} projects →</Link>
        </Reveal>
        <div className="strip">
          {featured.map((p, i) => (
            <Reveal key={p.id} kind="up" delay={i * 80}>
              <ProjectCard p={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* XP pills */}
      <section id="xp" style={{ position: 'relative', zIndex: 1, padding: '20px 20px 120px', maxWidth: 1100, margin: '0 auto' }}>
        <Reveal className="mono" style={{ color: 'var(--tang)', marginBottom: 14 }}>03 — experience</Reveal>
        <Reveal style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 40 }}>
          <h2 className="display h2-gum" style={{ margin: 0, fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: .95 }}>the receipts</h2>
          <Link to="/experience" style={{ fontWeight: 700, fontSize: 16, color: 'var(--cream)', textDecoration: 'none', borderBottom: '3px solid var(--mint)' }}>full timeline →</Link>
        </Reveal>
        <div style={{ display: 'grid', gap: 14 }}>
          {roles.slice(0, 5).map((r, i) => (
            <Reveal key={r.role + r.company} kind="left" delay={i * 60} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', padding: '20px 28px', borderRadius: 999, background: 'var(--cream)', color: 'var(--ink)', transform: `rotate(${[-1, .8, -.6, 1.2, -1][i]}deg)`, marginLeft: `${[0, 4, 1, 6, 2][i]}%` }}>
              <span className="display" style={{ fontSize: 'clamp(18px, 2.2vw, 26px)', textTransform: 'none' }}>{r.role}</span>
              <span style={{ fontWeight: 700 }}>{r.company}</span>
              <span className="mono" style={{ fontSize: 13, letterSpacing: 0, textTransform: 'none' }}>{r.period}</span>
            </Reveal>
          ))}
        </div>
      </section>

      </main>
      <Footer id="contact" title="say hi!" buttons={[
        { label: 'email', href: links.email, bg: 'dark' },
        { label: 'github', href: links.github, bg: 'var(--must)', external: true },
        { label: 'linkedin', href: links.linkedin, bg: 'var(--gum)', external: true },
        { label: 'instagram', href: links.instagram, bg: 'var(--mint)', external: true },
      ]} />
    </div>
  );
}
