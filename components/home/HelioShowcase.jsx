"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const STATS = [
  { value: "400M+", label: "source triangles in the demo scene" },
  { value: "~3M", label: "triangles actually rasterized per frame" },
  { value: "3", label: "tiers: hardware, software, dense" },
];

const GALLERY = [
  { src: "/screenshots/helio-6.webp", w: 2000, h: 1260, label: "VG Museum — full scene", span: "md:col-span-2 md:row-span-2 aspect-[16/10] md:aspect-auto" },
  { src: "/screenshots/helio-3.webp", w: 2000, h: 1019, label: "Scanned statue, full detail", span: "" },
  { src: "/screenshots/helio-4.webp", w: 2000, h: 727, label: "Cluster LOD up close", span: "" },
  { src: "/screenshots/helio-2.webp", w: 2000, h: 935, label: "Dense asset instancing", span: "" },
  { src: "/screenshots/helio-8.webp", w: 2000, h: 788, label: "Sub-pixel error tolerance", span: "" },
  { src: "/screenshots/helio-9.webp", w: 2000, h: 1082, label: "Macro view, no popping", span: "" },
];


function Shot({ s, i }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
      className={`group relative overflow-hidden border border-white/[0.09] bg-[#0b0d10] ${s.span || "aspect-[16/10]"}`}
    >
      <Image
        src={s.src}
        alt={s.label}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <figcaption className="absolute left-0 bottom-0 right-0 px-4 py-2.5 bg-gradient-to-t from-black/80 to-transparent font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
        {s.label}
      </figcaption>
    </motion.figure>
  );
}

export default function HelioShowcase() {
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
            07 / Helio Renderer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 leading-tight">
            Not enough triangles?
            {" "}<br className="hidden sm:block" />
            Not a problem.
          </h2>
          <p className="text-white/45 text-base leading-relaxed">
            Helio's virtual geometry selects detail per cluster on the GPU, so scanned,
            film-grade assets render at full fidelity without hand-built LODs. Every shot
            below is captured live from Helio's VG Museum demo.
          </p>
          <a
            href="https://pulsarnative.com/blog/2026-10-22-virtual-geometry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-sm text-[#0ea5e9] hover:text-[#38bdf8] font-medium transition-colors"
          >
            Read: Not Enough Triangles
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] mb-6">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#0b0c0e] p-5 sm:p-7">
              <div className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-1.5">{s.value}</div>
              <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-white/35 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {GALLERY.map((s, i) => (
            <Shot key={s.src} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
