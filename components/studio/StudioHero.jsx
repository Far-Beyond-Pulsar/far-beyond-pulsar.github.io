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

const THRESHOLD = 5000;
const DEAD_ZONE = 100;

export function StudioHero() {
  const ref = useRef(null);
  const absorbedProgress = useMotionValue(0);
  const absorbing = useRef(false);
  const accumulated = useRef(0);
  const lockedY = useRef(0);
  const completedForward = useRef(false);

  const begin = () => {
    if (absorbing.current) return;
    absorbing.current = true;
    lockedY.current = window.scrollY;
    accumulated.current = completedForward.current ? THRESHOLD : 0;
    absorbedProgress.set(accumulated.current / THRESHOLD);
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedY.current}px`;
    document.body.style.width = "100%";
  };

  const release = (forward) => {
    absorbing.current = false;
    completedForward.current = forward;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo({
      top: Math.max(0, lockedY.current + (forward ? window.innerHeight : -window.innerHeight)),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !absorbing.current) begin();
      },
      { threshold: 0.6 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onWheel = (e) => {
      if (!absorbing.current) return;
      e.preventDefault();
      accumulated.current += e.deltaY;
      const p = Math.min(1, Math.max(0, accumulated.current / THRESHOLD));
      absorbedProgress.set(p);

      if (p >= 1 && accumulated.current > THRESHOLD + DEAD_ZONE && e.deltaY > 0) {
        release(true);
      } else if (p <= 0 && accumulated.current < -DEAD_ZONE && e.deltaY < 0) {
        release(false);
      }
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
