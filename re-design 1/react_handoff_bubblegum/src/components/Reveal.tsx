import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  kind?: 'up' | 'left' | 'right' | 'pop';
  delay?: number; // ms
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
};

/** Scroll-reveal wrapper. Adds .reveal.<kind> and flips to .in when 15% visible. */
export function Reveal({ children, kind = 'up', delay = 0, as: Tag = 'div', className = '', style }: Props) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.classList.add('in'); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const T = Tag as any;
  return (
    <T ref={ref} className={`reveal ${kind} ${className}`} style={{ ...style, ['--d' as any]: `${delay}ms` }}>
      {children}
    </T>
  );
}
