import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/constants';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-brown-900 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Testimonial
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-6"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Decorative quotes */}
          <div className="absolute -top-10 -left-10 text-8xl text-brown-800 opacity-50 font-serif leading-none">"</div>
          <div className="absolute -bottom-10 -right-10 text-8xl text-brown-800 opacity-50 font-serif leading-none transform rotate-180">"</div>

          <div className="bg-brown-800/50 backdrop-blur-md border border-brown-700 rounded-sm p-10 md:p-16 relative z-10 shadow-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <p className="text-xl md:text-2xl font-light text-cream-100/90 italic leading-relaxed mb-10">
                  {TESTIMONIALS[currentIndex].text}
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500 mb-4 shadow-[0_0_15px_rgba(218,165,32,0.3)]">
                    <img 
                      src={TESTIMONIALS[currentIndex].image} 
                      alt={TESTIMONIALS[currentIndex].name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h5 className="text-lg font-serif text-cream-100">{TESTIMONIALS[currentIndex].name}</h5>
                  <span className="text-xs text-gold-400 uppercase tracking-widest">{TESTIMONIALS[currentIndex].designation}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gold-500 w-6' : 'bg-brown-600 hover:bg-gold-500/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
