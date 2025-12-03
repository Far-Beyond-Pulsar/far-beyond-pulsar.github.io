const features = [
  { name: "Language", pulsar: "Rust", unity: "C#", unreal: "C++", godot: "GDScript", bevy: "Rust" },
  { name: "Memory Safe", pulsar: "✅", unity: "⚠️", unreal: "❌", godot: "✅", bevy: "✅" },
  { name: "Performance*", pulsar: "240 FPS", unity: "120 FPS", unreal: "144 FPS", godot: "90 FPS", bevy: "200 FPS", highlight: true },
  { name: "Build Time", pulsar: "~30s", unity: "~45s", unreal: "~5min", godot: "~20s", bevy: "~40s", highlight: true },
  { name: "Native ECS", pulsar: "✅", unity: "⚠️", unreal: "⚠️", godot: "❌", bevy: "✅" },
  { name: "Ray Tracing", pulsar: "✅", unity: "✅", unreal: "✅", godot: "⚠️", bevy: "🔧" },
  { name: "Visual Editor", pulsar: "✅", unity: "✅", unreal: "✅", godot: "✅", bevy: "⚠️" },
  { name: "Open Source", pulsar: "✅ MIT", unity: "❌", unreal: "⚠️", godot: "✅ MIT", bevy: "✅" }
];

export default function FeatureComparison() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">How Pulsar Stacks Up</h2>
      <p className="text-center text-slate-400 mb-12">See how Pulsar compares to other popular game engines</p>
      <div className="bg-black border border-white/10 rounded-xl overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th className="p-4 font-bold">Feature</th>
              <th className="p-4 font-bold text-[#0ea5e9] text-center">Pulsar</th>
              <th className="p-4 font-bold text-center">Unity</th>
              <th className="p-4 font-bold text-center">Unreal</th>
              <th className="p-4 font-bold text-center">Godot</th>
              <th className="p-4 font-bold text-center">Bevy</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {features.map((feature, i) => (
              <tr key={i} className={`border-b border-white/10 ${i % 2 === 1 ? "bg-white/5" : ""}`}>
                <td className="p-4 font-semibold">{feature.name}</td>
                <td className={`p-4 text-center ${feature.highlight ? "text-[#0ea5e9] font-bold" : ""}`}>{feature.pulsar}</td>
                <td className="p-4 text-center text-slate-400">{feature.unity}</td>
                <td className="p-4 text-center text-slate-400">{feature.unreal}</td>
                <td className="p-4 text-center text-slate-400">{feature.godot}</td>
                <td className="p-4 text-center text-slate-400">{feature.bevy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-500 mt-4 text-center">* Benchmark with 10K entities on standardized hardware</p>
    </section>
  );
}
