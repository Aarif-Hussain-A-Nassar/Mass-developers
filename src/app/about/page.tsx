'use client';

import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <>
      <nav className="nav scrolled" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
        <a href="/" className="nav-logo" style={{ marginLeft: '1.5rem' }}>
          <img src="/logo.png" alt="MASS Logo" style={{ height: '75px', mixBlendMode: 'multiply' }} />
        </a>
        <a href="/" className="nav-cta" style={{ color: '#000000', borderColor: 'rgba(0,0,0,0.3)', marginRight: '1.5rem', backgroundColor: 'rgba(0, 0, 0, 0.05)', backdropFilter: 'blur(12px)' }}>
          Back to Home
        </a>
      </nav>

      <main style={{ background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh', paddingTop: '10rem', paddingBottom: '8rem' }}>
        <div className="container">
          <FadeIn>
            <div className="section-eyebrow"><span>Our Story / 001</span></div>
            <h1 style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 900, lineHeight: 0.95, textTransform: 'uppercase', marginBottom: '4rem' }}>
              Building <br /> Legacies.
            </h1>
          </FadeIn>

          <div className="grid-2-col" style={{ gap: '6rem' }}>
            <FadeIn delay={0.2}>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase' }}>Who We Are</h2>
              <p className="t-body" style={{ marginBottom: '1.5rem' }}>
                Mass Developers was founded on a singular vision: to reshape the skyline with integrity, innovation, and an unwavering commitment to quality. Over the years, we have grown from a modest construction firm into a leading real estate developer, trusted by thousands to deliver not just structures, but spaces that inspire.
              </p>
              <p className="t-body">
                We believe that every project is a narrative told in steel, glass, and concrete. Our team of expert architects, engineers, and project managers work cohesively to ensure that this narrative is flawlessly executed, blending modern aesthetics with functional durability.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase' }}>Our Vision & Mission</h2>
              <div style={{ padding: '2rem', background: 'var(--surface)', borderLeft: '3px solid var(--accent)' }}>
                <h3 style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase' }}>Vision</h3>
                <p className="t-body" style={{ marginBottom: '2rem', fontSize: '0.85rem' }}>
                  To be the benchmark for architectural excellence and sustainable urban development, creating timeless environments that elevate the human experience.
                </p>
                <h3 style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase' }}>Mission</h3>
                <p className="t-body" style={{ fontSize: '0.85rem' }}>
                  To deliver exceptional real estate projects through continuous innovation, uncompromising quality control, and a client-focused approach that values transparency and trust above all else.
                </p>
              </div>
            </FadeIn>
          </div>

          <div style={{ marginTop: '8rem' }}>
            <FadeIn>
              <h2 style={{ fontFamily: 'var(--font-inter)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase' }}>Our Core Values</h2>
            </FadeIn>
            <div className="grid-3-col" style={{ gap: '2rem' }}>
              {[ 
                { t: 'Integrity', d: 'Operating with complete transparency and honesty in every client interaction and structural foundation.' },
                { t: 'Innovation', d: 'Embracing cutting-edge construction technologies and sustainable materials to future-proof our developments.' },
                { t: 'Precision', d: 'Meticulous attention to detail at every phase, from the initial architectural blueprint to the final handover.' }
              ].map((val, i) => (
                <FadeIn delay={0.2 + (i * 0.1)} key={val.t}>
                  <div style={{ padding: '3rem 2rem', background: 'var(--surface)' }}>
                    <div style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.7rem', fontWeight: 800, color: 'var(--white-30)', marginBottom: '1rem' }}>0{i + 1}</div>
                    <h3 style={{ fontFamily: 'var(--font-inter)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase' }}>{val.t}</h3>
                    <p className="t-body" style={{ fontSize: '0.85rem' }}>{val.d}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
