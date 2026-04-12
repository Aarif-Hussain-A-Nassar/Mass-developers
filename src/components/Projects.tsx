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
    const { clientX, clientY } = ref.current.getBoundingClientRect();
    const x = e.clientX - (clientX + ref.current.offsetWidth / 2);
    const y = e.clientY - (clientY + ref.current.offsetHeight / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Link
        href={href}
        className="innovative-btn"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: 'clamp(1rem, 2vw, 1.4rem) clamp(2rem, 4vw, 3.5rem)',
          background: '#ffffff',
          color: '#000000',
          fontSize: 'clamp(0.6rem, 1vw, 0.7rem)',
          fontWeight: 950,
          textTransform: 'uppercase',
          letterSpacing: '0.4em',
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
    <section id="projects" style={{ background: '#0a0a0a', padding: 'clamp(4rem, 12vw, 10rem) 0', overflow: 'hidden' }}>
      <div className="container">
        <div className="projects-grid">

          {/* Left Side: Immersive Image Gallery */}
          <div className="projects-image-side">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  inset: 0,
                }}
              >
                <img
                  src={PROJECTS[active].heroImage}
                  alt={PROJECTS[active].title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </motion.div>
            </AnimatePresence>

            <div className="project-ghost-label">
              PROJECT.0{active + 1}
            </div>
          </div>

          {/* Right Side: Content Slate */}
          <div className="projects-content-side">
            <FadeIn>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
                <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
                <span style={{ fontSize: '0.6rem', fontWeight: 900, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.5em' }}>WORK / ARCHIVE / 03</span>
              </div>
            </FadeIn>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
                  fontWeight: 950,
                  color: '#ffffff',
                  lineHeight: 0.9,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.04em',
                  marginBottom: '2.5rem'
                }}>
                  {PROJECTS[active].title}
                </h2>

                <div className="project-highlight-specs">
                  {PROJECTS[active].specifications?.slice(0, 2).map((spec: any, i: number) => (
                    <div key={i}>
                      <span style={{ display: 'block', fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>{spec.label}</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>{spec.value}</span>
                    </div>
                  ))}
                </div>

                <MagneticCTA href={`/projects/${PROJECTS[active].id}`}>
                  Explore Detail
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
        .projects-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(3rem, 6vw, 8rem);
          align-items: center;
          min-height: 80vh;
        }

        .projects-image-side {
          position: relative;
          height: 80vh;
          overflow: hidden;
          background: #111;
        }

        .project-ghost-label {
          position: absolute; 
          top: 2rem; 
          left: 2rem; 
          font-size: clamp(4rem, 15vw, 10rem); 
          font-weight: 950; 
          color: rgba(255,255,255,0.03); 
          font-family: var(--font-inter);
          line-height: 0.8;
          pointer-events: none;
          text-transform: uppercase;
        }

        .project-highlight-specs {
           display: flex; 
           gap: 2.5rem; 
           margin-bottom: clamp(2.5rem, 5vw, 4rem);
        }

        .innovative-btn:hover {
           background: #000000 !important;
           color: #ffffff !important;
           outline: 1px solid rgba(255,255,255,0.3);
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
           gap: clamp(1rem, 2vw, 1.5rem); 
           margin-top: clamp(4rem, 8vw, 6rem);
           flex-wrap: wrap;
        }

        .pag-dot {
           background: none;
           border: none;
           cursor: pointer;
           padding: 0;
           display: flex;
           flex-direction: column;
           gap: 0.6rem;
           opacity: 0.2;
           transition: opacity 0.4s ease;
        }

        .pag-dot.active {
           opacity: 1;
        }

        .pag-num {
           font-family: var(--font-inter);
           font-size: 0.7rem;
           font-weight: 900;
           color: #fff;
        }

        .pag-line {
           width: 30px;
           height: 2px;
           background: rgba(255,255,255,0.1);
           transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pag-dot.active .pag-line {
           width: clamp(50px, 10vw, 80px);
           background: #fff;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .projects-image-side {
            height: clamp(500px, 80vh, 800px); /* Increased height for better visibility */
            width: 100%;
          }
          .projects-content-side {
             order: -1;
          }
        }

        @media (max-width: 640px) {
           .projects-image-side {
              aspect-ratio: 3/4; /* Architectural vertical focus */
              height: auto;
           }
           .project-highlight-specs {
              gap: 2rem;
           }
           .project-ghost-label {
              top: 1rem;
              left: 1rem;
           }
        }
      `}</style>
    </section>
  );
}
