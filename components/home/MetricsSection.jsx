"use client";
import { motion } from "framer-motion";

export default function MetricsSection() {
  const metrics = [
    { value: "2x", label: "Faster than leading engines*", color: "from-[#0ea5e9] to-[#06b6d4]" },
    { value: "100%", label: "Rust safety & performance", color: "from-[#06b6d4] to-[#0284c7]" },
    { value: "Open", label: "Open-source, community-driven", color: "from-[#0284c7] to-[#0ea5e9]" }
  ];

  return (
    <section className="relative max-w-6xl mx-auto py-20 px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group relative text-center p-8 bg-black rounded-2xl border border-slate-800 hover:border-slate-700 transition-all overflow-hidden"
          >
            {/* Gradient accent */}
            <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
            
            {/* Value */}
            <motion.h4
              whileHover={{ scale: 1.1 }}
              className={`relative z-10 text-6xl font-black mb-4 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
            >
              {metric.value}
            </motion.h4>

            {/* Label */}
            <p className="relative z-10 text-slate-300 font-medium">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs text-slate-500 mt-8"
      >
        *Benchmarks based on internal testing. Results may vary.
      </motion.p>
    </section>
  );
}
