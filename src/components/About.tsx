'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const milestones = [
  { year: '2018', event: 'Founded by four friends with a vision for honest construction' },
  { year: '2020', event: 'Expanded into commercial and turnkey projects across Kerala' },
  { year: '2022', event: 'Launched premium interior design vertical' },
  { year: '2024', event: 'Crossed 200+ successful project deliveries' },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'var(--section-bg-alt)',
      }}
    >
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <span className="section-label" style={{ justifyContent: 'center' }}>Our Story</span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              marginBottom: '1.25rem',
            }}
          >
            Built on Friendship,{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Driven by Quality</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '560px', margin: '0 auto', lineHeight: '1.75', fontSize: '1.05rem' }}>
            Four friends in a neighborhood who shared a passion for construction — and a belief that the industry could be so much better.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            {/* Main image card */}
            <div
              style={{
                aspectRatio: '4/5',
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'var(--shadow-xl)',
              }}
            >
              {/* Gradient placeholder - Premium look */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.08,
                }}
              >
                <span style={{ fontSize: '6rem', fontWeight: 900, letterSpacing: '-0.05em', color: '#fff', fontFamily: "'Playfair Display', serif" }}>
                  MASS
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                  color: '#fff',
                }}
              >
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Mass Developers
                </h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.7, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Founded 2018 · Ernakulam, Kerala
                </p>
              </div>
            </div>

            {/* Floating accent badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '-1.25rem',
                background: '#f4f4f4',
                color: '#050505',
                padding: '1rem 1.25rem',
                borderRadius: '14px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.75rem', fontWeight: 900, lineHeight: 1 }}>8+</div>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.25rem', opacity: 0.9 }}>Years</div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--muted)' }}>
                In our neighborhood, four buddies shared a passion for construction. Each worked in different companies in the industry — but we saw a common problem: most construction firms lacked honesty and quality.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--muted)' }}>
                So we thought: why not start our own? That&apos;s how Mass Developers was born in 2018. We started small, with big dreams — provide top-notch work at fair prices. Slowly, people noticed our dedication.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'rgba(244,244,244,0.5)', fontStyle: 'italic', borderLeft: '1px solid rgba(255,255,255,0.25)', paddingLeft: '1.25rem' }}>
                &ldquo;Today, we&apos;re known as the most trusted builders around — and our mission remains the same: keep building dreams, one project at a time.&rdquo;
              </p>
            </div>

            {/* Milestones */}
            <h3 style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
              Our Journey
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    paddingBottom: '1.5rem',
                    marginBottom: '1.5rem',
                    borderBottom: i < milestones.length - 1 ? '1px solid var(--border)' : 'none',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{
                    minWidth: '52px',
                    height: '52px',
                    background: 'var(--foreground)',
                    color: 'var(--background)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    flexShrink: 0,
                  }}>
                    {m.year}
                  </div>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--muted)', paddingTop: '0.75rem' }}>
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
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
