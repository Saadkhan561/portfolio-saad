"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Engineer",
    company: "Saif Inspirations",
    period: "June 2026 – Present",
    desc: [
      "Developed production-grade healthcare applications using React, Next.js, JavaScript, and Material UI for responsive and scalable clinical workflows.",
      "Improved frontend performance and maintainability through React best practices, reusable components, optimized state management, and efficient rendering.",
      "Integrated REST APIs with robust validation, error handling, and secure data management for healthcare and patient-related workflows.",
      "Applied HIPAA-aligned security practices to protect sensitive data and mitigate risks such as XSS, unauthorized access, and unintended data exposure."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Qvise Ltd.",
    period: "April 2026 – June 2026",
    desc: [
      "Developed and maintained scalable web applications, building responsive and user-friendly frontend interfaces using React.js.",
      "Designed and implemented robust backend APIs and business logic using Express.js and Node.js, ensuring secure and efficient data processing.",
      "Built, optimized, and managed PostgreSQL databases, including schema design, query optimization, and data integrity.",
      "Collaborated with cross-functional teams to develop, test, deploy, and enhance end-to-end product features, delivering high-quality software throughout the product lifecycle."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "The Botss",
    period: "September 2025 – February 2026",
    desc: [
      "Developing and maintaining a full-stack web application using Next.js, NestJS, Node.js, and PostgreSQL for the company's core product.",
      "Designing and implementing scalable APIs and database schemas to ensure optimal performance and data integrity.",
      "Collaborating with cross-functional teams to deliver end-to-end product features with a focus on usability, performance, and maintainability.",
      "Contributing to the complete product lifecycle, from architecture and development to integration, deployment, and optimization."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Zenkoders",
    period: "August 2024 – August 2025",
    desc: [
      "Developed dynamic, responsive front-end solutions using modern JavaScript frameworks (React, Next.js) to enhance usability and cross-device compatibility.",
      "Integrated RESTful and WebSocket APIs to enable real-time communication, improving data synchronization and user engagement.",
      "Implemented secure authentication and authorization workflows to support scalability, data protection, and compliance standards.",
      "Collaborated with UI/UX designers and backend engineers to deliver robust, user-centric features within agile development cycles.",
      "Optimized frontend performance through code refactoring, caching strategies, and responsive design techniques, ensuring seamless functionality across all devices."
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
