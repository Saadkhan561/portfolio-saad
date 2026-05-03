"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    
    // Using two access keys is a workaround to send to two different emails on the free tier.
    // If you have a PRO Web3Forms plan, you can use a single key and append a "cc" field.
    const keys = [
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY_1 || "", // For work.saadkhan85@gmail.com
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY_2 || ""  // For saadnadeem885@gmail.com
    ].filter(Boolean);

    if (keys.length === 0) {
      setSubmitStatus("error");
      setStatusMessage("Web3Forms access keys are missing. Please add them to your .env.local file.");
      setIsSubmitting(false);
      return;
    }

    try {
      let successCount = 0;

      // Submit to all configured keys
      for (const key of keys) {
        formData.set("access_key", key);
        
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        
        const data = await response.json();
        if (data.success) {
          successCount++;
        }
      }

      if (successCount > 0) {
        setSubmitStatus("success");
        setStatusMessage("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
        setStatusMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("An error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

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
        
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Web3Forms Advanced Settings */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
          <input type="hidden" name="from_name" value="Portfolio Notifications" />
          
          <div className="flex flex-col md:flex-row gap-6">
            <input 
              type="text" 
              name="name"
              required
              placeholder="Name" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-gray-500"
            />
            <input 
              type="email" 
              name="email"
              required
              placeholder="Email" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-gray-500"
            />
          </div>
          <input 
            type="text" 
            name="topic"
            placeholder="Subject" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-gray-500"
          />
          <textarea 
            name="message"
            required
            placeholder="Your message..." 
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-gray-500 resize-none"
          ></textarea>
          
          <motion.button 
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            disabled={isSubmitting}
            className={`font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all
              ${isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-cyan-500/25'} 
              text-white mt-2`}
          >
            {isSubmitting ? (
              <>Sending... <Loader2 size={18} className="animate-spin" /></>
            ) : (
              <>Send Message <Send size={18} /></>
            )}
          </motion.button>
          
          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-xl mt-2"
            >
              <CheckCircle size={20} />
              <p>{statusMessage}</p>
            </motion.div>
          )}
          
          {submitStatus === "error" && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl mt-2"
            >
              <XCircle size={20} />
              <p>{statusMessage}</p>
            </motion.div>
          )}
        </form>
      </motion.div>
    </section>
  );
}
