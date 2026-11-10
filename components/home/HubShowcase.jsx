"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const FEATURES = [
  "Home feed pulling the latest posts from the Pulsar blog",
  "Project cards with thumbnails and last-opened times, plus search",
  "Per-project actions: open, Git manager, project settings, move, reveal in file explorer",
  "Engine Versions: the engine builds your projects run on",
  "Templates to start from, and a Dependencies page",
  "Open any existing folder as a project",
];

export default function HubShowcase() {
  return (
    <section className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-4">
              <span className="w-8 h-px bg-[#38bdf8]/70" />
              05 / Pulsar Hub
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 leading-tight">
              Your projects,{" "}
              <br className="hidden sm:block" />
              one launcher.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-8">
              The Hub is the front door to Pulsar: it keeps your projects and engine versions in one
              place, and opens them in the editor. It&apos;s what the
              download page installs today.
            </p>
            <ul className="space-y-3 mb-9">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full bg-[#0ea5e9]/15 border border-[#0ea5e9]/30 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-[#0ea5e9]" />
                  </span>
                  <span className="text-sm text-white/55 leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-mono text-[12px] uppercase tracking-[0.12em] rounded-md transition-colors"
            >
              Get the Hub (preview)
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#0ea5e9]/[0.04] blur-2xl pointer-events-none" />
            <div className="relative overflow-hidden border border-white/[0.09] shadow-2xl bg-[#0b0d10]">
              <span className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-[#38bdf8]/60 z-10" />
              <span className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-[#38bdf8]/60 z-10" />
              <Image
                src="/screenshots/hub.webp"
                alt="Pulsar Hub: the project manager's home screen with the blog feed, project cards and a project's context menu"
                width={1300}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
