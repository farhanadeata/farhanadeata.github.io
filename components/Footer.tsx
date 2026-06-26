export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-1">Farhan Ade Atalarik</h4>
            <p className="text-gray-500 text-sm">Building digital solutions with passion.</p>
          </div>
  
          
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="/sertifikat" className="hover:text-cyan-400 transition-colors">Certificates</a>
            
          </div>
  
         
          <div className="text-center md:text-right text-xs text-gray-600">
            <p>© {currentYear} All rights reserved.</p>
            
          </div>
        </div>
      </footer>
    );
  }