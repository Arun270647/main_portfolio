/** Two blurred, morphing color blobs fixed behind the page. */
export function Blobs({ a = 'var(--tang)', b = 'var(--gum)' }: { a?: string; b?: string }) {
  return (
    <>
      <div className="blobby" style={{ position: 'fixed', top: '-10%', left: '-8%', width: '46vw', height: '46vw', background: a, opacity: .18, filter: 'blur(60px)', animationDuration: '9s', pointerEvents: 'none', zIndex: 0 }} />
      <div className="blobby" style={{ position: 'fixed', bottom: '-14%', right: '-10%', width: '50vw', height: '50vw', background: b, opacity: .16, filter: 'blur(70px)', animationDuration: '11s', animationDirection: 'reverse', pointerEvents: 'none', zIndex: 0 }} />
    </>
  );
}
