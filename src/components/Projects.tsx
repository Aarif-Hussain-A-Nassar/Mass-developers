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

          {/* IMAGE SIDE (Right on Desktop, Top on Mobile) */}
          <div className="projects-image-side">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="image-wrapper"
              >
                <img
                  src={PROJECTS[active].heroImage}
                  alt={PROJECTS[active].title}
                />
              </motion.div>
            </AnimatePresence>

            <div className="project-ghost-label">
              MASS.{active + 1}
            </div>
          </div>

          {/* CONTENT SIDE (Left on Desktop, Bottom on Mobile) */}
          <div className="projects-content-side">
            <FadeIn>
              <div className="project-tag-wrap">
                <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
                <span className="project-tag">WORK / 2.0</span>
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
                    Explore Architectural Vision
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

      <style jsx>{`
        .projects-section {
          background: #0a0a0a;
          padding: clamp(6rem, 15vw, 12rem) 0;
          position: relative;
          overflow: hidden;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(4rem, 8vw, 12rem);
          align-items: center;
          min-height: 85vh;
        }

        /* Image Handling */
        .projects-image-side {
          position: relative;
          height: clamp(500px, 80vh, 900px);
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
          fontSize: 0.6rem;
          font-weight: 900;
          color: rgba(255,255,255,0.25);
          text-transform: uppercase;
          letter-spacing: 0.5em;
        }

        .project-title {
          font-family: var(--font-inter);
          fontSize: clamp(2.8rem, 6.5vw, 5.5rem);
          fontWeight: 950;
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
          fontSize: 0.52rem;
          color: rgba(255,255,255,0.3);
          fontWeight: 800;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          letter-spacing: 0.1em;
        }
        .spec-value {
          fontSize: clamp(0.75rem, 2vw, 0.95rem);
          fontWeight: 700;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Innovative Button Styles */
        .magnetic-btn-wrap {
          display: inline-block;
        }
        .innovative-btn {
          display: inline-flex;
          align-items: center;
          padding: clamp(1.1rem, 3vw, 1.4rem) clamp(2.2rem, 5vw, 3.2rem);
          background: #ffffff;
          color: #000000;
          fontSize: clamp(0.55rem, 1.5vw, 0.65rem);
          fontWeight: 950;
          textTransform: uppercase;
          letterSpacing: 0.4em;
          textDecoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          border-radius: 2px;
        }
        .innovative-btn:hover {
          background: #000 !important;
          color: #fff !important;
          border: 1px solid rgba(255,255,255,0.2);
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
           margin-top: clamp(4rem, 8vw, 8rem);
           flex-wrap: wrap;
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
           width: 80px;
           background: #fff;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1100px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 5rem;
          }
          .projects-content-side {
            order: 2;
            padding: 0 5%;
          }
          .projects-image-side {
            order: 1;
            width: 100vw;
            margin-left: calc(-5vw - 1rem); /* Break container for full bleed */
            height: clamp(450px, 70vh, 650px);
          }
           .project-title {
            marginBottom: 2rem;
          }
          .project-highlight-specs {
            marginBottom: 4rem;
          }
          .projects-pagination {
            marginTop: 5rem;
          }
        }

        @media (max-width: 640px) {
          .projects-section {
            padding: 4rem 0;
          }
          .projects-image-side {
            height: 60vh;
            margin-left: -5%; /* Approximate container padding */
          }
          .project-title {
            fontSize: 2.5rem;
          }
          .project-highlight-specs {
            flex-direction: column;
            gap: 2rem;
            margin-bottom: 3.5rem;
          }
          .innovative-btn {
            width: 100%;
            justify-content: center;
          }
          .project-ghost-label {
            font-size: 5rem;
            bottom: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
