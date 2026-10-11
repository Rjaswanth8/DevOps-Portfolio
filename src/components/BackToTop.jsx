import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import '../styles/BackToTop.css';

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

// One full wave period is 100 units; the path repeats twice so the loop is seamless.
const WAVE = 'M0 10 Q25 0 50 10 T100 10 T150 10 T200 10 V20 H0 Z';

/**
 * Back-to-top button that fills with water as you scroll down the page.
 * Scrolling pushes the water (a small spring simulation), so it sloshes
 * and settles. All animation values are written straight to CSS variables,
 * so scrolling never triggers React re-renders.
 */
export default function BackToTop() {
  const btn = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = btn.current;
    if (!el) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const s = {
      level: 0,        // water level shown (0 to 1)
      target: 0,       // scroll progress (0 to 1)
      angle: 0,        // surface tilt in degrees
      vel: 0,          // tilt velocity
      pending: 0,      // scroll distance not yet turned into a push
      lastY: window.scrollY,
      raf: 0,
      deep: false,
      shown: false,
      pct: -1,
    };

    const apply = () => {
      el.style.setProperty('--level', s.level.toFixed(4));
      el.style.setProperty('--tilt', `${s.angle.toFixed(2)}deg`);
      const amp = 1 + Math.min(Math.abs(s.vel) * 0.5 + Math.abs(s.angle) * 0.04, 1.6);
      el.style.setProperty('--amp', amp.toFixed(2));
      const deep = s.level > 0.5;
      if (deep !== s.deep) {
        s.deep = deep;
        el.classList.toggle('is-deep', deep);
      }
    };

    const frame = () => {
      s.raf = 0;
      s.level += (s.target - s.level) * (reduce ? 1 : 0.14);
      if (Math.abs(s.target - s.level) < 0.0005) s.level = s.target;

      if (!reduce) {
        s.vel += clamp(-s.pending * 0.05, -5, 5); // scrolling pushes the water
        s.pending = 0;
        s.vel += -0.09 * s.angle - 0.1 * s.vel;   // spring back to level, with damping
        s.angle = clamp(s.angle + s.vel, -38, 38);
      }
      apply();

      const settled =
        Math.abs(s.angle) < 0.05 && Math.abs(s.vel) < 0.02 && s.level === s.target && s.pending === 0;
      if (settled) {
        s.angle = 0;
        s.vel = 0;
        apply();
      } else {
        s.raf = requestAnimationFrame(frame);
      }
    };

    const kick = () => {
      if (!s.raf) s.raf = requestAnimationFrame(frame);
    };

    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      s.target = max > 0 ? clamp(y / max, 0, 1) : 0;
      s.pending += y - s.lastY;
      s.lastY = y;

      const show = y > 300;
      if (show !== s.shown) {
        s.shown = show;
        setVisible(show);
      }
      const pct = Math.round(s.target * 100);
      if (pct !== s.pct) {
        s.pct = pct;
        el.title = `Back to top (${pct}% scrolled)`;
      }
      kick();
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(s.raf);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      ref={btn}
      type="button"
      className={`wbtn ${visible ? 'is-visible' : ''}`}
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <span className="wbtn__water" aria-hidden="true">
        <span className="wbtn__waves">
          <svg className="wbtn__wave wbtn__wave--back" viewBox="0 0 200 20" preserveAspectRatio="none">
            <path d={WAVE} />
          </svg>
          <svg className="wbtn__wave wbtn__wave--front" viewBox="0 0 200 20" preserveAspectRatio="none">
            <path d={WAVE} />
          </svg>
        </span>
        <span className="wbtn__bubble wbtn__bubble--a" />
        <span className="wbtn__bubble wbtn__bubble--b" />
      </span>
      <Icon name="up" className="wbtn__icon" />
    </button>
  );
}
