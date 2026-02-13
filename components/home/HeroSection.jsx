"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const heroMedia = [
  { type: "image", src: "/sample_pics/level_editor.png", label: "Level Editor" },
  { type: "image", src: "/sample_pics/profiler.png", label: "Profiler" },
  { type: "image", src: "/sample_pics/level_editor(file_drawer).png", label: "Asset Browser" },
  { type: "image", src: "/sample_pics/engine_bps.png", label: "Engine Runtime" },
  { type: "image", src: "/sample_pics/db_editor.png", label: "Database Editor" },
  { type: "image", src: "/sample_pics/panels1.png", label: "Multi-Panel Layout" },
  { type: "image", src: "/sample_pics/terminal.png", label: "Integrated Terminal" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % heroMedia.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-black" data-darkreader-ignore>
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0" data-darkreader-ignore>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroMedia[current].src}
              alt={heroMedia[current].label}
              fill
              className="object-cover"
              priority
              data-darkreader-ignore
            />
          </motion.div>
        </AnimatePresence>
        {/* Multi-layer overlay: heavy vignette + dark center so text pops */}
        <div className="absolute inset-0 bg-black/65" data-darkreader-ignore />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" data-darkreader-ignore />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" data-darkreader-ignore />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-5xl mx-auto w-full flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1 }}
          className="relative mb-6"
          data-darkreader-ignore
        >
          <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] opacity-50 rounded-full scale-150" data-darkreader-ignore />
          <Image
            src="/logos/pulsar.png"
            alt="Pulsar"
            width={96}
            height={96}
            className="relative drop-shadow-2xl"
            data-darkreader-ignore
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-5"
          data-darkreader-ignore
        >
          <span className="inline-block bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#0284c7] bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl" data-darkreader-ignore>
            PULSAR
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto mb-10 font-light tracking-wide"
        >
          A next-generation game engine built in Rust — fast, safe, open source.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <Link href="/docs/docs/getting-started/installation/windows">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(14,165,233,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white font-semibold text-base shadow-xl"
              data-darkreader-ignore
            >
              Get Started
            </motion.button>
          </Link>
          <Link href="/docs">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-xl border border-slate-600 bg-white/5 text-white font-semibold text-base backdrop-blur-sm hover:border-[#0ea5e9]/60 transition-colors"
            >
              Documentation
            </motion.button>
          </Link>
          <a href="https://github.com/Far-Beyond-Pulsar" target="_blank" rel="noopener">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-xl border border-slate-700 bg-transparent text-slate-300 font-semibold text-base hover:text-white hover:border-slate-500 transition-colors"
            >
              GitHub
            </motion.button>
          </a>
        </motion.div>
      </div>

      {/* Slide label pill */}
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-20 left-0 right-0 z-10 flex flex-col items-center justify-center gap-3 w-full"
        data-darkreader-ignore
      >
        <span className="text-sm text-slate-300 tracking-widest uppercase font-medium">
          {heroMedia[current].label}
        </span>
        <div className="flex gap-2 items-center justify-center">
          {heroMedia.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`View ${heroMedia[i].label}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-[#0ea5e9]" : "w-2 bg-slate-600 hover:bg-slate-500"
              }`}
              data-darkreader-ignore
            />
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-slate-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
