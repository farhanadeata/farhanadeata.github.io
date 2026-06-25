"use client";

import { motion } from "framer-motion";
import { FiGithub, FiMail, FiLinkedin, FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/2" />

          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-block p-4 bg-cyan-500/10 rounded-3xl mb-8"
          >
            <FiSend className="text-cyan-400" size={32} />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Mari <span className="text-cyan-400">Berkolaborasi</span>
          </h2>
          
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Punya ide proyek, pertanyaan teknis, atau peluang karir? 
            Saya sangat antusias untuk berdiskusi dan menciptakan solusi bersama.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a
              href="mailto:fadeatalarik@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]"
            >
              <FiMail size={20} />
              Kirim Email
            </a>
            
            <a
              href="https://github.com/farhanadeata"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all hover:scale-105 hover:border-white/30"
            >
              <FiGithub size={20} />
              GitHub
            </a>

            
          </div>

          <div className="pt-8 border-t border-white/5 text-sm text-gray-600 font-mono">
            <p>© 2026 Farhan Ade Atalarik. Crafted with passion.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}