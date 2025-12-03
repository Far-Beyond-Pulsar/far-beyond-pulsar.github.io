import Link from "next/link";

const projects = [
  {
    emoji: "🧪",
    title: "Engine Test Suite",
    desc: "Development test scenarios showcasing engine capabilities and feature demonstrations.",
    tags: [{ text: "Demo", color: "0ea5e9" }, { text: "Alpha", color: "yellow" }],
    gradient: "from-[#0ea5e9]/20 to-[#6366f1]/20",
    hoverColor: "0ea5e9"
  },
  {
    emoji: "🚧",
    title: "Prototype Projects",
    desc: "Early community experiments and proof-of-concept projects testing Pulsar features.",
    tags: [{ text: "Experimental", color: "6366f1" }, { text: "WIP", color: "yellow" }],
    gradient: "from-[#6366f1]/20 to-[#f472b6]/20",
    hoverColor: "6366f1"
  },
  {
    emoji: "🔬",
    title: "Technical Demos",
    desc: "Performance tests, rendering samples, and technical demonstrations of engine systems.",
    tags: [{ text: "Testing", color: "f472b6" }, { text: "Dev", color: "0ea5e9" }],
    gradient: "from-[#f472b6]/20 to-[#0ea5e9]/20",
    hoverColor: "f472b6"
  }
];

export default function ShowcaseGallery() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold">Development Projects</h2>
        <Link href="/showcase" className="text-[#0ea5e9] hover:text-[#0284c7] font-semibold">View All →</Link>
      </div>
      <p className="text-slate-400 text-sm mb-12">Early experiments and demos by the community</p>
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
