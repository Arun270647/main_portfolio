/** Full-bleed tilted marquee strip. Pass the text once; it is duplicated for a seamless loop. */
export function Marquee({ text, bg, tilt = 1.2, speed = 20, size = 'clamp(22px, 3.2vw, 40px)', margin = '0' }: {
  text: string; bg: string; tilt?: number; speed?: number; size?: string; margin?: string;
}) {
  return (
    <div style={{ position: 'relative', zIndex: 1, margin, overflow: 'hidden', background: bg, color: 'var(--ink)', padding: '14px 0', transform: `rotate(${tilt}deg) scale(1.03)` }}>
      <div className="display" style={{ display: 'flex', width: 'max-content', animation: `marquee ${speed}s linear infinite`, fontSize: size, whiteSpace: 'nowrap' }}>
        <span style={{ padding: '0 20px' }}>{text}&nbsp;</span>
        <span style={{ padding: '0 20px' }} aria-hidden>{text}&nbsp;</span>
      </div>
    </div>
  );
}
