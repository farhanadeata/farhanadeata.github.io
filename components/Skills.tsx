"use client";

import { motion } from "framer-motion";
import { FaLinux, FaDocker, FaGithub, FaWordpress, FaPhp, FaHtml5, FaCss3Alt, FaMicrosoft } from "react-icons/fa";
import { SiFlutter, SiEspressif, SiNextcloud, SiDart, SiMysql, SiTailwindcss } from "react-icons/si";

const skillCategories = [
  {
    title: "Development",
    items: [
      { name: "HTML", icon: <FaHtml5 size={20} className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt size={20} className="text-blue-500" /> },
      { name: "Flutter", icon: <SiFlutter size={20} className="text-blue-400" /> },
      { name: "Dart", icon: <SiDart size={20} className="text-cyan-400" /> },
      { name: "PHP", icon: <FaPhp size={20} className="text-indigo-400" /> },
      { name: "WordPress", icon: <FaWordpress size={20} className="text-white" /> },
      { name: "Tailwind", icon: <SiTailwindcss size={20} className="text-teal-400" /> },
    ],
  },
  {
    title: "System & Tools",
    items: [
      { name: "Linux", icon: <FaLinux size={20} className="text-gray-300" /> },
      { name: "Docker", icon: <FaDocker size={20} className="text-blue-500" /> },
      { name: "MySQL", icon: <SiMysql size={20} className="text-orange-400" /> },
      { name: "Nextcloud", icon: <SiNextcloud size={20} className="text-blue-300" /> },
      { name: "GitHub", icon: <FaGithub size={20} className="text-white" /> },
      { name: "ESP8266", icon: <SiEspressif size={20} className="text-white" /> },
      { name: "MS Office", icon: <FaMicrosoft size={20} className="text-red-500" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-black text-white uppercase tracking-tight">Tech Stack</h3>
      </div>

      {/* Grid Menyamping */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="bg-white/5 border border-white/10 p-6 rounded-3xl">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">{category.title}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-black/20 border border-white/5"
                >
                  {skill.icon}
                  <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}