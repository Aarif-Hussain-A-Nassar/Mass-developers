'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import FadeIn from './FadeIn';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: 'residential',
    message: ''
  });

  return (
    <section id="contact" style={{ background: '#0a0a0a', padding: 'clamp(6rem, 15vw, 12rem) 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Accent */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <FadeIn>
           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.4em', color: 'rgba(255,255,255,0.3)' }}>INQUIRY / 006</span>
           </div>
        </FadeIn>

        <div className="contact-layout-grid">
          {/* Left Side: Branding & Info */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontFamily: 'var(--font-inter)', 
              fontSize: 'clamp(3rem, 7vw, 6rem)', 
              fontWeight: 950, 
              color: '#fff', 
              lineHeight: 0.9, 
              letterSpacing: '-0.04em',
              marginBottom: '3rem',
              textTransform: 'uppercase'
            }}>
              START THE<br />
              <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.3)' }}>CONVERSATION.</span>
            </h2>
            
            <p style={{
              fontFamily: 'var(--font-manrope)',
              fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.4)',
              maxWidth: '400px',
              fontWeight: 500
            }}>
              Whether it’s a residential masterpiece or a strategic commercial expansion, we bring integrity to every square foot.
            </p>

            <div style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
               <div>
                  <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', display: 'block', letterSpacing: '0.2em', marginBottom: '0.8rem', fontWeight: 900 }}>OFFICE HOURS</span>
                  <span style={{ fontSize: '0.8rem', color: '#fff', fontWeight: 700 }}>MON — SAT / 09:00 — 18:00</span>
               </div>
               <div>
                  <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', display: 'block', letterSpacing: '0.2em', marginBottom: '0.8rem', fontWeight: 900 }}>CURRENT BASE</span>
                  <span style={{ fontSize: '0.8rem', color: '#fff', fontWeight: 700 }}>KOCHI, KERALA</span>
               </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-wrapper">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
              <div className="input-group">
                <input 
                  type="text" 
                  placeholder="FULL NAME" 
                  required
                  style={inputStyle}
                />
              </div>

              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  required
                  style={inputStyle}
                />
              </div>

              <div className="input-group">
                <select style={inputStyle}>
                  <option value="" disabled selected>PROJECT TYPE</option>
                  <option value="residential">RESIDENTIAL CONSTRUCTION</option>
                  <option value="commercial">COMMERCIAL PROJECT</option>
                  <option value="interior">INTERIOR CURATION</option>
                  <option value="consultancy">ARCHITECTURAL CONSULTANCY</option>
                </select>
              </div>

              <div className="input-group">
                <textarea 
                  placeholder="TELL US ABOUT YOUR VISION" 
                  rows={4}
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ backgroundColor: '#fff', color: '#000' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  padding: '1.5rem 3rem',
                  fontSize: '0.7rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.4em',
                  cursor: 'pointer',
                  width: 'fit-content',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  borderRadius: '2px'
                }}
              >
                Send Inquiry
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(4rem, 10vw, 10rem);
          align-items: flex-start;
        }

        .input-group input:focus, .input-group select:focus, .input-group textarea:focus {
          border-color: #fff !important;
          outline: none;
        }

        @media (max-width: 900px) {
          .contact-layout-grid {
            grid-template-columns: 1fr;
            gap: 5rem;
          }
          .contact-form-wrapper {
             width: 100%;
          }
          button {
             width: 100% !important;
             text-align: center;
          }
          h2 {
             font-size: clamp(2.5rem, 12vw, 4rem) !important;
          }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(255,255,255,0.15)',
  padding: '1rem 0',
  fontFamily: 'var(--font-inter)',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: '#fff',
  letterSpacing: '0.15em',
  transition: 'all 0.3s ease',
  borderRadius: 0,
  WebkitAppearance: 'none'
};
