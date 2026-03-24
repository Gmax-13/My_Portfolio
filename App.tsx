
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-neonCyan selection:text-dark">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
            Designed & Built by <span className="text-neonCyan">Savio David</span> — {new Date().getFullYear()}
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://github.com/Gmax-13" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-neonPurple transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/savio-david031" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-neonPurple transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Background Static/Grain Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default App;
