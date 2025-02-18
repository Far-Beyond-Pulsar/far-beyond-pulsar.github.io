"use client";

import React from 'react';

const Button = ({ children, disabled, variant = "primary", href, className = "", ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: `${disabled ? "bg-blue-600 opacity-50 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"} text-white shadow-lg`,
    secondary: "bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800",
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button disabled={disabled} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
