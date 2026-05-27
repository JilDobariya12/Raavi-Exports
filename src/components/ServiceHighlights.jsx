import React from 'react';
import { motion } from 'framer-motion';
import { SERVICE_HIGHLIGHTS } from '../data/constants';
import { useTranslation } from 'react-i18next';

const serviceIcons = {
  seasoning: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
    </svg>
  ),
  flavor: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  special: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  )
};

const serviceImages = {
  seasoning: 'https://raaviexports.com/wp-content/uploads/2024/06/New-Project-4.png',
  flavor: 'https://raaviexports.com/wp-content/uploads/2024/06/New-Project-5.png',
  special: 'https://raaviexports.com/wp-content/uploads/2024/06/New-Project-6.png'
};

const ServiceHighlights = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-brown-900 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brown-800 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brown-800 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h4 className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4">
            {t('services.badge')}
          </h4>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-6">
            {t('services.headline')}
          </h2>
          <p className="text-cream-100/60 max-w-2xl mx-auto font-light text-lg">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {SERVICE_HIGHLIGHTS.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative bg-brown-800/80 border border-brown-700/40 rounded-sm p-8 h-full transition-all duration-500 hover:border-gold-500/30 hover:bg-brown-800">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Service Image */}
                <div className="relative mb-6 h-48 rounded-sm overflow-hidden bg-brown-900/50">
                  <img
                    src={serviceImages[service.id]}
                    alt={t(`about.highlights.${service.id}.title`)}
                    className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110 p-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-800/60 to-transparent"></div>
                </div>

                {/* Icon */}
                <div className="relative w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 mb-5 group-hover:bg-gold-500/20 transition-colors duration-300">
                  {serviceIcons[service.id]}
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-serif font-semibold text-cream-100 mb-3 group-hover:text-gold-400 transition-colors duration-300">
                    {t(`about.highlights.${service.id}.title`)}
                  </h3>
                  <p className="text-cream-100/60 font-light leading-relaxed">
                    {t(`about.highlights.${service.id}.description`)}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
