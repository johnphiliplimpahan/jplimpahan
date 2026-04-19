'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowDownRight } from 'lucide-react';

const NAME_LINE1 = 'JOHN';
const NAME_LINE2 = 'PHILIP';
const NAME_LINE3 = 'LIMPAHAN';

const ROLES = [
  'Fullstack Developer',
  'React Specialist',
  'Mobile Engineer',
  'Fullstack Architect',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const charVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function AnimatedWord({ word, className }: { word: string; className?: string }) {
  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex"
      >
        {word.split('').map((char, i) => (
          <motion.span key={i} variants={charVariants} className="inline-block will-change-transform">
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Layout grid ── */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">

        {/* ── LEFT: text content ── */}
        <div className="flex flex-col justify-center z-10">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-500">
              Available for Work
            </span>
          </motion.div>

          {/* Name — stacked lines, each word reveals independently */}
          <div className="mb-6 font-display font-black tracking-tighter leading-[0.85]" style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)' }}>
            <AnimatedWord word={NAME_LINE1} />
            <AnimatedWord word={NAME_LINE2} />
            <AnimatedWord word={NAME_LINE3} className="text-zinc-600" />
          </div>

          {/* Cycling role */}
          <div className="h-9 md:h-12 overflow-hidden relative mb-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRole}
                initial={{ y: 36, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -36, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-xl md:text-3xl text-zinc-500 font-light absolute"
              >
                — {ROLES[currentRole]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-zinc-500 max-w-xs leading-relaxed mb-12"
          >
            Fullstack Developer crafting high-performance web and mobile
            solutions with a focus on React and Node.js.
          </motion.p>

          {/* Scroll CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#work" data-cursor-hover className="group relative inline-block">
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-28 h-28 md:w-36 md:h-36 border border-zinc-800 rounded-full flex items-center justify-center group-hover:border-emerald-500/50 transition-colors duration-500">
                <div className="text-center">
                  <ArrowDownRight className="w-7 h-7 mx-auto mb-1 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
                  <span className="text-[10px] uppercase tracking-widest font-mono">View Work</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: portrait photo ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="relative flex justify-center lg:justify-end items-end self-end lg:self-auto h-[55vh] lg:h-[85vh]"
        >
          {/* Subtle emerald edge glow behind photo */}
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/[0.06] rounded-full blur-[100px] pointer-events-none" />

          {/* Photo container */}
          <div className="relative h-full w-auto max-w-[340px] lg:max-w-[420px]">
            <Image
              src="/profile.png"
              alt="John Philip Limpahan"
              fill
              priority
              className="object-cover object-top"
              style={{
                filter: 'grayscale(100%) contrast(1.05)',
                maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
              }}
              sizes="(max-width: 1024px) 340px, 420px"
            />
          </div>
        </motion.div>
      </div>

      {/* Subtle ambient glow — left */}
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-emerald-500/[0.05] rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}
