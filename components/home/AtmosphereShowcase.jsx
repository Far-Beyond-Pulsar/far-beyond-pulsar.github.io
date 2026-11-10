"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CARDS = [
  {
    src: "/screenshots/render-beach.webp",
    tag: "pulsar.sky",
    title: "Sky & weather",
    body: "A planet's air: atmosphere, the sun's colour through it, sun disc, aerial perspective and clouds. Presets give you Earth-like skies, and voxel worlds can tell the sky about the ground they sit on.",
  },
  {
    src: "/screenshots/render-ocean.webp",
    tag: "pulsar.water",
    title: "Ocean & water",
    body: "A camera-centred FFT ocean with Fresnel/GGX sun reflection and glints, refraction, Beer–Lambert extinction, foam, caustics and underwater light shafts. Shore waves are driven by a terrain-derived coastline map.",
    href: "https://pulsarnative.com/blog/2026-11-06-water-is-a-volume",
    cta: "Read: Water Is a Volume",
  },
  {
    src: "/screenshots/render-bazaar.webp",
    tag: "lights · fog · gi",
    title: "Lighting that holds together",
    body: "Local and directional lights with shadows and IES profiles, froxel-based volumetric fog, and world-space diffuse global illumination from a camera-centred probe clipmap.",
  },
];

const CHIPS = [
  ["Camera Lens", "Real lens prescriptions, spectral rays, pupil functions"],
  ["Corona", "GPU-native particle system"],
  ["Decals", "Projected onto surfaces"],
  ["Post Volumes", "Blended post-process settings"],
  ["Portals", "Openings that show another place"],
  ["Foliage & Wind", "Placed and drawn on the GPU"],
];

export default function AtmosphereShowcase() {
  return (
    <section className="py-28 px-5 bg-[#030303]">
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
            09 / Atmosphere, Water &amp; Light
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 leading-tight">
            Worlds that feel
            {" "}<br className="hidden sm:block" />
            like places.
          </h2>
          <p className="text-white/45 text-base leading-relaxed">
            Each of these is its own plugin with its own renderer feature — switch it off in your
            project and the frame simply draws without it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col bg-[#0b0c0e] border border-white/[0.08] hover:border-white/[0.16] transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0b0d10]">
                <Image src={c.src} alt={c.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#38bdf8]/70">{c.tag}</span>
                <h3 className="text-white font-semibold text-[17px] tracking-tight mt-2 mb-3">{c.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{c.body}</p>
                {c.href && (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-sm text-[#0ea5e9] hover:text-[#38bdf8] transition-colors">
                    {c.cta}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08]">
          {CHIPS.map(([t, d]) => (
            <div key={t} className="bg-[#0b0c0e] px-5 py-4">
              <div className="text-sm text-white/80 font-medium">{t}</div>
              <div className="font-mono text-[11px] text-white/35 mt-0.5">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
