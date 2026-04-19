'use client';

import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'TypeScript', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'CodeIgniter', 'Symphony'],
  },
  {
    title: 'Mobile',
    skills: ['React Native', 'Android', 'Kotlin', 'Java'],
  },
  {
    title: 'Tools & Cloud',
    skills: ['AWS', 'MongoDB', 'Git/Github', 'Software Architecture', 'AppSync'],
  },
];

export default function Skills() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              TECHNICAL <br />
              <span className="text-zinc-600 italic">ARSENAL</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.2em]"
          >
            04 — Skills
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#050505] p-8 group"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-500 mb-6 group-hover:translate-x-1 transition-transform duration-300">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) }}
                    className="text-lg font-display text-zinc-400 hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-24 overflow-hidden border-y border-zinc-800 py-8 relative">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center px-6">
                {skillCategories.flatMap(c => c.skills).map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-4xl md:text-6xl font-display font-black text-zinc-900 uppercase tracking-tighter hover:text-emerald-500/20 transition-colors duration-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
