const useCases = [
  { emoji: "🎮", title: "FPS Games", color: "0ea5e9", desc: "High-performance first-person shooters with advanced physics and networking." },
  { emoji: "🌍", title: "Open World RPGs", color: "6366f1", desc: "Massive worlds with complex systems, quests, and dynamic environments." },
  { emoji: "🚀", title: "Space Simulators", color: "f472b6", desc: "Realistic space physics, massive scale, and beautiful procedural generation." },
  { emoji: "🏎️", title: "Racing Games", color: "0ea5e9", desc: "Ultra-realistic physics, vehicle dynamics, and stunning visual effects." },
  { emoji: "⚔️", title: "Strategy Games", color: "6366f1", desc: "Complex AI, large-scale battles, and efficient pathfinding systems." },
  { emoji: "🧩", title: "Indie Projects", color: "f472b6", desc: "Perfect for small teams and solo developers with minimal overhead." },
  { emoji: "🎯", title: "VR/AR Experiences", color: "0ea5e9", desc: "Low-latency rendering and spatial audio for immersive experiences." },
  { emoji: "🌐", title: "MMO Games", color: "6366f1", desc: "Scalable server architecture for thousands of concurrent players." }
];

export default function UseCasesGallery() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What You Can Build</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {useCases.map((useCase, i) => (
          <div key={i} className={`bg-black border border-[#${useCase.color}]/50 rounded-xl p-6 hover:border-[#${useCase.color}] transition group`}>
            <div className="text-4xl mb-4">{useCase.emoji}</div>
            <h3 className={`text-xl font-bold mb-2 group-hover:text-[#${useCase.color}] transition`}>{useCase.title}</h3>
            <p className="text-sm text-slate-400">{useCase.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
