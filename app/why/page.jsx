"use client";

import React, { useEffect, useState } from 'react';
import { 
  ZapIcon, 
  CodeIcon, 
  LayoutGridIcon, 
  ServerIcon, 
  ShieldIcon, 
  DatabaseIcon,
  TargetIcon,
  RepeatIcon,
  Code2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Vortex } from '@/components/ui/Vortex';

const FloatingIcon = ({ children, delay = 0 }) => (
  <div
    className="animate-float"
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black" />
    
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-20" />

    {/* Radial gradient */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

    {/* Animated dots */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>

    {/* Animated lines */}
    <div className="absolute inset-0">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse"
          style={{
            top: `${30 + i * 20}%`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>
  </div>
);

const FeatureHighlight = ({ 
  icon: Icon, 
  title, 
  description, 
  benefits 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 relative group"
  >
    <div className="relative z-10">
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
    {/* Hover effect overlay */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
);

function WhyPulsarPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative text-neutral-200 z-0">
      {/* Global animated background */}
      <AnimatedBackground />

      {/* Hero Section with Vortex */}
      <div className="relative">
        <Vortex
          particleCount={500}
          baseSpeed={0.2}
          rangeSpeed={1}
          baseRadius={0.5}
          rangeRadius={1}
          baseHue={210}
          backgroundColor="transparent"
          containerClassName="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-transparent" />
        </Vortex>

        <div className="relative z-10 pt-32 pb-24">
          <div className="max-w-4xl mx-auto text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative inline-block mb-6">
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 leading-tight">
                  Why Choose Pulsar
                </h1>
                <div className="absolute -left-12 bottom-0">
                  <FloatingIcon delay={1}>
                    <Code2 className="w-10 h-10 text-blue-400/80" />
                  </FloatingIcon>
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-3xl text-white mb-4"
              >
                Next-Generation Game Development
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-neutral-400"
              >
                A revolutionary platform that challenges the status quo
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Comparative Advantages */}
      <section className="relative py-24">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-3 text-white"
            >
              Beyond Traditional Game Engines
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-neutral-400 max-w-2xl mx-auto"
            >
              Pulsar Engine isn't just another game development tool—it's a paradigm shift
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              title="Modern Development"
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
          </div>
        </div>
      </section>

      {/* Horizon Integration */}
      <section className="relative py-24">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-3 text-white"
            >
              Seamless Horizon Integration
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-neutral-400 max-w-2xl mx-auto"
            >
              Pulsar Engine and Horizon provide a unified ecosystem for game development
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Unified Multiplayer Infrastructure
              </h3>
              <p className="text-neutral-400 mb-4">
                Direct integration with Horizon game servers allows easy, scalable, and efficient 
                servers for PVP games, MMOs, and more!
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default WhyPulsarPage;