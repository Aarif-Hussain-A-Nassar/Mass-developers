'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'The Skyline Residence',
    category: 'Residential',
    location: 'Kakkanad, Ernakulam',
    year: '2024',
  },
  {
    title: 'Nexus Commercial Tower',
    category: 'Commercial',
    location: 'Edapally, Ernakulam',
    year: '2023',
  },
  {
    title: 'Vennala Premium Interiors',
    category: 'Interior Design',
    location: 'Vennala, Ernakulam',
    year: '2024',
  },
  {
    title: 'GreenHaven Villa Complex',
    category: 'Residential',
    location: 'Aluva, Ernakulam',
    year: '2022',
  },
];

const blogPosts = [
  {
    category: 'Interior Design',
    date: 'Mar 2026',
    title: 'Innovating Modern Interior Designs in 2026',
    read: '5 min read',
  },
  {
    category: 'Construction',
    date: 'Feb 2026',
    title: 'Why Turnkey Solutions Save Time and Budget',
    read: '4 min read',
  },
  {
    category: 'Trends',
    date: 'Jan 2026',
    title: 'Top Construction Trends Shaping Kerala in 2026',
    read: '6 min read',
  },
];

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', background: 'var(--background)' }}>
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
        <About />
        <Services />

        {/* ── PROJECTS ── */}
        <section
          id="projects"
          style={{
            paddingTop: '120px',
            paddingBottom: '120px',
            background: 'var(--section-bg-alt)',
          }}
        >
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ marginBottom: '4rem' }}
            >
              <span className="section-label">Our Portfolio</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="projects-header">
                <h2
                  className="font-display"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800 }}
                >
                  Featured{' '}
                  <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Projects</span>
                </h2>
                <p style={{ color: 'var(--muted)', maxWidth: '500px', lineHeight: '1.75' }}>
                  Showcasing our precision, craftsmanship, and commitment to excellence across residential and commercial projects.
                </p>
              </div>
            </motion.div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.25rem',
              }}
              className="projects-grid"
            >
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    position: 'relative',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
                >
                  <div
                    style={{
                      aspectRatio: '16/9',
                      background: `linear-gradient(135deg, hsl(${30 + i * 20}, 5%, ${12 + i * 3}%) 0%, hsl(${30 + i * 20}, 8%, ${18 + i * 3}%) 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.15, color: '#fff' }}>
                      Project 0{i + 1}
                    </span>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.625rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                        {project.category}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{project.year}</span>
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.375rem' }}>{project.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button className="btn-outline">View All Projects</button>
            </div>
          </div>
        </section>

        {/* ── BLOGS ── */}
        <section
          id="blogs"
          style={{
            paddingTop: '120px',
            paddingBottom: '120px',
            background: 'var(--background)',
          }}
        >
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '4rem',
              }}
              className="blogs-header"
            >
              <div>
                <span className="section-label">Insights</span>
                <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800 }}>
                  Latest{' '}
                  <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Articles</span>
                </h2>
              </div>
              <p style={{ color: 'var(--muted)', maxWidth: '440px', lineHeight: '1.75' }}>
                Trends, tips, and expert insights from the world of construction and interior design.
              </p>
            </motion.div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.5rem',
              }}
              className="blogs-grid"
            >
              {blogPosts.map((post, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}
                >
                  <div
                    style={{
                      aspectRatio: '16/9',
                      background: `linear-gradient(135deg, hsl(${200 + i * 30}, 10%, ${10 + i * 5}%) 0%, hsl(${200 + i * 30}, 15%, ${18 + i * 4}%) 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.12, color: '#fff' }}>
                      Blog 0{i + 1}
                    </span>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.875rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>· {post.date}</span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>· {post.read}</span>
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, lineHeight: '1.4' }}>{post.title}</h3>
                  </div>
                </motion.article>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button className="btn-outline">View All Posts</button>
            </div>
          </div>
        </section>

        <Footer />
      </motion.div>

      <style jsx>{`
        @media (min-width: 640px) {
          .projects-grid, .blogs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .blogs-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .projects-header, .blogs-header {
            flex-direction: row !important;
            justify-content: space-between;
            align-items: flex-end;
          }
        }
      `}</style>
    </main>
  );
}
