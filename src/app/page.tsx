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
    title:    'The Skyline Residence',
    category: 'Residential',
    location: 'Kakkanad, Ernakulam',
    year:     '2024',
    index:    0,
  },
  {
    title:    'Nexus Commercial Tower',
    category: 'Commercial',
    location: 'Edapally, Ernakulam',
    year:     '2023',
    index:    1,
  },
  {
    title:    'Vennala Premium Interiors',
    category: 'Interior Design',
    location: 'Vennala, Ernakulam',
    year:     '2024',
    index:    2,
  },
  {
    title:    'GreenHaven Villa Complex',
    category: 'Residential',
    location: 'Aluva, Ernakulam',
    year:     '2022',
    index:    3,
  },
];

const blogPosts = [
  {
    category: 'Interior Design',
    date:     'Mar 2026',
    title:    'Innovating Modern Interior Designs in 2026',
    read:     '5 min read',
  },
  {
    category: 'Construction',
    date:     'Feb 2026',
    title:    'Why Turnkey Solutions Save Time and Budget',
    read:     '4 min read',
  },
  {
    category: 'Trends',
    date:     'Jan 2026',
    title:    'Top Construction Trends Shaping Kerala in 2026',
    read:     '6 min read',
  },
];

const testimonials = [
  {
    quote:    "MASS doesn't just build structures; they sculpt silence and light. Our headquarters is now a physical manifestation of our brand's future.",
    name:     'Julian Vance',
    title:    'CEO, Aether Global',
    initials: 'JV',
  },
  {
    quote:    "From the very first site visit to the final handover, Mass Developers set a new standard for what a construction partner should be. Exceptional.",
    name:     'Priya Menon',
    title:    'Director, Vennala Estates',
    initials: 'PM',
  },
  {
    quote:    "They stripped away the unnecessary and left only what mattered — a space that breathes, performs, and impresses every single day.",
    name:     'Rajan Kurian',
    title:    'Managing Partner, Nexus Group',
    initials: 'RK',
  },
];

/* ── Tonal gradient for project image placeholders ── */
const projectGradients = [
  'linear-gradient(135deg, #1b1b1b 0%, #2a2a2a 100%)',
  'linear-gradient(135deg, #1f1f1f 0%, #393939 100%)',
  'linear-gradient(135deg, #141414 0%, #1f1f1f 100%)',
  'linear-gradient(135deg, #1b1b1b 0%, #353535 100%)',
];

const blogGradients = [
  'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)',
  'linear-gradient(135deg, #141414 0%, #1b1b1b 100%)',
  'linear-gradient(135deg, #1b1b1b 0%, #393939 100%)',
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

        {/* ══════════════════════════════════
            PROJECTS SECTION
        ══════════════════════════════════ */}
        <section
          id="projects"
          style={{
            paddingTop:    '128px',
            paddingBottom: '128px',
            background:    'var(--section-bg-alt)',  /* #0e0e0e */
          }}
        >
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{ marginBottom: '5rem' }}
            >
              <span className="section-label">Our Portfolio</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="projects-header">
                <h2 style={{
                  fontFamily:    "'Inter', sans-serif",
                  fontSize:      'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight:    900,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color:         '#e2e2e2',
                }}>
                  Featured{' '}
                  <span className="gradient-text">Projects</span>
                </h2>
                <p style={{
                  fontFamily: "'Manrope', sans-serif",
                  color:      'var(--muted)',
                  maxWidth:   '500px',
                  lineHeight: '1.75',
                }}>
                  Showcasing our precision, craftsmanship, and commitment to
                  excellence across residential and commercial projects.
                </p>
              </div>
            </motion.div>

            {/* Project cards — square, tonal, 1px gap grid */}
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px' }}
              className="projects-grid"
            >
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  style={{
                    position:     'relative',
                    background:   'var(--card-bg)',
                    borderRadius: 0,      /* SQUARE */
                    overflow:     'hidden',
                    cursor:       'pointer',
                    transition:   'background 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="project-card"
                >
                  {/* Image area — full-bleed tonal gradient */}
                  <div style={{
                    aspectRatio: '16/8',
                    background:  projectGradients[i % projectGradients.length],
                    display:     'flex',
                    alignItems:  'center',
                    justifyContent: 'center',
                    position:    'relative',
                    overflow:    'hidden',
                  }}>
                    <span style={{
                      fontFamily:    "'Inter', sans-serif",
                      fontSize:      '0.65rem',
                      fontWeight:    900,
                      letterSpacing: '0.28em',
                      textTransform: 'uppercase',
                      opacity:       0.08,
                      color:         '#fff',
                    }}>
                      Project 0{i + 1}
                    </span>
                    {/* Category pill top-left */}
                    <div style={{
                      position:      'absolute',
                      top:           '1.25rem',
                      left:          '1.25rem',
                      background:    'rgba(255,255,255,0.08)',
                      border:        '1px solid rgba(255,255,255,0.1)',
                      borderRadius:  0,
                      padding:       '0.3rem 0.75rem',
                      fontFamily:    "'Inter', sans-serif",
                      fontSize:      '0.62rem',
                      fontWeight:    700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color:         'rgba(226,226,226,0.7)',
                    }}>
                      {project.category}
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ padding: '1.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <h3 style={{
                        fontFamily:    "'Inter', sans-serif",
                        fontSize:      '1.05rem',
                        fontWeight:    800,
                        letterSpacing: '0.03em',
                        color:         '#e2e2e2',
                      }}>
                        {project.title}
                      </h3>
                      <span style={{
                        fontFamily:    "'Manrope', sans-serif",
                        fontSize:      '0.75rem',
                        color:         'var(--muted)',
                        fontWeight:    600,
                      }}>
                        {project.year}
                      </span>
                    </div>
                    <p style={{
                      fontFamily:    "'Manrope', sans-serif",
                      fontSize:      '0.8rem',
                      color:         'var(--muted)',
                      letterSpacing: '0.04em',
                    }}>
                      {project.location}
                    </p>
                  </div>

                  {/* Hover bottom line */}
                  <div style={{
                    position:        'absolute',
                    bottom:          0, left: 0, right: 0,
                    height:          '2px',
                    background:      '#ffffff',
                    transform:       'scaleX(0)',
                    transformOrigin: 'left',
                    transition:      'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  }} className="project-accent-line" />
                </motion.div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <button className="btn-outline">View All Projects</button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            TESTIMONIALS SECTION (from Stitch)
        ══════════════════════════════════ */}
        <section
          id="testimonials"
          style={{
            paddingTop:    '128px',
            paddingBottom: '128px',
            background:    'var(--background)',   /* #131313 */
          }}
        >
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '5rem' }}
            >
              <span className="section-label" style={{ justifyContent: 'center' }}>
                Client Voices
              </span>
              <h2 style={{
                fontFamily:    "'Inter', sans-serif",
                fontSize:      'clamp(2rem, 5vw, 3.5rem)',
                fontWeight:    900,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color:         '#e2e2e2',
                marginBottom:  '1rem',
              }}>
                What They{' '}
                <span className="gradient-text">Say</span>
              </h2>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                color:      'var(--muted)',
                maxWidth:   '440px',
                margin:     '0 auto',
                lineHeight: '1.75',
              }}>
                Words from those who trusted us to construct their vision.
              </p>
            </motion.div>

            {/* Testimonial cards — square, tonal */}
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px' }}
              className="testimonials-grid"
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  style={{
                    padding:      '2.5rem',
                    background:   'var(--card-bg)',
                    borderRadius: 0,     /* SQUARE */
                    position:     'relative',
                    transition:   'background 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="testimonial-card"
                >
                  {/* Opening quote mark */}
                  <div style={{
                    fontFamily:    "'Inter', sans-serif",
                    fontSize:      '4rem',
                    fontWeight:    900,
                    lineHeight:    0.8,
                    color:         'rgba(255,255,255,0.06)',
                    marginBottom:  '1.25rem',
                    letterSpacing: '-0.04em',
                  }}>
                    &ldquo;
                  </div>

                  <p style={{
                    fontFamily:   "'Manrope', sans-serif",
                    fontSize:     '1rem',
                    lineHeight:   '1.8',
                    color:        'rgba(226,226,226,0.75)',
                    fontStyle:    'italic',
                    marginBottom: '2rem',
                  }}>
                    {t.quote}
                  </p>

                  {/* Author */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {/* Avatar — square monogram */}
                    <div style={{
                      width:          '44px',
                      height:         '44px',
                      background:     '#ffffff',
                      color:          '#131313',
                      borderRadius:   0,   /* SQUARE */
                      display:        'flex',
                      alignItems:     'center',
                      justifyContent: 'center',
                      fontFamily:     "'Inter', sans-serif",
                      fontSize:       '0.72rem',
                      fontWeight:     900,
                      letterSpacing:  '0.04em',
                      flexShrink:     0,
                    }}>
                      {t.initials}
                    </div>
                    <div>
                      <div style={{
                        fontFamily:    "'Inter', sans-serif",
                        fontSize:      '0.88rem',
                        fontWeight:    800,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color:         '#e2e2e2',
                      }}>
                        {t.name}
                      </div>
                      <div style={{
                        fontFamily:    "'Manrope', sans-serif",
                        fontSize:      '0.75rem',
                        color:         'var(--muted)',
                        marginTop:     '0.2rem',
                        letterSpacing: '0.04em',
                      }}>
                        {t.title}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Commission CTA — from Stitch design */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{
                marginTop:    '5rem',
                padding:      '4rem',
                background:   'var(--card-bg)',
                borderRadius: 0,      /* SQUARE */
                textAlign:    'center',
                position:     'relative',
                overflow:     'hidden',
              }}
            >
              {/* Ghost large text watermark */}
              <div style={{
                position:      'absolute',
                top:           '50%',
                left:          '50%',
                transform:     'translate(-50%, -50%)',
                fontFamily:    "'Inter', sans-serif",
                fontSize:      '10rem',
                fontWeight:    900,
                letterSpacing: '0.1em',
                color:         'rgba(255,255,255,0.02)',
                whiteSpace:    'nowrap',
                pointerEvents: 'none',
                userSelect:    'none',
              }}>
                MASS
              </div>

              <span className="section-label" style={{ justifyContent: 'center' }}>
                New Commissions Open
              </span>
              <h3 style={{
                fontFamily:    "'Inter', sans-serif",
                fontSize:      'clamp(1.5rem, 3.5vw, 2.8rem)',
                fontWeight:    900,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color:         '#e2e2e2',
                marginBottom:  '1.25rem',
                maxWidth:      '680px',
                margin:        '0 auto 1.25rem',
              }}>
                Creating Enduring Architectural Statements
              </h3>
              <p style={{
                fontFamily:   "'Manrope', sans-serif",
                fontSize:     '1rem',
                lineHeight:   '1.75',
                color:        'var(--muted)',
                maxWidth:     '480px',
                margin:       '0 auto 2.5rem',
              }}>
                We are currently accepting new commissions. Tell us about your
                vision and let&apos;s design something that transcends time.
              </p>
              <a href="#contact" className="btn-primary">
                Start Your Project
              </a>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════
            BLOGS SECTION
        ══════════════════════════════════ */}
        <section
          id="blogs"
          style={{
            paddingTop:    '128px',
            paddingBottom: '128px',
            background:    'var(--section-bg-alt)',  /* #0e0e0e */
          }}
        >
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{
                display:       'flex',
                flexDirection: 'column',
                gap:           '1rem',
                marginBottom:  '5rem',
              }}
              className="blogs-header"
            >
              <div>
                <span className="section-label">Insights</span>
                <h2 style={{
                  fontFamily:    "'Inter', sans-serif",
                  fontSize:      'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight:    900,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color:         '#e2e2e2',
                }}>
                  Latest{' '}
                  <span className="gradient-text">Articles</span>
                </h2>
              </div>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                color:      'var(--muted)',
                maxWidth:   '440px',
                lineHeight: '1.75',
              }}>
                Trends, tips, and expert insights from the world of construction
                and interior design.
              </p>
            </motion.div>

            {/* Blog cards — square, tonal */}
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px' }}
              className="blogs-grid"
            >
              {blogPosts.map((post, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  style={{
                    background:   'var(--card-bg)',
                    borderRadius: 0,   /* SQUARE */
                    overflow:     'hidden',
                    cursor:       'pointer',
                    transition:   'background 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position:     'relative',
                  }}
                  className="blog-card"
                >
                  {/* Image area */}
                  <div style={{
                    aspectRatio:    '16/9',
                    background:     blogGradients[i % blogGradients.length],
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{
                      fontFamily:    "'Inter', sans-serif",
                      fontSize:      '0.65rem',
                      fontWeight:    900,
                      letterSpacing: '0.28em',
                      textTransform: 'uppercase',
                      opacity:       0.06,
                      color:         '#fff',
                    }}>
                      Blog 0{i + 1}
                    </span>
                  </div>

                  <div style={{ padding: '1.75rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'center' }}>
                      <span style={{
                        fontFamily:    "'Inter', sans-serif",
                        fontSize:      '0.65rem',
                        fontWeight:    800,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color:         'rgba(226,226,226,0.55)',
                      }}>
                        {post.category}
                      </span>
                      <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.68rem', color: 'var(--muted)' }}>
                        · {post.date}
                      </span>
                      <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.68rem', color: 'var(--muted)' }}>
                        · {post.read}
                      </span>
                    </div>
                    <h3 style={{
                      fontFamily:    "'Inter', sans-serif",
                      fontSize:      '1rem',
                      fontWeight:    800,
                      letterSpacing: '0.02em',
                      lineHeight:    '1.4',
                      color:         '#e2e2e2',
                    }}>
                      {post.title}
                    </h3>
                  </div>

                  {/* Hover line */}
                  <div style={{
                    position:        'absolute',
                    bottom:          0, left: 0, right: 0,
                    height:          '2px',
                    background:      '#ffffff',
                    transform:       'scaleX(0)',
                    transformOrigin: 'left',
                    transition:      'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  }} className="blog-accent-line" />
                </motion.article>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <button className="btn-outline">View All Posts</button>
            </div>
          </div>
        </section>

        <Footer />
      </motion.div>

      <style jsx>{`
        @media (min-width: 640px) {
          .projects-grid,
          .blogs-grid,
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .blogs-grid    { grid-template-columns: repeat(3, 1fr) !important; }
          .testimonials-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .projects-header, .blogs-header {
            flex-direction:  row !important;
            justify-content: space-between;
            align-items:     flex-end;
          }
        }
        .project-card:hover  { background: var(--card-hover) !important; }
        .testimonial-card:hover { background: var(--card-hover) !important; }
        .blog-card:hover     { background: var(--card-hover) !important; }
        .project-card:hover  .project-accent-line { transform: scaleX(1) !important; }
        .blog-card:hover     .blog-accent-line     { transform: scaleX(1) !important; }
      `}</style>
    </main>
  );
}
