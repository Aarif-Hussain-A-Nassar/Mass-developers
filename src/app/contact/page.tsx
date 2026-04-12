'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Footer from '@/components/Footer';

/* ─── Easing ─── */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─── FadeIn helper ─── */
function FadeIn({
  children,
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}) {
  const initial =
    direction === 'up'
      ? { opacity: 0, y: 48 }
      : direction === 'left'
      ? { opacity: 0, x: -48 }
      : { opacity: 0, x: 48 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Magnetic Button Helper ─── */
function MagneticButton({ children, className, style, ...props }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ width: '100%' }}
    >
      <motion.button {...props} className={className} style={{ ...style }}>
        {children}
      </motion.button>
    </motion.div>
  );
}

/* ─── Floating Label Input ─── */
function FloatingInput({ label, type = 'text', ...props }: any) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div style={{ position: 'relative', borderBottom: focused ? '1px solid #000' : '1px solid #ddd', transition: 'border 0.3s ease' }}>
      <motion.label
        initial={false}
        animate={{ 
          y: (focused || value) ? -28 : 12,
          fontSize: (focused || value) ? '0.6rem' : '0.85rem',
          color: (focused || value) ? '#000' : '#888'
        }}
        style={{
          position: 'absolute',
          left: 0,
          fontFamily: 'var(--font-inter)',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          pointerEvents: 'none'
        }}
      >
        {label}
      </motion.label>
      <input
        {...props}
        type={type}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => {
          setValue(e.target.value);
          if (props.onChange) props.onChange(e);
        }}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '1rem 0',
          fontFamily: 'var(--font-manrope)',
          fontSize: '1rem',
          fontWeight: 600,
          outline: 'none',
          color: '#000'
        }}
      />
    </div>
  );
}

/* ─── Main Contact Page ─── */
export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 1500);
  };

  return (
    <>
      <nav
        className="nav scrolled"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, zIndex: 100,
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 1rem'
        }}
      >
        <a href="/" className="nav-logo">
          <img src="/logo.png" alt="MASS Logo" style={{ height: 'clamp(50px, 10vw, 75px)', mixBlendMode: 'multiply' }} />
        </a>
        <motion.a
          href="/"
          className="nav-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            color: '#000',
            borderColor: 'rgba(0,0,0,0.3)',
            backgroundColor: 'rgba(0,0,0,0.05)',
            backdropFilter: 'blur(12px)',
            fontSize: '0.6rem',
            padding: '0.6rem 1.2rem'
          }}
        >
          ← Home
        </motion.a>
      </nav>

      <main style={{ background: '#ffffff', color: '#000000', minHeight: '100vh', paddingTop: 'clamp(8rem, 20vw, 12rem)' }}>
        <div className="container">
          <FadeIn>
            <div className="section-eyebrow" style={{ color: 'rgba(0,0,0,0.3)', borderLeft: '2px solid #000', paddingLeft: '1rem', marginBottom: '2rem' }}>
              <span style={{ color: '#000', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Connect / 001</span>
            </div>
            <h1
              className="contact-title"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(3rem, 10vw, 7.5rem)',
                fontWeight: 900,
                lineHeight: 0.85,
                textTransform: 'uppercase',
                letterSpacing: '-0.04em',
                marginBottom: '5rem',
                color: '#000'
              }}
            >
              Start<br />Today.
            </h1>
          </FadeIn>

          <div className="contact-main-grid">
            {/* Contact Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              <FadeIn delay={0.1}>
                <div style={{ display: 'grid', gap: '3rem' }}>
                  <div style={{ borderLeft: '1px solid #ddd', paddingLeft: '1.5rem' }}>
                    <h3 style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#888', marginBottom: '1rem' }}>Call Us</h3>
                    <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 700, fontFamily: 'var(--font-inter)' }}>+91 70255 76777</p>
                    <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 700, fontFamily: 'var(--font-inter)', opacity: 0.4 }}>+91 80892 48246</p>
                  </div>
                  <div style={{ borderLeft: '1px solid #ddd', paddingLeft: '1.5rem' }}>
                    <h3 style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#888', marginBottom: '1rem' }}>Mail Us</h3>
                    <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', fontWeight: 700, fontFamily: 'var(--font-inter)', wordBreak: 'break-all' }}>project@massdevelopers.in</p>
                    <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', fontWeight: 700, fontFamily: 'var(--font-inter)', opacity: 0.4, wordBreak: 'break-all' }}>massdevelopers@outlook.com</p>
                  </div>
                </div>
              </FadeIn>

              {/* Offices */}
              <FadeIn delay={0.25} direction="left">
                <div className="office-directory-box">
                  <h3 style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2.5rem' }}>Office Directory</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <div>
                      <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#aaa', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>Registered Base</span>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 600 }}>46/1169- A1, Madappat Road, Chalikavattom,<br />Vennala PO, Ernakulam, 682028</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#aaa', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>Branch Base</span>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 600 }}>XI/139, KD Tower, Vaduthala,<br />Nadvath Nagar PO, Aroor - 688535</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <FadeIn delay={0.2}>
              <div className="contact-form-container">
                <AnimatePresence mode="wait">
                  {formState === 'sent' ? (
                    <motion.div
                      key="thanks"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ textAlign: 'center', padding: '4rem 0' }}
                    >
                      <h2 style={{ fontFamily: 'var(--font-inter)', fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase' }}>Received.</h2>
                      <p style={{ marginTop: '1rem', opacity: 0.5 }}>Expect a callback within 24 hours.</p>
                      <button onClick={() => setFormState('idle')} style={{ marginTop: '3rem', background: 'none', border: '1px solid rgba(0,0,0,0.1)', color: '#000', padding: '1rem 2rem', cursor: 'pointer', fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase' }}>Send Another</button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" exit={{ opacity: 0, y: -20 }} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                      <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.4 }}>Send an Inquiry</p>
                      <FloatingInput label="Your Full Name" required />
                      <div className="form-row-grid">
                        <FloatingInput label="Phone Number" type="tel" required />
                        <FloatingInput label="Email Address" type="email" required />
                      </div>
                      <div style={{ position: 'relative' }}>
                         <label style={{ display: 'block', fontSize: '0.62rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem', opacity: 0.4 }}>Project Details</label>
                         <textarea required placeholder="TELL US ABOUT YOUR VISION" style={{ width: '100%', background: 'none', border: 'none', borderBottom: '1px solid #ddd', padding: '1rem 0', fontFamily: 'var(--font-manrope)', fontSize: '1rem', fontWeight: 600, outline: 'none', color: '#000', resize: 'none' }} rows={4} />
                      </div>
                      
                      <div style={{ marginTop: '1rem', width: '100%' }}>
                        <MagneticButton type="submit" style={{ width: '100%', padding: '1.8rem 1rem', background: '#000', color: '#fff', border: 'none', fontFamily: 'var(--font-inter)', fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', cursor: 'pointer' }}>
                          Initialize Project
                        </MagneticButton>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
                
                {/* Decorative ghost text */}
                <div style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', fontSize: '10rem', fontWeight: 900, opacity: 0.02, pointerEvents: 'none', color: '#000' }}>MASS</div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Dynamic Map Visualization */}
        <div style={{ height: '50vh', background: '#f8f8f8', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '60vw', height: '60vw', borderRadius: '50%', border: '1px solid #ddd', position: 'absolute' }}
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            style={{ width: '80vw', height: '80vw', borderRadius: '50%', border: '1px solid #ddd', position: 'absolute' }}
          />
          <h2 style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', fontWeight: 900, textTransform: 'uppercase', opacity: 0.1, letterSpacing: '0.5em', textAlign: 'center', padding: '0 2rem' }}>Foundations Everywhere</h2>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 6rem;
          margin-bottom: 8rem;
        }

        .office-directory-box {
          padding: 4rem;
          background: #f8f8f8;
          border: 1px solid #eee;
        }

        .contact-form-container {
          background: #fcfcfc;
          color: #000;
          padding: clamp(2rem, 5vw, 5rem);
          position: relative;
          overflow: hidden;
          border: 1px solid #eee;
        }

        .form-row-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 1024px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
            margin-bottom: 6rem;
          }
          .office-directory-box {
             padding: 3rem 2rem;
          }
        }

        @media (max-width: 640px) {
          .form-row-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .contact-form-container {
            padding: 2.5rem 1.5rem;
          }
          .contact-title {
             margin-bottom: 3.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
