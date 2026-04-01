'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
import Image from 'next/image';

const Footer: React.FC = () => {


  return (
    <footer
      id="contact"
      style={{
        background: 'var(--foreground)',
        color: 'var(--background)',
        paddingTop: '80px',
      }}
    >
      {/* Main Footer Grid */}
      <div className="container-max">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', position: 'relative', borderRadius: '10px', overflow: 'hidden', background: '#fff' }}>
                <Image
                  src="/logo-light.jpg"
                  alt="Mass Developers"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.01em', color: 'var(--background)' }}>
                  MASS DEVELOPERS
                </div>
                <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5 }}>
                  Est. 2018 · Ernakulam
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', lineHeight: '1.75', opacity: 0.6, maxWidth: '280px', marginBottom: '1.75rem' }}>
              Building dreams with honesty, quality, and passion. Trusted by hundreds of families and businesses across Kerala.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: InstagramIcon, href: '#', label: 'Instagram' },
                { icon: FacebookIcon, href: '#', label: 'Facebook' },
                { icon: Mail, href: 'mailto:project@massdevelopers.in', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.7,
                    transition: 'all 0.2s ease',
                    color: 'var(--background)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '1';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '0.7';
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.5rem', opacity: 0.5 }}>
              Quick Links
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Our Services', href: '#services' },
                { name: 'Latest Projects', href: '#projects' },
                { name: 'Read Blogs', href: '#blogs' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.9rem',
                      opacity: 0.6,
                      transition: 'opacity 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = '1'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = '0.6'}
                  >
                    <span style={{ width: '16px', height: '1px', background: 'currentColor', opacity: 0.5 }} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.5rem', opacity: 0.5 }}>
              Services
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                'Residential Building',
                'Commercial Building',
                'Turnkey Solutions',
                'Renovation & Restoration',
                'Interior Design & Fit-out',
                'Project Management',
              ].map((s) => (
                <li key={s}>
                  <span style={{ fontSize: '0.9rem', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '16px', height: '1px', background: 'currentColor', opacity: 0.5 }} />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.5rem', opacity: 0.5 }}>
              Contact Us
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                <MapPin size={18} style={{ opacity: 0.5, marginTop: '2px', flexShrink: 0 }} />
                <p style={{ fontSize: '0.875rem', lineHeight: '1.65', opacity: 0.6 }}>
                  46/1169-A1, Madappat Road,<br />
                  Chalikavattom, Vennala PO,<br />
                  Ernakulam, Kerala — 682028
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <Phone size={18} style={{ opacity: 0.5, flexShrink: 0 }} />
                <div style={{ fontSize: '0.875rem', opacity: 0.6, lineHeight: '1.65' }}>
                  <p>+91 70255 76777</p>
                  <p>+91 80892 48246</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <Mail size={18} style={{ opacity: 0.5, flexShrink: 0 }} />
                <div style={{ fontSize: '0.875rem', opacity: 0.6, lineHeight: '1.65' }}>
                  <p>project@massdevelopers.in</p>
                  <p>massdevelopers@outlook.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '2rem',
            paddingBottom: '2rem',
          }}
          className="footer-bottom"
        >
          <p style={{ fontSize: '0.8rem', opacity: 0.4 }}>
            © {new Date().getFullYear()} Mass Developers. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <a
                key={link}
                href="#"
                style={{ fontSize: '0.8rem', opacity: 0.4, transition: 'opacity 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = '0.8'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = '0.4'}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1.5fr !important;
          }
          .footer-bottom {
            flex-direction: row !important;
            justify-content: space-between !important;
            text-align: left !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
