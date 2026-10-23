import { useEffect, useRef, useState, type FocusEvent, type PointerEvent } from 'react';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../data/portfolio';

const DELAY = 3500; // ms each slide stays at the front
// Pose by distance from the front slide: shift (% of card width), scale, tilt, opacity. 3+ is parked out of sight.
const SLOTS = [
  { x: 0, s: 1, r: 0, o: 1 },
  { x: 62, s: .82, r: 5, o: 1 },
  { x: 112, s: .66, r: 9, o: .5 },
  { x: 150, s: .5, r: 12, o: 0 },
];

/**
 * Auto-playing card carousel: front card centred, neighbours fanned out smaller and tilted.
 * Advances on its own every DELAY ms and pauses while hovered, focused or off screen; no autoplay
 * under prefers-reduced-motion. No visible controls: swipe/drag, arrow keys, or click a side card
 * to bring it forward.
 */
export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const n = projects.length;
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const [visible, setVisible] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const startX = useRef<number | null>(null);
  const swiped = useRef(false);
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const playing = !reduced && visible && !held;

  const go = (i: number) => setActive(((i % n) + n) % n);

  // Any change of slide restarts the clock, so manual moves get a full DELAY too.
  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => setActive(a => (a + 1) % n), DELAY);
    return () => window.clearTimeout(id);
  }, [playing, active, n]);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: .4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Background cards are inert (no focus, no clicks); the overlay button on each one brings it forward.
  useEffect(() => {
    cardRefs.current.forEach((el, i) => { if (el) el.inert = i !== active; });
  }, [active]);

  const onPointerDown = (e: PointerEvent) => { startX.current = e.clientX; swiped.current = false; };
  const onPointerUp = (e: PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 50) { swiped.current = true; go(active + (dx < 0 ? 1 : -1)); }
  };
  const onBlur = (e: FocusEvent) => { if (!e.currentTarget.contains(e.relatedTarget)) setHeld(false); };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onKeyDown={e => { if (e.key === 'ArrowRight') go(active + 1); if (e.key === 'ArrowLeft') go(active - 1); }}
      onFocus={() => setHeld(true)}
      onBlur={onBlur}
    >
      <div
        ref={stageRef}
        className="pc-stage"
        onPointerEnter={e => { if (e.pointerType === 'mouse') setHeld(true); }}
        onPointerLeave={e => { if (e.pointerType === 'mouse') setHeld(false); }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { startX.current = null; }}
        onClickCapture={e => { if (swiped.current) { e.preventDefault(); e.stopPropagation(); swiped.current = false; } }}
        onDragStart={e => e.preventDefault()}
      >
        {projects.map((p, i) => {
          const rel = ((i - active) % n + n + Math.floor(n / 2)) % n - Math.floor(n / 2);
          const d = Math.min(Math.abs(rel), 3);
          const { x, s, r, o } = SLOTS[d];
          const dir = Math.sign(rel);
          return (
            <div
              key={p.id}
              className="pc-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}: ${p.title}`}
              style={{ translate: `${dir * x}% 0`, scale: `${s}`, rotate: `${dir * r}deg`, opacity: o, zIndex: 10 - d, pointerEvents: d >= 3 ? 'none' : undefined }}
            >
              <div ref={el => { cardRefs.current[i] = el; }} className="pc-card"><ProjectCard p={p} index={i} style={{ flex: 1 }} /></div>
              {i !== active && <button type="button" className="pc-pick" tabIndex={-1} aria-label={`Show ${p.title}`} onClick={() => go(i)} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
