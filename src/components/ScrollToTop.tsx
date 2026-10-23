import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** On route change scroll to the top, or to the hash target if there is one (used by the old-URL redirects). */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ block: 'start' }); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
