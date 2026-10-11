import { useMemo, useState } from 'react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { SKILLS } from '../data/portfolio.js';
import '../styles/Skills.css';

export default function Skills() {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();

  const groups = useMemo(() => {
    if (!q) return SKILLS.map((g) => ({ ...g, hits: [] }));
    return SKILLS
      .map((g) => ({
        ...g,
        hits: g.items.filter((i) => i.toLowerCase().includes(q)),
        titleHit: g.title.toLowerCase().includes(q),
      }))
      .filter((g) => g.hits.length > 0 || g.titleHit);
  }, [q]);

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          icon="code"
          title="Skills"
          subtitle="The tools I use to build, ship and run software. Search to find a specific one."
        />

        <Reveal className="skills__search glass">
          <Icon name="search" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try Terraform, AWS, Python, Kubernetes..."
            aria-label="Search skills"
          />
        </Reveal>

        {groups.length === 0 ? (
          <p className="skills__empty">
            No skills match "{query}". Try Terraform, AWS or Python.
          </p>
        ) : (
          <div className="skills__grid">
            {groups.map((g, i) => (
              <Reveal key={g.id} className="skill-card spot glass" delay={(i % 3) * 70}>
                <div className="skill-card__head">
                  <span className="skill-card__ico"><Icon name={g.icon} /></span>
                  <h3>{g.title}</h3>
                </div>
                <ul className="skill-card__chips">
                  {g.items.map((item) => {
                    const hit = q && item.toLowerCase().includes(q);
                    return (
                      <li key={item} className={`chip ${hit ? 'chip--hit' : q ? 'chip--dim' : ''}`}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
