
import React from 'react';

// Explicitly define className and children to ensure they are recognized by the compiler
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'whatsapp';
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
    outline: "border-2 border-black/10 text-black hover:bg-black hover:text-white",
    ghost: "text-muted-foreground hover:text-primary hover:bg-primary/5",
    whatsapp: "bg-[#25D366] text-white shadow-lg shadow-green-500/20 hover:scale-105 hover:bg-[#1da851]"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
