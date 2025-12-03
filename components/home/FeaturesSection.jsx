import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="max-w-6xl mx-auto py-24 px-4 grid md:grid-cols-3 gap-12">
      <div className="bg-black rounded-2xl p-8 shadow-xl border border-[#0ea5e9]/50">
        <Image src="/logos/rust.png" alt="Rust" width={48} height={48} className="mb-4" />
        <h3 className="text-2xl font-bold mb-2">Built with Rust</h3>
        <p className="text-slate-300">Harness the power, safety, and speed of Rust for modern game development.</p>
      </div>
      <div className="bg-black rounded-2xl p-8 shadow-xl border border-[#6366f1]/50">
        <Image src="/logos/vulkan.png" alt="Vulkan" width={48} height={48} className="mb-4" />
        <h3 className="text-2xl font-bold mb-2">Cutting-edge Graphics</h3>
        <p className="text-slate-300">Vulkan, WebGPU, and more. Stunning visuals, cross-platform, and future-proof.</p>
      </div>
      <div className="bg-black rounded-2xl p-8 shadow-xl border border-[#f472b6]/50">
        <Image src="/logos/rapier.png" alt="Physics" width={48} height={48} className="mb-4" />
        <h3 className="text-2xl font-bold mb-2">Physics & Performance</h3>
        <p className="text-slate-300">Lightning-fast physics, blazing benchmarks, and real-time performance.</p>
      </div>
    </section>
  );
}
