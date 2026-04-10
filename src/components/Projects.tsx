'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import FadeIn from './FadeIn';

export default function Projects() {
  const [active, setActive] = useState(0);
  return (
    <section id="projects" style={{ background: 'var(--bg)', height: '100vh', position: 'relative' }}>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'absolute', inset: 0, background: PROJECTS[active].placeholder }} />
      </AnimatePresence>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface) 0%, rgba(255,255,255,0.1) 100%)' }} />
      <div className="projects-overlay" style={{ position: 'absolute', bottom: '4rem', left: '5rem', right: '5rem' }}>
        <FadeIn><div className="section-eyebrow" style={{ marginBottom: '2rem' }}><span>Projects / 003</span></div></FadeIn>
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
