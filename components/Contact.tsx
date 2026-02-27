'use client';

import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
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
                Seeking to contribute to innovative web and mobile solutions. Let&apos;s build something impactful together.
              </p>
            </motion.div>

            <div className="space-y-6">
              <a href="mailto:johnphiliplimpahan@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                  <Mail className="w-5 h-5 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Email</p>
                  <p className="text-zinc-300 group-hover:text-white transition-colors">philipjohn234@gmail.com</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/john-philip-limpahan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
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

          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/5 blur-[100px] rounded-full" />
            <div className="relative border border-zinc-800 p-8 md:p-12 rounded-2xl bg-[#050505]/50 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold mb-8">Send a message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-emerald-500 transition-colors text-white" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-emerald-500 transition-colors text-white" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-emerald-500 transition-colors text-white resize-none" placeholder="Tell me about your project" />
                </div>
                <button className="w-full py-4 bg-emerald-500 text-black font-bold uppercase tracking-widest text-xs hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 group">
                  Send Message
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
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
