"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, ArrowRight } from "lucide-react";

const SLIDES = [
  { src: "/sample_pics/level_editor.png", label: "Level Editor" },
  { src: "/sample_pics/panels1.png", label: "Multi-Panel Layout" },
  { src: "/sample_pics/engine_bps.png", label: "Visual Blueprints" },
  { src: "/sample_pics/profiler.png", label: "Performance Profiler" },
  { src: "/sample_pics/level_editor(file_drawer).png", label: "Asset Browser" },
  { src: "/sample_pics/db_editor.png", label: "Database Editor" },
  { src: "/sample_pics/terminal.png", label: "Integrated Terminal" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background: cycling engine screenshots */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={SLIDES[current].src}
              alt={SLIDES[current].label}
              fill
              className="object-cover"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Layered overlays — heavy vignette, darkens corners */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 pt-20 flex flex-col items-center text-center">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse-dot" />
          <span className="text-xs text-white/60 font-medium tracking-wide">
            Early development · Open source
          </span>
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-1"
        >
          <Image
            src="/logos/pulsar.png"
            alt=""
            width={52}
            height={52}
            className="mx-auto mb-5 opacity-90"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.55 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-none text-white mb-5"
        >
          Build without&nbsp;
          <span className="text-[#38bdf8]">limits.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-base sm:text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed font-light"
        >
          An open-source game engine written entirely in Rust. Custom GPU-driven renderer,
          ECS core, visual blueprint scripting, and a crash-isolated editor — built to compete
          at the highest level.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/docs/docs/getting-started/installation/windows"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-medium text-sm rounded-xl transition-colors"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com/Far-Beyond-Pulsar/Pulsar-Native"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/[0.15] hover:border-white/30 bg-white/[0.04] hover:bg-white/[0.07] text-white/80 hover:text-white font-medium text-sm rounded-xl transition-all backdrop-blur-sm"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
          <Link
            href="/docs"
            className="inline-flex items-center px-6 py-2.5 text-white/45 hover:text-white/70 font-medium text-sm transition-colors"
          >
            Documentation
          </Link>
        </motion.div>
      </div>

      {/* Slide indicator — bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-3">
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[10px] tracking-[0.2em] uppercase text-white/35 font-medium"
          >
            {SLIDES[current].label}
          </motion.span>
        </AnimatePresence>
        <div className="flex gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`View ${SLIDES[i].label}`}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === current ? "w-7 bg-[#0ea5e9]" : "w-2 bg-white/20 hover:bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 z-10"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
