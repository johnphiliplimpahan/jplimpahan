'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, MapPin, Mail, Linkedin } from 'lucide-react';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'philipjohn234@gmail.com',
    href: 'mailto:philipjohn234@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'john-philip-limpahan',
    href: 'https://www.linkedin.com/in/john-philip-limpahan-4243a3165/',
    icon: Linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden relative">

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-20 flex items-center gap-4"
        >
          <span className="w-8 h-px bg-zinc-700 inline-block" />
          05 — Contact
        </motion.div>

        {/* Two-column: headline + contact card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 mb-0">

          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[0.88] mb-8">
                LET&apos;S BUILD<br />
                <span className="text-zinc-700">SOMETHING<br />GREAT.</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-sm">
                Available for freelance and contract work. Based in the Philippines, working with clients worldwide.
              </p>
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center gap-2.5 mt-12 lg:mt-0"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-500">
                Open to Opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-end"
          >
            <div className="border-t border-zinc-800">
              {CONTACT_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  data-cursor-hover
                  className="group flex items-center justify-between py-6 border-b border-zinc-800 hover:border-zinc-700 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/40 group-hover:bg-emerald-500/5 transition-all duration-300">
                      <item.icon className="w-4 h-4 text-zinc-600 group-hover:text-emerald-500 transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-zinc-300 text-sm group-hover:text-white transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              ))}

              {/* Location (non-link) */}
              <div className="flex items-center justify-between py-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-zinc-600" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600 mb-0.5">
                      Based in
                    </p>
                    <p className="text-zinc-300 text-sm">Philippines</p>
                  </div>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-500/70 border border-emerald-500/20 px-2 py-1">
                  Remote
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width email banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 border-t border-b border-zinc-800 group"
        >
          <a
            href="mailto:philipjohn234@gmail.com"
            data-cursor-hover
            className="flex items-center justify-between py-8 md:py-10 gap-6"
          >
            <span className="font-display text-base md:text-3xl lg:text-5xl font-black tracking-tight text-zinc-500 group-hover:text-white transition-colors duration-500 truncate">
              philipjohn234@gmail.com
            </span>
            <div className="shrink-0 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest border border-zinc-800 px-5 py-3 text-zinc-400 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-black transition-all duration-300 whitespace-nowrap">
              Send Email
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </motion.div>

        {/* Footer */}
        <footer className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-700">
            © 2026 John Philip Limpahan
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-700">
            Built with Next.js + Motion
          </p>
        </footer>
      </div>
    </section>
  );
}
