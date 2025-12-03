import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[80vh] text-center z-10">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0ea5e9]/30 via-[#6366f1]/20 to-[#f472b6]/10 blur-2xl animate-pulse -z-10" />
      <Image src="/logos/pulsar.png" alt="Pulsar Logo" width={120} height={120} className="mx-auto mb-6 drop-shadow-lg" />
      <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#0ea5e9] via-[#6366f1] to-[#f472b6] bg-clip-text text-transparent animate-fade-in">
        Pulsar Engine
      </h1>
      <p className="mt-6 text-2xl md:text-3xl max-w-2xl mx-auto text-slate-200 animate-fade-in delay-200">
        The next-generation, Rust-powered game engine. <br />
        <span className="text-[#0ea5e9] font-bold">Faster</span>, <span className="text-[#6366f1] font-bold">smarter</span>, <span className="text-[#f472b6] font-bold">limitless</span>.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
        <Link href="/docs/installation">
          <button className="px-8 py-3 rounded-lg bg-[#0ea5e9] hover:bg-[#0369a1] text-white font-semibold shadow-lg transition">Get Started</button>
        </Link>
        <Link href="/docs">
          <button className="px-8 py-3 rounded-lg bg-[#6366f1] hover:bg-[#4338ca] text-white font-semibold shadow-lg transition">Read the Docs</button>
        </Link>
        <a href="https://github.com/Far-Beyond-Pulsar/pulsar" target="_blank" rel="noopener" className="px-8 py-3 rounded-lg bg-[#f472b6] hover:bg-[#be185d] text-white font-semibold shadow-lg transition">GitHub</a>
      </div>
    </section>
  );
}
