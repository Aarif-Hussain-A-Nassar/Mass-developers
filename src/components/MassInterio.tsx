'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function MassInterio() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="mass-interio" 
      ref={sectionRef}
      style={{ 
        height: '100vh', 
        position: 'relative', 
        overflow: 'hidden',
        background: '#000'
      }}
    >
      {/* Background Parallax Image */}
      <motion.div 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '120%',
          y: imgY,
          zIndex: 0
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8))',
          zIndex: 1
        }} />
        <img 
          src="/interio.png" 
          alt="Mass Interio Design"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>

      {/* Floating Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
        <motion.div 
          style={{ opacity, y: textY, maxWidth: '800px' }}
        >
          <span style={{ 
            fontFamily: 'var(--font-inter)', 
            fontSize: '0.8rem', 
            fontWeight: 900, 
            textTransform: 'uppercase', 
            letterSpacing: '0.6em', 
            color: 'rgba(255,255,255,0.4)',
            display: 'block',
            marginBottom: '2.5rem'
          }}>
            ELITE DIVISION / MASS INTERIO
          </span>
          
          <h2 style={{ 
            fontFamily: 'var(--font-inter)', 
            fontSize: 'clamp(3rem, 7vw, 6.5rem)', 
            fontWeight: 950, 
            color: '#fff', 
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            marginBottom: '4rem'
          }}>
            CURATING<br />
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>SILENCE & FORM.</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-manrope)',
            fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
            lineHeight: 1.8,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '520px',
            marginBottom: '5rem',
            fontWeight: 500
          }}>
            Mass Interio transforms structural geometry into emotional experience. We specialize in minimalist, high-fidelity interior curation that reflects the soul of the inhabitants through light, texture, and space.
          </p>

          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
            <motion.a 
              href="https://www.instagram.com/mass.interio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="interio-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: '#fff',
                color: '#000',
                padding: '1.2rem 3rem',
                borderRadius: '100px',
                fontSize: '0.65rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Instagram
            </motion.a>
            <span style={{ 
              fontSize: '0.6rem', 
              fontWeight: 800, 
              color: 'rgba(255,255,255,0.2)', 
              letterSpacing: '0.2em' 
            }}>
              EST. 2021 // INTERIOR_SYSTEMS
            </span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .interio-cta {
          transition: all 0.4s var(--ease-expo);
        }
        .interio-cta:hover {
          background: #000;
          color: #fff;
          box-shadow: 0 10px 40px rgba(255,255,255,0.1);
        }
      `}</style>
    </section>
  );
}
