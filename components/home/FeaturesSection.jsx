"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const features = [
  {
    icon: "/logos/rust.png",
    title: "Built with Rust",
    description: "Memory-safe, blazingly fast, and concurrent. Rust powers the core of Pulsar for unmatched performance and reliability.",
    color: "from-[#0ea5e9] to-[#06b6d4]",
    borderColor: "border-[#0ea5e9]/50",
    stats: "Zero-cost abstractions"
  },
  {
    icon: "/logos/vulkan.png",
    title: "Next-Gen Graphics",
    description: "Vulkan and WebGPU support delivers cutting-edge rendering with cross-platform compatibility and stunning visuals.",
    color: "from-[#06b6d4] to-[#0284c7]",
    borderColor: "border-[#06b6d4]/50",
    stats: "Ray tracing ready"
  },
  {
    icon: "/logos/rapier.png",
    title: "Advanced Physics",
    description: "High-performance 2D and 3D physics simulation with Rapier. Real-time collision detection and rigid body dynamics.",
    color: "from-[#0284c7] to-[#0ea5e9]",
    borderColor: "border-[#0284c7]/50",
    stats: "10k+ bodies/frame"
  }
];

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative max-w-7xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          Built for Performance
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Cutting-edge technology stack designed for the next generation of games
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="group relative"
          >
            <div className={`relative h-full bg-black rounded-2xl p-6 border ${feature.borderColor} hover:border-slate-600 backdrop-blur-sm transition-colors duration-200 overflow-hidden`}>
              {/* Animated background gradient on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                className={`absolute inset-0 bg-gradient-to-br ${feature.color}`}
              />

              {/* Icon with glow effect */}
              <div className="relative mb-4">
                <motion.div
                  animate={{ 
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 5 : 0 
                  }}
                  transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
                  className="relative inline-block"
                >
                  <div className={`absolute inset-0 blur-xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-50 transition-opacity duration-200`} />
                  <Image 
                    src={feature.icon} 
                    alt={feature.title} 
                    width={48} 
                    height={48} 
                    className="relative drop-shadow-lg"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                {feature.title}
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                {feature.description}
              </p>

              {/* Stats badge */}
              <div className={`inline-block px-3 py-1.5 rounded-full bg-gradient-to-r ${feature.color} bg-opacity-10 border ${feature.borderColor}`}>
                <span className="text-xs font-semibold text-slate-200">
                  {feature.stats}
                </span>
              </div>

              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${feature.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {[
          { value: "100%", label: "Open Source" },
          { value: "Zero", label: "Runtime Overhead" },
          { value: "Cross", label: "Platform Support" },
          { value: "Active", label: "Development" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#0ea5e9] via-[#06b6d4] to-[#0284c7] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              {stat.value}
            </div>
            <div className="text-slate-400 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
