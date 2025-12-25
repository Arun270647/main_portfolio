import { ReactNode } from 'react';

interface CRTScreenProps {
  children: ReactNode;
  className?: string;
}

export const CRTScreen = ({ children, className = '' }: CRTScreenProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(transparent_50%,_rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
      
      {/* CRT curvature vignette effect */}
      <div className="absolute inset-0 pointer-events-none z-40 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      
      {/* Scan beam - subtle white line */}
      <div className="absolute left-0 right-0 h-[1px] bg-foreground/10 animate-scan pointer-events-none z-50" />
      
      {/* Static noise flicker */}
      <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20400%20400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noiseFilter%29%22%2F%3E%3C%2Fsvg%3E')]" />
      
      {/* Content */}
      <div className="relative z-10 crt-flicker">
        {children}
      </div>
    </div>
  );
};
