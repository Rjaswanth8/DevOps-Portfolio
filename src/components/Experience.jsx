import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { WORK } from '../data/portfolio.js';
import '../styles/Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHeading
          icon="briefcase"
          title="Experience"
          subtitle="Where I apply DevOps and reliability engineering day to day."
        />

        <div className="xp">
          <Reveal className="xp__role spot glass">
            <span className="xp__logo"><Icon name="briefcase" /></span>
            <div className="xp__info">
              <h3>DevOps Engineer / Implementation Specialist II</h3>
              <p>Meritto (NoPaperForms), Bangalore</p>
            </div>
            <span className="xp__when"><Icon name="cal" /> 06/2024 to present</span>
          </Reveal>

          <ul className="xp__grid">
            {WORK.map((w, i) => (
              <Reveal as="li" key={w.title} className="xp__item spot glass" delay={(i % 2) * 90}>
                <div className="xp__item-head">
                  <span className="xp__ico"><Icon name={w.icon} /></span>
                  <h4>{w.title}</h4>
                </div>
                <p>{w.text}</p>
                <div className="xp__tags">
                  {w.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
