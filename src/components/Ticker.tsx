'use client';

import { TICKER_ITEMS } from '@/lib/constants';

export default function Ticker({ reversed = false }: { reversed?: boolean }) {
  return (
    <div className="ticker-wrap">
      <div
        className="ticker-track"
        style={{ animationDirection: reversed ? 'reverse' : 'normal' }}
      >
        {TICKER_ITEMS.map((item, i) => (
          <span key={i} className={item === '✦' ? 'accent' : ''}>{item}</span>
        ))}
      </div>
    </div>
  );
}
