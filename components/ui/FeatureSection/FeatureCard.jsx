"use client";

import React from 'react';

const FeatureCard = ({ icon: Icon, title, description, features }) => (
  <div className="group p-6 bg-neutral-900 rounded-xl border border-neutral-800 
    hover:border-blue-500/50 transition-all duration-300 ease-in-out
    hover:shadow-lg hover:-translate-y-1">
    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 
      group-hover:bg-blue-500/20 transition-colors">
      <Icon className="w-6 h-6 text-blue-500" />
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-neutral-400 text-sm mb-4">{description}</p>
    {features && (
      <ul className="text-neutral-500 text-sm space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
            {feature}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default FeatureCard;