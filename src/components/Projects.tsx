'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
  const sliderTrackRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the active item into the center of the slider track
  useEffect(() => {
    const track = sliderTrackRef.current;
    if (!track) return;
    const activeEl = track.children[active] as HTMLElement;
    if (!activeEl) return;
    const trackWidth = track.offsetWidth;
    const itemLeft = activeEl.offsetLeft;
    const itemWidth = activeEl.offsetWidth;
    track.scrollTo({ left: itemLeft - trackWidth / 2 + itemWidth / 2, behavior: 'smooth' });
  }, [active]);

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
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'absolute',
                  inset: 0,
                }}
              >
                <Image
                  src={PROJECTS[active].heroImage}
                  alt={PROJECTS[active].title}
                  fill
                  priority={active === 0}
                  loading={active === 0 ? undefined : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center center' }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Preload adjacent images for instant switching */}
            <div style={{ display: 'none' }}>
              {PROJECTS.map((proj, i) => {
                // Preload current +- 1
                const isAdjacent = Math.abs(i - active) === 1 || (active === 0 && i === PROJECTS.length - 1) || (active === PROJECTS.length - 1 && i === 0);
                if (isAdjacent) {
                  return (
                    <Image
                      key={i}
                      src={proj.heroImage}
                      alt="preload"
                      width={10}
                      height={10}
                      priority={false}
                    />
                  );
                }
                return null;
              })}
            </div>

            <div className="project-ghost-label">
              MASS.{active + 1}
            </div>

            {/* Stage Navigation Arrows (Overlaying Image) */}
            <div className="stage-nav">
              <button 
                onClick={() => setActive((prev) => (prev > 0 ? prev - 1 : PROJECTS.length - 1))}
                className="stage-btn prev"
                aria-label="Previous"
              >
                ←
              </button>
              <button 
                onClick={() => setActive((prev) => (prev < PROJECTS.length - 1 ? prev + 1 : 0))}
                className="stage-btn next"
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>

          {/* Right Side: Content Slate */}
          <div className="projects-content-side">
            <FadeIn>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
                <span style={{ fontSize: '0.6rem', fontWeight: 900, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.5em' }}>INDEX / {(active + 1).toString().padStart(2, '0')}</span>
              </div>
            </FadeIn>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50 && active < PROJECTS.length - 1) setActive(active + 1);
                  if (info.offset.x > 50 && active > 0) setActive(active - 1);
                }}
                style={{ cursor: 'grab' }}
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

            {/* Desktop Pagination */}
            <div className="projects-pagination">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`pag-dot ${i === active ? 'active' : ''}`}
                >
                  <span className="pag-num">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="pag-line" />
                </button>
              ))}
            </div>

            {/* Mobile Index Number Carousel */}
            <div className="mobile-index-slider">
              <div className="slider-nav-wrap">
                <button 
                  onClick={() => setActive((prev) => (prev > 0 ? prev - 1 : PROJECTS.length - 1))}
                  className="slider-btn"
                  aria-label="Previous Project"
                >
                  <span className="btn-icon">←</span>
                </button>

                <div className="slider-track" ref={sliderTrackRef}>
                  {PROJECTS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`slider-item ${i === active ? 'active' : ''}`}
                    >
                      <span className="slider-num">
                        {(i + 1).toString().padStart(2, '0')}
                      </span>
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => setActive((prev) => (prev < PROJECTS.length - 1 ? prev + 1 : 0))}
                  className="slider-btn"
                  aria-label="Next Project"
                >
                  <span className="btn-icon">→</span>
                </button>
              </div>
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

        .stage-nav {
           position: absolute;
           top: 50%;
           left: 0;
           right: 0;
           transform: translateY(-50%);
           display: none; /* Hidden by default (Desktop) */
           justify-content: space-between;
           padding: 0 1.5rem;
           z-index: 10;
           pointer-events: none;
        }

        @media (max-width: 1024px) {
          .stage-nav {
             display: flex; /* Visible on smaller screens */
          }
        }

        .stage-btn {
           width: 50px;
           height: 50px;
           background: #ffffff;
           color: #000000;
           display: flex;
           align-items: center;
           justify-content: center;
           font-size: 1.2rem;
           cursor: pointer;
           pointer-events: auto;
           transition: all 0.3s ease;
           box-shadow: 0 10px 30px rgba(0,0,0,0.3);
           border: none;
        }

        .stage-btn:hover {
           background: rgba(255,255,255,0.1);
           border-color: rgba(255,255,255,0.3);
           transform: translateY(-50%) scale(1.05);
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

        .mobile-nav-arrows {
           display: none;
           gap: 1.5rem;
           margin-top: 2rem;
        }

        .nav-arrow {
           width: 44px;
           height: 44px;
           background: #ffffff;
           border: none;
           color: #000000;
           display: flex;
           align-items: center;
           justify-content: center;
           font-size: 1.2rem;
           cursor: pointer;
           transition: all 0.3s ease;
        }

        .nav-arrow:hover {
           background: var(--surface-hi);
           border-color: var(--white-30);
        }

        .projects-pagination {
           margin-top: 6rem;
           display: flex;
           gap: 2rem;
        }

        .pag-dot {
           background: none;
           border: none;
           cursor: pointer;
           padding: 0;
           display: flex;
           align-items: center;
           gap: 1rem;
           opacity: 0.25;
           transition: all 0.4s ease;
        }

        .pag-dot.active {
           opacity: 1;
        }

        .pag-num {
           font-family: var(--font-inter);
           font-size: 0.75rem;
           font-weight: 900;
           color: #fff;
        }

        .pag-line {
           width: 30px;
           height: 1px;
           background: rgba(255,255,255,0.1);
        }

        .pag-dot.active .pag-line {
           background: #fff;
        }

        .mobile-index-slider {
           display: none;
           margin-top: 4rem;
           width: 100%;
        }

        .slider-nav-wrap {
           display: flex;
           align-items: center;
           gap: 0.75rem;
           justify-content: space-between;
           width: 100%;
           box-sizing: border-box;
        }

        .slider-btn {
           background: #ffffff;
           border: none;
           color: #000000;
           width: 44px;
           height: 44px;
           min-width: 44px;
           display: flex;
           align-items: center;
           justify-content: center;
           cursor: pointer;
           flex-shrink: 0;
           transition: all 0.3s ease;
        }

        .slider-btn:hover {
           background: var(--surface-hi);
           border-color: var(--white-30);
        }

        .btn-icon {
           font-size: 1.2rem;
           line-height: 1;
        }

        .slider-track {
           display: flex;
           gap: 2rem;
           overflow-x: auto;
           padding: 0.75rem 0.5rem;
           scrollbar-width: none;
           scroll-snap-type: x mandatory;
           scroll-behavior: smooth;
           flex: 1;
           min-width: 0;
        }

        .slider-track::-webkit-scrollbar {
           display: none;
        }

        .slider-item {
           background: none;
           border: none;
           cursor: pointer;
           padding: 0;
           scroll-snap-align: center;
           flex-shrink: 0;
           opacity: 0.2;
           transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .slider-item.active {
           opacity: 1;
           transform: scale(1.2);
        }

        .slider-num {
           font-family: var(--font-inter);
           font-size: clamp(2.5rem, 10vw, 4rem);
           font-weight: 950;
           color: #fff;
           letter-spacing: -0.05em;
        }

        @media (max-width: 1024px) {
          .projects-pagination {
             display: none;
          }
          .mobile-index-slider {
             display: block;
          }
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            min-height: auto;
          }
          .projects-image-side {
            width: calc(100% + 2rem); 
            margin-left: -1rem;
            height: 50vh;
            min-height: 350px;
          }
          .project-ghost-label {
             bottom: 1rem;
             right: 1rem;
             font-size: clamp(4rem, 15vw, 8rem);
          }
        }

        @media (max-width: 480px) {
           .slider-btn {
              width: 36px;
              height: 36px;
              min-width: 36px;
           }
           .btn-icon {
              font-size: 1rem;
           }
           .slider-track {
              gap: 1.25rem;
           }
           .slider-nav-wrap {
              gap: 0.5rem;
           }
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
          .projects-pagination {
             margin-left: -1.25rem;
             padding: 0 1.25rem;
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
           .pag-card {
              width: 180px;
           }
        }
      `}</style>
    </section>
  );
}
