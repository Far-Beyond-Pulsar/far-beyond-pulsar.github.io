const spotlights = [
  // {
  //   emoji: "🏆",
  //   title: "Developer of the Month",
  //   name: "@tristanpoland",
  //   color: "0ea5e9",
  //   desc: "Contributed 47 PRs this month, including the new particle system and shader improvements.",
  //   link: "https://github.com/tristanpoland",
  //   linkText: "View Profile →"
  // },
  // {
  //   emoji: "✨",
  //   title: "Featured Project",
  //   name: "Neon Nexus",
  //   color: "6366f1",
  //   desc: "Cyberpunk roguelike with stunning visuals and procedural generation. 1.2K stars on GitHub.",
  //   link: "/showcase/neon-nexus",
  //   linkText: "View Project →"
  // },
  // {
  //   emoji: "📚",
  //   title: "Tutorial of the Week",
  //   name: "Advanced Shader Techniques",
  //   color: "f472b6",
  //   desc: "Deep dive into custom shader programming for realistic water and atmospheric effects.",
  //   link: "/tutorials/advanced-shaders",
  //   linkText: "Read Tutorial →"
  // }
];

export default function Spotlight() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Community Spotlight</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {spotlights.map((spot, i) => (
          <div key={i} className={`bg-black border border-[#${spot.color}]/50 rounded-xl p-8 text-center`}>
            <div className="text-5xl mb-4">{spot.emoji}</div>
            <h3 className="text-xl font-bold mb-2">{spot.title}</h3>
            <div className={`text-lg font-semibold text-[#${spot.color}] mb-2`}>{spot.name}</div>
            <p className="text-sm text-slate-400 mb-4">{spot.desc}</p>
            <a href={spot.link} target="_blank" rel="noopener" className={`text-sm text-[#${spot.color}] hover:text-[#${spot.color === "0ea5e9" ? "0284c7" : spot.color === "6366f1" ? "4338ca" : "be185d"}]`}>{spot.linkText}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
