"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiX, FiMaximize2 } from "react-icons/fi";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";


const certificates = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    desc: "Sertifikasi Oracle yang memvalidasi pemahaman dasar mengenai Artificial Intelligence (AI), Machine Learning, Generative AI, serta implementasinya pada Oracle Cloud Infrastructure.",
    image: "/oracle.png",
  },
  {
    id: 2,
    title: "Program Pemagangan Nasional Kemnaker",
    desc: "Mengikuti program pemagangan nasional yang diselenggarakan oleh Kementerian Ketenagakerjaan Republik Indonesia untuk meningkatkan kompetensi, pengalaman kerja, dan kesiapan profesional di dunia industri.",
    image: "/magang.png",
  },
  {
    id: 3,
    title: "Introduction to Cloud Computing",
    desc: "Memahami konsep dasar komputasi awan, model layanan cloud (IaaS, PaaS, SaaS), virtualisasi, serta penerapan cloud dalam mendukung infrastruktur teknologi informasi modern.",
    image: "/cloud.png",
  },
  {
    id: 4,
    title: "Fundamental Cybersecurity",
    desc: "Mempelajari konsep dasar keamanan siber, termasuk ancaman digital, manajemen risiko, keamanan jaringan, perlindungan data, dan praktik terbaik dalam menjaga keamanan sistem informasi.",
    image: "/fundamental.png",
  },
  {
    id: 5,
    title: "Social Media Management untuk Brand Digital",
    desc: "Mempelajari strategi pengelolaan media sosial, perencanaan konten, pengembangan identitas merek, analisis performa, serta optimalisasi pemasaran digital untuk meningkatkan engagement.",
    image: "/social.png",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
        <Link 
  href="/" 
  className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 group"
>
  <motion.div
    whileHover={{ x: -5 }} 
    className="flex items-center"
  >
    <FiArrowLeft size={20} />
  </motion.div>
  
  <span className="relative">
    Kembali ke Beranda
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
  </span>
</Link>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          Professional <span className="text-cyan-400">Certifications</span>
        </h2>
        <p className="text-gray-400">Bukti validasi kompetensi teknis yang telah saya raih.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedCert(cert)}
            className="group relative bg-white/5 border border-white/10 rounded-3xl p-6 cursor-pointer hover:border-cyan-500/50 transition-all overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
              <Image src={cert.image} alt={cert.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <FiMaximize2 className="text-white" size={32} />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
            <p className="text-gray-400 text-sm">{cert.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview */}
<AnimatePresence>
  {selectedCert && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedCert(null)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat klik gambar
        className="relative w-full max-w-3xl bg-black border border-white/10 p-4 md:p-6 rounded-3xl shadow-2xl"
      >
        {/* Tombol Close */}
        <button 
          onClick={() => setSelectedCert(null)}
          className="absolute -top-12 right-0 md:-right-12 text-white hover:text-cyan-400 transition-colors"
        >
          <FiX size={32} />
        </button>

        {/* Image Container dengan Max-Height */}
        <div className="relative w-full max-h-[60vh] overflow-hidden rounded-2xl">
          <Image 
            src={selectedCert.image} 
            alt={selectedCert.title} 
            width={1200} 
            height={800} 
            className="w-full h-full object-contain" 
          />
        </div>

        {/* Text Container */}
        <div className="mt-6 text-center px-2">
          <h3 className="text-xl md:text-2xl font-bold mb-2">{selectedCert.title}</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3">
            {selectedCert.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
}