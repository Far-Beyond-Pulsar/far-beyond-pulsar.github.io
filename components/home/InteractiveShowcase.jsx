"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const capabilities = [
  {
    id: "ecs",
    title: "ECS Architecture",
    tagline: "Data-oriented by design",
    description:
      "Pulsar's Entity Component System puts data locality first. Systems process components in tight cache-friendly arrays — no virtual dispatch, no pointer chasing, just throughput.",
    color: "from-[#0ea5e9] to-[#06b6d4]",
    accent: "#0ea5e9",
  },
  {
    id: "rendering",
    title: "Vulkan Rendering",
    tagline: "GPU power, fully exposed",
    description:
      "A thin, explicit Vulkan layer gives you full control over the GPU pipeline. PBR materials, dynamic shadows, HDR tone mapping, and a path to ray tracing — all first-class.",
    color: "from-[#06b6d4] to-[#0284c7]",
    accent: "#06b6d4",
  },
  {
    id: "audio",
    title: "3D Spatial Audio",
    tagline: "Sound that moves with the world",
    description:
      "HRTF-based spatial audio with dynamic mixing and real-time effects. Position sound sources in 3D space, apply reverb zones, and keep latency imperceptible.",
    color: "from-[#0284c7] to-[#0ea5e9]",
    accent: "#0284c7",
  },
  {
    id: "networking",
    title: "Multiplayer Networking",
    tagline: "Built for latency tolerance",
    description:
      "Client-server and peer-to-peer networking baked into the engine. Rollback netcode support, delta compression, and server-authoritative physics out of the box.",
    color: "from-[#0ea5e9] to-[#06b6d4]",
    accent: "#0ea5e9",
  },
  {
    id: "assets",
    title: "Asset Pipeline",
    tagline: "No more asset hell",
    description:
      "Hot-reload assets while your game runs. The import pipeline processes meshes, textures, and audio in parallel, with streaming for large open worlds.",
    color: "from-[#06b6d4] to-[#0284c7]",
    accent: "#06b6d4",
  },
  {
    id: "cross-platform",
    title: "Cross-Platform",
    tagline: "Write once, ship everywhere",
    description:
      "Target Windows today, with Linux, macOS, mobile, WebAssembly, and console in active development. One codebase, no abstraction penalties.",
    color: "from-[#0284c7] to-[#0ea5e9]",
    accent: "#0284c7",
  },
];

export default function InteractiveShowcase() {
  const [active, setActive] = useState(0);
  const current = capabilities[active];

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
          Capabilities
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
          Everything in One Engine
        </h2>
        <p className="text-slate-400 max-w-md mx-auto text-base">
          No plugins required for the essentials. It's all there.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 items-start">
        {/* Left: nav list */}
        <div className="flex flex-col gap-1">
          {capabilities.map((cap, i) => (
            <motion.button
              key={cap.id}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className={`group relative text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                active === i
                  ? "border-[#0ea5e9]/40 bg-[#0ea5e9]/5"
                  : "border-transparent hover:border-slate-800 hover:bg-white/[0.02]"
              }`}
            >
              {active === i && (
                <motion.div
                  layoutId="capability-indicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 rounded-full bg-gradient-to-b from-[#0ea5e9] to-[#0284c7]"
                />
              )}
              <p
                className={`font-semibold text-sm transition-colors ${
                  active === i ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                }`}
              >
                {cap.title}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">{cap.tagline}</p>
            </motion.button>
          ))}
        </div>

        {/* Right: detail panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative bg-[#080808] rounded-2xl border border-slate-800 p-8 overflow-hidden"
        >
          {/* Ambient glow */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: current.accent }}
          />

          <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-4"
            style={{ color: current.accent }}>
            {current.tagline}
          </p>

          <h3 className={`text-3xl font-black mb-4 bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}>
            {current.title}
          </h3>

          <p className="text-slate-300 text-base leading-relaxed">
            {current.description}
          </p>

          {/* Pagination dots */}
          <div className="mt-8 flex gap-1.5">
            {capabilities.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-0.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-[#0ea5e9]" : "w-2 bg-slate-700"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
