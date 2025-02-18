import React, { useState } from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { Terminal, Boxes, Wrench } from 'lucide-react';

const FeatureExplorer = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      icon: Terminal,
      title: "Entity Component System",
      description: "High-performance game architecture with zero overhead abstractions",
      details: [
        "Lock-free parallel execution",
        "Hot-reloadable components",
        "Automatic system dependency resolution"
      ]
    },
    {
      icon: Boxes,
      title: "Modern Graphics Pipeline",
      description: "Next-generation rendering capabilities powered by Vulkan",
      details: [
        "Ray-traced global illumination",
        "Physically based materials",
        "Advanced post-processing"
      ]
    },
    {
      icon: Wrench,
      title: "Development Tools",
      description: "Comprehensive suite of tools for efficient game creation",
      details: [
        "Visual material editor",
        "Real-time profiling",
        "Asset management system"
      ]
    }
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-4">
        {features.map((feature, index) => (
          <button
            key={index}
            onClick={() => setActiveFeature(index)}
            className={`w-full p-4 text-left rounded-xl transition-all duration-200 ${
              activeFeature === index 
                ? 'bg-blue-500/10 border border-blue-500/50' 
                : 'bg-neutral-900 border border-neutral-800 hover:border-blue-500/30'
            }`}
          >
            <div className="flex items-center gap-3">
              <feature.icon className={`w-5 h-5 ${
                activeFeature === index ? 'text-blue-400' : 'text-neutral-400'
              }`} />
              <span className={activeFeature === index ? 'text-blue-400' : 'text-white'}>
                {feature.title}
              </span>
            </div>
          </button>
        ))}
      </div>
      <div className="lg:col-span-2 bg-neutral-900 rounded-xl border border-neutral-800 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 text-blue-500">
            {React.createElement(features[activeFeature].icon)}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              {features[activeFeature].title}
            </h3>
            <p className="text-neutral-400">
              {features[activeFeature].description}
            </p>
          </div>
        </div>
        <ul className="space-y-3">
          {features[activeFeature].details.map((detail, index) => (
            <li key={index} className="flex items-center gap-2 text-neutral-300">
              <ChevronRightIcon className="w-4 h-4 text-blue-500" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureExplorer;