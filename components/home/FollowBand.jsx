"use client";

import Link from "next/link";
import { ArrowRight, Github, MessageSquare } from "lucide-react";

export default function FollowBand() {
  return (
    <section className="px-5 py-14 border-y border-white/[0.07] bg-[#050506]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#38bdf8]/70 mb-2">
            Beta expected Q1–Q2 2027
          </p>
          <p className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
            Like what you see? Follow along as it comes together.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-mono text-[12px] uppercase tracking-[0.12em] rounded-md transition-colors"
          >
            Try the Hub preview
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com/Far-Beyond-Pulsar/Pulsar-Native"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/[0.15] hover:border-white/30 bg-white/[0.04] text-white/80 hover:text-white font-mono text-[12px] uppercase tracking-[0.12em] rounded-md transition-all"
          >
            <Github className="w-4 h-4" />
            Star on GitHub
          </a>
          <a
            href="https://github.com/orgs/Far-Beyond-Pulsar/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/[0.15] hover:border-white/30 bg-white/[0.04] text-white/80 hover:text-white font-mono text-[12px] uppercase tracking-[0.12em] rounded-md transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            Discussions
          </a>
        </div>
      </div>
    </section>
  );
}
