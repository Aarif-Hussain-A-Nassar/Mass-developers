'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-gray-900 border border-border overflow-hidden rounded-sm relative group">
             {/* Static fallback for 3D or high quality image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-800 opacity-20 select-none">
              MASS.DEV
            </div>
            <div className="absolute bottom-8 left-8 text-white z-10">
              <h3 className="text-3xl font-bold mb-2">The Tale of MASS Developers</h3>
              <p className="text-sm text-gray-400">Founded 2018 | Built on Trust</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-accent/20 z-[-1] animate-pulse"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Us</h2>
          <div className="space-y-6 text-lg text-gray-500">
            <p>
              In our neighborhood, four buddies had a passion for construction. Each worked in different companies in the construction biz. But we saw a problem: most construction firms lacked honesty and quality. So, we thought, why not start our own? That&apos;s how MASS Developers came to be in 2018.
            </p>
            <p>
              We started small, with big dreams. Our goal was simple: provide top-notch work at fair prices. It wasn&apos;t easy at first. We faced challenges, but we never gave up. Slowly, people started noticing our work. They liked that we cared about quality and honesty.
            </p>
            <p>
              As time went on, MASS Developers grew. We took on all kinds of projects, from homes to offices. With each job, we brought our best ideas and skills. Today, we&apos;re known as the most trusted builders around.
            </p>
            <p className="italic font-medium text-foreground/80">
              Looking back, we&apos;re proud of how far we&apos;ve come. What started as a dream among friends is now a successful company. And our mission remains the same: keep building dreams, one project at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
