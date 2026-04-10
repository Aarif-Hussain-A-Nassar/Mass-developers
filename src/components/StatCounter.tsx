'use client';

import { useState, useEffect, useRef } from 'react';

export default function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let start = 0;
          const duration = 1600;
          const step = 16;
          const increment = value / (duration / step);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, step);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, started]);

  return (
    <div ref={ref}>
      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '1.8rem', fontWeight: 900, color: 'var(--white)' }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="t-label">{label}</div>
    </div>
  );
}
