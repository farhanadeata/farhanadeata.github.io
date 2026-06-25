"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiFolder, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

// Tempatkan semua proyek Anda di sini
import { allProjects } from "./projectData"; // Sesuaikan path-nya

export default function Projects() {
  const featuredProjects = allProjects.slice(0, 2); // Hanya ambil 2

  return (
    <section id="projects" className="max-w-6xl mx-auto py-32 px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black mb-4">
        Featured <span className="text-cyan-400">Projects</span>
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {featuredProjects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500"
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

          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tag) => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full transition-all hover:bg-cyan-500/20">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Navigasi ke halaman semua proyek */}
    <div className="text-center mt-16">
      <Link 
        href="/projects" 
        className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-all group"
      >
        Lihat Semua Proyek 
        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </section>
  );
}

 