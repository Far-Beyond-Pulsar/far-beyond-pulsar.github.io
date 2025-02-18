"use client";

import React, { useEffect, useState } from 'react';
import {
  GithubIcon,
  Zap,
  MonitorIcon,
  Share2Icon,
  ShieldIcon,
  MessageSquareIcon,
  BookOpenIcon,
  ChevronRightIcon,
  Sparkles,
  Code2
} from 'lucide-react';
import { motion } from 'framer-motion';


import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import CodeDemo from '@/components/CodeDemo';
import FeatureExplorer from '@/components/ui/FeatureSection/FeatureExplorer';
import PerformanceMetric from '@/components/ui/Metrics/PerformanceMetric';
import PlatformCard from '@/components/ui/Metrics/PlatformCard';
import { Vortex } from '@/components/ui/Vortex';

const AnimatedBackground = () => (
  <div className="absolute inset-0 z-0">
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

const FloatingIcon = ({ children, delay = 0 }) => (
  <div 
    className="animate-float"
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

export default function PulsarHomepage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-black text-neutral-200">
{/* Hero Section with Vortex Animation */}
<div className="relative overflow-hidden">
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
    {/* Additional gradient overlays for depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950/80" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
  </Vortex>
  
  <Section className="pt-32 pb-24 relative z-10">
    <div className="max-w-4xl mx-auto text-center relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative inline-block mb-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 leading-tight pb-5">
            Pulsar Engine
          </h1>
          <div className="absolute -left-12 bottom-0">
            <FloatingIcon delay={1}>
              <Code2 className="w-10 h-10 text-blue-400/80 mb-8"/>
            </FloatingIcon>
          </div>
        </div>

        <div className="space-y-6 mb-12">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-white px-4"
          >
            Next-Generation Game Development
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto px-4"
          >
            An open-source game engine built for the future. Powered by Rust, 
            driven by the community.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 px-4"
        >
          <Button disabled className="sm:min-w-[180px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-700/20 group-hover:opacity-75 transition-opacity" />
            <Zap className="w-5 h-5" />
            Download Pulsar
          </Button>
          <Button 
            variant="secondary" 
            href="https://github.com/Far-Beyond-Pulsar/Pulsar-Engine" 
            className="sm:min-w-[180px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 group-hover:opacity-75 transition-opacity" />
            <GithubIcon className="w-5 h-5" />
            GitHub Repository
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </Section>
</div>

      {/* Code Demo Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Built for Modern Development
            </h2>
            <p className="text-neutral-400">
              Experience the power of Rust with intuitive APIs and modern graphics
            </p>
          </div>
          <CodeDemo />
        </div>
      </Section>

      {/* Feature Explorer Section */}
      <Section dark>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Explore Key Features
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Discover the technologies that make Pulsar Engine unique
          </p>
        </div>
        <FeatureExplorer />
      </Section>

      {/* Performance Metrics Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Performance First
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Built from the ground up with performance as a core principle
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-12">
          <PerformanceMetric 
            value="<1ms" 
            label="Frame Overhead"
            description="Minimal engine overhead ensures your game logic gets maximum CPU time"
          />
          <PerformanceMetric 
            value="0%" 
            label="GC Pauses"
            description="No garbage collection means consistent, predictable performance"
          />
          <PerformanceMetric 
            value="100%" 
            label="GPU Utilization"
            description="Efficient rendering system maximizes available graphics hardware"
          />
        </div>
      </Section>

      {/* Platform Support Section */}
      <Section dark>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Deploy Everywhere
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Built for cross-platform development from the ground up
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PlatformCard
            icon={MonitorIcon}
            platform="Desktop"
            features={[
              "Windows, macOS, and Linux",
              "Native performance",
              "Hardware-specific optimizations"
            ]}
          />
          <PlatformCard
            icon={Share2Icon}
            platform="Mobile & Web"
            features={[
              "iOS and Android support",
              "WebAssembly deployment",
              "Progressive web apps"
            ]}
          />
          <PlatformCard
            icon={ShieldIcon}
            platform="Consoles"
            features={[
              "Console certification ready",
              "Platform-specific features",
              "Optimized performance"
            ]}
          />
        </div>
      </Section>

      {/* Community Section */}
      <Section dark>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Join the Community</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Be part of a growing ecosystem of developers building the future of gaming
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 hover:border-blue-500/50 transition-all">
            <MessageSquareIcon className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Discord Community</h3>
            <p className="text-neutral-400 mb-4">Join our active Discord community for real-time discussions and support.</p>
            <Button variant="secondary" className="w-full" href="#">Join Discord</Button>
          </div>
          <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 hover:border-blue-500/50 transition-all">
            <GithubIcon className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">GitHub Project</h3>
            <p className="text-neutral-400 mb-4">Contribute to the engine's development and help shape its future.</p>
            <Button variant="secondary" className="w-full" href="#">View Repository</Button>
          </div>
          <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 hover:border-blue-500/50 transition-all">
            <BookOpenIcon className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
            <p className="text-neutral-400 mb-4">Comprehensive guides and API documentation to get you started.</p>
            <Button variant="secondary" className="w-full" href="#">Read Docs</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}