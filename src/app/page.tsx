'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Decorative background elements */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <About />
        <Services />
        
        {/* Placeholder for Projects & Blogs */}
        <section id="projects" className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Projects</h2>
            <p className="text-gray-500 mb-12">Showcasing our precision and excellence.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-video bg-gray-900 border border-border flex items-center justify-center filter grayscale hover:grayscale-0 transition-all cursor-pointer">
                 <span className="text-gray-600 font-bold tracking-widest uppercase">Featured Project 01</span>
              </div>
              <div className="aspect-video bg-gray-900 border border-border flex items-center justify-center filter grayscale hover:grayscale-0 transition-all cursor-pointer">
                 <span className="text-gray-600 font-bold tracking-widest uppercase">Featured Project 02</span>
              </div>
            </div>
          </div>
        </section>

        <section id="blogs" className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
                <p className="text-gray-500">Trends and tips from the construction world.</p>
              </div>
              <button className="text-sm font-bold border-b border-foreground pb-1 hover:opacity-60 transition-opacity">
                View All Posts
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[16/10] bg-gray-900 border border-border mb-6 overflow-hidden">
                    <div className="w-full h-full bg-accent/5 group-hover:scale-105 transition-transform duration-700"></div>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Construction • Mar 2026</p>
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">Innovating Modern Interior Designs in 2026</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </motion.div>
    </main>
  );
}
