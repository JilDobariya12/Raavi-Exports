import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'zh', label: '中文' },
  { code: 'ar', label: 'العربية' },
  { code: 'hi', label: 'हिन्दी' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = i18n.language || 'en';
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Set text direction and lang attribute on document element
    const shortLang = currentLang.split('-')[0];
    document.documentElement.dir = shortLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = shortLang;
  }, [currentLang]);

  useEffect(() => {
    // Click outside to close
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  const getActiveLangLabel = () => {
    const lang = LANGUAGES.find(l => l.code === currentLang || currentLang.startsWith(l.code));
    return lang ? lang.code.toUpperCase() : 'EN';
  };

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-cream-100 hover:text-gold-400 transition-all bg-brown-800/30 backdrop-blur-md border border-brown-600/50 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)] group"
      >
        <FaGlobe className="text-[14px] text-gold-500/70 group-hover:text-gold-400" />
        <span className="text-xs font-semibold uppercase tracking-widest">
          {getActiveLangLabel()}
        </span>
        <FaChevronDown className={`text-[10px] text-cream-100/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full right-0 mt-3 w-36 bg-brown-900/95 backdrop-blur-xl border border-gold-500/20 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden py-2"
          >
            {LANGUAGES.map((lang) => {
              const isActive = currentLang === lang.code || currentLang.startsWith(lang.code);
              return (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full text-left px-5 py-2.5 text-sm transition-all duration-200 ${
                    isActive 
                      ? 'text-brown-900 bg-gradient-to-r from-gold-500 to-gold-600 font-medium' 
                      : 'text-cream-100/80 hover:text-cream-100 hover:bg-brown-800'
                  }`}
                >
                  {lang.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
