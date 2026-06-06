"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BlueprintsShowcase() {
  return (
    <section className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-[#0ea5e9]/[0.03] rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.09] shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#111] border-b border-white/[0.07]">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="ml-3 text-[11px] text-white/25 font-mono">Blueprint Editor — player_controller.bp</span>
              </div>
              <Image
                src="/sample_pics/engine_bps.png"
                alt="Visual Blueprints"
                width={900}
                height={540}
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0ea5e9] mb-4">
              Visual Scripting
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 leading-tight">
              Blueprints that compile <br className="hidden sm:block" />
              to native Rust.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-6">
              Visual blueprint graphs are a first-class frontend for Rust code.
              Annotate any function with <code className="font-mono text-sm text-[#0ea5e9]/80 bg-white/[0.04] px-1.5 py-0.5 rounded">#[blueprint]</code> and
              it appears as a node in the graph editor. Pure functions, exec-flow nodes, events, and
              control flow are all supported out of the box.
            </p>
            <p className="text-white/45 text-base leading-relaxed mb-8">
              At runtime, blueprints execute through a lightweight bytecode VM that calls directly
              into Rust-backed dynamic libraries — giving designers fast iteration without touching
              source, and engineers full native performance where it counts.
            </p>
            <a
              href="/docs"
              className="inline-flex items-center gap-2 text-sm text-[#0ea5e9] hover:text-[#38bdf8] font-medium transition-colors"
            >
              Read the Blueprint docs
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
