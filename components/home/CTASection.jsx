"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 px-5 overflow-hidden">
      {/* Subtle centered radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(14,165,233,0.055),transparent)]" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
            <span className="text-xs text-amber-300/80 font-medium tracking-wide">
              In active development · Get involved early
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
            Help shape the engine.
          </h2>

          <p className="text-white/45 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Pulsar's core systems are still being designed. The best time to influence
            its direction — and learn along the way — is right now.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/docs/docs/getting-started/installation/windows"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-medium text-sm rounded-xl transition-colors"
            >
              Build from source
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/orgs/Far-Beyond-Pulsar/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 border border-white/[0.12] hover:border-white/[0.22] bg-white/[0.04] hover:bg-white/[0.07] text-white/80 hover:text-white font-medium text-sm rounded-xl transition-all"
            >
              <Github className="w-4 h-4" />
              Join discussions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
