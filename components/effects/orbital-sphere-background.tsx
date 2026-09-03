"use client";

import React, { useState } from "react";

export function OrbitalSphereBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
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
    </div>
  );
}
