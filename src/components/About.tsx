'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const milestones = [
  { year: '2019', event: 'Founded by three friends with a vision for honest construction and uncompromising quality.' },
  { year: '2021', event: 'Gained recognition for structural integrity, expanding into large-scale residential and commercial projects.' },
  { year: '2023', event: 'Certified as one of the most trusted regional developers — serving clients across Kerala with precision and integrity.' },
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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  
  const rawImageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageY = useSpring(rawImageY, { stiffness: 60, damping: 20 });

  const stats = [
    { value: '8+', label: 'Years' },
    { value: '150+', label: 'Clients' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: 'clamp(4rem, 8vw, 10rem) 0',
        background: 'var(--section-bg-alt)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ maxWidth: '1400px' }}>

        {/* ─── Header Section ─── */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
          <FadeIn>
            <div className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
              <span>Who We Are / 002</span>
            </div>
          </FadeIn>

          <h2 style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            color: 'var(--white)',
            marginBottom: '1.5rem',
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
                    height: '110%', /* Extra height for parallax bleed */
                    objectFit: 'cover',
                    filter: 'grayscale(1) contrast(1.1) brightness(0.8)',
                  }}
                />
                <div className="overlay-text">
                  <h3>Mass Developers</h3>
                  <p>Ernakulam, KL · Est. 2019</p>
                </div>
              </motion.div>


            </motion.div>
          </div>

          {/* Narrative Text Column */}
          <div className="text-col">
            <div className="narrative-content">
              <FadeIn delay={0.2} direction="left">
                <p>
                  In our neighborhood, three friends saw a gap. Construction firms were everywhere, but honest execution was rare. We pooled our expertise—engineering, design, and management—to launch MASS with a &apos;client-first&apos; DNA.
                </p>
              </FadeIn>
              <FadeIn delay={0.35} direction="left">
                <p>
                  Working in different facets of the industry, we recognized a recurring flaw: a concerning lack of transparency. Driven by a passion to deliver better, we founded MASS Developers to provide top-tier craftsmanship with absolute integrity.
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

        {/* ─── Journey Timeline ─── */}
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
                <div className="event-content">
                  <p className="event-desc">{m.event}</p>
                </div>
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
          gap: 3rem;
          margin-bottom: clamp(4rem, 8vw, 8rem);
          align-items: center;
        }

        @media (min-width: 1024px) {
          .split-layout {
            grid-template-columns: 1fr 1fr;
            gap: 6rem;
          }
        }

        /* --- Visuals --- */
        .visual-col { position: relative; width: 100%; }
        .image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          margin: 0 auto;
        }
        
        @media (min-width: 768px) {
          .image-wrapper { aspect-ratio: 16/9; }
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
          padding: clamp(1.5rem, 3vw, 2.5rem);
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);
        }

        .overlay-text h3 { font-size: 1.1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.2rem; display: block; }
        .overlay-text p { font-size: 0.65rem; color: var(--white-40); text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700; }

        .badge {
          position: absolute;
          top: 10%;
          right: -2rem;
          padding: 1.15rem 1.5rem;
          background: var(--white);
          color: var(--bg);
          box-shadow: 0 10px 40px rgba(0,0,0,0.4);
          z-index: 5;
          text-align: center;
          min-width: 120px;
        }
        
        @media (max-width: 768px) {
          .badge { right: 0; padding: 0.8rem 1rem; min-width: 100px; top: 1rem; }
          .badge strong { font-size: 1.4rem !important; }
        }

        .badge strong { font-size: 1.8rem; font-weight: 900; line-height: 1; display: block; }
        .badge span { font-size: 0.52rem; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 800; }

        /* --- Text Column --- */
        .narrative-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          font-family: var(--font-manrope);
          font-size: clamp(0.95rem, 1.1vw, 1.1rem);
          line-height: 1.8;
          color: var(--white-60);
        }

        @media (max-width: 768px) {
          .narrative-content { text-align: left; }
        }

        .quote-box {
          border-left: 2px solid var(--white-10);
          padding: 0.5rem 0 0.5rem 2rem;
          color: var(--white-40);
          font-style: italic;
          font-size: clamp(0.9rem, 1vw, 1rem);
        }

        /* --- Achievements --- */
        .achievements-full {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          padding: 3rem 0;
          border-top: 1px solid var(--white-10);
          border-bottom: 1px solid var(--white-10);
          margin-bottom: clamp(4rem, 8vw, 8rem);
        }
        
        @media (min-width: 500px) {
          .achievements-full { grid-template-columns: repeat(2, 1fr); }
        }
        
        @media (min-width: 850px) { .achievements-full { grid-template-columns: repeat(2, 1fr); gap: 1rem; } }

        .stat-item { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .stat-val { font-family: var(--font-inter); font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 950; color: var(--white); line-height: 1; margin-bottom: 0.5rem; letter-spacing: -0.04em; }
        .stat-lab { font-size: 0.52rem; text-transform: uppercase; letter-spacing: 0.25em; color: var(--white-30); font-weight: 800; }

        @media (max-width: 480px) {
          .stat-val { font-size: 1.5rem; }
          .stat-lab { letter-spacing: 0.15em; }
        }

        /* --- Journey / Timeline --- */
        .journey-section { max-width: 1200px; margin: 0 auto; padding-bottom: 2rem; }
        .journey-head {
          font-family: var(--font-inter);
          font-size: 0.75rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: var(--white-40);
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
          text-align: center;
        }

        .journey-timeline {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        @media (min-width: 1024px) {
          .journey-timeline { flex-direction: row; gap: 2rem; align-items: flex-start; }
        }

        .timeline-item { flex: 1; display: flex; flex-direction: column; gap: 1.5rem; position: relative; }
        
        @media (max-width: 1023px) {
          .timeline-item { flex-direction: row; align-items: flex-start; gap: 1.5rem; }
          .event-content { padding-top: 0.8rem; }
        }

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
          font-size: 0.92rem;
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
