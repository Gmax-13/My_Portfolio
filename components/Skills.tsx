
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { SKILLS, ANIMATION_VARIANTS } from '../constants';

export const Skills: React.FC = () => {
  // Precompute random delays once — avoids Math.random() on every render
  const streakDelays = useMemo(() => {
    return Object.values(SKILLS).map(items => items.map(() => Math.random() * 2));
  }, []);

  return (
    <section id="skills" className="py-24 container mx-auto px-6">
      <SectionHeading title="Inventory" subtitle="Technological arsenal and proficiencies" />
      
      <div className="grid lg:grid-cols-3 gap-10">
        {Object.entries(SKILLS).map(([category, items], idx) => (
          <motion.div
            key={category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="glass-morphism rounded-2xl p-8 border border-white/5"
          >
            <h3 className="text-2xl font-bold mb-8 text-white uppercase tracking-widest font-mono flex items-center gap-3">
              <span className="text-neonCyan">#</span>
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            
            <div className="space-y-6">
              {items.map((skill, skillIdx) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium flex items-center gap-2">
                      <span>{skill.icon}</span> {skill.name}
                    </span>
                    <span className="text-neonPurple font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className={`h-full rounded-full relative overflow-hidden bg-gradient-to-r ${
                        idx === 0 ? 'from-neonCyan to-neonBlue' : 
                        idx === 1 ? 'from-neonPurple to-neonBlue' : 
                        'from-neonCyan to-neonPurple'
                      }`}
                    >
                      <motion.div
                        initial={{ left: '-100%' }}
                        animate={{ left: '100%' }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "linear",
                          delay: streakDelays[idx]?.[skillIdx] ?? 0
                        }}
                        className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
