'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--bg)', padding: '10rem 0' }}>
      <div className="container">
        <FadeIn><div className="section-eyebrow"><span>Contact / 006</span></div></FadeIn>
        <div className="grid-2-col" style={{ gap: '4rem', alignItems: 'flex-end' }}>
          <div>
            <h2 className="contact-heading" style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)', color: 'var(--white)', lineHeight: 0.9, textTransform: 'uppercase' }}>
              Let&#39;s build
              <br />
              together.
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
            <p className="t-body" style={{ maxWidth: '400px', marginBottom: '1rem' }}>
              Whether it&#39;s a residential masterpiece or a commercial landmark, your vision deserves the highest standards of integrity.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <motion.a
                href="/contact"
                className="btn-solid"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontSize: '0.65rem', padding: '1rem 2.5rem' }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="mailto:project@massdevelopers.in"
                className="btn-ghost"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontSize: '0.65rem', padding: '1rem 2.5rem' }}
              >
                Email Office
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
