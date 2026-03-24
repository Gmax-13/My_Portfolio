
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { EDUCATION_LIST } from '../constants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 container mx-auto px-6">
      <SectionHeading title="Knowledge.db" subtitle="Academic background and performance" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EDUCATION_LIST.map((edu, idx) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-morphism p-8 rounded-2xl border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <span className="text-8xl font-black font-mono">0{idx + 1}</span>
            </div>
            
            <span className="text-neonCyan font-mono text-xs uppercase tracking-widest mb-4 block">
              {edu.period}
            </span>
            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
              {edu.institution}
            </h3>
            <p className="text-gray-400 text-sm mb-6">{edu.degree}</p>
            
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-white font-mono">
                {edu.cgpa || edu.score?.split('%')[0]}
              </span>
              <span className="text-neonPurple font-mono mb-1">
                {edu.cgpa ? 'CGPA' : '% Score'}
              </span>
            </div>
            
            {/* Visual indicator for performance */}
            <div className="mt-4 h-1 w-full bg-white/5 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${edu.cgpa ? (parseFloat(edu.cgpa) / 10) * 100 : parseFloat(edu.score ?? '0')}%` }}
                viewport={{ once: true }}
                className="h-full bg-neonPurple rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
