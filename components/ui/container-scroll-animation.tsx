"use client";
import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
  MotionValue,
} from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  images,
  absorbedProgress,
}: {
  titleComponent: string | React.ReactNode;
  images?: string[];
  absorbedProgress?: MotionValue<number>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: pageScroll } = useScroll({ target: containerRef });
  const p = absorbedProgress ?? pageScroll;

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1]);

  const TILT_END = 0.2;
  const rotate = useTransform(p, [0, TILT_END], [20, 0]);
  const scale = useTransform(p, [0, TILT_END], scaleDimensions());
  const titleTranslate = useTransform(p, [0, TILT_END], [0, -120]);
  const titleOpacity = useTransform(p, [0, TILT_END], [1, 0]);
  const cardRise = useTransform(p, [0, TILT_END], [0, -200]);

  const n = images?.length ?? 1;
  const rawIndex = useTransform(p, [0, 1], [0, n]);

  const [floatIdx, setFloatIdx] = React.useState(0);
  useMotionValueEvent(rawIndex, "change", (v) => setFloatIdx(v));
  const current = Math.min(Math.floor(floatIdx), n - 1);
  const fract = floatIdx - Math.floor(floatIdx);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{ perspective: "1000px" }}
      >
        <Header
          translate={titleTranslate}
          opacity={titleOpacity}
          titleComponent={titleComponent}
        />

        <Card rotate={rotate} scale={scale} translate={cardRise}>
          {images ? (
            <div className="relative w-full h-full">
              {images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  draggable={false}
                  className="absolute inset-0 w-full h-full rounded-lg object-contain bg-zinc-900"
                  style={{
                    opacity: i === current ? 1 : 0,
                    transition: "opacity 0.3s",
                  }}
                />
              ))}
            </div>
          ) : null}
        </Card>

        <motion.div style={{ translateY: cardRise }}>
          {images && images.length > 1 && (
            <div className="flex items-center justify-center gap-3 mt-10">
              {images.map((_, i) => {
                let w = 0;
                if (i < current) w = 100;
                else if (i === current) w = fract * 100;
                return (
                  <div
                    key={i}
                    className="h-1.5 w-12 rounded-full overflow-hidden bg-white/15"
                  >
                    <div
                      className="h-full w-full rounded-full bg-[#38bdf8]"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export const Header = ({ translate, opacity, titleComponent }: any) => {
  return (
    <motion.div
      style={{ translateY: translate, opacity }}
      className="max-w-5xl mx-auto text-center mb-10"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY: translate,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#44444444] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden bg-zinc-900 rounded-lg">
        {children}
      </div>
    </motion.div>
  );
};
