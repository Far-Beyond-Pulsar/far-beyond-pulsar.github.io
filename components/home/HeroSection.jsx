"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, ArrowRight, Download } from "lucide-react";

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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-24 pb-20">
      {/* Grid guide lines — editorial backbone */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-8 items-center">
        {/* Left — editorial statement */}
        <div className="flex flex-col items-start">
          {/* Kicker — mono eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-3 mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40"
          >
            <span className="w-8 h-px bg-[#38bdf8]/70" />
            <span>Pulsar Engine — 01 / Home</span>
          </motion.div>

          {/* Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <Image
              src="/logos/pulsar.png"
              alt=""
              width={48}
              height={48}
              className="opacity-90"
            />
          </motion.div>

          {/* Headline — anchored left, first line solid, second outline */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
            className="text-[2.75rem] sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-[0.98] text-white mb-6"
          >
            Build without
            <br />
            <span className="text-outline-accent" data-text="limits.">limits.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg text-white/50 max-w-xl leading-relaxed font-light mb-10"
          >
            An open-source game engine written entirely in Rust. Custom GPU-driven renderer,
            ECS core, visual blueprint scripting, and a crash-isolated editor — built to compete
            at the highest level.
          </motion.p>

          {/* CTAs — mono, squared */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="/docs/docs/getting-started/installation/windows"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-mono text-[12px] uppercase tracking-[0.12em] rounded-md transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/Far-Beyond-Pulsar/Pulsar-Native"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/[0.15] hover:border-white/30 bg-white/[0.04] hover:bg-white/[0.07] text-white/80 hover:text-white font-mono text-[12px] uppercase tracking-[0.12em] rounded-md transition-all backdrop-blur-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-white/45 hover:text-white/70 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </Link>
          </motion.div>

          {/* Mono spec row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.14em] text-white/30"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse-dot" />
              Rust · 100%
            </span>
            <span className="hidden sm:block h-3 w-px bg-white/15" />
            <span className="hidden sm:block">GPU-driven</span>
            <span className="hidden sm:block h-3 w-px bg-white/15" />
            <span className="hidden sm:block">MIT license</span>
          </motion.div>
        </div>

        {/* Right — framed screenshot, bleeding off the right edge */}
        <div className="relative lg:justify-self-end w-full max-w-[720px] lg:-mr-[max(0px,calc((100vw-1400px)/2-48px))]">
          {/* Ghost index */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="hidden lg:block absolute -top-8 -left-10 font-mono text-[11px] uppercase tracking-[0.18em] text-white/30"
          >
            Fig. 01 — Engine
          </motion.div>

          {/* Frame with corner ticks */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="relative border border-white/[0.1] bg-[#0b0d10] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]"
          >
            {/* Corner ticks */}
            <span className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-[#38bdf8]/70 z-10" />
            <span className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-[#38bdf8]/70 z-10" />
            <span className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-[#38bdf8]/70 z-10" />
            <span className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-[#38bdf8]/70 z-10" />

            {/* Title bar */}
            <div className="flex items-center justify-between px-3.5 py-2 border-b border-white/[0.08] bg-black/60">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/15" />
                <span className="w-2 h-2 rounded-full bg-white/15" />
                <span className="w-2 h-2 rounded-full bg-[#0ea5e9]/60" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                {SLIDES[current].label}
              </span>
              <span className="font-mono text-[10px] text-white/25">
                {String(current + 1).padStart(2, "0")}/{String(SLIDES.length).padStart(2, "0")}
              </span>
            </div>

            {/* Cycling screenshot */}
            <div className="relative aspect-[16/9] overflow-hidden bg-[#0b0d10]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
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
            </div>

            {/* Slide controls in footer strip */}
            <div className="flex items-center justify-between px-3.5 py-2.5 border-t border-white/[0.08] bg-black/60">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/25">
                live preview
              </span>
              <div className="flex gap-1.5">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`View ${SLIDES[i].label}`}
                    className={`h-[3px] rounded-full transition-all duration-500 ${
                      i === current ? "w-6 bg-[#0ea5e9]" : "w-2 bg-white/20 hover:bg-white/35"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Caption below frame */}
          <div className="hidden lg:flex items-center justify-between mt-3 px-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/25">
            <span>Far-Beyond-Pulsar / Pulsar-Native</span>
            <span>wgpu · Renderer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
