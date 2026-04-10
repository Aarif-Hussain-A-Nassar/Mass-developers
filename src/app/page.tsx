'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from 'framer-motion';

/* ═══════════════════ EASE ═══════════════════ */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ═══════════════════ DATA ═══════════════════ */
const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#philosophy' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

const TICKER_ITEMS = [
  'Residential', '✦', 'Commercial', '✦', 'Cultural', '✦', 'Interiors', '✦',
  'Execution', '✦', 'Structural Integrity', '✦', 'Precision', '✦', 'Est. 2018',
  'Residential', '✦', 'Commercial', '✦', 'Cultural', '✦', 'Interiors', '✦',
  'Execution', '✦', 'Structural Integrity', '✦', 'Precision', '✦', 'Est. 2018',
];

const EXPERTISE = [
  {
    title: 'Residential Building',
    body: "At MASS Developers, we specialize in constructing high-quality residential buildings that cater to the diverse needs and preferences of our clients. Whether it's a single-family home, an apartment complex, or a gated community, we are committed to delivering spaces that are not just structurally sound but also aesthetically pleasing and functional.",
    bg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Commercial Building',
    body: 'Our expertise extends to the construction of commercial buildings, including office complexes, retail outlets, industrial facilities, and more. We understand the unique requirements of commercial projects and work closely with our clients to deliver spaces that meet their business objectives while adhering to strict quality and safety standards.',
    bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Turnkey Work',
    body: 'As a full-service construction firm, we offer turnkey solutions to streamline the building process for our clients. From conceptualization and design to construction and final handover, we take care of every aspect of the project, ensuring a seamless and hassle-free experience for our clients.',
    bg: '/turnkey.png',
  },
  {
    title: 'Renovation Work',
    body: 'Whether it\'s revitalizing an existing space or restoring a historic building, we have the expertise and experience to handle renovation projects of all sizes and complexities. Our team of skilled professionals works diligently to transform outdated or dilapidated structures into modern, functional, and visually appealing spaces.',
    bg: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Interior Work',
    body: "At MASS Developers, we understand that the interior of a building plays a crucial role in defining its overall ambiance and functionality. That's why we offer comprehensive interior design and fit-out services to enhance the aesthetics and usability of our clients' spaces. From space planning and material selection to furniture installation and finishing touches, we ensure that every aspect of the interior design aligns with our clients' vision and requirements.",
    bg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
  },
];

const PROJECTS = [
  {
    title: 'The Obsidian Loft',
    label: 'Project 039 / 2022',
    location: 'Residential / Los Angeles',
    bg: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.65) 100%), url("/arch-1.jpg") center/cover no-repeat',
    placeholder: 'linear-gradient(135deg, var(--surface) 0%, var(--surface-hi) 60%, var(--surface) 100%)',
  },
  {
    title: 'Summit Corporate Center',
    label: 'Project 012 / 2023',
    location: 'Commercial / Singapore',
    bg: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.65) 100%), url("/arch-2.jpg") center/cover no-repeat',
    placeholder: 'linear-gradient(135deg, var(--surface-hi) 0%, var(--surface) 60%, var(--surface-hi) 100%)',
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

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.replace('#', ''));
    const updateActive = () => {
      if (window.scrollY < 80) { setActiveIdx(0); return; }
      const midpoint = window.scrollY + window.innerHeight / 2;
      let best = 0;
      sectionIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.offsetTop <= midpoint) best = i;
      });
      setActiveIdx(best);
    };
    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    return () => window.removeEventListener('scroll', updateActive);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, idx: number) => {
    e.preventDefault();
    setActiveIdx(idx);
    setIsMenuOpen(false);
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-logo" style={{ marginLeft: '1.5rem' }} onClick={(e) => handleClick(e, '#hero', 0)}>
          <motion.img
            src="/logo.png"
            alt="MASS Logo"
            className="nav-logo-img"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map((l, i) => (
            <li key={i}>
              <a
                href={l.href}
                className={activeIdx === i ? 'active' : ''}
                onClick={(e) => handleClick(e, l.href, i)}
                style={{ color: scrolled ? '#000000' : '#ffffff' }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="nav-cta"
          onClick={(e) => handleClick(e, '#contact', NAV_LINKS.length - 1)}
          style={{
            color: scrolled ? '#000000' : '#ffffff',
            borderColor: scrolled ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'
          }}
        >
          Inquire
        </a>
      </nav>

      <div className="floating-nav-dock">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed',
                bottom: 'clamp(70px, 10vh, 90px)',
                left: '12px',
                right: '12px',
                zIndex: 1000,
                background: 'rgba(10, 10, 10, 0.95)',
                backdropFilter: 'blur(20px)',
                padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
                border: '1px solid rgba(255,255,255,0.1)',
                maxHeight: '70vh',
                overflowY: 'auto',
                borderRadius: '4px'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 2.5vw, 1.25rem)' }}>
                {NAV_LINKS.map((l, i) => (
                  <motion.a
                    key={i}
                    href={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={(e) => handleClick(e, l.href, i)}
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(0.85rem, 3.5vw, 1.1rem)',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: activeIdx === i ? '#ffffff' : 'rgba(255,255,255,0.3)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem'
                    }}
                  >
                    <span style={{ fontSize: '0.55rem', opacity: 0.3 }}>0{i + 1}</span>
                    {l.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
          style={{
            position: 'fixed',
            bottom: 'clamp(14px, 3vh, 24px)',
            right: 'clamp(12px, 3vw, 20px)',
            zIndex: 1001,
            background: isMenuOpen ? '#ffffff' : '#000000',
            color: isMenuOpen ? '#000000' : '#ffffff',
            border: 'none',
            padding: 'clamp(0.45rem, 1.2vh, 0.75rem) clamp(1rem, 4vw, 1.8rem)',
            borderRadius: '3rem',
            fontFamily: 'var(--font-manrope)',
            fontSize: 'clamp(0.45rem, 1.8vw, 0.6rem)',
            fontWeight: 800,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            transition: 'background 0.3s ease, color 0.3s ease',
            whiteSpace: 'nowrap',
            maxWidth: 'calc(100vw - 24px)'
          }}
        >
          {isMenuOpen ? 'Close' : (
            <>
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>{NAV_LINKS[activeIdx].label}</span>
              <span>+</span>
            </>
          )}
        </motion.button>
      </div>

    </>
  );
}

/* ═══════════════════ DOT NAV ═══════════════════ */
const SECTIONS_IDS = ['hero', 'philosophy', 'expertise', 'projects', 'testimonials', 'journal', 'contact'];

function DotNav({ active }: { active: number }) {
  return (
    <div className="dot-nav">
      {SECTIONS_IDS.map((id, i) => (
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
function FadeIn({ children, delay = 0, className = '' }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springMouseX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springMouseY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  const moveX = useTransform(springMouseX, [-0.5, 0.5], ['-1.5%', '1.5%']);
  const moveY = useTransform(springMouseY, [-0.5, 0.5], ['-1.5%', '1.5%']);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const y = useTransform(smoothProgress, [0, 1], [0, -150]);
  const bgY = useTransform(smoothProgress, [0, 1], [0, 50]);
  const opac = useTransform(smoothProgress, [0, 0.6], [1, 0]);
  const blur = useTransform(smoothProgress, [0, 0.8], [0, 15]);

  const handleMouseMove = () => { };

  const titleText = "MASS";

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: EASE }}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          y: bgY,
          filter: `blur(${blur}px)`,
        }}
      >
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)' }} />
      </motion.div>


      <motion.div style={{ y, opacity: opac, position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', padding: '0 1rem', willChange: 'transform, opacity' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.1em', marginBottom: '1.25rem', paddingLeft: '0.55em' }}>
          {titleText.split('').map((char, i) => (
            <motion.h1
              key={i}
              initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.4, delay: 0.2 + i * 0.1, ease: EASE }}
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(2.5rem, 10vw, 13rem)',
                fontWeight: 100,
                letterSpacing: 'clamp(0.2em, 5vw, 0.55em)',
                textTransform: 'uppercase',
                lineHeight: 1,
                color: '#ffffff'
              }}
            >
              {char}
            </motion.h1>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.45em' }}
          transition={{ duration: 1.5, delay: 0.8, ease: EASE }}
          style={{ fontFamily: 'var(--font-manrope)', fontSize: 'clamp(0.45rem, 1.2vw, 0.72rem)', fontWeight: 500, textTransform: 'uppercase', color: 'rgba(255,255,255,0.70)', marginBottom: '3.5rem' }}
        >
          Precision in silence. Architecture as a manifesto.
        </motion.p>

        <motion.div style={{ display: 'inline-flex', alignItems: 'center', gap: 'clamp(0.75rem, 2vw, 1.5rem)', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['projects', 'philosophy'].map((target, idx) => (
            <motion.a
              key={target}
              href={`#${target}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => { e.preventDefault(); document.querySelector(`#${target}`)?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                fontFamily: 'var(--font-manrope)',
                fontSize: 'clamp(0.5rem, 0.8vw, 0.65rem)',
                fontWeight: 800,
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#ffffff',
                textDecoration: 'none',
                padding: 'clamp(0.5rem, 1.2vw, 0.85rem) clamp(1rem, 3.5vw, 2.5rem)',
                border: '0.8px solid rgba(255,255,255,0.3)',
                backgroundColor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(12px)',
                opacity: 0.9,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={e => { Object.assign(e.currentTarget.style, { backgroundColor: '#ffffff', color: '#000000', borderColor: '#ffffff', opacity: '1' }); }}
              onMouseLeave={e => { Object.assign(e.currentTarget.style, { backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)', opacity: '0.9' }); }}
            >
              {idx === 0 ? 'View Works' : 'Our Studio'}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <div className="hero-scroll-indicator" style={{ position: 'absolute', bottom: '2rem', left: 0, right: 0, zIndex: 2, display: 'flex', justifyContent: 'center' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)', backgroundSize: '100% 200%', animation: 'scroll-line 2s cubic-bezier(0.76, 0, 0.24, 1) infinite' }} />
          <span style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Scroll</span>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0% { background-position: 0% 100%; opacity: 0; }
          50% { opacity: 1; }
          100% { background-position: 0% -100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════ PHILOSOPHY ═══════════════════ */
function Philosophy() {
  return (
    <section id="philosophy" className="section-snap" style={{ background: 'var(--bg)', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ padding: '6rem 1rem' }}>
        <FadeIn><div className="section-eyebrow"><span>Philosophy / 001</span></div></FadeIn>
        <div className="grid-2-col" style={{ gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center' }}>
          <FadeIn delay={0.1}>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(2rem, 4.5vw, 4.5rem)', fontWeight: 900, lineHeight: 0.95, textTransform: 'uppercase' }}>
              <motion.span whileHover={{ x: 10, color: 'var(--accent)' }} transition={{ duration: 0.3 }} style={{ display: 'block', color: 'var(--white)', cursor: 'default' }}>We do not build</motion.span>
              <motion.span whileHover={{ x: 10, color: 'var(--accent)' }} transition={{ duration: 0.3 }} style={{ display: 'block', color: 'var(--white)', cursor: 'default' }}>structures;</motion.span>
              <motion.span whileHover={{ x: 10, color: 'var(--white)' }} transition={{ duration: 0.3 }} style={{ display: 'block', color: 'var(--white-30)', fontWeight: 300, cursor: 'default' }}>we sculpt light.</motion.span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div>
              <p className="t-body" style={{ marginBottom: '2rem' }}>
                MASS DEVELOPERS operates at the intersection of structural gravity and ethereal transparency.
                Our methodology rejects the ornamental in favor of the essential.
              </p>
              <div className="philosophy-stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem', borderTop: '1px solid var(--white-06)', paddingTop: '2rem' }}>
                {[['250+', 'Projects'], [`${new Date().getFullYear() - 2018}+`, 'Years']].map(([num, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: '1.8rem', fontWeight: 900, color: 'var(--white)' }}>{num}</div>
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
    <section id="expertise" style={{ background: 'var(--surface)', padding: '6rem 0' }}>
      <div className="container">
        <FadeIn><h2 className="t-headline" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 100, letterSpacing: '0.15em', marginBottom: '6rem' }}>EXPERTISE</h2></FadeIn>
        <div className="grid-2-col" style={{ gap: 'clamp(2rem, 5vw, 6rem) clamp(1.5rem, 3vw, 4rem)' }}>
          {EXPERTISE.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: (i % 2) * 0.15 }}>
              <div className="expertise-card">
                <img src={exp.bg} alt={exp.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
                <div style={{ background: 'var(--surface-hihi)', padding: '2.5rem 2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-inter)', fontSize: '1.4rem', fontWeight: 100, textTransform: 'uppercase', color: 'var(--white)', marginBottom: '1rem' }}>{exp.title}</h3>
                  <p className="t-body" style={{ fontSize: '0.85rem', color: 'var(--white-60)' }}>{exp.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ PROJECTS ═══════════════════ */
function Projects() {
  const [active, setActive] = useState(0);
  return (
    <section id="projects" style={{ background: 'var(--bg)', height: '100vh', position: 'relative' }}>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'absolute', inset: 0, background: PROJECTS[active].placeholder }} />
      </AnimatePresence>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface) 0%, rgba(255,255,255,0.1) 100%)' }} />
      <div className="projects-overlay" style={{ position: 'absolute', bottom: '4rem', left: '5rem', right: '5rem' }}>
        <AnimatePresence mode="wait">
          <motion.h2 key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="projects-title" style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(2rem, 8vw, 7rem)', fontWeight: 300, color: 'var(--white)' }}>
            {PROJECTS[active].title}
          </motion.h2>
        </AnimatePresence>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
          {PROJECTS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ background: 'none', border: 'none', color: i === active ? 'var(--white)' : 'var(--white-30)', cursor: 'pointer' }}>{i + 1}</button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ TESTIMONIALS ═══════════════════ */
function Testimonials() {
  const [active, setActive] = useState(0);
  return (
    <section id="testimonials" style={{ background: 'var(--surface)', padding: '6rem 0' }}>
      <div className="container">
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <p className="testimonial-quote" style={{ marginBottom: '2rem' }}>{TESTIMONIALS[active].quote}</p>
            <div className="t-label">{TESTIMONIALS[active].name}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════ JOURNAL ═══════════════════ */
function Journal() {
  return (
    <section id="journal" style={{ background: 'var(--bg)', padding: '6rem 0' }}>
      <div className="container">
        <h2 className="t-headline">Journal</h2>
        {JOURNAL.map((post, i) => (
          <div key={i} style={{ padding: '3rem 0', borderBottom: '1px solid var(--white-06)' }}>
            <h3 className="journal-post-title" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--white)', marginBottom: '0.75rem' }}>{post.title}</h3>
            <p className="t-body">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════ CONTACT ═══════════════════ */
function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--bg)', padding: '8rem 0' }}>
      <div className="container">
        <h2 className="contact-heading" style={{ fontSize: 'clamp(2rem, 7vw, 7rem)', color: 'var(--white)', lineHeight: 0.9 }}>Let&#39;s discuss vision.</h2>
        <div style={{ marginTop: '4rem' }}>
          <a href="mailto:office@mass-developers.com" className="btn-solid">Start Project</a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ PAGE ═══════════════════ */
export default function Page() {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActiveDot(SECTIONS_IDS.indexOf(e.target.id)); });
    }, { threshold: 0.5 });
    SECTIONS_IDS.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
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
