import Link from "next/link";

const docs = [
  { emoji: "🚀", title: "Getting Started Guide", desc: "Learn the fundamentals of Pulsar Engine. Installation, setup, and your first project in under 10 minutes.", href: "/docs/getting-started", color: "0ea5e9" },
  { emoji: "⚡", title: "ECS Architecture Deep Dive", desc: "Master Pulsar's Entity Component System for high-performance game architecture and data-oriented design.", href: "/docs/ecs-architecture", color: "6366f1" },
  { emoji: "🎨", title: "Rendering Pipeline & Shaders", desc: "Explore Vulkan integration, custom shaders, and advanced rendering techniques for stunning visuals.", href: "/docs/rendering-pipeline", color: "f472b6" },
  { emoji: "🌊", title: "Physics & Collision Systems", desc: "Implement realistic physics with Rapier integration, collision detection, and rigid body dynamics.", href: "/docs/physics-system", color: "0ea5e9" },
  { emoji: "🌐", title: "Multiplayer Networking", desc: "Build multiplayer games with Pulsar's built-in networking, state synchronization, and rollback netcode.", href: "/docs/networking", color: "6366f1" },
  { emoji: "📊", title: "Performance Optimization", desc: "Profiling tools, best practices, and optimization techniques to maximize your game's performance.", href: "/docs/optimization", color: "f472b6" }
];

export default function DocHighlights() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Essential Documentation</h2>
        <Link href="/docs" className="text-[#0ea5e9] hover:text-[#0284c7] font-semibold">Browse All Docs →</Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {docs.map((doc, i) => (
          <Link key={i} href={doc.href} className={`bg-black border border-white/10 rounded-xl p-6 hover:border-[#${doc.color}]/50 transition group`}>
            <div className="flex items-start gap-4">
              <div className="text-3xl">{doc.emoji}</div>
              <div>
                <h3 className={`text-xl font-bold mb-2 group-hover:text-[#${doc.color}] transition`}>{doc.title}</h3>
                <p className="text-slate-300">{doc.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
