"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    title: "ECS Architecture",
    description: "Entity Component System for maximum flexibility and performance",
    icon: "🏗️",
    color: "from-[#0ea5e9] to-[#06b6d4]",
    features: ["Data-oriented design", "Cache-friendly", "Parallel by default"]
  },
  {
    title: "Cross-Platform",
    description: "Deploy to Windows, macOS, Linux, Web, and consoles",
    icon: "🌐",
    color: "from-[#06b6d4] to-[#0284c7]",
    features: ["Native performance", "WebAssembly ready", "Console SDKs"]
  },
  {
    title: "Real-time Rendering",
    description: "Cutting-edge graphics with Vulkan and WebGPU",
    icon: "✨",
    color: "from-[#0284c7] to-[#0ea5e9]",
    features: ["PBR materials", "HDR rendering", "Ray tracing support"]
  },
  {
    title: "Advanced Audio",
    description: "3D spatial audio with real-time effects processing",
    icon: "🔊",
    color: "from-[#0ea5e9] to-[#06b6d4]",
    features: ["HRTF spatializer", "Dynamic mixing", "Low latency"]
  },
  {
    title: "Multiplayer Ready",
    description: "Built-in networking for online games",
    icon: "🌐",
    color: "from-[#06b6d4] to-[#0284c7]",
    features: ["Client-server", "P2P support", "Rollback netcode"]
  },
  {
    title: "Asset Pipeline",
    description: "Smart asset management with hot-reloading",
    icon: "📦",
    color: "from-[#0284c7] to-[#0ea5e9]",
    features: ["Auto-import", "Compression", "Streaming"]
  }
];

export default function InteractiveShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            Packed with Power
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to build the next generation of games
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className={`relative h-full bg-black rounded-2xl p-8 border border-slate-800 backdrop-blur-sm overflow-hidden transition-all duration-300`}>
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-4 inline-block relative z-10"
                >
                  {capability.icon}
                </motion.div>

                {/* Title */}
                <h3 className={`relative z-10 text-2xl font-bold mb-3 text-transparent bg-gradient-to-r ${capability.color} bg-clip-text`}>
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-slate-300 mb-4 font-medium">
                  {capability.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 relative z-10">
                  {capability.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-center gap-2 text-sm text-slate-400"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${capability.color}`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover effect border glow */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r ${capability.color} blur-2xl -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
