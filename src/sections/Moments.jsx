import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, Trophy, MessageSquare, Users, Award, Maximize2, X, MapPin } from 'lucide-react';
import award1 from '../assets/award1.jpg';
import speech1 from '../assets/speech1.jpg';
import event1 from '../assets/event1.jpg';
import award2 from '../assets/award2.jpg';
import speech2 from '../assets/speech2.jpg';

// Real Moments & Milestones data from Sanjai's events
const MOMENTS_ITEMS = [
  {
    id: 'speech-1',
    image: speech1,
    title: 'Winner – Intra-College Hackathon',
    location: 'M.P.N.M.J. Engineering College',
    tag: '1st Place Winner',
    icon: Trophy,
    description: 'Secured First Place Winner in the Intra-College Hackathon at M.P.N.M.J. Engineering College, architecting innovative software solutions for real-world impact.'
  },
  {
    id: 'speech-2',
    image: speech2,
    title: 'Finalist — Protothon Hackathon',
    location: 'Prince Dr. K. Vasudevan College of Engg., Chennai',
    tag: 'Hackathon Finalist',
    icon: Trophy,
    description: 'Selected as a Finalist in Prince Proto-Thon 26, Chennai, an intensive hackathon prototyping production-grade applications under strict timed evaluation.'
  },
  {
    id: 'award-1',
    image: award1,
    title: 'Runner-Up — TECHNOVANZA-2K26 Hackathon',
    location: 'Shree Venkateshwara Hi-Tech Engineering College',
    tag: 'Hackathon Runner-Up',
    icon: Trophy,
    description: 'Achieved Second Place Runner-Up with cash rewards in the competitive State Level Hackathon during TECHNOVANZA-2K26.'
  },
  {
    id: 'award-2',
    image: award2,
    title: 'Runner-Up – Project Presentation',
    location: 'Shree Venkateshwara Hi-Tech Engineering College',
    tag: 'Project Runner-Up',
    icon: Award,
    description: 'Awarded Runner-Up with cash rewards in the Project Presentation Event during TECHNOVANZ at Shree Venkateshwara Hi-Tech Engineering College.'
  },
  {
    id: 'event-1',
    image: event1,
    title: 'Paper Presentation & Tech Expo',
    location: 'P.A. College of Engineering and Technology',
    tag: 'Paper Presentation',
    icon: Award,
    description: 'Presented technical research paper and engaged in project demonstrations at P.A. College of Engineering and Technology.'
  }
];

export default function Moments() {
  const [selectedMoment, setSelectedMoment] = useState(null);

  return (
    <section id="gallery" className="pt-4 sm:pt-6 pb-16 sm:pb-20 relative bg-[#F9FAFB] text-neutral-900 overflow-hidden select-none border-b border-neutral-200">
      
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-neutral-950/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-neutral-950 tracking-tight leading-tight">
          Moments & Milestones<span className="text-[#E3280C]">.</span>
        </h2>
      </div>

      {/* Continuous Infinite Scrolling Carousel (Right to Left) */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F9FAFB] via-[#F9FAFB]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F9FAFB] via-[#F9FAFB]/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track scrolling Right to Left */}
        <div className="animate-marquee-infinite flex gap-6 sm:gap-8 px-4">
          {[...MOMENTS_ITEMS, ...MOMENTS_ITEMS, ...MOMENTS_ITEMS].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={`${item.id}-${idx}`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedMoment(item)}
                className="group relative w-[300px] sm:w-[380px] md:w-[420px] shrink-0 rounded-[32px] overflow-hidden bg-white border-2 border-neutral-200 hover:border-[#E3280C] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Photo Image Frame */}
                <div className="relative h-[220px] sm:h-[280px] w-full overflow-hidden bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Top Floating Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-lg">
                      <Icon size={12} className="text-[#E3280C]" />
                      <span>{item.tag}</span>
                    </span>
                  </div>

                  {/* Hover Overlay with Expand Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E3280C] text-white font-sans font-black text-xs uppercase tracking-wider shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 size={15} />
                      <span>VIEW FULL PHOTO</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Content */}
                <div className="p-5 sm:p-6 bg-white space-y-1">
                  <h3 className="font-sans font-black text-base sm:text-lg text-neutral-950 group-hover:text-[#E3280C] transition-colors leading-snug line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
                    <MapPin size={12} className="text-[#E3280C] shrink-0" />
                    <span className="line-clamp-1">{item.location}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedMoment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMoment(null)}
              className="fixed inset-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-neutral-950 text-white rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 z-10 my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMoment(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-[#E3280C] text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* High-Res Image Display */}
              <div className="relative h-[320px] sm:h-[440px] w-full bg-black">
                <img
                  src={selectedMoment.image}
                  alt={selectedMoment.title}
                  className="w-full h-full object-contain object-center"
                />
              </div>

              {/* Modal Details */}
              <div className="p-6 sm:p-8 space-y-3 bg-neutral-950">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E3280C] uppercase tracking-wider">
                    <Sparkles size={14} />
                    <span>{selectedMoment.tag}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                    <MapPin size={12} className="text-[#E3280C]" />
                    <span>{selectedMoment.location}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-sans font-black text-white">
                  {selectedMoment.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  {selectedMoment.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => setSelectedMoment(null)}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#E3280C] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
