import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/constants';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const getTestimonialKey = (id) => {
    switch (id) {
      case 1: return 'jitu';
      case 2: return 'hardik';
      case 3: return 'prashant';
      default: return '';
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) return TESTIMONIALS.length - 1;
      if (next >= TESTIMONIALS.length) return 0;
      return next;
    });
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section className="py-24 bg-brown-950 relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            {t('testimonials.badge')}
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-6"
          >
            {t('testimonials.headline')}
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto relative" 
             onMouseEnter={() => setIsPaused(true)} 
             onMouseLeave={() => setIsPaused(false)}>
          
          <div className="bg-brown-900/60 backdrop-blur-xl border border-brown-700/50 rounded-2xl p-8 md:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative min-h-[450px] md:min-h-[350px] flex items-center">
            
            {/* Background Quote Icon */}
            <FaQuoteLeft className="absolute top-10 left-10 text-9xl text-brown-800/20 z-0" />

            <div className="relative z-10 w-full overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full cursor-grab active:cursor-grabbing"
                >
                  {/* Left: Image */}
                  <div className="w-full md:w-5/12 flex justify-center md:justify-end shrink-0">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-gold-500/20 shadow-[0_0_40px_rgba(218,165,32,0.1)] group">
                      <div className="absolute inset-0 bg-brown-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <img 
                        src={TESTIMONIALS[currentIndex].image} 
                        alt={t(`testimonials.items.${getTestimonialKey(TESTIMONIALS[currentIndex].id)}.name`)}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        draggable="false"
                      />
                    </div>
                  </div>
                  
                  {/* Right: Content */}
                  <div className="w-full md:w-7/12 text-center md:text-left flex flex-col justify-center">
                    <p className="text-xl md:text-2xl lg:text-3xl font-light text-cream-100/90 italic leading-relaxed mb-8">
                      {t(`testimonials.items.${getTestimonialKey(TESTIMONIALS[currentIndex].id)}.text`)}
                    </p>
                    
                    <div>
                      <h5 className="text-xl font-serif text-cream-100 mb-1 tracking-wide">
                        {t(`testimonials.items.${getTestimonialKey(TESTIMONIALS[currentIndex].id)}.name`)}
                      </h5>
                      <span className="text-sm text-gold-400 uppercase tracking-[0.15em] font-medium">
                        {t(`testimonials.items.${getTestimonialKey(TESTIMONIALS[currentIndex].id)}.designation`)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Arrow Controls */}
            <button 
              onClick={() => paginate(-1)}
              className="absolute left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-brown-800 border border-brown-600 rounded-full flex items-center justify-center text-cream-100 hover:bg-gold-500 hover:text-brown-950 transition-all duration-300 z-20 shadow-lg"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={() => paginate(1)}
              className="absolute right-4 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-brown-800 border border-brown-600 rounded-full flex items-center justify-center text-cream-100 hover:bg-gold-500 hover:text-brown-950 transition-all duration-300 z-20 shadow-lg"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>

          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === currentIndex ? 'bg-gold-500 w-8' : 'bg-brown-600 w-2 hover:bg-gold-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
