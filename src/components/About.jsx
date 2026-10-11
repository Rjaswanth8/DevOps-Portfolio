import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { PROFILE } from '../data/portfolio.js';
import '../styles/About.css';

const FACTS = [
  { icon: 'pin', label: 'Based in', value: PROFILE.location },
  { icon: 'briefcase', label: 'Current role', value: 'DevOps Engineer / Implementation Specialist II at Meritto' },
  { icon: 'grad', label: 'Education', value: 'B.Tech, IIIT Kadapa (2023)' },
];

const PRINCIPLES = [
  { icon: 'sparkles', title: 'Automate what repeats', text: 'Ansible, Terraform and Python scripts replace manual provisioning, deployments and routine admin work.' },
  { icon: 'shield', title: 'Secure by default', text: 'SonarQube, Black Duck and Fortify run inside pipelines so quality and security checks never get skipped.' },
  { icon: 'activity', title: 'Observable in production', text: 'Prometheus, Grafana, Splunk, ELK and CloudWatch surface issues before users notice them.' },
];

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <SectionHeading icon="users" title="About me" subtitle="Automation first, with reliability as the goal." />

        <div className="about">
          <Reveal className="about__intro spot glass">
            <p>
              I'm a <b>DevOps Engineer</b> who enjoys turning slow, manual operations into repeatable automation. My work
              covers infrastructure provisioning, application deployments and the operational workflows around them.
            </p>
            <p>
              Day to day I use <b>Ansible, Terraform and CloudFormation</b> to keep AWS environments consistent,
              <b> Jenkins and GitLab</b> to ship releases, and <b>Docker, Kubernetes and Helm</b> to run microservices.
              When production needs attention, I'm comfortable on Linux with troubleshooting, tuning and root cause analysis.
            </p>
          </Reveal>

          <Reveal className="about__facts spot glass" delay={100}>
            {FACTS.map((f) => (
              <div className="about__fact" key={f.label}>
                <span className="about__ico"><Icon name={f.icon} /></span>
                <div><small>{f.label}</small><strong>{f.value}</strong></div>
              </div>
            ))}
          </Reveal>

          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} className="about__principle spot glass" delay={i * 90}>
              <span className="about__ico"><Icon name={p.icon} /></span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
