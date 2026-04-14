'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', color: '#fff' }}>
        <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 300 }}>Project Not Found.</h1>
        <Link href="/" style={{ marginLeft: '1rem', color: 'rgba(255,255,255,0.5)' }}>Back Home</Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      
      <main style={{ background: '#ffffff', color: '#000000', minHeight: '100vh' }}>
        
        {/* Cinematic Hero */}
        <section style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#000' }}>
          <motion.div 
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <img src={project.heroImage} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65 }} />
          </motion.div>
          
          <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 'clamp(4rem, 10vh, 10rem)' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span style={{ color: '#fff', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.4em', display: 'block', marginBottom: '1.5rem', opacity: 0.5 }}>{project.label}</span>
              <h1 style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(2.5rem, 9vw, 8.5rem)', fontWeight: 950, color: '#fff', lineHeight: 0.85, textTransform: 'uppercase', letterSpacing: '-0.04em' }}>
                {project.title.split(' ').map((word, i) => (
                   <span key={i} style={{ display: 'block' }}>{word}</span>
                ))}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Info Grid & Specs */}
        <section style={{ padding: 'clamp(4rem, 8vw, 10rem) 0' }}>
          <div className="container">
            <div className="project-detail-layout">
              {/* Left Column: Narrative */}
              <div className="project-narrative">
                <h3 style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(0,0,0,0.3)', marginBottom: '3rem', borderLeft: '3px solid #000', paddingLeft: '1.5rem' }}>Architectural Narrative</h3>
                <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', lineHeight: 1.65, fontWeight: 500, color: '#000', maxWidth: '650px' }}>
                  {project.description}
                </p>
              </div>

              {/* Right Column: Spec List */}
              <div className="project-specs-box">
                <h3 style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.3, marginBottom: '2.5rem' }}>Project Intelligence</h3>
                <div style={{ display: 'grid', gap: '2rem' }}>
                  {project.specifications?.map((spec, i) => (
                    <div key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '1.25rem' }}>
                      <span style={{ fontSize: '0.55rem', fontWeight: 800, color: '#aaa', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>{spec.label}</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Immersive Gallery */}
        <section style={{ paddingBottom: 'clamp(4rem, 10vw, 10rem)' }}>
          <div className="container">
             <div className="gallery-grid">
                {project.gallery?.map((img, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 0.992 }}
                    transition={{ duration: 0.6 }}
                    className="gallery-item"
                    style={{ position: 'relative', overflow: 'hidden', background: '#f5f5f5' }}
                  >
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <section style={{ borderTop: '1px solid #eee', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <Link href="/#projects" style={{ 
                  fontFamily: 'var(--font-inter)', 
                  fontSize: '0.7rem', 
                  fontWeight: 950, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.5em',
                  textDecoration: 'none',
                  color: '#000',
                  opacity: 0.5,
                  transition: 'opacity 0.3s ease'
                }} className="back-link">
                  ← Back to Selection
                </Link>
            </div>
        </section>

      </main>

      <Footer />

      <style jsx>{`
        .project-detail-layout {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: clamp(3rem, 6vw, 8rem);
          align-items: flex-start;
        }

        .project-specs-box {
          background: #fcfcfc;
          padding: 4rem;
          border: 1px solid #f0f0f0;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .gallery-item {
          aspect-ratio: 4/5;
        }

        .gallery-item:nth-child(3n - 2) {
           grid-column: span 2;
           aspect-ratio: 16/9;
        }

        .back-link:hover {
           opacity: 1 !important;
        }

        @media (max-width: 1024px) {
          .project-detail-layout {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .project-specs-box {
             padding: 2.5rem;
          }
        }

        @media (max-width: 768px) {
           .gallery-grid {
              grid-template-columns: 1fr;
           }
           .gallery-item:nth-child(3n - 2) {
              grid-column: span 1;
              aspect-ratio: 4/5;
           }
           .project-specs-box {
              padding: 2rem 1.5rem;
           }
        }

        @media (max-width: 480px) {
           .project-narrative {
              padding-right: 0 !important;
           }
           .project-specs-box {
              padding: 2rem 1.25rem;
           }
        }
      `}</style>
    </>
  );
}
