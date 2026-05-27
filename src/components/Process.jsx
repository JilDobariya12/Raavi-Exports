import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/constants';

const Process = () => {
  return (
    <section className="py-24 bg-brown-800 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Our Process
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-6"
          >
            From Farm to Global Markets
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-brown-700 -translate-y-1/2 z-0">
            <motion.div 
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-brown-900 border-2 border-brown-700 flex items-center justify-center mb-6 relative group-hover:border-gold-500 transition-colors duration-500 shadow-xl group-hover:shadow-gold-500/20">
                  <i className={`${step.icon} text-2xl text-gold-500 group-hover:scale-110 transition-transform duration-300`}></i>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold-600 text-brown-900 font-bold flex items-center justify-center text-sm shadow-md">
                    {step.id}
                  </div>
                </div>
                
                <h3 className="text-xl font-serif text-cream-100 mb-3">{step.title}</h3>
                <p className="text-cream-100/60 font-light text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
