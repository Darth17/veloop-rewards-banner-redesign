import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Counts from 0 to `target` once `start` becomes true. Jumps straight to target for reduced motion. */
export default function useCountUp(target, { duration = 1200, start = true } = {}) {
  const [value, setValue] = useState(() => (prefersReducedMotion() ? target : 0));
  const finished = useRef(false);

  useEffect(() => {
    if (!start || finished.current) return undefined;
    if (prefersReducedMotion()) {
      setValue(target);
      finished.current = true;
      return undefined;
    }
    let frame;
    let t0;
    const tick = (now) => {
      if (t0 === undefined) t0 = now;
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3)))); // ease-out cubic
      if (p < 1) frame = requestAnimationFrame(tick);
      else finished.current = true;
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return value;
}
