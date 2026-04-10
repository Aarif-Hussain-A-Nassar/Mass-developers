'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

/* ─── Easing ─── */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─── FadeIn helper ─── */
function FadeIn({
  children,
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}) {
  const initial =
    direction === 'up'
      ? { opacity: 0, y: 48 }
      : direction === 'left'
      ? { opacity: 0, x: -48 }
      : { opacity: 0, x: 48 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated counter ─── */
function AnimatedStat({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let start = 0;
          const duration = 1600;
          const step = 16;
          const increment = value / (duration / step);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, step);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, started]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          color: 'var(--white)',
        }}
      >
        {count}
        {suffix}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-manrope)',
          fontSize: '0.62rem',
          fontWeight: 700,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--white-30)',
          marginTop: '0.6rem',
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ─── Value card (expandable) ─── */
function ValueCard({
  index,
  title,
  description,
  detail,
}: {
  index: number;
  title: string;
  description: string;
  detail: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setExpanded((p) => !p)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ layout: { duration: 0.4, ease: EASE } }}
      style={{
        padding: '2.5rem 2rem',
        background: expanded ? 'var(--surface-hi)' : 'var(--surface)',
        cursor: 'pointer',
        borderTop: '1px solid var(--white-06)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s ease',
        userSelect: 'none',
      }}
    >
      {/* Hover line accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: expanded ? 1 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--white)',
          transformOrigin: 'left',
        }}
      />

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: 'var(--font-manrope)',
              fontSize: '0.6rem',
              fontWeight: 800,
              color: 'var(--white-30)',
              marginBottom: '0.75rem',
              letterSpacing: '0.2em',
            }}
          >
            0{index + 1}
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1.15rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: description ? '0.75rem' : 0,
            }}
          >
            {title}
          </h3>
          <p className="t-body" style={{ fontSize: '0.85rem' }}>
            {description}
          </p>

          <AnimatePresence>
            {expanded && (
              <motion.p
                key="detail"
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="t-body"
                style={{ fontSize: '0.82rem', color: 'var(--white-60)', overflow: 'hidden' }}
              >
                {detail}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Plus / Minus toggle */}
        <motion.div
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            flexShrink: 0,
            width: '28px',
            height: '28px',
            border: '1px solid var(--white-30)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            fontWeight: 300,
            color: 'var(--white)',
            marginTop: '0.2rem',
          }}
        >
          +
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Team member card ─── */
function TeamCard({
  name,
  role,
  initials,
  delay,
}: {
  name: string;
  role: string;
  initials: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={delay}>
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: EASE }}
        style={{ cursor: 'default', overflow: 'hidden' }}
      >
        {/* Avatar */}
        <div
          style={{
            width: '100%',
            aspectRatio: '3/4',
            background: hovered ? 'var(--surface-hihi)' : 'var(--surface)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            transition: 'background 0.4s ease',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '3rem',
              fontWeight: 900,
              color: hovered ? 'var(--white)' : 'var(--white-30)',
              letterSpacing: '-0.04em',
              transition: 'color 0.35s ease',
            }}
          >
            {initials}
          </span>

          {/* Role overlay on hover */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: hovered ? '0%' : '100%' }}
            transition={{ duration: 0.4, ease: EASE }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'var(--white)',
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-manrope)',
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--bg)',
              }}
            >
              {role}
            </p>
          </motion.div>
        </div>

        {/* Name */}
        <div
          style={{
            paddingTop: '1rem',
            borderTop: '1px solid var(--white-06)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.9rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '0.25rem',
            }}
          >
            {name}
          </p>
          <p className="t-body" style={{ fontSize: '0.72rem' }}>
            {role}
          </p>
        </div>
      </motion.div>
    </FadeIn>
  );
}

/* ─── Main Page ─── */
export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');

  const values = [
    {
      title: 'Integrity',
      description: 'Transparent honesty in every client interaction and structural foundation.',
      detail:
        'We operate with zero tolerance for compromise on quality or ethics. Every contract, every material spec, every timeline promise is honoured — or we explain why and make it right.',
    },
    {
      title: 'Innovation',
      description: 'Cutting-edge construction technologies and sustainable materials.',
      detail:
        'From parametric design tools to green-certified materials, we stay at the frontier of what\'s technically possible so our clients benefit from tomorrow\'s solutions today.',
    },
    {
      title: 'Precision',
      description: 'Meticulous attention from the first blueprint to the final handover.',
      detail:
        'Our quality-control protocol spans 240+ checkpoints across the build lifecycle. Precision isn\'t a department — it\'s our culture.',
    },
    {
      title: 'Excellence',
      description: 'Delivering results that exceed expectations, always.',
      detail:
        'Excellence is not a target ceiling for us — it\'s a baseline. We design award-worthy spaces, then obsess over the details that make them truly unforgettable.',
    },
  ];

  const team = [
    { name: 'Mohammed Hussain', role: 'Founder & Chairman', initials: 'MH' },
    { name: 'Aisha Rahman', role: 'Principal Architect', initials: 'AR' },
    { name: 'Ravi Shankar', role: 'Head of Engineering', initials: 'RS' },
    { name: 'Fatima Al-Nasser', role: 'Director of Projects', initials: 'FN' },
  ];

  return (
    <>
      {/* ── Navbar ── */}
      <nav
        className="nav scrolled"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <a href="/" className="nav-logo" style={{ marginLeft: '1.5rem' }}>
          <img src="/logo.png" alt="MASS Logo" style={{ height: '75px', mixBlendMode: 'multiply' }} />
        </a>
        <motion.a
          href="/"
          className="nav-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            color: '#000',
            borderColor: 'rgba(0,0,0,0.3)',
            marginRight: '1.5rem',
            backgroundColor: 'rgba(0,0,0,0.05)',
            backdropFilter: 'blur(12px)',
          }}
        >
          ← Back to Home
        </motion.a>
      </nav>

      <main style={{ background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ══════════ HERO ══════════ */}
        <div
          ref={heroRef}
          style={{
            position: 'relative',
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'flex-end',
            overflow: 'hidden',
            background: 'var(--bg)',
            paddingBottom: '5rem',
            paddingTop: '10rem',
          }}
        >
          {/* Large ghost text background */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              y: heroY,
              opacity: heroOpacity,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(6rem, 18vw, 18rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.04em',
                color: 'var(--surface)',
                userSelect: 'none',
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              ABOUT
            </span>
          </motion.div>

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <FadeIn>
              <div className="section-eyebrow">
                <span>Our Story / 001</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(3rem, 8vw, 7.5rem)',
                  fontWeight: 900,
                  lineHeight: 0.9,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                }}
              >
                Building
                <br />
                Legacies.
              </h1>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p
                className="t-body"
                style={{ maxWidth: '480px', marginTop: '2rem', fontSize: '1rem', lineHeight: 1.9 }}
              >
                Founded on a singular vision — to reshape the skyline with integrity, innovation, and an unwavering commitment to quality.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* ══════════ STATS BAR ══════════ */}
        <div
          style={{
            borderTop: '1px solid var(--white-06)',
            borderBottom: '1px solid var(--white-06)',
            padding: '4rem 0',
            background: 'var(--surface)',
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '2rem',
              }}
            >
              <AnimatedStat value={new Date().getFullYear() - 2018} suffix="+" label="Years of Excellence" />
              <AnimatedStat value={450} suffix="+" label="Projects Delivered" />
              <AnimatedStat value={12000} suffix="+" label="Happy Families" />
              <AnimatedStat value={18} suffix="" label="Cities Active" />
            </div>
          </div>
        </div>

        {/* ══════════ WHO WE ARE ══════════ */}
        <div style={{ padding: '8rem 0' }}>
          <div className="container">
            <div className="grid-2-col" style={{ gap: '6rem', alignItems: 'center' }}>
              <FadeIn direction="left">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                  }}
                >
                  <div className="section-eyebrow">
                    <span>Who We Are / 002</span>
                  </div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      lineHeight: 1.0,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    More than
                    <br />a developer.
                  </h2>
                  <p className="t-body">
                    In 2018, four friends from the same neighborhood—all established in different facets of the construction industry—recognized a recurring flaw: a concerning lack of transparency and quality in most firms. Driven by a passion to deliver better, we founded MASS Developers.
                  </p>
                  <p className="t-body">
                    What started as a shared dream has evolved into a leading development firm. We began with simple goals: providing top-tier craftsmanship at fair prices. Today, from landmark residential projects to complex corporate offices, our narrative is defined by the trust we earn with every structure.
                  </p>
                </div>
              </FadeIn>

              {/* Minimal visual block */}
              <FadeIn delay={0.2} direction="right">
                <div style={{ position: 'relative' }}>
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '4/5',
                      background: 'var(--surface)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Geometric accent */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '2rem',
                        left: '2rem',
                        right: '2rem',
                        bottom: '2rem',
                        border: '1px solid var(--white-10)',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '4rem',
                        left: '4rem',
                        right: '4rem',
                        bottom: '4rem',
                        border: '1px solid var(--white-06)',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: 'clamp(3.5rem, 7vw, 7rem)',
                          fontWeight: 900,
                          letterSpacing: '-0.05em',
                          lineHeight: 1,
                          color: 'var(--white)',
                        }}
                      >
                        {new Date().getFullYear() - 2018}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-manrope)',
                          fontSize: '0.62rem',
                          fontWeight: 700,
                          letterSpacing: '0.3em',
                          textTransform: 'uppercase',
                          color: 'var(--white-30)',
                        }}
                      >
                        Years of Trust
                      </span>
                    </div>
                  </div>

                  {/* Sticker */}
                  <motion.div
                    animate={{ rotate: [0, 3, -3, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      bottom: '-1.5rem',
                      right: '-1.5rem',
                      width: '96px',
                      height: '96px',
                      background: 'var(--white)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.52rem',
                        fontWeight: 800,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--bg)',
                        lineHeight: 1.4,
                        padding: '0.5rem',
                      }}
                    >
                      Est.
                      <br />
                      2018
                    </span>
                  </motion.div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* ══════════ VISION & MISSION TABS ══════════ */}
        <div
          style={{
            padding: '6rem 0',
            background: 'var(--surface)',
            borderTop: '1px solid var(--white-06)',
          }}
        >
          <div className="container">
            <FadeIn>
              <div className="section-eyebrow" style={{ marginBottom: '2rem' }}>
                <span>Direction / 003</span>
              </div>
            </FadeIn>

            {/* Tabs */}
            <FadeIn delay={0.1}>
              <div
                style={{
                  display: 'flex',
                  gap: 0,
                  borderBottom: '1px solid var(--white-10)',
                  marginBottom: '3rem',
                }}
              >
                {(['vision', 'mission'] as const).map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    whileHover={{ opacity: 1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: activeTab === tab ? 'var(--white)' : 'var(--white-30)',
                      padding: '0.9rem 2rem',
                      position: 'relative',
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="tab-underline"
                        style={{
                          position: 'absolute',
                          bottom: -1,
                          left: 0,
                          right: 0,
                          height: '2px',
                          background: 'var(--white)',
                        }}
                        transition={{ duration: 0.3, ease: EASE }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </FadeIn>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              {activeTab === 'vision' ? (
                <motion.div
                  key="vision"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <div className="grid-2-col" style={{ gap: '4rem', alignItems: 'center' }}>
                    <div>
                      <h2
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: 'clamp(1.6rem, 3vw, 2.8rem)',
                          fontWeight: 900,
                          textTransform: 'uppercase',
                          lineHeight: 1.0,
                          marginBottom: '1.5rem',
                        }}
                      >
                        To be the benchmark
                        <br />
                        for the future.
                      </h2>
                      <p className="t-body">
                        To be the benchmark for architectural excellence and sustainable urban development, creating timeless environments that elevate the human experience across every city we touch.
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {['Architectural Excellence', 'Sustainable Development', 'Timeless Environments', 'Human-Centred Design'].map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08, ease: EASE }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '0.9rem 1.2rem',
                            background: 'var(--surface-hi)',
                          }}
                        >
                          <div
                            style={{
                              width: '6px',
                              height: '6px',
                              background: 'var(--white)',
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontFamily: 'var(--font-manrope)',
                              fontSize: '0.8rem',
                              fontWeight: 600,
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                            }}
                          >
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="mission"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <div className="grid-2-col" style={{ gap: '4rem', alignItems: 'center' }}>
                    <div>
                      <h2
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: 'clamp(1.6rem, 3vw, 2.8rem)',
                          fontWeight: 900,
                          textTransform: 'uppercase',
                          lineHeight: 1.0,
                          marginBottom: '1.5rem',
                        }}
                      >
                        Deliver exceptional
                        <br />
                        every time.
                      </h2>
                      <p className="t-body">
                        To deliver exceptional real estate projects through continuous innovation, uncompromising quality control, and a client-focused approach that values transparency and trust above all else.
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {['Continuous Innovation', 'Quality Control', 'Client Transparency', 'Absolute Trust'].map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08, ease: EASE }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '0.9rem 1.2rem',
                            background: 'var(--surface-hi)',
                          }}
                        >
                          <div
                            style={{
                              width: '6px',
                              height: '6px',
                              background: 'var(--white)',
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontFamily: 'var(--font-manrope)',
                              fontSize: '0.8rem',
                              fontWeight: 600,
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                            }}
                          >
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ══════════ VALUES (expandable) ══════════ */}
        <div style={{ padding: '8rem 0' }}>
          <div className="container">
            <FadeIn>
              <div className="section-eyebrow" style={{ marginBottom: '1rem' }}>
                <span>Core Values / 004</span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  lineHeight: 1.0,
                  marginBottom: '3rem',
                  letterSpacing: '-0.01em',
                }}
              >
                What drives us.
              </h2>
            </FadeIn>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderBottom: '1px solid var(--white-06)' }}>
              {values.map((v, i) => (
                <FadeIn key={v.title} delay={i * 0.08}>
                  <ValueCard index={i} {...v} />
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.2}>
              <p
                className="t-body"
                style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--white-30)' }}
              >
                Tap any card to expand.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* ══════════ TEAM ══════════ */}
        <div
          style={{
            padding: '8rem 0',
            background: 'var(--surface)',
            borderTop: '1px solid var(--white-06)',
          }}
        >
          <div className="container">
            <FadeIn>
              <div className="section-eyebrow" style={{ marginBottom: '1rem' }}>
                <span>Leadership / 005</span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  lineHeight: 1.0,
                  marginBottom: '3rem',
                  letterSpacing: '-0.01em',
                }}
              >
                The minds behind
                <br />
                the vision.
              </h2>
            </FadeIn>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2.5rem',
              }}
            >
              {team.map((member, i) => (
                <TeamCard key={member.name} {...member} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>

        {/* ══════════ CTA ══════════ */}
        <div style={{ padding: '8rem 0', textAlign: 'center' }}>
          <div className="container">
            <FadeIn>
              <div className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
                <span>Start a Conversation / 006</span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  marginBottom: '2.5rem',
                }}
              >
                Let's build something
                <br />
                extraordinary.
              </h2>
              <motion.a 
                href="/#contact" 
                className="btn-ghost" 
                style={{ display: 'inline-flex' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
                <span style={{ fontSize: '1rem', marginLeft: '0.25rem' }}>→</span>
              </motion.a>
            </FadeIn>
          </div>
        </div>

      </main>
    </>
  );
}
