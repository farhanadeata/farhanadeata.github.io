"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
// Pastikan path import ini sesuai dengan lokasi file data Anda
import { allProjects } from "../../components/projectData"; 

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Tombol Back dengan animasi */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-12 transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Beranda
          </Link>
        </motion.div>

        {/* Header dengan efek fade-in */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Semua <span className="text-cyan-400">Proyek</span>
          </h1>
          <p className="text-gray-400 max-w-xl text-lg">
            Dokumentasi lengkap dari seluruh inisiatif teknis, eksperimen IoT, dan pengembangan sistem yang telah saya kerjakan.
          </p>
        </motion.div>

        {/* Grid Proyek dengan stagger effect */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
                  <FiFolder size={24} />
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FiGithub className="text-gray-500 hover:text-white cursor-pointer transition-colors" size={20} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink className="text-gray-500 hover:text-white cursor-pointer transition-colors" size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}