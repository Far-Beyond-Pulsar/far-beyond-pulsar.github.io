"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: "/logos/rust.png",
    title: "Built with Rust",
    description:
      "Memory safety and fearless concurrency without a garbage collector. Pulsar's core is Rust all the way down — no runtime surprises, no undefined behavior, just fast deterministic code.",
    detail: "Zero-cost abstractions",
    color: "from-[#0ea5e9] to-[#06b6d4]",
    border: "border-[#0ea5e9]/20",
    glow: "rgba(14,165,233,0.12)",
  },
  {
    icon: "/logos/vulkan.png",
    title: "Next-Gen Graphics",
    description:
      "Direct access to Vulkan and WebGPU gives you the full power of modern GPU hardware. PBR rendering, ray tracing support, and HDR pipelines — built to ship games that look stunning.",
    detail: "Ray tracing ready",
    color: "from-[#06b6d4] to-[#0284c7]",
    border: "border-[#06b6d4]/20",
    glow: "rgba(6,182,212,0.12)",
  },
  {
    icon: "/logos/rapier.png",
    title: "Advanced Physics",
    description:
      "Rapier powers Pulsar's physics — a pure-Rust simulation engine capable of thousands of rigid bodies per frame with stable, deterministic results across platforms.",
    detail: "10k+ bodies/frame",
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
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
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
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.12, duration: 0.55 }}
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
