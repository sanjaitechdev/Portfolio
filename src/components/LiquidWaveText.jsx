import React, { useRef, useEffect } from 'react';

export default function LiquidWaveText({
  text = "SANJAI",
  accent = ".K",
  className = ""
}) {
  const containerRef = useRef(null);
  const turbRef = useRef(null);
  const dispRef = useRef(null);
  const animFrameRef = useRef(null);
  const filterId = useRef(`liquid-wave-${Math.random().toString(36).substr(2, 9)}`);

  const state = useRef({
    scale: 0,
    targetScale: 0,
    freqX: 0.015,
    freqY: 0.065,
    targetFreqX: 0.015,
    targetFreqY: 0.065,
    seed: 1,
    time: 0,
    isHovered: false,
    lastX: 0,
    lastY: 0,
    vel: 0
  });

  useEffect(() => {
    const s = state.current;
    let running = true;

    const animate = () => {
      if (!running) return;

      s.time += 0.04;

      // Smooth spring interpolation for displacement scale
      s.scale += (s.targetScale - s.scale) * 0.14;

      // Dynamic frequency modulation for fluid ripple effect
      s.freqX += (s.targetFreqX - s.freqX) * 0.12;
      s.freqY += (s.targetFreqY - s.freqY) * 0.12;

      // Velocity decay
      s.vel *= 0.92;

      if (s.isHovered) {
        // Organic dynamic wave scale based on cursor presence & speed
        s.targetScale = 18 + Math.min(s.vel * 2.2, 45);
        s.targetFreqX = 0.015 + Math.sin(s.time * 2.5) * 0.006;
        s.targetFreqY = 0.065 + Math.cos(s.time * 3) * 0.018;
      } else {
        s.targetScale = 0;
        s.targetFreqX = 0.015;
        s.targetFreqY = 0.065;
      }

      if (dispRef.current) {
        dispRef.current.setAttribute('scale', s.scale.toFixed(2));
      }

      if (turbRef.current && s.scale > 0.02) {
        turbRef.current.setAttribute('baseFrequency', `${s.freqX.toFixed(4)} ${s.freqY.toFixed(4)}`);
        if (Math.floor(s.time * 12) % 18 === 0) {
          turbRef.current.setAttribute('seed', String(Math.floor(s.time * 3) % 100));
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    const s = state.current;
    s.isHovered = true;

    const dx = e.clientX - s.lastX;
    const dy = e.clientY - s.lastY;
    const speed = Math.sqrt(dx * dx + dy * dy);

    s.vel = Math.min(s.vel + speed * 0.7, 30);
    s.lastX = e.clientX;
    s.lastY = e.clientY;
  };

  const handleMouseEnter = (e) => {
    const s = state.current;
    s.isHovered = true;
    s.lastX = e.clientX;
    s.lastY = e.clientY;
    s.vel = 15;
  };

  const handleMouseLeave = () => {
    const s = state.current;
    s.isHovered = false;
    s.vel = 0;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block cursor-pointer select-none ${className}`}
    >
      {/* SVG Liquid Wave Turbulence Filter */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter
            id={filterId.current}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
          >
            <feTurbulence
              ref={turbRef}
              type="turbulence"
              baseFrequency="0.015 0.065"
              numOctaves="2"
              result="noise"
              seed="1"
            />
            <feDisplacementMap
              ref={dispRef}
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Filtered Text Element with GPU acceleration */}
      <div
        style={{ filter: `url(#${filterId.current})` }}
        className="transition-transform duration-75 ease-out will-change-transform inline-block"
      >
        <span className="text-white">{text}</span>
        <span className="text-[#E3280C]">{accent[0]}</span>
        <span className="text-white">{accent.slice(1)}</span>
      </div>
    </div>
  );
}
