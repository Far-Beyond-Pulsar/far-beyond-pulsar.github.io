"use client";

import React from 'react';
import { 
  ZapIcon, 
  CodeIcon, 
  LayoutGridIcon, 
  ServerIcon, 
  ShieldIcon, 
  DatabaseIcon,
  TargetIcon,
  RepeatIcon
} from 'lucide-react';

import { LucideIcon } from 'lucide-react';

const FeatureHighlight = ({ 
  icon: Icon, 
  title, 
  description, 
  benefits 
}) => (
  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
    <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-blue-500" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-neutral-400 mb-4">{description}</p>
    {benefits && (
      <ul className="text-neutral-500 text-sm space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    )}
  </div>
);

function WhyPulsarPage() {
  return (
    <div className="bg-black text-neutral-200 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-5 text-white">
            Why Choose <span className="text-blue-500">Pulsar Engine</span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            A revolutionary game development platform that challenges the status quo, 
            offering unprecedented performance, flexibility, and developer experience.
          </p>
        </div>
      </section>

      {/* Comparative Advantages */}
      <section className="container mx-auto px-6 py-12 bg-neutral-900/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-white">
            Beyond Traditional Game Engines
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Pulsar Engine isn't just another game development tool—it's a paradigm shift
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 contents-center">
          <FeatureHighlight
            icon={ZapIcon}
            title="Unmatched Performance"
            description="Redefining performance expectations in game development"
            benefits={[
              "Native execution speeds",
              "Minimal runtime overhead",
              "Efficient resource utilization"
            ]}
          />

          <FeatureHighlight
            icon={CodeIcon}
            title="Modern Development Paradigm"
            description="A complete rethinking of game engine architecture"
            benefits={[
              "Truly modular component system",
              "Zero-friction plugin development",
              "Compile-time safety guarantees"
            ]}
          />

          <FeatureHighlight
            icon={LayoutGridIcon}
            title="Flexible Architecture"
            description="Break free from monolithic engine constraints"
            benefits={[
              "Mix and match development styles",
              "Custom toolchain integration"
            ]}
          />

          <FeatureHighlight
            icon={ServerIcon}
            title="Cross-Platform Mastery"
            description="Deploy anywhere without compromise"
            benefits={[
              "Consistent performance across platforms",
              "Single codebase, multiple targets",
              "Native feel on every platform"
            ]}
          />

          <FeatureHighlight
            icon={DatabaseIcon}
            title="Advanced Data Management"
            description="Intelligent asset and state management"
            benefits={[
              "Efficient resource loading",
              "Dynamic hot-reloading",
              "Comprehensive state tracking"
            ]}
          />
        </div>
      </section>

      {/* Horizon Integration */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-white">
            Seamless Horizon Integration
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Pulsar Engine and Horizon provide a unified ecosystem for game development and deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Unified Multiplayer Infrastructure
            </h3>
            <p className="text-neutral-400 mb-4">
              Direct integration with Horizon game servers allows easy, scalable, and efficient servers for PVP games, MMOs, and more!
            </p>
            <ul className="text-neutral-500 text-sm space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Lightning-fast real-time communication
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Endlessly scalable server architecture
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Seamless plugin integration
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Performance by Design
            </h3>
            <p className="text-neutral-400 mb-4">
              Horizon's lightweight design complements Pulsar's performance-first approach, 
              creating a powerful development ecosystem.
            </p>
            <ul className="text-neutral-500 text-sm space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                62KB RAM per player
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                500μs average startup time
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Not Others */}
      <section className="container mx-auto px-6 py-12 bg-neutral-900/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-white">
            Breaking Traditional Limitations
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Pulsar Engine addresses critical shortcomings of existing game development platforms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
            <TargetIcon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Performance Bottlenecks
            </h3>
            <p className="text-neutral-400">
              Existing engines often sacrifice performance for ease of use. Pulsar delivers 
              both high performance and developer-friendly tools.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
            <RepeatIcon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Rigid Architectures
            </h3>
            <p className="text-neutral-400">
              Unlike monolithic engines, Pulsar offers a truly modular approach that 
              adapts to your specific development needs.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
            <CodeIcon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Development Friction
            </h3>
            <p className="text-neutral-400">
              Complex workflows and steep learning curves are replaced with intuitive, 
              powerful development experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-5 text-white">
            Ready to Revolutionize Your Game Development?
          </h2>
          <p className="text-xl text-neutral-400 mb-8">
            Join the next generation of game development with Pulsar Engine
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              disabled
              className="px-8 py-3 bg-blue-600 text-white rounded-xl 
                hover:bg-blue-700 transition-all duration-300 
                cursor-not-allowed opacity-50
                shadow-[0_10px_30px_rgba(59,130,246,0.2)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)]"
            >
              Get Started
            </button>
            <a 
              href="https://github.com/Far-Beyond-Pulsar/Pulsar-Engine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 border border-neutral-700 
                text-neutral-300 rounded-xl 
                hover:bg-neutral-900 transition-all duration-300
                hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)]"
            >
              Explore Repository
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyPulsarPage;