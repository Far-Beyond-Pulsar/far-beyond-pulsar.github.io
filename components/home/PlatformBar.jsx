"use client";

import Image from "next/image";

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

function PlatformItem({ p }) {
  const Icon = p.icon;
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <span className="w-5 h-5 flex items-center justify-center text-white/50">
        {p.type === "img" ? (
          <Image
            src={p.logo}
            alt={p.label}
            width={20}
            height={20}
            loading="eager"
            className="object-contain opacity-70"
          />
        ) : (
          <div className="w-4 h-4">
            <Icon />
          </div>
        )}
      </span>
      <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-white/40 whitespace-nowrap">
        {p.label}
      </span>
      <span className="mx-5 text-white/15">/</span>
    </div>
  );
}

export default function PlatformBar() {
  return (
    <section className="py-0 px-0 border-y border-white/[0.07] bg-[#050506]">
      {/* Ledger header */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-5 pt-6 pb-4">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
          <span className="w-8 h-px bg-[#38bdf8]/70" />
          Deployment targets
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/20">
          desktop · web · xr — one codebase
        </span>
      </div>

      {/* Marquee tape */}
      <div className="mask-fade-x overflow-hidden py-5">
        <div className="flex animate-marquee w-max">
          <div className="flex items-center">
            {PLATFORMS.map((p) => (
              <PlatformItem key={p.label} p={p} />
            ))}
          </div>
          <div className="flex items-center" aria-hidden="true">
            {PLATFORMS.map((p) => (
              <PlatformItem key={p.label} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
