import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import '../styles/Cards.css';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading icon="grad" title="Education" subtitle="Where I built my engineering foundation." />
        <Reveal className="feature spot glass">
          <span className="feature__badge"><Icon name="grad" /></span>
          <div className="feature__body">
            <h3>Indian Institute of Information Technology (IIIT), Kadapa</h3>
            <p className="feature__sub">B.Tech in Mechanical Engineering</p>
            <div className="feature__meta">
              <span><Icon name="cal" /> 2019 to 2023</span>
              <span><Icon name="pin" /> Kadapa, India</span>
            </div>
            <p className="feature__text">
              An engineering degree that I carried into software. I moved into DevOps and now focus on cloud
              automation and reliability.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
