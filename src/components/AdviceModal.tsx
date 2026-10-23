import { useEffect, useRef, useState } from 'react';
import { advice } from '../data/portfolio';

const pick = () => advice[Math.floor(Math.random() * advice.length)];

/** "gimme advice" button + speech-bubble modal. Drop <AdviceButton /> anywhere. */
export function AdviceButton({ className = 'btn cream' }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [line, setLine] = useState('');
  const first = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    first.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  return (
    <>
      <button className={className} onClick={() => { setLine(pick()); setOpen(true); }}>gimme advice</button>
      {open && (
        <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(18,10,20,.78)', display: 'grid', placeItems: 'center', padding: 20, backdropFilter: 'blur(8px)' }}>
          <div role="dialog" aria-modal="true" aria-label="Unsolicited advice" onClick={e => e.stopPropagation()} className="popin" style={{ position: 'relative', maxWidth: 600, width: '100%', background: 'var(--must)', color: 'var(--ink)', borderRadius: '40px 40px 40px 8px', boxShadow: '0 14px 0 var(--tang)', padding: '44px 38px 32px', animationDuration: '.5s' }}>
            <div className="mono" style={{ position: 'absolute', top: -18, right: 30, background: 'var(--gum)', padding: '8px 14px', borderRadius: 999, fontWeight: 700, fontSize: 12, transform: 'rotate(4deg)' }}>unsolicited advice</div>
            <p className="display" style={{ margin: 0, fontSize: 'clamp(22px, 2.8vw, 32px)', lineHeight: 1.15, textTransform: 'none' }}>{line}</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap', fontWeight: 700, fontSize: 15 }}>
              <button ref={first} onClick={() => setLine(pick())} style={{ padding: '14px 22px', borderRadius: 999, background: 'var(--ink)', color: 'var(--must)', border: 0, cursor: 'pointer', boxShadow: '0 5px 0 var(--tang)' }}>another one</button>
              <button onClick={() => setOpen(false)} style={{ padding: '14px 22px', borderRadius: 999, background: 'var(--cream)', color: 'var(--ink)', border: 0, cursor: 'pointer', boxShadow: '0 5px 0 var(--ink)' }}>ok bye</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
