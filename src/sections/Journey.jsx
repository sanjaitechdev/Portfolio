import React, { useState, useEffect, useRef } from 'react';
import {
  GraduationCap, Calendar, MapPin,
  CheckCircle2, ChevronRight, Building2
} from 'lucide-react';

const EXPERIENCES = [
  {
    id: 'strydo',
    type: 'internship',
    index: '01',
    role: 'Full Stack Web Development Intern',
    company: 'Strydo Technologies',
    fullCompany: 'Strydo Technologies Pvt. Ltd.',
    period: 'Jun 2026 – Jul 2026',
    duration: '2 Months',
    location: 'India',
    badge: 'Full Stack & Database',
    highlight: 'Architecting scalable web applications across modern frontend, backend, and MySQL database layers with high usability and clean code standards.',
    points: [
      'Developed responsive, high-performance web components using React.js and structured RESTful APIs.',
      'Designed and integrated MySQL database schemas with application logic for reliable data processing.'
    ],
    techStack: ['React.js', 'Node.js', 'MySQL', 'REST APIs', 'Full Stack']
  },
  {
    id: 'codec',
    type: 'internship',
    index: '02',
    role: 'Java Developer Intern',
    company: 'Codec Technologies',
    fullCompany: 'Codec Technologies',
    period: 'Jan 2026 – Apr 2026',
    duration: '4 Months',
    location: 'Hybrid, India',
    badge: 'Core Java & Backend',
    highlight: 'Engineering robust Java software using Object-Oriented Programming (OOP), multithreading, and optimized backend algorithms.',
    points: [
      'Developed modular Java backend services utilizing core Data Structures and efficient algorithms.',
      'Integrated backend logic with relational MySQL databases to streamline core application workflows.'
    ],
    techStack: ['Java', 'OOP', 'Data Structures', 'MySQL', 'Multithreading', 'Backend']
  },
  {
    id: 'codealpha',
    type: 'internship',
    index: '03',
    role: 'Frontend Development Intern',
    company: 'CodeAlpha',
    fullCompany: 'CodeAlpha',
    period: 'Nov 2025 – Dec 2025',
    duration: '2 Months',
    location: 'Chennai, TN',
    badge: 'Frontend & UI Architecture',
    highlight: 'Developing responsive React.js user interfaces with dynamic API integration, clean styling, and smooth interactions.',
    points: [
      'Engineered interactive React components with modern ES6+ JavaScript, HTML5, and responsive CSS3.',
      'Connected frontend state seamlessly with backend APIs for real-time data rendering and smooth navigation.'
    ],
    techStack: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'REST APIs', 'UI/UX']
  },
  {
    id: 'academics',
    type: 'education',
    index: '04',
    role: 'B.Tech. Information Technology',
    company: 'Anna University (MPNMJ)',
    fullCompany: 'MPNMJ Engineering College • Anna University',
    period: '2023 – 2027',
    duration: '4 Years Degree',
    location: 'Erode, Tamil Nadu',
    badge: 'Academic Distinction',
    highlight: 'Pursuing B.Tech in Information Technology with consistent academic distinction (8.49 CGPA) and strong core computer science mastery.',
    points: [
      'B.Tech Information Technology — Anna University MPNMJ (2023–2027) with CGPA 8.49 / 10.',
      'Higher Secondary Certificate (HSC) — Nellorepet Govt Boys HSS (2023) with 85% Aggregate.'
    ],
    techStack: ['B.Tech IT (8.49 CGPA)', 'HSC (85%)', 'Data Structures', 'DBMS', 'OOP']
  }
];

export default function Journey() {
  const [clickedCard, setClickedCard] = useState(null);
  const cardRefs = useRef([]);

  const toggleCard = (idx) => {
    setClickedCard((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="journey" className="py-16 sm:py-24 relative bg-[#F8F9FA] text-neutral-900 border-t-2 border-neutral-200">

      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-neutral-950/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-neutral-950 tracking-tight leading-tight">
            Work Experience & Journey<span className="text-[#E3280C]">.</span>
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* COMPACT & BALANCED FULL-WIDTH STACKED SCROLL CARDS                        */}
        {/* ========================================================================= */}
        <div className="relative space-y-8 sm:space-y-10 pb-12">
          {EXPERIENCES.map((item, idx) => {
            const isEdu = item.type === 'education';
            const Icon = isEdu ? GraduationCap : Building2;
            const isClicked = clickedCard === idx;

            return (
              <div
                key={item.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                style={{
                  top: `calc(90px + ${idx * 14}px)`,
                  zIndex: idx + 10
                }}
                className="sticky transition-all duration-300"
              >
                <div
                  onClick={() => toggleCard(idx)}
                  className={`cursor-pointer rounded-[24px] sm:rounded-[28px] transition-all duration-300 p-6 sm:p-7 lg:p-8 relative overflow-hidden group ${
                    isClicked
                      ? 'bg-neutral-950 text-white border-2 border-neutral-800 shadow-[0_25px_60px_rgba(0,0,0,0.5)]'
                      : 'bg-white text-neutral-950 border-2 border-neutral-200/90 shadow-[0_12px_35px_rgba(0,0,0,0.06)] hover:bg-neutral-950 hover:text-white hover:border-neutral-800 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]'
                  }`}
                >

                  {/* Top Red Accent Gradient Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E3280C] via-red-500 to-neutral-800" />

                  {/* 2-Column Responsive Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                    {/* Left Column: Role, Company & Meta (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                      <div>
                        {/* Badges Row */}
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                isClicked
                                  ? 'bg-red-950/80 text-[#E3280C] border border-red-800/60'
                                  : 'bg-red-50 text-[#E3280C] border border-red-200/80 group-hover:bg-red-950/80 group-hover:border-red-800/60'
                              }`}
                            >
                              <Icon size={15} />
                            </div>

                            <span
                              className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase transition-colors ${
                                isClicked
                                  ? 'bg-red-950/80 text-[#E3280C] border border-red-800/60'
                                  : 'bg-red-50 text-[#E3280C] border border-red-200 group-hover:bg-red-950/80 group-hover:border-red-800/60'
                              }`}
                            >
                              {item.badge}
                            </span>
                          </div>

                          <span
                            className={`text-xs font-mono font-bold transition-colors ${
                              isClicked ? 'text-neutral-500' : 'text-neutral-400 group-hover:text-neutral-500'
                            }`}
                          >
                            0{idx + 1} / 0{EXPERIENCES.length}
                          </span>
                        </div>

                        {/* Role Title with larger font size */}
                        <h3
                          className={`font-sans font-black text-2xl sm:text-3xl tracking-tight leading-snug transition-colors ${
                            isClicked ? 'text-white' : 'text-neutral-950 group-hover:text-white'
                          }`}
                        >
                          {item.role}
                        </h3>

                        {/* Company Name in Red Accent */}
                        <div className="font-mono text-sm sm:text-base font-bold text-[#E3280C] uppercase tracking-wider mt-1.5">
                          {item.fullCompany}
                        </div>
                      </div>

                      {/* Period, Location & Duration */}
                      <div
                        className={`pt-3 border-t transition-colors flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-mono ${
                          isClicked
                            ? 'border-neutral-900 text-neutral-400'
                            : 'border-neutral-100 group-hover:border-neutral-900 text-neutral-500 group-hover:text-neutral-400'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-[#E3280C]" />
                          <span>{item.period}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-[#E3280C]" />
                          <span>{item.location}</span>
                        </div>
                        <span>•</span>
                        <span
                          className={`px-2.5 py-0.5 rounded-md font-bold transition-colors ${
                            isClicked
                              ? 'bg-neutral-900 text-neutral-300 border border-neutral-800'
                              : 'bg-neutral-100 group-hover:bg-neutral-900 text-neutral-700 group-hover:text-neutral-300 border border-neutral-200 group-hover:border-neutral-800'
                          }`}
                        >
                          {item.duration}
                        </span>
                      </div>
                    </div>

                    {/* Right Column: Highlights, Points & Tech (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">

                      {/* Highlight Description */}
                      <p
                        className={`text-sm sm:text-base font-sans font-medium leading-relaxed transition-colors ${
                          isClicked ? 'text-neutral-300' : 'text-neutral-700 group-hover:text-neutral-300'
                        }`}
                      >
                        {item.highlight}
                      </p>

                      {/* 2 Crisp, Impactful Bullet Points */}
                      <div className="space-y-2.5">
                        {item.points.map((point, pIdx) => (
                          <div
                            key={pIdx}
                            className={`p-3 sm:p-3.5 rounded-xl border transition-colors flex items-start gap-3 ${
                              isClicked
                                ? 'bg-neutral-900/60 border-neutral-800'
                                : 'bg-neutral-50/80 border-neutral-200/80 group-hover:bg-neutral-900/60 group-hover:border-neutral-800'
                            }`}
                          >
                            <div className="w-5 h-5 rounded-md bg-[#E3280C] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                              <CheckCircle2 size={13} />
                            </div>
                            <p
                              className={`text-sm sm:text-base font-sans leading-relaxed transition-colors ${
                                isClicked ? 'text-neutral-300' : 'text-neutral-800 group-hover:text-neutral-300'
                              }`}
                            >
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div
                        className={`pt-3 border-t flex flex-wrap items-center justify-between gap-2.5 transition-colors ${
                          isClicked ? 'border-neutral-900' : 'border-neutral-100 group-hover:border-neutral-900'
                        }`}
                      >
                        <div className="flex flex-wrap gap-2">
                          {item.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className={`px-3 py-1 rounded-lg text-xs sm:text-sm font-mono font-medium border transition-colors ${
                                isClicked
                                  ? 'bg-neutral-900 text-neutral-300 border-neutral-800'
                                  : 'bg-neutral-100 text-neutral-700 border-neutral-200 group-hover:bg-neutral-900 group-hover:text-neutral-300 group-hover:border-neutral-800'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div
                          className={`flex items-center gap-1 text-xs font-mono font-bold transition-colors ${
                            isClicked ? 'text-neutral-500' : 'text-neutral-400 group-hover:text-neutral-500'
                          }`}
                        >
                          <span>{isClicked ? 'Active' : 'Hover / Click'}</span>
                          <ChevronRight size={14} className="text-[#E3280C]" />
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
