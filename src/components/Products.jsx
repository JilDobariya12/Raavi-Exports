import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../data/constants';

const Products = () => {
  return (
    <section id="products" className="py-24 bg-brown-900 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Our Collection
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-6"
          >
            Premium Export Spices
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-cream-100/70 font-light"
          >
            Discover our comprehensive range of meticulously processed spices, guaranteed to elevate any culinary creation with authentic flavor profiles.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[400px] rounded-sm overflow-hidden bg-brown-800 flex flex-col justify-end p-8 border border-brown-700/50 hover:border-gold-600/50 transition-colors duration-500"
            >
              {/* Product Image - Centered and floating */}
              <div className="absolute inset-0 flex items-center justify-center p-12 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out z-0">
                <img src={product.image} alt={product.title} className="max-h-full object-contain filter drop-shadow-2xl" />
              </div>
              
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900 via-brown-900/60 to-transparent z-10 opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-gold-400 uppercase tracking-widest mb-2 block">{product.category}</span>
                <h3 className="text-2xl font-serif font-bold text-cream-100 mb-3">{product.title}</h3>
                <p className="text-cream-100/70 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {product.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  <a href="#contact" className="text-gold-500 hover:text-gold-400 text-sm tracking-wider uppercase font-medium flex items-center gap-2">
                    Inquire Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
