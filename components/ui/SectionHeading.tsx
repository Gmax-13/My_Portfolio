
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase font-mono">
          <span className="text-neonCyan">&lt;</span>
          {title}
          <span className="text-neonCyan">/&gt;</span>
        </h2>
        <div className="h-1 flex-grow bg-gradient-to-r from-neonCyan via-neonPurple to-transparent rounded-full opacity-30" />
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-400 text-lg max-w-2xl font-sans"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
