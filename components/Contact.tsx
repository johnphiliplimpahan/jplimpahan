'use client';

import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
                LET&apos;S <br />
                <span className="text-emerald-500 italic">CONNECT</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-md mb-12">
                Seeking to contribute to innovative web and mobile solutions. Let&apos;s build something impactful together. Reach me at:
              </p>
            </motion.div>

            <div className="space-y-6">
              <a href="mailto:philipjohn234@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                  <Mail className="w-5 h-5 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Email</p>
                  <p className="text-zinc-300 group-hover:text-white transition-colors">philipjohn234@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/john-philip-limpahan-4243a3165/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                  <Linkedin className="w-5 h-5 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">LinkedIn</p>
                  <p className="text-zinc-300 group-hover:text-white transition-colors">john-philip-limpahan</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-zinc-500" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Location</p>
                  <p className="text-zinc-300">Kolambugan, Lanao Del Norte, PH</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
            © 2024 John Philip Limpahan. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 hover:text-emerald-500 transition-colors">Twitter</a>
            <a href="#" className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 hover:text-emerald-500 transition-colors">Github</a>
            <a href="#" className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 hover:text-emerald-500 transition-colors">Dribbble</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
