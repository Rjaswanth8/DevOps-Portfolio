import { useState } from 'react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { PROFILE } from '../data/portfolio.js';
import '../styles/Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [note, setNote] = useState('');

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(`${form.message.trim()}\n\nFrom: ${form.name.trim()} (${form.email.trim()})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setNote(`Opening your email app. If nothing opens, write to ${PROFILE.email}.`);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact">
          <div className="contact__info">
            <h2>Let's build something <span className="grad-text">reliable</span>.</h2>
            <p>
              Hiring for a DevOps or SRE role, or have an infrastructure problem to solve? Send a message and I'll reply.
            </p>

            <div className="contact__list">
              <a href={`mailto:${PROFILE.email}`}>
                <span className="contact__ico"><Icon name="mail" /></span>
                <div><small>Email</small><span>{PROFILE.email}</span></div>
              </a>
              <a href={`tel:${PROFILE.phone}`}>
                <span className="contact__ico"><Icon name="phone" /></span>
                <div><small>Phone</small><span>{PROFILE.phoneDisplay}</span></div>
              </a>
              <div className="contact__row">
                <span className="contact__ico"><Icon name="pin" /></span>
                <div><small>Location</small><span>{PROFILE.location}</span></div>
              </div>
            </div>

            <div className="contact__social">
              <a className="icon-btn" href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>
              <a className="icon-btn" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
              <a className="btn btn--ghost" href={PROFILE.resume} download>Resume <Icon name="download" /></a>
            </div>
          </div>

          <form className="contact__form glass" onSubmit={submit}>
            <label className="field">
              <span>Name</span>
              <input type="text" required autoComplete="name" value={form.name} onChange={update('name')} />
            </label>
            <label className="field">
              <span>Email</span>
              <input type="email" required autoComplete="email" value={form.email} onChange={update('email')} />
            </label>
            <label className="field">
              <span>Message</span>
              <textarea required rows="5" value={form.message} onChange={update('message')} />
            </label>
            <button type="submit" className="btn btn--primary">Send message <Icon name="send" /></button>
            <p className="contact__note" role="status">{note}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
