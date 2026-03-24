
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { EXPERIENCES } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 container mx-auto px-6 overflow-hidden">
      <SectionHeading title="Timeline" subtitle="Professional journey and internships" />
      
      <div className="relative">
        {/* Central Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neonCyan via-neonPurple to-transparent opacity-30 md:-translate-x-1/2" />

        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-neonCyan border-4 border-dark z-10 md:-translate-x-1/2 shadow-[0_0_10px_#00f2ff]" />

              {/* Content Card */}
              <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="glass-morphism p-8 rounded-2xl border border-white/5 hover:border-neonPurple/30 transition-colors duration-500 group">
                  <span className="text-neonPurple font-mono text-sm mb-2 block">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-neonCyan font-medium mb-6">{exp.company}</h4>
                  <ul className={`space-y-3 text-gray-400 text-sm list-none ${idx % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-neonPurple shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for vertical center alignment */}
              <div className="hidden md:block w-[10%]" />
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
