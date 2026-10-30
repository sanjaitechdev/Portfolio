import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Compass, BookOpen, ArrowUpRight,
  Briefcase, ArrowDown
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import ProjectModal from '../components/ProjectModal';
import tenshiroImg from '../assets/tenshiro-platform.png';
import agriconnectImg from '../assets/agriconnect-platform.jpg';

const PROJECTS_DATA = [
  {
    id: 'harvion-ai',
    number: '01',
    badge: 'AgriTech & Full Stack AI',
    title: 'Harvion AI – Smart Agricultural System',
    period: '2025',
    icon: BookOpen,
    image: agriconnectImg,
    previewUrl: 'https://agri-pulse-pied.vercel.app/',
    shortDescription: 'Full-stack smart agriculture platform (39 pages, 74 APIs, 20 data models) with Random Forest crop prediction (29 crops), Redis caching, and 8-language UI.',
    fullDescription: 'Engineered a full-stack agri platform (React.js, Node.js, Express.js, MongoDB, FastAPI): 39 pages, 74 APIs, 20 data models. Trained a Random Forest crop model (29 crops, 8,700 synthetic samples); 8 passing unit tests validate the decision engine. Secured APIs with JWT role-based access, rate limiting and Redis caching; added Socket.io alerts and an 8-language UI.',
    githubUrl: 'https://github.com/sanjaitechdev/AgriPulse',
    liveUrl: 'https://agri-pulse-pied.vercel.app/',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'FastAPI', 'Random Forest', 'Redis', 'Socket.io', 'JWT'],
    stats: {
      metric1: '39 Pages & 74 APIs',
      metric2: '29 Crops (8.7k Samples)',
      metric3: '8-Language UI & Socket.io'
    },
    challenges: 'Training and validating multi-factor soil and weather decision models while maintaining sub-second API latencies under concurrent usage.',
    solution: 'Decoupled the Random Forest decision engine into a FastAPI microservice backed by Redis caching, MongoDB data models, and Socket.io alerts.'
  },
  {
    id: 'career-ai',
    number: '02',
    badge: 'AI & Full Stack',
    title: 'Tenshiro – AI Career Navigation Platform',
    period: '2025',
    icon: Compass,
    image: tenshiroImg,
    previewUrl: 'https://tenshiro.vercel.app/',
    shortDescription: 'AI career platform (23 pages, 74 REST endpoints, 15 tables) delivering mentoring, roadmaps, interview prep and resume analysis across 18 domains & 153 roles.',
    fullDescription: 'Developed an AI career platform (React.js, Node.js, MySQL, OpenAI SDK): 23 pages, 74 REST endpoints, 15 tables. Delivered AI mentoring, roadmaps, interview prep and resume analysis across 18 domains and 153 roles with Groq Llama 3.3 70B and OpenAI SDK.',
    githubUrl: 'https://github.com/sanjaitechdev/Tenshiro',
    liveUrl: 'https://tenshiro.vercel.app/',
    tags: ['React.js', 'Node.js', 'MySQL', 'OpenAI SDK', 'Groq Llama 3.3 70B', 'REST APIs', 'AI Mentoring'],
    stats: {
      metric1: '18 Domains & 153 Roles',
      metric2: '74 REST Endpoints',
      metric3: '23 Pages & 15 Tables'
    },
    challenges: 'Orchestrating multi-model LLM inferences (OpenAI SDK & Groq Llama 3.3 70B) for real-time interview prep and personalized resume scoring.',
    solution: 'Built modular backend controllers with MySQL relational indexing, structured JSON prompt pipelines, and responsive React state management.'
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
          {PROJECTS_DATA.map((project, idx) => (
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
            ))}
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

