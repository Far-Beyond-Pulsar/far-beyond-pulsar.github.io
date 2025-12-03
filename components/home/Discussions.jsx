const discussions = [
  {
    emoji: "💬",
    tag: "Q&A",
    tagColor: "0ea5e9",
    replies: 42,
    title: "Best practices for ECS architecture in large projects?",
    desc: "Looking for advice on structuring systems and components for a game with 100K+ entities...",
    author: "@rustdev_47",
    time: "2 days ago",
    href: "https://github.com/Far-Beyond-Pulsar/pulsar/discussions/145"
  },
  {
    emoji: "🚀",
    tag: "Show & Tell",
    tagColor: "6366f1",
    replies: 28,
    title: "I built a procedural city generator!",
    desc: "Just finished a procedural city generation tool using Pulsar. 50K buildings, real-time...",
    author: "@citybuild3r",
    time: "3 days ago",
    href: "https://github.com/Far-Beyond-Pulsar/pulsar/discussions/143"
  },
  {
    emoji: "🔧",
    tag: "Help Wanted",
    tagColor: "f472b6",
    replies: 15,
    title: "Optimizing physics performance for racing game",
    desc: "Need help with vehicle physics optimization. Getting frame drops with 20+ cars...",
    author: "@speedracer",
    time: "5 days ago",
    href: "https://github.com/Far-Beyond-Pulsar/pulsar/discussions/139"
  },
  {
    emoji: "💡",
    tag: "Ideas",
    tagColor: "0ea5e9",
    replies: 63,
    title: "Feature Request: Built-in terrain editor",
    desc: "Would love to see a visual terrain editing tool integrated into the engine...",
    author: "@landscape_dev",
    time: "1 week ago",
    href: "https://github.com/Far-Beyond-Pulsar/pulsar/discussions/135"
  }
];

export default function Discussions() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Community Discussions</h2>
        <a href="https://github.com/Far-Beyond-Pulsar/pulsar/discussions" target="_blank" rel="noopener" className="text-[#0ea5e9] hover:text-[#0284c7] font-semibold">View All Discussions →</a>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {discussions.map((disc, i) => (
          <a key={i} href={disc.href} target="_blank" rel="noopener" className={`bg-black border border-white/10 rounded-xl p-6 hover:border-[#${disc.tagColor}]/50 transition`}>
            <div className="flex items-start gap-4">
              <div className="text-3xl">{disc.emoji}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 bg-[#${disc.tagColor}]/20 text-[#${disc.tagColor}] text-xs rounded`}>{disc.tag}</span>
                  <span className="text-xs text-slate-500">{disc.replies} replies</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{disc.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{disc.desc}</p>
                <div className="text-xs text-slate-500">Started by {disc.author} • {disc.time}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
