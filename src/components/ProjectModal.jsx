import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Zap, Activity } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-dark-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-brand-red transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Project Image Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-dark-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-red text-white uppercase tracking-wider">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mt-2">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Overview description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {project.fullDescription || project.shortDescription}
            </p>

            {/* Metrics highlight */}
            {project.stats && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {Object.entries(project.stats).map(([key, val], idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-brand-red/20 text-brand-accent">
                      <Zap size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Metric Result</div>
                      <div className="text-sm font-bold text-white">{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Tags */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <Layers size={14} className="text-brand-red" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-dark-800 border border-white/10 text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Challenges & Solutions */}
            {project.challenges && (
              <div className="p-4 sm:p-5 rounded-2xl bg-brand-darkRed/20 border border-brand-red/20 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-accent flex items-center gap-2">
                  <Activity size={14} />
                  <span>Architecture & Engineering Highlights</span>
                </div>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Challenge:</strong> {project.challenges}
                </p>
                <p className="text-sm text-gray-300">
                  <strong className="text-brand-accent">Solution:</strong> {project.solution}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-brand-red to-brand-crimson text-white font-semibold text-center shadow-lg shadow-brand-red/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-center border border-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <GithubIcon size={18} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
