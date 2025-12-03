import Link from "next/link";

const posts = [
  {
    date: "October 4, 2025",
    title: "Pulsar 0.3: Real-time Ray Tracing",
    desc: "Introducing hardware-accelerated ray tracing with Vulkan RT extensions for stunning real-time graphics.",
    href: "/blog/pulsar-0-3-raytracing",
    color: "0ea5e9"
  },
  {
    date: "October 1, 2025",
    title: "Building Your First Game with Pulsar",
    desc: "A comprehensive guide to creating a 3D game from scratch using Pulsar's powerful ECS architecture.",
    href: "/blog/first-game-tutorial",
    color: "6366f1"
  },
  {
    date: "September 28, 2025",
    title: "Performance Benchmarks: Pulsar vs Unity",
    desc: "See how Pulsar's Rust-based architecture delivers 2-3x better performance in real-world scenarios.",
    href: "/blog/performance-benchmarks",
    color: "f472b6"
  }
];

export default function BlogPosts() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Latest from the Blog</h2>
        <Link href="/blog" className="text-[#0ea5e9] hover:text-[#0284c7] font-semibold">View All →</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <article key={i} className={`bg-black border border-white/10 rounded-xl p-6 hover:border-[#${post.color}]/50 transition`}>
            <div className="text-sm text-slate-400 mb-2">{post.date}</div>
            <h3 className="text-xl font-bold mb-3">{post.title}</h3>
            <p className="text-slate-300 mb-4">{post.desc}</p>
            <Link href={post.href} className={`text-[#${post.color}] hover:text-[#${post.color === "0ea5e9" ? "0284c7" : post.color === "6366f1" ? "4338ca" : "be185d"}] font-semibold`}>Read More →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
