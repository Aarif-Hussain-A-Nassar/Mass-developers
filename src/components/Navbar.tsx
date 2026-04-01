'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
          background: isScrolled ? 'rgba(5, 5, 5, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="container-max" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => { setActiveTab('Home'); setIsMobileMenuOpen(false); }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none', flexShrink: 0 }}
          >
            <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '8px', overflow: 'hidden' }}>
              <Image
                src="/logo-dark.jpg"
                alt="Mass Developers Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: '1rem',
                letterSpacing: '-0.01em',
                color: '#f0ede8',
              }}>
                MASS
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '0.58rem',
                letterSpacing: '0.2em',
                color: 'rgba(240,237,232,0.45)',
                textTransform: 'uppercase',
                marginTop: '-1px',
              }}>
                Developers
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                style={{
                  position: 'relative',
                  padding: '0.5rem 1rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: activeTab === link.name ? '#f0ede8' : 'rgba(240,237,232,0.45)',
                  borderRadius: '8px',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none',
                }}
              >
                {activeTab === link.name && (
                  <motion.div
                    layoutId="navPill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(255,255,255,0.07)',
                      borderRadius: '8px',
                      zIndex: -1,
                    }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <Link
              href="#contact"
              className="desktop-cta"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.55rem 1.4rem',
                background: '#d4a017',
                color: '#080808',
                fontWeight: 800,
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                borderRadius: '100px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#e8b820';
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#d4a017';
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              }}
            >
              Get a Quote
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="hamburger"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '40px',
                height: '40px',
                background: isMobileMenuOpen ? 'rgba(255,255,255,0.08)' : 'transparent',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                cursor: 'pointer',
                gap: '5px',
              }}
            >
              <span style={{
                display: 'block', width: '18px', height: '1.5px',
                background: '#f0ede8',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(45deg) translate(0, 6.5px)' : 'none',
              }} />
              <span style={{
                display: 'block', width: '18px', height: '1.5px',
                background: '#f0ede8',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                opacity: isMobileMenuOpen ? 0 : 1,
              }} />
              <span style={{
                display: 'block', width: '18px', height: '1.5px',
                background: '#f0ede8',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(-45deg) translate(0, -6.5px)' : 'none',
              }} />
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
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: '#050505',
              paddingTop: '80px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem 1.5rem', gap: '0.25rem', flex: 1 }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => { setActiveTab(link.name); setIsMobileMenuOpen(false); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '1.25rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: '#f0ede8',
                      textDecoration: 'none',
                      fontFamily: "'Playfair Display', serif",
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {link.name}
                    <span style={{ fontSize: '1.1rem', color: '#d4a017' }}>→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div style={{ padding: '0 1.5rem 2.5rem' }}>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  padding: '1rem',
                  background: '#d4a017',
                  color: '#080808',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  borderRadius: '100px',
                  textDecoration: 'none',
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
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
