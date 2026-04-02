'use client';

import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Grid } from '@react-three/drei';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as THREE from 'three';

/* ══════════════════════════════════════════
   ARCHITECTURE 3D SCENE — Skyline
══════════════════════════════════════════ */

const Building = ({
  position,
  size,
  delay = 0,
}: {
  position: [number, number, number];
  size: [number, number, number];
  delay?: number;
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
    const y = startY + (position[1] - startY) * eased + Math.sin(state.clock.elapsedTime * 0.45 + delay) * 0.05;
    mesh.position.y = y;
    edge.position.y = y;
  });

  const geo = useMemo(() => new THREE.BoxGeometry(...size), [size[0], size[1], size[2]]);

  return (
    <group position={[position[0], startY, position[2]]}>
      <mesh ref={meshRef} geometry={geo} castShadow>
        <meshStandardMaterial color="#0e0e0e" metalness={0.8} roughness={0.2} envMapIntensity={2.5} />
      </mesh>
      <lineSegments ref={edgeRef} geometry={new THREE.EdgesGeometry(geo)}>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.25} />
      </lineSegments>
    </group>
  );
};

const GroundGrid = () => (
  <Grid
    position={[0, -1.5, 0]}
    args={[40, 40]}
    cellSize={1}
    cellThickness={0.25}
    cellColor="#1f1f1f"
    sectionSize={5}
    sectionThickness={0.4}
    sectionColor="#2a2a2a"
    fadeDistance={24}
    fadeStrength={1.5}
    infiniteGrid
  />
);

const DustParticles = () => {
  const count = 120;
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
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.012} transparent opacity={0.18} sizeAttenuation />
    </points>
  );
};

const Skyline = () => {
  const buildings = [
    // ── CENTER TOWERS ──
    { pos: [0,    2.8,  0   ] as [number,number,number], size: [1.4, 9.0, 1.4] as [number,number,number], delay: 0.0  },
    { pos: [-1.8, 2.0,  0.2 ] as [number,number,number], size: [1.2, 7.0, 1.2] as [number,number,number], delay: 0.08 },
    { pos: [ 1.8, 2.2,  0.2 ] as [number,number,number], size: [1.2, 7.4, 1.2] as [number,number,number], delay: 0.06 },
    // ── LEFT SPREAD ──
    { pos: [-3.6, 1.2,  0.1 ] as [number,number,number], size: [1.1, 5.4, 1.1] as [number,number,number], delay: 0.14 },
    { pos: [-5.4, 0.5,  0.0 ] as [number,number,number], size: [1.0, 4.0, 1.0] as [number,number,number], delay: 0.22 },
    { pos: [-7.0, 0.0,  0.0 ] as [number,number,number], size: [0.9, 3.0, 0.9] as [number,number,number], delay: 0.30 },
    { pos: [-8.4,-0.4,  0.0 ] as [number,number,number], size: [0.8, 2.2, 0.8] as [number,number,number], delay: 0.38 },
    { pos: [-9.6,-0.6,  0.0 ] as [number,number,number], size: [0.7, 1.8, 0.7] as [number,number,number], delay: 0.44 },
    // ── RIGHT SPREAD ──
    { pos: [ 3.6, 1.4,  0.1 ] as [number,number,number], size: [1.1, 5.8, 1.1] as [number,number,number], delay: 0.12 },
    { pos: [ 5.4, 0.6,  0.0 ] as [number,number,number], size: [1.0, 4.2, 1.0] as [number,number,number], delay: 0.20 },
    { pos: [ 7.0, 0.1,  0.0 ] as [number,number,number], size: [0.9, 3.2, 0.9] as [number,number,number], delay: 0.28 },
    { pos: [ 8.4,-0.3,  0.0 ] as [number,number,number], size: [0.8, 2.4, 0.8] as [number,number,number], delay: 0.36 },
    { pos: [ 9.6,-0.6,  0.0 ] as [number,number,number], size: [0.7, 1.6, 0.7] as [number,number,number], delay: 0.42 },
    // ── BACK ROW ──
    { pos: [-1.0, 0.8, -2.2 ] as [number,number,number], size: [0.9, 4.6, 0.75], delay: 0.16 },
    { pos: [ 1.0, 0.6, -2.2 ] as [number,number,number], size: [0.9, 4.2, 0.75], delay: 0.18 },
    { pos: [-3.0, 0.0, -2.0 ] as [number,number,number], size: [0.8, 3.0, 0.65], delay: 0.26 },
    { pos: [ 3.0, 0.1, -2.0 ] as [number,number,number], size: [0.8, 3.2, 0.65], delay: 0.24 },
    { pos: [-5.0,-0.3, -1.8 ] as [number,number,number], size: [0.7, 2.2, 0.6],  delay: 0.34 },
    { pos: [ 5.0,-0.2, -1.8 ] as [number,number,number], size: [0.7, 2.4, 0.6],  delay: 0.32 },
    // ── FOREGROUND SMALL ──
    { pos: [-2.6,-0.5,  1.8 ] as [number,number,number], size: [0.7, 2.0, 0.7],  delay: 0.48 },
    { pos: [ 2.6,-0.3,  1.8 ] as [number,number,number], size: [0.7, 2.4, 0.7],  delay: 0.46 },
    { pos: [ 0.0,-0.5,  2.2 ] as [number,number,number], size: [0.65,1.8, 0.65], delay: 0.50 },
  ];

  return (
    <>
      {buildings.map((b, i) => (
        <Building key={i} position={b.pos} size={b.size as [number,number,number]} delay={b.delay} />
      ))}
    </>
  );
};

const Scene = () => (
  <Canvas
    camera={{ position: [0, 1.5, 11], fov: 55 }}
    style={{ width: '100%', height: '100%' }}
    gl={{ antialias: true, alpha: true }}
    shadows
  >
    <Suspense fallback={null}>
      <ambientLight intensity={0.35} color="#ffffff" />
      <directionalLight position={[10, 14, 8]}  intensity={2.2} color="#ffffff" castShadow />
      <directionalLight position={[-8, 10, -5]} intensity={0.8} color="#c6c6c6" />
      <pointLight position={[0, 10, 0]} intensity={1.8} color="#ffffff" distance={20} />
      <Environment preset="city" />
      <GroundGrid />
      <Float speed={0.4} rotationIntensity={0.03} floatIntensity={0.12}>
        <Skyline />
      </Float>
      <DustParticles />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.4}
        target={[0, 1, 0]}
      />
    </Suspense>
  </Canvas>
);

/* ══════════════════════════════════════════
   HERO — Stitch design: Architectural Monolith
   Text on top, 3D fills the void below
══════════════════════════════════════════ */
const Hero: React.FC = () => {
  return (
    <section
      id="home"
      style={{
        position:   'relative',
        height:     '100vh',
        minHeight:  '640px',
        overflow:   'hidden',
        background: '#131313',
      }}
    >
      {/* Subtle dot grid — structural texture */}
      <div className="pattern-dots" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

      {/* ── 3D CANVAS — fills the entire hero ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {/* Gradient fades — bleed the 3D into the void */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '60%', background: 'linear-gradient(to bottom, #131313 0%, rgba(19,19,19,0.75) 40%, transparent 100%)', zIndex: 3, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: '0 auto 0 0', width: '100px', background: 'linear-gradient(to right, #131313, transparent)', zIndex: 3, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: '0 0 0 auto', width: '100px', background: 'linear-gradient(to left, #131313, transparent)', zIndex: 3, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px', background: 'linear-gradient(to top, #131313, transparent)', zIndex: 3, pointerEvents: 'none' }} />
        <Scene />
      </div>

      {/* ── TEXT — sits above the 3D canvas ── */}
      <div
        className="container-max"
        style={{
          position:       'relative',
          zIndex:         2,
          paddingTop:     '140px',
          textAlign:      'center',
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
        }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label" style={{ justifyContent: 'center' }}>
            Since 2018 · Architectural Integrity
          </span>
        </motion.div>

        {/* Headline — wide tracking, authoritative */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily:    "'Inter', sans-serif",
            fontSize:      'clamp(2.6rem, 7vw, 6.5rem)',
            fontWeight:    900,
            lineHeight:    1.0,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color:         '#e2e2e2',
            maxWidth:      '980px',
            marginBottom:  '1.25rem',
          }}
        >
          Redefining{' '}
          <span className="gradient-text">Architectural</span>
          <br />
          <span style={{ fontWeight: 300, letterSpacing: '0.08em', color: 'rgba(226,226,226,0.25)' }}>
            Integrity
          </span>
        </motion.h1>

        {/* Sub-headline — Manrope body */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          style={{
            fontFamily:   "'Manrope', sans-serif",
            fontSize:     '1rem',
            color:        'rgba(198,198,198,0.45)',
            maxWidth:     '500px',
            lineHeight:   '1.8',
            marginBottom: '2.25rem',
          }}
        >
          MASS Developers operates at the intersection of structural brutalism
          and modern luxury — transforming visions into enduring architectural
          realities in Ernakulam, Kerala.
        </motion.p>

        {/* CTAs — square buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.46 }}
          style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}
        >
          <Link href="#projects" className="btn-primary">View Our Work</Link>
          <Link href="#about"    className="btn-outline">Our Story</Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.62 }}
          style={{
            display:       'flex',
            justifyContent: 'center',
            width:         '100%',
            maxWidth:      '560px',
            borderTop:     '1px solid rgba(255,255,255,0.06)',
            paddingTop:    '1.75rem',
          }}
        >
          {[
            { value: '250+',  label: 'Projects'     },
            { value: '8+',    label: 'Years'         },
            { value: '98%',   label: 'Satisfaction'  },
            { value: '50 Cr+',label: 'Delivered'     },
          ].map((s, i, arr) => (
            <div
              key={i}
              style={{
                flex:        1,
                textAlign:   'center',
                padding:     '0 0.75rem',
                borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <div style={{
                fontFamily:    "'Inter', sans-serif",
                fontSize:      'clamp(1.2rem, 2.2vw, 1.7rem)',
                fontWeight:    900,
                letterSpacing: '-0.02em',
                color:         '#ffffff',
                lineHeight:    1,
              }}>
                {s.value}
              </div>
              <div style={{
                fontFamily:    "'Manrope', sans-serif",
                fontSize:      '0.6rem',
                fontWeight:    600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color:         'rgba(198,198,198,0.3)',
                marginTop:     '0.3rem',
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
