"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const FEATURES = [
  "Visual blueprint scripting backed by a Rust-native bytecode VM",
  "Multi-panel layout — dockable viewport, asset browser, terminal, profiler",
  "Integrated Rust Analyzer LSP for in-editor code intelligence",
  "Live scene editing with real-time physics preview at fixed 60 TPS",
  "Plugin system — extend the editor with hot-reloadable Rust DLLs",
  "Built-in database editor and project-level asset management",
];

export default function EditorPreview() {
  return (
    <section className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0ea5e9] mb-4">
              The Editor
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 leading-tight">
              A professional environment, <br className="hidden sm:block" />
              without the lock-in.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-8">
              Pulsar's editor is built on GPUI — the same GPU-accelerated UI framework that
              powers the Zed editor. It runs in its own thread, meaning a game crash never
              takes down your workspace. Everything you see can be replaced or extended with a
              compiled Rust plugin.
            </p>

            <ul className="space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full bg-[#0ea5e9]/15 border border-[#0ea5e9]/30 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-[#0ea5e9]" />
                  </span>
                  <span className="text-sm text-white/55 leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-[#0ea5e9]/[0.04] rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-white/[0.09] shadow-2xl">
              {/* Fake title bar */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#111] border-b border-white/[0.07]">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="ml-3 text-[11px] text-white/25 font-mono">Pulsar Editor — default.scene</span>
              </div>
              <Image
                src="/sample_pics/panels1.png"
                alt="Pulsar Editor"
                width={900}
                height={540}
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
