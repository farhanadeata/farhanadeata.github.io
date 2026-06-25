"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { 
  FiGithub, 
  FiLinkedin, 
  FiInstagram, 
  FiYoutube, 
  FiFacebook 
} from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-32 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      {/* Foto Profil */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-12 md:mb-0 md:mr-16"
      >
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-64 h-64 md:w-80 md:h-80"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
          <Image
            src="/profile.png" 
            alt="Farhan Ade Atalarik"
            fill
            className="rounded-3xl border border-white/10 object-cover relative z-10 shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Teks Hero */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center md:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">FARHAN ADE ATALARIK</span>
        </h1>
        <h2 className="text-xl md:text-3xl font-light text-cyan-100/70 mb-4 tracking-widest">
          Information Technology Professional
        </h2>
        
        <div className="h-12 flex justify-center md:justify-start items-center">
          <TypeAnimation
            sequence={[
              "Web Developer", 2000, 
              "IoT Specialist", 2000, 
              "IT Support & Network", 2000, 
              "System Administrator", 2000
            ]}
            wrapper="span"
            className="text-lg md:text-2xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            repeat={Infinity}
          />
        </div>

      
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
        <Link 
  href="#projects" 
  className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-xl"
>
  View Projects
</Link>
          <a 
            href="mailto:fadeatalarik@gmail.com" 
            className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors backdrop-blur-md"
          >
            Contact Me
          </a>
        </div>

       
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex gap-6 justify-center md:justify-start text-gray-400"
        >
          <a href="https://github.com/farhanadeata" target="_blank" className="hover:text-white transition-all hover:scale-125"><FiGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/farhan-ade-atalarik-a6826b24b" className="hover:text-blue-500 transition-all hover:scale-125"><FiLinkedin size={24} /></a>
          <a href="https://www.instagram.com/Farhanadeata" className="hover:text-pink-500 transition-all hover:scale-125"><FiInstagram size={24} /></a>
          <a href="https://www.youtube.com/channel/UCru52Wy76kC1uONpeJOIOUQ" className="hover:text-red-500 transition-all hover:scale-125"><FiYoutube size={24} /></a>
          <a href="https://www.facebook.com/farhan1113/" className="hover:text-blue-600 transition-all hover:scale-125"><FiFacebook size={24} /></a>
          <a href="#" className="hover:text-cyan-400 transition-all hover:scale-125"><SiTiktok size={22} /></a>
        </motion.div>
      </motion.div>
    </section>
  );
}