import Icon from './Icon.jsx';
import { PROFILE } from '../data/portfolio.js';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>&copy; {new Date().getFullYear()} {PROFILE.name}. Built with React and Vite.</span>
        <div className="footer__social">
          <a className="icon-btn" href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>
          <a className="icon-btn" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a className="icon-btn" href={`mailto:${PROFILE.email}`} aria-label="Email"><Icon name="mail" /></a>
        </div>
      </div>
    </footer>
  );
}
