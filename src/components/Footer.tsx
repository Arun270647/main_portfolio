import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { links } from '../data/portfolio';

type Btn = { label: string; href: string; bg: string; external?: boolean };

/** Cream rounded footer with a giant chrome headline. */
export function Footer({ id, title, titleClass = 'chrome-gum', buttons }: { id?: string; title: string; titleClass?: string; buttons: Btn[] }) {
  return (
    <footer id={id} style={{ scrollMarginTop: 60, position: 'relative', zIndex: 1, background: 'var(--cream)', color: 'var(--ink)', borderRadius: '60px 60px 0 0', padding: '90px 20px 40px' }}>
      <Reveal style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <h2 className={`display ${titleClass}`} style={{ margin: 0, fontSize: 'clamp(48px, 11vw, 180px)', lineHeight: .85, textShadow: '5px 5px 0 var(--ink), 10px 10px 0 var(--gum), 15px 15px 0 var(--ink)', color: 'var(--tang)' }}>{title}</h2>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', margin: '50px 0 70px' }}>
          {buttons.map(b => b.href.startsWith('/')
            ? <Link key={b.label} to={b.href} className={`footer-btn${b.bg === 'dark' ? ' dark' : ''}`} style={b.bg !== 'dark' ? { background: b.bg } : undefined}>{b.label}</Link>
            : <a key={b.label} href={b.href} target={b.external ? '_blank' : undefined} rel="noopener" className={`footer-btn${b.bg === 'dark' ? ' dark' : ''}`} style={b.bg !== 'dark' ? { background: b.bg } : undefined}>{b.label}</a>
          )}
        </div>
        <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', fontSize: 12, borderTop: '2px solid var(--ink)', paddingTop: 18 }}>
          <span>© {new Date().getFullYear()} Arun Vignesh · Chennai</span>
          <span><a href={links.github} style={{ color: 'var(--ink)' }}>github</a> · <a href={links.linkedin} style={{ color: 'var(--ink)' }}>linkedin</a> · <a href={links.instagram} style={{ color: 'var(--ink)' }}>instagram</a></span>
        </div>
      </Reveal>
    </footer>
  );
}
