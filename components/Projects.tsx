
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  // Precompute random waveform heights once per project
  const waveHeights = useMemo(() =>
    PROJECTS.map(() => Array.from({ length: 20 }, () => Math.random() * 40 + 10)),
  []);
  const waveDurations = useMemo(() =>
    PROJECTS.map(() => Array.from({ length: 20 }, () => 1.5 + Math.random())),
  []);

  return (
    <section id="projects" className="py-24 container mx-auto px-6">
      <SectionHeading title="Deployments" subtitle="Featured projects and data-driven solutions" />
      
      <div className="grid md:grid-cols-2 gap-12">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative"
          >
            {/* Outer Glow Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neonCyan via-neonPurple to-neonBlue rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
            
            <div className="relative glass-morphism rounded-2xl overflow-hidden border border-white/10 h-full flex flex-col bg-dark/40">
              
              {/* Stylized Header */}
              <div className="h-48 relative overflow-hidden bg-[#0a0a0a] border-b border-white/10">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #00f2ff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <motion.div 
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 left-6 flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-neonCyan animate-pulse" />
                  <span className="text-[10px] font-mono text-neonCyan tracking-widest uppercase">System.Online</span>
                </motion.div>

                <div className="absolute top-4 right-6 text-[10px] font-mono text-gray-600 uppercase">
                  Project_ID: {project.id.toUpperCase()}
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-black text-white/5 font-mono select-none group-hover:text-neonCyan/10 transition-colors duration-500">
                    {project.title.charAt(0)}
                  </span>
                  
                  <div className="absolute bottom-8 left-0 right-0 h-12 flex items-end justify-center gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                    {waveHeights[idx].map((h, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [10, h, 10] }}
                        transition={{ duration: waveDurations[idx][i], repeat: Infinity }}
                        className="w-1 bg-neonPurple rounded-full"
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-4 left-6 right-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-dark/80 backdrop-blur-md text-neonCyan text-[10px] rounded border border-neonCyan/30 font-mono uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-neonCyan transition-colors font-sans">
                    {project.title}
                  </h3>
                  <div className="h-px flex-grow mx-4 bg-gradient-to-r from-neonCyan/20 to-transparent" />
                </div>
                
                <p className="text-gray-400 mb-8 leading-relaxed font-sans text-sm">
                  {project.description}
                </p>
                
                <div className="mt-auto flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center py-3 bg-white/5 hover:bg-white/10 text-white text-xs font-mono font-bold rounded-lg transition-all border border-white/10 tracking-widest uppercase"
                  >
                    View Source
                  </motion.a>
                  {project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 text-center py-3 bg-neonPurple/20 hover:bg-neonPurple/40 text-neonPurple font-mono text-xs font-bold rounded-lg border border-neonPurple/30 transition-all tracking-widest uppercase"
                    >
                      Live Demo
                    </motion.a>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
