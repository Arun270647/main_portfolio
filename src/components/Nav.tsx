import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { links } from '../data/portfolio';

const items = [
  { to: '/about', label: 'about', hover: 'must' },
  { to: '/projects', label: 'work', hover: 'gum' },
  { to: '/experience', label: 'xp', hover: 'mint' },
  { to: '/blog', label: 'blog', hover: 'gum' },
];

/**
 * Sticky cream pill nav. shadow = page accent (tang on home, must on about, gum on projects, mint on xp).
 * The full-width <header> is what sticks; once the page scrolls it shows a frosted band behind the
 * pill (.site-header in bubblegum.css) so content passing underneath doesn't show around it.
 */
export function Nav({ shadow = 'var(--tang)' }: { shadow?: string }) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <nav aria-label="Main" style={{ margin: '0 auto', width: 'min(96%, 1100px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, padding: '10px 12px 10px 22px', background: 'var(--cream)', color: 'var(--ink)', borderRadius: 999, boxShadow: `0 8px 0 ${shadow}` }}>
        <Link to="/" style={{ fontFamily: 'var(--display)', fontSize: 24, color: 'var(--ink)', textDecoration: 'none', letterSpacing: '-.02em' }}>
          arun<span style={{ color: 'var(--tang)' }}>!</span>
        </Link>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {items.map(i => (
            <Link key={i.to} to={i.to} data-hover={i.hover} aria-current={(pathname === i.to || (i.to === '/blog' && pathname.startsWith('/blog/'))) ? 'page' : undefined} className={`nav-link${pathname === i.to ? ' active' : ''}`}>{i.label}</Link>
          ))}
          <a href={links.email} className="nav-cta">say hi</a>
        </div>
      </nav>
    </header>
  );
}
