"use client";

import React from "react";
import { MotionReveal } from "./motion-reveal";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up"
}: RevealProps) {
  return (
    <MotionReveal
      className={className}
      delay={delay}
      direction={direction}
      distance={30}
      duration={0.7}
      once={true}
    >
      {children}
    </MotionReveal>
  );
}
