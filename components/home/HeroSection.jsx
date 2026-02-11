"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Media slideshow - can contain images or videos
const heroMedia = [
  { type: "image", src: "/sample_pics/level_editor.png", title: "Level Editor" },
  { type: "image", src: "/sample_pics/profiler.png", title: "Engine Profiler" },
  { type: "image", src: "/sample_pics/level_editor(file_drawer).png", title: "Asset Browser" },
  { type: "image", src: "/sample_pics/engine_bps.png", title: "Engine Runtime" },
  { type: "image", src: "/sample_pics/db_editor.png", title: "Database Editor" },
  { type: "image", src: "/sample_pics/docs.png", title: "Documentation" },
  { type: "image", src: "/sample_pics/panels1.png", title: "Multi-Panel Layout" },
  { type: "image", src: "/sample_pics/panels2.png", title: "Advanced Panels" },
  { type: "image", src: "/sample_pics/terminal.png", title: "Integrated Terminal" },
  // Future: Add videos like { type: "video", src: "/hero-video.mp4", title: "Gameplay" }
];

export default function HeroSection() {
  const [currentMedia, setCurrentMedia] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % heroMedia.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-transparent">
      {/* Media Slideshow Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMedia}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {heroMedia[currentMedia].type === "image" ? (
              <Image
                src={heroMedia[currentMedia].src}
                alt={heroMedia[currentMedia].title}
                fill
                className="object-cover opacity-60"
                priority
              />
            ) : (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              >
                <source src={heroMedia[currentMedia].src} type="video/mp4" />
              </video>
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      <div className="relative z-20 px-4 max-w-7xl mx-auto w-full">
        {/* Logo with animated glow */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative inline-block mb-8"
        >
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#0ea5e9] via-[#06b6d4] to-[#0284c7] opacity-60 animate-pulse" />
          <Image 
            src="/logos/pulsar.png" 
            alt="Pulsar Logo" 
            width={120} 
            height={120} 
            className="relative drop-shadow-2xl"
          />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8"
        >
          <span className="inline-block bg-gradient-to-r from-[#0ea5e9] via-[#06b6d4] to-[#0284c7] bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl">
            PULSAR
          </span>
        </motion.h1>

        {/* Simple tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto mb-12"
        >
          The Next Generation Game Engine
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-32"
        >
          <Link href="/docs/docs/getting-started/installation/windows">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(14, 165, 233, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white font-bold text-lg shadow-2xl"
            >
              Get Started
            </motion.button>
          </Link>
          
          <Link href="/docs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl border-2 border-[#06b6d4] bg-[#06b6d4]/10 text-white font-bold text-lg backdrop-blur-sm"
            >
              Documentation
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-slate-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
