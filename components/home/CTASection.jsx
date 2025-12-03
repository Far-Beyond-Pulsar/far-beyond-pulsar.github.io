import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 bg-black border-t border-white/10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Help Build the Future</h2>
      <p className="text-lg text-slate-200 mb-2">Join the Pulsar community and help shape the engine.</p>
      <p className="text-sm text-yellow-400 mb-8">⚠️ Early development stage - not for production use yet</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/docs/installation">
          <button className="px-8 py-3 rounded-lg bg-[#0ea5e9] hover:bg-[#0369a1] text-white font-semibold shadow-lg transition">Try It Out (Alpha)</button>
        </Link>
        <a href="https://github.com/orgs/Far-Beyond-Pulsar/discussions" target="_blank" rel="noopener" className="px-8 py-3 rounded-lg bg-[#6366f1] hover:bg-[#4338ca] text-white font-semibold shadow-lg transition">Join Discussions</a>
      </div>
    </section>
  );
}
