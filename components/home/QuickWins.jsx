"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  { num: 1, title: "Install Rust", desc: "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh", color: "from-[#0ea5e9] to-[#06b6d4]" },
  { num: 2, title: "Install Pulsar CLI", desc: "cargo install pulsar-cli", color: "from-[#06b6d4] to-[#0284c7]" },
  { num: 3, title: "Create Project", desc: "pulsar new my-game", color: "from-[#0284c7] to-[#0ea5e9]" },
  { num: 4, title: "Navigate & Build", desc: "cd my-game && cargo run", color: "from-[#0ea5e9] to-[#06b6d4]" },
  { num: 5, title: "Start Building!", desc: "Your game window is running", color: "from-[#06b6d4] to-[#0284c7]" }
];

export default function QuickWins() {
  return (
    <section className="relative max-w-7xl mx-auto py-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          Get Started in Minutes
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          From zero to your first game in 5 simple steps
        </p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-6 mb-12">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative"
          >
            <div className="relative h-full bg-black rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all overflow-hidden">
              {/* Number badge */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center font-black text-xl shadow-lg z-10`}
              >
                {step.num}
              </motion.div>

              {/* Gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

              {/* Content */}
              <div className="relative z-10 mt-6">
                <h3 className={`text-lg font-bold mb-3 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 font-mono leading-relaxed break-all">
                  {step.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/docs/installation">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white font-bold text-lg shadow-2xl"
          >
            View Full Installation Guide →
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
