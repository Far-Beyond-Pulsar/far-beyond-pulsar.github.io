"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    emoji: "🧪",
    title: "Engine Test Suite",
    desc: "Development test scenarios showcasing engine capabilities and feature demonstrations.",
    tags: [{ text: "Demo", color: "from-[#0ea5e9] to-[#06b6d4]" }, { text: "Alpha", color: "from-yellow-500 to-yellow-600" }],
    gradient: "from-[#0ea5e9]/10 to-black"
  },
  {
    emoji: "🚧",
    title: "Prototype Projects",
    desc: "Early community experiments and proof-of-concept projects testing Pulsar features.",
    tags: [{ text: "Experimental", color: "from-[#06b6d4] to-[#0284c7]" }, { text: "WIP", color: "from-yellow-500 to-yellow-600" }],
    gradient: "from-[#06b6d4]/10 to-black"
  },
  {
    emoji: "🔬",
    title: "Technical Demos",
    desc: "Performance tests, rendering samples, and technical demonstrations of engine systems.",
    tags: [{ text: "Testing", color: "from-[#0284c7] to-[#0ea5e9]" }, { text: "Dev", color: "from-[#0ea5e9] to-[#06b6d4]" }],
    gradient: "from-[#0284c7]/10 to-black"
  }
];

export default function ShowcaseGallery() {
  return (
        <section className="max-w-7xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-between items-center mb-4"
      >
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          Development Projects
        </h2>
        <Link href="/showcase" className="text-[#0ea5e9] hover:text-[#0284c7] font-semibold text-lg">
          View All →
        </Link>
      </motion.div>
      <p className="text-slate-400 mb-16 text-xl">Early experiments and demos by the community</p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-black border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors duration-200"
          >
            <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="text-5xl"
              >
                {project.emoji}
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#0ea5e9]">{project.title}</h3>
              <p className="text-xs text-slate-400 mb-3 leading-relaxed">{project.desc}</p>
              <div className="flex gap-2">
                {project.tags.map((tag, j) => (
                  <span 
                    key={j} 
                    className={`px-3 py-1 bg-gradient-to-r ${tag.color} bg-clip-text text-transparent font-semibold text-xs border border-slate-700 rounded-full`}
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
