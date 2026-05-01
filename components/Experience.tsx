"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "The Botss",
    period: "Sep 2025 – Feb 2026",
    desc: [
      "Developing and maintaining full-stack web applications using Next.js, NestJS, Node.js, PostgreSQL.",
      "Designing scalable APIs and database schemas.",
      "Working on complete product lifecycle: architecture, development, deployment, optimization.",
      "Collaborating with cross-functional teams to build performant and maintainable products."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Zenkoders",
    period: "Nov 2024 – Aug 2025",
    desc: [
      "Built responsive frontend applications using React and Next.js.",
      "Integrated RESTful and WebSocket APIs for real-time communication.",
      "Implemented secure authentication and authorization workflows.",
      "Improved frontend performance through code refactoring, caching strategies, and responsive optimization."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl font-bold mb-16 text-center"><span className="text-gradient">Experience</span></h2>
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-cyan-400">
                <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4 gap-2">
                  <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                  <span className="text-sm font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full w-fit">{exp.period}</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-4">{exp.company}</h4>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                  {exp.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
