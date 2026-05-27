/* Designed & Developed by Jil Dobariya */
import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Products = lazy(() => import('./components/Products'));
const ExportExperience = lazy(() => import('./components/ExportExperience'));
const ServiceHighlights = lazy(() => import('./components/ServiceHighlights'));
const Certifications = lazy(() => import('./components/Certifications'));
const Process = lazy(() => import('./components/Process'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-brown-900 text-cream-100 font-sans selection:bg-gold-500 selection:text-brown-900">
      <Navbar />
      
      <main>
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-gold-500">Loading premium experience...</div>}>
          <Hero />
          <About />
          <Products />
          <ServiceHighlights />
          <ExportExperience />
          <Process />
          <Certifications />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
