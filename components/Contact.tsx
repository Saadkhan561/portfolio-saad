"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-2xl mx-auto px-6 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-12 rounded-3xl"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4"><span className="text-gradient">Let's Connect</span></h2>
          <p className="text-gray-400">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
        </div>
        
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col md:flex-row gap-6">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-gray-500"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-gray-500"
            />
          </div>
          <input 
            type="text" 
            placeholder="Subject" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-gray-500"
          />
          <textarea 
            placeholder="Your message..." 
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-gray-500 resize-none"
          ></textarea>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 mt-2"
          >
            Send Message <Send size={18} />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
