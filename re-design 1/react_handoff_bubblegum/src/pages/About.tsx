import { Nav } from '../components/Nav';
import { Blobs } from '../components/Blobs';
import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';
import { Footer } from '../components/Footer';
import { skills, links } from '../data/portfolio';

const lanes = [
  ['01', 'Full-stack builds', "React + TypeScript fronts, Node/Firebase backs, deployed on Vercel or Netlify. Fast, responsive, SEO'd, maintained after launch.", 'var(--tang)', '-1.5deg'],
  ['02', 'Product thinking', "Requirements, user stories, roadmaps, release calls. I've run a live SaaS product end-to-end, so I build with the whole lifecycle in mind.", 'var(--gum)', '1.2deg'],
  ['03', 'AI experiments', 'Gesture recognition, model training, weird browser demos. The playground where I learn stuff before it becomes a client ask.', 'var(--mint)', '-.8deg'],
];
const pillColors = ['var(--must)', 'var(--cream)', 'var(--gum)', 'var(--mint)', 'var(--tang)'];

export default function About() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <Blobs a="var(--must)" b="var(--mint)" />
      <Nav shadow="var(--must)" />

      <section style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: 'clamp(50px, 9vw, 110px) 20px 20px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="mono drop" style={{ display: 'inline-flex', color: 'var(--must)', border: '2px solid var(--must)', borderRadius: 999, padding: '8px 16px' }}>about — the long version</div>
        <h1 className="display" style={{ margin: '24px 0 0', fontSize: 'clamp(56px, 12vw, 180px)' }}>
          <span className="drop chrome-cream" style={{ display: 'block', ['--d' as any]: '.1s' }}>hi, I'm</span>
          <span className="drop chrome-mint" style={{ display: 'block', ['--d' as any]: '.28s' }}>Arun</span>
        </h1>
        <div className="popin" style={{ position: 'relative', width: 'min(100%, 380px)', aspectRatio: '1', margin: '60px auto 0', ['--d' as any]: '.5s' }}>
          <div className="blobby" style={{ position: 'absolute', inset: 0, background: 'var(--must)', transform: 'rotate(-8deg)' }} />
          <div className="blobby" style={{ position: 'absolute', inset: 14, overflow: 'hidden', background: 'var(--ink-2)', ['--d' as any]: '1s' }}>
            <img src="/me-goofy.jpg" alt="Arun, goofy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="bob" style={{ position: 'absolute', left: -40, top: 40, background: 'var(--tang)', color: 'var(--ink)', fontFamily: 'var(--display)', fontSize: 15, padding: '12px 18px', borderRadius: 999, boxShadow: '0 5px 0 var(--ink)', ['--r' as any]: '-10deg' }}>BCA student</div>
          <div className="bob" style={{ position: 'absolute', right: -44, bottom: 60, background: 'var(--gum)', color: 'var(--ink)', fontFamily: 'var(--display)', fontSize: 15, padding: '12px 18px', borderRadius: 999, boxShadow: '0 5px 0 var(--ink)', ['--r' as any]: '8deg', ['--d' as any]: '.7s' }}>est. chennai</div>
        </div>
      </section>

      {/* story bubbles */}
      <section style={{ position: 'relative', zIndex: 1, padding: '90px 20px 60px', maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 50, alignItems: 'start' }}>
        <Reveal kind="left" style={{ position: 'sticky', top: 110 }}>
          <div className="mono" style={{ color: 'var(--gum)', marginBottom: 14 }}>01 — story</div>
          <h2 className="display h2-cream" style={{ margin: 0, fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: .95 }}>student by day, shipper by 2 AM.</h2>
        </Reveal>
        <div style={{ display: 'grid', gap: 18, fontSize: 'clamp(17px, 1.4vw, 20px)', lineHeight: 1.5, fontWeight: 500 }}>
          <Reveal as="p" kind="pop" style={{ margin: 0, padding: '26px 28px', background: 'var(--cream)', color: 'var(--ink)', borderRadius: '28px 28px 28px 6px', boxShadow: '0 10px 0 var(--gum)', transform: 'rotate(-1deg)' }}>I'm Arun Vignesh — a Full-Stack Web Developer and BCA student from Chennai. I got into this by being too curious to leave anything alone, and I stayed because shipping things people actually use is addictive.</Reveal>
          <Reveal as="p" kind="pop" delay={80} style={{ margin: 0, padding: '26px 28px', background: 'var(--mint)', color: 'var(--ink)', borderRadius: '28px 28px 6px 28px', boxShadow: '0 10px 0 var(--cream)', transform: 'rotate(1deg)' }}>Since late 2024 I've gone intern → senior web dev → product manager at Track My Academy, while running freelance builds for Kyra Elite, Fufies and Marina Digitals. 15+ projects, 2+ years, zero lorem ipsum.</Reveal>
          <Reveal as="p" kind="pop" delay={160} style={{ margin: 0, padding: '26px 28px', background: 'var(--gum)', color: 'var(--ink)', borderRadius: '28px 28px 28px 6px', boxShadow: '0 10px 0 var(--must)', transform: 'rotate(-.6deg)' }}>On the side I poke at AI in the browser — my Hand Cricket game reads your fingers through the webcam with MediaPipe + TensorFlow.js. Equal parts research and nonsense.</Reveal>
        </div>
      </section>

      {/* lanes */}
      <section style={{ position: 'relative', zIndex: 1, padding: '40px 20px 90px', maxWidth: 1100, margin: '0 auto' }}>
        <Reveal className="mono" style={{ color: 'var(--mint)', marginBottom: 14 }}>02 — what I do</Reveal>
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

      {/* candy jar */}
      <section style={{ position: 'relative', zIndex: 1, padding: '20px 20px 100px', maxWidth: 1100, margin: '0 auto' }}>
        <Reveal className="mono" style={{ color: 'var(--tang)', marginBottom: 14 }}>03 — toolbox</Reveal>
        <Reveal as="h2" className="display h2-gum" style={{ margin: '0 0 40px', fontSize: 'clamp(40px, 6.5vw, 92px)' }}>candy jar</Reveal>
        <Reveal style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 10px' }}>
          {skills.map((s, i) => (
            <span key={s} className="pill squish" style={{ background: pillColors[i % pillColors.length], ['--r' as any]: `${(i % 2 ? 1 : -1) * (1 + (i % 3))}deg`, ['--d' as any]: `${i * .2}s` }}>{s}</span>
          ))}
        </Reveal>
      </section>

      <Marquee text="∞ coffee ● 2 AM commits ● restarts laptop for emotional support ● reads docs for fun ● suspicious when it compiles first try ●" bg="var(--gum)" tilt={-1.2} speed={26} size="clamp(18px, 2.6vw, 30px)" margin="0 0 60px" />

      {/* currently */}
      <section style={{ position: 'relative', zIndex: 1, padding: '20px 20px 110px', maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 22 }}>
        {[
          ['currently', 'var(--mint)', 'Product Manager @ Track My Academy', '+ Senior Web Dev @ Marina Digitals', '-.8deg', true],
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

      <Footer title="now the work" buttons={[
        { label: 'projects →', href: '/projects', bg: 'dark' },
        { label: 'experience →', href: '/experience', bg: 'var(--mint)' },
        { label: 'email me', href: links.email, bg: 'var(--must)' },
      ]} />
    </div>
  );
}
