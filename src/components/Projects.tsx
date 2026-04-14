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
      className="magnetic-btn-wrap"
    >
      <Link 
        href={href}
        className="innovative-btn"
      >
        <span className="btn-text">{children}</span>
        <div className="btn-gliss" />
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-grid">
           
           {/* MOBILE ONLY: Numbering Badge (Top Right of section) */}
           <div className="mobile-index-badge">
             <span className="mobile-num-curr">0{active + 1}</span>
             <span className="mobile-num-sep">/</span>
             <span className="mobile-num-total">0{PROJECTS.length}</span>
           </div>

           {/* IMAGE SIDE */}
          <div className="projects-image-side">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="image-wrapper"
              >
                <img 
                  src={PROJECTS[active].heroImage} 
                  alt={PROJECTS[active].title} 
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Desktop Only Ghost Label */}
            <div className="project-ghost-label">
              MASS.{active + 1}
            </div>
          </div>

           {/* CONTENT SIDE */}
           <div className="projects-content-side">
            <div className="content-inner-wrapper">
              <FadeIn>
                <div className="project-tag-wrap">
                  <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
                  <span className="project-tag">{PROJECTS[active].label}</span>
                </div>
              </FadeIn>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="project-title">
                    {PROJECTS[active].title}
                  </h2>
                  
                  <div className="project-highlight-specs">
                     {PROJECTS[active].specifications?.slice(0, 2).map((spec: any, i: number) => (
                        <div key={i} className="spec-item">
                          <span className="spec-label">{spec.label}</span>
                          <span className="spec-value">{spec.value}</span>
                        </div>
                     ))}
                  </div>

                  <div className="cta-container">
                    <MagneticCTA href={`/projects/${PROJECTS[active].id}`}>
                      View Project
                    </MagneticCTA>
                  </div>
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
      </div>

      <style jsx>{`
        .projects-section {
          background: #0a0a0a;
          padding: clamp(6rem, 15vw, 12rem) 0;
          position: relative;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(4rem, 8vw, 10rem);
          align-items: center;
          min-height: 85vh;
        }

        .mobile-index-badge {
          display: none; /* Desktop hidden */
        }

        /* Image Handling */
        .projects-image-side {
          position: relative;
          height: 80vh;
          overflow: hidden;
          background: #000;
          order: 2;
        }
        .image-wrapper {
          position: absolute;
          inset: 0;
        }
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }

        /* Content Handling */
        .projects-content-side {
          order: 1;
        }
        .project-tag-wrap {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3.5rem;
        }
        .project-tag {
          font-size: 0.6rem;
          font-weight: 900;
          color: rgba(255,255,255,0.25);
          text-transform: uppercase;
          letter-spacing: 0.5em;
        }

        .project-title {
          font-family: var(--font-inter);
          font-size: clamp(2.8rem, 6.5vw, 5.5rem);
          font-weight: 950;
          color: #ffffff;
          line-height: 0.9;
          text-transform: uppercase;
          letter-spacing: -0.05em;
          margin-bottom: 3rem;
        }

        .project-highlight-specs {
           display: flex; 
           gap: clamp(2rem, 5vw, 5rem); 
           margin-bottom: 5rem;
        }
        .spec-label {
          display: block;
          font-size: 0.52rem;
          color: rgba(255,255,255,0.3);
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          letter-spacing: 0.1em;
        }
        .spec-value {
          font-size: clamp(0.75rem, 2vw, 0.95rem);
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Innovative Button Styles */
        .innovative-btn {
          display: inline-flex;
          align-items: center;
          padding: 1.1rem 2.4rem;
          background: #ffffff;
          color: #000000;
          font-size: 0.6rem;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .innovative-btn:hover {
          background: #000 !important;
          color: #fff !important;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.2);
        }
        .btn-gliss {
           position: absolute;
           top: 0; left: -100%;
           width: 100%; height: 100%;
           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
           transition: left 0.7s ease;
        }
        .innovative-btn:hover .btn-gliss {
           left: 100%;
        }

        /* Ghost Label */
        .project-ghost-label {
          position: absolute; 
          bottom: 2rem; 
          right: 2rem; 
          font-size: clamp(4rem, 15vw, 10rem); 
          font-weight: 950; 
          color: rgba(255,255,255,0.03); 
          font-family: var(--font-inter);
          line-height: 0.8;
          pointer-events: none;
          text-transform: uppercase;
        }

        /* Pagination */
        .projects-pagination {
           display: flex; 
           gap: 1.5rem; 
           margin-top: 6rem;
        }
        .pag-dot {
           background: none;
           border: none;
           cursor: pointer;
           padding: 0;
           display: flex;
           flex-direction: column;
           gap: 0.8rem;
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
           transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .pag-dot.active .pag-line {
           width: 70px;
           background: #fff;
        }

        /* UNIQE MOBILE IDENTITY */
        @media (max-width: 1024px) {
          .projects-section {
            padding-top: 2rem;
          }
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 0; /* Tight together */
          }
          
          .mobile-index-badge {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            position: absolute;
            top: 4rem;
            right: 1.5rem;
            z-index: 20;
            background: #fff;
            color: #000;
            padding: 0.8rem 1.2rem;
            font-family: var(--font-inter);
            font-weight: 900;
            font-size: 0.7rem;
            letter-spacing: 0.2em;
          }
          .mobile-num-curr { font-size: 1rem; }
          .mobile-num-sep { opacity: 0.2; }
          .mobile-num-total { font-size: 0.6rem; opacity: 0.4; }

          .projects-image-side {
            order: 1;
            width: 100vw;
            margin-left: -1rem; /* Adjust for padding if needed */
            height: 55vh;
            border-bottom: 4px solid #fff;
          }
          .project-ghost-label { display: none; }

          .projects-content-side {
            order: 2;
            padding: 2.5rem 1.25rem 4rem 1.25rem;
            position: relative;
            background: #0a0a0a;
            margin-top: -2rem; /* The "Architect's Overlap" */
            border-left: 1px solid rgba(255,255,255,0.1);
          }
          
          .project-tag-wrap { margin-bottom: 2rem; }
          .project-title {
            font-size: 2.2rem;
            margin-bottom: 2rem;
          }
          .project-highlight-specs {
            flex-direction: column;
            gap: 1.5rem;
            margin-bottom: 3rem;
          }
          .spec-label { margin-bottom: 0.4rem; }
          .spec-value { font-size: 0.85rem; }

          .innovative-btn {
            padding: 1rem 1.8rem;
            font-size: 0.55rem;
            letter-spacing: 0.3em;
          }
          
          .projects-pagination {
            margin-top: 4rem;
            gap: 1rem;
          }
          .pag-line { width: 20px; }
          .pag-dot.active .pag-line { width: 40px; }
        }
      `}</style>
    </section>
  );
}
