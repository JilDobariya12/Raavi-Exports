import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../data/constants';

const Certifications = () => {
  return (
    <section className="py-24 bg-brown-900 relative border-t border-brown-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4"
            >
              Trust & Quality
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-5xl font-serif font-bold text-cream-100"
            >
              Our Certifications
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-cream-100/60 font-light max-w-md"
          >
            Our commitment to unmatched quality and safety is backed by leading global and national food safety standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream-100/5 rounded-sm p-8 flex items-center justify-center border border-cream-100/10 hover:border-gold-500/30 hover:bg-cream-100/10 transition-all duration-300 group aspect-square"
            >
              <img 
                src={cert.image} 
                alt={cert.name} 
                className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 filter drop-shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
