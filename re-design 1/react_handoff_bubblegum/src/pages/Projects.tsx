import { useState } from 'react';
import { Nav } from '../components/Nav';
import { Blobs } from '../components/Blobs';
import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';
import { Footer } from '../components/Footer';
import { projects, links } from '../data/portfolio';

type Filter = 'all' | 'client' | 'play';
const filters: [Filter, string, string, string][] = [
  ['all', `all · ${projects.length}`, 'var(--must)', '-1.5deg'],
  ['client', `client work · ${projects.filter(p => p.category === 'client').length}`, 'var(--gum)', '1.2deg'],
  ['play', `games & AI · ${projects.filter(p => p.category === 'play').length}`, 'var(--mint)', '-.8deg'],
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');
  const shown = projects.filter(p => filter === 'all' || p.category === filter);
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <Blobs a="var(--gum)" b="var(--must)" />
      <Nav shadow="var(--gum)" />

      <section style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: 'clamp(50px, 9vw, 110px) 20px 20px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="mono drop" style={{ display: 'inline-flex', color: 'var(--gum)', border: '2px solid var(--gum)', borderRadius: 999, padding: '8px 16px' }}>work — {projects.length} things that went live</div>
        <h1 className="display" style={{ margin: '24px 0 0', fontSize: 'clamp(52px, 11vw, 170px)' }}>
          <span className="drop chrome-must" style={{ display: 'block', ['--d' as any]: '.1s', textShadow: '4px 4px 0 var(--ink), 8px 8px 0 var(--gum), 12px 12px 0 var(--ink)' }}>shipped</span>
          <span className="drop chrome-cream" style={{ display: 'block', ['--d' as any]: '.28s', textShadow: '4px 4px 0 var(--ink), 8px 8px 0 var(--mint), 12px 12px 0 var(--ink)' }}>&amp; live</span>
        </h1>
        <div className="drop" style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 44, fontWeight: 700, fontSize: 15, ['--d' as any]: '.6s' }}>
          {filters.map(([key, label, color, rot]) => {
            const on = filter === key;
            return (
              <button key={key} onClick={() => setFilter(key)} aria-pressed={on} style={{ padding: '12px 20px', borderRadius: 999, border: `2px solid ${on ? color : 'var(--cream)'}`, color: on ? 'var(--ink)' : 'var(--cream)', background: on ? color : 'transparent', boxShadow: on ? '0 5px 0 var(--cream)' : 'none', cursor: 'pointer', fontWeight: 700, transform: `rotate(${rot})`, transition: 'transform .2s var(--spring)' }}>{label}</button>
            );
          })}
        </div>
      </section>

      <section style={{ position: 'relative', zIndex: 1, padding: '40px 20px 100px', maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 28 }}>
        {shown.map((p, i) => (
          <Reveal key={p.id} kind="pop" delay={(i % 3) * 90} style={{ display: 'flex' }}>
            <ProjectCard p={p} index={projects.indexOf(p)} style={{ flex: 1 }} />
          </Reveal>
        ))}
      </section>

      <Marquee text='8 happy clients ● 5.0 avg rating ● "way better than I imagined" ● "ahead of schedule" ● "transformed our vision" ●' bg="var(--mint)" speed={24} size="clamp(18px, 2.6vw, 30px)" margin="0 0 70px" />

      <Footer title="yours next?" buttons={[
        { label: 'start a project →', href: links.email, bg: 'dark' },
        { label: 'all repos on github', href: links.github, bg: 'var(--must)', external: true },
      ]} />
    </div>
  );
}
