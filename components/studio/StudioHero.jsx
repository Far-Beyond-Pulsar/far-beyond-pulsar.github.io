"use client";

import React, { useEffect, useRef } from "react";
import { useMotionValue } from "motion/react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const IMAGES = [
  "/sample_pics/studio-hero.png",
  "/sample_pics/studio-hero.png",
  "/sample_pics/studio-hero-2.png",
  "/sample_pics/studio-hero-3.png",
  "/sample_pics/studio-hero-4.png",
  "/sample_pics/studio-hero-5.png",
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
  const isScrollingDown = useRef(true);

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
      top: Math.max(
        0,
        lockedY.current + (forward ? window.innerHeight : -window.innerHeight),
      ),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      isScrollingDown.current = y > lastY;
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          !absorbing.current &&
          isScrollingDown.current
        ) {
          begin();
        }
      },
      { threshold: 0.6 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (absorbing.current) return;

      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      if (isScrollingDown.current && !completedForward.current) {
        if (rect.top < 0 && rect.bottom >= window.innerHeight * 0.6) {
          begin();
        }
      } else if (!isScrollingDown.current && completedForward.current) {
        if (rect.top >= 0 && rect.top < 150) {
          begin();
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onWheel = (e) => {
      if (!absorbing.current) return;
      e.preventDefault();
      accumulated.current += e.deltaY;
      const p = Math.min(1, Math.max(0, accumulated.current / THRESHOLD));
      absorbedProgress.set(p);

      if (
        p >= 1 &&
        accumulated.current > THRESHOLD + DEAD_ZONE &&
        e.deltaY > 0
      ) {
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
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#38bdf8]/30 bg-black/60 backdrop-blur-sm text-xs text-[#38bdf8] font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38bdf8]" />
              </span>
              In development &mdash; early access available on request
            </div>
            <span className="text-4xl font-semibold text-white">
              Real-time collaboration
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-[#38bdf8]">
                built for game teams.
              </span>
            </span>
          </div>
        }
        images={IMAGES}
        absorbedProgress={absorbedProgress}
      />
    </div>
  );
}
