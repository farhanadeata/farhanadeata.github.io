"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiX, FiMaximize2 } from "react-icons/fi";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

// 1. DATA PUSAT: Cukup tambah objek di sini
const certificates = [
  { 
    id: 1, 
    title: "Cloud Computing AWS", 
    desc: "Sertifikasi fundamental untuk arsitektur cloud dan layanan AWS.", 
    image: "/cert1.png" 
  },
  { 
    id: 2, 
    title: "Flutter Mastery", 
    desc: "Pengembangan aplikasi mobile lintas platform dengan performa tinggi.", 
    image: "/cert2.png" 
  },
  { 
    id: 3, 
    title: "Linux SysAdmin", 
    desc: "Manajemen server, keamanan jaringan, dan otomatisasi berbasis Linux.", 
    image: "/cert3.png" 
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
        <Link 
  href="/" 
  className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-12 transition-colors group"
>
  <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Beranda
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
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
          >
            <motion.div
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl bg-white/5 p-4 rounded-3xl border border-white/10"
            >
              <button className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors">
                <FiX size={32} />
              </button>
              <Image src={selectedCert.image} alt={selectedCert.title} width={1200} height={800} className="rounded-2xl w-full h-auto" />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold">{selectedCert.title}</h3>
                <p className="text-gray-400">{selectedCert.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}