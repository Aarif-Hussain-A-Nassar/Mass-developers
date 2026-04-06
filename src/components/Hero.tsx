'use client';

import React, { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Grid } from '@react-three/drei';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import * as THREE from 'three';

/* ══════════════════════════════════════════
   3-D SCENE
══════════════════════════════════════════ */
const Building = ({
  position, size, delay = 0,
}: {
  position: [number, number, number];
  size:     [number, number, number];
  delay?:   number;
}) => {
  const meshRef  = useRef<THREE.Mesh>(null);
  const edgeRef  = useRef<THREE.LineSegments>(null);
  const startY   = position[1] - 10;
  const progress = useRef(delay > 0 ? -delay : 0);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    const edge = edgeRef.current;
    if (!mesh || !edge) return;
    progress.current = Math.min(1, progress.current + delta * 0.5);
    if (progress.current < 0) return;
    const eased = 1 - Math.pow(1 - Math.max(0, progress.current), 3);
    const y = startY + (position[1] - startY) * eased
            + Math.sin(state.clock.elapsedTime * 0.4 + delay) * 0.06;
    mesh.position.y = y;
    edge.position.y = y;
  });

  const geo = useMemo(() => new THREE.BoxGeometry(...size), [size[0], size[1], size[2]]);

  return (
    <group position={[position[0], startY, position[2]]}>
      <mesh ref={meshRef} geometry={geo}>
        <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.15} envMapIntensity={3} />
      </mesh>
      <lineSegments ref={edgeRef} geometry={new THREE.EdgesGeometry(geo)}>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
};

const GroundGrid = () => (
  <Grid
    position={[0, -1.5, 0]}
    args={[40, 40]}
    cellSize={0.9}
    cellThickness={0.2}
    cellColor="#1a1a1a"
    sectionSize={4.5}
    sectionThickness={0.35}
    sectionColor="#242424"
    fadeDistance={26}
    fadeStrength={1.8}
    infiniteGrid
  />
);

const DustParticles = () => {
  const count     = 140;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = Math.random() * 8 - 1;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return arr;
  }, []);
  const ref = useRef<THREE.Points>(null);
  useFrame((s) => { if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.008; });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.014} transparent opacity={0.2} sizeAttenuation />
    </points>
  );
};

const Skyline = () => {
  const buildings = [
    { pos: [0,    3.0,  0   ] as [number,number,number], size: [1.6, 10.0, 1.6] as [number,number,number], delay: 0.0  },
    { pos: [-2.0, 2.2,  0.2 ] as [number,number,number], size: [1.3,  7.5, 1.3] as [number,number,number], delay: 0.08 },
    { pos: [ 2.0, 2.4,  0.2 ] as [number,number,number], size: [1.3,  8.0, 1.3] as [number,number,number], delay: 0.06 },
    { pos: [-3.8, 1.4,  0.1 ] as [number,number,number], size: [1.2,  6.0, 1.2] as [number,number,number], delay: 0.14 },
    { pos: [-5.6, 0.7,  0.0 ] as [number,number,number], size: [1.1,  4.5, 1.1] as [number,number,number], delay: 0.22 },
    { pos: [-7.2, 0.1,  0.0 ] as [number,number,number], size: [1.0,  3.2, 1.0] as [number,number,number], delay: 0.30 },
    { pos: [-8.8,-0.4,  0.0 ] as [number,number,number], size: [0.9,  2.4, 0.9] as [number,number,number], delay: 0.38 },
    { pos: [ 3.8, 1.6,  0.1 ] as [number,number,number], size: [1.2,  6.4, 1.2] as [number,number,number], delay: 0.12 },
    { pos: [ 5.6, 0.8,  0.0 ] as [number,number,number], size: [1.1,  4.8, 1.1] as [number,number,number], delay: 0.20 },
    { pos: [ 7.2, 0.2,  0.0 ] as [number,number,number], size: [1.0,  3.4, 1.0] as [number,number,number], delay: 0.28 },
    { pos: [ 8.8,-0.3,  0.0 ] as [number,number,number], size: [0.9,  2.6, 0.9] as [number,number,number], delay: 0.36 },
    /* back row */
    { pos: [-1.2, 1.0, -2.4 ] as [number,number,number], size: [1.0,  5.2, 0.8] as [number,number,number], delay: 0.16 },
    { pos: [ 1.2, 0.8, -2.4 ] as [number,number,number], size: [1.0,  4.8, 0.8] as [number,number,number], delay: 0.18 },
    { pos: [-3.2, 0.2, -2.2 ] as [number,number,number], size: [0.9,  3.4, 0.7] as [number,number,number], delay: 0.26 },
    { pos: [ 3.2, 0.3, -2.2 ] as [number,number,number], size: [0.9,  3.6, 0.7] as [number,number,number], delay: 0.24 },
    /* foreground */
    { pos: [-2.8,-0.4,  2.0 ] as [number,number,number], size: [0.8,  2.2, 0.8] as [number,number,number], delay: 0.50 },
    { pos: [ 2.8,-0.2,  2.0 ] as [number,number,number], size: [0.8,  2.6, 0.8] as [number,number,number], delay: 0.48 },
    { pos: [ 0.0,-0.4,  2.4 ] as [number,number,number], size: [0.7,  2.0, 0.7] as [number,number,number], delay: 0.52 },
  ];
  return (
    <>
      {buildings.map((b, i) => (
        <Building key={i} position={b.pos} size={b.size} delay={b.delay} />
      ))}
    </>
  );
};

function useSuppressThreeWarnings() {
  useEffect(() => {
    const orig = console.warn.bind(console);
    console.warn = (...args: unknown[]) => {
      const msg = String(args[0] ?? '');
      if (msg.includes('PCFSoftShadowMap') || msg.includes('THREE.Clock') || msg.includes('THREE.THREE')) return;
      orig(...args);
    };
    return () => { console.warn = orig; };
  }, []);
}

const Scene = () => {
  useSuppressThreeWarnings();
  return (
    <Canvas
      /* Camera is higher up, angled DOWN onto the skyline */
      camera={{ position: [0, 4, 12], fov: 58 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} color="#ffffff" />
        <directionalLight position={[10, 14, 8]}  intensity={2.5} color="#ffffff" />
        <directionalLight position={[-8, 10, -5]} intensity={0.9} color="#d0d0d0" />
        <pointLight position={[0, 10, 0]} intensity={2.0} color="#ffffff" distance={22} />
        <Environment preset="city" />
        <GroundGrid />
        <Float speed={0.35} rotationIntensity={0.02} floatIntensity={0.1}>
          <Skyline />
        </Float>
        <DustParticles />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.28}
          minPolarAngle={Math.PI / 4.5}
          maxPolarAngle={Math.PI / 2.2}
          target={[0, 2.5, 0]}
        />
      </Suspense>
    </Canvas>
  );
};

/* ══════════════════════════════════════════
   COUNT-UP STAT
══════════════════════════════════════════ */
function useCountUp(target: number, duration = 2200) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick  = (now: number) => {
        const t     = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 4);
        setCount(Math.floor(eased * target));
        if (t < 1) requestAnimationFrame(tick);
        else setCount(target);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return { count, ref };
}

/* ══════════════════════════════════════════
   WORD REVEAL
══════════════════════════════════════════ */
function WordReveal({ text, delay = 0, style = {} }: {
  text:   string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const words = text.split(' ');
  return (
    <span style={{ display: 'inline', ...style }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.85, delay: delay + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  /*
   * Text block: gentle upward drift as user scrolls
   * Canvas wrapper: parallax moves UP faster → buildings "rise"
   */
  const rawTextY   = useTransform(scrollY, [0, 600], [0, -70]);
  const textY      = useSpring(rawTextY,  { stiffness: 80, damping: 22 });

  const rawCanvasY = useTransform(scrollY, [0, 600], [0, -160]);
  const canvasY    = useSpring(rawCanvasY, { stiffness: 60, damping: 18 });

  /* Stats */
  const s250 = useCountUp(250);
  const s8   = useCountUp(8);
  const s98  = useCountUp(98);
  const s50  = useCountUp(50);

  return (
    <section
      id="home"
      style={{
        position:   'relative',
        height:     '100vh',
        minHeight:  '680px',
        overflow:   'hidden',
        background: '#131313',
        display:    'flex',
        flexDirection: 'column',
      }}
    >
      {/* Dot texture — full coverage */}
      <div
        className="pattern-dots"
        style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      />

      {/* ──────────────────────────────────────────────
          TEXT BLOCK
          Sits in the TOP half of the hero.
          Has its own solid dark background so nothing
          from the 3-D bleeds into the text area.
      ─────────────────────────────────────────────── */}
      <motion.div
        style={{
          position: 'relative',
          zIndex:   10,
          y:        textY,
          /* Solid dark gradient that covers the text area cleanly */
          background: 'linear-gradient(to bottom, #131313 0%, #131313 70%, rgba(19,19,19,0) 100%)',
          paddingBottom: '3rem',
        }}
        className="container-max"
      >
        <div
          style={{
            paddingTop:    '110px',
            textAlign:     'center',
            display:       'flex',
            flexDirection: 'column',
            alignItems:    'center',
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label" style={{ justifyContent: 'center' }}>
              Since 2018 · Architectural Integrity
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            style={{
              fontFamily:    "'Inter', sans-serif",
              fontSize:      'clamp(2.6rem, 7vw, 6.5rem)',
              fontWeight:    900,
              lineHeight:    1.0,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color:         '#f0f0f0',
              maxWidth:      '980px',
              marginBottom:  '1.25rem',
            }}
          >
            <WordReveal text="Redefining" delay={0.1} />
            {' '}
            <span className="gradient-text" style={{ display: 'inline-block' }}>
              <WordReveal text="Architectural" delay={0.25} />
            </span>
            <br />
            <WordReveal
              text="Integrity"
              delay={0.45}
              style={{ fontWeight: 300, letterSpacing: '0.08em', color: 'rgba(240,240,240,0.22)' }}
            />
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily:   "'Manrope', sans-serif",
              fontSize:     '1rem',
              color:        'rgba(200,200,200,0.6)',
              maxWidth:     '480px',
              lineHeight:   '1.8',
              marginBottom: '2rem',
            }}
          >
            MASS Developers operates at the intersection of structural brutalism
            and modern luxury — transforming visions into enduring architectural
            realities in Ernakulam, Kerala.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="#projects" className="btn-primary">View Our Work</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="#about" className="btn-outline">Our Story</Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ──────────────────────────────────────────────
          3-D CANVAS
          Occupies the bottom ~55% of the hero.
          Its top bleeds into the text block via gradient.
          On scroll it drifts UP faster → "zoom into city" feel.
      ─────────────────────────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute',
          top:      '42%',    /* ← starts BELOW the headline */
          bottom:   '-4%',    /* extend slightly past section bottom for scroll headroom */
          left:     0,
          right:    0,
          zIndex:   2,
          y:        canvasY,
        }}
      >
        {/* Top fade — blends 3-D into the dark text area above */}
        <div
          style={{
            position:   'absolute',
            top:        0, left: 0, right: 0,
            height:     '45%',
            background: 'linear-gradient(to bottom, #131313 0%, rgba(19,19,19,0.6) 40%, transparent 100%)',
            zIndex:     3,
            pointerEvents: 'none',
          }}
        />

        {/* Side vignettes */}
        <div style={{ position: 'absolute', inset: '0 auto 0 0', width: '80px', background: 'linear-gradient(to right, #131313, transparent)', zIndex: 3, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: '0 0 0 auto', width: '80px', background: 'linear-gradient(to left,  #131313, transparent)', zIndex: 3, pointerEvents: 'none' }} />

        {/* Bottom fade */}
        <div
          style={{
            position:   'absolute',
            bottom:     0, left: 0, right: 0,
            height:     '180px',
            background: 'linear-gradient(to top, #131313, transparent)',
            zIndex:     3,
            pointerEvents: 'none',
          }}
        />

        <Scene />
      </motion.div>

      {/* ──────────────────────────────────────────────
          STATS — pinned above the 3-D, below text block
      ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position:       'absolute',
          bottom:         '2.5rem',
          left:           0,
          right:          0,
          zIndex:         11,
          display:        'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display:     'flex',
            maxWidth:    '560px',
            width:       '100%',
            padding:     '1.25rem 2rem',
            background:  'rgba(19,19,19,0.85)',
            backdropFilter: 'blur(16px)',
            borderTop:   '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {[
            { data: s250, suffix: '+',    label: 'Projects'    },
            { data: s8,   suffix: '+',    label: 'Years'       },
            { data: s98,  suffix: '%',    label: 'Satisfaction' },
            { data: s50,  suffix: ' Cr+', label: 'Delivered'   },
          ].map(({ data, suffix, label }, i, arr) => (
            <div
              key={i}
              ref={data.ref}
              style={{
                flex:        1,
                textAlign:   'center',
                padding:     '0 0.5rem',
                borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily:         "'Inter', sans-serif",
                  fontSize:           'clamp(1.1rem, 2vw, 1.6rem)',
                  fontWeight:         900,
                  letterSpacing:      '-0.02em',
                  color:              '#ffffff',
                  lineHeight:         1,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {data.count}{suffix}
              </div>
              <div
                style={{
                  fontFamily:    "'Manrope', sans-serif",
                  fontSize:      '0.58rem',
                  fontWeight:    600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color:         'rgba(200,200,200,0.35)',
                  marginTop:     '0.3rem',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bouncing scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: 'absolute',
          bottom:   '0.75rem',
          right:    '2rem',
          zIndex:   12,
        }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', opacity: 0.3 }}
        >
          <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#fff', writingMode: 'vertical-rl' }}>
            Scroll
          </span>
          <div style={{ width: '1px', height: '28px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
