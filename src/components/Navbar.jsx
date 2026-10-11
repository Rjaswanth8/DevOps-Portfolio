import { useState } from 'react';
import Icon from './Icon.jsx';
import { NAV, PROFILE } from '../data/portfolio.js';
import '../styles/Navbar.css';

export default function Navbar({ active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="nav__bar glass">
        <a className="nav__brand" href="#home" onClick={close}>
          <span className="nav__logo">JR</span>
          <span className="nav__name">{PROFILE.name}</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'is-active' : ''}
              aria-current={active === item.id ? 'true' : undefined}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__tools">
          <button
            type="button"
            className="icon-btn nav__theme"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button
            type="button"
            className="icon-btn nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
