const categories = [
  {
    title: "Rendering & Graphics",
    color: "0ea5e9",
    items: [
      { name: "wgpu", desc: "Cross-platform graphics API" },
      { name: "vulkano", desc: "Vulkan bindings for Rust" },
      { name: "naga", desc: "Shader translation layer" }
    ]
  },
  {
    title: "Physics & Math",
    color: "6366f1",
    items: [
      { name: "rapier3d", desc: "High-performance physics engine" },
      { name: "glam", desc: "SIMD-optimized math library" },
      { name: "parry3d", desc: "Collision detection library" }
    ]
  },
  {
    title: "ECS & Core",
    color: "f472b6",
    items: [
      { name: "hecs", desc: "Fast entity-component system" },
      { name: "tokio", desc: "Async runtime for networking" },
      { name: "rayon", desc: "Data parallelism library" }
    ]
  },
  {
    title: "Audio & Input",
    color: "0ea5e9",
    items: [
      { name: "kira", desc: "Game audio engine" },
      { name: "winit", desc: "Cross-platform windowing" },
      { name: "gilrs", desc: "Gamepad input handling" }
    ]
  },
  {
    title: "Networking & Serialization",
    color: "6366f1",
    items: [
      { name: "quinn", desc: "QUIC protocol implementation" },
      { name: "bincode", desc: "Fast binary serialization" },
      { name: "rkyv", desc: "Zero-copy deserialization" }
    ]
  },
  {
    title: "Utilities & Tools",
    color: "f472b6",
    items: [
      { name: "serde", desc: "Serialization framework" },
      { name: "tracing", desc: "Application-level tracing" },
      { name: "anyhow", desc: "Flexible error handling" }
    ]
  }
];

export default function TechStack() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Powered by the Rust Ecosystem</h2>
      <p className="text-center text-slate-400 mb-12">Pulsar leverages the best Rust libraries for game development</p>
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <div key={i} className="bg-black border border-white/10 rounded-xl p-6">
            <h3 className={`text-xl font-bold mb-6 text-[#${cat.color}]`}>{cat.title}</h3>
            <div className="space-y-4">
              {cat.items.map((item, j) => (
                <div key={j} className="flex items-center gap-3">
                  <div className={`w-8 h-8 bg-[#${cat.color}]/20 rounded flex items-center justify-center text-sm`}>📦</div>
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-xs text-slate-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
