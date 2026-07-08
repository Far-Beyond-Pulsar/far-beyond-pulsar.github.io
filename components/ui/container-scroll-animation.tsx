"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  images,
  absorbedProgress,
}: {
  titleComponent: string | React.ReactNode;
  images?: string[];
  children?: React.ReactNode;
  absorbedProgress?: import("motion/react").MotionValue<number>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const n = images?.length ?? 1;

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1]);

  const { scrollYProgress: pageScroll } = useScroll({ target: containerRef });
  const scrollYProgress = absorbedProgress ?? pageScroll;

  /* Quick tilt in first 20% – title fades up off top, tablet rises to center */
  const TILT_END = 0.2;
  const rotate = useTransform(scrollYProgress, [0, TILT_END], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, TILT_END], scaleDimensions());
  const titleTranslate = useTransform(scrollYProgress, [0, TILT_END], [0, -120]);
  const titleOpacity = useTransform(scrollYProgress, [0, TILT_END], [1, 0]);
  const cardTranslate = useTransform(scrollYProgress, [0, TILT_END], [0, -250]);

  const rawIndex = useTransform(scrollYProgress, [0, 1], [0, n]);
  const [floatIdx, setFloatIdx] = React.useState(0);
  React.useEffect(() => rawIndex.on("change", setFloatIdx), [rawIndex]);
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
        <Header translate={titleTranslate} opacity={titleOpacity} titleComponent={titleComponent} />

        <Card rotate={rotate} scale={scale} translate={cardTranslate}>
          {images ? (
            <div className="relative w-full h-full">
              {images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  draggable={false}
                  className="absolute inset-0 w-full h-full rounded-lg object-contain bg-zinc-900 transition-opacity duration-300"
                  style={{ opacity: i === current ? 1 : 0 }}
                />
              ))}
            </div>
          ) : null}
        </Card>

        {/* Progress bar segments – fill gradually, rise with card */}
        <motion.div style={{ translateY: cardTranslate }}>
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
      className="max-w-5xl mx-auto text-center"
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
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 mt-12 md:p-6 bg-[#44444444] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden bg-zinc-900 rounded-lg">
        {children}
      </div>
    </motion.div>
  );
};
