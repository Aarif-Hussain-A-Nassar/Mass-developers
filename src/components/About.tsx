'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const milestones = [
  { year: '2018', event: 'Founded by four neighborhood friends with a vision for honest construction.' },
  { year: '2020', event: 'Gained recognition for quality and honesty, expanding into residential and commercial projects.' },
  { year: '2022', event: 'Became known as one of the most trusted builders in the region.' },
  { year: '2024', event: 'Continuing our mission: building dreams, one project at a time.' },
];

/* Word-by-word reveal — reused pattern */
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
              delay:    delayBase + i * 0.1,
              ease:     [0.16, 1, 0.3, 1],
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
  const imageRef   = useRef<HTMLDivElement>(null);

  const yearsOfExp = new Date().getFullYear() - 2018;

  /* Parallax: image moves slower than text as you scroll */
  const { scrollYProgress } = useScroll({
    target:  sectionRef,
    offset:  ['start end', 'end start'],
  });
  const rawImageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageY    = useSpring(rawImageY, { stiffness: 80, damping: 20 });

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        paddingTop:    '128px',
        paddingBottom: '128px',
        background:    'var(--section-bg-alt)',
        overflow:      'hidden', /* contain the parallax */
      }}
    >
      <div className="container-max">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          {/* Label with animated line draw */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display:         'block',
                  width:           '2rem',
                  height:          '1px',
                  background:      'rgba(198,198,198,0.5)',
                  transformOrigin: 'left',
                }}
              />
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  fontFamily:    "'Manrope', sans-serif",
                  fontSize:      '0.68rem',
                  fontWeight:    700,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color:         'var(--on-surface-variant)',
                }}
              >
                Our Story
              </motion.span>
            </div>
          </motion.div>

          <h2 style={{
            fontFamily:    "'Inter', sans-serif",
            fontSize:      'clamp(2rem, 5vw, 3.5rem)',
            fontWeight:    900,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom:  '1.5rem',
            color:         '#e2e2e2',
          }}>
            <WordReveal text="Built on Friendship," delayBase={0} />
            {' '}
            <span className="gradient-text" style={{ display: 'inline-block' }}>
              <WordReveal text="Driven by" delayBase={0.15} />
            </span>
            <br />
            <WordReveal
              text="Quality"
              delayBase={0.35}
              style={{ fontWeight: 300, color: 'rgba(226,226,226,0.3)', letterSpacing: '0.06em' }}
            />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              color:      'var(--muted)',
              maxWidth:   '560px',
              margin:     '0 auto',
              lineHeight: '1.75',
              fontSize:   '1rem',
            }}
          >
            Four friends in a neighborhood who shared a passion for construction —
            and a belief that the industry could be so much better.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start' }}
          className="about-grid"
        >
          {/* Image Column — parallax */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <div style={{ overflow: 'hidden' }}>
              {/* Image moves at different speed — the parallax effect */}
              <motion.div style={{ y: imageY }}>
                <div
                  style={{
                    aspectRatio:  '4/5',
                    background:   'var(--surface-container)',
                    overflow:     'hidden',
                    position:     'relative',
                    borderRadius: 0,
                  }}
                >
                  <div style={{
                    position:   'absolute',
                    inset:      0,
                    background: 'linear-gradient(135deg, #1b1b1b 0%, #2a2a2a 50%, #1b1b1b 100%)',
                  }} />
                  <div style={{
                    position:       'absolute',
                    inset:          0,
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    opacity:        0.05,
                  }}>
                    <span style={{
                      fontFamily:    "'Inter', sans-serif",
                      fontSize:      '5rem',
                      fontWeight:    900,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color:         '#fff',
                    }}>
                      MASS
                    </span>
                  </div>
                  <div style={{
                    position:   'absolute',
                    bottom:     0,
                    left:       0,
                    right:      0,
                    padding:    '2.5rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                    color:      '#fff',
                  }}>
                    <h3 style={{
                      fontFamily:    "'Inter', sans-serif",
                      fontSize:      '1.3rem',
                      fontWeight:    800,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      marginBottom:  '0.35rem',
                    }}>
                      Mass Developers
                    </h3>
                    <p style={{
                      fontFamily:    "'Manrope', sans-serif",
                      fontSize:      '0.72rem',
                      opacity:       0.55,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      fontWeight:    600,
                    }}>
                      Founded 2018 · Ernakulam, Kerala
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Badge: Years — pops in after image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.06 }}
              style={{
                position:    'absolute',
                top:         '1.5rem',
                right:       '-1.25rem',
                background:  '#ffffff',
                color:       '#131313',
                padding:     '1.1rem 1.35rem',
                borderRadius: 0,
                boxShadow:   '0 8px 40px rgba(0,0,0,0.5)',
                textAlign:   'center',
                cursor:      'default',
                zIndex:      2,
              }}
            >
              <div style={{
                fontFamily:    "'Inter', sans-serif",
                fontSize:      '1.8rem',
                fontWeight:    900,
                lineHeight:    1,
                letterSpacing: '-0.02em',
              }}>
                {new Date().getFullYear() - 2018}+
              </div>
              <div style={{
                fontFamily:    "'Manrope', sans-serif",
                fontSize:      '0.6rem',
                fontWeight:    700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginTop:     '0.3rem',
                opacity:       0.7,
              }}>Years</div>
            </motion.div>

            {/* Badge: Families — second stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: 6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.06 }}
              style={{
                position:    'absolute',
                top:         '8rem',
                right:       '-1.25rem',
                background:  '#131313',
                color:       '#ffffff',
                padding:     '1.1rem 1.35rem',
                borderRadius: 0,
                boxShadow:   '0 8px 40px rgba(0,0,0,0.6)',
                textAlign:   'center',
                cursor:      'default',
                zIndex:      2,
                border:      '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div style={{
                fontFamily:    "'Inter', sans-serif",
                fontSize:      '1.8rem',
                fontWeight:    900,
                lineHeight:    1,
                letterSpacing: '-0.02em',
              }}>
                12k+
              </div>
              <div style={{
                fontFamily:    "'Manrope', sans-serif",
                fontSize:      '0.6rem',
                fontWeight:    700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginTop:     '0.3rem',
                opacity:       0.6,
              }}>Families</div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
              {[
                'In our neighborhood, four buddies shared a passion for construction. Each worked in different companies in the industry — but we saw a common problem: most construction firms lacked honesty and quality.',
                'So we thought: why not start our own? That\'s how MASS Developers was born in 2018. We started small, with big dreams — to provide top-notch work at fair prices. Slowly, people noticed our dedication.',
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1rem', lineHeight: '1.8', color: 'var(--muted)' }}
                >
                  {text}
                </motion.p>
              ))}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily:  "'Manrope', sans-serif",
                  fontSize:    '1rem',
                  lineHeight:  '1.8',
                  color:       'rgba(226,226,226,0.4)',
                  fontStyle:   'italic',
                  borderLeft:  '1px solid rgba(255,255,255,0.2)',
                  paddingLeft: '1.5rem',
                }}
              >
                &ldquo;Today, we&apos;re known as the most trusted builders around — and our
                mission remains the same: keep building dreams, one project at a time.&rdquo;
              </motion.p>
            </div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display:       'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap:           '0',
                marginBottom:  '3.5rem',
                borderTop:     '1px solid rgba(255,255,255,0.08)',
                borderBottom:  '1px solid rgba(255,255,255,0.08)',
                padding:       '1.75rem 0',
              }}
            >
              {[
                { value: `${new Date().getFullYear() - 2018}+`, label: 'Years' },
                { value: '12,000+',                             label: 'Families' },
                { value: '200+',                                label: 'Projects' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    textAlign:   'center',
                    borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  }}
                >
                  <div style={{
                    fontFamily:    "'Inter', sans-serif",
                    fontSize:      'clamp(1.4rem, 3vw, 2rem)',
                    fontWeight:    900,
                    lineHeight:    1,
                    letterSpacing: '-0.02em',
                    color:         '#e2e2e2',
                    marginBottom:  '0.35rem',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily:    "'Manrope', sans-serif",
                    fontSize:      '0.58rem',
                    fontWeight:    700,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color:         'var(--muted)',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Milestones */}
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily:    "'Inter', sans-serif",
                fontSize:      '0.72rem',
                fontWeight:    800,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                marginBottom:  '1.75rem',
                color:         'var(--on-surface-variant)',
              }}
            >
              Our Journey
            </motion.h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 6 }}
                  style={{
                    display:       'flex',
                    gap:           '1.25rem',
                    paddingBottom: '1.5rem',
                    marginBottom:  '1.5rem',
                    borderBottom:  i < milestones.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    alignItems:    'flex-start',
                    cursor:        'default',
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, background: '#e2e2e2' }}
                    transition={{ duration: 0.2 }}
                    style={{
                      minWidth:       '52px',
                      height:         '52px',
                      background:     '#ffffff',
                      color:          '#131313',
                      borderRadius:   0,
                      display:        'flex',
                      alignItems:     'center',
                      justifyContent: 'center',
                      fontFamily:     "'Inter', sans-serif",
                      fontSize:       '0.65rem',
                      fontWeight:     900,
                      letterSpacing:  '0.06em',
                      flexShrink:     0,
                    }}
                  >
                    {m.year}
                  </motion.div>
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize:   '0.9rem',
                    lineHeight: '1.65',
                    color:      'var(--muted)',
                    paddingTop: '0.8rem',
                  }}>
                    {m.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
