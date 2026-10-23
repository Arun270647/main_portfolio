import 'react';

// Allow CSS custom properties (--d, --r, ...) in inline style objects.
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
