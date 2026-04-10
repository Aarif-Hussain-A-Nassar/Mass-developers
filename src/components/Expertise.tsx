'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EXPERTISE } from '@/lib/constants';
import { EASE } from '@/lib/utils';
import FadeIn from './FadeIn';

export default function Expertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scrollLineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      id="expertise"
      ref={containerRef}
      style={{
        background: 'var(--bg)',
        padding: '12rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <FadeIn>
          <div className="section-eyebrow" style={{ marginBottom: '8rem' }}>
            <span>Expertise / 002</span>
          </div>
        </FadeIn>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '22rem' }}>

          {/* THE THREAD — Enhanced with Spring Drawing */}
          <div style={{
            position: 'absolute',
            left: '2rem',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'var(--white-06)'
          }}>
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                background: 'var(--white)',
                scaleY: scrollLineHeight,
                originY: 0
              }}
            />
          </div>

          {EXPERTISE.map((exp, i) => (
            <ExpertiseItemEnhanced key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseItemEnhanced({ exp, index }: { exp: any, index: number }) {
  return (
    <div style={{ paddingLeft: '11rem', position: 'relative' }}>
      
      {/* GIGANTIC WATERMARK INDEX — Solid & Structural */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          left: '2rem',
          top: '-2rem',
          fontFamily: 'var(--font-inter)',
          fontSize: '16rem',
          fontWeight: 900,
          color: 'var(--white-06)', 
          zIndex: 0,
          pointerEvents: 'none',
          lineHeight: 1
        }}
      >
        {index + 1}
      </motion.div>

      {/* THE CONNECTING LINE — Cleaner integration */}
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '9rem', opacity: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          position: 'absolute', 
          left: '2rem', 
          top: '6rem', 
          height: '1px',
          background: 'var(--white)',
          zIndex: 1
        }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '0.6fr 1.6fr', gap: '5vw', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        {/* Left Column: Technical Text Anchor */}
        <div style={{ paddingRight: '1rem' }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
          >
            <div style={{ height: '1px', width: '40px', background: 'var(--white)', marginBottom: '2rem' }} />
            <h3 style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 0.9,
              marginBottom: '2rem',
              letterSpacing: '-0.04em'
            }}>
              {exp.title}
            </h3>
            <p className="t-body" style={{ color: 'var(--white-60)', maxWidth: '320px', fontSize: '0.9rem', lineHeight: 1.8 }}>
              {exp.body}
            </p>
          </motion.div>
        </div>

        {/* Right Column: Ultra-Large Image */}
        <div style={{ position: 'relative' }}>
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: EASE }}
            style={{ position: 'relative', borderRadius: '2px', overflow: 'hidden', boxShadow: '0 60px 100px -30px rgba(0,0,0,0.6)' }}
          >
            <motion.img
              src={exp.bg}
              alt={exp.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.2, ease: EASE }}
              style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
            />
          </motion.div>

          {/* Technical drafting details expanded for large image */}
          <div style={{ position: 'absolute', top: '-1.5rem', right: 0, fontFamily: 'monospace', fontSize: '0.6rem', color: 'var(--white-30)', letterSpacing: '0.1em' }}>
            COORD_REF: {index}.002 / MASTER_VIEW
          </div>
        </div>
      </div>
    </div>
  );
}
