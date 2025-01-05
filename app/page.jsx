"use client"

import React, { useRef, useEffect, useState } from 'react';
import { Grid, Code, Box, Cpu, Zap, Github, Book, Users } from 'lucide-react';

const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setDisplayValue(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);
  
  return displayValue;
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] group">
    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
      <Icon className="w-6 h-6 text-blue-500" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const RotatingCube = () => {
  const cubeRef = useRef(null);
  
  useEffect(() => {
    let frame = 0;
    const animate = () => {
      if (cubeRef.current) {
        frame += 0.5;
        cubeRef.current.style.transform = `rotateX(${frame}deg) rotateY(${frame}deg)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="w-16 h-16 relative" style={{ perspective: '600px' }}>
      <div
        ref={cubeRef}
        className="w-full h-full bg-blue-600 rounded absolute transition-transform duration-75"
        style={{ transformStyle: 'preserve-3d' }}
      />
    </div>
  );
};

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const viewportRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    setMounted(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const features = [
    {
      icon: Cpu,
      title: "High Performance",
      description: "Built with Rust for maximum speed and reliability"
    },
    {
      icon: Code,
      title: "Modern Architecture",
      description: "Component-based design with hot reloading"
    },
    {
      icon: Box,
      title: "Physics Engine",
      description: "Advanced physics simulation powered by Rust"
    },
    {
      icon: Zap,
      title: "Fast Workflows",
      description: "Streamlined development with instant feedback"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200">

      {/* Hero Section */}
      <section className="pt-24 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-blue-500">Game Development</span>
                <span className="block text-white">Reimagined in Rust</span>
              </h1>
              
              <p className="text-lg text-gray-400">
                A modern, high-performance game engine built with Rust, 
                featuring real-time physics, advanced rendering, and 
                native cross-platform support.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] line-through">
                  Download Pulsar
                </button>
                <a href="https://github.com/Far-Beyond-Pulsar/Pulsar-Engine" target='_blank'>
                  <button className="px-6 py-3 border border-gray-700 hover:border-blue-500 rounded text-gray-300 transition-all duration-300">
                    View Github
                  </button>
                </a>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Grid className="w-4 h-4" />
                  Built with Rust
                </div>
                <div>•</div>
                <div>Open Source</div>
                <div>•</div>
                <div>Cross-Platform</div>
              </div>
            </div>

            <div ref={viewportRef} className="relative">
              <div className="bg-gray-900 rounded-lg border border-gray-800 p-1 transition-transform duration-500 hover:scale-[1.02]">
                <img src="/engine-home.png" alt="Pulsar Engine" width={800} height={600} className='rounded-md' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features"
        ref={el => sectionsRef.current[0] = el}
        className="py-24"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Modern Game Development
            </h2>
            <p className="text-gray-400">
              Experience the perfect balance of performance, productivity, and power
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible.features
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        id="stats"
        ref={el => sectionsRef.current[1] = el}
        className=""
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              // { label: "FPS Improvement", value: 200, suffix: "%" },
              // { label: "Memory Usage", value: 60, suffix: "% Less" },
              // { label: "Development Time", value: 40, suffix: "% Faster" },
              // { label: "GitHub Stars", value: 5000, suffix: "+" }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible.stats
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;