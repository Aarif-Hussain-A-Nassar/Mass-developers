'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { PROJECTS } from '@/lib/constants';
import FadeIn from './FadeIn';

/* ─── Innovative Magnetic CTA Component ─── */
function MagneticCTA({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    const x = e.clientX - (left + ref.current.offsetWidth / 2);
    const y = e.clientY - (top + ref.current.offsetHeight / 2);
    setPosition({ x: x * 0.1, y: y * 0.1 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.1 }}
    >
      <Link
        href={href}
        className="innovative-btn"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '1rem 2.2rem', // Made smaller as requested
          background: '#ffffff',
          color: '#000000',
          fontSize: '0.6rem', // Made smaller as requested
          fontWeight: 950,
          textTransform: 'uppercase',
          letterSpacing: '0.42em',
          textDecoration: 'none',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
        <div className="btn-gliss" />
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" style={{ background: '#0a0a0a', padding: 'clamp(4rem, 15vw, 12rem) 0 0 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <FadeIn>
          <div className="section-eyebrow white-line" >
            <span style={{ color: '#ffffff' }}>Projects / 003</span>
          </div>
        </FadeIn>
        <div className="projects-grid">

          {/* Left Side: Immersive Image Gallery (Swapped to be first in DOM for mobile ordering) */}
          <div className="projects-image-side">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  inset: 0,
                }}
              >
                <img
                  src={PROJECTS[active].heroImage}
                  alt={PROJECTS[active].title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
                />
              </motion.div>
            </AnimatePresence>

            <div className="project-ghost-label">
              MASS.{active + 1}
            </div>
          </div>

          {/* Right Side: Content Slate */}
          <div className="projects-content-side">
            <FadeIn>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
                <span style={{ fontSize: '0.6rem', fontWeight: 900, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.5em' }}>INDEX / 0{active + 1}</span>
              </div>
            </FadeIn>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  fontWeight: 950,
                  color: '#ffffff',
                  lineHeight: 0.85,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.04em',
                  marginBottom: '2.5rem'
                }}>
                  {PROJECTS[active].title}
                </h2>

                <div className="project-highlight-specs">
                  {PROJECTS[active].specifications?.slice(0, 2).map((spec: any, i: number) => (
                    <div key={i}>
                      <span style={{ display: 'block', fontSize: '0.52rem', color: 'rgba(255,255,255,0.3)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.6rem' }}>{spec.label}</span>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff' }}>{spec.value}</span>
                    </div>
                  ))}
                </div>

                <MagneticCTA href={`/projects/${PROJECTS[active].id}`}>
                  Explore Project
                </MagneticCTA>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls */}
            <div className="projects-pagination">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`pag-dot ${i === active ? 'active' : ''}`}
                >
                  <span className="pag-num">0{i + 1}</span>
                  <div className="pag-line" />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .section-eyebrow.white-line::before {
          background: rgba(255, 255, 255, 0.3) !important;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr; /* Swapped columns: Image left, Text right */
          gap: clamp(4rem, 10vw, 12rem);
          align-items: center;
          min-height: 85vh;
        }

        .projects-image-side {
          position: relative;
          height: 80vh;
          overflow: hidden;
          background: #000;
        }

        .project-ghost-label {
          position: absolute; 
          bottom: 2rem; 
          right: 2rem; 
          font-size: clamp(5rem, 15vw, 12rem); 
          font-weight: 950; 
          color: rgba(255,255,255,0.03); 
          font-family: var(--font-inter);
          line-height: 0.8;
          pointer-events: none;
          text-transform: uppercase;
        }

        .project-highlight-specs {
           display: flex; 
           gap: 3.5rem; 
           margin-bottom: 4rem;
        }

        .innovative-btn:hover {
           background: #000000 !important;
           color: #ffffff !important;
        }

        .btn-gliss {
           position: absolute;
           top: 0; left: -100%;
           width: 100%; height: 100%;
           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
           transition: left 0.6s ease;
        }

        .innovative-btn:hover .btn-gliss {
           left: 100%;
        }

        .projects-pagination {
           display: flex; 
           gap: 2rem; 
           margin-top: 6rem;
           flex-wrap: nowrap;
           overflow-x: auto;
           padding-bottom: 1rem;
           scrollbar-width: none;
        }

        .projects-pagination::-webkit-scrollbar {
           display: none;
        }

        .pag-dot {
           background: none;
           border: none;
           cursor: pointer;
           padding: 0;
           display: flex;
           flex-direction: row;
           align-items: center;
           gap: 1rem;
           opacity: 0.2;
           transition: all 0.4s ease;
           white-space: nowrap;
        }

        .pag-dot.active {
           opacity: 1;
        }

        .pag-num {
           font-family: var(--font-inter);
           font-size: 0.75rem;
           font-weight: 900;
           color: #fff;
           order: 1;
        }

        .pag-line {
           width: 30px;
           height: 1px;
           background: rgba(255,255,255,0.1);
           transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
           order: 2;
        }

        .pag-dot.active .pag-line {
           width: 30px; /* Keep it consistent and simple */
           background: #fff;
           height: 1.5px;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            min-height: auto;
          }
          .projects-image-side {
            width: calc(100% + 2rem); /* Dynamic full bleed based on container padding */
            margin-left: -1rem;
            height: 50vh;
            min-height: 350px;
          }
          .project-ghost-label {
             bottom: 1rem;
             right: 1rem;
             font-size: clamp(4rem, 15vw, 8rem);
          }
          .projects-content-side {
              padding: 0;
          }
          .projects-pagination {
              margin-top: 3.5rem;
              justify-content: flex-start;
              gap: 1.25rem;
              overflow-x: auto;
              padding-bottom: 0.5rem;
          }
          .pag-num { font-size: 0.65rem; }
          .pag-line { width: 20px; }
          .pag-dot.active .pag-line { width: 40px; }
        }

        @media (max-width: 768px) {
          section {
            padding-top: 6rem !important;
          }
          .projects-image-side {
             width: calc(100% + 2.5rem);
             margin-left: -1.25rem;
          }
          .project-highlight-specs {
             margin-bottom: 2.5rem;
             gap: 2rem;
          }
        }

        @media (max-width: 480px) {
           .project-highlight-specs {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 1.5rem;
           }
           .project-ghost-label {
              font-size: 5rem;
           }
           .projects-pagination {
              gap: 1rem;
           }
           .pag-num { font-size: 0.6rem; }
           .pag-line { width: 15px; }
           .pag-dot.active .pag-line { width: 30px; }
        }
      `}</style>
    </section>
  );
}
