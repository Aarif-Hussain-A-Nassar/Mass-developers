'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Key, HardHat, Paintbrush, Layers } from 'lucide-react';

const services = [
  {
    title: 'Residential Building',
    icon: Home,
    description: 'We specialize in constructing high-quality residential buildings — single-family homes, apartment complexes, and gated communities — that are structurally sound and aesthetically pleasing.',
    tag: 'Popular',
  },
  {
    title: 'Commercial Building',
    icon: Building2,
    description: 'Our expertise covers office complexes, retail outlets and industrial facilities. We deliver spaces that meet business objectives and adhere to strict safety standards.',
    tag: null,
  },
  {
    title: 'Turnkey Solutions',
    icon: Key,
    description: 'Full-service construction from concept to handover. We manage every detail — design, procurement, construction — delivering a seamless, hassle-free experience.',
    tag: null,
  },
  {
    title: 'Renovation & Restoration',
    icon: HardHat,
    description: 'From revitalizing existing spaces to restoring historic structures, our team transforms outdated buildings into modern, functional, and visually appealing spaces.',
    tag: null,
  },
  {
    title: 'Interior Design & Fit-out',
    icon: Paintbrush,
    description: 'Comprehensive interior design services — from space planning to finishing touches — that align with your vision and elevate how you live or work.',
    tag: 'Featured',
  },
  {
    title: 'Project Management',
    icon: Layers,
    description: 'End-to-end project management ensuring timelines, budgets, and quality standards are met with full transparency and regular client updates throughout.',
    tag: null,
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'var(--background)',
      }}
    >
      <div className="container-max">
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '5rem' }} className="services-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">What We Do</span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                marginBottom: '1.25rem',
                maxWidth: '600px',
              }}
            >
              Services Built for{' '}
              <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Excellence</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ color: 'var(--muted)', maxWidth: '520px', lineHeight: '1.75', fontSize: '1.05rem' }}
          >
            At Mass Developers, we deliver spaces that are not just structurally sound, but beautiful and functional.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.25rem',
          }}
          className="services-grid"
        >
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className="service-card"
                style={{
                  position: 'relative',
                  padding: '2.25rem',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '20px',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default',
                  overflow: 'hidden',
                }}
                whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
              >
                {/* Tag */}
                {service.tag && (
                  <div style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    background: '#f4f4f4',
                    color: '#050505',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '100px',
                  }}>
                    {service.tag}
                  </div>
                )}

                {/* Icon */}
                <div style={{
                  width: '52px',
                  height: '52px',
                  background: 'var(--foreground)',
                  color: 'var(--background)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  transition: 'transform 0.3s ease',
                }}>
                  <IconComp size={24} />
                </div>

                <h3 style={{
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  letterSpacing: '0.02em',
                  marginBottom: '0.875rem',
                  color: 'var(--foreground)',
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: '1.7',
                  color: 'var(--muted)',
                }}>
                  {service.description}
                </p>

                {/* Hover accent bottom line */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'var(--accent)',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.3s ease',
                  transformOrigin: 'left',
                  borderRadius: '0 0 20px 20px',
                }} className="card-accent-line" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .services-header {
            flex-direction: row !important;
            justify-content: space-between;
            align-items: flex-end;
          }
        }
        .service-card:hover .card-accent-line {
          transform: scaleX(1) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;
