
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';

const SOCIALS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/savio-david031' },
  { name: 'GitHub', href: 'https://github.com/Gmax-13' },
  { name: 'Email', href: 'mailto:saviodavid031@gmail.com' },
];

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens the user's mail client with pre-filled fields as a fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:saviodavid031@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 container mx-auto px-6">
      <SectionHeading title="Connect" subtitle="Reach out for collaborations or inquiries" />
      
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">SOCIALS</h3>
            <div className="flex flex-wrap gap-4">
              {SOCIALS.map((platform) => (
                <motion.a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: '#00f2ff' }}
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-400 font-medium transition-all"
                >
                  {platform.name}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="glass-morphism p-8 rounded-2xl border border-white/5">
            <h4 className="text-neonCyan font-mono uppercase tracking-widest mb-4">Direct Link</h4>
            <p className="text-gray-300 text-lg mb-2">saviodavid031@gmail.com</p>
            <p className="text-gray-500">+91 7738906931</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass-morphism p-10 rounded-2xl border border-white/10">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-gray-400 font-mono text-sm mb-2 uppercase">Your Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonCyan transition-all"
                      placeholder="Identify yourself..."
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 font-mono text-sm mb-2 uppercase">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonCyan transition-all"
                      placeholder="Where can I reply?"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 font-mono text-sm mb-2 uppercase">Transmission</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonCyan transition-all resize-none"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-neonCyan text-dark font-bold uppercase tracking-widest rounded-lg neon-glow-cyan"
                  >
                    SEND TRANSMISSION
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-neonCyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl text-neonCyan">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Transmission Received</h3>
                  <p className="text-gray-400">Your mail client has been opened with the message pre-filled. I'll get back to you shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
