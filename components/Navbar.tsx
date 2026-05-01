"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-6 py-3 flex gap-6"
    >
      {["Home", "Tech", "Experience", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-sm font-medium hover:text-cyan-400 transition-colors"
        >
          {item}
        </a>
      ))}
    </motion.nav>
  );
}
