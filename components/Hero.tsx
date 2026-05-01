"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Link, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-background to-background -z-10"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4 mt-12"
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-cyan-400 font-mono mb-4 tracking-widest uppercase text-sm"
        >
          Welcome to my portfolio
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
        >
          <Image
            src="/saad_avatar.png"
            alt="Saad Khan Avatar"
            fill
            className="object-cover"
            priority
          />
        </motion.div>


        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="text-gradient">Saad Khan</span>
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          A Full Stack Developer specializing in building exceptional digital experiences with modern web technologies.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a href="#projects" className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors text-cyan-400 w-full sm:w-auto justify-center">
            View My Work <ArrowRight size={18} />
          </a>
          <div className="flex gap-6 items-center px-4">
            <a href="https://github.com/Saadkhan561" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Code /></a>
            <a href="https://www.linkedin.com/in/saad-khan-89aa943a0?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Link /></a>
            <a href="mailto:[EMAIL_ADDRESS]" className="text-gray-400 hover:text-white transition-colors"><Mail /></a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
