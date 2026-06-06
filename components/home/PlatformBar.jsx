"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function AppleIcon() {
  return (
    <svg viewBox="0 0 814 1000" className="w-full h-full" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-194.3 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
    </svg>
  );
}

const PLATFORMS = [
  { type: "img", logo: "/logos/windows.png", label: "Windows" },
  { type: "svg", icon: AppleIcon, label: "macOS" },
  { type: "img", logo: "/logos/linux.png", label: "Linux" },
  { type: "img", logo: "/logos/vulkan.png", label: "Vulkan" },
  { type: "img", logo: "/logos/dx.png", label: "DirectX 12" },
  { type: "img", logo: "/logos/metal.png", label: "Metal" },
  { type: "img", logo: "/logos/wgpu.png", label: "wgpu" },
  { type: "img", logo: "/logos/wasm.png", label: "WebAssembly" },
  { type: "img", logo: "/logos/webgpu.svg", label: "WebGPU" },
  { type: "img", logo: "/logos/openxr.png", label: "OpenXR" },
];

export default function PlatformBar() {
  return (
    <section className="py-16 px-5 border-y border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-white/70 tracking-tight">
            Platform &amp; Renderer Support
          </h3>
          <p className="text-sm text-white/30 mt-1.5">
            Deploy to desktop, web, and XR from a single codebase.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-7">
          {PLATFORMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                className="flex flex-col items-center gap-2.5 group cursor-default"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
              >
                <div className="w-10 h-10 flex items-center justify-center text-white/70 group-hover:text-white transition-all duration-200 group-hover:scale-110">
                  {p.type === "img" ? (
                    <Image
                      src={p.logo}
                      alt={p.label}
                      width={36}
                      height={36}
                      className="object-contain w-9 h-9 opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  ) : (
                    <div className="w-8 h-8">
                      <Icon />
                    </div>
                  )}
                </div>
                <span className="text-[11px] text-white/40 group-hover:text-white/65 transition-colors font-medium">
                  {p.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
