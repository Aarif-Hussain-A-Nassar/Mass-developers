'use client';

import React from 'react';

interface MarqueeTickerProps {
  items:      string[];
  speed?:     number;
  direction?: 'left' | 'right';
  separator?: string;
  dim?:       boolean;
}

/**
 * Infinite CSS-animated horizontal marquee ticker.
 * Items are rendered 4× so the –50% translateX always lands on a clean loop point.
 */
export default function MarqueeTicker({
  items,
  speed     = 35,
  direction = 'left',
  separator = '◆',
  dim       = false,
}: MarqueeTickerProps) {
  /* 4 copies → –50% = halfway = seamless loop */
  const repeated = [...items, ...items, ...items, ...items];
  const animation = direction === 'left' ? 'ticker-ltr' : 'ticker-rtl';

  return (
    <div
      style={{
        overflow:     'hidden',
        borderTop:    '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background:   '#0e0e0e',
        padding:      '1rem 0',
      }}
    >
      <div
        style={{
          display:   'flex',
          width:     'max-content',
          animation: `${animation} ${speed}s linear infinite`,
        }}
      >
        {repeated.map((item, i) => (
          <React.Fragment key={i}>
            <span style={{
              fontFamily:    "'Inter', sans-serif",
              fontSize:      '0.65rem',
              fontWeight:    700,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color:         dim ? 'rgba(226,226,226,0.28)' : 'rgba(226,226,226,0.5)',
              whiteSpace:    'nowrap',
              padding:       '0 2.5rem',
            }}>
              {item}
            </span>
            <span style={{
              color:      'rgba(255,255,255,0.18)',
              fontSize:   '0.4rem',
              display:    'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}>
              {separator}
            </span>
          </React.Fragment>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker-ltr {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes ticker-rtl {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
