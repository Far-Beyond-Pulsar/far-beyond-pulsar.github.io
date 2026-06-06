"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PILLARS = [
  {
    logo: "/logos/rust.png",
    title: "Rust all the way down",
    body: "The editor, renderer, physics, and plugins are all standard Rust. Your project is a Cargo workspace with an ECS core — no managed runtime, no garbage collector. An optional bytecode VM for visual scripts calls into Rust-backed dynamic libraries, giving you rapid iteration without sacrificing native performance.",
    tag: "Cargo workspace",
    border: "hover:border-orange-500/20",
    glow: "hover:shadow-[0_0_40px_rgba(234,88,12,0.05)]",
  },
  {
    logo: "/logos/wgpu.png",
    title: "Helio — GPU-driven renderer",
    body: "Helio is Pulsar's custom wgpu renderer built from scratch. A GPU-driven pipeline with compute-shader frustum culling means the CPU hot path is O(1) regardless of scene size. Zero-copy texture sharing keeps pixel data in VRAM through the full compositor stack.",
    tag: "wgpu · Vulkan · DX12 · Metal",
    border: "hover:border-[#0ea5e9]/20",
    glow: "hover:shadow-[0_0_40px_rgba(14,165,233,0.05)]",
  },
  {
    logo: "/logos/rapier.png",
    title: "Rapier3D physics",
    body: "Pure-Rust physics running on a dedicated background thread at a fixed 60 TPS — fully decoupled from the render loop. Rigid bodies, collision detection, joints, and constraints, all deterministic and WASM-compatible.",
    tag: "Background-threaded · 60 TPS",
    border: "hover:border-purple-500/20",
    glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.05)]",
  },
];

export default function TechPillars() {
  return (
    <section id="features" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0ea5e9] mb-4">
            Core Technology
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
            A stack chosen deliberately
          </h2>
          <p className="text-white/45 text-base leading-relaxed max-w-md mx-auto">
            Every component exists because it makes the engine better — not because it was trendy.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative flex flex-col bg-[#0c0c0c] rounded-2xl p-7 border border-white/[0.07] transition-all duration-300 ${p.border} ${p.glow}`}
            >
              {/* Logo */}
              <div className="mb-6 flex items-center">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                  <Image
                    src={p.logo}
                    alt=""
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-white font-semibold text-[17px] tracking-tight mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed mb-6">
                {p.body}
              </p>

              {/* Tag */}
              <div className="mt-auto">
                <span className="inline-block px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] rounded-md text-[11px] text-white/35 font-mono tracking-wide">
                  {p.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
