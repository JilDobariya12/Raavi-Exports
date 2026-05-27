import React from 'react';
import { motion } from 'framer-motion';
import { STATISTICS } from '../data/constants';

const About = () => {
  return (
    <section id="about" className="py-24 bg-brown-800 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden relative group">
              <img 
                src="https://raaviexports.com/wp-content/uploads/2024/05/pexels-pixabay-277253-scaled.jpg" 
                alt="Premium Spices Collection" 
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brown-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brown-900 border border-gold-600/30 rounded-full flex flex-col items-center justify-center p-6 text-center z-10 hidden md:flex">
              <span className="text-4xl font-serif text-gold-500 mb-2">15+</span>
              <span className="text-xs uppercase tracking-widest text-cream-100/80">Years of<br/>Excellence</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h4 className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4">About Raavi Exports</h4>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-8 leading-tight">
              A Legacy of <span className="text-gold-400 font-style-italic">Flavor</span> & Global Excellence
            </h2>
            
            <p className="text-cream-100/70 mb-6 font-light leading-relaxed text-lg">
              We are passionate curators of India's finest spices, dedicated to bringing authentic, rich flavors to kitchens worldwide. Our journey began with a simple mission: to export not just spices, but the very essence of culinary heritage.
            </p>
            
            <p className="text-cream-100/70 mb-12 font-light leading-relaxed text-lg">
              Through sustainable farming practices, rigorous quality control, and state-of-the-art processing, we ensure that every grain retains its natural oil, aroma, and intensity. Discover our trusted formulations crafted with care for culinary excellence.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-brown-700/50">
              {STATISTICS.map((stat, index) => (
                <motion.div 
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  className="flex flex-col gap-2"
                >
                  <span className="text-3xl font-serif text-gold-500 font-bold">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest text-cream-100/60 leading-tight">{stat.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
