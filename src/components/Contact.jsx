import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/constants';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const getHeadlineMarkup = () => {
    const rest = t('contact.headline_rest');
    const span = t('contact.headline_span');
    const words = rest.split(' ');
    if (words.length <= 1) {
      return (
        <>
          {rest} <span className="text-gold-400 font-style-italic">{span}</span>
        </>
      );
    }
    const lastWord = words[words.length - 1];
    const otherWords = words.slice(0, -1).join(' ');
    return (
      <>
        {otherWords} <span className="text-gold-400 font-style-italic">{span}</span> {lastWord}
      </>
    );
  };

  return (
    <section id="contact" className="py-24 bg-brown-800 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4">{t('contact.badge')}</h4>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-8 leading-tight">
              {getHeadlineMarkup()}
            </h2>
            <p className="text-cream-100/70 mb-12 font-light leading-relaxed text-lg">
              {t('contact.description')}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-brown-900 border border-brown-700 flex items-center justify-center flex-shrink-0 group-hover:border-gold-500 transition-colors">
                  <i className="fas fa-map-marker-alt text-gold-500"></i>
                </div>
                <div>
                  <h5 className="text-sm uppercase tracking-widest text-cream-100/50 mb-1">{t('contact.office')}</h5>
                  <p className="text-cream-100 font-serif text-lg">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-brown-900 border border-brown-700 flex items-center justify-center flex-shrink-0 group-hover:border-gold-500 transition-colors">
                  <i className="fas fa-phone-alt text-gold-500"></i>
                </div>
                <div>
                  <h5 className="text-sm uppercase tracking-widest text-cream-100/50 mb-1">{t('contact.call')}</h5>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="text-cream-100 font-serif text-lg hover:text-gold-400 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-brown-900 border border-brown-700 flex items-center justify-center flex-shrink-0 group-hover:border-gold-500 transition-colors">
                  <i className="fas fa-envelope text-gold-500"></i>
                </div>
                <div>
                  <h5 className="text-sm uppercase tracking-widest text-cream-100/50 mb-1">{t('contact.email')}</h5>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-cream-100 font-serif text-lg hover:text-gold-400 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brown-900 border border-brown-700/50 p-8 md:p-12 rounded-sm shadow-2xl"
          >
            <h3 className="text-2xl font-serif text-cream-100 mb-8">{t('contact.form_title')}</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-cream-100/60 mb-2">{t('contact.name_label')}</label>
                  <input type="text" className="w-full bg-brown-800 border border-brown-700 text-cream-100 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-sm" placeholder={t('contact.name_placeholder')} />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-cream-100/60 mb-2">{t('contact.email_label')}</label>
                  <input type="email" className="w-full bg-brown-800 border border-brown-700 text-cream-100 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-sm" placeholder={t('contact.email_placeholder')} />
                </div>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-cream-100/60 mb-2">{t('contact.subject_label')}</label>
                <input type="text" className="w-full bg-brown-800 border border-brown-700 text-cream-100 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-sm" placeholder={t('contact.subject_placeholder')} />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-cream-100/60 mb-2">{t('contact.message_label')}</label>
                <textarea rows="4" className="w-full bg-brown-800 border border-brown-700 text-cream-100 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-sm resize-none" placeholder={t('contact.message_placeholder')}></textarea>
              </div>

              <button type="submit" className="premium-button w-full">
                {t('contact.submit')}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
