import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, ArrowRight, Activity, Cpu, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function CaseStudy() {
  const { caseStudy } = portfolioData;

  return (
    <section className="py-24 sm:py-32 relative bg-dark-950 border-t border-white/10 overflow-hidden">
      {/* Dynamic Crimson Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-brand-red/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 mb-4">
            <Sparkles size={14} className="text-brand-red" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
              {caseStudy.badge}
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.05]">
            From <span className="text-brand-red">idea</span> to <span className="text-white">interface</span> to <span className="text-brand-accent">impact.</span>
          </h2>
        </div>

        {/* Agency Case Study Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-dark-900 border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Preview Image Showcase */}
            <div className="lg:col-span-6 relative group">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/80">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.projectTitle}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-gray-300">
                  <span className="px-3 py-1 rounded-full bg-brand-red/90 text-white font-bold">
                    {caseStudy.projectTitle}
                  </span>
                  <span>{caseStudy.duration}</span>
                </div>
              </div>
            </div>

            {/* Right Case Study Breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="text-xs font-mono text-brand-accent tracking-wider uppercase mb-1">
                  Architecture & Product Breakdown
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {caseStudy.projectTitle}
                </h3>
              </div>

              {/* Problem & Solution Cards */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wide mb-1">
                    [ The Challenge ]
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-brand-darkRed/20 border border-brand-red/30">
                  <div className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wide mb-1">
                    [ The Engineering Solution ]
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Impact Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {caseStudy.impact.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <div className="text-xl sm:text-2xl font-display font-black text-white">
                      {item.value}
                    </div>
                    <div className="text-[10px] font-mono text-gray-400 mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {caseStudy.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-dark-950 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
