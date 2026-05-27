import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, COMPANY_INFO } from '../data/constants';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brown-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative h-12 w-auto md:h-16 flex items-center bg-cream-50/10 px-3 py-1 rounded-lg backdrop-blur-sm border border-cream-100/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:bg-cream-50/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <img 
              src={COMPANY_INFO.logo} 
              alt={COMPANY_INFO.name} 
              className="h-full w-auto object-contain drop-shadow-md filter brightness-110 contrast-125"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="text-sm font-medium text-cream-100/80 hover:text-gold-400 transition-colors uppercase tracking-wider relative group"
            >
              {t(`nav.${link.id}`)}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <LanguageSwitcher />
          <a href="#contact" className="premium-button">{t('nav.quote')}</a>
        </div>

        {/* Mobile Menu Toggle & Mobile Language */}
        <div className="lg:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            className="text-2xl text-cream-100 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brown-800/95 backdrop-blur-xl border-t border-brown-700/50"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-cream-100 hover:text-gold-400 transition-colors uppercase tracking-widest"
                >
                  {t(`nav.${link.id}`)}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="premium-button text-center mt-4">
                {t('nav.quote')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
