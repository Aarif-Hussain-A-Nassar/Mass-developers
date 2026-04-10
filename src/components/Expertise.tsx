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
        padding: 'clamp(4rem, 10vw, 12rem) 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <FadeIn>
          <div className="section-eyebrow" style={{ marginBottom: 'clamp(4rem, 8vw, 8rem)' }}>
            <span>Expertise / 002</span>
          </div>
        </FadeIn>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'clamp(8rem, 20vw, 22rem)' }}>

          {/* THE THREAD — Architectural backbone */}
          <div style={{
            position: 'absolute',
            left: 'clamp(1rem, 3vw, 2rem)',
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
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Responsive transforms
  const indexX = useTransform(smoothProgress, [0, 1], [-100, 0]);
  const indexOpacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const imageX = useTransform(smoothProgress, [0, 1], [100, 0]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);

  return (
    <div 
      ref={itemRef} 
      className="expertise-item-wrap"
      style={{ 
        paddingLeft: 'clamp(3rem, 12vw, 11rem)', 
        position: 'relative' 
      }}
    >
      {/* GIGANTIC WATERMARK INDEX */}
      <motion.div
        style={{
          position: 'absolute',
          left: 'clamp(1rem, 3vw, 2rem)',
          top: 'clamp(-3rem, -1vw, -2rem)',
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(6rem, 18vw, 16rem)',
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

      {/* THE CONNECTING LINE — Becomes subtle bar on mobile */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 'clamp(2rem, 10vw, 9rem)', opacity: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          left: 'clamp(1rem, 3vw, 2rem)',
          top: 'clamp(3.5rem, 8vw, 6rem)',
          height: '1px',
          background: 'var(--white)',
          zIndex: 1
        }}
      />

      <div className="expertise-grid" style={{ position: 'relative', zIndex: 2 }}>
        {/* Left Column: Text */}
        <div className="expertise-text-col">
          <FadeIn delay={0.2}>
            <div style={{ height: '1px', width: '40px', background: 'var(--white)', marginBottom: 'clamp(1rem, 2vw, 2rem)' }} />
            <h3 style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 0.9,
              marginBottom: '2rem',
              letterSpacing: '-0.04em'
            }}>
              {exp.title}
            </h3>
            <p className="t-body" style={{ color: 'var(--white-60)', maxWidth: '420px', fontSize: 'clamp(0.85rem, 1vw, 0.95rem)', lineHeight: 1.8 }}>
              {exp.body}
            </p>
          </FadeIn>
        </div>

        {/* Right Column: Image */}
        <motion.div className="expertise-image-col" style={{ position: 'relative', x: imageX, opacity: imageOpacity }}>
          <div style={{ position: 'relative', borderRadius: '2px', overflow: 'hidden', boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5)' }}>
            <motion.img
              src={exp.bg}
              alt={exp.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.2, ease: EASE }}
              style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
            />
          </div>

          <div style={{ position: 'absolute', top: '-1.5rem', right: 0, fontFamily: 'monospace', fontSize: '0.6rem', color: 'var(--white-30)', letterSpacing: '0.1em' }}>
            COORD_REF: {index}.002
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .expertise-grid {
          display: grid;
          grid-template-columns: 0.6fr 1.6fr;
          gap: 5vw;
          align-items: center;
        }
        @media (max-width: 900px) {
          .expertise-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .expertise-text-col {
            order: 2;
          }
          .expertise-image-col {
            order: 1;
            margin-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
