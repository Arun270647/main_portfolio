import { Link, useLocation } from 'react-router-dom';
import { links } from '../data/portfolio';

const items = [
  { to: '/about', label: 'about', hover: 'must' },
  { to: '/projects', label: 'work', hover: 'gum' },
  { to: '/experience', label: 'xp', hover: 'mint' },
];

/** Sticky cream pill nav. shadow = page accent (tang on home, must on about, gum on projects, mint on xp). */
export function Nav({ shadow = 'var(--tang)' }: { shadow?: string }) {
  const { pathname } = useLocation();
  return (
    <nav aria-label="Main" style={{ position: 'sticky', top: 14, zIndex: 50, margin: '14px auto 0', width: 'min(96%, 1100px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, padding: '10px 12px 10px 22px', background: 'var(--cream)', color: 'var(--ink)', borderRadius: 999, boxShadow: `0 8px 0 ${shadow}` }}>
      <Link to="/" style={{ fontFamily: 'var(--display)', fontSize: 24, color: 'var(--ink)', textDecoration: 'none', letterSpacing: '-.02em' }}>
        arun<span style={{ color: 'var(--tang)' }}>!</span>
      </Link>
      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {items.map(i => (
          <Link key={i.to} to={i.to} data-hover={i.hover} aria-current={pathname === i.to ? 'page' : undefined} className={`nav-link${pathname === i.to ? ' active' : ''}`}>{i.label}</Link>
        ))}
        <a href={links.email} className="nav-cta">say hi</a>
      </div>
    </nav>
  );
}
