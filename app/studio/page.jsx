"use client";

import { useEffect, useRef } from "react";

export const dynamic = "force-static";

function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const chars =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789";

    const fontSize = 16;
    let columns;
    let drops;

    const resize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      // Resizing the canvas clears it, so preserve the existing trails
      // by copying the current frame onto the resized canvas.
      let snapshot;
      if (canvas.width && canvas.height) {
        snapshot = document.createElement("canvas");
        snapshot.width = canvas.width;
        snapshot.height = canvas.height;
        snapshot.getContext("2d").drawImage(canvas, 0, 0);
      }

      canvas.width = newWidth;
      canvas.height = newHeight;

      if (snapshot) {
        ctx.drawImage(snapshot, 0, 0);
      }

      const newColumns = Math.floor(canvas.width / fontSize);

      if (!drops) {
        drops = new Array(newColumns).fill(0).map(() => Math.random() * -100);
      } else if (newColumns > columns) {
        for (let i = columns; i < newColumns; i++) {
          drops.push(Math.random() * -100);
        }
      } else if (newColumns < columns) {
        drops.length = newColumns;
      }

      columns = newColumns;
    };

    resize();
    window.addEventListener("resize", resize);

    let animationId;
    let lastTime = 0;
    const frameInterval = 80; // ms between updates, lower = faster

    const draw = (time) => {
      animationId = requestAnimationFrame(draw);

      if (time - lastTime < frameInterval) return;
      lastTime = time;

      ctx.fillStyle = "rgba(0, 0, 10, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const gradient = ctx.createLinearGradient(0, y - fontSize, 0, y);
        gradient.addColorStop(0, "rgba(56, 189, 248, 0)");
        gradient.addColorStop(1, "rgba(96, 165, 250, 0.9)");

        ctx.fillStyle = gradient;
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

export default function Page() {
  return (
    <main className="relative bg-black text-white overflow-hidden min-h-screen w-full flex items-center justify-center">
      <MatrixBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black pointer-events-none" style={{ zIndex: 1 }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4 tracking-tight text-blue-300 animate-pulse-glow">
          Studio
        </h1>
        <p className="text-lg text-blue-100/80">
          Something groundbreaking is coming for game studios and prosumers —
          dedicated infrastructure, reimagined from the ground up.
        </p>
        <p className="mt-2 text-sm uppercase tracking-widest text-blue-300/60">
          Coming soon
        </p>
      </div>
    </main>
  );
}
