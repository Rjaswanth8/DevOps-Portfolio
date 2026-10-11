import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Awards from './components/Awards.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import useTheme from './hooks/useTheme.js';
import useActiveSection from './hooks/useActiveSection.js';
import useSpotlight from './hooks/useSpotlight.js';
import { NAV } from './data/portfolio.js';

const SECTION_IDS = NAV.map((n) => n.id);

export default function App() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection(SECTION_IDS);
  useSpotlight();

  return (
    <>
      <ScrollProgress />
      <Navbar active={active} theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Awards />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
