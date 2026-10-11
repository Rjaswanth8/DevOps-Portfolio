import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { STAGES } from '../data/portfolio.js';
import '../styles/Pipeline.css';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Pipeline() {
  const [step, setStep] = useState(() => (reduced() ? STAGES.length : 0));

  useEffect(() => {
    if (reduced()) return undefined;
    const id = setInterval(() => {
      setStep((s) => (s >= STAGES.length + 2 ? 0 : s + 1));
    }, 1050);
    return () => clearInterval(id);
  }, []);

  const finished = step >= STAGES.length;
  const current = STAGES[Math.min(step, STAGES.length - 1)];

  return (
    <div
      className="pipe"
      role="img"
      aria-label="Animated release pipeline: commit, build, scan, provision, deploy, observe"
    >
      <div className="pipe__bar">
        <i /><i /><i />
        <span>release-pipeline</span>
      </div>
      <ol className="pipe__stages">
        {STAGES.map((s, i) => (
          <li key={s.label} className={`pipe__stage ${i < step ? 'is-done' : i === step ? 'is-active' : ''}`}>
            <span className="pipe__node"><Icon name={i < step ? 'check' : s.icon} /></span>
            <span className="pipe__text">
              <b>{s.label}</b>
              <code>{s.cmd}</code>
            </span>
          </li>
        ))}
      </ol>
      <div className={`pipe__foot ${finished ? 'is-ok' : ''}`}>
        {finished ? (
          <><Icon name="check" /> released, all checks green</>
        ) : (
          <><span>$ {current.cmd}</span><span className="pipe__caret" /></>
        )}
      </div>
    </div>
  );
}
