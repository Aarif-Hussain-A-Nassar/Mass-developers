'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', color: '#ffffff', padding: 'clamp(5rem, 12vw, 10rem) 0 3rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', position: 'relative' }}>
      <div className="container">
        <div className="footer-main-grid" style={{ marginBottom: 'clamp(4rem, 10vw, 8rem)' }}>

          {/* Left: Brand & Story */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <motion.img
              src="/logo.png"
              alt="MASS Logo"
              style={{ height: 'clamp(50px, 8vw, 70px)', width: 'auto', alignSelf: 'flex-start', filter: 'brightness(0) invert(1)' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <p style={{
              fontFamily: 'var(--font-manrope)',
              fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '450px',
              fontWeight: 500
            }}>
              Four childhood friends, one shared vision: to bridge the gap in honesty and quality within the construction industry. Founded in 2018, MASS Developers continues to build dreams, one project at a time, with precision and integrity as our only compass.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              {[
                { name: 'Instagram', url: 'https://www.instagram.com/mass_developers/' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/mass-developers/?originalSubdomain=in' },
                { name: 'Facebook', url: 'https://www.facebook.com/p/MASS-Developers-100054430543081/' }
              ].map(social => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="social-btn"
                    style={{
                      padding: '0.6rem 1.4rem',
                      borderRadius: '100px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.55rem',
                      fontWeight: 900,
                      color: 'rgba(255,255,255,0.6)',
                      background: 'transparent',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      transition: 'all 0.3s var(--ease-expo)'
                    }}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'currentColor' }} />
                    {social.name}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Contact Grid */}
          <div className="footer-contact-grid">
            <div>
              <h4 style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '2rem', color: '#fff', opacity: 0.3 }}>Locations</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <a 
                  href="https://share.google/BAzOirco2LayMt023" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', transition: 'opacity 0.3s ease' }}
                  className="location-link"
                >
                  <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 'clamp(0.85rem, 1vw, 0.9rem)', lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
                    <span style={{ fontSize: '0.6rem', opacity: 0.4, display: 'block', marginBottom: '0.4rem' }}>REGISTERED BASE</span>
                    46/1169- A1, Madappat Road,<br />
                    Chalikavattom, Vennala PO,<br />
                    Ernakulam, 682028
                  </p>
                </a>
                <a 
                  href="https://share.google/Y8J1veezkVUBwoQ8lus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', transition: 'opacity 0.3s ease' }}
                  className="location-link"
                >
                  <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 'clamp(0.85rem, 1vw, 0.9rem)', lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
                    <span style={{ fontSize: '0.6rem', opacity: 0.4, display: 'block', marginBottom: '0.4rem' }}>BRANCH OFFICE</span>
                    XI/139, KD Tower, Vaduthala,<br />
                    Nadvath Nagar PO, Aroor - 688535
                  </p>
                </a>
              </div>
            </div>

            <div>
              <h4 style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '2rem', color: '#fff', opacity: 0.3 }}>Inquiries</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a href="tel:+917025576777" className="location-link" style={{ textDecoration: 'none' }}>
                    <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 'clamp(0.85rem, 1vw, 0.9rem)', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
                      <span style={{ fontSize: '0.6rem', opacity: 0.4, display: 'block', marginBottom: '0.4rem' }}>CALL BASE</span>
                      +91 70255 76777
                    </p>
                  </a>
                  <a href="tel:+918089248246" className="location-link" style={{ textDecoration: 'none' }}>
                    <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 'clamp(0.85rem, 1vw, 0.9rem)', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
                      +91 80892 48246
                    </p>
                  </a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a href="mailto:project@massdevelopers.in" className="location-link" style={{ textDecoration: 'none' }}>
                    <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 'clamp(0.85rem, 1vw, 0.9rem)', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
                      <span style={{ fontSize: '0.6rem', opacity: 0.4, display: 'block', marginBottom: '0.4rem' }}>CORRESPONDENCE</span>
                      project@massdevelopers.in
                    </p>
                  </a>
                  <a href="mailto:massdevelopers@outlook.com" className="location-link" style={{ textDecoration: 'none' }}>
                    <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 'clamp(0.85rem, 1vw, 0.9rem)', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
                      massdevelopers@outlook.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Mass Developers Group.
          </p>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <p className="footer-slogan" style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)' }}>
                Precision in Silence.
              </p>
              <a 
                href="https://twodots.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}
              >
                DESIGNED BY TWO DOTS
              </a>
            <motion.a
              href="#hero"
              whileHover={{ color: '#ffffff' }}
              style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              Top ↑
            </motion.a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(4rem, 10vw, 8rem);
        }
        .footer-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        .footer-bottom-bar {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .location-link:hover p {
          color: #ffffff !important;
          transform: translateX(4px);
        }
        .location-link p {
          transition: all 0.3s ease;
        }
        .social-btn:hover {
          background-color: #ffffff !important;
          color: #000000 !important;
          border-color: #ffffff !important;
        }

        @media (max-width: 900px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
        @media (max-width: 600px) {
          .footer-contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 2rem;
            align-items: flex-start;
          }
          .footer-slogan {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
}
