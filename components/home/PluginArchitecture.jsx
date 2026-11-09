"use client";

import { motion } from "framer-motion";

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
              08 / Architecture
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 leading-tight">
              Every object kind
              <br className="hidden sm:block" />
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
      </div>
    </section>
  );
}
