"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    label: "Install Rust",
    cmd: "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh",
    note: "Requires Rust 1.75+ stable toolchain",
  },
  {
    label: "Install Pulsar CLI",
    cmd: "cargo install pulsar-cli",
    note: "Fetches and compiles the project scaffolding tool",
  },
  {
    label: "Create a project",
    cmd: "pulsar new my-game",
    note: "Generates a minimal working project with sensible defaults",
  },
  {
    label: "Run it",
    cmd: "cd my-game && cargo run",
    note: "Your first window should appear in seconds",
  },
];

export default function QuickWins() {
  return (
    <section className="relative max-w-3xl mx-auto py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-xs tracking-[0.2em] uppercase text-[#0ea5e9] font-semibold mb-4">
          Getting Started
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
          Up in Four Commands
        </h2>
        <p className="text-slate-400 max-w-sm mx-auto text-base">
          No project config maze. No XML. No build scripts you didn't write.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-[18px] top-6 bottom-6 w-px bg-gradient-to-b from-[#0ea5e9]/40 via-[#06b6d4]/20 to-transparent" />

        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-5 items-start"
            >
              {/* Step number */}
              <div className="relative shrink-0 w-9 h-9 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 flex items-center justify-center z-10 mt-0.5">
                <span className="text-xs font-bold text-[#0ea5e9]">{i + 1}</span>
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <p className="text-sm font-semibold text-slate-300 mb-2">{step.label}</p>
                <div className="bg-[#080808] border border-slate-800 rounded-lg px-4 py-3 font-mono text-sm text-slate-200 break-all">
                  {step.cmd}
                </div>
                <p className="text-xs text-slate-600 mt-2">{step.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 text-center"
      >
        <Link href="/docs/installation">
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(14,165,233,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white font-semibold text-sm shadow-xl"
          >
            Full Installation Guide →
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
