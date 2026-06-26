"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link"; 

const navLinks = [
    { name: "About", href: "/#about" }, 
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Certificates", href: "/sertifikat" }, 
    { name: "Contact", href: "/#contact" },
  ];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4"
    >
      <div className="w-full max-w-4xl flex items-center justify-between px-6 py-3 rounded-full bg-black/30 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
        
      
        <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="relative w-8 h-8">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-xl tracking-tighter">
            Farhanadeata
          </span>
        </a>

       
        <div className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="relative px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300">
              {link.name}
              <motion.span className="absolute inset-0 bg-white/10 rounded-full -z-10" whileHover={{ scale: 1.1 }} />
            </a>
          ))}
        </div>
        
       
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        
        <Link 
  href="#contact" 
  className="hidden md:block bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
    >
    Hire Me
    </Link>
      </div>

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-black/90 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:hidden flex flex-col gap-4 text-center"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg py-2 hover:text-cyan-400 transition-colors">
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}