import { useEffect } from 'react';

// Any element with the .spot class gets a cursor-following glow (CSS vars --mx / --my).
export default function useSpotlight() {
  useEffect(() => {
    const onMove = (e) => {
      const el = e.target instanceof Element ? e.target.closest('.spot') : null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);
}
