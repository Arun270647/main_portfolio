import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { roles } from '../data/portfolio';

// Oldest → newest, left to right, ordered by start month.
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const startOf = (period: string) => { const [m, y] = period.split(' — ')[0].split(' '); return Number(y) * 12 + MONTHS.indexOf(m); };
const timeline = [...roles].sort((a, b) => startOf(a.period) - startOf(b.period));
const colors = ['var(--tang)', 'var(--gum)', 'var(--must)', 'var(--mint)'];
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/**
 * Scroll-driven horizontal timeline. The section is tall and its stage sticks to the viewport;
 * scrolling through it draws the glowing line left to right and pops in each role card as the
 * line reaches its node (scrolling back rewinds it). When the track is wider than the screen
 * (phones) it slides sideways to keep the head of the line in view, like a carousel.
 */
export function SacredTimeline() {
  const wrapRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    const view = track?.parentElement;
    if (!wrap || !track || !view) return;
    const dots = [...track.querySelectorAll<HTMLElement>('.tl-dot')];
    const cols = [...track.querySelectorAll<HTMLElement>('.tl-col')];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const width = track.offsetWidth;
      const left = track.getBoundingClientRect().left;
      const nodes = dots.map(d => { const r = d.getBoundingClientRect(); return r.left + r.width / 2 - left; });
      const vh = window.innerHeight;
      const r = wrap.getBoundingClientRect();
      // Arriving: the line draws up to the first node. Pinned: it carries on to the end.
      const enter = clamp((vh * 0.6 - r.top) / (vh * 0.6), 0, 1);
      const pinned = clamp(-r.top / Math.max(1, r.height - vh), 0, 1);
      const fill = reduced ? width : enter < 1 ? enter * nodes[0] : nodes[0] + pinned * (width - nodes[0]);
      track.style.setProperty('--fill', `${fill}px`);
      cols.forEach((c, i) => c.classList.toggle('on', fill >= nodes[i] - 1));
      const shift = reduced ? 0 : clamp(fill - view.clientWidth / 2, 0, Math.max(0, width - view.clientWidth));
      track.style.transform = `translateX(${-shift}px)`;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return (
    <section id="xp" ref={wrapRef} className="tl-pin" style={{ '--n': timeline.length }}>
      <div className="tl-stage">
        <Reveal style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 24 }}>
          <h2 className="display h2-gum" style={{ margin: 0, fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: .95 }}>the sacred timeline</h2>
          <Link to="/experience" style={{ fontWeight: 700, fontSize: 16, color: 'var(--cream)', textDecoration: 'none', borderBottom: '3px solid var(--mint)' }}>full timeline →</Link>
        </Reveal>
        <div className="tl-view">
          <ol ref={trackRef} className="tl">
            {timeline.map((r, i) => {
              const up = i % 2 === 0;
              return (
                <li key={r.role + r.company} className="tl-col" style={{ gridColumn: i + 1, '--c': colors[i % colors.length] }}>
                  <div className="tl-card" style={{ gridRow: up ? 1 : 3, alignSelf: up ? 'end' : 'start', '--from': up ? '40px' : '-40px', transform: `rotate(${up ? -1.2 : 1.2}deg)` }}>
                    {r.badge && <span className="display" style={{ position: 'absolute', top: -14, right: 14, background: 'var(--tang)', color: 'var(--ink)', fontSize: 12, padding: '6px 12px', borderRadius: 999, boxShadow: '0 3px 0 var(--ink)', transform: 'rotate(4deg)' }}>{r.badge}</span>}
                    <div className="display" style={{ fontSize: 20, lineHeight: 1.05, textTransform: 'none' }}>{r.role}</div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginTop: 4 }}>{r.company}</div>
                    <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10, fontSize: 11, letterSpacing: '.06em' }}>
                      {r.current && <span className="blink" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--tang)' }} />}{r.period}
                    </div>
                  </div>
                  <div className="tl-node" data-side={up ? 'up' : 'down'}><span className="tl-dot" /></div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
