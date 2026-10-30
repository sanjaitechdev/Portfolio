import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Sparkles, Radio, ArrowUpRight, ChevronRight, Download, Send } from 'lucide-react';
import bgVideo from '../assets/enaku_intha_photo_pesara_amri.mp4';
import LiquidWaveText from '../components/LiquidWaveText';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-black text-white pt-28 sm:pt-32 lg:pt-24 pb-16"
    >
      {/* 1. Large High-Impact Video Background on Right (Expanded Top & Left) */}
      <div className="absolute right-0 top-0 bottom-0 h-full w-full lg:w-[66vw] xl:w-[62vw] 2xl:w-[58vw] flex items-end justify-center lg:justify-end z-0 pointer-events-auto pt-0 pb-0 pr-0 lg:pr-2 bg-black overflow-hidden">
        <video
          ref={videoRef}
          src={bgVideo}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="h-full max-h-[100vh] lg:max-h-[100vh] xl:max-h-[100vh] w-auto max-w-full object-contain object-bottom lg:object-right-bottom select-none bg-black scale-105 lg:scale-110 xl:scale-115 origin-bottom-right -translate-y-[30px]"
        />

        {/* Soft edge blend gradient */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none z-10" />
      </div>

      {/* 2. Transparent Floating Content Layer over Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full relative z-10 pointer-events-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[85vh]">

          {/* Left Text Container Floating Transparently with Clearance below Navbar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:max-w-[580px] xl:max-w-[640px] flex flex-col justify-center text-left pt-14 sm:pt-16 lg:pt-10 pb-6 z-20"
          >
            {/* Top Red Label: HELLO! I'M */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-[#E3280C] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                HELLO! I'M
              </span>
            </motion.div>

            {/* Massive Main Name: SANJAI.K with Interactive Liquid Wave Distortion */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-sans font-black tracking-tight leading-[0.95] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] mb-3 uppercase"
            >
              <LiquidWaveText text="SANJAI" accent=".K" />
            </motion.h1>

            {/* Role Sub-Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl font-sans font-black tracking-tight text-white mb-4 leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            >
              Software Engineer <span className="text-[#E3280C]">|</span> Full Stack Developer
            </motion.h2>

            {/* Summary Bio from Resume */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm sm:text-base lg:text-lg text-neutral-200 leading-relaxed font-sans max-w-xl mb-6 font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              Aspiring Software Engineer skilled in full-stack web development, Java programming, the MERN Stack (MongoDB, Express.js, React.js, Node.js), and AI systems. Strong foundation in Data Structures, OOP, RESTful APIs, and building scalable, reliable software.
            </motion.p>

            {/* Key Checkmark List from Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="space-y-2.5 mb-8"
            >
              <div className="flex items-center gap-3 text-xs sm:text-sm font-sans font-semibold text-neutral-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                <span className="text-[#E3280C] font-black text-base leading-none">✓</span>
                <span>Full Stack Web Development with React.js, Node.js & MERN Stack</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-sans font-semibold text-neutral-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                <span className="text-[#E3280C] font-black text-base leading-none">✓</span>
                <span>Java 21, Spring Boot 3, Spring Data JPA & Robust REST APIs</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-sans font-semibold text-neutral-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                <span className="text-[#E3280C] font-black text-base leading-none">✓</span>
                <span>AI System Integration (OpenAI SDK, Groq Llama 3.3 70B & ML)</span>
              </div>
            </motion.div>

            {/* Action CTA Buttons matching Reference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3.5 mb-6"
            >
              {/* 1. Primary Red Pill Button: BOOK A CALL */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E3280C] hover:bg-[#c82209] text-white font-sans font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-red-600/35 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>BOOK A CALL</span>
                <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* 2. Secondary Dark Pill Button: FREE WEBSITE AUDIT */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#111111]/90 hover:bg-neutral-900 border border-white/20 hover:border-white/40 text-white font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
              >
                <span>FREE WEBSITE AUDIT</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-neutral-300" />
              </a>

              {/* 3. Dark Pill Button: DOWNLOAD CV */}
              <a
                href="/Sanjai_K_Resume.pdf"
                download="Sanjai_K_Resume.pdf"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#111111]/90 hover:bg-neutral-900 border border-white/20 hover:border-white/40 text-white font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
              >
                <span>DOWNLOAD CV</span>
                <Download size={14} className="group-hover:translate-y-0.5 transition-transform text-neutral-300" />
              </a>
            </motion.div>

            {/* Sound & Video Controller Floating Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-black/75 border border-white/20 text-xs font-mono text-neutral-200 w-fit backdrop-blur-md shadow-2xl"
            >
              <button
                onClick={toggleMute}
                className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
                title={isMuted ? "Click to Unmute Voice" : "Click to Mute Voice"}
              >
                <span className={`w-2 h-2 rounded-full ${!isMuted && isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-[#E3280C]'}`} />
                <span className="font-bold">
                  {isMuted ? 'Click to Unmute Voice' : 'Voice Playing'}
                </span>
                {isMuted ? <VolumeX size={14} className="group-hover:scale-110 transition-transform" /> : <Volume2 size={14} className="text-emerald-400 group-hover:scale-110 transition-transform" />}
              </button>

              <div className="w-px h-3.5 bg-white/25" />

              <button
                onClick={togglePlay}
                title={isPlaying ? "Pause Video" : "Play Video"}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>

              <button
                onClick={restartVideo}
                title="Restart Intro"
                className="hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw size={13} />
              </button>
            </motion.div>

          </motion.div>

          {/* Right Area: Interactive Play / Sound Button over Laptop */}
          <div className="hidden lg:flex flex-col justify-end items-end h-[70vh] pointer-events-auto pr-4 xl:pr-8">

            {/* Interactive Play/Unmute Button over Laptop in Video */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mb-8 flex flex-col items-center"
            >
              <motion.button
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.94 }}
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute Voice" : "Pause Voice"}
                className="relative group cursor-pointer flex flex-col items-center"
              >
                {!isMuted && isPlaying && (
                  <span className="absolute -inset-2.5 rounded-full bg-red-500/60 animate-ping" />
                )}

                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E3280C] to-[#8E0C10] border-2 border-white/60 shadow-2xl shadow-black flex items-center justify-center text-white transition-all duration-300 group-hover:shadow-red-500/80 group-hover:border-white">
                  {!isMuted && isPlaying ? (
                    <Pause size={22} className="fill-white" />
                  ) : (
                    <Play size={22} className="fill-white translate-x-0.5" />
                  )}
                </div>

                <span className="mt-1 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {!isMuted && isPlaying ? 'PAUSE' : 'PLAY INTRO'}
                </span>
              </motion.button>
            </motion.div>

            {/* Voice Active Tag */}
            <AnimatePresence>
              {!isMuted && isPlaying && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-black/90 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full shadow-2xl flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4"
                >
                  <Radio size={12} className="animate-pulse" />
                  <span>Voice Introduction Active</span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>

      {/* 3. Bottom Organic Curved Wave Section Divider into About */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 lg:h-18 text-[#F9FAFB] preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z"
            fill="currentColor"
          />
        </svg>

        {/* Center Pill / Section Separator Badge */}
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-300 hover:border-[#E3280C] text-[11px] font-mono text-neutral-800 shadow-md transition-all hover:scale-105"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E3280C] animate-pulse" />
            <span className="font-bold tracking-wider uppercase text-neutral-900">About Sanjai</span>
            <span className="text-neutral-500 group-hover:translate-y-0.5 transition-transform">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
