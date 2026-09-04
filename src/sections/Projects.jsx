import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass, BookOpen, ExternalLink, ArrowUpRight,
  Sparkles, Layers, Eye, Maximize2, Zap, Lock,
  CheckCircle2, Code2, Briefcase, ArrowDown
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import ProjectModal from '../components/ProjectModal';
import smartHarvestImg from '../assets/smart-harvest.jpg';
import managementSystemImg from '../assets/management-system.jpg';
import tenshiroImg from '../assets/tenshiro-platform.png';
import agriconnectImg from '../assets/agriconnect-platform.jpg';

const PROJECTS_DATA = [
  {
    id: 'career-ai',
    number: '01',
    badge: 'AI & Full Stack',
    title: 'Tenshiro – AI Career Navigation Platform',
    period: 'Apr – Jun 2025',
    icon: Compass,
    image: tenshiroImg,
    previewUrl: 'https://tenshiro.sanjaidev.io',
    shortDescription: 'AI-powered recommendation engine providing personalized career roadmaps, course suggestions, and internship matching with real-time insights.',
    fullDescription: 'Developed an AI-powered platform for career, course, project, and internship recommendations. Integrated real-time data feeds and AI APIs to provide tailored career insights. Architected responsive React.js interfaces paired with a scalable Node.js backend and MySQL database.',
    githubUrl: 'https://github.com/sanjaitechdev',
    liveUrl: 'https://github.com/sanjaitechdev',
    tags: ['React.js', 'Node.js', 'MySQL', 'AI APIs', 'Real-Time Sync'],
    stats: {
      metric1: 'AI Career Insights',
      metric2: '<30ms Query Latency',
      metric3: '100% Responsive'
    },
    challenges: 'Aggregating and normalizing multidimensional career, course, and internship data dynamically in real-time.',
    solution: 'Engineered scalable Node.js endpoints integrated with AI APIs and indexed MySQL schemas for instant query retrieval.'
  },
  {
    id: 'agriconnect',
    number: '02',
    badge: 'AgriTech & Full Stack',
    title: 'AgriConnect – Demand-Guided Agri Intelligence',
    period: 'Jan – Mar 2025',
    icon: BookOpen,
    image: agriconnectImg,
    previewUrl: 'https://agriconnect.sanjaidev.io',
    shortDescription: 'Real-time APMC mandi intelligence, pre-harvest contract matching, and smart distress sale rescue for Indian agriculture connecting 12,000+ farmers.',
    fullDescription: 'Architected AgriConnect, an intelligent agricultural platform empowering 12,000+ verified farmers and 2,400+ buyers across 150+ APMC mandis. Features live mandi price aggregation, demand-driven pre-harvest contract matching, and instant distress sale alerts built with React.js, Node.js, and MySQL.',
    githubUrl: 'https://github.com/sanjaitechdev',
    liveUrl: 'https://github.com/sanjaitechdev',
    tags: ['React.js', 'Node.js', 'MySQL', 'APMC Mandi APIs', 'Live Tracking', 'Contract Matching'],
    stats: {
      metric1: '12,000+ Verified Farmers',
      metric2: '2,400+ Active Buyers',
      metric3: '150+ APMC Mandis'
    },
    challenges: 'Consolidating fragmented mandi price feeds and enabling seamless, real-time trading with multi-role access for farmers, buyers, and admins.',
    solution: 'Built high-concurrency Node.js endpoints, optimized SQL schema indexing, and a responsive mobile-first React interface with 1-click instant demo access.'
  }
];

export default function Projects() {
  const [modalProject, setModalProject] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-24 relative bg-white text-neutral-900 overflow-hidden border-t border-neutral-200">

      {/* Dynamic Background Glows */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-neutral-950/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-neutral-950 tracking-tight leading-tight">
            Featured Software Projects<span className="text-[#E3280C]">.</span>
          </h2>
        </div>

        {/* Compact, Animated 2-Column Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {PROJECTS_DATA.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-[32px] bg-white text-neutral-950 border-2 border-neutral-200/90 hover:border-[#E3280C] shadow-lg hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7"
              >
                {/* Background Ambient Red Glow on Hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar: Badge, Number & Timeline */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-red-50 text-[#E3280C] border border-red-200 text-[11px] font-mono font-bold uppercase tracking-wider shadow-xs">
                        {project.badge}
                      </span>
                      <span className="text-xs font-mono text-neutral-500">
                        {project.period}
                      </span>
                    </div>

                    <span className="text-2xl font-sans font-black text-neutral-300 group-hover:text-[#E3280C] transition-colors">
                      {project.number}
                    </span>
                  </div>

                  {/* Full Edge-to-Edge Project Image with Direct Live Link */}
                  <a
                    href={project.previewUrl || project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block h-56 sm:h-64 w-full rounded-2xl overflow-hidden cursor-pointer group/img bg-neutral-950 border-2 border-neutral-200 hover:border-[#E3280C] shadow-md hover:shadow-xl transition-all duration-300 mb-5 select-none"
                    title={`Visit ${project.title} live website`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700 filter brightness-95 group-hover/img:brightness-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Live Website Hover Indicator Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 backdrop-blur-xs">
                      <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E3280C] text-white font-sans font-black text-xs uppercase tracking-wider shadow-2xl scale-95 group-hover/img:scale-100 transition-transform">
                        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                        <span>VISIT LIVE WEBSITE</span>
                        <ArrowUpRight size={15} />
                      </div>
                    </div>

                    {/* Top Live Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>LIVE PROJECT</span>
                      </span>
                    </div>
                  </a>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-sans font-black text-neutral-950 group-hover:text-[#E3280C] transition-colors tracking-tight mb-2">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans line-clamp-2 mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 text-xs font-mono font-medium border border-neutral-200 hover:bg-[#E3280C] hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA Buttons */}
                <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
                  {/* Live Website Link Button */}
                  <a
                    href={project.previewUrl || project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#E3280C] hover:bg-[#c82209] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-red-600/30 active:scale-98"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>LIVE PREVIEW</span>
                    <ArrowUpRight size={14} />
                  </a>

                  {/* GitHub Source Link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-sans font-bold text-xs uppercase tracking-wider border border-neutral-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                    title="View Source Code on GitHub"
                  >
                    <GithubIcon size={14} />
                    <span className="hidden sm:inline">CODE</span>
                    <ArrowUpRight size={13} className="text-neutral-500" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compact Transition Pill into Journey */}
        <div className="mt-14 flex justify-center">
          <a
            href="#journey"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-neutral-950 hover:bg-[#E3280C] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer border border-neutral-800"
          >
            <Briefcase size={14} className="group-hover:rotate-12 transition-transform" />
            <span>Explore Experience & Journey</span>
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>

      {/* Fullscreen Interactive Project Details Modal */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}

    </section>
  );
}

