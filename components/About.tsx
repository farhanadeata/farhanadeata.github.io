"use client";

import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const stats = [
  { number: "07+", title: "Proyek" },
  { number: "01+", title: "Kolaborasi" },
  { number: "01", title: "Mentorship" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
      
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-sm font-bold text-cyan-400 tracking-widest uppercase">Tentang Saya</h2>
          <p className="text-xl text-gray-200 font-medium leading-relaxed">
            Saya <span className="text-cyan-400 font-bold">Farhan Ade Atalarik</span>, seorang pengembang yang berfokus pada perancangan solusi digital yang fungsional dan berdampak.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Berbekal antusiasme tinggi di bidang web development, sistem informasi, dan teknologi IoT, saya mengubah tantangan teknis menjadi sistem yang efisien. Saya percaya bahwa teknologi terbaik adalah yang mampu memadukan logika yang kokoh dengan antarmuka yang intuitif bagi pengguna.
          </p>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a 
              href="/cv farhan new.pdf" 
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full text-sm transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            >
              <FiDownload size={16} /> Download CV
            </a>
          </motion.div>
        </motion.div>

        
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-cyan-500/50 transition-colors"
              >
                <div className="text-2xl font-black text-cyan-400 font-mono">{stat.number}</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400">{stat.title}</div>
              </motion.div>
            ))}
          </div>

         
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-6 rounded-2xl bg-cyan-900/10 border border-cyan-500/20 text-center"
          >
            <p className="text-sm font-bold text-cyan-100 italic">"AD ASTRA PER ASPERA"</p>
            <p className="text-[10px] text-cyan-500/70 uppercase tracking-widest mt-1">Menuju Bintang Melalui Kesulitan</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}