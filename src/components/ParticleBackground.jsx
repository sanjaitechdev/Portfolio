import React from 'react';
import { motion } from 'framer-motion';

export default function ParticleBackground() {
  const particles = [
    { x: '10%', y: '20%', size: 4, duration: 6, delay: 0 },
    { x: '85%', y: '15%', size: 5, duration: 8, delay: 1 },
    { x: '35%', y: '70%', size: 3, duration: 7, delay: 2 },
    { x: '75%', y: '65%', size: 6, duration: 9, delay: 0.5 },
    { x: '50%', y: '40%', size: 4, duration: 5, delay: 1.5 },
    { x: '20%', y: '85%', size: 3, duration: 6.5, delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Dynamic Crimson Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-brand-crimson/15 rounded-full blur-[140px] mix-blend-screen" />
      
      {/* Floating Sparkles/Particles */}
      {particles.map((p, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full bg-brand-accent/50 shadow-[0_0_8px_#FF333D]"
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: ['0px', '-25px', '0px'],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
