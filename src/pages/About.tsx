import { Nav } from '../components/Nav';
import { Blobs } from '../components/Blobs';
import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { person, webPage, breadcrumb } from '../utils/structuredData';
import { skills, links, certificates, stats } from '../data/portfolio';
import { SkillBars } from '../components/SkillBars';
import { CertCard } from '../components/CertCard';

const lanes = [
  ['01', 'Full-stack builds', "React + TypeScript fronts, Node/Firebase backs, deployed on Vercel or Netlify. Fast, responsive, SEO'd, maintained after launch.", 'var(--tang)', '-1.5deg'],
  ['02', 'Product thinking', "Requirements, user stories, roadmaps, release calls. I've run a live SaaS product end-to-end, so I build with the whole lifecycle in mind.", 'var(--gum)', '1.2deg'],
  ['03', 'AI experiments', 'Gesture recognition, model training, weird browser demos. The playground where I learn stuff before it becomes a client ask.', 'var(--mint)', '-.8deg'],
];
const pillColors = ['var(--must)', 'var(--cream)', 'var(--gum)', 'var(--mint)', 'var(--tang)'];

export default function About() {
  return (
    // overflow: clip (not hidden): hidden turns this div into the scroll container and the sticky heading stops sticking
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'clip' }}>
      <SEOHead
        title="About Arun Vignesh | Full-Stack Developer, CTO, BCA Student"
        description="Full-stack web developer and BCA student from Chennai. CTO at TrackMy Tech, senior software associate at Marina Digital, 15 shipped projects, 7 certifications."
        path="/about"
        schema={[person, webPage('About Arun Vignesh', 'Story, skills and what Arun is doing now.', '/about'), breadcrumb([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]}
      />
      <Blobs a="var(--must)" b="var(--mint)" />
      <Nav shadow="var(--must)" />

      <main id="main">
      {/* Same layout as the Home hero: name left, photo right (.hero classes in bubblegum.css) */}
      <section className="hero" style={{ position: 'relative', zIndex: 1, padding: 'clamp(30px, 5vw, 70px) clamp(20px, 3vw, 48px) 30px', maxWidth: 1400, margin: '0 auto' }}>
        <div className="hero-copy">
          {/* "hi, I'm" is narrower than Home's "Vignesh", so a bigger size fills the column the same way */}
          <h1 className="display hero-name" style={{ margin: 0, lineHeight: .88, fontSize: '24cqi' }}>
            <span className="drop chrome-cream" style={{ display: 'block', '--d': '.1s' }}>hi, I'm</span>
            <span className="drop chrome-mint" style={{ display: 'block', '--d': '.28s' }}>Arun</span>
          </h1>
        </div>
        <div className="popin" style={{ position: 'relative', width: 'min(90%, 460px)', aspectRatio: '1', margin: '0 auto', '--d': '.5s' }}>
          <div className="blobby" style={{ position: 'absolute', inset: 0, background: 'var(--must)', transform: 'rotate(-8deg)' }} />
          <div className="blobby" style={{ position: 'absolute', inset: 14, overflow: 'hidden', background: 'var(--ink-2)', '--d': '1s' }}>
            <img src="/me-goofy.jpg" alt="Arun, goofy" width={760} height={760} fetchPriority="high" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="bob" style={{ position: 'absolute', left: -40, top: 40, background: 'var(--tang)', color: 'var(--ink)', fontFamily: 'var(--display)', fontSize: 15, padding: '12px 18px', borderRadius: 999, boxShadow: '0 5px 0 var(--ink)', '--r': '-10deg' }}>BCA student</div>
          <div className="bob" style={{ position: 'absolute', right: -44, bottom: 60, background: 'var(--gum)', color: 'var(--ink)', fontFamily: 'var(--display)', fontSize: 15, padding: '12px 18px', borderRadius: 999, boxShadow: '0 5px 0 var(--ink)', '--r': '8deg', '--d': '.7s' }}>est. chennai</div>
        </div>
      </section>

      {/* story bubbles */}
      <section style={{ position: 'relative', zIndex: 1, padding: '90px 20px 60px', maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 50, alignItems: 'start' }}>
        <Reveal kind="left" className="sticky-wide" style={{ top: 110 }}>
          <h2 className="display h2-cream" style={{ margin: 0, fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: .95 }}>student by day, shipper by 2 AM.</h2>
        </Reveal>
        <div style={{ display: 'grid', gap: 18, fontSize: 'clamp(17px, 1.4vw, 20px)', lineHeight: 1.5, fontWeight: 500 }}>
          <Reveal as="p" kind="pop" style={{ margin: 0, padding: '26px 28px', background: 'var(--cream)', color: 'var(--ink)', borderRadius: '28px 28px 28px 6px', boxShadow: '0 10px 0 var(--gum)', transform: 'rotate(-1deg)' }}>I'm Arun Vignesh — a Full-Stack Web Developer and BCA student from Chennai. I got into this by being too curious to leave anything alone, and I stayed because shipping things people actually use is addictive.</Reveal>
          <Reveal as="p" kind="pop" delay={80} style={{ margin: 0, padding: '26px 28px', background: 'var(--mint)', color: 'var(--ink)', borderRadius: '28px 28px 6px 28px', boxShadow: '0 10px 0 var(--cream)', transform: 'rotate(1deg)' }}>These days I'm CTO at TrackMy Tech and a senior software associate at Marina Digital, and I still take on freelance builds for brands like Kyra Elite and Fufies. {stats.projects} projects, 2+ years, zero lorem ipsum.</Reveal>
          <Reveal as="p" kind="pop" delay={160} style={{ margin: 0, padding: '26px 28px', background: 'var(--gum)', color: 'var(--ink)', borderRadius: '28px 28px 28px 6px', boxShadow: '0 10px 0 var(--must)', transform: 'rotate(-.6deg)' }}>On the side I poke at AI in the browser — my Hand Cricket game reads your fingers through the webcam with MediaPipe + TensorFlow.js. Equal parts research and nonsense.</Reveal>
        </div>
      </section>

      {/* lanes */}
      <section style={{ position: 'relative', zIndex: 1, padding: '40px 20px 90px', maxWidth: 1100, margin: '0 auto' }}>
        <Reveal as="h2" className="display h2-must" style={{ margin: '0 0 44px', fontSize: 'clamp(40px, 6.5vw, 92px)' }}>three lanes</Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 26 }}>
          {lanes.map(([n, t, d, bg, r], i) => (
            <Reveal key={n} kind="pop" delay={i * 80} className="card" style={{ background: bg, padding: 28, transform: `rotate(${r})` }}>
              <div className="display" style={{ fontSize: 60, lineHeight: 1 }}>{n}</div>
              <h3 className="display" style={{ margin: '14px 0 10px', fontSize: 26, lineHeight: 1, textTransform: 'none' }}>{t}</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.45, fontWeight: 500 }}>{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* skill matrix */}
      <section id="toolbox" style={{ scrollMarginTop: 90, position: 'relative', zIndex: 1, padding: '20px 20px 60px', maxWidth: 1100, margin: '0 auto' }}>
        <Reveal as="h2" className="display h2-gum" style={{ margin: '0 0 40px', fontSize: 'clamp(40px, 6.5vw, 92px)' }}>the numbers</Reveal>
        <SkillBars />
      </section>

      {/* candy jar */}
      <section style={{ position: 'relative', zIndex: 1, padding: '20px 20px 100px', maxWidth: 1100, margin: '0 auto' }}>
        <Reveal as="h2" className="display h2-cream" style={{ margin: '0 0 40px', fontSize: 'clamp(40px, 6.5vw, 92px)' }}>candy jar</Reveal>
        <Reveal style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 10px' }}>
          {skills.map((s, i) => (
            <span key={s} className="pill squish" style={{ background: pillColors[i % pillColors.length], '--r': `${(i % 2 ? 1 : -1) * (1 + (i % 3))}deg`, '--d': `${i * .2}s` }}>{s}</span>
          ))}
        </Reveal>
      </section>

      {/* certificates */}
      <section id="certificates" style={{ scrollMarginTop: 90, position: 'relative', zIndex: 1, padding: '0 20px 100px', maxWidth: 1100, margin: '0 auto' }}>
        <Reveal as="h2" className="display h2-must" style={{ margin: '0 0 12px', fontSize: 'clamp(40px, 6.5vw, 92px)' }}>{certificates.length} certifications</Reveal>
        <Reveal as="p" style={{ margin: '0 0 40px', color: 'var(--cream-2)', fontWeight: 500, fontSize: 'clamp(16px, 1.3vw, 19px)' }}>Each one links to the credential.</Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 24 }}>
          {certificates.map((c, i) => (
            <Reveal key={c.title + c.issuer} kind="pop" delay={(i % 4) * 70} style={{ display: 'flex' }}><CertCard c={c} index={i} /></Reveal>
          ))}
        </div>
      </section>

      <Marquee text="∞ coffee ● 2 AM commits ● restarts laptop for emotional support ● reads docs for fun ● suspicious when it compiles first try ●" bg="var(--gum)" tilt={-1.2} speed={26} size="clamp(18px, 2.6vw, 30px)" margin="0 0 60px" />

      {/* currently */}
      <section style={{ position: 'relative', zIndex: 1, padding: '20px 20px 110px', maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 22 }}>
        {[
          ['currently', 'var(--mint)', 'CTO @ TrackMy Tech', '+ Senior Software Associate @ Marina Digital', '-.8deg', true],
          ['studying', 'var(--gum)', 'BCA — Bachelor of Computer Applications', 'Chennai, Tamil Nadu', '.9deg', false],
          ['open to', 'var(--must)', 'Freelance builds & full-time roles', 'Remote or Chennai · replies in 24h', '-.5deg', false],
        ].map(([k, c, t, s, r, live]) => (
          <Reveal key={k as string} style={{ border: '3px solid var(--cream)', borderRadius: 28, padding: 26, transform: `rotate(${r})` }}>
            <div className="mono" style={{ fontSize: 12, color: c as string, display: 'flex', gap: 8, alignItems: 'center' }}>{live && <span className="blink" style={{ width: 8, height: 8, borderRadius: '50%', background: c as string }} />}{k}</div>
            <div className="display" style={{ fontSize: 22, marginTop: 12, lineHeight: 1.1, textTransform: 'none' }}>{t}</div>
            <div style={{ marginTop: 8, color: 'var(--cream-2)', fontWeight: 500 }}>{s}</div>
          </Reveal>
        ))}
      </section>

      </main>
      <Footer title="now the work" buttons={[
        { label: 'projects →', href: '/projects', bg: 'dark' },
        { label: 'experience →', href: '/experience', bg: 'var(--mint)' },
        { label: 'email me', href: links.email, bg: 'var(--must)' },
      ]} />
    </div>
  );
}
