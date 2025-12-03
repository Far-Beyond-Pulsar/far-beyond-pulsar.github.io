const steps = [
  { num: 1, title: "Install Rust", desc: "Download and install the Rust toolchain from rustup.rs", color: "0ea5e9" },
  { num: 2, title: "Install Pulsar CLI", desc: "cargo install pulsar-cli", color: "6366f1" },
  { num: 3, title: "Create Project", desc: "pulsar new my-game", color: "f472b6" },
  { num: 4, title: "Navigate & Build", desc: "cd my-game && cargo run", color: "0ea5e9" },
  { num: 5, title: "Start Building!", desc: "Your game window is now running. Time to create!", color: "6366f1" }
];

export default function QuickWins() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">From Zero to Game in 5 Minutes</h2>
      <p className="text-center text-slate-400 mb-12">Get up and running with Pulsar in just a few simple steps</p>
      <div className="grid md:grid-cols-5 gap-6">
        {steps.map((step) => (
          <div key={step.num} className={`bg-black border border-[#${step.color}]/50 rounded-xl p-6 relative`}>
            <div className={`absolute -top-4 -left-4 w-10 h-10 bg-[#${step.color}] rounded-full flex items-center justify-center font-bold text-lg`}>{step.num}</div>
            <h3 className="text-lg font-bold mb-2 mt-2">{step.title}</h3>
            <p className="text-sm text-slate-400 font-mono">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
