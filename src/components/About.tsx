'use client';

import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { year: '2018', event: 'Founded by four friends with a vision for honest construction' },
  { year: '2020', event: 'Expanded into commercial and turnkey projects across Kerala'   },
  { year: '2022', event: 'Launched premium interior design vertical'                     },
  { year: '2024', event: 'Crossed 200+ successful project deliveries'                    },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        paddingTop:    '128px',
        paddingBottom: '128px',
        background:    'var(--section-bg-alt)',  /* #0e0e0e — surface_container_lowest */
      }}
    >
      <div className="container-max">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '6rem' }}
        >
          <span className="section-label" style={{ justifyContent: 'center' }}>Our Story</span>
          <h2
            style={{
              fontFamily:    "'Inter', sans-serif",
              fontSize:      'clamp(2rem, 5vw, 3.5rem)',
              fontWeight:    900,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom:  '1.5rem',
              color:         '#e2e2e2',
            }}
          >
            Built on Friendship,{' '}
            <span className="gradient-text">Driven by</span>
            <br />
            <span style={{ fontWeight: 300, color: 'rgba(226,226,226,0.3)', letterSpacing: '0.06em' }}>
              Quality
            </span>
          </h2>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            color:      'var(--muted)',
            maxWidth:   '560px',
            margin:     '0 auto',
            lineHeight: '1.75',
            fontSize:   '1rem',
          }}>
            Four friends in a neighborhood who shared a passion for construction —
            and a belief that the industry could be so much better.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start' }}
          className="about-grid"
        >
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            {/* Main image card — square, tonal, no rounded corners */}
            <div
              style={{
                aspectRatio: '4/5',
                background:  'var(--surface-container)',    /* tonal layering — no border */
                overflow:    'hidden',
                position:    'relative',
                borderRadius: 0,                           /* SQUARE */
              }}
            >
              {/* Tonal gradient interior */}
              <div style={{
                position:   'absolute',
                inset:      0,
                background: 'linear-gradient(135deg, #1b1b1b 0%, #2a2a2a 50%, #1b1b1b 100%)',
              }} />
              {/* Ghost watermark */}
              <div style={{
                position:   'absolute',
                inset:      0,
                display:    'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity:    0.05,
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
              {/* Bottom overlay */}
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

            {/* Floating badge — square, white */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{
                position:    'absolute',
                top:         '1.5rem',
                right:       '-1.25rem',
                background:  '#ffffff',
                color:       '#131313',
                padding:     '1.1rem 1.35rem',
                borderRadius: 0,             /* SQUARE */
                boxShadow:   '0 8px 40px rgba(0,0,0,0.5)',
                textAlign:   'center',
              }}
            >
              <div style={{
                fontFamily:    "'Inter', sans-serif",
                fontSize:      '1.8rem',
                fontWeight:    900,
                lineHeight:    1,
                letterSpacing: '-0.02em',
              }}>8+</div>
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
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Story paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1rem', lineHeight: '1.8', color: 'var(--muted)' }}>
                In our neighborhood, four buddies shared a passion for construction. Each worked
                in different companies in the industry — but we saw a common problem: most
                construction firms lacked honesty and quality.
              </p>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1rem', lineHeight: '1.8', color: 'var(--muted)' }}>
                So we thought: why not start our own? That&apos;s how Mass Developers was born
                in 2018. We started small, with big dreams — provide top-notch work at fair prices.
                Slowly, people noticed our dedication.
              </p>
              {/* Pull quote — ghost border left */}
              <p style={{
                fontFamily:  "'Manrope', sans-serif",
                fontSize:    '1rem',
                lineHeight:  '1.8',
                color:       'rgba(226,226,226,0.4)',
                fontStyle:   'italic',
                borderLeft:  '1px solid rgba(255,255,255,0.2)',
                paddingLeft: '1.5rem',
              }}>
                &ldquo;Today, we&apos;re known as the most trusted builders around — and our
                mission remains the same: keep building dreams, one project at a time.&rdquo;
              </p>
            </div>

            {/* Journey — milestones */}
            <h3 style={{
              fontFamily:    "'Inter', sans-serif",
              fontSize:      '0.72rem',
              fontWeight:    800,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom:  '1.75rem',
              color:         'var(--on-surface-variant)',
            }}>
              Our Journey
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  style={{
                    display:       'flex',
                    gap:           '1.25rem',
                    paddingBottom: '1.5rem',
                    marginBottom:  '1.5rem',
                    borderBottom:  i < milestones.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    alignItems:    'flex-start',
                  }}
                >
                  {/* Year badge — square */}
                  <div style={{
                    minWidth:      '52px',
                    height:        '52px',
                    background:    '#ffffff',
                    color:         '#131313',
                    borderRadius:  0,   /* SQUARE */
                    display:       'flex',
                    alignItems:    'center',
                    justifyContent: 'center',
                    fontFamily:    "'Inter', sans-serif",
                    fontSize:      '0.65rem',
                    fontWeight:    900,
                    letterSpacing: '0.06em',
                    flexShrink:    0,
                  }}>
                    {m.year}
                  </div>
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
