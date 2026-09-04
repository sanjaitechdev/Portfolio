import React, { useRef, useEffect } from 'react';

export default function InteractiveString({
  className = '',
  height = 80,
  strokeColor = '#000000',
  strokeWidth = 3
}) {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const animFrameRef = useRef(null);

  // Physics state
  const state = useRef({
    width: 1000,
    height: height,
    cx: 500,
    cy: height / 2,
    targetCy: height / 2,
    vy: 0,
    isHovered: false,
    stiffness: 0.075, // Moderate, natural spring tension
    damping: 0.86     // Clean damping that settles smoothly after 3-4 gentle bounces
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Resize observer to keep width responsive
    const updateDimensions = () => {
      const rect = container.getBoundingClientRect();
      state.current.width = rect.width;
      state.current.height = height;
      state.current.cx = rect.width / 2;
      state.current.targetCy = height / 2;
      if (!state.current.isHovered) {
        state.current.cy = height / 2;
      }
    };

    updateDimensions();
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(container);

    // Spring physics animation loop
    const animate = () => {
      const s = state.current;

      if (!s.isHovered) {
        // Natural harmonic spring oscillator
        const displacement = s.cy - s.targetCy;
        const force = -s.stiffness * displacement;
        s.vy += force;
        s.vy *= s.damping;
        s.cy += s.vy;

        // When nearly settled, snap to exact center
        if (Math.abs(s.vy) < 0.005 && Math.abs(displacement) < 0.05) {
          s.cy = s.targetCy;
          s.vy = 0;
        }
      }

      // Render Quadratic Bezier Path: M 0,center Q cx,cy width,center
      if (pathRef.current) {
        const centerY = s.height / 2;
        const d = `M 0,${centerY} Q ${s.cx},${s.cy} ${s.width},${centerY}`;
        pathRef.current.setAttribute('d', d);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [height]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const s = state.current;
    s.isHovered = true;
    s.cx = Math.max(10, Math.min(s.width - 10, mouseX));
    
    // Stretch control point smoothly
    const centerY = s.height / 2;
    const dy = mouseY - centerY;
    s.cy = centerY + dy * 0.85;
  };

  const handleMouseLeave = () => {
    const s = state.current;
    s.isHovered = false;
    // Impart natural pluck release impulse
    const displacement = s.cy - s.targetCy;
    s.vy = -displacement * 0.22;
  };

  const handleMouseEnter = (e) => {
    const s = state.current;
    s.isHovered = true;
    handleMouseMove(e);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full cursor-grab active:cursor-grabbing select-none overflow-visible ${className}`}
      style={{ height: `${height}px` }}
    >
      <svg
        className="w-full h-full overflow-visible pointer-events-none"
        style={{ width: '100%', height: `${height}px` }}
      >
        {/* Solid Black Interactive Elastic String Line */}
        <path
          ref={pathRef}
          d={`M 0,${height / 2} Q 500,${height / 2} 1000,${height / 2}`}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
