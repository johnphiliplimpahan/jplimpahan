'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <SmoothScrollProvider>
      <CustomCursor />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-emerald-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <main className="relative">
        <Navbar />

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="work">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }}
      />
    </SmoothScrollProvider>
  );
}
