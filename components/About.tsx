'use client';

import { motion } from 'motion/react';

const STATS = [
  { value: '7+', label: 'Years of Experience' },
  { value: '3',  label: 'Industries Served' },
  { value: '10+', label: 'Projects Shipped' },
];

export default function About() {
  return (
    <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-20 flex items-center gap-4"
        >
          <span className="w-8 h-px bg-zinc-700 inline-block" />
          00 — About
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8">
              I build software that<br />
              <span className="text-zinc-600 italic">scales and ships.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
              Based in the Philippines, I&apos;ve spent the last 7+ years building
              full-stack web and mobile applications across travel, hospitality, and
              healthcare. Currently leading architecture on KamAI EMR, a
              multi-tenant home health platform serving US clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-12">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group border-l-2 border-zinc-800 pl-6 hover:border-emerald-500 transition-colors duration-500"
              >
                <span className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white block leading-none mb-2">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
