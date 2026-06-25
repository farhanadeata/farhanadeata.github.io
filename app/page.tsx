import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background from "@/components/Background"; // Pastikan import ini sudah ada

export default function Home() {
  return (
    // 'relative' sangat penting agar z-index pada background bekerja
    <main className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30">
      
      {/* Background Animasi akan muncul di sini */}
      <Background />

      {/* Konten Utama */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
      
    </main>
  );
}