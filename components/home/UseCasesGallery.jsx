"use client";
import { motion } from "framer-motion";

const useCases = [
  { emoji: "🎮", title: "FPS Games", color: "from-[#0ea5e9] to-[#06b6d4]", desc: "High-performance first-person shooters with advanced physics and networking." },
  { emoji: "🌍", title: "Open World RPGs", color: "from-[#06b6d4] to-[#0284c7]", desc: "Massive worlds with complex systems, quests, and dynamic environments." },
  { emoji: "🚀", title: "Space Simulators", color: "from-[#0284c7] to-[#0ea5e9]", desc: "Realistic space physics, massive scale, and beautiful procedural generation." },
  { emoji: "🏎️", title: "Racing Games", color: "from-[#0ea5e9] to-[#06b6d4]", desc: "Ultra-realistic physics, vehicle dynamics, and stunning visual effects." },
  { emoji: "⚔️", title: "Strategy Games", color: "from-[#06b6d4] to-[#0284c7]", desc: "Complex AI, large-scale battles, and efficient pathfinding systems." },
  { emoji: "🧩", title: "Indie Projects", color: "from-[#0284c7] to-[#0ea5e9]", desc: "Perfect for small teams and solo developers with minimal overhead." },
  { emoji: "🎯", title: "VR/AR Experiences", color: "from-[#0ea5e9] to-[#06b6d4]", desc: "Low-latency rendering and spatial audio for immersive experiences." },
  { emoji: "🌐", title: "MMO Games", color: "from-[#06b6d4] to-[#0284c7]", desc: "Scalable server architecture for thousands of concurrent players." }
];

export default function UseCasesGallery() {
  return (
    <section className="relative max-w-7xl mx-auto py-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          What You Can Build
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          From AAA titles to indie gems, Pulsar scales with your ambition
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {useCases.map((useCase, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative"
          >
            <div className="relative h-full bg-black rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all overflow-hidden">
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="text-5xl mb-4 relative z-10"
              >
                {useCase.emoji}
              </motion.div>

              {/* Title */}
              <h3 className={`relative z-10 text-xl font-bold mb-2 bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent`}>
                {useCase.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-slate-400 leading-relaxed">
                {useCase.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
