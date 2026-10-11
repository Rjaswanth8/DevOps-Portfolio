import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

export default function SectionHeading({ icon, title, subtitle }) {
  return (
    <Reveal className="section-heading">
      <span className="section-heading__icon"><Icon name={icon} /></span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}
