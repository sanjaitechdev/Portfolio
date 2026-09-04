import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Rocket, ShieldCheck, ArrowUpRight, Code2, Database, Server,
  Terminal, Cpu, Layers, Globe, FileCode, Sparkles, Award, Zap,
  GitBranch, CheckCircle2, Coffee, Binary, Check, X
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import devPhoto from '../assets/about-dev.jpg';
import InteractiveString from '../components/InteractiveString';

// 4-Point Sparkle Star Component
function StarSparkle({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
    >
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

function CounterItem({ targetValue, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isDecimal = !Number.isInteger(targetValue);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1400; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = targetValue / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Number(start.toFixed(1)) : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetValue, isDecimal]);

  const formattedCount = isDecimal
    ? count.toFixed(1)
    : (count < 10 && targetValue >= 1 && targetValue < 10 ? `0${count}` : count);

  return (
    <div ref={ref} className="p-6 rounded-3xl bg-white border-2 border-neutral-200 hover:border-[#E3280C] hover:shadow-xl transition-all duration-300 group shadow-sm">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-neutral-950 group-hover:text-[#E3280C] group-hover:scale-105 transition-all duration-300 flex items-baseline gap-1">
        <span>{formattedCount}</span>
        <span className="text-[#E3280C] text-lg sm:text-2xl font-bold transition-colors">{suffix}</span>
      </div>
      <div className="text-xs sm:text-sm font-bold text-neutral-500 group-hover:text-neutral-800 mt-2 font-mono tracking-wide transition-colors">
        {label}
      </div>
    </div>
  );
}

const TECH_SKILLS = [
  {
    name: 'Java',
    category: 'Core & OOP',
    level: 'Advanced',
    icon: Coffee,
    color: '#E3280C',
    desc: 'Object-Oriented Programming, Data Structures, Concurrency & Collections'
  },
  {
    name: 'React.js',
    category: 'Frontend Architecture',
    level: 'Intermediate',
    icon: Code2,
    color: '#0284C7',
    desc: 'Hooks, Component State, Framer Motion, Responsive UI Systems'
  },
  {
    name: 'JavaScript',
    category: 'Modern Web (ES6+)',
    level: 'Advanced',
    icon: FileCode,
    color: '#F59E0B',
    desc: 'Asynchronous JS, DOM Manipulation, Event Loop & Functional Patterns'
  },
  {
    name: 'MySQL',
    category: 'Relational Database',
    level: 'Advanced',
    icon: Database,
    color: '#0D9488',
    desc: 'Schema Design, Complex Queries, Indexing & Normalization'
  },
  {
    name: 'REST APIs',
    category: 'API Architecture',
    level: 'Advanced',
    icon: Zap,
    color: '#E3280C',
    desc: 'Endpoint Integration, JSON Data Serialization & Real-time AI APIs'
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Web Standards',
    level: 'Advanced',
    icon: Globe,
    color: '#EA580C',
    desc: 'Semantic HTML, Tailwind CSS, Flexbox/Grid & Responsive Design'
  },
  {
    name: 'Spring Boot',
    category: 'Backend Framework',
    level: 'Familiar',
    icon: Layers,
    color: '#16A34A',
    desc: 'Enterprise Services, Dependency Injection & RESTful Controllers'
  },
  {
    name: 'Node.js',
    category: 'Backend Runtime',
    level: 'Familiar',
    icon: Server,
    color: '#15803D',
    desc: 'Express Server, Middleware, API Routing & Backend Integration'
  },
  {
    name: 'Python',
    category: 'Scripting & Algorithms',
    level: 'Intermediate',
    icon: Binary,
    color: '#4F46E5',
    desc: 'Data Structures, Algorithmic Problem Solving & Automation'
  },
  {
    name: 'Git & GitHub',
    category: 'Version Control',
    level: 'Advanced',
    icon: GitBranch,
    color: '#171717',
    desc: 'Branching, Pull Requests, Version Tracking & Collaboration'
  },
  {
    name: 'VS Code & IDEs',
    category: 'Developer Environment',
    level: 'Advanced',
    icon: Terminal,
    color: '#2563EB',
    desc: 'IntelliJ IDEA, Eclipse IDE, VS Code & Antigravity IDE'
  }
];

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="scroll-mt-16 pt-4 sm:pt-6 pb-10 sm:pb-14 relative bg-[#F9FAFB] text-neutral-900 overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-neutral-950/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#0000000d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Interactive Elastic String Divider (Shorter, Thicker & Spacious) */}
        <div className="w-full flex justify-center pt-2 pb-8 sm:pb-12 select-none">
          <div className="w-full max-w-xl md:max-w-2xl px-4">
            <InteractiveString
              height={90}
              strokeColor="#000000"
              strokeWidth={4.5}
            />
          </div>
        </div>

        {/* Main "Hello!" Banner Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-8 lg:mb-10">

          {/* Left Column: Stylized Framed Photo Card with Floating Stars */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative group select-none">

              {/* Floating 4-Point Stars (Sparkles) */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 z-20 text-[#E3280C]"
              >
                <StarSparkle className="w-6 h-6 sm:w-8 sm:h-8 fill-[#E3280C] drop-shadow-[0_0_10px_rgba(227,40,12,0.8)]" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.25, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-3 z-20 text-neutral-950"
              >
                <StarSparkle className="w-5 h-5 sm:w-6 sm:h-6 fill-neutral-900 drop-shadow-md" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-3 -right-3 z-20 text-[#E3280C]"
              >
                <StarSparkle className="w-5 h-5 sm:w-7 sm:h-7 fill-[#E3280C] drop-shadow-[0_0_8px_rgba(227,40,12,0.8)]" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.25, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute bottom-4 -right-4 z-20 text-neutral-950"
              >
                <StarSparkle className="w-4 h-4 sm:w-5 sm:h-5 fill-neutral-900 drop-shadow-md" />
              </motion.div>

              {/* Framed Photo Card - Proportional & Compact */}
              <div className="relative rounded-[26px] sm:rounded-[30px] p-2 bg-white border-2 border-neutral-200 shadow-xl shadow-neutral-950/10 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500 max-w-[240px] sm:max-w-[280px] lg:max-w-[300px] w-full">
                <div className="relative overflow-hidden rounded-[20px] aspect-[4/4.6] bg-neutral-100 border border-neutral-200">
                  <img
                    src={devPhoto}
                    alt="Sanjai K - Software Engineer & Full Stack Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: "Hello!" and Bio Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-[11px] font-mono text-[#E3280C] font-bold w-fit mb-2 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3280C] animate-pulse" />
              <span className="uppercase tracking-wider">ABOUT THE DEVELOPER</span>
            </div>

            {/* Big Bold "Hello!" Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-sans font-black text-neutral-950 tracking-tight drop-shadow-xs mb-2">
              Hello<span className="text-[#E3280C]">!</span>
            </h2>

            {/* Intro Paragraph matching resume */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-800 leading-snug font-sans font-normal mb-2.5">
              Hi, I'm <span className="font-extrabold text-neutral-950 underline decoration-[#E3280C] underline-offset-4 tracking-wide">SANJAI K</span>, a passionate Software Engineer & Full Stack Developer pursuing B.Tech in Information Technology at Anna University (MPNMJ Engineering College) with an <span className="text-[#E3280C] font-bold font-mono">8.49 CGPA</span>.
            </p>

            {/* Core Focus & Value Proposition */}
            <p className="text-xs sm:text-sm lg:text-[14.5px] text-neutral-600 leading-relaxed max-w-2xl mb-2.5 font-sans">
              I specialize in building <span className="font-semibold text-neutral-900">scalable, responsive, and user-focused web applications</span> using modern frontend and backend technologies. I enjoy turning ideas into reliable digital solutions with <span className="font-semibold text-neutral-900">clean code</span>, <span className="font-semibold text-neutral-900">efficient APIs</span>, and <span className="font-semibold text-neutral-900">well-structured databases</span>.
            </p>

            {/* Core Skills & Creative Capabilities */}
            <p className="text-xs sm:text-sm lg:text-[14.5px] text-neutral-600 leading-relaxed max-w-2xl mb-4 font-sans">
              My core expertise includes <span className="font-semibold text-neutral-900">React.js, Node.js, Java, MySQL, REST APIs</span>, and <span className="font-semibold text-neutral-900">Git & GitHub</span>, with hands-on experience in developing real-world full-stack applications. I also explore <span className="font-semibold text-neutral-900">AI-powered solutions, content creation, and video editing</span> as additional creative skills.
            </p>

            {/* Continuous Scrolling Skill Icons Ribbon */}
            <div className="relative w-full overflow-hidden py-0.5 max-w-2xl select-none">
              {/* Left & Right Soft Fade Gradients */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-10 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-10 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10" />

              {/* Infinite Scrolling Marquee Track */}
              <div className="animate-marquee-infinite flex items-center gap-2.5">
                {[...TECH_SKILLS, ...TECH_SKILLS].map((skill, sIdx) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border-2 border-neutral-200 hover:border-[#E3280C] shadow-xs hover:shadow-sm text-neutral-900 transition-all cursor-default shrink-0 group"
                    >
                      <div className="w-6 h-6 rounded-lg bg-neutral-100 group-hover:bg-[#E3280C] text-neutral-900 group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                        <SkillIcon size={14} strokeWidth={2} />
                      </div>
                      <span className="text-xs font-sans font-bold whitespace-nowrap">
                        {skill.name}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E3280C]/40 group-hover:bg-[#E3280C] transition-colors" />
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 pt-6 border-t-2 border-neutral-200"
        >
          {portfolioData.stats.map((stat, idx) => (
            <CounterItem
              key={idx}
              targetValue={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
