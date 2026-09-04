import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 py-16 text-gray-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-red flex items-center justify-center font-display font-black text-white text-base">
                S
              </div>
              <span className="font-display font-black text-xl tracking-widest text-white">
                {portfolioData.brand}
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm">
              Software Engineer & Full Stack Developer. Building clean, high-performance web applications, AI platforms, and scalable systems.
            </p>
          </div>

          {/* Quick Links & Socials */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <a href="#home" className="hover:text-brand-accent transition-colors">Home</a>
              <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
              <a href="#services" className="hover:text-brand-accent transition-colors">Services</a>
              <a href="#projects" className="hover:text-brand-accent transition-colors">Projects</a>
              <a href="#journey" className="hover:text-brand-accent transition-colors">Journey</a>
              <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-brand-red hover:text-white border border-white/10 transition-all text-gray-300"
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={portfolioData.contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-brand-red hover:text-white border border-white/10 transition-all text-gray-300"
                title="LeetCode"
              >
                <LeetcodeIcon size={16} />
              </a>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-brand-red hover:text-white border border-white/10 transition-all text-gray-300"
                title="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-dark-900 border border-white/10 hover:border-brand-red hover:bg-brand-red text-gray-300 hover:text-white transition-all cursor-pointer group shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© {currentYear} {portfolioData.brand}. All rights reserved.</p>
          <div className="flex items-center gap-1 text-gray-500">
            <span>Crafted with</span>
            <span className="text-brand-red">♥</span>
            <span>using React, Tailwind & Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
