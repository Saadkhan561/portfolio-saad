"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["HTML/CSS", "Tailwind CSS", "React.js", "Next.js", "Redux", "Zustand"] },
  { category: "Backend", items: ["Node.js", "Express.js", "NestJS"] },
  { category: "Databases", items: ["SQL", "MySQL", "MongoDB", "PostgreSQL", "Supabase"] },
  { category: "Languages & Tools", items: ["JavaScript", "TypeScript", "Python", "Git", "GitHub"] },
  { category: "Concepts", items: ["REST APIs", "WebSockets", "Auth", "System Design", "Responsive Design"] }
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-16 text-center"><span className="text-gradient">Tech Stack</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {skillGroup.items.map(item => (
                  <span key={item} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
