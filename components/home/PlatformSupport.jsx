"use client";
import { motion } from "framer-motion";

const platforms = {
  desktop: [
    { name: "Windows", apis: "Vulkan, DirectX 12", status: "green", note: "Stable" },
    { name: "Linux", apis: "Vulkan, OpenGL", status: "yellow", note: "In Development" },
    { name: "macOS", apis: "Metal, MoltenVK", status: "yellow", note: "In Development" }
  ],
  mobile: [
    { name: "iOS", apis: "Metal backend", status: "yellow", note: "In Development" },
    { name: "Android", apis: "Vulkan, OpenGL ES", status: "yellow", note: "In Development" },
    { name: "WebAssembly", apis: "WASM", status: "yellow", note: "In Development" }
  ],
  console: [
    { name: "PlayStation 5", apis: "TBD", status: "red", note: "Planned" },
    { name: "Xbox Series X/S", apis: "TBD", status: "red", note: "Planned" },
    { name: "AR/VR", apis: "TBD", status: "red", note: "Future Goal" }
  ]
};

const statusColors = {
  green: { bg: "bg-green-500", text: "text-green-400", border: "border-green-500/30" },
  yellow: { bg: "bg-yellow-500", text: "text-yellow-400", border: "border-yellow-500/30" },
  red: { bg: "bg-red-500", text: "text-red-400", border: "border-red-500/30" }
};

export default function PlatformSupport() {
  return (
    <section className="relative max-w-7xl mx-auto py-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          Cross-Platform Ready
        </h2>
        <p className="text-lg text-slate-400 mb-2">
          Build once, deploy everywhere
        </p>
        <div className="inline-block px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full backdrop-blur-sm">
          <p className="text-yellow-300 text-sm font-semibold">
            ⚠️ Currently only Windows is stable - other platforms under development
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-black border border-slate-800 rounded-3xl p-8 md:p-12"
      >
        <div className="grid md:grid-cols-3 gap-12">
          {/* Desktop */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#0ea5e9] mb-6">
              Desktop
            </h3>
            {platforms.desktop.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-start gap-3 p-4 rounded-xl bg-black border ${statusColors[p.status].border} hover:border-slate-700 transition-colors`}
              >
                <div className={`w-3 h-3 rounded-full ${statusColors[p.status].bg} mt-1 flex-shrink-0`}></div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-slate-200">{p.name}</div>
                  <div className="text-xs text-slate-400 font-mono">{p.apis}</div>
                  <div className={`text-xs ${statusColors[p.status].text} italic mt-1`}>{p.note}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#06b6d4] mb-6">
              Mobile & Web
            </h3>
            {platforms.mobile.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-start gap-3 p-4 rounded-xl bg-black border ${statusColors[p.status].border} hover:border-slate-700 transition-colors`}
              >
                <div className={`w-3 h-3 rounded-full ${statusColors[p.status].bg} mt-1 flex-shrink-0`}></div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-slate-200">{p.name}</div>
                  <div className="text-xs text-slate-400 font-mono">{p.apis}</div>
                  <div className={`text-xs ${statusColors[p.status].text} italic mt-1`}>{p.note}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Console */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#0284c7] mb-6">
              Console & XR
            </h3>
            {platforms.console.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-start gap-3 p-4 rounded-xl bg-black border ${statusColors[p.status].border} hover:border-slate-700 transition-colors`}
              >
                <div className={`w-3 h-3 rounded-full ${statusColors[p.status].bg} mt-1 flex-shrink-0`}></div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-slate-200">{p.name}</div>
                  <div className="text-xs text-slate-400 font-mono">{p.apis}</div>
                  <div className={`text-xs ${statusColors[p.status].text} italic mt-1`}>{p.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap gap-6 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-slate-300 font-medium">Stable</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-slate-300 font-medium">In Development</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-slate-300 font-medium">Planned</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
