"use client";

import React, { useState, useEffect } from "react";

export function OrbitalSphereBackground() {
  const [shouldLoad3D, setShouldLoad3D] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only load 3D WebGL on large screens (desktop >= 1024px)
    // and when the user does not prefer reduced motion
    const isDesktop = window.innerWidth >= 1024;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isDesktop && !prefersReducedMotion) {
      // Defer 3D mounting until after initial page paint and critical resources are loaded
      const timer = setTimeout(() => {
        if ("requestIdleCallback" in window) {
          (window as any).requestIdleCallback(() => setShouldLoad3D(true));
        } else {
          setShouldLoad3D(true);
        }
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      {/* 1. Hardware-Accelerated Ambient CSS Glow (0ms CPU, 0KB Network, 60fps on all devices) */}
      <div className="absolute -top-32 -right-32 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-br from-rose-400/10 via-pink-400/5 to-transparent blur-[100px] sm:blur-[140px] transform-gpu" />
      <div className="absolute -bottom-32 -left-32 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-tr from-amber-400/10 via-rose-300/5 to-transparent blur-[100px] sm:blur-[140px] transform-gpu" />

      {/* 2. Desktop High-Performance 3D Scene (Deferred loading, desktop only) */}
      {shouldLoad3D && (
        <iframe
          src="/effects/orbital-sphere.html"
          title="Orbital Sphere Three.js Particle Effect"
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full border-0 transition-opacity duration-1000 ${
            isLoaded ? "opacity-35" : "opacity-0"
          }`}
          style={{
            filter: "drop-shadow(0 0 20px rgba(244, 63, 94, 0.15))"
          }}
        />
      )}
    </div>
  );
}
