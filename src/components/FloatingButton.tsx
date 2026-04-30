'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const WA_NUMBER = '918089248246';
const WA_MESSAGE = encodeURIComponent(
  "Hello, I'm interested in a project with Mass Developers. Could you please share more details?"
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          key="whatsapp-float"
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 9999,
            width: 'clamp(52px, 6vw, 64px)',
            height: 'clamp(52px, 6vw, 64px)',
            borderRadius: '50%',
            background: '#25D366',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(37,211,102,0.45)',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
          className="wa-dock"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse ring */}
          <span className="wa-pulse" />

          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="#ffffff"
            style={{ width: '58%', height: '58%', position: 'relative', zIndex: 1 }}
          >
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.738 5.476 2.031 7.775L0 32l8.469-2.002A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 01-6.771-1.853l-.486-.29-5.03 1.188 1.22-4.896-.318-.504A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.87c-.398-.2-2.355-1.162-2.72-1.294-.365-.133-.63-.2-.896.2-.266.398-1.03 1.294-1.263 1.56-.232.266-.465.3-.863.1-.398-.2-1.681-.619-3.203-1.977-1.184-1.057-1.983-2.362-2.216-2.76-.232-.398-.025-.613.175-.81.18-.18.398-.465.598-.698.2-.232.266-.398.398-.664.133-.265.067-.498-.033-.698-.1-.2-.896-2.162-1.228-2.96-.323-.778-.652-.672-.896-.684l-.764-.013c-.266 0-.698.1-1.063.498-.365.398-1.395 1.362-1.395 3.323s1.428 3.854 1.628 4.12c.2.265 2.81 4.29 6.81 6.018.952.41 1.695.656 2.274.84.956.304 1.827.261 2.515.158.767-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.1-.166-.365-.266-.763-.465z" />
          </svg>
        </motion.a>
      )}

      <style jsx>{`
        .wa-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #25D366;
          animation: waPulse 2s ease-out infinite;
          opacity: 0;
        }
        @keyframes waPulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        @media (max-width: 900px) {
          :global(.wa-dock) {
            right: 1.25rem !important;
            bottom: 1.25rem !important;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
