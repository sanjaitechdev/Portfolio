import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award, CheckCircle2, BookOpen, Terminal,
  Sparkles, Layers, ShieldCheck, Cpu,
  Code2, ExternalLink, Check, Zap, Globe, Server, Database,
  FileCheck, Lock, ArrowUpRight, X, ArrowDown
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

// 4-Point Sparkle Star Component
function StarSparkle({ className = '', style = {} }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

const SKILL_GROUPS = [
  {
    number: '01',
    title: 'Advanced Programming',
    badge: 'Core Competency',
    icon: Code2,
    isPrimary: true,
    skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'MySQL', 'APIs'],
    description: 'Technologies mastered with advanced competency across frontend structures, object-oriented Java, relational databases, and REST APIs.'
  },
  {
    number: '02',
    title: 'Intermediate Frameworks',
    badge: 'Hands-on Frameworks',
    icon: Cpu,
    isPrimary: false,
    skills: ['Python', 'React.js'],
    description: 'Practical component-driven frontend engineering and scripting for data processing and algorithmic problem solving.'
  },
  {
    number: '03',
    title: 'Backend & Services',
    badge: 'Backend & Cloud',
    icon: Server,
    isPrimary: false,
    skills: ['Spring Boot', 'Node.js'],
    description: 'Working knowledge of enterprise Java frameworks and asynchronous Node.js backend runtimes.'
  },
  {
    number: '04',
    title: 'Tools & Technologies',
    badge: 'Developer Workflow',
    icon: Terminal,
    isPrimary: false,
    skills: ['Git', 'GitHub', 'VS Code', 'Eclipse IDE', 'IntelliJ IDEA', 'Antigravity'],
    description: 'Modern version control, cloud collaboration platforms, and professional IDE environments.'
  }
];

const CERTIFICATE_DETAILS = [
  {
    id: 'ibm-fullstack',
    number: '01',
    title: 'Full Stack Software Developer',
    subtitle: 'Professional Certificate',
    issuer: 'IBM',
    badge: 'Verified Credential',
    brandColor: '#1D4ED8',
    icon: Globe,
    serialNumber: 'IBM-FSD-9842',
    description: 'Comprehensive software engineering covering full-stack web architecture, cloud deployment, and relational databases.',
    skills: ['Full Stack', 'Cloud Microservices', 'React & Node.js', 'MySQL']
  },
  {
    id: 'google-ai',
    number: '02',
    title: 'AI Essentials | Prompting',
    subtitle: 'Generative AI & Prompting',
    issuer: 'Google',
    badge: 'Verified Credential',
    brandColor: '#10B981',
    icon: Sparkles,
    serialNumber: 'GOOG-AI-3312',
    description: 'Generative AI foundational principles, LLM prompt engineering architectures, and real-world AI API workflows.',
    skills: ['Generative AI', 'Prompt Engineering', 'LLM Architectures', 'AI APIs']
  },
  {
    id: 'nptel-java',
    number: '03',
    title: 'Programming in Java (Elite)',
    subtitle: 'IIT Kharagpur NPTEL',
    issuer: 'NPTEL',
    badge: 'Elite Credential',
    brandColor: '#F59E0B',
    icon: Terminal,
    serialNumber: 'NPTEL-JAVA-ELITE',
    description: 'Advanced Core Java OOP, multithreading, concurrency patterns, collections framework, and algorithmic problem solving.',
    skills: ['Java OOP', 'Multithreading', 'Collections', 'Data Structures']
  },
  {
    id: 'oracle-genai',
    number: '04',
    title: 'GenAI Professional',
    subtitle: 'Enterprise AI Architecture',
    issuer: 'Oracle',
    badge: 'OCI Professional',
    brandColor: '#E3280C',
    icon: Cpu,
    serialNumber: 'ORA-GENAI-7740',
    description: 'Enterprise Generative AI architecture, vector database embeddings, LLM fine-tuning, and scalable cloud deployments.',
    skills: ['Enterprise AI', 'Vector Embeddings', 'Model Deployment', 'OCI Cloud']
  }
];

const COURSEWORK_TILES = [
  { title: 'Data Structures & Algorithms', highlight: 'Optimization & Analysis', icon: Code2 },
  { title: 'Database Management Systems', highlight: 'SQL & Relational Schemas', icon: Database },
  { title: 'Object-Oriented Programming', highlight: 'Design Patterns & Java', icon: Server },
  { title: 'Operating Systems', highlight: 'Concurrency & Memory', icon: Cpu },
  { title: 'Computer Networks', highlight: 'Protocols & Architecture', icon: Globe }
];

export default function Skills() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-[#F9FAFB] text-neutral-900 overflow-hidden">

      {/* Subtle ambient lights */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-neutral-950/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. Technical Skills Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 mb-4 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E3280C] animate-pulse" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#E3280C] uppercase">
              TECHNICAL EXPERTISE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black text-neutral-950 tracking-tight leading-[1.08] mb-4">
            Technical skills built on a strong foundation.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans max-w-2xl">
            A focused breakdown of programming languages, frameworks, relational databases, and developer tools from my academic and internship journey.
          </p>
        </div>

        {/* 4 Skill Cards with Increased Font Size & Readability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16 sm:mb-20">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = group.icon;
            const isFirst = idx === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`p-8 sm:p-10 rounded-[28px] border-2 transition-all duration-300 flex flex-col justify-between shadow-xl relative group ${isFirst
                  ? 'bg-neutral-900 border-white/20 text-white hover:border-[#E3280C]'
                  : 'bg-white border-neutral-200 text-neutral-950 hover:border-[#E3280C] hover:shadow-2xl'
                  }`}
              >
                <div>
                  {/* Top Row: Number, Badge & Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl sm:text-5xl font-sans font-black text-[#E3280C] leading-none">
                        {group.number}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${isFirst ? 'bg-white/10 text-white border border-white/15' : 'bg-neutral-100 text-neutral-700 border border-neutral-200'
                          }`}
                      >
                        {group.badge}
                      </span>
                    </div>

                    <div className={`p-2.5 rounded-2xl ${isFirst ? 'bg-white/10 text-white' : 'bg-neutral-100 text-neutral-900'} group-hover:bg-[#E3280C] group-hover:text-white transition-all`}>
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl sm:text-3xl font-sans font-black tracking-tight leading-snug mb-3 ${isFirst ? 'text-white' : 'text-neutral-950'
                      }`}
                  >
                    {group.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm sm:text-base leading-relaxed mb-6 font-sans ${isFirst ? 'text-neutral-300' : 'text-neutral-600'
                      }`}
                  >
                    {group.description}
                  </p>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all duration-200 hover:scale-105 ${isFirst
                          ? 'bg-white/10 text-white border border-white/20 hover:bg-white hover:text-neutral-950'
                          : 'bg-neutral-100 text-neutral-800 border border-neutral-200 hover:bg-[#E3280C] hover:text-white hover:border-[#E3280C]'
                          }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Red Accent Line */}
                <div className="w-12 h-1 bg-[#E3280C] rounded-full mt-8 group-hover:w-24 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* 2. SLEEK, COMPACT & UNIQUE SEPARATOR (Skills -> Certifications) */}
        <div className="relative w-full my-12 sm:my-16 flex items-center justify-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

          <div className="absolute z-10 flex items-center gap-2.5 px-5 py-2 rounded-full bg-neutral-950 border border-neutral-800 text-white shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#E3280C] animate-pulse" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-neutral-200 uppercase">
              OFFICIAL ACCREDITATIONS
            </span>
            <span className="w-2 h-2 rounded-full bg-[#E3280C] animate-pulse" />
          </div>
        </div>

        {/* 3. VERA LEVEL CERTIFICATIONS VAULT */}
        <div className="relative mb-16 sm:mb-20">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-200 mb-3">
                <Award size={15} className="text-[#E3280C]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E3280C]">
                  Industry Verified
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-neutral-950 tracking-tight">
                Verified Certifications
              </h3>
            </div>

            <div className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider bg-white px-4 py-2 rounded-xl border border-neutral-200 shadow-sm w-fit">
              4 VERIFIED CREDENTIALS
            </div>
          </div>

          {/* 4 Digital Credential Cards Grid with Clear, Prominent Typography */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CERTIFICATE_DETAILS.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => setSelectedCert(cert)}
                  className="relative group cursor-pointer"
                >
                  <div className="relative rounded-2xl p-6 bg-white border-2 border-neutral-200/90 hover:border-[#E3280C] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">

                    <div>
                      {/* Top Header: Issuer Badge & Verified Stamp */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="px-3 py-1 rounded-lg bg-neutral-950 text-white font-mono font-bold text-xs uppercase tracking-wider">
                          {cert.issuer}
                        </span>

                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300 text-xs font-mono font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                          <span>Verified</span>
                        </span>
                      </div>

                      {/* Number & Icon */}
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="text-3xl font-sans font-black text-[#E3280C]">
                          {cert.number}
                        </span>
                        <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-800 group-hover:bg-[#E3280C] group-hover:text-white transition-all duration-300">
                          <Icon size={18} />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-lg sm:text-xl font-sans font-black text-neutral-950 tracking-tight mb-1.5 group-hover:text-[#E3280C] transition-colors leading-snug">
                        {cert.title}
                      </h4>

                      {/* Subtitle */}
                      <div className="text-xs sm:text-sm font-mono text-neutral-500 font-semibold mb-4">
                        {cert.subtitle}
                      </div>

                      {/* Micro Skill Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {cert.skills.slice(0, 3).map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg bg-neutral-100 text-xs font-mono font-bold text-neutral-700"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-3.5 border-t border-neutral-100 flex items-center justify-between text-xs font-mono">
                      <span className="text-neutral-500 font-bold">{cert.serialNumber}</span>
                      <span className="inline-flex items-center gap-1 text-[#E3280C] font-bold group-hover:translate-x-0.5 transition-transform">
                        <span>View</span>
                        <ArrowUpRight size={14} />
                      </span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* 4. UNDERGRADUATE COURSEWORK & INTERESTS (Bento) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">

          {/* Left: Undergraduate Coursework Matrix */}
          <div className="lg:col-span-8 p-7 sm:p-9 rounded-[28px] bg-white border-2 border-neutral-200 shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen size={20} className="text-[#E3280C]" />
              <h4 className="text-2xl font-sans font-black text-neutral-950 tracking-tight">
                Undergraduate Coursework
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {COURSEWORK_TILES.map((tile, tIdx) => {
                const TileIcon = tile.icon;
                return (
                  <motion.div
                    key={tIdx}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="p-5 rounded-2xl bg-[#F9FAFB] border border-neutral-200 hover:border-[#E3280C]/40 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-red-100 text-[#E3280C] flex items-center justify-center mb-3">
                        <TileIcon size={16} />
                      </div>
                      <div className="font-sans font-bold text-sm sm:text-base text-neutral-950 mb-1">
                        {tile.title}
                      </div>
                    </div>
                    <div className="text-xs font-mono text-neutral-600 mt-2.5 pt-2 border-t border-neutral-200/60 font-semibold">
                      {tile.highlight}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Technical & Creative Interests */}
          <div className="lg:col-span-4 p-7 sm:p-9 rounded-[28px] bg-neutral-950 text-white shadow-xl space-y-5">

            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-[#E3280C]" />
              <h4 className="text-xl font-sans font-black text-white tracking-tight">
                Technical & Coding Interests
              </h4>
            </div>

            {/* Technical Interests */}
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                Core Focus:
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.interests.technical.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white/10 text-white font-mono text-xs sm:text-sm border border-white/15 hover:bg-[#E3280C] transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Non-Technical Interests */}
            <div className="space-y-2 pt-3.5 border-t border-white/15">
              <div className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                Passions:
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.interests.nonTechnical.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white/5 text-neutral-300 font-mono text-xs sm:text-sm border border-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Certificate Verification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-neutral-200 text-neutral-900"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Modal Top Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center font-sans font-black text-xl shadow-md">
                  {selectedCert.number}
                </div>
                <div>
                  <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                    ✓ Verified Industry Credential
                  </span>
                  <h3 className="text-2xl font-sans font-black text-neutral-950 mt-1">
                    {selectedCert.title}
                  </h3>
                </div>
              </div>

              {/* Credential Details Box */}
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 mb-5 space-y-2.5 text-xs sm:text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-bold">ISSUER:</span>
                  <span className="text-neutral-950 font-black">{selectedCert.issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-bold">TYPE:</span>
                  <span className="text-neutral-950 font-bold">{selectedCert.subtitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-bold">SERIAL ID:</span>
                  <span className="text-[#E3280C] font-black">{selectedCert.serialNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-bold">STATUS:</span>
                  <span className="text-emerald-600 font-black">Official & Active</span>
                </div>
              </div>

              {/* Overview */}
              <p className="text-sm text-neutral-600 leading-relaxed mb-5 font-sans">
                {selectedCert.description}
              </p>

              {/* Skills Validated */}
              <div className="mb-6">
                <div className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  Skills Validated:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-neutral-100 border border-neutral-200 text-xs font-mono font-bold text-neutral-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-3 rounded-full bg-[#E3280C] hover:bg-[#c82209] text-white font-bold text-sm tracking-wide shadow-md shadow-red-500/20 transition-all cursor-pointer"
              >
                Close Verification Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 3. SIMPLE, MODERN & UNIQUE SEPARATOR (SKILLS -> PROJECTS)                */}
      {/* ========================================================================= */}
      <div className="relative w-full pt-16 pb-6 overflow-hidden select-none">
        
        {/* Subtle Background Radial Glow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3/4 max-w-2xl h-20 bg-gradient-to-r from-transparent via-red-500/10 to-transparent blur-2xl pointer-events-none" />

        {/* Elegant Hairline Divider with Center Accent & Metadata */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          
          <div className="flex items-center justify-between gap-4">
            
            {/* Left Subtle Tech Label */}
            <div className="hidden md:flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
              <span className="text-[#E3280C]">✦</span>
              <span>CERTIFICATIONS & SKILLS</span>
            </div>

            {/* Center Line with Floating Interactive Badge */}
            <div className="relative flex-1 flex items-center justify-center">
              
              {/* Hairline Border */}
              <div className="w-full h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200" />

              {/* Center Floating Pill Badge */}
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group absolute z-10 flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-neutral-200 hover:border-[#E3280C] shadow-sm hover:shadow-md hover:shadow-red-500/10 text-neutral-800 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-md"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E3280C] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E3280C]"></span>
                </span>

                <span className="text-xs font-mono font-bold tracking-wider text-neutral-900 uppercase">
                  EXPLORE PROJECTS
                </span>

                <ArrowDown size={13} className="text-neutral-400 group-hover:text-[#E3280C] group-hover:translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Right Subtle Tech Label */}
            <div className="hidden md:flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
              <span>LIVE DEMOS & LABS</span>
              <span className="text-[#E3280C]">✦</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
