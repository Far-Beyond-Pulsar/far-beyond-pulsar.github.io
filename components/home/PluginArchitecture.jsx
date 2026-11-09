"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CORE = [
  {
    title: "SceneDB",
    body: "The scene is a database of component rows. Assets are held in a budgeted rebuild-on-miss cache, with a derived-data cache on disk and cooked textures (a 4K JPEG becomes 5.3 MiB of BC7 with a full mip chain).",
    href: "https://pulsarnative.com/blog/2026-10-18-scenedb-asset-residency",
  },
  {
    title: "Parent-relative worlds",
    body: "Transforms resolve on the GPU with dirty-subtree propagation and camera-relative precision. Level instances drop into a scene, and portals take their lighting and materials from the world they show.",
    href: "https://pulsarnative.com/blog/2026-10-19-one-allocator-for-space",
  },
  {
    title: "Physical lens",
    body: "The camera reconstructs real optical behaviour from lens prescriptions, spectral ray mapping and pupil functions, in GPU compute.",
    href: "https://pulsarnative.com/blog/2026-10-20-through-the-glass-lens-simulation",
  },
];

const GROUPS = [
  {
    title: "Rendering",
    items: [
      ["Meshes", "Static, skeletal and virtual-geometry meshes"],
      ["Materials", "PBR material rows and templates"],
      ["Lights", "Lights, shadows, IES, reflection captures"],
      ["Sky", "Atmosphere, sun, clouds, weather"],
      ["Water", "Ocean simulation, lighting, caustics"],
      ["Fog", "Global and local volumetric fog"],
      ["Global Illumination", "Probe-clipmap diffuse GI"],
      ["Camera Lens", "Physically based lens and flare"],
      ["Particles", "GPU particle emitters (Corona)"],
      ["Decals · Sprites · Portals · Post", "Surface, 2D, portal and post volumes"],
    ],
  },
  {
    title: "World & gameplay",
    items: [
      ["Voxel Worlds", "Destructible terrain and planets"],
      ["Foliage", "Foliage placement and wind"],
      ["Physics", "Rapier rigid bodies, colliders, joints"],
      ["Splines", "Authored curves"],
      ["Input", "Actions, mappings, runtime events"],
      ["Animation", "Skeletons, animator, blend spaces, IK"],
    ],
  },
  {
    title: "Editors & tools",
    items: [
      ["Blueprints", "Visual scripting and its compiler"],
      ["Render Graph", "Edit Helio's render graphs"],
      ["Code Editor", "Rust, TS, Python, Lua, TOML, Markdown + LSP"],
      ["Matter", "Texture painting (.pif): layers, brushes"],
      ["UI", "Widget assets and the widget editor"],
      ["Table Editor", "SQLite tables"],
      ["Asset Viewer", "Models, meshes, images"],
    ],
  },
];

export default function PluginArchitecture() {
  return (
    <section className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-4">
              <span className="w-8 h-px bg-[#38bdf8]/70" />
              09 / Architecture
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 leading-tight">
              Every object kind
              {" "}<br className="hidden sm:block" />
              is a plugin.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-5">
              A plugin owns its components, the contracts other plugins read, the Helio renderer
              feature that draws it, its file formats and its editor UI. The renderer itself knows
              no object kind.
            </p>
            <p className="text-white/45 text-base leading-relaxed mb-5">
              Projects enable or disable plugins in{" "}
              <code className="font-mono text-sm text-[#0ea5e9]/80 bg-white/[0.04] px-1.5 py-0.5 rounded">
                Pulsar.toml
              </code>
              . Disabled, a kind is simply absent and the frame draws without it. First-party plugins
              are MIT-licensed and live in their own repositories.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/30">
              25+ first-party plugins
            </p>
          </motion.div>

          <div className="space-y-6">
            {GROUPS.map((g, gi) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: gi * 0.06 }}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40 mb-2">{g.title}</div>
                <div className="grid sm:grid-cols-2 gap-px bg-white/[0.08] border border-white/[0.08]">
                  {g.items.map(([t, d]) => (
                    <div key={t} className="bg-[#0b0c0e] px-4 py-3">
                      <div className="text-sm text-white/80 font-medium">{t}</div>
                      <div className="text-[12px] text-white/35 mt-0.5">{d}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {CORE.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0b0c0e] border border-white/[0.08] hover:border-white/[0.16] p-6 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold text-[16px] tracking-tight">{c.title}</h3>
                <ArrowUpRight className="w-4 h-4 text-white/25 group-hover:text-white/60 transition-colors" />
              </div>
              <p className="text-white/45 text-sm leading-relaxed">{c.body}</p>
              <span className="inline-block mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#38bdf8]/70">Read the deep dive</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
