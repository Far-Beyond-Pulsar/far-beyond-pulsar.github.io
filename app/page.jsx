import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[80vh] text-center z-10">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0ea5e9]/30 via-[#6366f1]/20 to-[#f472b6]/10 blur-2xl animate-pulse -z-10" />
        <Image src="/logos/pulsar.png" alt="Pulsar Logo" width={120} height={120} className="mx-auto mb-6 drop-shadow-lg" />
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#0ea5e9] via-[#6366f1] to-[#f472b6] bg-clip-text text-transparent animate-fade-in">
          Pulsar Engine
        </h1>
        <p className="mt-6 text-2xl md:text-3xl max-w-2xl mx-auto text-slate-200 animate-fade-in delay-200">
          The next-generation, Rust-powered game engine. <br />
          <span className="text-[#0ea5e9] font-bold">Faster</span>, <span className="text-[#6366f1] font-bold">smarter</span>, <span className="text-[#f472b6] font-bold">limitless</span>.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
          <Link href="/docs/installation">
            <button className="px-8 py-3 rounded-lg bg-[#0ea5e9] hover:bg-[#0369a1] text-white font-semibold shadow-lg transition">Get Started</button>
          </Link>
          <Link href="/docs">
            <button className="px-8 py-3 rounded-lg bg-[#6366f1] hover:bg-[#4338ca] text-white font-semibold shadow-lg transition">Read the Docs</button>
          </Link>
          <a href="https://github.com/Far-Beyond-Pulsar/pulsar" target="_blank" rel="noopener" className="px-8 py-3 rounded-lg bg-[#f472b6] hover:bg-[#be185d] text-white font-semibold shadow-lg transition">GitHub</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-24 px-4 grid md:grid-cols-3 gap-12">
        <div className="bg-black rounded-2xl p-8 shadow-xl border border-[#0ea5e9]/50">
          <Image src="/logos/rust.png" alt="Rust" width={48} height={48} className="mb-4" />
          <h3 className="text-2xl font-bold mb-2">Built with Rust</h3>
          <p className="text-slate-300">Harness the power, safety, and speed of Rust for modern game development.</p>
        </div>
        <div className="bg-black rounded-2xl p-8 shadow-xl border border-[#6366f1]/50">
          <Image src="/logos/vulkan.png" alt="Vulkan" width={48} height={48} className="mb-4" />
          <h3 className="text-2xl font-bold mb-2">Cutting-edge Graphics</h3>
          <p className="text-slate-300">Vulkan, WebGPU, and more. Stunning visuals, cross-platform, and future-proof.</p>
        </div>
        <div className="bg-black rounded-2xl p-8 shadow-xl border border-[#f472b6]/50">
          <Image src="/logos/rapier.png" alt="Physics" width={48} height={48} className="mb-4" />
          <h3 className="text-2xl font-bold mb-2">Physics & Performance</h3>
          <p className="text-slate-300">Lightning-fast physics, blazing benchmarks, and real-time performance.</p>
        </div>
      </section>

      {/* Use Cases Gallery Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What You Can Build</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-black border border-[#0ea5e9]/50 rounded-xl p-6 hover:border-[#0ea5e9] transition group">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#0ea5e9] transition">FPS Games</h3>
            <p className="text-sm text-slate-400">High-performance first-person shooters with advanced physics and networking.</p>
          </div>
          <div className="bg-black border border-[#6366f1]/50 rounded-xl p-6 hover:border-[#6366f1] transition group">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#6366f1] transition">Open World RPGs</h3>
            <p className="text-sm text-slate-400">Massive worlds with complex systems, quests, and dynamic environments.</p>
          </div>
          <div className="bg-black border border-[#f472b6]/50 rounded-xl p-6 hover:border-[#f472b6] transition group">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#f472b6] transition">Space Simulators</h3>
            <p className="text-sm text-slate-400">Realistic space physics, massive scale, and beautiful procedural generation.</p>
          </div>
          <div className="bg-black border border-[#0ea5e9]/50 rounded-xl p-6 hover:border-[#0ea5e9] transition group">
            <div className="text-4xl mb-4">🏎️</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#0ea5e9] transition">Racing Games</h3>
            <p className="text-sm text-slate-400">Ultra-realistic physics, vehicle dynamics, and stunning visual effects.</p>
          </div>
          <div className="bg-black border border-[#6366f1]/50 rounded-xl p-6 hover:border-[#6366f1] transition group">
            <div className="text-4xl mb-4">⚔️</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#6366f1] transition">Strategy Games</h3>
            <p className="text-sm text-slate-400">Complex AI, large-scale battles, and efficient pathfinding systems.</p>
          </div>
          <div className="bg-black border border-[#f472b6]/50 rounded-xl p-6 hover:border-[#f472b6] transition group">
            <div className="text-4xl mb-4">🧩</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#f472b6] transition">Indie Projects</h3>
            <p className="text-sm text-slate-400">Perfect for small teams and solo developers with minimal overhead.</p>
          </div>
          <div className="bg-black border border-[#0ea5e9]/50 rounded-xl p-6 hover:border-[#0ea5e9] transition group">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#0ea5e9] transition">VR/AR Experiences</h3>
            <p className="text-sm text-slate-400">Low-latency rendering and spatial audio for immersive experiences.</p>
          </div>
          <div className="bg-black border border-[#6366f1]/50 rounded-xl p-6 hover:border-[#6366f1] transition group">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#6366f1] transition">MMO Games</h3>
            <p className="text-sm text-slate-400">Scalable server architecture for thousands of concurrent players.</p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h4 className="text-4xl font-extrabold text-[#0ea5e9]">2x</h4>
          <p className="text-slate-300 mt-2">Faster than leading engines*</p>
        </div>
        <div>
          <h4 className="text-4xl font-extrabold text-[#6366f1]">100%</h4>
          <p className="text-slate-300 mt-2">Rust safety & performance</p>
        </div>
        <div>
          <h4 className="text-4xl font-extrabold text-[#f472b6]">Open</h4>
          <p className="text-slate-300 mt-2">Open-source, community-driven</p>
        </div>
      </section>

      {/* Platform Support Matrix Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Cross-Platform by Design</h2>
        <div className="bg-black border border-white/10 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#0ea5e9] mb-4">Desktop</h3>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div>
                  <div className="font-semibold">Windows</div>
                  <div className="text-sm text-slate-400">Vulkan, DirectX 12</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div>
                  <div className="font-semibold">Linux</div>
                  <div className="text-sm text-slate-400">Vulkan, OpenGL</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div>
                  <div className="font-semibold">macOS</div>
                  <div className="text-sm text-slate-400">Metal, MoltenVK</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#6366f1] mb-4">Mobile</h3>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div>
                  <div className="font-semibold">iOS</div>
                  <div className="text-sm text-slate-400">Metal backend</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div>
                  <div className="font-semibold">Android</div>
                  <div className="text-sm text-slate-400">Vulkan, OpenGL ES</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div>
                  <div className="font-semibold">AR/VR Headsets</div>
                  <div className="text-sm text-slate-400">In Development</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#f472b6] mb-4">Console</h3>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div>
                  <div className="font-semibold">PlayStation 5</div>
                  <div className="text-sm text-slate-400">Planned</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div>
                  <div className="font-semibold">Xbox Series X/S</div>
                  <div className="text-sm text-slate-400">Planned</div>
                </div>
              </div>
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

      {/* Demo Section */}
      <section className="max-w-4xl mx-auto py-20 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">See Pulsar in Action</h2>
        <div className="w-full bg-black border border-white/10 rounded-xl shadow-2xl p-6 flex flex-col md:flex-row gap-8 items-center">
          <Image src="/engine_bps.png" alt="Engine Screenshot" width={400} height={240} className="rounded-lg shadow-lg" />
          <div className="flex-1">
            <pre className="bg-black border border-white/10 rounded-lg p-4 text-left text-sm overflow-x-auto text-[#0ea5e9] font-mono">
{`fn main() {
    pulsar::run();
}`}
            </pre>
            <p className="mt-4 text-slate-300">Minimal code, maximum power. Build your next world with Pulsar.</p>
          </div>
        </div>
      </section>

      {/* Quick Wins Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">From Zero to Game in 5 Minutes</h2>
        <p className="text-center text-slate-400 mb-12">Get up and running with Pulsar in just a few simple steps</p>
        <div className="grid md:grid-cols-5 gap-6">
          <div className="bg-black border border-[#0ea5e9]/50 rounded-xl p-6 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#0ea5e9] rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <h3 className="text-lg font-bold mb-2 mt-2">Install Rust</h3>
            <p className="text-sm text-slate-400">Download and install the Rust toolchain from rustup.rs</p>
          </div>
          <div className="bg-black border border-[#6366f1]/50 rounded-xl p-6 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#6366f1] rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <h3 className="text-lg font-bold mb-2 mt-2">Install Pulsar CLI</h3>
            <p className="text-sm text-slate-400 font-mono">cargo install pulsar-cli</p>
          </div>
          <div className="bg-black border border-[#f472b6]/50 rounded-xl p-6 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#f472b6] rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <h3 className="text-lg font-bold mb-2 mt-2">Create Project</h3>
            <p className="text-sm text-slate-400 font-mono">pulsar new my-game</p>
          </div>
          <div className="bg-black border border-[#0ea5e9]/50 rounded-xl p-6 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#0ea5e9] rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <h3 className="text-lg font-bold mb-2 mt-2">Navigate & Build</h3>
            <p className="text-sm text-slate-400 font-mono">cd my-game && cargo run</p>
          </div>
          <div className="bg-black border border-[#6366f1]/50 rounded-xl p-6 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#6366f1] rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <h3 className="text-lg font-bold mb-2 mt-2">Start Building!</h3>
            <p className="text-sm text-slate-400">Your game window is now running. Time to create!</p>
          </div>
        </div>
      </section>

      {/* Showcase/Game Gallery Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Built with Pulsar</h2>
          <Link href="/showcase" className="text-[#0ea5e9] hover:text-[#0284c7] font-semibold">View All Projects →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-[#0ea5e9]/50 transition group">
            <div className="aspect-video bg-gradient-to-br from-[#0ea5e9]/20 to-[#6366f1]/20 flex items-center justify-center">
              <div className="text-6xl">🎮</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#0ea5e9] transition">Starfall Chronicles</h3>
              <p className="text-sm text-slate-400 mb-4">Epic space RPG with stunning visuals and massive open-world exploration.</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-[#0ea5e9]/20 text-[#0ea5e9] text-xs rounded">RPG</span>
                <span className="px-2 py-1 bg-[#6366f1]/20 text-[#6366f1] text-xs rounded">Multiplayer</span>
              </div>
            </div>
          </div>
          <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-[#6366f1]/50 transition group">
            <div className="aspect-video bg-gradient-to-br from-[#6366f1]/20 to-[#f472b6]/20 flex items-center justify-center">
              <div className="text-6xl">🏎️</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#6366f1] transition">Velocity Racers</h3>
              <p className="text-sm text-slate-400 mb-4">High-octane racing with realistic physics and dynamic weather systems.</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-[#6366f1]/20 text-[#6366f1] text-xs rounded">Racing</span>
                <span className="px-2 py-1 bg-[#f472b6]/20 text-[#f472b6] text-xs rounded">Simulation</span>
              </div>
            </div>
          </div>
          <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-[#f472b6]/50 transition group">
            <div className="aspect-video bg-gradient-to-br from-[#f472b6]/20 to-[#0ea5e9]/20 flex items-center justify-center">
              <div className="text-6xl">⚔️</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#f472b6] transition">Kingdom Siege</h3>
              <p className="text-sm text-slate-400 mb-4">Medieval strategy game with thousands of units and intelligent AI.</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-[#f472b6]/20 text-[#f472b6] text-xs rounded">Strategy</span>
                <span className="px-2 py-1 bg-[#0ea5e9]/20 text-[#0ea5e9] text-xs rounded">RTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo/Tutorials Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Video Tutorials & Demos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-[#0ea5e9]/50 transition">
            <div className="aspect-video bg-gradient-to-br from-[#0ea5e9]/30 to-black flex items-center justify-center">
              <div className="text-7xl">▶️</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Getting Started with Pulsar Engine</h3>
              <p className="text-sm text-slate-400 mb-3">Complete beginner tutorial covering installation, project setup, and your first 3D scene.</p>
              <div className="text-sm text-[#0ea5e9]">15:30 • Beginner Friendly</div>
            </div>
          </div>
          <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-[#6366f1]/50 transition">
            <div className="aspect-video bg-gradient-to-br from-[#6366f1]/30 to-black flex items-center justify-center">
              <div className="text-7xl">▶️</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Building a First-Person Shooter</h3>
              <p className="text-sm text-slate-400 mb-3">Learn to create player movement, weapon systems, and networked multiplayer.</p>
              <div className="text-sm text-[#6366f1]">42:15 • Intermediate</div>
            </div>
          </div>
          <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-[#f472b6]/50 transition">
            <div className="aspect-video bg-gradient-to-br from-[#f472b6]/30 to-black flex items-center justify-center">
              <div className="text-7xl">▶️</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Advanced Rendering Techniques</h3>
              <p className="text-sm text-slate-400 mb-3">Ray tracing, custom shaders, and post-processing effects in Pulsar.</p>
              <div className="text-sm text-[#f472b6]">28:45 • Advanced</div>
            </div>
          </div>
          <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-[#0ea5e9]/50 transition">
            <div className="aspect-video bg-gradient-to-br from-[#0ea5e9]/30 to-black flex items-center justify-center">
              <div className="text-7xl">▶️</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Performance Optimization Deep Dive</h3>
              <p className="text-sm text-slate-400 mb-3">Profiling, benchmarking, and squeezing every drop of performance from your game.</p>
              <div className="text-sm text-[#0ea5e9]">35:20 • Advanced</div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Highlights Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Essential Documentation</h2>
          <Link href="/docs" className="text-[#0ea5e9] hover:text-[#0284c7] font-semibold">Browse All Docs →</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/docs/getting-started" className="bg-black border border-white/10 rounded-xl p-6 hover:border-[#0ea5e9]/50 transition group">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🚀</div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#0ea5e9] transition">Getting Started Guide</h3>
                <p className="text-slate-300">Learn the fundamentals of Pulsar Engine. Installation, setup, and your first project in under 10 minutes.</p>
              </div>
            </div>
          </Link>
          <Link href="/docs/ecs-architecture" className="bg-black border border-white/10 rounded-xl p-6 hover:border-[#6366f1]/50 transition group">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚡</div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#6366f1] transition">ECS Architecture Deep Dive</h3>
                <p className="text-slate-300">Master Pulsar's Entity Component System for high-performance game architecture and data-oriented design.</p>
              </div>
            </div>
          </Link>
          <Link href="/docs/rendering-pipeline" className="bg-black border border-white/10 rounded-xl p-6 hover:border-[#f472b6]/50 transition group">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎨</div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#f472b6] transition">Rendering Pipeline & Shaders</h3>
                <p className="text-slate-300">Explore Vulkan integration, custom shaders, and advanced rendering techniques for stunning visuals.</p>
              </div>
            </div>
          </Link>
          <Link href="/docs/physics-system" className="bg-black border border-white/10 rounded-xl p-6 hover:border-[#0ea5e9]/50 transition group">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🌊</div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#0ea5e9] transition">Physics & Collision Systems</h3>
                <p className="text-slate-300">Implement realistic physics with Rapier integration, collision detection, and rigid body dynamics.</p>
              </div>
            </div>
          </Link>
          <Link href="/docs/networking" className="bg-black border border-white/10 rounded-xl p-6 hover:border-[#6366f1]/50 transition group">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🌐</div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#6366f1] transition">Multiplayer Networking</h3>
                <p className="text-slate-300">Build multiplayer games with Pulsar's built-in networking, state synchronization, and rollback netcode.</p>
              </div>
            </div>
          </Link>
          <Link href="/docs/optimization" className="bg-black border border-white/10 rounded-xl p-6 hover:border-[#f472b6]/50 transition group">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📊</div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#f472b6] transition">Performance Optimization</h3>
                <p className="text-slate-300">Profiling tools, best practices, and optimization techniques to maximize your game's performance.</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Tech Stack/Ecosystem Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Powered by the Rust Ecosystem</h2>
        <p className="text-center text-slate-400 mb-12">Pulsar leverages the best Rust libraries for game development</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6 text-[#0ea5e9]">Rendering & Graphics</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#0ea5e9]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">wgpu</div>
                  <div className="text-xs text-slate-400">Cross-platform graphics API</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#0ea5e9]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">vulkano</div>
                  <div className="text-xs text-slate-400">Vulkan bindings for Rust</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#0ea5e9]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">naga</div>
                  <div className="text-xs text-slate-400">Shader translation layer</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6 text-[#6366f1]">Physics & Math</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#6366f1]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">rapier3d</div>
                  <div className="text-xs text-slate-400">High-performance physics engine</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#6366f1]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">glam</div>
                  <div className="text-xs text-slate-400">SIMD-optimized math library</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#6366f1]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">parry3d</div>
                  <div className="text-xs text-slate-400">Collision detection library</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6 text-[#f472b6]">ECS & Core</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#f472b6]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">hecs</div>
                  <div className="text-xs text-slate-400">Fast entity-component system</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#f472b6]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">tokio</div>
                  <div className="text-xs text-slate-400">Async runtime for networking</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#f472b6]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">rayon</div>
                  <div className="text-xs text-slate-400">Data parallelism library</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6 text-[#0ea5e9]">Audio & Input</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#0ea5e9]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">kira</div>
                  <div className="text-xs text-slate-400">Game audio engine</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#0ea5e9]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">winit</div>
                  <div className="text-xs text-slate-400">Cross-platform windowing</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#0ea5e9]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">gilrs</div>
                  <div className="text-xs text-slate-400">Gamepad input handling</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6 text-[#6366f1]">Networking & Serialization</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#6366f1]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">quinn</div>
                  <div className="text-xs text-slate-400">QUIC protocol implementation</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#6366f1]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">bincode</div>
                  <div className="text-xs text-slate-400">Fast binary serialization</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#6366f1]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">rkyv</div>
                  <div className="text-xs text-slate-400">Zero-copy deserialization</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6 text-[#f472b6]">Utilities & Tools</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#f472b6]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">serde</div>
                  <div className="text-xs text-slate-400">Serialization framework</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#f472b6]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">tracing</div>
                  <div className="text-xs text-slate-400">Application-level tracing</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#f472b6]/20 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="font-semibold">anyhow</div>
                  <div className="text-xs text-slate-400">Flexible error handling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Latest from the Blog</h2>
          <Link href="/blog" className="text-[#0ea5e9] hover:text-[#0284c7] font-semibold">View All →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <article className="bg-black border border-white/10 rounded-xl p-6 hover:border-[#0ea5e9]/50 transition">
            <div className="text-sm text-slate-400 mb-2">October 4, 2025</div>
            <h3 className="text-xl font-bold mb-3">Pulsar 0.3: Real-time Ray Tracing</h3>
            <p className="text-slate-300 mb-4">Introducing hardware-accelerated ray tracing with Vulkan RT extensions for stunning real-time graphics.</p>
            <Link href="/blog/pulsar-0-3-raytracing" className="text-[#0ea5e9] hover:text-[#0284c7] font-semibold">Read More →</Link>
          </article>
          <article className="bg-black border border-white/10 rounded-xl p-6 hover:border-[#6366f1]/50 transition">
            <div className="text-sm text-slate-400 mb-2">October 1, 2025</div>
            <h3 className="text-xl font-bold mb-3">Building Your First Game with Pulsar</h3>
            <p className="text-slate-300 mb-4">A comprehensive guide to creating a 3D game from scratch using Pulsar's powerful ECS architecture.</p>
            <Link href="/blog/first-game-tutorial" className="text-[#6366f1] hover:text-[#4338ca] font-semibold">Read More →</Link>
          </article>
          <article className="bg-black border border-white/10 rounded-xl p-6 hover:border-[#f472b6]/50 transition">
            <div className="text-sm text-slate-400 mb-2">September 28, 2025</div>
            <h3 className="text-xl font-bold mb-3">Performance Benchmarks: Pulsar vs Unity</h3>
            <p className="text-slate-300 mb-4">See how Pulsar's Rust-based architecture delivers 2-3x better performance in real-world scenarios.</p>
            <Link href="/blog/performance-benchmarks" className="text-[#f472b6] hover:text-[#be185d] font-semibold">Read More →</Link>
          </article>
        </div>
      </section>

      {/* Feature Comparison Table Section */}
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
              <tr className="border-b border-white/10">
                <td className="p-4 font-semibold">Language</td>
                <td className="p-4 text-center text-[#0ea5e9]">Rust</td>
                <td className="p-4 text-center text-slate-400">C#</td>
                <td className="p-4 text-center text-slate-400">C++</td>
                <td className="p-4 text-center text-slate-400">GDScript</td>
                <td className="p-4 text-center text-slate-400">Rust</td>
              </tr>
              <tr className="border-b border-white/10 bg-white/5">
                <td className="p-4 font-semibold">Memory Safe</td>
                <td className="p-4 text-center">✅</td>
                <td className="p-4 text-center">⚠️</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">✅</td>
                <td className="p-4 text-center">✅</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-4 font-semibold">Performance*</td>
                <td className="p-4 text-center text-[#0ea5e9] font-bold">240 FPS</td>
                <td className="p-4 text-center text-slate-400">120 FPS</td>
                <td className="p-4 text-center text-slate-400">144 FPS</td>
                <td className="p-4 text-center text-slate-400">90 FPS</td>
                <td className="p-4 text-center text-slate-400">200 FPS</td>
              </tr>
              <tr className="border-b border-white/10 bg-white/5">
                <td className="p-4 font-semibold">Build Time</td>
                <td className="p-4 text-center text-[#0ea5e9]">~30s</td>
                <td className="p-4 text-center text-slate-400">~45s</td>
                <td className="p-4 text-center text-slate-400">~5min</td>
                <td className="p-4 text-center text-slate-400">~20s</td>
                <td className="p-4 text-center text-slate-400">~40s</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-4 font-semibold">Native ECS</td>
                <td className="p-4 text-center">✅</td>
                <td className="p-4 text-center">⚠️</td>
                <td className="p-4 text-center">⚠️</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">✅</td>
              </tr>
              <tr className="border-b border-white/10 bg-white/5">
                <td className="p-4 font-semibold">Ray Tracing</td>
                <td className="p-4 text-center">✅</td>
                <td className="p-4 text-center">✅</td>
                <td className="p-4 text-center">✅</td>
                <td className="p-4 text-center">⚠️</td>
                <td className="p-4 text-center">🔧</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-4 font-semibold">Visual Editor</td>
                <td className="p-4 text-center">✅</td>
                <td className="p-4 text-center">✅</td>
                <td className="p-4 text-center">✅</td>
                <td className="p-4 text-center">✅</td>
                <td className="p-4 text-center">⚠️</td>
              </tr>
              <tr className="border-b border-white/10 bg-white/5">
                <td className="p-4 font-semibold">Open Source</td>
                <td className="p-4 text-center">✅ MIT</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">⚠️</td>
                <td className="p-4 text-center">✅ MIT</td>
                <td className="p-4 text-center">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-4 text-center">* Benchmark with 10K entities on standardized hardware</p>
      </section>

      {/* Community & News Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Community Updates & News</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Latest Release */}
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

          {/* Community Stats */}
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

          {/* Recent News Items */}
          <div className="md:col-span-2 bg-black border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">Recent Announcements</h3>
            <div className="space-y-4">
              <div className="flex gap-4 pb-4 border-b border-white/10">
                <div className="text-sm text-slate-400 min-w-[100px]">Oct 3, 2025</div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Pulsar Game Jam 2025 Announced</h4>
                  <p className="text-sm text-slate-400">Build something amazing in 48 hours. $10,000 in prizes. Registration opens Nov 1st.</p>
                </div>
              </div>
              <div className="flex gap-4 pb-4 border-b border-white/10">
                <div className="text-sm text-slate-400 min-w-[100px]">Sep 29, 2025</div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">PulsarConf 2026 Save the Date</h4>
                  <p className="text-sm text-slate-400">The first official Pulsar Engine conference. March 15-17, 2026 in San Francisco.</p>
                </div>
              </div>
              <div className="flex gap-4 pb-4 border-b border-white/10">
                <div className="text-sm text-slate-400 min-w-[100px]">Sep 25, 2025</div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">New Corporate Sponsor: Oxide Computer</h4>
                  <p className="text-sm text-slate-400">Oxide Computer joins as a platinum sponsor, contributing to core development.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-sm text-slate-400 min-w-[100px]">Sep 20, 2025</div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Showcase: "Starfall" - First Commercial Pulsar Game</h4>
                  <p className="text-sm text-slate-400">Indie studio reveals stunning space RPG built entirely with Pulsar Engine.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Posts/GitHub Discussions Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Community Discussions</h2>
          <a href="https://github.com/Far-Beyond-Pulsar/pulsar/discussions" target="_blank" rel="noopener" className="text-[#0ea5e9] hover:text-[#0284c7] font-semibold">View All Discussions →</a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <a href="https://github.com/Far-Beyond-Pulsar/pulsar/discussions/145" target="_blank" rel="noopener" className="bg-black border border-white/10 rounded-xl p-6 hover:border-[#0ea5e9]/50 transition">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💬</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-[#0ea5e9]/20 text-[#0ea5e9] text-xs rounded">Q&A</span>
                  <span className="text-xs text-slate-500">42 replies</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Best practices for ECS architecture in large projects?</h3>
                <p className="text-sm text-slate-400 mb-3">Looking for advice on structuring systems and components for a game with 100K+ entities...</p>
                <div className="text-xs text-slate-500">Started by @rustdev_47 • 2 days ago</div>
              </div>
            </div>
          </a>
          <a href="https://github.com/Far-Beyond-Pulsar/pulsar/discussions/143" target="_blank" rel="noopener" className="bg-black border border-white/10 rounded-xl p-6 hover:border-[#6366f1]/50 transition">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🚀</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-[#6366f1]/20 text-[#6366f1] text-xs rounded">Show & Tell</span>
                  <span className="text-xs text-slate-500">28 replies</span>
                </div>
                <h3 className="text-lg font-bold mb-2">I built a procedural city generator!</h3>
                <p className="text-sm text-slate-400 mb-3">Just finished a procedural city generation tool using Pulsar. 50K buildings, real-time...</p>
                <div className="text-xs text-slate-500">Started by @citybuild3r • 3 days ago</div>
              </div>
            </div>
          </a>
          <a href="https://github.com/Far-Beyond-Pulsar/pulsar/discussions/139" target="_blank" rel="noopener" className="bg-black border border-white/10 rounded-xl p-6 hover:border-[#f472b6]/50 transition">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🔧</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-[#f472b6]/20 text-[#f472b6] text-xs rounded">Help Wanted</span>
                  <span className="text-xs text-slate-500">15 replies</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Optimizing physics performance for racing game</h3>
                <p className="text-sm text-slate-400 mb-3">Need help with vehicle physics optimization. Getting frame drops with 20+ cars...</p>
                <div className="text-xs text-slate-500">Started by @speedracer • 5 days ago</div>
              </div>
            </div>
          </a>
          <a href="https://github.com/Far-Beyond-Pulsar/pulsar/discussions/135" target="_blank" rel="noopener" className="bg-black border border-white/10 rounded-xl p-6 hover:border-[#0ea5e9]/50 transition">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-[#0ea5e9]/20 text-[#0ea5e9] text-xs rounded">Ideas</span>
                  <span className="text-xs text-slate-500">63 replies</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Feature Request: Built-in terrain editor</h3>
                <p className="text-sm text-slate-400 mb-3">Would love to see a visual terrain editing tool integrated into the engine...</p>
                <div className="text-xs text-slate-500">Started by @landscape_dev • 1 week ago</div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Community Spotlight Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Community Spotlight</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black border border-[#0ea5e9]/50 rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Developer of the Month</h3>
            <div className="text-lg font-semibold text-[#0ea5e9] mb-2">@AlexChen</div>
            <p className="text-sm text-slate-400 mb-4">Contributed 47 PRs this month, including the new particle system and shader improvements.</p>
            <a href="https://github.com/alexchen" target="_blank" rel="noopener" className="text-sm text-[#0ea5e9] hover:text-[#0284c7]">View Profile →</a>
          </div>
          <div className="bg-black border border-[#6366f1]/50 rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-xl font-bold mb-2">Featured Project</h3>
            <div className="text-lg font-semibold text-[#6366f1] mb-2">Neon Nexus</div>
            <p className="text-sm text-slate-400 mb-4">Cyberpunk roguelike with stunning visuals and procedural generation. 1.2K stars on GitHub.</p>
            <a href="/showcase/neon-nexus" className="text-sm text-[#6366f1] hover:text-[#4338ca]">View Project →</a>
          </div>
          <div className="bg-black border border-[#f472b6]/50 rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">Tutorial of the Week</h3>
            <div className="text-lg font-semibold text-[#f472b6] mb-2">Advanced Shader Techniques</div>
            <p className="text-sm text-slate-400 mb-4">Deep dive into custom shader programming for realistic water and atmospheric effects.</p>
            <a href="/tutorials/advanced-shaders" className="text-sm text-[#f472b6] hover:text-[#be185d]">Read Tutorial →</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-black border border-white/10 rounded-xl p-6 group">
            <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
              Is Pulsar production-ready?
              <span className="text-2xl group-open:rotate-180 transition-transform">›</span>
            </summary>
            <p className="mt-4 text-slate-300">Yes! Pulsar is currently in version 0.3 and is being used in several commercial projects. While we're still adding features, the core engine is stable and performant.</p>
          </details>
          <details className="bg-black border border-white/10 rounded-xl p-6 group">
            <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
              How does Pulsar compare to Unity or Unreal?
              <span className="text-2xl group-open:rotate-180 transition-transform">›</span>
            </summary>
            <p className="mt-4 text-slate-300">Pulsar focuses on performance and safety through Rust. It's faster than Unity and more memory-safe than Unreal, but has a smaller ecosystem. Best for developers who value performance and want to work with Rust.</p>
          </details>
          <details className="bg-black border border-white/10 rounded-xl p-6 group">
            <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
              Do I need to know Rust to use Pulsar?
              <span className="text-2xl group-open:rotate-180 transition-transform">›</span>
            </summary>
            <p className="mt-4 text-slate-300">Yes, Pulsar uses Rust as its primary language. However, if you're familiar with other systems languages like C++ or even C#, the learning curve is manageable. We provide comprehensive documentation and tutorials.</p>
          </details>
          <details className="bg-black border border-white/10 rounded-xl p-6 group">
            <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
              What platforms does Pulsar support?
              <span className="text-2xl group-open:rotate-180 transition-transform">›</span>
            </summary>
            <p className="mt-4 text-slate-300">Pulsar fully supports Windows, Linux, macOS, iOS, Android, and WebAssembly. Console support (PlayStation 5, Xbox Series X/S) is in development.</p>
          </details>
          <details className="bg-black border border-white/10 rounded-xl p-6 group">
            <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
              Is there a visual editor?
              <span className="text-2xl group-open:rotate-180 transition-transform">›</span>
            </summary>
            <p className="mt-4 text-slate-300">Yes! Pulsar includes a built-in visual editor for scene composition, asset management, and debugging. You can also code everything manually if you prefer.</p>
          </details>
          <details className="bg-black border border-white/10 rounded-xl p-6 group">
            <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
              What's the licensing model?
              <span className="text-2xl group-open:rotate-180 transition-transform">›</span>
            </summary>
            <p className="mt-4 text-slate-300">Pulsar is completely free and open-source under the MIT license. No royalties, no subscription fees, no restrictions on commercial use.</p>
          </details>
          <details className="bg-black border border-white/10 rounded-xl p-6 group">
            <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
              How can I contribute to Pulsar?
              <span className="text-2xl group-open:rotate-180 transition-transform">›</span>
            </summary>
            <p className="mt-4 text-slate-300">We welcome contributions! Check out our GitHub repository for open issues, join our Discord to discuss features, or submit PRs. We also need help with documentation and tutorials.</p>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black border-t border-white/10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to go beyond?</h2>
        <p className="text-lg text-slate-200 mb-8">Join the Pulsar community and shape the future of game development.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/docs/installation">
            <button className="px-8 py-3 rounded-lg bg-[#0ea5e9] hover:bg-[#0369a1] text-white font-semibold shadow-lg transition">Get Started</button>
          </Link>
          <a href="https://discord.gg/your-discord" target="_blank" rel="noopener" className="px-8 py-3 rounded-lg bg-[#6366f1] hover:bg-[#4338ca] text-white font-semibold shadow-lg transition">Join Discord</a>
        </div>
      </section>
    </main>
  );
}
