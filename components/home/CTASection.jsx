"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/10 via-[#06b6d4]/10 to-[#0284c7]/10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-block mb-6 px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full backdrop-blur-sm">
            <p className="text-yellow-300 text-sm font-semibold">
              ⚠️ Alpha Stage - Join the Journey
            </p>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#0ea5e9] via-[#06b6d4] to-[#0284c7] bg-clip-text text-transparent">
            Help Shape the Future
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-2xl mx-auto">
            Join the Pulsar community and be part of building the next generation game engine
          </p>

          <p className="text-slate-400 mb-12">
            Early development stage - perfect for pioneers and contributors
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/docs/installation">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(14, 165, 233, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white font-bold text-lg shadow-2xl"
              >
                Try It Out (Alpha)
              </motion.button>
            </Link>
            
            <a href="https://github.com/orgs/Far-Beyond-Pulsar/discussions" target="_blank" rel="noopener">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-xl border-2 border-[#06b6d4] bg-[#06b6d4]/10 text-white font-bold text-lg backdrop-blur-sm"
              >
                Join Discussions
              </motion.button>
            </a>

            <a href="https://github.com/Far-Beyond-Pulsar" target="_blank" rel="noopener">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-xl border-2 border-slate-700 bg-black text-white font-bold text-lg backdrop-blur-sm"
              >
                View on GitHub
              </motion.button>
            </a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid grid-cols-3 gap-8"
          >
            {[
              { label: "Open Source", value: "100%" },
              { label: "Contributors", value: "Growing" },
              { label: "Community", value: "Active" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-[#0ea5e9] via-[#06b6d4] to-[#0284c7] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
