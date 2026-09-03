import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'outline-dark' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105 hover:shadow-primary/30",
    outline: "border-2 border-black/10 text-stone-900 hover:bg-stone-900 hover:text-white",
    "outline-dark": "border border-white/20 bg-white/10 text-white hover:bg-white hover:text-stone-950 shadow-sm",
    ghost: "text-gray-700 hover:text-primary hover:bg-primary/5",
    whatsapp: "bg-[#1da851] text-white shadow-lg shadow-green-600/20 hover:scale-105 hover:bg-[#16803d]"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
