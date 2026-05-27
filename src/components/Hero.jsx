import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/constants';

function SpiceParticles(props) {
  const ref = useRef();
  // Generate random positions in a sphere
  const sphere = useMemo(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    // Gentle rotation
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#DAA520" // Gold tint for spices
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-brown-900 flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <SpiceParticles />
        </Canvas>
      </div>

      {/* Gradient Overlays for depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brown-900/40 via-transparent to-brown-900/90 pointer-events-none"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brown-900/80 via-brown-900/20 to-brown-900/80 pointer-events-none"></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 text-center mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold-500 font-medium tracking-[0.3em] uppercase text-sm mb-6"
        >
          {COMPANY_INFO.tagline}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cream-100 mb-8 max-w-5xl mx-auto leading-tight"
        >
          Delivering Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Indian Spices</span> Worldwide
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-cream-100/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          {COMPANY_INFO.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#products" className="premium-button w-full sm:w-auto">Explore Products</a>
          <a href="#contact" className="outline-button w-full sm:w-auto">Contact Us</a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest text-gold-500/70">Scroll Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-gold-500/70 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
