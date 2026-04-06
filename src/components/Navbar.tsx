'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home',     href: '#home'     },
  { name: 'About',    href: '#about'    },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact',  href: '#contact'  },
];

const Navbar: React.FC = () => {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [activeTab,        setActiveTab]         = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen]  = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,  opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position:   'fixed',
          top: 0, left: 0, right: 0,
          zIndex:     50,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          padding:    isScrolled ? '0.75rem 0' : '1.5rem 0',
          /*
           * Glassmorphism — surface_variant @40% opacity + blur(20px)
           * Transitions from transparent to frosted glass on scroll
           */
          background: isScrolled
            ? 'rgba(19, 19, 19, 0.75)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled
            ? '1px solid rgba(255,255,255,0.06)'
            : 'none',
        }}
      >
        <div className="container-max" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link
            href="#home"
            onClick={() => { setActiveTab('Home'); setIsMobileMenuOpen(false); }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', flexShrink: 0 }}
          >
            <div style={{ position: 'relative', width: '38px', height: '38px', overflow: 'hidden' }}>
              <Image
                src="/logo-dark.jpg"
                alt="Mass Developers Logo"
                fill
                sizes="38px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: '0.95rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#e2e2e2',
              }}>
                MASS
              </span>
              <span style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 500,
                fontSize: '0.56rem',
                letterSpacing: '0.22em',
                color: 'rgba(198,198,198,0.5)',
                textTransform: 'uppercase',
                marginTop: '1px',
              }}>
                Developers
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '0.125rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                style={{
                  position:      'relative',
                  padding:       '0.5rem 0.875rem',
                  fontFamily:    "'Inter', sans-serif",
                  fontSize:      '0.7rem',
                  fontWeight:    600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: activeTab === link.name
                    ? '#e2e2e2'
                    : 'rgba(198,198,198,0.45)',
                  transition:  'color 0.2s ease',
                  textDecoration: 'none',
                }}
              >
                {activeTab === link.name && (
                  <motion.div
                    layoutId="navPill"
                    style={{
                      position:   'absolute',
                      inset:      0,
                      background: 'rgba(255,255,255,0.06)',
                      borderRadius: 0,
                      zIndex:     -1,
                    }}
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', flexShrink: 0 }}>
            {/* CTA — square white button */}
            <Link
              href="#contact"
              className="desktop-cta"
              style={{
                display:     'none',
                alignItems:  'center',
                justifyContent: 'center',
                padding:     '0.6rem 1.5rem',
                background:  '#ffffff',
                color:       '#131313',
                fontFamily:  "'Inter', sans-serif",
                fontWeight:  800,
                fontSize:    '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                borderRadius:  0,    /* SQUARE */
                textDecoration: 'none',
                transition:  'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                whiteSpace:  'nowrap',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'transparent';
                el.style.color      = '#e2e2e2';
                el.style.border     = '1px solid rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#ffffff';
                el.style.color      = '#131313';
                el.style.border     = 'none';
              }}
            >
              Get a Quote
            </Link>

            {/* Hamburger — square */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="hamburger"
              style={{
                display:        'flex',
                flexDirection:  'column',
                justifyContent: 'center',
                alignItems:     'center',
                width:          '40px',
                height:         '40px',
                background:     isMobileMenuOpen ? 'rgba(255,255,255,0.06)' : 'transparent',
                border:         '1px solid rgba(255,255,255,0.10)',
                borderRadius:   0,   /* SQUARE */
                cursor:         'pointer',
                gap:            '5px',
              }}
            >
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  display:      'block',
                  width:        '18px',
                  height:       '1.5px',
                  background:   '#e2e2e2',
                  borderRadius: '0',
                  transition:   'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isMobileMenuOpen
                    ? i === 0 ? 'rotate(45deg) translate(0, 6.5px)'
                    : i === 2 ? 'rotate(-45deg) translate(0, -6.5px)'
                    : 'none'
                    : 'none',
                  opacity: isMobileMenuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{   opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position:       'fixed',
              inset:          0,
              zIndex:         40,
              background:     '#131313',
              paddingTop:     '80px',
              display:        'flex',
              flexDirection:  'column',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem 1.5rem', gap: '0', flex: 1 }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => { setActiveTab(link.name); setIsMobileMenuOpen(false); }}
                    style={{
                      display:         'flex',
                      alignItems:      'center',
                      justifyContent:  'space-between',
                      width:           '100%',
                      padding:         '1.375rem 0',
                      borderBottom:    '1px solid rgba(255,255,255,0.06)',
                      fontFamily:      "'Inter', sans-serif",
                      fontSize:        '1.5rem',
                      fontWeight:      800,
                      letterSpacing:   '0.04em',
                      textTransform:   'uppercase',
                      color:           '#e2e2e2',
                      textDecoration:  'none',
                    }}
                  >
                    {link.name}
                    <span style={{ fontSize: '1.1rem', color: 'rgba(226,226,226,0.35)', fontWeight: 300 }}>→</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile CTA — square */}
            <div style={{ padding: '0 1.5rem 3rem' }}>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  width:           '100%',
                  padding:         '1.125rem',
                  background:      '#ffffff',
                  color:           '#131313',
                  fontFamily:      "'Inter', sans-serif",
                  fontWeight:      800,
                  fontSize:        '0.72rem',
                  letterSpacing:   '0.2em',
                  textTransform:   'uppercase',
                  textDecoration:  'none',
                  borderRadius:    0,  /* SQUARE */
                }}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .hamburger   { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
