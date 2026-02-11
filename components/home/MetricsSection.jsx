export default function MetricsSection() {
  return (
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
  );
}
