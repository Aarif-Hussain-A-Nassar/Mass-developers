'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import { EASE, smoothScrollTo } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.replace('#', ''));
    let ticking = false;

    const updateActive = () => {
      if (window.scrollY < 80) { setActiveIdx(0); ticking = false; return; }
      const midpoint = window.scrollY + window.innerHeight / 2;
      let best = 0;
      sectionIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.offsetTop <= midpoint) best = i;
      });
      setActiveIdx(best);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActive);
        ticking = true;
      }
    };

    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, idx: number) => {
    e.preventDefault();
    setActiveIdx(idx);
    setIsMenuOpen(false);
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      smoothScrollTo(href);
    }
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-logo" style={{ marginLeft: '1.5rem' }} onClick={(e) => handleClick(e, '#hero', 0)}>
          <motion.img
            src="/logo.png"
            alt="MASS Logo"
            className="nav-logo-img"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map((l, i) => (
            <li key={i}>
              <a
                href={l.href}
                className={activeIdx === i ? 'active' : ''}
                onClick={(e) => handleClick(e, l.href, i)}
                style={{ color: scrolled ? '#000000' : '#ffffff' }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="nav-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => handleClick(e, '#contact', NAV_LINKS.length - 1)}
        >
          Inquire
        </motion.a>
      </nav>

      <div className="floating-nav-dock">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed',
                bottom: 'clamp(70px, 10vh, 90px)',
                left: '12px',
                right: '12px',
                zIndex: 1000,
                background: 'rgba(10, 10, 10, 0.95)',
                backdropFilter: 'blur(20px)',
                padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
                border: '1px solid rgba(255,255,255,0.1)',
                maxHeight: '70vh',
                overflowY: 'auto',
                borderRadius: '4px'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 2.5vw, 1.25rem)' }}>
                {NAV_LINKS.map((l, i) => (
                  <motion.a
                    key={i}
                    href={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileTap={{ scale: 0.98, x: 5 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={(e) => handleClick(e, l.href, i)}
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(0.85rem, 3.5vw, 1.1rem)',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: activeIdx === i ? '#ffffff' : 'rgba(255,255,255,0.3)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem'
                    }}
                  >
                    <span style={{ fontSize: '0.55rem', opacity: 0.3 }}>0{i + 1}</span>
                    {l.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.92, y: 2 }}
          animate={{ 
            backgroundColor: isMenuOpen ? '#ffffff' : '#000000',
            color: isMenuOpen ? '#000000' : '#ffffff'
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 400, 
            damping: 30,
            backgroundColor: { duration: 0.4 },
            color: { duration: 0.4 }
          }}
          style={{
            position: 'fixed',
            bottom: 'clamp(14px, 3vh, 24px)',
            right: 'clamp(12px, 3vw, 20px)',
            zIndex: 1001,
            border: 'none',
            padding: 'clamp(0.45rem, 1.2vh, 0.75rem) clamp(1rem, 4vw, 1.8rem)',
            borderRadius: '3rem',
            fontFamily: 'var(--font-manrope)',
            fontSize: 'clamp(0.45rem, 1.8vw, 0.6rem)',
            fontWeight: 800,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            whiteSpace: 'nowrap',
            maxWidth: 'calc(100vw - 24px)',
            cursor: 'pointer',
            touchAction: 'manipulation'
          }}
        >
          <motion.span>
            {isMenuOpen ? 'Close' : (
              <>
                <span style={{ opacity: 0.6 }}>{NAV_LINKS[activeIdx].label}</span>
                <span style={{ marginLeft: '0.4rem' }}>+</span>
              </>
            )}
          </motion.span>
        </motion.button>
      </div>
    </>
  );
}
