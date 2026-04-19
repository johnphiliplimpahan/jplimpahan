'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = anchor.getAttribute('href');
        if (target) lenis.scrollTo(target, { offset: -80 });
      });
    });

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
