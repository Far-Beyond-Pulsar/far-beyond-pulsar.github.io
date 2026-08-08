"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import OutlineText from "../OutlineText";

export default function CTASection() {
  return (
    <section className="relative py-28 px-5 overflow-hidden">
      {/* Subtle centered radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(14,165,233,0.055),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-10"
        >
          <span className="w-8 h-px bg-[#38bdf8]/70" />
          08 / Get Involved
          <span className="h-3 w-px bg-white/15 ml-1" />
          <span className="text-amber-300/70 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
            In active development
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.02] mb-6">
              Help shape
              <br />
              <OutlineText text="the engine." color="rgba(56, 189, 248, 0.85)" />
            </h2>
            <p className="text-white/45 text-lg leading-relaxed max-w-lg">
              Pulsar's core systems are still being designed. The best time to influence
              its direction — and learn along the way — is right now.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3 lg:items-end shrink-0"
          >
            <Link
              href="/docs/docs/getting-started/installation/windows"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-mono text-[12px] uppercase tracking-[0.12em] rounded-md transition-colors"
            >
              Build from source
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/orgs/Far-Beyond-Pulsar/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.12] hover:border-white/[0.22] bg-white/[0.04] hover:bg-white/[0.07] text-white/80 hover:text-white font-mono text-[12px] uppercase tracking-[0.12em] rounded-md transition-all"
            >
              <Github className="w-4 h-4" />
              Join discussions
            </a>
          </motion.div>
        </div>

        {/* Ghost wordmark — bleeds off bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="select-none pointer-events-none mt-16 lg:mt-20 -mb-10"
        >
          <p className="text-[clamp(4rem,15vw,14rem)] font-bold tracking-[-0.04em] leading-[1.05] text-center whitespace-nowrap">
            <OutlineText text="PULSAR" color="rgba(255, 255, 255, 0.18)" strokeWidth={3} />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
