'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Key, HardHat, Paintbrush, Layers } from 'lucide-react';

const services = [
  {
    title:       'Residential Building',
    icon:        Home,
    description: 'We specialize in constructing high-quality residential buildings — single-family homes, apartment complexes, and gated communities — that are structurally sound and aesthetically pleasing.',
    tag:         'Popular',
  },
  {
    title:       'Commercial Building',
    icon:        Building2,
    description: 'Our expertise covers office complexes, retail outlets and industrial facilities. We deliver spaces that meet business objectives and adhere to strict safety standards.',
    tag:         null,
  },
  {
    title:       'Turnkey Solutions',
    icon:        Key,
    description: 'Full-service construction from concept to handover. We manage every detail — design, procurement, construction — delivering a seamless, hassle-free experience.',
    tag:         null,
  },
  {
    title:       'Renovation & Restoration',
    icon:        HardHat,
    description: 'From revitalizing existing spaces to restoring historic structures, our team transforms outdated buildings into modern, functional, and visually appealing spaces.',
    tag:         null,
  },
  {
    title:       'Interior Design & Fit-out',
    icon:        Paintbrush,
    description: 'Comprehensive interior design services — from space planning to finishing touches — that align with your vision and elevate how you live or work.',
    tag:         'Featured',
  },
  {
    title:       'Project Management',
    icon:        Layers,
    description: 'End-to-end project management ensuring timelines, budgets, and quality standards are met with full transparency and regular client updates throughout.',
    tag:         null,
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      style={{
        paddingTop:    '128px',
        paddingBottom: '128px',
        background:    'var(--background)',   /* #131313 — alternates from section-bg-alt */
      }}
    >
      <div className="container-max">

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '5rem' }} className="services-header">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <span className="section-label">What We Do</span>
            <h2 style={{
              fontFamily:    "'Inter', sans-serif",
              fontSize:      'clamp(2rem, 5vw, 3.5rem)',
              fontWeight:    900,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom:  '1.5rem',
              maxWidth:      '640px',
              color:         '#e2e2e2',
            }}>
              Services Built for{' '}
              <span className="gradient-text">Excellence</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              color:      'var(--muted)',
              maxWidth:   '500px',
              lineHeight: '1.75',
              fontSize:   '1rem',
            }}
          >
            At Mass Developers, we deliver spaces that are not just structurally
            sound, but beautiful and functional.
          </motion.p>
        </div>

        {/* Services Grid — tonal cards, no borders, SQUARE */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px' }}
          className="services-grid"
        >
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="service-card"
                style={{
                  position:     'relative',
                  padding:      '2.5rem',
                  background:   'var(--card-bg)',       /* tonal — no border */
                  borderRadius: 0,                      /* SQUARE */
                  transition:   'background 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor:       'default',
                  overflow:     'hidden',
                }}
              >
                {/* Tag — square badge */}
                {service.tag && (
                  <div style={{
                    position:      'absolute',
                    top:           '1.25rem',
                    right:         '1.25rem',
                    background:    '#ffffff',
                    color:         '#131313',
                    fontFamily:    "'Inter', sans-serif",
                    fontSize:      '0.62rem',
                    fontWeight:    800,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    padding:       '0.3rem 0.75rem',
                    borderRadius:  0,   /* SQUARE */
                  }}>
                    {service.tag}
                  </div>
                )}

                {/* Icon — square, white bg */}
                <div style={{
                  width:         '50px',
                  height:        '50px',
                  background:    '#ffffff',
                  color:         '#131313',
                  borderRadius:  0,   /* SQUARE */
                  display:       'flex',
                  alignItems:    'center',
                  justifyContent: 'center',
                  marginBottom:   '1.75rem',
                  transition:    'transform 0.3s ease',
                }}>
                  <IconComp size={22} strokeWidth={2.5} />
                </div>

                <h3 style={{
                  fontFamily:    "'Inter', sans-serif",
                  fontSize:      '1rem',
                  fontWeight:    800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom:  '0.875rem',
                  color:         '#e2e2e2',
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize:   '0.9rem',
                  lineHeight: '1.75',
                  color:      'var(--muted)',
                }}>
                  {service.description}
                </p>

                {/* Hover accent line — bottom */}
                <div
                  style={{
                    position:        'absolute',
                    bottom:          0,
                    left:            0,
                    right:           0,
                    height:          '2px',
                    background:      '#ffffff',
                    transform:       'scaleX(0)',
                    transition:      'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    transformOrigin: 'left',
                  }}
                  className="card-accent-line"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 640px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .services-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .services-header {
            flex-direction:  row !important;
            justify-content: space-between;
            align-items:     flex-end;
          }
        }
        .service-card:hover {
          background: var(--card-hover) !important;
        }
        .service-card:hover .card-accent-line {
          transform: scaleX(1) !important;
        }
        .service-card:hover > div:nth-child(3) {
          transform: scale(1.05) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;
