import Link from "next/link";

const projects = [
  {
    emoji: "🎮",
    title: "Starfall Chronicles",
    desc: "Epic space RPG with stunning visuals and massive open-world exploration.",
    tags: [{ text: "RPG", color: "0ea5e9" }, { text: "Multiplayer", color: "6366f1" }],
    gradient: "from-[#0ea5e9]/20 to-[#6366f1]/20",
    hoverColor: "0ea5e9"
  },
  {
    emoji: "🏎️",
    title: "Velocity Racers",
    desc: "High-octane racing with realistic physics and dynamic weather systems.",
    tags: [{ text: "Racing", color: "6366f1" }, { text: "Simulation", color: "f472b6" }],
    gradient: "from-[#6366f1]/20 to-[#f472b6]/20",
    hoverColor: "6366f1"
  },
  {
    emoji: "⚔️",
    title: "Kingdom Siege",
    desc: "Medieval strategy game with thousands of units and intelligent AI.",
    tags: [{ text: "Strategy", color: "f472b6" }, { text: "RTS", color: "0ea5e9" }],
    gradient: "from-[#f472b6]/20 to-[#0ea5e9]/20",
    hoverColor: "f472b6"
  }
];

export default function ShowcaseGallery() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Built with Pulsar</h2>
        <Link href="/showcase" className="text-[#0ea5e9] hover:text-[#0284c7] font-semibold">View All Projects →</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div key={i} className={`bg-black border border-white/10 rounded-xl overflow-hidden hover:border-[#${project.hoverColor}]/50 transition group`}>
            <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
              <div className="text-6xl">{project.emoji}</div>
            </div>
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-2 group-hover:text-[#${project.hoverColor}] transition`}>{project.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{project.desc}</p>
              <div className="flex gap-2">
                {project.tags.map((tag, j) => (
                  <span key={j} className={`px-2 py-1 bg-[#${tag.color}]/20 text-[#${tag.color}] text-xs rounded`}>{tag.text}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
