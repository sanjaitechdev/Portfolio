import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Moments from './sections/Moments';
import Process from './sections/Process';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-neutral-900 selection:bg-[#E3280C] selection:text-white">
      {/* Intro Preloader Animation */}
      <AnimatePresence mode="wait">
        {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {/* Main Portfolio Content - strictly displayed after intro completes */}
      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-[#F9FAFB] min-h-screen"
        >
          <CustomCursor />
          <ScrollProgress />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Process />
            <Projects />
            <Journey />
            <Moments />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}
