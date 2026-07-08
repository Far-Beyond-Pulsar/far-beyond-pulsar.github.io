"use client";

import React, { useEffect, useRef } from "react";
import { useMotionValue } from "motion/react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const IMAGES = [
  "/sample_pics/level_editor.png",
  "/sample_pics/panels1.png",
  "/sample_pics/engine_bps.png",
  "/sample_pics/profiler.png",
  "/sample_pics/terminal.png",
];

const SCROLL_THRESHOLD = 5000;

export function StudioHero() {
  const ref = useRef(null);
  const absorbedProgress = useMotionValue(0);
  const absorbing = useRef(false);
  const accumulated = useRef(0);
  const lockedY = useRef(0);

  /* Lock page and absorb scroll */
  const begin = useRef(() => {});
  begin.current = () => {
    if (absorbing.current) return;
    absorbing.current = true;
    lockedY.current = window.scrollY;
    accumulated.current = 0;
    absorbedProgress.set(0);
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedY.current}px`;
    document.body.style.width = "100%";
  };

  const release = useRef(() => {});
  release.current = () => {
    absorbing.current = false;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo({ top: lockedY.current + window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !absorbing.current) begin.current(); },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onWheel = (e) => {
      if (!absorbing.current) return;
      e.preventDefault();
      accumulated.current = Math.max(0, accumulated.current + e.deltaY);
      const p = Math.min(1, accumulated.current / SCROLL_THRESHOLD);
      absorbedProgress.set(p);
      if (p >= 1) release.current();
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [absorbedProgress]);

  return (
    <div ref={ref} className="flex flex-col overflow-hidden bg-black">
      <ContainerScroll
        titleComponent={
          <span className="text-4xl font-semibold text-white">
            Real-time collaboration
            <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-[#38bdf8]">
              built for game teams.
            </span>
          </span>
        }
        images={IMAGES}
        absorbedProgress={absorbedProgress}
      />
    </div>
  );
}
