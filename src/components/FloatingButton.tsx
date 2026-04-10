'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          key="floating-signature"
          href="https://two-dots-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 9999,
            width: 'clamp(50px, 6vw, 65px)',
            height: 'clamp(50px, 6vw, 65px)',
            borderRadius: '50%',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '1px solid rgba(0,0,0,0.05)',
            textDecoration: 'none',
            cursor: 'pointer',
            padding: '12px',
            transition: 'background-color 0.3s ease'
          }}
          className="twodots-dock"
        >
          <img
            src="/twodotss.png"
            alt="Built By Two Dots"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </motion.a>
      )}
      <style jsx>{`
        @media (max-width: 900px) {
          :global(.twodots-dock) {
            right: auto !important;
            left: 1.5rem !important;
            bottom: 1.5rem !important;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
