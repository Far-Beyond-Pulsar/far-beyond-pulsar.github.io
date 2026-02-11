"use client";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Rendering & Graphics",
    color: "from-[#0ea5e9] to-[#06b6d4]",
    items: [
      { name: "wgpu", desc: "Cross-platform graphics API" },
      { name: "vulkano", desc: "Vulkan bindings for Rust" },
      { name: "naga", desc: "Shader translation layer" }
    ]
  },
  {
    title: "Physics & Math",
    color: "from-[#06b6d4] to-[#0284c7]",
    items: [
      { name: "rapier3d", desc: "High-performance physics engine" },
      { name: "glam", desc: "SIMD-optimized math library" },
      { name: "parry3d", desc: "Collision detection library" }
    ]
  },
  {
    title: "ECS & Core",
    color: "from-[#0284c7] to-[#0ea5e9]",
    items: [
      { name: "hecs", desc: "Fast entity-component system" },
      { name: "tokio", desc: "Async runtime for networking" },
      { name: "rayon", desc: "Data parallelism library" }
    ]
  },
  {
    title: "Audio & Input",
    color: "from-[#0ea5e9] to-[#06b6d4]",
    items: [
      { name: "kira", desc: "Game audio engine" },
      { name: "winit", desc: "Cross-platform windowing" },
      { name: "gilrs", desc: "Gamepad input handling" }
    ]
  },
  {
    title: "Networking & Serialization",
    color: "from-[#06b6d4] to-[#0284c7]",
    items: [
      { name: "quinn", desc: "QUIC protocol implementation" },
      { name: "bincode", desc: "Fast binary serialization" },
      { name: "rkyv", desc: "Zero-copy deserialization" }
    ]
  },
  {
    title: "Utilities & Tools",
    color: "from-[#0284c7] to-[#0ea5e9]",
    items: [
      { name: "serde", desc: "Serialization framework" },
      { name: "tracing", desc: "Application-level tracing" },
      { name: "anyhow", desc: "Flexible error handling" }
    ]
  }
];

export default function TechStack() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          Powered by Rust
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Built on the best libraries from the Rust ecosystem
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-black border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all"
          >
            <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
              {cat.title}
            </h3>
            <div className="space-y-4">
              {cat.items.map((item, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + j * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-black border border-slate-800 rounded-xl hover:border-slate-700 transition-colors"
                >
                  <div className="text-2xl">📦</div>
                  <div>
                    <div className="font-bold text-slate-200">{item.name}</div>
                    <div className="text-xs text-slate-400">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
