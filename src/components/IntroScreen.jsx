import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function IntroScreen({ onComplete }) {
  // Stages: 'counting' -> 'handwriting' -> 'wipe'
  const [stage, setStage] = useState('counting');
  const [progress, setProgress] = useState(0);
  const pathRef = useRef(null);

  // 1. COUNTING & PROGRESS RING ANIMATION (0 to 100% over ~2.4s)
  useEffect(() => {
    let startTime = null;
    const duration = 2300; // 2.3 seconds

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progressFraction = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progressFraction);
      const currentPercent = Math.round(easedProgress * 100);

      setProgress(currentPercent);

      if (progressFraction < 1) {
        requestAnimationFrame(animateCount);
      } else {
        // Switch to cursive handwriting reveal
        setTimeout(() => {
          setStage('handwriting');
        }, 120);
      }
    };

    const animFrame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  // 2. HANDWRITING & CURTAIN WIPE TIMELINE
  useEffect(() => {
    if (stage === 'handwriting') {
      const timer = setTimeout(() => {
        setStage('wipe');
      }, 1550);
      return () => clearTimeout(timer);
    }

    if (stage === 'wipe') {
      const timer = setTimeout(() => {
        handleFinish();
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleFinish = () => {
    sessionStorage.setItem('portfolio_intro_seen', 'true');
    onComplete?.();
  };

  // SVG Circle Progress calculations
  const ringRadius = 60;
  const circumference = 2 * Math.PI * ringRadius;
  const strokeOffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-overlay"
        initial={{ opacity: 1 }}
        animate={
          stage === 'wipe'
            ? {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                opacity: 0.98
              }
            : {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                opacity: 1
              }
        }
        transition={{
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1]
        }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white select-none overflow-hidden"
      >
        {/* Subtle Ambient Vignette & Monochrome Glow */}
        <div className="absolute w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

        {/* ================================================================= */}
        {/* STAGE 1: FULL-SCREEN COUNTER & MONOCHROME PROGRESS RING           */}
        {/* ================================================================= */}
        {stage === 'counting' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
            className="flex flex-col items-center justify-center relative z-10"
          >
            {/* Minimalist Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-neutral-300 font-medium mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              <span className="uppercase tracking-[0.2em]">PORTFOLIO // INITIALIZING</span>
            </div>

            {/* Circular Progress Ring in Pure Clean White */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90 transform overflow-visible" viewBox="0 0 140 140">
                <defs>
                  <filter id="whiteGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#ffffff" floodOpacity="0.4" />
                  </filter>
                </defs>

                {/* Background Muted Track */}
                <circle
                  cx="70"
                  cy="70"
                  r={ringRadius}
                  stroke="#262626"
                  strokeWidth="2.5"
                  fill="none"
                />

                {/* Clockwise Progress Stroke */}
                <circle
                  cx="70"
                  cy="70"
                  r={ringRadius}
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#whiteGlow)"
                  fill="none"
                  style={{
                    strokeDasharray: circumference,
                    strokeDashoffset: strokeOffset,
                    transition: 'stroke-dashoffset 0.05s linear'
                  }}
                />
              </svg>

              {/* Centered Percentage Counter Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="flex items-baseline">
                  <span className="font-sans font-black tracking-tight text-4xl sm:text-5xl text-white">
                    {progress}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-neutral-400 ml-0.5">
                    %
                  </span>
                </div>
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400 mt-1">
                  LOADING
                </span>
              </div>
            </div>

            {/* Bottom Status Dot Indicator */}
            <div className="mt-7 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff] animate-pulse" />
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
                PREPARING EXPERIENCE
              </span>
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* STAGE 2: ACCURATE CURSIVE "hello" HANDWRITING & REVEAL            */}
        {/* ================================================================= */}
        {(stage === 'handwriting' || stage === 'wipe') && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center text-center px-4 relative z-10"
          >
            {/* Elegant, Accurate Cursive "hello" Hand-Drawn SVG */}
            <div className="w-80 sm:w-[420px] max-w-full mb-4">
              <svg
                viewBox="0 0 420 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto overflow-visible"
              >
                <defs>
                  <filter id="handwritingWhiteGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ffffff" floodOpacity="0.5" />
                  </filter>
                </defs>

                {/* 
                  Flawless, continuous cursive calligraphy path for "hello":
                  - 'h' with tall ascender loop & shoulder arch
                  - 'e' with clean open loop
                  - 'l' with tall ascender loop
                  - 'l' second tall ascender loop
                  - 'o' with oval loop & connecting exit stroke
                */}
                <motion.path
                  ref={pathRef}
                  d="M 40,140 C 55,100 78,35 90,25 C 98,18 88,48 80,95 C 75,130 73,155 73,155 C 73,155 82,105 100,85 C 115,70 130,80 130,110 C 130,135 125,152 145,148 C 158,145 168,102 162,90 C 152,78 145,102 148,124 C 152,145 168,150 185,140 C 200,120 215,45 225,25 C 232,15 222,45 215,90 C 208,125 205,155 218,150 C 230,145 242,110 252,50 C 258,25 264,22 262,38 C 258,75 248,128 248,155 C 248,155 260,150 272,135 C 282,120 286,95 280,90 C 268,80 260,115 270,140 C 280,155 300,150 312,135 C 322,120 322,95 305,88 C 290,82 288,105 310,105 C 328,105 350,100 375,95"
                  stroke="#FFFFFF"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#handwritingWhiteGlow)"
                  initial={{
                    strokeDasharray: 1400,
                    strokeDashoffset: 1400
                  }}
                  animate={{
                    strokeDashoffset: 0
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.33, 1, 0.68, 1]
                  }}
                />
              </svg>
            </div>

            {/* Brand Title: SANJAI K */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.4 }}
              className="font-sans font-black text-3xl sm:text-4xl tracking-tight text-white uppercase"
            >
              SANJAI K
            </motion.h2>

            {/* Subtitle in Clean Monospace */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="mt-2 text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-neutral-400"
            >
              FULL STACK DEVELOPER · SOFTWARE ENGINEER
            </motion.p>
          </motion.div>
        )}

        {/* Top White Accent Line on Wipe Transition */}
        {stage === 'wipe' && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_#ffffff]" />
        )}

        {/* Skip Intro Button in Black & White Theme */}
        <button
          onClick={handleFinish}
          className="absolute bottom-8 right-8 px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold rounded-full bg-white/[0.06] border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white transition-all duration-300 shadow-md flex items-center gap-1.5 cursor-pointer group"
        >
          <span>Skip Intro</span>
          <ArrowRight size={13} className="text-white group-hover:translate-x-0.5 transition-transform" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
