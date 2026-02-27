'use client';

import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-emerald-500 text-sm tracking-widest uppercase mb-4 block">
            Based in Philippines
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[10vw] leading-[0.9] font-bold tracking-tighter mb-8">
            JOHN PHILIP <br />
            <span className="text-zinc-500">LIMPAHAN</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl md:text-2xl text-zinc-400 max-w-md leading-relaxed">
              Senior Fullstack Developer crafting high-performance web and mobile solutions with a focus on React and Node.js.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-start md:justify-end"
          >
            <div className="group relative cursor-pointer">
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 border border-zinc-800 rounded-full flex items-center justify-center group-hover:border-emerald-500/50 transition-colors duration-500">
                <div className="text-center">
                  <ArrowDownRight className="w-8 h-8 mx-auto mb-1 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
                  <span className="text-[10px] uppercase tracking-widest font-mono">Scroll Down</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 -right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
