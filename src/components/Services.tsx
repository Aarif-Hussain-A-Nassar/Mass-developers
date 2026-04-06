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

/* Shared ease */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function cardAnim(i: number) {
  return {
    initial:    { opacity: 0, y: 48, scale: 0.96 },
    whileInView:{ opacity: 1, y: 0,  scale: 1    },
    viewport:   { once: true, margin: '-50px' as const },
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  } as const;
}

const Services: React.FC = () => {
  return (
    <section
      id="services"
      style={{
        paddingTop:    '128px',
        paddingBottom: '128px',
        background:    'var(--background)',
      }}
    >
      <div className="container-max">

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '5rem' }} className="services-header">
          <div>
            {/* Animated section label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem' }}
            >
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'block', width: '2rem', height: '1px', background: 'rgba(198,198,198,0.5)', transformOrigin: 'left' }}
              />
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}
              >
                What We Do
              </motion.span>
            </motion.div>

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
              {['Services', 'Built for'].map((chunk, ci) => (
                <span key={ci}>
                  {chunk.split(' ').map((word, wi) => (
                    <span key={wi} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', marginRight: '0.28em' }}>
                      <motion.span
                        style={{ display: 'inline-block' }}
                        initial={{ y: '110%', opacity: 0 }}
                        whileInView={{ y: '0%', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: ci * 0.15 + wi * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                  {' '}
                </span>
              ))}
              <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
                <motion.span
                  className="gradient-text"
                  style={{ display: 'inline-block' }}
                  initial={{ y: '110%', opacity: 0 }}
                  whileInView={{ y: '0%', opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  Excellence
                </motion.span>
              </span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              color:      'var(--muted)',
              maxWidth:   '500px',
              lineHeight: '1.75',
              fontSize:   '1rem',
            }}
          >
            At Mass Developers, we deliver spaces that are not just structurally sound,
            but beautiful and functional.
          </motion.p>
        </div>

        {/* Services Grid — staggered entrance */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px' }}
          className="services-grid"
        >
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={index}
                {...cardAnim(index)}
                className="service-card"
                style={{
                  position:     'relative',
                  padding:      '2.5rem',
                  background:   'var(--card-bg)',
                  borderRadius: 0,
                  cursor:       'default',
                  overflow:     'hidden',
                }}
              >
                {/* Tag */}
                {service.tag && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    style={{
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
                      borderRadius:  0,
                    }}
                  >
                    {service.tag}
                  </motion.div>
                )}

                {/* Icon — pops on hover */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  style={{
                    width:          '50px',
                    height:         '50px',
                    background:     '#ffffff',
                    color:          '#131313',
                    borderRadius:   0,
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    marginBottom:   '1.75rem',
                  }}
                >
                  <IconComp size={22} strokeWidth={2.5} />
                </motion.div>

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

                {/* Hover accent line */}
                <div
                  style={{
                    position:        'absolute',
                    bottom:          0, left: 0, right: 0,
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
        .service-card:hover .card-accent-line { transform: scaleX(1) !important; }
      `}</style>
    </section>
  );
};

export default Services;
