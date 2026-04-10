'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';
import { EASE } from '@/lib/utils';
import FadeIn from './FadeIn';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const nextTestimonial = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setActive((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));

  return (
    <section id="testimonials" style={{ background: 'var(--bg)', padding: 'clamp(4rem, 10vw, 8rem) 0' }}>
      <div className="container">
        <FadeIn><div className="section-eyebrow"><span>Testimonials / 004</span></div></FadeIn>

        <div className="grid-2-col" style={{ gap: 'clamp(4rem, 8vw, 6rem)', alignItems: 'center' }}>
          {/* Text Column */}
          <div style={{ position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6, ease: EASE }}>
                <p className="testimonial-quote" style={{ marginBottom: '2rem', color: '#000000', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}>&quot;{TESTIMONIALS[active].quote}&quot;</p>
                <div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '1.1rem', fontWeight: 800, color: '#000000', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{TESTIMONIALS[active].name}</div>
                  <div className="t-label" style={{ marginTop: '0.25rem', color: 'rgba(0,0,0,0.5)' }}>{TESTIMONIALS[active].title}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div style={{ display: 'flex', gap: '1rem', marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <button
                onClick={prevTestimonial}
                className="testimonial-btn"
                style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.2)', background: 'transparent', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s ease' }}
              >
                ←
              </button>
              <button
                onClick={nextTestimonial}
                className="testimonial-btn"
                style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.2)', background: 'transparent', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s ease' }}
              >
                →
              </button>
            </div>
          </div>

          {/* Video Column */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: 'clamp(1/1, 4/5, 4/5)', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.8, ease: EASE }} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
                <img src={TESTIMONIALS[active].poster} alt="Testimonial Video" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }} />

                {/* Custom Play Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'clamp(60px, 10vw, 80px)', height: 'clamp(60px, 10vw, 80px)', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </motion.div>
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', color: '#ffffff', fontFamily: 'var(--font-manrope)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Watch Film / 0{active + 1}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
      <style jsx>{`
        .testimonial-btn:hover {
          background: #000 !important;
          color: #fff !important;
        }
      `}</style>
    </section>
  );
}

