'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blogs', href: '#blogs' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4 pointer-events-none"
    >
      <motion.nav 
        layout
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`pointer-events-auto flex flex-col px-6 py-3 rounded-[2rem] border border-black dark:border-white bg-white dark:bg-black shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-5xl w-full overflow-hidden`}
      >
        <div className="flex items-center justify-between w-full">
          <Link 
            href="/" 
            onClick={() => { setActiveTab('Home'); setIsMobileMenuOpen(false); }}
            className="text-xl font-bold tracking-tighter shrink-0 flex items-center gap-1 group"
          >
            <span className="text-black dark:text-white transition-all group-hover:opacity-80 uppercase">
              MASS
            </span>
            <span className="text-black dark:text-white font-black">.</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className="relative px-2 py-2 text-sm font-semibold tracking-widest transition-colors hover:text-foreground text-foreground/80"
              >
                <span className="relative z-10 text-black dark:text-white">{link.name.toUpperCase()}</span>
                {activeTab === link.name && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-black/10 dark:bg-white/10 rounded-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <ThemeToggle />
            
            <Link 
              href="#contact" 
              className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-bold tracking-widest transition-all rounded-full bg-black text-white dark:bg-white dark:text-black hover:scale-105 active:scale-95 uppercase"
            >
              Get a Quote
            </Link>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none rounded-md relative z-50 ml-2"
            >
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: -4 }}
                className="w-6 h-0.5 bg-black dark:bg-white block absolute transition-all duration-300"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-black dark:bg-white block absolute transition-all duration-300 mt-0"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: -45, y: 2 } : { rotate: 0, y: 4 }}
                className="w-6 h-0.5 bg-black dark:bg-white block absolute transition-all duration-300"
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col pt-6 pb-4 w-full"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => { setActiveTab(link.name); setIsMobileMenuOpen(false); }}
                  className="block w-full px-4 py-4 text-sm font-bold tracking-widest text-center border-b border-black/10 dark:border-white/10 text-black dark:text-white uppercase transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 flex justify-center w-full">
                <Link 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center px-8 py-4 w-full text-sm font-bold tracking-widest transition-all rounded-full bg-black text-white dark:bg-white dark:text-black uppercase shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-[1.02]"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
