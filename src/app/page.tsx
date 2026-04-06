'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

/* ═══════════════════ EASE ═══════════════════ */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ═══════════════════ DATA ═══════════════════ */
const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Studio', href: '#studio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Journal', href: '#journal' },
  { label: 'Archive', href: '#archive' },
];

const TICKER_ITEMS = [
  'Residential', '✦', 'Commercial', '✦', 'Cultural', '✦', 'Interiors', '✦',
  'Execution', '✦', 'Structural Integrity', '✦', 'Precision', '✦', 'Est. 2018',
  'Residential', '✦', 'Commercial', '✦', 'Cultural', '✦', 'Interiors', '✦',
  'Execution', '✦', 'Structural Integrity', '✦', 'Precision', '✦', 'Est. 2018',
];

const EXPERTISE = [
  {
    title: 'Residential',
    body: 'Curating bespoke living spaces that blend minimalist aesthetics with domestic warmth.',
    tag: '01',
    bg: 'img-arch-1',
  },
  {
    title: 'Commercial',
    body: 'Designing monoliths for business that prioritize flow, productivity, and brand presence.',
    tag: '02',
    bg: 'img-arch-2',
  },
  {
    title: 'Cultural',
    body: 'Monuments to human expression built with geological permanence.',
    tag: '03',
    bg: 'img-arch-3',
  },
  {
    title: 'Interiors',
    body: 'Sculpting the void within. Every piece of furniture and light fixture serves the structure.',
    tag: '04',
    bg: 'img-arch-4',
  },
];

const PROJECTS = [
  {
    title: 'The Obsidian Loft',
    label: 'Project 039 / 2022',
    location: 'Residential / Los Angeles',
    bg: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%), url("/arch-1.jpg") center/cover no-repeat',
    placeholder: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 40%, #0d0d15 100%)',
  },
  {
    title: 'Summit Corporate Center',
    label: 'Project 012 / 2023',
    location: 'Commercial / Singapore',
    bg: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%), url("/arch-2.jpg") center/cover no-repeat',
    placeholder: 'linear-gradient(135deg, #0a0a0a 0%, #1e1e1e 60%, #0a0a0a 100%)',
  },
];

const TESTIMONIALS = [
  {
    quote: "MASS doesn't just build structures; they sculpt silence and light. Our headquarters is now a physical manifestation of our brand's future.",
    name: 'Julian Vance',
    title: 'CEO, Aether Global',
  },
  {
    quote: 'The materiality of their work achieves a level of geological permanence rarely seen today. An absolute standard in modern construction.',
    name: 'Priya Nair',
    title: 'Principal, Nair Architecture Review',
  },
  {
    quote: 'A manifesto in stone and light. From the first render to final handover — exceptional precision at every stage.',
    name: 'Ravi Menon',
    title: 'Director, Zenith Development',
  },
];

const JOURNAL = [
  {
    tag: 'Journal / 01',
    title: 'The Ontology of Concrete',
    excerpt: 'An exploration into the Brutalist heritage and its modern application to the digital-physical divide. How materiality speaks in an age of simulation.',
    date: '2024 / Mar',
  },
  {
    tag: 'Journal / 02',
    title: 'Void as Material',
    excerpt: 'How negative space becomes the most powerful architectural element. A study of light, shadow, and the geometry of absence.',
    date: '2024 / Jan',
  },
];

/* ═══════════════════ NAVBAR ═══════════════════ */
function Navbar({ activeSection }: { activeSection: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">M A S S</a>

      <ul className="nav-links">
        {NAV_LINKS.map((l, i) => (
          <li key={i}>
            <a
              href={l.href}
              className={activeSection === i + 1 ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta">Inquire</a>
    </nav>
  );
}

/* ═══════════════════ DOT NAV ═══════════════════ */
const SECTIONS = ['hero', 'philosophy', 'expertise', 'projects', 'testimonials', 'journal', 'contact'];

function DotNav({ active }: { active: number }) {
  return (
    <div className="dot-nav">
      {SECTIONS.map((id, i) => (
        <button
          key={i}
          className={active === i ? 'active' : ''}
          aria-label={`Go to ${id}`}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
        />
      ))}
    </div>
  );
}

/* ═══════════════════ FADE-IN SECTION ═══════════════════ */
function FadeIn({ children, delay = 0, className = '', ...props }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════ TICKER ═══════════════════ */
function Ticker({ reversed = false }: { reversed?: boolean }) {
  return (
    <div className="ticker-wrap">
      <div
        className="ticker-track"
        style={{ animationDirection: reversed ? 'reverse' : 'normal' }}
      >
        {TICKER_ITEMS.map((item, i) => (
          <span key={i} className={item === '✦' ? 'accent' : ''}>{item}</span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════ HERO ═══════════════════ */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opac = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      className="section-snap"
      ref={ref}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}
    >
      {/* ── Full-screen background photo — object-fit: cover fills gaps, new ultra-wide image prevents extreme zoom  ── */}
      <img
        src="/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position:   'absolute',
          inset:      0,
          width:      '100%',
          height:     '100%',
          objectFit:  'cover',            /* fill the container without black bars */
          objectPosition: 'center center',
        }}
      />

      {/* ── Dark overlay — same as Stitch design ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.52)',
        }}
      />

      {/* ── Centered content ── */}
      <motion.div
        style={{ y, opacity: opac, position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', padding: '0 1rem' }}
      >
        {/* M A S S — ultra-thin, wide tracked, exactly like the mockup */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'clamp(2.5rem, 12vw, 13rem)', /* more responsive bounds */
            fontWeight: 100,            /* hairline weight — matching the thin outline look */
            letterSpacing: '0.55em',
            textTransform: 'uppercase',
            lineHeight: 1,
            color: '#ffffff',
            marginBottom: '1.25rem',
            paddingLeft: '0.55em',       /* compensate for letter-spacing so it looks centred */
          }}
        >
          MASS
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: EASE }}
          style={{
            fontFamily: 'var(--font-manrope)',
            fontSize: 'clamp(0.45rem, 1.2vw, 0.72rem)', /* more responsive bounds */
            fontWeight: 500,
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.70)',
            marginBottom: '3.5rem',
          }}
        >
          Precision in silence. Architecture as a manifesto.
        </motion.p>

        {/* CTA row: WORKS  |  STUDIO — matching the mockup's two text buttons with divider */}
        <motion.div

          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease: EASE }}
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <a
            href="#projects"
            style={{
              fontFamily: 'var(--font-manrope)',
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
              padding: '0.6rem 2.5rem',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'; }}
          >
            Works
          </a>

          {/* Thin vertical divider */}
          <div style={{ width: '1px', height: '18px', background: 'rgba(255,255,255,0.35)' }} />

          <a
            href="#philosophy"
            style={{
              fontFamily: 'var(--font-manrope)',
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
              padding: '0.6rem 2.5rem',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'; }}
          >
            Studio
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}


/* ═══════════════════ PHILOSOPHY ═══════════════════ */
function Philosophy() {
  return (
    <section id="philosophy" className="section-snap" style={{ background: 'var(--bg)', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <FadeIn>
          <div className="section-eyebrow"><span>Philosophy / 001</span></div>
        </FadeIn>

        <div className="grid-2-col" style={{ gap: '6rem', alignItems: 'center' }}>
          <FadeIn delay={0.1}>
            <h2
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(2rem, 4.5vw, 4.5rem)',
                fontWeight: 900,
                lineHeight: 0.95,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
              }}
            >
              <span style={{ display: 'block', color: 'var(--white)' }}>We do not build</span>
              <span style={{ display: 'block', color: 'var(--white)' }}>structures;</span>
              <span style={{ display: 'block', color: 'var(--white-30)', fontWeight: 300 }}>we sculpt light.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div>
              <p className="t-body" style={{ marginBottom: '2rem' }}>
                MASS operates at the intersection of structural gravity and ethereal transparency.
                Our methodology rejects the ornamental in favor of the essential. By reducing form
                to its most primitive geometry, we allow the landscape and the atmospheric
                conditions to become the primary architects of the occupant's experience.
              </p>
              <p className="t-label" style={{ color: 'var(--accent)' }}>
                Est. 2018 — Ernakulam / Kerala
              </p>

              {/* Stats */}
              <div className="grid-2-col" style={{ gap: '2rem', marginTop: '3rem', borderTop: '1px solid var(--white-06)', paddingTop: '2rem' }}>
                {[['250+', 'Projects'], ['8+', 'Years'], ['98%', 'Satisfaction'], ['50 Cr+', 'Delivered']].map(([num, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: '1.8rem', fontWeight: 900, color: 'var(--white)', letterSpacing: '-0.02em' }}>{num}</div>
                    <div className="t-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ EXPERTISE ═══════════════════ */
function Expertise() {
  return (
    <section id="expertise" className="section-snap" style={{ background: 'var(--surface)', paddingTop: '6rem', paddingBottom: '4rem' }}>
      <div className="container">
        <FadeIn>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <div className="section-eyebrow"><span>Expertise</span></div>
              <h2 className="t-headline" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>What we build</h2>
            </div>
            <a href="#contact" className="btn-ghost" style={{ flexShrink: 0 }}>All Services</a>
          </div>
        </FadeIn>

        {/* Expertise grid — 2 col */}
        <div className="grid-2-col" style={{ gap: '1px', background: 'var(--white-06)' }}>
          {EXPERTISE.map((exp, i) => (
            <motion.div
              key={i}
              className="expertise-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
            >
              {/* Image placeholder */}
              <div
                className={exp.bg}
                style={{ width: '100%', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
              >
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '4rem', fontWeight: 900, opacity: 0.04, letterSpacing: '0.1em' }}>
                  {exp.tag}
                </span>
              </div>

              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <h3 className="t-title" style={{ fontSize: '0.85rem' }}>{exp.title}</h3>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6rem', color: 'var(--white-30)', letterSpacing: '0.15em' }}>↗</span>
                </div>
                <p className="t-body" style={{ fontSize: '0.85rem' }}>{exp.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <Ticker />
      </div>
    </section>
  );
}

/* ═══════════════════ PROJECTS ═══════════════════ */
function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="section-snap" style={{ background: 'var(--bg)' }}>
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>

        {/* Background image / placeholder */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              background: PROJECTS[active].placeholder,
            }}
          />
        </AnimatePresence>

        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)' }} />

        {/* Content at bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '4rem 5rem' }}>
          {/* Grid lines top */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span className="t-label">{PROJECTS[active].label}</span>
            <span className="t-label">{PROJECTS[active].location}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.h2
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: EASE }}
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(2.5rem, 8vw, 7rem)',
                fontWeight: 300,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--white)',
                marginBottom: '2rem',
              }}
            >
              {PROJECTS[active].title}
            </motion.h2>
          </AnimatePresence>

          {/* Project switcher */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-manrope)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: i === active ? 'var(--white)' : 'var(--white-30)',
                  padding: '0.5rem 0',
                  borderBottom: i === active ? '1px solid var(--white)' : '1px solid transparent',
                  transition: 'all 0.3s ease',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            ))}
            <a href="#contact" className="btn-ghost" style={{ marginLeft: 'auto' }}>View Archive</a>
          </div>
        </div>

        {/* Section label top-right */}
        <div style={{ position: 'absolute', top: '7rem', right: '3rem' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'flex-end' }}><span>Selected Work</span></div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ TESTIMONIALS ═══════════════════ */
function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="section-snap" style={{ background: 'var(--surface)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <FadeIn>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem' }}>
            <div>
              <div className="section-eyebrow"><span>Voices of Authority</span></div>
              <h2 className="t-headline" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}>Client stories</h2>
            </div>
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {/* Big quote mark */}
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '8rem', lineHeight: 0.8, color: 'var(--white-06)', marginBottom: '1rem', fontWeight: 900 }}>"</div>

            <blockquote>
              <p className="testimonial-quote" style={{ maxWidth: '800px', marginBottom: '2.5rem' }}>
                {TESTIMONIALS[active].quote}
              </p>
              <footer>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '0.25rem' }}>
                  {TESTIMONIALS[active].name}
                </div>
                <div className="t-label">{TESTIMONIALS[active].title}</div>
              </footer>
            </blockquote>
          </motion.div>
        </AnimatePresence>

        {/* Switcher */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? '32px' : '8px',
                height: '2px',
                background: i === active ? 'var(--white)' : 'var(--white-30)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s var(--ease-expo)',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      <Ticker reversed />
    </section>
  );
}

/* ═══════════════════ JOURNAL ═══════════════════ */
function Journal() {
  return (
    <section id="journal" className="section-snap" style={{ background: 'var(--bg)', display: 'flex', alignItems: 'center' }} aria-label="Archive">
      <div className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem', width: '100%' }}>
        <FadeIn>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <div className="section-eyebrow"><span>Journal</span></div>
              <h2 className="t-headline" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}>Cinematic Stories</h2>
            </div>
            <a href="#archive" className="btn-ghost">Full Archive</a>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {JOURNAL.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
              className="grid-2-col"
              style={{
                gap: '4rem',
                alignItems: 'center',
                padding: '3rem 0',
                borderBottom: '1px solid var(--white-06)',
                cursor: 'pointer',
              }}
            >
              {/* Left: image placeholder */}
              <div
                className={i % 2 === 0 ? 'img-arch-1' : 'img-arch-3'}
                style={{
                  aspectRatio: '16/9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <span style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.12)', textAlign: 'center' }}>
                  {post.tag}
                </span>
              </div>

              {/* Right: content */}
              <div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span className="t-label" style={{ color: 'var(--accent)' }}>{post.tag}</span>
                  <span className="t-label">{post.date}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '1rem' }}>
                  {post.title}
                </h3>
                <p className="t-body" style={{ marginBottom: '1.5rem' }}>{post.excerpt}</p>
                <span style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--white)', borderBottom: '1px solid var(--white-30)', paddingBottom: '2px' }}>
                  Read More →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ CONTACT / FOOTER ═══════════════════ */
function Contact() {
  return (
    <section id="contact" className="section-snap" style={{ background: 'var(--bg)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Main CTA block */}
      <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <FadeIn>
          <div className="section-eyebrow"><span>Contact</span></div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(2.5rem, 7vw, 7rem)',
              fontWeight: 900,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              lineHeight: 0.95,
              color: 'var(--white)',
              maxWidth: '900px',
              marginBottom: '3rem',
            }}
          >
            Let's discuss{' '}
            <span style={{ color: 'var(--white-30)', fontWeight: 300 }}>your vision.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '3rem' }}>
            <a
              href="mailto:office@mass-developers.com"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(0.85rem, 1.5vw, 1.2rem)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'var(--white)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--white-30)',
                paddingBottom: '2px',
                transition: 'border-color 0.2s ease',
              }}
            >
              office@mass-developers.com
            </a>
            <a
              href="tel:+918000000000"
              style={{
                fontFamily: 'var(--font-manrope)',
                fontSize: '0.85rem',
                color: 'var(--white-60)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
              }}
            >
              +91 80 0000 0000
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:office@mass-developers.com" className="btn-solid">Start a Project</a>
            <a href="#studio" className="btn-ghost">Our Process</a>
          </div>
        </FadeIn>
      </div>

      {/* Footer bar */}
      <footer style={{ borderTop: '1px solid var(--white-06)' }}>
        <div className="container">
          <div className="grid-3-col" style={{ gap: '2rem', padding: '3rem 0 2rem' }}>
            {/* Brand */}
            <div>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '1.2rem', fontWeight: 900, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '1rem' }}>
                M A S S
              </div>
              <p className="t-body" style={{ fontSize: '0.78rem', maxWidth: '220px' }}>
                Creating enduring architectural statements that transcend time. Designed for the bold.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <div className="t-label" style={{ marginBottom: '1.25rem', color: 'var(--white-60)' }}>Navigation</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {['Home', 'Projects', 'Studio', 'Journal', 'Archive', 'Contact'].map(l => (
                  <a key={l} href={`#${l.toLowerCase()}`} style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.78rem', color: 'var(--white-60)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = 'var(--white)'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = 'var(--white-60)'; }}
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="t-label" style={{ marginBottom: '1.25rem', color: 'var(--white-60)' }}>Connect</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {['Instagram', 'LinkedIn', 'Behance', 'YouTube'].map(s => (
                  <a key={s} href="#" style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.78rem', color: 'var(--white-60)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = 'var(--white)'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = 'var(--white-60)'; }}
                  >
                    {s} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', borderTop: '1px solid var(--white-06)' }}>
            <span className="t-label">© 2024 Mass Developers. Architectural Integrity.</span>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(l => (
                <a key={l} href="#" className="t-label" style={{ color: 'var(--white-30)', textDecoration: 'none' }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

/* ═══════════════════ PAGE ═══════════════════ */
export default function Page() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const idx = SECTIONS.indexOf(id);
            if (idx !== -1) {
              setActiveDot(idx);
              if (idx > 0) setActiveSection(idx);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <DotNav active={activeDot} />

      <main>
        <Hero />
        <Philosophy />
        <Expertise />
        <Projects />
        <Testimonials />
        <Journal />
        <Contact />
      </main>
    </>
  );
}
