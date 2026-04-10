'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
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
  const itemRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of THIS specific item as it enters and reaches the center
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"]
  });

  // Smooth out the progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Index number comes from LEFT
  const indexX = useTransform(smoothProgress, [0, 1], [-200, 0]);
  const indexOpacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);

  // Image comes from RIGHT
  const imageX = useTransform(smoothProgress, [0, 1], [200, 0]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);

  return (
    <div ref={itemRef} style={{ paddingLeft: '11rem', position: 'relative' }}>

      {/* GIGANTIC WATERMARK INDEX — Sliding from Left */}
      <motion.div
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
          lineHeight: 1,
          x: indexX,
          opacity: indexOpacity
        }}
      >
        {index + 1}
      </motion.div>

      {/* THE CONNECTING LINE */}
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
        {/* Left Column: Text reveals normally */}
        <div style={{ paddingRight: '1rem' }}>
          <FadeIn delay={0.2}>
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
          </FadeIn>
        </div>

        {/* Right Column: Image sliding from RIGHT */}
        <motion.div style={{ position: 'relative', x: imageX, opacity: imageOpacity }}>
          <div style={{ position: 'relative', borderRadius: '2px', overflow: 'hidden', boxShadow: '0 60px 100px -30px rgba(0,0,0,0.6)' }}>
            <motion.img
              src={exp.bg}
              alt={exp.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.2, ease: EASE }}
              style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
            />
          </div>

          <div style={{ position: 'absolute', top: '-1.5rem', right: 0, fontFamily: 'monospace', fontSize: '0.6rem', color: 'var(--white-30)', letterSpacing: '0.1em' }}>
            COORD_REF: {index}.002 / MASTER_VIEW
          </div>
        </motion.div>
      </div>
    </div>
  );
}

