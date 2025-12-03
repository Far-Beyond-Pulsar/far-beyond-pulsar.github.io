const platforms = {
  desktop: [
    { name: "Windows", apis: "Vulkan, DirectX 12", status: "green" },
    { name: "Linux", apis: "Vulkan, OpenGL", status: "green" },
    { name: "macOS", apis: "Metal, MoltenVK", status: "green" }
  ],
  mobile: [
    { name: "iOS", apis: "Metal backend", status: "green" },
    { name: "Android", apis: "Vulkan, OpenGL ES", status: "green" },
    { name: "AR/VR Headsets", apis: "In Development", status: "yellow" }
  ],
  console: [
    { name: "PlayStation 5", apis: "Planned", status: "yellow" },
    { name: "Xbox Series X/S", apis: "Planned", status: "yellow" }
  ]
};

export default function PlatformSupport() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Cross-Platform by Design</h2>
      <div className="bg-black border border-white/10 rounded-xl p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#0ea5e9] mb-4">Desktop</h3>
            {platforms.desktop.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full bg-${p.status}-500`}></div>
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-slate-400">{p.apis}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#6366f1] mb-4">Mobile</h3>
            {platforms.mobile.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full bg-${p.status}-500`}></div>
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-slate-400">{p.apis}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#f472b6] mb-4">Console</h3>
            {platforms.console.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full bg-${p.status}-500`}></div>
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-slate-400">{p.apis}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-slate-400">Fully Supported</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <span className="text-slate-400">In Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}
