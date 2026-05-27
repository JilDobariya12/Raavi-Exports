import React from 'react';
import { motion } from 'framer-motion';
import { STATISTICS, COMPANY_INFO } from '../data/constants';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const getStatTranslationKey = (id) => {
    switch (id) {
      case 1: return 'about.stats.experience';
      case 2: return 'about.stats.countries';
      case 3: return 'about.stats.products';
      case 4: return 'about.stats.clients';
      default: return '';
    }
  };

  const aboutPoints = [
    t('about.point1'),
    t('about.point2'),
    t('about.point3'),
  ];

  return (
    <section id="about" className="py-24 bg-brown-800 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.5) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
              <span className="text-xs uppercase tracking-widest text-cream-100/80 whitespace-pre-line">{t('about.excellence_badge')}</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h4 className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4">{t('about.badge')}</h4>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-8 leading-tight">
              {t('about.headline')} <span className="text-gold-400 font-style-italic">{t('about.headline_italic')}</span> {t('about.headline_rest')}
            </h2>
            
            <p className="text-cream-100/70 mb-6 font-light leading-relaxed text-lg">
              {t('about.p1')}
            </p>
            
            <p className="text-cream-100/70 mb-8 font-light leading-relaxed text-lg">
              {t('about.p2')}
            </p>

            {/* Key Points from original site */}
            <div className="space-y-3 mb-10">
              {aboutPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-5 h-5 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-cream-100/70 font-light leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CEO Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-5 p-5 bg-brown-900/60 border border-brown-700/40 rounded-sm backdrop-blur-sm mb-10"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500/40 flex-shrink-0">
                <img
                  src="https://raaviexports.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-05-18-at-12.09.33-AM-e1718036487632-287x300.jpeg"
                  alt={t('about.ceo_name')}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-cream-100 font-serif font-semibold text-lg">{t('about.ceo_name')}</h4>
                <p className="text-gold-500 text-sm tracking-wide">{t('about.ceo_title')}</p>
              </div>
              <div className="ml-auto hidden sm:block">
                <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Statistics */}
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
                  <span className="text-xs uppercase tracking-widest text-cream-100/60 leading-tight">{t(getStatTranslationKey(stat.id))}</span>
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
