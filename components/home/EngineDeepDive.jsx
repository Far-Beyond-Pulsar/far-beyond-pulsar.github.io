"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const spotlights = [
  {
    img: "/sample_pics/level_editor.png",
    tag: "World Building",
    title: "Visual Level Editor",
    body: "Place entities, sculpt terrain, and wire up scene graphs without leaving the editor. Everything you build is serialized to plain text — version-controllable, diffable, and human-readable.",
    points: ["Real-time scene preview", "Entity hierarchy", "In-editor property inspector"],
    flip: false,
  },
  {
    img: "/sample_pics/profiler.png",
    tag: "Performance",
    title: "Multithreaded Profiler",
    body: "Drill into frame timings across every thread. See where your game is waiting, where locks contend, and exactly which systems are eating your frame budget — all without leaving the engine.",
    points: ["Per-thread flame graphs", "Cross-thread lock visibility", "Export traces for analysis"],
    flip: true,
  },
  {
    img: "/sample_pics/db_editor.png",
    tag: "Data Driven Design",
    title: "Database Editor",
    body: "Define your game's data schemas visually and let Pulsar generate the typed Rust structs. No more copy-pasting JSON configs or writing deserializers by hand.",
    points: ["Visual schema builder", "Auto-generated Rust types", "Live data validation"],
    flip: false,
  },
  {
    img: "/sample_pics/terminal.png",
    tag: "Integrated Tooling",
    title: "Built-in Terminal",
    body: "Run cargo builds, fire off scripts, and inspect engine logs without switching windows. The terminal lives inside the editor and understands your project context.",
    points: ["Full shell access", "Cargo integration", "Engine log streaming"],
    flip: true,
  },
];

function SpotlightRow({ s, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${s.flip ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}
    >
      {/* Screenshot */}
      <div className="w-full lg:w-[55%] shrink-0">
        <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-2xl group">
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
          <Image
            src={s.img}
            alt={s.title}
            width={1200}
            height={750}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          {/* Bottom label */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4 z-10">
            <span className="text-xs text-slate-400 font-mono">{s.tag}</span>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="w-full lg:w-[45%]">
        <p className="text-xs tracking-[0.2em] uppercase text-[#0ea5e9] font-semibold mb-3">
          {s.tag}
        </p>
        <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
          {s.title}
        </h3>
        <p className="text-slate-400 text-base leading-relaxed mb-6">
          {s.body}
        </p>
        <ul className="space-y-2">
          {s.points.map((pt, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] shrink-0" />
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function EngineDeepDive() {
  return (
    <section className="relative max-w-6xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-xs tracking-[0.2em] uppercase text-[#0ea5e9] font-semibold mb-4">
          Engine Deep Dive
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
          Every Tool You Need
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-base">
          Pulsar ships with a full editor suite — not just a runtime. Here's what's inside.
        </p>
      </motion.div>

      <div className="flex flex-col gap-24">
        {spotlights.map((s, i) => (
          <SpotlightRow key={i} s={s} index={i} />
        ))}
      </div>
    </section>
  );
}
