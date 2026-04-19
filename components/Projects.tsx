'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    number: '01',
    title: 'Topline Travel',
    description:
      'Mobile app and admin panel for a full-service travel management platform. Built an offline-capable React Native app paired with a responsive web-based admin dashboard.',
    tech: ['React Native', 'React JS', 'Node.js', 'MongoDB'],
    link: 'https://ark.ph/case-studies/topline-travel/',
    image: 'https://ark.ph/static/0dd789b5cc1d9c40ff2dc1f41e2ebc95/c512e/9_56fcc5d6cb.webp',
    imageAlt: 'Topline Travel project screenshot',
  },
  {
    number: '02',
    title: 'Secret Date Nights',
    description:
      'Mobile-first web app for curated date experiences. Full MERN stack with an admin CMS and a polished, responsive customer-facing booking interface.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    link: 'https://ark.ph/case-studies/secret_dates/',
    image: 'https://ark.ph/static/7c83df04e63fc47f44427ac97265e3bd/c512e/cs_secretdates_1_6bf1a301ad.webp',
    imageAlt: 'Secret Date Nights project screenshot',
  },
  {
    number: '03',
    title: 'KamAI EMR',
    description:
      'Multi-tenant home health EMR platform leading as Fullstack Architect. Claims lifecycle engine, financial state machines, and tenant-scoped routing for a US-based client.',
    tech: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB'],
    link: '#contact',
    image: 'https://picsum.photos/seed/kamai/1200/675',
    imageAlt: 'KamAI EMR project screenshot',
  },
];

type Project = typeof PROJECTS[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const isExternal = project.link.startsWith('http');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-12 md:py-20 border-t border-zinc-800 items-center hover:bg-zinc-900/20 transition-colors duration-700"
    >
      {/* Left: Metadata */}
      <div className={`order-2 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
        <span className="font-display text-[50px] md:text-[80px] lg:text-[110px] font-black text-zinc-900 leading-none block group-hover:text-zinc-800 transition-colors duration-500 select-none">
          {project.number}
        </span>

        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 -mt-4 group-hover:text-emerald-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-zinc-400 text-base leading-relaxed max-w-sm mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map(t => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-widest border border-zinc-800 px-3 py-1.5 text-zinc-500 group-hover:border-zinc-700 transition-colors duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          data-cursor-hover
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white border border-zinc-800 px-6 py-3 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black transition-all duration-300 group/btn"
        >
          {isExternal ? 'View Case Study' : 'Get In Touch'}
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
        </a>
      </div>

      {/* Right: Image with parallax */}
      <div className={`order-1 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} overflow-hidden`}>
        <motion.div style={{ y }} className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/40 group-hover:to-black/20 transition-all duration-700" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter">
              SELECTED<br />
              <span className="text-zinc-700">WORK</span>
            </h2>
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 self-end mb-2"
          >
            02 — Projects
          </motion.span>
        </div>

        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
