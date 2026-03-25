"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    label: "Install Rust",
    cmd: "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh",
    note: "Requires Rust stable toolchain and Visual Studio C++ build tools on Windows",
  },
  {
    label: "Clone the repository",
    cmd: "git clone https://github.com/Far-Beyond-Pulsar/Pulsar-Native.git",
    note: "Or download a binary from the Releases page on GitHub",
  },
  {
    label: "Build the engine",
    cmd: "cd Pulsar-Native && cargo build --release",
    note: "First build compiles all dependencies — subsequent builds are much faster",
  },
  {
    label: "Run it",
    cmd: "cargo run --release",
    note: "The Pulsar launcher will open — create a project from the Templates tab",
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
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
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
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(14,165,233,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white font-semibold text-sm shadow-lg"
          >
            Full Installation Guide →
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
