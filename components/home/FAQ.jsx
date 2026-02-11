"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Is Pulsar production-ready?",
    a: "No, Pulsar is currently in early development (version 0.1.x). We're actively building core features and the API is subject to change. It's not recommended for production game development yet, but we welcome early adopters to test and provide feedback!"
  },
  {
    q: "How does Pulsar compare to Unity or Unreal?",
    a: "Pulsar aims to provide high performance through Rust and modern architecture. However, it's still in early development with a smaller feature set and ecosystem compared to established engines. Unity and Unreal are currently better choices for production projects."
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
    a: "Pulsar is completely free and open-source under the MIT license. No royalties, no subscription fees, no restrictions. However, please note the engine is in early development and not yet suitable for commercial game production."
  },
  {
    q: "How can I contribute to Pulsar?",
    a: "We welcome contributions! Check out our GitHub repository for open issues, join our Discord to discuss features, or submit PRs. We also need help with documentation and tutorials."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-4xl mx-auto py-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          FAQ
        </h2>
        <p className="text-xl text-slate-400">
          Common questions about Pulsar
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.details
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-black border border-slate-800 rounded-2xl p-6 group hover:border-slate-700 transition-all"
            open={openIndex === i}
            onToggle={(e) => setOpenIndex(e.target.open ? i : null)}
          >
            <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-slate-200">
              {faq.q}
              <motion.span
                animate={{ rotate: openIndex === i ? 90 : 0 }}
                className="text-2xl text-[#0ea5e9]"
              >
                ›
              </motion.span>
            </summary>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: openIndex === i ? 1 : 0 }}
              className="mt-4 text-slate-400 leading-relaxed"
            >
              {faq.a}
            </motion.p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
