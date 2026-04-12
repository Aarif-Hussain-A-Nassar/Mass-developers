'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import DotNav from '@/components/DotNav';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Expertise from '@/components/Expertise';
import Projects from '@/components/Projects';
import MassInterio from '@/components/MassInterio';
import Testimonials from '@/components/Testimonials';
import Journal from '@/components/Journal';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { SECTIONS_IDS } from '@/lib/constants';

export default function Page() {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActiveDot(SECTIONS_IDS.indexOf(e.target.id)); });
    }, { threshold: 0.5 });
    SECTIONS_IDS.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <DotNav active={activeDot} />
      <main className="relative z-10" style={{ background: '#0a0a0a', minHeight: '100vh', overflowX: 'hidden' }}>
        <Hero />
        <Philosophy />
        <Expertise />
        <Projects />
        <Testimonials />
        <Journal />
        <Contact />
        <MassInterio />
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
