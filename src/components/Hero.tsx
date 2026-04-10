'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { EASE, smoothScrollTo } from '@/lib/utils';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springMouseX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springMouseY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  const moveX = useTransform(springMouseX, [-0.5, 0.5], ['-1.5%', '1.5%']);
  const moveY = useTransform(springMouseY, [-0.5, 0.5], ['-1.5%', '1.5%']);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const y = useTransform(smoothProgress, [0, 1], [0, -150]);
  const bgY = useTransform(smoothProgress, [0, 1], [0, 50]);
  const opac = useTransform(smoothProgress, [0, 0.6], [1, 0]);
  const blur = useTransform(smoothProgress, [0, 0.8], [0, 15]);

  const handleMouseMove = () => { };

  const titleText = "MASS";

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: EASE }}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          y: bgY,
          filter: `blur(${blur}px)`,
        }}
      >
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)' }} />
      </motion.div>


      <motion.div style={{ y, opacity: opac, position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', padding: '0 1rem', willChange: 'transform, opacity' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.1em', marginBottom: '1.25rem', paddingLeft: '0.55em' }}>
          {titleText.split('').map((char, i) => (
            <motion.h1
              key={i}
              initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.4, delay: 0.2 + i * 0.1, ease: EASE }}
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(2.5rem, 10vw, 13rem)',
                fontWeight: 100,
                letterSpacing: 'clamp(0.2em, 5vw, 0.55em)',
                textTransform: 'uppercase',
                lineHeight: 1,
                color: '#ffffff'
              }}
            >
              {char}
            </motion.h1>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.45em' }}
          transition={{ duration: 1.5, delay: 0.8, ease: EASE }}
          style={{ fontFamily: 'var(--font-manrope)', fontSize: 'clamp(0.45rem, 1.2vw, 0.72rem)', fontWeight: 500, textTransform: 'uppercase', color: 'rgba(255,255,255,0.70)', marginBottom: '3.5rem' }}
        >
          Precision in silence. Architecture as a manifesto.
        </motion.p>

        <motion.div style={{ display: 'inline-flex', alignItems: 'center', gap: 'clamp(0.75rem, 2vw, 1.5rem)', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['projects', 'about-us'].map((target, idx) => (
            <motion.a
              key={target}
              href={`#${target}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => { e.preventDefault(); smoothScrollTo(`#${target}`); }}
              style={{
                fontFamily: 'var(--font-manrope)',
                fontSize: 'clamp(0.5rem, 0.8vw, 0.65rem)',
                fontWeight: 800,
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#ffffff',
                textDecoration: 'none',
                padding: 'clamp(0.5rem, 1.2vw, 0.85rem) clamp(1rem, 3.5vw, 2.5rem)',
                border: '0.8px solid rgba(255,255,255,0.3)',
                backgroundColor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(12px)',
                opacity: 0.9,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                WebkitTapHighlightColor: 'transparent',
              }}
              onMouseEnter={e => { Object.assign(e.currentTarget.style, { backgroundColor: '#ffffff', color: '#000000', borderColor: '#ffffff', opacity: '1' }); }}
              onMouseLeave={e => { Object.assign(e.currentTarget.style, { backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)', opacity: '0.9' }); }}
            >
              {idx === 0 ? 'View Works' : 'Our Studio'}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <div className="hero-scroll-indicator" style={{ position: 'absolute', bottom: '2rem', left: 0, right: 0, zIndex: 2, display: 'flex', justifyContent: 'center' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)', backgroundSize: '100% 200%', animation: 'scroll-line 2s cubic-bezier(0.76, 0, 0.24, 1) infinite' }} />
          <span style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Scroll</span>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0% { background-position: 0% 100%; opacity: 0; }
          50% { opacity: 1; }
          100% { background-position: 0% -100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
