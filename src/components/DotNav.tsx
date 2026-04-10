'use client';

import { SECTIONS_IDS } from '@/lib/constants';

export default function DotNav({ active }: { active: number }) {
  return (
    <div className="dot-nav">
      {SECTIONS_IDS.map((id, i) => (
        <button
          key={i}
          className={active === i ? 'active' : ''}
          aria-label={`Go to ${id}`}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
        />
      ))}
    </div>
  );
}
