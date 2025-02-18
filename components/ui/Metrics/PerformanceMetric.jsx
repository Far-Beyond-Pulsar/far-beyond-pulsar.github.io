"use client";

import React from 'react';

const PerformanceMetric = ({ value, label, description }) => (
  <div className="relative group">
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 rounded-full border-4 border-blue-500/20 flex items-center justify-center
        group-hover:border-blue-500/40 transition-all duration-300">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-500">{value}</div>
          <div className="text-sm text-neutral-300">{label}</div>
        </div>
      </div>
    </div>
    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full 
      bg-neutral-800 text-neutral-200 text-sm rounded-lg px-4 py-2 w-48 text-center
      opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
      {description}
    </div>
  </div>
);

export default PerformanceMetric;
