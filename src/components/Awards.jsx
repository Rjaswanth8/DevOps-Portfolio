import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import '../styles/Cards.css';

export default function Awards() {
  return (
    <section id="awards" className="section section--alt">
      <div className="container">
        <SectionHeading icon="award" title="Awards" subtitle="Recognition for impact at work." />
        <Reveal className="feature feature--award">
          <span className="feature__badge"><Icon name="award" /></span>
          <div className="feature__body">
            <h3>Abhimanyu Award</h3>
            <p className="feature__sub">Meritto</p>
            <p className="feature__text">
              Received for exceptional performance, rapid onboarding, and impactful contributions to automation
              and infrastructure initiatives.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
