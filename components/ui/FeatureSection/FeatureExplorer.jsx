import React, { useState } from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { Terminal, Boxes, Wrench, Code } from 'lucide-react';

const FeatureExplorer = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      icon: Terminal,
      title: "Hybrid Architecture",
      description: "Traditional class-based core enhanced with a flexible component system",
      details: [
        "Object-oriented core with class inheritance",
        "Composable component system for flexibility",
        "High-performance parallel execution for systems"
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
    },
    {
      icon: Code,
      title: "Blueprint System",
      description: "Visual scripting that transpiles to native Rust code with zero runtime overhead",
      details: [
        "Visual programming with full Rust type system",
        "Hot-reloading during development",
        "Direct compilation to native code"
      ],
      image: "/engine_bps.png"
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
              <feature.icon className={`w-5 h-5 transition-colors duration-200 ${
                activeFeature === index ? 'text-blue-400' : 'text-neutral-400'
              }`} />
              <span className={`transition-colors duration-200 ${activeFeature === index ? 'text-blue-400' : 'text-white'}`}>
                {feature.title}
              </span>
            </div>
          </button>
        ))}
      </div>
      <div className="lg:col-span-2">
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6">
          <div className="grid grid-cols-1 transition-all duration-300">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`col-start-1 row-start-1 transition-all duration-300 ${
                  activeFeature === index 
                    ? 'opacity-100 translate-y-0 visible' 
                    : 'opacity-0 translate-y-4 invisible h-0'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 text-blue-500">
                    <feature.icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
                {feature.image && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-auto"
                    />
                  </div>
                )}
                <ul className="space-y-3">
                  {feature.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2 text-neutral-300">
                      <ChevronRightIcon className="w-4 h-4 text-blue-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureExplorer;