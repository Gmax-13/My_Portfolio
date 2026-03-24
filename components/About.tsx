
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 container mx-auto px-6">
      <SectionHeading title="System.log" subtitle="A brief on my technical philosophy" />
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-300 text-lg leading-relaxed font-sans"
        >
          <p>
            I am a Computer Engineering student with a deep fascination for the intersection of 
            <span className="text-neonCyan font-bold"> Data Science</span>, 
            <span className="text-neonPurple font-bold"> Machine Learning</span>, and 
            <span className="text-neonBlue font-bold"> Full-Stack Web Development</span>.
          </p>
          <p>
            My approach is inherently data-driven. Whether I'm building high-performance 
            <span className="text-white italic"> ML pipelines</span> in Scikit-learn or crafting seamless 
            <span className="text-white italic"> React-Flask integrations</span>, I focus on building real-world, 
            production-grade systems that solve complex problems efficiently.
          </p>
          <p>
            With hands-on experience in statistical analysis and applied AI, I am enthusiastic 
            about contributing to projects that leverage data to drive meaningful insights 
            and superior user experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-neonCyan to-neonPurple rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass-morphism rounded-2xl p-8 border border-white/10 h-full flex flex-col justify-center">
             <div className="flex justify-between items-center mb-6">
               <span className="text-neonCyan font-mono">stats.json</span>
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/50" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                 <div className="w-3 h-3 rounded-full bg-green-500/50" />
               </div>
             </div>
             <div className="font-mono text-sm space-y-2 text-gray-400">
               <p><span className="text-neonPurple">"location"</span>: "Mumbai, India",</p>
               <p><span className="text-neonPurple">"major"</span>: "Computer Engineering",</p>
               <p><span className="text-neonPurple">"focus"</span>: ["Predictive Models", "Full-Stack"],</p>
               <p><span className="text-neonPurple">"status"</span>: "Open to opportunities",</p>
               <p><span className="text-neonPurple">"current_gpa"</span>: 8.66</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
