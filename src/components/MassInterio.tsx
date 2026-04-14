'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function MassInterio() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax offsets for different elements
  const mainImgY = useTransform(smoothProgress, [0, 1], ["0%", "-15%"]);
  const detailImg1Y = useTransform(smoothProgress, [0, 1], ["20%", "-40%"]);
  const detailImg2Y = useTransform(smoothProgress, [0, 1], ["-10%", "30%"]);
  const textY = useTransform(smoothProgress, [0, 1], ["50px", "-50px"]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="mass-interio" 
      ref={containerRef}
      style={{ 
        minHeight: '140vh', 
        background: '#0a0a0a', 
        position: 'relative', 
        overflow: 'hidden',
        padding: '10rem 0'
      }}
    >
      <div className="background-label" style={{
        position: 'absolute',
        top: '5%',
        right: '-5%',
        fontFamily: 'var(--font-inter)',
        fontSize: '20vw',
        fontWeight: 900,
        color: 'rgba(255,255,255,0.02)',
        pointerEvents: 'none',
        lineHeight: 1,
        whiteSpace: 'nowrap'
      }}>
        CURATED
      </div>

      <div className="container" style={{ position: 'relative', height: '100%', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left: Asymmetric Image Grid */}
        <div className="image-grid-container" style={{ position: 'relative', height: '80vh' }}>

          {/* Main Large Image */}
          <motion.div 
            style={{ 
              width: '85%', 
              height: '70vh', 
              y: mainImgY, 
              overflow: 'hidden',
              borderRadius: '2px',
              position: 'relative',
              zIndex: 1
            }}
          >
            <Image 
              src="/interio.webp" 
              alt="Mass Interio Main" 
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
              style={{ objectFit: 'cover' }} 
            />
          </motion.div>

          {/* Staggered Detail 1 (Overlapping) */}
          <motion.div 
            style={{ 
              position: 'absolute',
              bottom: '-10%',
              right: '0',
              width: '50%',
              height: '40vh',
              y: detailImg1Y,
              zIndex: 2,
              borderRadius: '2px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <Image 
              src="/sculptural.webp" 
              alt="Sculptural Detail" 
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
              style={{ objectFit: 'cover' }} 
            />
          </motion.div>

          {/* Staggered Detail 2 (Floating Top Left) */}
          <motion.div 
            style={{ 
              position: 'absolute',
              top: '-15%',
              left: '-10%',
              width: '35%',
              height: '30vh',
              y: detailImg2Y,
              zIndex: 0,
              borderRadius: '2px',
              overflow: 'hidden',
              opacity: 0.6,
              filter: 'grayscale(100%) brightness(0.7)'
            }}
          >
            <Image 
              src="/lighting.webp" 
              alt="Lighting Detail" 
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
              style={{ objectFit: 'cover' }} 
            />
          </motion.div>
        </div>

        {/* Right: Studio Content */}
        <motion.div className="studio-content" style={{ opacity, y: textY, paddingLeft: '2rem', zIndex: 10 }}>
          <div style={{ width: '60px', height: '2px', background: 'rgba(255,255,255,0.2)', marginBottom: '3rem' }} />
          
          <span style={{ 
            fontFamily: 'var(--font-inter)', 
            fontSize: '0.7rem', 
            fontWeight: 900, 
            textTransform: 'uppercase', 
            letterSpacing: '0.6em', 
            color: 'rgba(255,255,255,0.3)',
            display: 'block',
            marginBottom: '1.5rem'
          }}>
            STUDIO / MASS INTERIO
          </span>

          <h2 style={{ 
            fontFamily: 'var(--font-inter)', 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            fontWeight: 950, 
            color: '#fff', 
            lineHeight: 1,
            letterSpacing: '-0.02em',
            marginBottom: '2.5rem'
          }}>
            SPACES<br />
            THAT <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>BREATHE.</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-manrope)',
            fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
            lineHeight: 1.9,
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '440px',
            marginBottom: '4rem',
            fontWeight: 500
          }}>
            Minimalism is not the absence of something, but the perfect amount of everything. We curate environments where materiality and light intersect to create a dialogue between the inhabitant and the architectural void.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <motion.a 
              href="https://www.instagram.com/mass.interio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="interio-btn-alt"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff',
                padding: '1.4rem 2.5rem',
                borderRadius: '2px',
                fontSize: '0.6rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.4em',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.5rem',
                width: 'fit-content',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
            >
              Instagram
              <span style={{ fontSize: '1rem', opacity: 0.5 }}>→</span>
            </motion.a>
            
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', gap: '3rem' }}>
               <div>
                  <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.2)', display: 'block', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>OFFICE</span>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', fontWeight: 700 }}>KOCHI / IN</span>
               </div>
               <div>
                  <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.2)', display: 'block', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>SPECIALIZATION</span>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', fontWeight: 700 }}>MINIMAL CURATION</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .interio-btn-alt:hover {
          background: #ffffff !important;
          color: #000000 !important;
          border-color: #ffffff !important;
        }
        
        @media (max-width: 1200px) {
          .container {
            gap: 2rem;
          }
        }

        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            width: 100% !important;
            padding: 0 1.5rem !important;
            margin: 0 !important;
          }
          section {
            min-height: auto !important;
            padding: 4rem 0 8rem 0 !important;
            overflow-x: hidden;
          }
          .image-grid-container {
            width: 100%;
            height: 65vh !important;
            margin-bottom: 5rem;
            position: relative;
          }
          /* Resetting children specifically for mobile to avoid relative/absolute conflicts */
          .image-grid-container > :global(div:nth-child(1)) {
            width: 80% !important;
            height: 55vh !important;
            margin: 0 auto;
            position: relative !important;
            z-index: 2;
          }
          /* Detail 1 - Staggered Bottom Left */
          .image-grid-container > :global(div:nth-child(2)) {
            width: 55% !important;
            height: 25vh !important;
            position: absolute !important;
            bottom: 0 !important;
            left: 0 !important;
            z-index: 5 !important;
            transform: translateY(20%) !important;
            box-shadow: 0 15px 40px rgba(0,0,0,0.6);
          }
          /* Detail 2 - Staggered Top Right */
          .image-grid-container > :global(div:nth-child(3)) {
            width: 45% !important;
            height: 22vh !important;
            position: absolute !important;
            top: 2rem !important;
            right: -5% !important;
            z-index: 1 !important;
            opacity: 0.7 !important;
          }
          .studio-content {
            padding-left: 0 !important;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 10;
          }
          h2 {
            font-size: clamp(2.4rem, 10vw, 3.2rem) !important;
            margin-bottom: 2rem !important;
          }
          p {
            font-size: 1rem !important;
            margin-bottom: 3rem !important;
          }
          .background-label {
            font-size: 45vw !important;
            top: 5% !important;
            opacity: 0.01 !important;
          }
          .interio-btn-alt {
            width: 100% !important;
            justify-content: center;
            padding: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
