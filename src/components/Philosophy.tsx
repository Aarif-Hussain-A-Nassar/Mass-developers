'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import StatCounter from './StatCounter';

export default function Philosophy() {
  return (
    <section id="about-us" className="section-snap" style={{ background: 'var(--bg)', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ padding: 'clamp(4rem, 10vw, 10rem) 1.25rem' }}>
        <FadeIn><div className="section-eyebrow"><span>About Us / 001</span></div></FadeIn>
        <div className="grid-2-col" style={{ gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center' }}>
          <FadeIn delay={0.1}>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 0.95, textTransform: 'uppercase' }}>
              <motion.span whileHover={{ x: 10, color: 'var(--accent)' }} transition={{ duration: 0.3 }} style={{ display: 'block', color: 'var(--white)', cursor: 'default' }}>We do not build</motion.span>
              <motion.span whileHover={{ x: 10, color: 'var(--accent)' }} transition={{ duration: 0.3 }} style={{ display: 'block', color: 'var(--white)', cursor: 'default' }}>structures;</motion.span>
              <motion.span whileHover={{ x: 10, color: 'var(--white)' }} transition={{ duration: 0.3 }} style={{ display: 'block', color: 'var(--white-30)', fontWeight: 300, cursor: 'default' }}>we sculpt light.</motion.span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div>
              <p className="t-body" style={{ marginBottom: '2rem', fontSize: 'clamp(0.9rem, 1.1vw, 1rem)' }}>
                Founded in 2018 by three friends with a shared vision, MASS Developers was born to bridge the gap in honesty and quality within the construction industry.
              </p>
              <p className="t-body" style={{ marginBottom: '2rem', fontSize: 'clamp(0.9rem, 1.1vw, 1rem)' }}>
                From our modest beginnings to becoming a trusted name in residential and commercial spaces, we remain committed to building dreams with unwavering integrity and precision.
              </p>
              <div className="philosophy-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(1rem, 2vw, 2rem)', marginTop: '3rem', borderTop: '1px solid var(--white-06)', paddingTop: '2rem' }}>
                <StatCounter value={150} suffix="+" label="Clients" />
                <StatCounter value={150} suffix="+" label="Projects" />
                <StatCounter value={8} suffix="+" label="Years" />
              </div>
              <div style={{ marginTop: '2.5rem' }}>
                <motion.a
                  href="/about"
                  className="btn-ghost"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ padding: '0.65rem 1.75rem', fontSize: '0.6rem' }}
                >
                  Read Full Story
                </motion.a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

