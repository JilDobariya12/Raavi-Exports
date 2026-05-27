import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, COMPANY_INFO } from '../data/constants';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
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
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-brown-900 font-bold text-xl shadow-lg group-hover:shadow-gold-500/50 transition-shadow">
            R
          </div>
          <div>
            <h1 className="text-xl font-serif font-bold text-cream-100 tracking-wider uppercase">{COMPANY_INFO.name}</h1>
            <p className="text-[10px] text-gold-400 tracking-widest uppercase">{COMPANY_INFO.tagline}</p>
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
              {link.title}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a href="#contact" className="premium-button">Get a Quote</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl text-cream-100 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
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
                  {link.title}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="premium-button text-center mt-4">
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
