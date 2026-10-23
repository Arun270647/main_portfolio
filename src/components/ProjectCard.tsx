import type { CSSProperties } from 'react';
import { cardPalette, cardRotations, type Project } from '../data/portfolio';

/** Rounded candy card. index drives the color cycle + tilt. */
export function ProjectCard({ p, index, style }: { p: Project; index: number; style?: CSSProperties }) {
  const [bg, stripe, shadow] = cardPalette[index % cardPalette.length];
  const rot = cardRotations[index % cardRotations.length];
  return (
    <a id={p.id} href={p.live} target="_blank" rel="noopener" className="card" style={{ scrollMarginTop: 110, background: bg, boxShadow: `0 12px 0 ${shadow}`, transform: `rotate(${rot})`, ...style }}>
      <div className="shot" style={{ background: `repeating-linear-gradient(45deg, ${stripe} 0 12px, ${bg} 12px 24px)` }}>
        {p.shot ? <img src={p.shot} alt={`${p.title} screenshot`} loading="lazy" width={640} height={400} /> : <>[ screenshot: {p.title} ]</>}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10, marginTop: 18 }}>
        <h3 className="display" style={{ margin: 0, fontSize: 26, lineHeight: 1, textTransform: 'none' }}>{p.title}</h3>
        {p.featured && <span className="mono" style={{ fontSize: 12, whiteSpace: 'nowrap', letterSpacing: 0 }}>★ featured</span>}
      </div>
      <p style={{ margin: '8px 0 14px', fontSize: 16, lineHeight: 1.4, fontWeight: 500, flex: 1 }}>{p.blurb}</p>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{p.tech.map(t => <span key={t} className="chip">{t}</span>)}</div>
      <div style={{ display: 'flex', gap: 14, marginTop: 16, fontWeight: 700, fontSize: 14 }}>
        <span style={{ borderBottom: '3px solid var(--ink)' }}>{p.category === 'play' ? 'play' : 'live'} ↗</span>
        {p.github && <span role="link" tabIndex={0} onClick={e => { e.preventDefault(); e.stopPropagation(); window.open(p.github, '_blank', 'noopener'); }} onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); window.open(p.github, '_blank', 'noopener'); } }} style={{ borderBottom: '3px solid transparent', cursor: 'pointer' }}>github ↗</span>}
      </div>
    </a>
  );
}
