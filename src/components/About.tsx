'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const milestones = [
  { year: '2019', event: 'Founded by four neighborhood friends with a vision for honest construction and uncompromising quality.' },
  { year: '2021', event: 'Gained recognition for structural integrity, expanding into large-scale residential and commercial projects.' },
  { year: '2023', event: 'Certified as one of the most trusted regional developers with 1000+ happy families served.' },
  { year: '2024', event: 'Continuing our mission: building architectural legacies, one project at a time.' },
];

/* Word-by-word reveal helper */
function WordReveal({
  text,
  style = {},
  delayBase = 0,
}: {
  text: string;
  style?: React.CSSProperties;
  delayBase?: number;
}) {
  const words = text.split(' ');
  return (
    <span style={style}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: delayBase + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const yearsOfExp = new Date().getFullYear() - 2019;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rawImageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageY = useSpring(rawImageY, { stiffness: 60, damping: 20 });

  const stats = [
    { value: `${yearsOfExp}+`, label: 'Years' },
    { value: '150+', label: 'Projects' },
    { value: '1000+', label: 'Families' },
    { value: '02', label: 'Offices' },
    { value: '50+', label: 'Staff' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: 'clamp(5rem, 10vw, 10rem) 0',
        background: 'var(--section-bg-alt)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ maxWidth: '1400px' }}>

        {/* ─── Header Section ─── */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 8vw, 8rem)' }}>
          <FadeIn>
            <div className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
              <span>Who We Are / 002</span>
            </div>
          </FadeIn>

          <h2 style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'clamp(2.2rem, 6vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            color: 'var(--white)',
            marginBottom: '2rem',
          }}>
            <WordReveal text="Foundations of Trust," delayBase={0} />
            <br />
            <span style={{ color: 'var(--white-20)' }}>
              <WordReveal text="Built by Friends." delayBase={0.3} />
            </span>
          </h2>
        </div>

        {/* ─── Upper Content Split ─── */}
        <div className="split-layout">
          {/* Visual Column */}
          <div className="visual-col">
            <motion.div
              className="image-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div style={{ y: imageY }} className="parallax-inner">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern Architectural Design"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(1) contrast(1.1) brightness(0.8)',
                  }}
                />
                <div className="overlay-text">
                  <h3>Mass Developers</h3>
                  <p>Ernakulam, KL · Est. 2019</p>
                </div>
              </motion.div>

              <motion.div
                className="badge badge-light"
                initial={{ opacity: 0, x: 20, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <strong>{yearsOfExp}+</strong>
                <span>Years of Quality</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Narrative Text Column */}
          <div className="text-col">
            <div className="narrative-content">
              <FadeIn delay={0.2} direction="left">
                <p>
                  In our neighborhood, four friends saw a gap. Construction firms were everywhere, but honest execution was rare. We pooled our expertise—engineering, design, and management—to launch MASS with a &apos;client-first&apos; DNA.
                </p>
              </FadeIn>
              <FadeIn delay={0.35} direction="left">
                <p>
                  What started as a shared vision between four neighbors has evolved into a regional benchmark for architectural excellence. Today, we don&apos;t just build spaces; we build the trust that families call home.
                </p>
              </FadeIn>
              <FadeIn delay={0.5} direction="left">
                <div className="quote-box">
                  <p>&ldquo;We do not build structures; we sculpt light and space with unwavering integrity.&rdquo;</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* ─── Lower Achievements Strip ─── */}
        <div className="achievements-full">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-item"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="stat-val">{stat.value}</span>
              <span className="stat-lab">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* ─── Journey Timeline (New UI) ─── */}
        <div className="journey-section">
          <FadeIn>
            <h3 className="journey-head">Our Journey</h3>
          </FadeIn>

          <div className="journey-timeline">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="time-marker">
                  <span className="year-disk">{m.year}</span>
                  <div className="connector-line" />
                </div>
                <p className="event-desc">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        /* --- Layout --- */
        .split-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          margin-bottom: 6rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .split-layout {
            grid-template-columns: 1fr 1fr;
            gap: 8rem;
          }
        }

        /* --- Visuals --- */
        .visual-col { position: relative; }
        .image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          overflow: visible;
        }
        @media (min-width: 1024px) {
          .image-wrapper { aspect-ratio: 4/5; max-width: 500px; margin-left: auto; }
        }

        .parallax-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border: 1px solid var(--white-10);
          background: var(--surface);
          overflow: hidden;
        }

        .overlay-text {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2.5rem;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
        }

        .overlay-text h3 { font-size: 1.1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.2rem; }
        .overlay-text p { font-size: 0.65rem; color: var(--white-40); text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700; }

        .badge {
          position: absolute;
          top: 10%;
          right: -5%;
          padding: 1.25rem 1.75rem;
          background: var(--white);
          color: var(--bg);
          box-shadow: 0 10px 40px rgba(0,0,0,0.4);
          z-index: 5;
          text-align: center;
        }
        .badge strong { font-size: 1.8rem; font-weight: 900; line-height: 1; display: block; }
        .badge span { font-size: 0.55rem; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 800; }

        @media (max-width: 1024px) { .badge { right: 0; } }

        /* --- Text Column --- */
        .narrative-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          font-family: var(--font-manrope);
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--white-60);
        }

        .quote-box {
          border-left: 2px solid var(--white-10);
          padding-left: 2rem;
          color: var(--white-40);
          font-style: italic;
          font-size: 1rem;
        }

        /* --- Achievements --- */
        .achievements-full {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          padding: 3rem 0;
          border-top: 1px solid var(--white-10);
          border-bottom: 1px solid var(--white-10);
          margin-bottom: 8rem;
        }
        @media (min-width: 640px) { .achievements-full { grid-template-columns: repeat(5, 1fr); } }

        .stat-item { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .stat-val { font-family: var(--font-inter); font-size: 2rem; font-weight: 950; color: var(--white); line-height: 1; margin-bottom: 0.5rem; letter-spacing: -0.04em; }
        .stat-lab { font-size: 0.55rem; text-transform: uppercase; letter-spacing: 0.25em; color: var(--white-30); font-weight: 800; }

        /* --- Journey / Timeline --- */
        .journey-section { max-width: 1200px; margin: 0 auto; }
        .journey-head {
          font-family: var(--font-inter);
          font-size: 0.75rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: var(--white-40);
          margin-bottom: 4rem;
          text-align: center;
        }

        .journey-timeline {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 1024px) {
          .journey-timeline { grid-template-columns: repeat(4, 1fr); gap: 2rem; height: 300px; }
        }

        .timeline-item { display: flex; flex-direction: column; gap: 1.5rem; }
        .time-marker { position: relative; display: flex; align-items: center; }

        .year-disk {
          width: 54px;
          height: 54px;
          background: var(--white);
          color: var(--bg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-inter);
          font-weight: 950;
          font-size: 0.75rem;
          flex-shrink: 0;
          z-index: 2;
        }

        .connector-line {
          position: absolute;
          left: 54px;
          right: -2rem;
          height: 1px;
          background: var(--white-10);
          display: none;
        }

        @media (min-width: 1024px) {
          .connector-line { display: block; }
          .timeline-item:last-child .connector-line { display: none; }
        }

        .event-desc {
          font-family: var(--font-manrope);
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--white-50);
        }
      `}</style>
    </section>
  );
};

/* Internal FadeIn Component */
function FadeIn({ children, delay = 0, direction = 'up' }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'down' | 'left' | 'right' }) {
  const x = direction === 'left' ? 30 : direction === 'right' ? -30 : 0;
  const y = direction === 'up' ? 30 : direction === 'down' ? -30 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default About;
