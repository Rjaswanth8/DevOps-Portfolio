import useCountUp from '../hooks/useCountUp.js';
import Reveal from './Reveal.jsx';
import { STATS } from '../data/portfolio.js';
import '../styles/Stats.css';

function Stat({ value, decimals, suffix, label }) {
  const [ref, shown] = useCountUp(value, { decimals });
  return (
    <div className="stat spot glass">
      <strong ref={ref} className="grad-text">{shown}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="container">
      <Reveal className="stats">
        {STATS.map((s) => <Stat key={s.label} {...s} />)}
      </Reveal>
    </div>
  );
}
