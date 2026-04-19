'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 lg:px-24 py-6 ${
        isScrolled ? 'bg-[#050505]/80 backdrop-blur-md py-4 border-b border-zinc-900' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-display font-black text-2xl tracking-tighter group"
        >
          JPL<span className="text-emerald-500 group-hover:animate-pulse">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 border border-zinc-800 rounded-full font-mono text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#050505] border-b border-zinc-900 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-2xl font-bold text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-emerald-500 text-black font-bold text-center uppercase tracking-widest text-xs"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
