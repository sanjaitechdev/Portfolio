import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const NAV_ITEMS = [
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EXPERIENCE', href: '#journey' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredNav, setHoveredNav] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger floating capsule state when scrolled past landing page (e.g. > 80px)
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section spy
      const sections = ['home', 'about', 'services', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* 1. Desktop & Tablet Floating Pill Capsule Navbar (Fixed when scrolling) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-500 pointer-events-none ${
          isScrolled
            ? 'pt-3 sm:pt-4'
            : 'pt-5 sm:pt-6'
        }`}
      >
        <motion.div
          layout
          className={`pointer-events-auto transition-all duration-500 flex items-center justify-between w-[94%] max-w-5xl rounded-full ${
            isScrolled
              ? 'bg-neutral-950/95 border-2 border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-2xl px-5 sm:px-7 py-2.5 sm:py-3'
              : 'bg-black/75 border border-white/15 backdrop-blur-xl px-6 sm:px-8 py-3 sm:py-3.5 shadow-xl'
          }`}
        >
          {/* Left: Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-1.5 group cursor-pointer select-none transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="font-sans font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-neutral-200 transition-colors uppercase">
              SANJAI<span className="text-[#E3280C]">.</span>K
            </span>
          </a>

          {/* Center Navigation Links with Smooth Sliding Dot & Upward Lift on Hover */}
          <nav
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden md:flex items-center gap-5 lg:gap-7"
          >
            {NAV_ITEMS.map((item) => {
              const targetSection = item.href.replace('#', '');
              const isActive = activeSection === targetSection;
              const isHovered = hoveredNav === item.name;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(item.name)}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs lg:text-sm font-sans font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer relative py-1 flex items-center gap-1.5 group ${
                    isActive || isHovered
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10 inline-block transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:text-white">
                    {item.name}
                  </span>

                  {/* Sliding Dot Indicator with Lift Response */}
                  {(isHovered || (isActive && !hoveredNav)) && (
                    <motion.span
                      layoutId="navbarSlidingDot"
                      className="w-2 h-2 rounded-full bg-[#E3280C] shadow-[0_0_10px_#E3280C] inline-block"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 28,
                        mass: 0.5
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Vibrant Red Pill CTA Button with Upward Lift Hover */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#E3280C] hover:bg-[#c82209] text-white text-xs sm:text-sm font-sans font-black tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/40 active:translate-y-0 active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>LET'S CONNECT</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-50 rounded-3xl bg-neutral-950/98 backdrop-blur-2xl border-2 border-white/20 p-6 shadow-2xl md:hidden flex flex-col gap-3"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, idx) => {
                const targetSection = item.href.replace('#', '');
                const isActive = activeSection === targetSection;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 rounded-2xl text-sm font-sans font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#E3280C] text-white shadow-md'
                        : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={15} className="opacity-70" />
                  </motion.a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/15">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-3.5 rounded-full bg-[#E3280C] text-white text-center font-sans font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
              >
                <span>LET'S CONNECT</span>
                <Send size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
