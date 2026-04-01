'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';

const Hero3D = () => {
  return (
    <Canvas className="h-[500px] w-full">
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 1, 1]} />
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#666666"
            attach="material"
            distort={0.4}
            speed={2}
          />
        </Sphere>
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center justify-center pt-20">
      <div className="flex-1 z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-500 font-medium mb-4 tracking-widest uppercase text-sm"
        >
          25 Years of Excellence
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold leading-tight mb-6"
        >
          Building Better <br />
          <span className="text-gray-500">Together</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md text-lg text-gray-400 mb-8"
        >
          The Tale of MASS Developers. We transform visions into architectural realities with honesty, quality, and a passion for construction.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-foreground text-background font-bold tracking-tight hover:opacity-90 transition-opacity"
        >
          Explore Projects
        </motion.button>
      </div>

      <div className="flex-1 w-full h-[500px] md:h-auto">
        <Hero3D />
      </div>
    </section>
  );
};

export default Hero;
