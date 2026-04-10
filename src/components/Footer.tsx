'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{ background: '#ffffff', color: '#000000', padding: '10rem 0 5rem 0', borderTop: '1px solid rgba(0,0,0,0.06)', position: 'relative' }}>
      <div className="container">
        <div className="grid-2-col" style={{ gap: '8rem', marginBottom: '8rem' }}>
          
          {/* Left: Brand & Story */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <motion.img 
              src="/logo.png" 
              alt="MASS Logo" 
              style={{ height: '70px', width: 'auto', alignSelf: 'flex-start', mixBlendMode: 'multiply' }} 
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <p style={{ 
              fontFamily: 'var(--font-manrope)', 
              fontSize: '1rem', 
              lineHeight: 1.8, 
              color: 'rgba(0,0,0,0.6)',
              maxWidth: '450px',
              fontWeight: 500
            }}>
              Four childhood friends, one shared vision: to bridge the gap in honesty and quality within the construction industry. Founded in 2018, MASS Developers continues to build dreams, one project at a time, with precision and integrity as our only compass.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { name: 'Instagram', url: '#' },
                { name: 'LinkedIn', url: '#' },
                { name: 'Facebook', url: '#' }
              ].map(social => (
                <motion.a 
                  key={social.name} 
                  href={social.url} 
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ textDecoration: 'none' }}
                >
                  <motion.div
                    whileHover={{ 
                      backgroundColor: '#000', 
                      color: '#fff',
                      borderColor: '#000'
                    }}
                    style={{
                      padding: '0.8rem 1.8rem',
                      borderRadius: '100px',
                      border: '1px solid rgba(0,0,0,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.65rem',
                      fontWeight: 900,
                      color: 'rgba(0,0,0,0.6)',
                      background: 'transparent',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      transition: 'all 0.3s var(--ease-expo)'
                    }}
                  >
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'currentColor' }} />
                    {social.name}
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Contact Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <motion.div whileHover={{ x: 10 }} transition={{ type: 'spring', stiffness: 200 }}>
              <h4 style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '2rem', color: '#000', opacity: 0.3 }}>Locations</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <p style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(0,0,0,0.8)', fontWeight: 600 }}>
                  <span style={{ fontSize: '0.6rem', opacity: 0.4, display: 'block', marginBottom: '0.4rem' }}>REGISTERED BASE</span>
                  46/1169- A1, Madappat Road,<br />
                  Chalikavattom, Vennala PO,<br />
                  Ernakulam, 682028
                </p>
                <p style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(0,0,0,0.8)', fontWeight: 600 }}>
                  <span style={{ fontSize: '0.6rem', opacity: 0.4, display: 'block', marginBottom: '0.4rem' }}>BRANCH OFFICE</span>
                  XI/139, KD Tower, Vaduthala,<br />
                  Nadvath Nagar PO, Aroor - 688535
                </p>
              </div>
            </motion.div>
            
            <motion.div whileHover={{ x: 10 }} transition={{ type: 'spring', stiffness: 200 }}>
              <h4 style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '2rem', color: '#000', opacity: 0.3 }}>Inquiries</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <p style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(0,0,0,0.8)', fontWeight: 600 }}>
                  <span style={{ fontSize: '0.6rem', opacity: 0.4, display: 'block', marginBottom: '0.4rem' }}>CALL BASE</span>
                  +91 70255 76777<br />
                  +91 80892 48246
                </p>
                <p style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(0,0,0,0.8)', fontWeight: 600 }}>
                  <span style={{ fontSize: '0.6rem', opacity: 0.4, display: 'block', marginBottom: '0.4rem' }}>CORRESPONDENCE</span>
                  project@massdevelopers.in<br />
                  massdevelopers@outlook.com
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(0,0,0,0.3)' }}>
            © {new Date().getFullYear()} Mass Developers Group.
          </p>
          <div style={{ display: 'flex', gap: '3rem' }}>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(0,0,0,0.3)' }}>
              Precision in Silence.
            </p>
            <motion.a 
              href="#hero" 
              whileHover={{ color: '#000' }}
              style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(0,0,0,0.2)', textDecoration: 'none' }}
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              Back to Top ↑
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
