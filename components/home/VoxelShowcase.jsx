"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STATS = [
  { value: "0.1–1 m", label: "exact voxels" },
  { value: "64³", label: "cells per GPU-built chunk" },
  { value: "< 6 ms", label: "terrain GPU budget · 1440p · RTX 3060 (target)" },
];

const SPECS = [
  ["Planets", "Earth-sized cube-sphere planets, finite planes, or effectively infinite planes."],
  ["Chunk trees", "64³-cell chunks generated on the GPU and streamed as a cut of an octree per cube face."],
  ["Destructible", "Brushes from a single voxel up to the whole planet. An edit shows on the next frame."],
  ["Terrain layers", "Ordered layer stacks with presets (Earth, moon, desert, flat), craters, erosion, rivers, lakes and climate maps."],
  ["Caves & cliffs", "Generated cave networks, tunnels, chambers, ledges and overhangs."],
  ["Features", "Procedural trees, rocks and buildings, generated wherever a cell is asked for."],
  ["One world, two consumers", "CPU (collision, ray casts, edits) and GPU (generation, drawing) evaluate the same integer field, bit for bit."],
];

function Shot({ src, alt, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden border border-white/[0.09] bg-[#0b0d10] ${className}`}
    >
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
    </motion.div>
  );
}

export default function VoxelShowcase() {
  return (
    <section className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="max-w-2xl mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-4">
            <span className="w-8 h-px bg-[#38bdf8]/70" />
            06 / Voxel Worlds
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 leading-tight">
            Dig anything,
            <br className="hidden sm:block" />
            anywhere.
          </h2>
          <p className="text-white/45 text-base leading-relaxed">
            Destructible voxel terrain is a first-party plugin. Worlds are built from exact voxels,
            generated on the GPU and drawn from chunk trees — the goal is that you never see detail
            arrive or levels switch, from the ground to orbit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="grid grid-cols-2 gap-3">
            <Shot src="/screenshots/render-planet.webp" alt="A voxel planet seen from orbit with clouds" className="col-span-2 aspect-[16/9]" />
            <Shot src="/screenshots/editor-forest.webp" alt="Voxel forest and mountains in the editor" className="aspect-[4/3]" delay={0.06} />
            <Shot src="/screenshots/editor-terrain.webp" alt="Snow-capped voxel mountains from above" className="aspect-[4/3]" delay={0.12} />
          </div>

          <div>
            <div className="grid grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] mb-6">
              {STATS.map((s) => (
                <div key={s.label} className="bg-[#0b0c0e] p-4">
                  <div className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">{s.value}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/35 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
            <dl className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {SPECS.map(([k, v]) => (
                <div key={k} className="py-3.5 grid sm:grid-cols-[130px_1fr] gap-x-4 gap-y-1">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#38bdf8]/70">{k}</dt>
                  <dd className="text-sm text-white/50 leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
