const platforms = {
  desktop: [
    { name: "Windows", apis: "Vulkan, DirectX 12", status: "green", note: "Stable" },
    { name: "Linux", apis: "Vulkan, OpenGL", status: "yellow", note: "In Development" },
    { name: "macOS", apis: "Metal, MoltenVK", status: "yellow", note: "In Development" }
  ],
  mobile: [
    { name: "iOS", apis: "Metal backend", status: "yellow", note: "In Development" },
    { name: "Android", apis: "Vulkan, OpenGL ES", status: "yellow", note: "In Development" },
    { name: "WebAssembly", apis: "WASM", status: "yellow", note: "In Development" }
  ],
  console: [
    { name: "PlayStation 5", apis: "TBD", status: "red", note: "Planned" },
    { name: "Xbox Series X/S", apis: "TBD", status: "red", note: "Planned" },
    { name: "AR/VR", apis: "TBD", status: "red", note: "Future Goal" }
  ]
};

export default function PlatformSupport() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Platform Support</h2>
      <p className="text-center text-slate-400 mb-2">Cross-platform architecture with Windows as primary target</p>
      <p className="text-center text-xs text-yellow-400 mb-12">⚠️ Currently only Windows is stable - other platforms under development</p>
      <div className="bg-black border border-white/10 rounded-xl p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#0ea5e9] mb-4">Desktop</h3>
            {platforms.desktop.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full bg-${p.status}-500`}></div>
                <div className="flex-1">
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-xs text-slate-400">{p.apis}</div>
                  <div className="text-xs text-slate-500 italic">{p.note}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#6366f1] mb-4">Mobile</h3>
            {platforms.mobile.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full bg-${p.status}-500`}></div>
                <div className="flex-1">
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-xs text-slate-400">{p.apis}</div>
                  <div className="text-xs text-slate-500 italic">{p.note}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#f472b6] mb-4">Console</h3>
            {platforms.console.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full bg-${p.status}-500`}></div>
                <div className="flex-1">
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-xs text-slate-400">{p.apis}</div>
                  <div className="text-xs text-slate-500 italic">{p.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-slate-400">Stable</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <span className="text-slate-400">In Development</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span className="text-slate-400">Planned</span>
          </div>
        </div>
        <div className="mt-4 text-xs text-slate-500 text-center">
          <strong>Note:</strong> Only Windows platform is currently stable and recommended. All other platforms are experimental or in planning stages.
        </div>
      </div>
    </section>
  );
}
