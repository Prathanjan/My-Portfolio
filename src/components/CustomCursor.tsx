import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailerPos, setTrailerPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState<'button' | 'card' | 'link' | 'none'>('none');
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });

  const requestRef = useRef<number | null>(null);
  const lastPosRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Detect touch-only devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      const vx = e.clientX - lastPosRef.current.x;
      const vy = e.clientY - lastPosRef.current.y;
      setVelocity({ x: vx, y: vy });
      lastPosRef.current = { x: e.clientX, y: e.clientY };

      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const buttonEl = target.closest('button, [role="button"], #floating-resume-btn, #floating-scroll-top-btn');
        const cardEl = target.closest('.glass-card, .clickable');
        const linkEl = target.closest('a, input, textarea, select');

        if (buttonEl) {
          setIsHovered(true);
          setHoverType('button');
        } else if (cardEl) {
          setIsHovered(true);
          setHoverType('card');
        } else if (linkEl) {
          setIsHovered(true);
          setHoverType('link');
        } else {
          setIsHovered(false);
          setHoverType('none');
        }
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp trailing animation
  useEffect(() => {
    if (isTouchDevice) return;

    const followCursor = () => {
      setTrailerPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.25,
          y: prev.y + dy * 0.25,
        };
      });
      requestRef.current = requestAnimationFrame(followCursor);
    };

    requestRef.current = requestAnimationFrame(followCursor);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  // Calculate subtle dynamic rotation tilt based on mouse velocity
  const angle = Math.min(Math.max((velocity.x * 0.4), -25), 25);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      
      {/* Outer Smooth Trailing Cyber Target Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-all duration-150 ease-out border ${
          isHovered
            ? hoverType === 'button'
              ? 'w-14 h-14 -mt-7 -ml-7 border-teal-300/90 bg-teal-400/20 shadow-[0_0_20px_rgba(20,184,166,0.5)] scale-110'
              : 'w-12 h-12 -mt-6 -ml-6 border-cyan-400/80 bg-cyan-500/15 shadow-[0_0_18px_rgba(6,182,212,0.4)] scale-105'
            : 'w-8 h-8 -mt-4 -ml-4 border-cyan-400/50 bg-cyan-500/10 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
        } ${isClicked ? 'scale-75 bg-teal-400/40 border-teal-300' : ''}`}
        style={{
          transform: `translate3d(${trailerPos.x}px, ${trailerPos.y}px, 0)`,
        }}
      >
        {/* Reticle ticks on hover */}
        {isHovered && (
          <>
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-teal-300 rounded-full" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-teal-300 rounded-full" />
            <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-1.5 h-0.5 bg-teal-300 rounded-full" />
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-0.5 bg-teal-300 rounded-full" />
          </>
        )}
      </div>

      {/* Main Precision Arrow Pointer */}
      <div
        className="fixed top-0 left-0 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) rotate(${angle}deg)`,
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`drop-shadow-[0_0_10px_rgba(6,182,212,0.95)] -mt-1 -ml-1 transition-transform ${
            isClicked ? 'scale-90' : isHovered ? 'scale-110' : 'scale-100'
          }`}
        >
          {/* Main Arrow Body - Futuristic Stealth Wing */}
          <path
            d="M2.5 2.5L10.5 24.5L14.8 14.8L24.5 10.5L2.5 2.5Z"
            fill="url(#stealth-gradient)"
            stroke="#020617"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Inner Cyan High Tech Accent Core */}
          <path
            d="M2.5 2.5L14.8 14.8"
            stroke="#22d3ee"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Precision Cross Notch */}
          <path
            d="M10.5 24.5L14.8 14.8L24.5 10.5"
            stroke="#5eead4"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Core Energy Gem Dot */}
          <circle cx="2.5" cy="2.5" r="1.5" fill="#ffffff" />

          <defs>
            <linearGradient id="stealth-gradient" x1="2.5" y1="2.5" x2="24.5" y2="24.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" />
              <stop offset="0.6" stopColor="#0d9488" />
              <stop offset="1" stopColor="#0284c7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Small Floating Pulse Dot on Hover */}
        {isHovered && (
          <span className="absolute top-5 left-5 w-2 h-2 rounded-full bg-teal-300 shadow-[0_0_10px_#2dd4bf] animate-ping" />
        )}
      </div>

    </div>
  );
};
