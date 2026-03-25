"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: "/logos/rust.png",
    title: "Rust All the Way Down",
    description:
      "The editor, the renderer, the plugins — everything is Rust. Projects are standard Cargo workspaces. No custom scripting language, no VM overhead, just native performance with compile-time safety.",
    detail: "Standard Cargo workflow",
    color: "from-[#0ea5e9] to-[#06b6d4]",
    border: "border-[#0ea5e9]/20",
    glow: "rgba(14,165,233,0.12)",
  },
  {
    icon: "/logos/vulkan.png",
    title: "Zero-Copy GPU Rendering",
    description:
      "A three-layer compositor shares textures directly in GPU memory — Bevy renders the 3D viewport, GPUI renders the editor UI, and D3D11 composites them with no CPU copies. Smooth 60 FPS even with a complex scene.",
    detail: "D3D11 compositor + Bevy + GPUI",
    color: "from-[#06b6d4] to-[#0284c7]",
    border: "border-[#06b6d4]/20",
    glow: "rgba(6,182,212,0.12)",
  },
  {
    icon: "/logos/rapier.png",
    title: "Rapier3D Physics",
    description:
      "Rapier powers Pulsar's physics simulation — a pure-Rust engine running on a background thread for consistent physics ticks. Rigid body dynamics, collision detection, and constraints with deterministic results.",
    detail: "Background-threaded simulation",
    color: "from-[#0284c7] to-[#0ea5e9]",
    border: "border-[#0284c7]/20",
    glow: "rgba(2,132,199,0.12)",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative max-w-6xl mx-auto py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.2em] uppercase text-[#0ea5e9] font-semibold mb-4">
          Core Technology
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Built for Performance
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-base leading-relaxed">
          A technology stack chosen deliberately — not for hype, but because each piece makes games better.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative"
          >
            <div
              className={`relative h-full bg-[#080808] rounded-2xl p-7 border ${p.border} hover:border-opacity-60 transition-all duration-300 overflow-hidden`}
              style={{ "--glow": p.glow }}
            >
              {/* Hover gradient wash */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`absolute inset-0 blur-2xl bg-gradient-to-r ${p.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                />
                <Image
                  src={p.icon}
                  alt={p.title}
                  width={44}
                  height={44}
                  className="relative"
                />
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-bold mb-3 bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}
              >
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {p.description}
              </p>

              {/* Subtle bottom detail */}
              <div className="pt-4 border-t border-slate-800">
                <span
                  className={`text-xs font-mono bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}
                >
                  {p.detail}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
