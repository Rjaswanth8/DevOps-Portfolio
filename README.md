# Jaswanth R, Portfolio

A modern, responsive developer portfolio built with **React 18 + Vite**, plain CSS, and `react-icons`.
Light and dark themes, scroll animations, animated release-pipeline hero, searchable skills, a downloadable resume, and a back-to-top button that fills with water as you scroll.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build and deploy

```bash
npm run build      # outputs to /dist
npm run preview    # test the production build locally
```

The build uses relative paths (`base: './'`), so the `dist` folder works on Netlify, Vercel, GitHub Pages,
Cloudflare Pages, S3, or any static host. Drag the `dist` folder into Netlify Drop for the fastest deploy.

## Update your content

Everything (name, links, skills, experience, stats) lives in **`src/data/portfolio.js`**.

- Replace the `linkedin` and `github` URLs in `PROFILE` with your real profile links.
- Replace `public/Jaswanth_SRE_DevOps_Resume.pdf` with your latest resume (keep the file name, or update `PROFILE.resume`).
- Colors, fonts and spacing are CSS variables at the top of `src/styles/global.css`.

## Structure

```
src/
  App.jsx                 page composition
  main.jsx                entry
  data/portfolio.js       all content
  hooks/                  useTheme, useActiveSection, useCountUp, useTypewriter, useSpotlight
  components/             Navbar, Hero, Pipeline, Stats, Marquee, About, Skills,
                          Experience, Education, Awards, Contact, Footer, ScrollProgress,
                          BackToTop, Reveal, SectionHeading, Icon
  styles/                 global.css + one CSS file per component
public/                   favicon and resume PDF
```

## Contact form

The form opens the visitor's email app with the message pre-filled (no backend needed). To receive messages
directly, point it at a service such as Formspree or EmailJS in `src/components/Contact.jsx`.
