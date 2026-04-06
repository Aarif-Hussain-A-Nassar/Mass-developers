'use client';

import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping:    40,
    restDelta:  0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position:        'fixed',
        top:             0,
        left:            0,
        right:           0,
        height:          '2px',
        background:      '#ffffff',
        transformOrigin: 'left',
        scaleX,
        zIndex:          999,
      }}
    />
  );
}
