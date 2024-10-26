"use client";
import React, { useRef, useCallback } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import BentoGridThirdDemo from "@/components/blocks/features-section-demo-3";
import TabsDemo from "@/components/blocks/code-tabs";
import ConstructionOverlay from "./construction";

export default function Home() {
  const sparklesRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleScroll = useCallback(() => {
    if (!sparklesRef.current) return;
    const rect = sparklesRef.current.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    sparklesRef.current.style.willChange = isVisible ? 'transform' : 'auto';
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="dark min-h-screen flex flex-col">
      <ConstructionOverlay show={false} />

      <main className="flex-grow">
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
          <div ref={sparklesRef} className="absolute inset-0">
            {mounted && (
              <SparklesCore
                id="hero-sparkles"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={30}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            )}
          </div>

          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Build Amazing Games at{" "}
              <span className="relative inline-block">
                Light Speed
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              A high-performance game engine written in Rust, designed for modern
              multiplayer experiences and real-time physics simulation.
            </p>

            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 border border-gray-700 hover:border-gray-600 rounded-lg text-gray-300 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </section>

        {mounted && (
          <>
            <section id="features" className="py-20">
              <BentoGridThirdDemo />
            </section>

            <section className="py-20">
              <TabsDemo />
            </section>
          </>
        )}
      </main>
    </div>
  );
}