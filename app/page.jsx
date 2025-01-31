"use client";

import React, { useRef, useEffect, useState } from 'react';
import {
  CodeIcon,
  GithubIcon,
  CpuIcon,
  ZapIcon,
  LayersIcon,
  ServerIcon,
  DatabaseIcon,
  TerminalIcon,
  LayoutGridIcon,
  NetworkIcon,
  CloudIcon,
  BrushIcon,
  PlayIcon
} from 'lucide-react';

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-apple content-center mx-auto ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
        } ${className}`}
    >
      {children}
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, features }) => (
  <div className="group p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 
    hover:border-blue-500/50 transition-all duration-300 
    hover:shadow-[0_15px_30px_rgba(59,130,246,0.1)] 
    hover:-translate-y-2 ease-apple">
    <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 
      group-hover:bg-blue-500/20 transition-colors">
      <Icon className="w-8 h-8 text-blue-500" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-neutral-400 mb-4">{description}</p>
    {features && (
      <ul className="text-neutral-500 text-sm space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default function PulsarHomepage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-neutral-200 overflow-x-hidden relative">
      {/* Parallax Background Image for Sections After Hero */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'url(/engine-bp-with-newtab.png)',
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',

        }}
      />

      {/* Subtle Background Grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-5 z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Hero Section */}
      <section className="relative container mx-auto pt-24 pb-16 z-10 flex items-center bg-neutral-800/20 backdrop-blur-lg rounded-3xl border border-neutral-800 my-96">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-96 
              bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>

            <h1 className="text-5xl font-bold mb-5 text-white relative">
              <span className="text-blue-500">Pulsar Engine:</span>
              <br />
              Next-Generation Game Development
            </h1>

            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
              A cutting-edge, Rust-powered game engine designed for high-performance,
              cross-platform game development with an intuitive, modular architecture.
            </p>

            <div className="flex justify-center space-x-4">
              <button
                disabled
                className="px-8 py-3 bg-blue-600 text-white rounded-xl 
                  hover:bg-blue-700 transition-all duration-300 
                  cursor-not-allowed opacity-50 
                  shadow-[0_10px_30px_rgba(59,130,246,0.2)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)]"
              >
                Coming Soon
              </button>
              <a
                href="https://github.com/Far-Beyond-Pulsar/Pulsar-Engine"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-neutral-700 
                  text-neutral-300 rounded-xl 
                  hover:bg-neutral-900 transition-all duration-300 
                  flex items-center gap-2
                  hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)]"
              >
                <GithubIcon className="w-5 h-5" />
                GitHub Repository
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <div className='bg-black text-neutral-200 overflow-x-hidden relative'>
        {/* Core Architecture */}
        <section className="container mx-auto px-6 my-24 py-24 bg-black/70 relative z-20">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3 text-white">
                Core Architecture
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                A modular, performance-driven design built from the ground up in Rust
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              <FeatureCard
                icon={CpuIcon}
                title="High-Performance Core"
                description="Leveraging Rust's zero-cost abstractions"
                features={[
                  "Memory-safe system design",
                  "Lock-free concurrency",
                  "Compile-time optimizations"
                ]}
              />
              <FeatureCard
                icon={LayoutGridIcon}
                title="Modular Components"
                description="Flexible, composable architecture"
                features={[
                  "Entity-Component-System",
                  "Dynamic plugin support",
                  "Hot-reloadable modules"
                ]}
              />
              <FeatureCard
                icon={NetworkIcon}
                title="Advanced Networking"
                description="Robust multiplayer infrastructure"
                features={[
                  "UDP and TCP support",
                  "Low-latency synchronization",
                  "Scalable architecture"
                ]}
              />
              <FeatureCard
                icon={ServerIcon}
                title="Cross-Platform"
                description="Deploy everywhere with ease"
                features={[
                  "Windows, macOS, Linux",
                  "Mobile and Web export",
                  "Native performance"
                ]}
              />
            </div>
          </AnimatedSection>
        </section>

        {/* Rendering Capabilities */}
        <section className="container mx-auto px-6 my-24 py-24 bg-black/70 relative z-20">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3 text-white">
                Rendering & Graphics
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Next-generation rendering with advanced real-time capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              <FeatureCard
                icon={LayersIcon}
                title="Physically Based Rendering"
                description="Advanced graphics with real-time illumination"
                features={[
                  "Metallic/Roughness workflow",
                  "Advanced material system",
                  "Real-time ray tracing"
                ]}
              />
              <FeatureCard
                icon={BrushIcon}
                title="Material Editor"
                description="Powerful node-based material creation"
                features={[
                  "Visual shader graph",
                  "Custom shader support",
                  "Real-time preview"
                ]}
              />
              <FeatureCard
                icon={CloudIcon}
                title="Advanced Lighting"
                description="Sophisticated lighting technologies"
                features={[
                  "Dynamic global illumination",
                  "Volumetric lighting",
                  "Cascaded shadow maps"
                ]}
              />
              <FeatureCard
                icon={PlayIcon}
                title="Particle System"
                description="GPU-accelerated particle simulation"
                features={[
                  "Compute shader based",
                  "Multi-threaded simulation",
                  "Complex behavior graphs"
                ]}
              />
            </div>
          </AnimatedSection>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-6 my-24 py-24 bg-black/70 relative z-20">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-5 text-white">
                Transform Your Game Development
              </h2>
              <p className="text-xl text-neutral-400 mb-8">
                Empower your creativity with a high-performance engine
                designed for modern game development.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  disabled
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl
                    hover:bg-blue-700 transition-all duration-300
                    cursor-not-allowed opacity-50
                    shadow-[0_10px_30px_rgba(59,130,246,0.2)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)]"
                >
                  Download Pulsar
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
                  <GithubIcon className="w-5 h-5 mr-2 inline-block" />
                  Explore Repository
                </a>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}