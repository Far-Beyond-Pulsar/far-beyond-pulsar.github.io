"use client";

import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function StudioHero() {
  return (
    <div className="w-full overflow-hidden bg-black">
      <MacbookScroll
        title={
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Real-time collaboration
            <br />
            <span className="text-[#38bdf8]">built for game teams.</span>
          </span>
        }
        badge={
          <img
            src="/logos/pulsar.png"
            alt="Pulsar"
            className="h-10 w-10 -rotate-12 transform opacity-80"
          />
        }
        src={`/sample_pics/level_editor.png`}
        showGradient={false}
      />
    </div>
  );
}
