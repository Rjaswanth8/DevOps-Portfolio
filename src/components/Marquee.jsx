import { MARQUEE } from '../data/portfolio.js';
import '../styles/Marquee.css';

export default function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-label="Tools and platforms I work with">
      <ul className="marquee__track">
        {row.map((name, i) => (
          <li key={`${name}-${i}`} aria-hidden={i >= MARQUEE.length ? 'true' : undefined}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
