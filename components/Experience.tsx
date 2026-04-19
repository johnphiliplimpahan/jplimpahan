'use client';

import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Technical Lead / Fullstack Architect (Freelance)',
    company: 'KamAI EMR',
    period: 'Sep 2025 – Present',
    location: 'Remote (US Client)',
    description: [
      'Leading architecture and full-stack development of a multi-tenant Home Health EMR platform.',
      'Designed and enforced strict company-scoped multi-tenancy across backend modules and tenant-scoped frontend routes.',
      'Implemented claims lifecycle engine, financial state machines, and governed recompute trigger contracts for compliance-critical workflows.',
      'Built robust Node.js + Express + MongoDB backend with domain-level lifecycle and financial invariants.',
    ],
  },
  {
    role: 'Mid Fullstack Developer',
    company: 'Ark Digital',
    period: 'Nov 2021 – Aug 2025',
    location: 'Mandaue, PH (Remote)',
    description: [
      'Developed and maintained web and mobile applications using the React.js/TypeScript and React Native stacks.',
      'Designed and implemented scalable backend solutions with Node.js and Express.',
      'Collaborated with cross-functional teams to ensure seamless integration of frontend and backend systems.',
      'Optimized application performance to enhance user experience and ensure reliability.',
    ],
  },
  {
    role: 'React Native Developer',
    company: 'Freelance',
    period: 'Jan 2020 – Feb 2021',
    location: 'NCR, Philippines',
    description: [
      'Responsible for creating and managing a mobile application using React Native and TypeScript.',
      'Planned and designed the mobile application architecture for scalability and maintainability.',
      'Designed and implemented user interfaces based on the prototype design.',
      'Ensured data is handled and displayed correctly using Amazon Web Service AppSync.',
    ],
  },
  {
    role: 'Junior Software Engineer',
    company: 'DNA Micro Software Inc.',
    period: 'Aug 2019 – Oct 2019',
    location: 'Cebu, PH',
    description: [
      'Collaborated with a team on website migration from CodeIgniter PHP to a modern Node.js and React/TypeScript stack.',
      'Communicated with the UI/UX Design Team for UI features.',
      'Managed a media asset website using Symphony PHP.',
      'Participated in SCRUM meetings about website improvements and features.',
    ],
  },
  {
    role: 'PHP Developer',
    company: 'Nusku Outsourcing Solutions',
    period: 'Mar 2018 – May 2018',
    location: 'NCR, Philippines',
    description: [
      'Developed white label websites using the Laravel PHP Framework.',
      'Collaborated with design and frontend teams to implement responsive and user-friendly interfaces.',
      'Optimized website performance and ensured fast load times through efficient coding practices.',
    ],
  },
];

type Experience = typeof experiences[number];

function ExperienceEntry({ exp, index }: { exp: Experience; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="flex items-start justify-between gap-4 py-8 border-t border-zinc-800/60 group-hover:border-zinc-700 transition-colors duration-400">
        <div className="flex items-start gap-6 flex-1 min-w-0">
          <span className="font-mono text-xs text-zinc-700 shrink-0 mt-1.5 group-hover:text-emerald-500 transition-colors duration-300">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
              {exp.company}
            </h3>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-500 mt-1">
              {exp.role}
            </p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="font-mono text-xs text-zinc-500">{exp.period}</p>
          <p className="font-mono text-[10px] text-zinc-700 mt-0.5">{exp.location}</p>
        </div>
      </div>

      <div className="pb-8 pl-6 md:pl-12 grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-12 gap-y-2">
        {exp.description.map((item, i) => (
          <p key={i} className="text-zinc-500 text-sm leading-relaxed flex gap-3 items-start">
            <span className="w-1 h-1 rounded-full bg-zinc-700 mt-2 shrink-0 group-hover:bg-emerald-500 transition-colors duration-300" />
            {item}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              PROFESSIONAL <br />
              <span className="text-zinc-600 italic">JOURNEY</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.2em]"
          >
            03 — Experience
          </motion.div>
        </div>

        <div>
          {experiences.map((exp, index) => (
            <ExperienceEntry key={index} exp={exp} index={index} />
          ))}
          <div className="border-t border-zinc-800/60" />
        </div>
      </div>
    </section>
  );
}
