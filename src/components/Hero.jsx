import Icon from './Icon.jsx';
import Pipeline from './Pipeline.jsx';
import useTypewriter from '../hooks/useTypewriter.js';
import { PROFILE, ROLES } from '../data/portfolio.js';
import '../styles/Hero.css';

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section id="home" className="hero">
      <div className="hero__aurora" aria-hidden="true">
        <span /><span /><span />
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="hero__status"><i /> Open to DevOps and SRE roles</span>

          <h1 className="hero__title">
            Hi, I'm <span className="grad-text">{PROFILE.name}</span>
          </h1>

          <p className="hero__role" aria-label={ROLES.join(', ')}>
            <span aria-hidden="true">{role}</span>
            <span className="hero__cursor" aria-hidden="true" />
          </p>

          <p className="hero__lead">
            I automate infrastructure so releases stay boring. With 2.2+ years across AWS, infrastructure as code,
            CI/CD and observability, I build secure, highly available systems that teams can ship to with confidence.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#contact">Get in touch <Icon name="arrow" /></a>
            <a className="btn btn--ghost" href={PROFILE.resume} download>
              Download resume <Icon name="download" />
            </a>
          </div>

          <div className="hero__social">
            <a className="icon-btn" href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>
            <a className="icon-btn" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            <a className="icon-btn" href={`mailto:${PROFILE.email}`} aria-label="Email"><Icon name="mail" /></a>
            <span className="hero__loc"><Icon name="pin" /> {PROFILE.location}</span>
          </div>
        </div>

        <div className="hero__visual">
          <Pipeline />
        </div>
      </div>
    </section>
  );
}
