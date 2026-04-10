'use client';

import { JOURNAL } from '@/lib/constants';
import FadeIn from './FadeIn';

export default function Journal() {
  return (
    <section id="journal" style={{ background: 'var(--bg)', padding: 'clamp(4rem, 10vw, 6rem) 0' }}>
      <div className="container">
        <FadeIn><div className="section-eyebrow" style={{ marginBottom: 'clamp(2rem, 4vw, 4rem)' }}><span>Journal / 005</span></div></FadeIn>
        <h2 className="t-headline" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', marginBottom: '1rem' }}>Journal</h2>
        {JOURNAL.map((post, i) => (
          <div key={i} style={{ padding: 'clamp(2rem, 5vw, 3rem) 0', borderBottom: '1px solid var(--white-06)' }}>
            <h3 className="journal-post-title" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.8rem)', color: 'var(--white)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{post.title}</h3>
            <p className="t-body" style={{ fontSize: 'clamp(0.85rem, 1vw, 0.95rem)' }}>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

