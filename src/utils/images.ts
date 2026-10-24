export type OptimizedImage = { src: string; thumb?: string; width?: number; height?: number };

// Written by scripts/optimize-images.mjs before dev/build; missing (e.g. a bare typecheck) means originals are used.
const manifest = (Object.values(
  import.meta.glob('../content/images.json', { import: 'default', eager: true }),
)[0] ?? {}) as Record<string, OptimizedImage>;

/** Resized WebP version and intrinsic size of a public image, falling back to the original file. */
export const optimizedImage = (src: string): OptimizedImage => manifest[src] ?? { src };
