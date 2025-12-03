const faqs = [
  {
    q: "Is Pulsar production-ready?",
    a: "Yes! Pulsar is currently in version 0.3 and is being used in several commercial projects. While we're still adding features, the core engine is stable and performant."
  },
  {
    q: "How does Pulsar compare to Unity or Unreal?",
    a: "Pulsar focuses on performance and safety through Rust. It's faster than Unity and more memory-safe than Unreal, but has a smaller ecosystem. Best for developers who value performance and want to work with Rust."
  },
  {
    q: "Do I need to know Rust to use Pulsar?",
    a: "Yes, Pulsar uses Rust as its primary language. However, if you're familiar with other systems languages like C++ or even C#, the learning curve is manageable. We provide comprehensive documentation and tutorials."
  },
  {
    q: "What platforms does Pulsar support?",
    a: "Pulsar fully supports Windows, Linux, macOS, iOS, Android, and WebAssembly. Console support (PlayStation 5, Xbox Series X/S) is in development."
  },
  {
    q: "Is there a visual editor?",
    a: "Yes! Pulsar includes a built-in visual editor for scene composition, asset management, and debugging. You can also code everything manually if you prefer."
  },
  {
    q: "What's the licensing model?",
    a: "Pulsar is completely free and open-source under the MIT license. No royalties, no subscription fees, no restrictions on commercial use."
  },
  {
    q: "How can I contribute to Pulsar?",
    a: "We welcome contributions! Check out our GitHub repository for open issues, join our Discord to discuss features, or submit PRs. We also need help with documentation and tutorials."
  }
];

export default function FAQ() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="bg-black border border-white/10 rounded-xl p-6 group">
            <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
              {faq.q}
              <span className="text-2xl group-open:rotate-180 transition-transform">›</span>
            </summary>
            <p className="mt-4 text-slate-300">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
