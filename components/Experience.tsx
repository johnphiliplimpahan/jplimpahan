"use client";

import { motion } from "motion/react";

const experiences = [
  {
    role: "Technical Lead / Fullstack Architect (Freelance)",
    company: "KamAI EMR",
    period: "Sep 2025 – Present",
    location: "Remote (US Client)",
    description: [
      "Leading architecture and full-stack development of a multi-tenant Home Health EMR platform.",
      "Designed and enforced strict company-scoped multi-tenancy across backend modules and tenant-scoped frontend routes.",
      "Implemented claims lifecycle engine, financial state machines, and governed recompute trigger contracts for compliance-critical workflows.",
      "Built robust Node.js + Express + MongoDB backend with domain-level lifecycle and financial invariants.",
      "Developed Next.js 15 App Router frontend with company-scoped routing, service-layer isolation, and permission-based UI gating.",
      "Hardened system governance using deterministic lifecycle transitions and financial trigger controls to prevent recompute-on-read side effects.",
    ],
  },
  {
    role: "Mid Fullstack Developer",
    company: "Ark Digital",
    period: "Nov 2021 – Aug 2025",
    location: "Mandaue, PH (Remote)",
    description: [
      "Developed and maintained web and mobile applications using the React.js/TypeScript and React Native stacks.",
      "Designed and implemented scalable backend solutions with Node.js and Express.",
      "Collaborated with cross-functional teams to ensure seamless integration of frontend and backend systems.",
      "Optimized application performance to enhance user experience and ensure reliability.",
    ],
  },
  {
    role: "React Native Developer",
    company: "Freelance",
    period: "Jan 2020 – Feb 2021",
    location: "NCR, Philippines",
    description: [
      "Responsible for creating and managing a mobile application using React Native and TypeScript.",
      "Planned and designed the mobile application architecture for scalability and maintainability.",
      "Designed and implemented user interfaces based on the prototype design.",
      "Ensured data is handled and displayed correctly using Amazon Web Service AppSync.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "DNA Micro Software Inc.",
    period: "Aug 2019 – Oct 2019",
    location: "Cebu, PH",
    description: [
      "Collaborated with a team on website migration from CodeIgniter PHP to a modern Node.js and React/TypeScript stack.",
      "Communicated with the UI/UX Design Team for UI features.",
      "Managed a media asset website using Symphony PHP.",
      "Participated in SCRUM meetings about website improvements and features.",
    ],
  },
  {
    role: "PHP Developer",
    company: "Nusku Outsourcing Solutions",
    period: "Mar 2018 – May 2018",
    location: "NCR, Philippines",
    description: [
      "Developed White label websites using the Laravel PHP Framework.",
      "Collaborated with design and frontend teams to implement responsive and user-friendly interfaces.",
      "Optimized website performance and ensured fast load times through efficient coding practices.",
    ],
  },
];

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
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
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
            01 — Experience
          </motion.div>
        </div>

        <div className="space-y-0 border-t border-zinc-800">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group grid grid-cols-1 lg:grid-cols-12 py-12 border-b border-zinc-800 hover:bg-zinc-900/30 transition-colors duration-500 px-4 -mx-4"
            >
              <div className="lg:col-span-3 mb-4 lg:mb-0">
                <span className="font-mono text-sm text-zinc-500">
                  {exp.period}
                </span>
              </div>
              <div className="lg:col-span-4 mb-6 lg:mb-0">
                <h3 className="text-2xl font-display font-bold group-hover:text-emerald-400 transition-colors duration-300">
                  {exp.role}
                </h3>
                <p className="text-zinc-400 mt-1">{exp.company}</p>
                <p className="text-zinc-600 text-sm mt-1">{exp.location}</p>
              </div>
              <div className="lg:col-span-5">
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-zinc-400 text-sm leading-relaxed flex gap-3"
                    >
                      <span className="text-emerald-500 mt-1.5 shrink-0 w-1 h-1 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
