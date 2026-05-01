"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  { name: "AI with Python", issuer: "NCAI, CERD Academy" },
  { name: "Javascript Basics", issuer: "Udemy" },
  { name: "Javascript & React Hands-on", issuer: "Udemy" },
  { name: "Internship as a React Developer", issuer: "NCL Lab, NED" },
  { name: "Internship as a Web Developer", issuer: "BehinDev" }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-16 text-center"><span className="text-gradient">Certificates & Awards</span></h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <Award size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm md:text-base">{cert.name}</h3>
                <p className="text-xs text-gray-400">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
