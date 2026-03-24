
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  "Data Scientist",
  "ML Engineer",
  "Full-Stack Developer",
  "Computer Engineer"
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonCyan opacity-10 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonPurple opacity-10 blur-[120px] rounded-full animate-pulse-slow" />

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-neonCyan font-mono mb-4 text-lg tracking-widest uppercase">Greetings, I am</p>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-6 leading-tight font-sans tracking-tight flex flex-col items-center">
            <span className="block">SAVIO DAVID</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-neonCyan via-neonPurple to-neonBlue">
              CHIRIYANKANDATH
            </span>
          </h1>
          
          <div className="h-12 flex items-center justify-center mb-10">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl text-gray-300 font-mono"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-neonCyan text-neonCyan font-bold uppercase tracking-wider rounded-lg glass-morphism hover:bg-neonCyan hover:text-dark transition-all duration-300 neon-glow-cyan"
            >
              View Projects
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1G7DiuuxhHd-Mol-_uJquBRnE5ctJEy5J/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-neonPurple text-white font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-neonPurple/50 transition-all duration-300"
            >
              Download Resume
            </motion.a>
            <motion.a
              href="https://github.com/Gmax-13"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-white/20 text-gray-300 font-bold uppercase tracking-wider rounded-lg hover:border-white/40 hover:text-white transition-all duration-300"
            >
              GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center opacity-20">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-16 bg-gradient-to-b from-neonCyan to-transparent"
        />
      </div>
    </section>
  );
};
