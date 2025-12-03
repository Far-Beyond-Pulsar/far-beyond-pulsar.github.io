const news = [
  { date: "Oct 3, 2025", title: "Pulsar Game Jam 2025 Announced", desc: "Build something amazing in 48 hours. $10,000 in prizes. Registration opens Nov 1st." },
  { date: "Sep 29, 2025", title: "PulsarConf 2026 Save the Date", desc: "The first official Pulsar Engine conference. March 15-17, 2026 in San Francisco." },
  { date: "Sep 25, 2025", title: "New Corporate Sponsor: Oxide Computer", desc: "Oxide Computer joins as a platinum sponsor, contributing to core development." },
  { date: "Sep 20, 2025", title: "Showcase: \"Starfall\" - First Commercial Pulsar Game", desc: "Indie studio reveals stunning space RPG built entirely with Pulsar Engine." }
];

export default function CommunityNews() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Community Updates & News</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-black border border-[#0ea5e9]/50 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">🎉</div>
            <div>
              <div className="text-sm text-[#0ea5e9] font-semibold">LATEST RELEASE</div>
              <h3 className="text-2xl font-bold">Pulsar v0.3.0</h3>
            </div>
          </div>
          <p className="text-slate-300 mb-4">Ray tracing support, improved ECS performance, WebGPU backend, and 50+ bug fixes. Download now!</p>
          <div className="flex gap-3">
            <a href="https://github.com/Far-Beyond-Pulsar/pulsar/releases" target="_blank" rel="noopener" className="px-4 py-2 rounded-lg bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold text-sm transition">
              Release Notes
            </a>
            <a href="/docs/installation" className="px-4 py-2 rounded-lg border border-white/20 hover:border-[#0ea5e9]/50 text-white font-semibold text-sm transition">
              Install Now
            </a>
          </div>
        </div>

        <div className="bg-black border border-[#6366f1]/50 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">🌟</div>
            <div>
              <div className="text-sm text-[#6366f1] font-semibold">COMMUNITY</div>
              <h3 className="text-2xl font-bold">Join the Movement</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-3xl font-bold text-[#6366f1]">8.5k+</div>
              <div className="text-sm text-slate-400">GitHub Stars</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#6366f1]">2.3k+</div>
              <div className="text-sm text-slate-400">Discord Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#6366f1]">450+</div>
              <div className="text-sm text-slate-400">Contributors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#6366f1]">120+</div>
              <div className="text-sm text-slate-400">Community Projects</div>
            </div>
          </div>
          <a href="https://discord.gg/pulsar-engine" target="_blank" rel="noopener" className="block w-full px-4 py-2 rounded-lg bg-[#6366f1] hover:bg-[#4338ca] text-white font-semibold text-sm text-center transition">
            Join Discord
          </a>
        </div>

        <div className="md:col-span-2 bg-black border border-white/10 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-6">Recent Announcements</h3>
          <div className="space-y-4">
            {news.map((item, i) => (
              <div key={i} className={`flex gap-4 ${i < news.length - 1 ? "pb-4 border-b border-white/10" : ""}`}>
                <div className="text-sm text-slate-400 min-w-[100px]">{item.date}</div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
