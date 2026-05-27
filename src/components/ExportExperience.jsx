import React from 'react';
import { motion } from 'framer-motion';
import { EXPORT_COUNTRIES } from '../data/constants';
import { useTranslation } from 'react-i18next';

const ExportExperience = () => {
  const { t } = useTranslation();

  return (
    <section id="export" className="py-24 bg-brown-800 relative overflow-hidden">
      {/* Background World Map Pattern (Minimalist) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 1000 500" className="w-full h-full object-cover">
          <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#DAA520" />
          </pattern>
          <rect x="0" y="0" width="1000" height="500" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            {t('export.badge')}
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-6"
          >
            {t('export.headline')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-cream-100/70 font-light"
          >
            {t('export.description')}
          </motion.p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {EXPORT_COUNTRIES.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-brown-900/50 backdrop-blur-sm border border-brown-700/50 p-6 flex flex-col items-center justify-center rounded-sm hover:border-gold-600/50 hover:bg-brown-900 transition-all duration-300 group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-gold-600 mb-4 group-hover:scale-150 group-hover:bg-gold-400 transition-all duration-300 shadow-[0_0_10px_rgba(218,165,32,0.5)]"></div>
              <span className="text-cream-100 font-medium tracking-wider text-sm">{country.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-brown-900 to-brown-800 border border-gold-600/20 rounded-sm p-10 flex flex-col md:flex-row items-center justify-between shadow-2xl"
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-serif text-cream-100 mb-2">{t('export.partner_title')}</h3>
            <p className="text-cream-100/60 font-light">{t('export.partner_desc')}</p>
          </div>
          <a href="#contact" className="premium-button whitespace-nowrap">
            {t('export.partner_btn')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExportExperience;
