'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#ffffff', padding: 'clamp(6rem, 15vw, 12rem) 0', position: 'relative', overflow: 'hidden' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <FadeIn>
           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '6rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(0,0,0,0.1)' }} />
              <span style={{ 
                fontFamily: 'var(--font-inter)', 
                fontSize: '0.65rem', 
                fontWeight: 900, 
                textTransform: 'uppercase', 
                letterSpacing: '0.4em', 
                color: 'rgba(0,0,0,0.3)' 
              }}>
                CONTACT / 006
              </span>
           </div>
        </FadeIn>

        <div className="contact-layout-grid">
          {/* Left Column: Heading */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ 
              fontFamily: 'var(--font-inter)', 
              fontSize: 'clamp(3.5rem, 8.5vw, 8rem)', 
              fontWeight: 950, 
              color: '#000', 
              lineHeight: 0.85, 
              letterSpacing: '-0.04em',
              textTransform: 'uppercase'
            }}>
              LET&apos;S<br />
              BUILD<br />
              TOGETHER.
            </h2>
          </div>

          {/* Right Column: CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 'clamp(0rem, 5vw, 4rem)' }}>
            <p style={{
              fontFamily: 'var(--font-manrope)',
              fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
              lineHeight: 1.6,
              color: 'rgba(0,0,0,0.5)',
              maxWidth: '460px',
              fontWeight: 500,
              marginBottom: '3.5rem'
            }}>
              Whether it&apos;s a residential masterpiece or a commercial landmark, your vision deserves the highest standards of integrity.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
               <motion.a
                 href="/contact"
                 whileHover={{ scale: 1.02, backgroundColor: '#333' }}
                 whileTap={{ scale: 0.98 }}
                 style={{
                   background: '#000',
                   color: '#fff',
                   padding: '1.4rem 3rem',
                   fontSize: '0.65rem',
                   fontWeight: 900,
                   textTransform: 'uppercase',
                   letterSpacing: '0.2em',
                   textDecoration: 'none',
                   borderRadius: '2px',
                   display: 'inline-block',
                   textAlign: 'center'
                 }}
               >
                 Get In Touch
               </motion.a>
               <motion.a
                 href="mailto:project@massdevelopers.in"
                 whileHover={{ backgroundColor: 'rgba(0,0,0,0.03)', borderColor: '#000' }}
                 whileTap={{ scale: 0.98 }}
                 style={{
                   background: 'transparent',
                   color: '#000',
                   padding: '1.4rem 3rem',
                   fontSize: '0.65rem',
                   fontWeight: 900,
                   textTransform: 'uppercase',
                   letterSpacing: '0.2em',
                   border: '1px solid rgba(0,0,0,0.15)',
                   textDecoration: 'none',
                   borderRadius: '2px',
                   display: 'inline-block',
                   textAlign: 'center',
                   transition: 'all 0.3s ease'
                 }}
               >
                 Email Office
               </motion.a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .contact-layout-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          div { padding-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}
