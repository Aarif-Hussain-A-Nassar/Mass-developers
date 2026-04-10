import { animate } from "framer-motion";

/* ═══════════════════ EASE ═══════════════════ */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ═══════════════════ SMOOTH SCROLL UTILITY ═══════════════════ */
let _scrollAnimation: ReturnType<typeof animate> | null = null;

export function smoothScrollTo(selector: string) {
  const el = document.querySelector(selector) as HTMLElement | null;
  if (!el) return;

  // Cancel any in-progress animation
  if (_scrollAnimation) {
    _scrollAnimation.stop();
    _scrollAnimation = null;
  }

  const target = el.getBoundingClientRect().top + window.scrollY;

  _scrollAnimation = animate(window.scrollY, target, {
    duration: 1.1,
    ease: [0.16, 1, 0.3, 1],   // expo-out — same curve used site-wide
    onUpdate: (v) => window.scrollTo(0, v),
    onComplete: () => { _scrollAnimation = null; },
  });
}
