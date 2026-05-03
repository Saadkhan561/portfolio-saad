"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "Ecommerce Perfume Store",
    desc: "A fully functional ecommerce platform with product browsing, cart functionality, and order management.",
    tech: ["Next.js", "Express.js", "MongoDB", "Zustand", "TanStack Query", "Nodemailer"],
    features: [
      "Product & category management",
      "WhatsApp integration",
      "Admin panel with CRUD",
      "Email notifications"
    ],
    link: "#",
    github: "#"
  },
  {
    title: "Digital Board Pack",
    desc: "Industry-Based FYP for Pakistan Oxygens Ltd. A secure document management system with version control.",
    tech: ["Next.js", ".NET", "SQL"],
    features: [
      "Document management system",
      "Version control",
      "Secure document access",
      "Optimized database schemas"
    ],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-16 text-center"><span className="text-gradient">Featured Projects</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="h-48 bg-white/5 border-b border-white/10 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-purple-900/40 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold text-white/50 group-hover:text-white transition-colors duration-300 z-10">{project.title}</h3>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-6 min-h-[3rem]">{project.desc}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* <div className="flex gap-4 mt-auto">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-white hover:text-cyan-400 transition-colors">
                    <Code size={16} /> Code
                  </a>
                  <a href={project.link} className="flex items-center gap-2 text-sm text-white hover:text-cyan-400 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
