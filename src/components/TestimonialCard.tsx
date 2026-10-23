import { Link } from 'react-router-dom';
import type { Testimonial } from '../data/portfolio';

const bubbles = [
  ['var(--cream)', 'var(--gum)', '28px 28px 28px 6px', '-1deg'],
  ['var(--mint)', 'var(--cream)', '28px 28px 6px 28px', '1deg'],
  ['var(--gum)', 'var(--must)', '28px 28px 28px 6px', '-.6deg'],
  ['var(--must)', 'var(--tang)', '28px 28px 6px 28px', '.8deg'],
];

/** Speech-bubble quote card. index drives the colour cycle + tilt. */
export function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  const [bg, shadow, radius, rot] = bubbles[index % bubbles.length];
  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 16, padding: '26px 28px', background: bg, color: 'var(--ink)', borderRadius: radius, boxShadow: `0 10px 0 ${shadow}`, transform: `rotate(${rot})` }}>
      <div className="display" style={{ fontSize: 40, lineHeight: .6, textTransform: 'none' }} aria-hidden>“</div>
      <blockquote style={{ margin: 0, fontSize: 16, lineHeight: 1.45, fontWeight: 500, flex: 1 }}>{t.text}</blockquote>
      <figcaption style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap', borderTop: '2px solid var(--ink)', paddingTop: 12 }}>
        <div>
          <div className="display" style={{ fontSize: 18, lineHeight: 1.1, textTransform: 'none' }}>{t.name}</div>
          <div style={{ fontSize: 13, fontWeight: 700 }}>{t.role}, {t.company}</div>
        </div>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.08em', textAlign: 'right' }}>
          {t.date}
          {t.project && <><br /><Link to={`/projects#${t.project}`} style={{ color: 'var(--ink)' }}>the project ↗</Link></>}
        </div>
      </figcaption>
    </figure>
  );
}
