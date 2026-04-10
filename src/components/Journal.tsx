'use client';

import { JOURNAL } from '@/lib/constants';
import FadeIn from './FadeIn';

export default function Journal() {
  return (
    <section id="journal" style={{ background: 'var(--bg)', padding: '6rem 0' }}>
      <div className="container">
        <FadeIn><div className="section-eyebrow"><span>Journal / 005</span></div></FadeIn>
        <h2 className="t-headline">Journal</h2>
        {JOURNAL.map((post, i) => (
          <div key={i} style={{ padding: '3rem 0', borderBottom: '1px solid var(--white-06)' }}>
            <h3 className="journal-post-title" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--white)', marginBottom: '0.75rem' }}>{post.title}</h3>
            <p className="t-body">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
