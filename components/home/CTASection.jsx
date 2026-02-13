"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.07)_0%,transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          {/* Alpha badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-amber-500/8 border border-amber-500/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <p className="text-amber-300 text-xs font-semibold tracking-wide">
              Alpha · Join Early
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#0284c7] bg-clip-text text-transparent">
            Help Shape Pulsar
          </h2>

          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Pulsar is open source and in active development. The best time to get involved — file issues, write docs, build features — is right now.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/docs/installation">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 36px rgba(14,165,233,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white font-semibold text-base shadow-xl"
              >
                Try Alpha
              </motion.button>
            </Link>

            <a href="https://github.com/orgs/Far-Beyond-Pulsar/discussions" target="_blank" rel="noopener">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 rounded-xl border border-slate-700 bg-white/[0.03] text-white font-semibold text-base hover:border-[#0ea5e9]/40 transition-colors"
              >
                Join Discussions
              </motion.button>
            </a>

            <a href="https://github.com/Far-Beyond-Pulsar" target="_blank" rel="noopener">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 rounded-xl border border-slate-800 text-slate-400 font-semibold text-base hover:text-white hover:border-slate-600 transition-colors"
              >
                GitHub →
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
