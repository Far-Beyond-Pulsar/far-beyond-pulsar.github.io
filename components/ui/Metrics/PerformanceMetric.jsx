"use client";

import React from 'react';

const PerformanceMetric = ({ value, label, description }) => (
  <div className="group">
    <div className="bg-neutral-900/50 px-6 py-4 rounded-lg border border-neutral-800">
      <div className="flex flex-col gap-1">
        <div className="text-3xl font-bold text-white">
          {value}
        </div>
        <div className="text-sm text-neutral-400">
          {label}
        </div>
        <div className="mt-2 text-xs text-neutral-500 font-medium">
          {description}
        </div>
      </div>
    </div>
  </div>
);

export default PerformanceMetric;