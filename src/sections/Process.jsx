import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code2, Video, Film, Layout, Smartphone, Sparkles, Terminal, ArrowDown } from 'lucide-react';

const SERVICES_LIST = [
  'WEB DEVELOPMENT',
  'FULL-STACK DEVELOPMENT',
  'CONTENT CREATION',
  'VIDEO EDITING',
  'UI/UX DESIGN',
  'MOBILE APP DEVELOPMENT'
];

const SERVICE_CARDS = [
  {
    number: '01',
    title: 'Web Development',
    icon: Globe,
    desc: 'Crafting responsive, high-speed, and interactive web applications with modern architecture, clean semantics, and cross-browser reliability.',
    tags: ['React.js', 'HTML5 / CSS3', 'JavaScript', 'Responsive UI']
  },
  {
    number: '02',
    title: 'Full-Stack Development',
    icon: Code2,
    desc: 'Architecting scalable end-to-end applications with robust frontend components, Java OOP principles, and high-performance backend systems.',
    tags: ['React.js', 'Node.js', 'Java OOP', 'MySQL']
  },
  {
    number: '03',
    title: 'Content Creation',
    icon: Video,
    desc: 'Creating engaging developer & tech content, programming reels, tutorials, and educational media tailored for modern digital audiences.',
    tags: ['Tech Content', 'Developer Reels', 'Coding Tutorials', 'Audience Growth']
  },
  {
    number: '04',
    title: 'Video Editing',
    icon: Film,
    desc: 'Crafting dynamic, high-retention video edits with punchy pacing, motion graphics, cinematic color grading, and engaging sound design.',
    tags: ['Video Editing', 'Motion Graphics', 'Shorts / Reels', 'Sound Design']
  },
  {
    number: '05',
    title: 'UI/UX Design',
    icon: Layout,
    desc: 'Designing accessible, pixel-perfect user interfaces, intuitive wireframes, fluid animations, and frictionless user journeys.',
    tags: ['Design Systems', 'Micro-interactions', 'Accessibility', 'Figma Wireframes']
  },
  {
    number: '06',
    title: 'Mobile Application Development',
    icon: Smartphone,
    desc: 'Developing cross-device responsive web apps, progressive mobile solutions, and touch-optimized fluid interfaces.',
    tags: ['Mobile First', 'Progressive Web', 'Cross-Platform', 'Fluid Touch UX']
  }
];

export default function Process() {
  return (
    <section id="services" className="relative bg-[#060608] text-white pt-0 pb-0 overflow-hidden">

      {/* 1. Organic Wave Transition from About (#F9FAFB) into Services (#060608) */}
      <div className="w-full overflow-hidden leading-none bg-[#F9FAFB] -mt-1 pointer-events-none">
        <svg
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-24 lg:h-32 text-[#060608] preserve-3d"
        >
          <path
            d="M0,45 C280,130 520,135 780,75 C1040,15 1280,30 1440,85 L1440,140 L0,140 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Ambient Red Glow Accents */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#E3280C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-700/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header Matching User's Reference: WHAT I BUILD // SERVICES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 pt-6 sm:pt-10">
        <div className="text-left max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold tracking-[0.25em] text-[#E3280C] uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E3280C] animate-pulse" />
            <span>WHAT I BUILD</span>
          </div>

          <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black tracking-tight text-white uppercase leading-none">
            SERVICES
          </h3>
        </div>
      </div>

      {/* Infinite Right-To-Left Marquee Scroll Ticker Ribbon (5 Services) */}
      <div className="relative w-full bg-black py-5 sm:py-6 border-y border-white/15 overflow-hidden shadow-2xl mb-16">

        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#060608] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#060608] to-transparent z-10" />

        {/* Marquee Track (Seamless infinite loop with 5 services) */}
        <div className="animate-marquee-infinite flex items-center select-none">
          {[...SERVICES_LIST, ...SERVICES_LIST, ...SERVICES_LIST, ...SERVICES_LIST].map((service, sIdx) => (
            <div key={sIdx} className="flex items-center shrink-0">
              <span className="text-xl sm:text-2xl lg:text-3xl font-sans font-black tracking-wider uppercase text-white hover:text-[#E3280C] transition-colors cursor-default whitespace-nowrap">
                {service}
              </span>

              {/* Glowing Red Dot Separator */}
              <div className="mx-6 sm:mx-10 flex items-center justify-center">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#E3280C] shadow-[0_0_12px_#E3280C] inline-block animate-pulse" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Clean Numbered Service Cards Grid Matching Reference Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICE_CARDS.map((card, cIdx) => {
            const Icon = card.icon;
            const isFirst = cIdx === 0;
            return (
              <motion.div
                key={cIdx}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className={`p-8 sm:p-9 rounded-[24px] border transition-all duration-300 flex flex-col justify-between shadow-2xl relative group ${isFirst
                  ? 'bg-neutral-900 border-white/20 text-white hover:border-[#E3280C]'
                  : 'bg-white border-neutral-200 text-neutral-950 hover:border-[#E3280C] hover:shadow-xl'
                  }`}
              >
                <div>
                  {/* Top Row: Big Red Number & Minimal Outline Icon */}
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-4xl sm:text-5xl font-sans font-black text-[#E3280C] leading-none">
                      {card.number}
                    </span>
                    <div className={`p-2 rounded-xl ${isFirst ? 'text-white/80' : 'text-neutral-900'} group-hover:scale-110 transition-transform`}>
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className={`text-2xl sm:text-3xl font-sans font-black tracking-tight leading-snug mb-4 ${isFirst ? 'text-white' : 'text-neutral-950'}`}>
                    {card.title}
                  </h4>

                  {/* Description */}
                  <p className={`text-sm sm:text-base leading-relaxed font-sans ${isFirst ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Red Accent Line Matching Reference */}
                <div className="w-12 h-1 bg-[#E3280C] rounded-full mt-8 group-hover:w-20 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 2. ARCHITECTURAL TRANSITION SEPARATOR (Services -> Projects) */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#060608] via-neutral-900 to-white pt-8 pb-0">

        {/* Horizontal Laser Line with Glowing Red Pulse Core */}
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#E3280C] to-transparent shadow-[0_0_15px_#E3280C]" />
          </div>

          {/* Center High-Tech Hexagonal Badge */}
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative z-10 flex items-center gap-3 px-6 py-2.5 rounded-full bg-neutral-950 border-2 border-white/20 hover:border-[#E3280C] text-white shadow-2xl shadow-black/90 backdrop-blur-xl transition-all cursor-pointer hover:scale-105"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E3280C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E3280C]"></span>
            </span>

            <span className="text-xs font-mono font-black tracking-[0.25em] text-white uppercase">
              FEATURED WORK
            </span>

            <div className="w-px h-3.5 bg-white/20 mx-0.5" />

            <span className="text-[10px] font-mono font-bold text-[#E3280C] uppercase tracking-wider">
              EXPLORE PROJECTS
            </span>

            <ArrowDown size={14} className="text-neutral-400 group-hover:text-[#E3280C] group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Slanted Geometric Light Base transitioning into Projects Section */}
        <div className="w-full h-12 sm:h-16 mt-6 bg-white [clip-path:polygon(0_60%,50%_0%,100%_60%,100%_100%,0_100%)] shadow-inner" />
      </div>

    </section>
  );
}
