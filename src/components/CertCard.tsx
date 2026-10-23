import type { Certificate } from '../data/portfolio';

const colors = ['var(--must)', 'var(--mint)', 'var(--gum)', 'var(--tang)', 'var(--cream)'];
const rots = ['-1.5deg', '1deg', '-.8deg', '1.4deg', '-1deg'];

/** Certificate as a tilted sticker; the whole card links to the credential. */
export function CertCard({ c, index }: { c: Certificate; index: number }) {
  return (
    <a href={c.link} target="_blank" rel="noopener" className="card" style={{ background: colors[index % colors.length], padding: 22, transform: `rotate(${rots[index % rots.length]})`, boxShadow: '0 10px 0 var(--cream)', gap: 10 }}>
      <div className="mono" style={{ fontSize: 11, display: 'flex', justifyContent: 'space-between', letterSpacing: '.08em' }}><span>{c.issuer}</span><span>{c.date}</span></div>
      <h3 className="display" style={{ margin: 0, fontSize: 22, lineHeight: 1.05, textTransform: 'none', flex: 1 }}>{c.title}</h3>
      <span style={{ fontWeight: 700, fontSize: 14, borderBottom: '3px solid var(--ink)', alignSelf: 'flex-start' }}>view credential ↗</span>
    </a>
  );
}
