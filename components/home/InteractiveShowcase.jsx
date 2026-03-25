"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const capabilities = [
  {
    id: "gameobjects",
    title: "GameObject Architecture",
    tagline: "Simple and debuggable",
    description:
      "Pulsar uses straightforward GameObject structs with position, velocity, rotation, and scale — not ECS. The GameThread updates them at a fixed 60 TPS. Easy to understand, easy to debug.",
    color: "from-[#0ea5e9] to-[#06b6d4]",
    accent: "#0ea5e9",
  },
  {
    id: "rendering",
    title: "Three-Layer Compositor",
    tagline: "Zero-copy GPU composition",
    description:
      "Bevy renders the 3D viewport on a background thread, GPUI renders the editor UI on-demand, and D3D11 composites them via shared GPU textures. No CPU copies, no frame drops — the editor stays responsive even if game code hangs.",
    color: "from-[#06b6d4] to-[#0284c7]",
    accent: "#06b6d4",
  },
  {
    id: "blueprints",
    title: "Visual Scripting",
    tagline: "Blueprints powered by Rust macros",
    description:
      "Define visual scripting nodes with the #[blueprint] attribute on regular Rust functions. Pure nodes, side-effect nodes, and control flow — all registered automatically at compile time via the linkme crate.",
    color: "from-[#0284c7] to-[#0ea5e9]",
    accent: "#0284c7",
  },
  {
    id: "plugins",
    title: "Plugin System",
    tagline: "Compiled Rust DLLs, not scripts",
    description:
      "Plugins are compiled Rust dynamic libraries loaded at runtime. Full API access, native performance, type safety. Register custom file types, build editor panels with GPUI, and hook into engine events.",
    color: "from-[#0ea5e9] to-[#06b6d4]",
    accent: "#0ea5e9",
  },
  {
    id: "multiplayer",
    title: "Collaborative Editing",
    tagline: "Real-time multiplayer sessions",
    description:
      "A production-grade multiuser server handles session management, WebSocket signaling, QUIC relay, and NAT traversal. Multiple developers can edit the same project simultaneously with JWT auth and end-to-end encryption.",
    color: "from-[#06b6d4] to-[#0284c7]",
    accent: "#06b6d4",
  },
  {
    id: "subsystems",
    title: "Modular Subsystems",
    tagline: "Dependency-driven initialization",
    description:
      "The renderer, physics, audio, and other systems are separate subsystems registered with a SubsystemRegistry. Each declares its dependencies, and the framework handles initialization order via topological sorting. No fragile startup sequences.",
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
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
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

          <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}>
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
