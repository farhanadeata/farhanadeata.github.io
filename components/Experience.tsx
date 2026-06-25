"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "DEC 2025 - JUN 2026",
    title: "Public Facilities & IT Support Intern",
    company: "Rutan Kelas IIB Baturaja (Kemnaker)",
    desc: "Digitalisasi arsip tamu instansi melalui pengembangan SI-KUDI dan dukungan teknis operasional.",
  },
  {
    year: "JUL 2025 - DEC 2025",
    title: "Infrastructure & Network Administrator",
    company: "Prodi Informatika - UNBARA",
    desc: "Membangun infrastruktur NAS berbasis Armbian & Nextcloud untuk sentralisasi data akademik pada program studi informatika.",
  },
  {
    year: "FEB 2025 - PRESENT",
    title: "Lead Technical Mentor",
    company: "KodingKA Indonesia",
    desc: "Membimbing fundamental pemrograman, logika problem-solving, dan proyek digital siswa.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-4 md:px-6 w-full max-w-5xl mx-auto overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-2">Track Record</h2>
        <h3 className="text-4xl md:text-5xl font-black text-white">Professional Journey</h3>
      </div>

      <div className="relative">
        {/* Garis Tengah - z-0 ditaruh di belakang kartu */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 z-0" />

        <div className="space-y-12">
          {experiences.map((item, index) => (
            <div key={index} className="relative flex items-start gap-6 md:gap-8 md:justify-between md:odd:flex-row-reverse group">
              
              {/* Dot Indicator - z-10 agar selalu di atas garis */}
              <div className="absolute left-[13px] md:left-[calc(50%-7px)] top-6 w-4 h-4 rounded-full bg-black border-4 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)] z-10" />

              {/* Content Container - Z-20 agar teks tidak bisa tertutup garis */}
              <div className="w-[calc(100%-45px)] md:w-[calc(50%-40px)] z-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/80 backdrop-blur-sm p-5 md:p-6 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all hover:bg-white/5"
                >
                  <div className="text-cyan-400 font-bold font-mono text-[10px] md:text-xs mb-1 uppercase">
                    {item.year || "PRESENT"}
                  </div>
                  <h4 className="text-md md:text-lg font-bold text-white leading-tight mb-1">{item.title}</h4>
                  <div className="text-[11px] md:text-xs font-semibold text-gray-500 mb-3">{item.company}</div>
                  <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>
              
              {/* Spacer */}
              <div className="hidden md:block w-[calc(50%-40px)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}