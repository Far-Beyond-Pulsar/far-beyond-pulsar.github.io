const videos = [
  {
    title: "Getting Started with Pulsar Engine",
    desc: "Complete beginner tutorial covering installation, project setup, and your first 3D scene.",
    duration: "15:30 • Beginner Friendly",
    color: "0ea5e9",
    gradient: "from-[#0ea5e9]/30 to-black"
  },
  {
    title: "Building a First-Person Shooter",
    desc: "Learn to create player movement, weapon systems, and networked multiplayer.",
    duration: "42:15 • Intermediate",
    color: "06b6d4",
    gradient: "from-[#06b6d4]/30 to-black"
  },
  {
    title: "Advanced Rendering Techniques",
    desc: "Ray tracing, custom shaders, and post-processing effects in Pulsar.",
    duration: "28:45 • Advanced",
    color: "0284c7",
    gradient: "from-[#0284c7]/30 to-black"
  },
  {
    title: "Performance Optimization Deep Dive",
    desc: "Profiling, benchmarking, and squeezing every drop of performance from your game.",
    duration: "35:20 • Advanced",
    color: "0ea5e9",
    gradient: "from-[#0ea5e9]/30 to-black"
  },
  {
    title: "Entity Component System Guide",
    desc: "Master the ECS architecture pattern for scalable game development.",
    duration: "22:10 • Intermediate",
    color: "06b6d4",
    gradient: "from-[#06b6d4]/30 to-black"
  },
  {
    title: "2D Platformer from Scratch",
    desc: "Build a complete 2D platformer with physics, animations, and level design.",
    duration: "38:50 • Beginner Friendly",
    color: "0284c7",
    gradient: "from-[#0284c7]/30 to-black"
  },
  {
    title: "Multiplayer Networking Essentials",
    desc: "Client-server architecture, state synchronization, and lag compensation.",
    duration: "45:30 • Advanced",
    color: "0ea5e9",
    gradient: "from-[#0ea5e9]/30 to-black"
  },
  {
    title: "Custom Editor Tools & Plugins",
    desc: "Extend the Pulsar editor with custom tools, panels, and workflows.",
    duration: "31:15 • Intermediate",
    color: "06b6d4",
    gradient: "from-[#06b6d4]/30 to-black"
  }
];

export default function VideoTutorials() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Video Tutorials & Demos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video, i) => (
          <div key={i} className={`bg-black border border-white/10 rounded-xl overflow-hidden hover:border-[#${video.color}]/50 transition`}>
            <div className={`aspect-video bg-gradient-to-br ${video.gradient} flex items-center justify-center`}>
              <div className="text-7xl">▶️</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{video.title}</h3>
              <p className="text-sm text-slate-400 mb-3">{video.desc}</p>
              <div className={`text-sm text-[#${video.color}]`}>{video.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
