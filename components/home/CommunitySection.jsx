"use client";

import { motion } from "framer-motion";
import { Github, MessageSquare, GitFork, Star, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const STATIC_DISCUSSIONS = [
  {
    title: "Join the Discussion",
    body: "Have ideas or questions? Connect with contributors and share your projects on GitHub Discussions.",
    url: "https://github.com/orgs/Far-Beyond-Pulsar/discussions",
    date: "Ongoing",
    category: "Community",
  },
  {
    title: "Contributing to Pulsar",
    body: "We welcome contributions of all sizes — from documentation fixes to new rendering features.",
    url: "https://github.com/Far-Beyond-Pulsar/Pulsar-Native/blob/main/CONTRIBUTING.md",
    date: "Ongoing",
    category: "Contributing",
  },
  {
    title: "Engine Architecture RFC",
    body: "Read the open RFC on the multi-layer compositor design and how the editor pipeline works.",
    url: "https://github.com/orgs/Far-Beyond-Pulsar/discussions",
    date: "2025",
    category: "RFC",
  },
];

function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 text-white/25 mb-1">
        <Icon className="w-3.5 h-3.5" />
        <span className="text-[11px] uppercase tracking-widest font-medium">{label}</span>
      </div>
      <span className="text-2xl font-bold text-white tracking-tight">{value}</span>
    </div>
  );
}

function DiscussionCard({ title, body, url, date, category }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-[#0c0c0c] border border-white/[0.07] rounded-xl p-5 hover:border-white/[0.14] transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="inline-block px-2 py-0.5 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 rounded text-[10px] text-[#0ea5e9] font-medium tracking-wide">
          {category}
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/45 transition-colors flex-shrink-0 mt-0.5" />
      </div>
      <h3 className="text-sm font-semibold text-white/80 group-hover:text-white mb-2 transition-colors leading-snug">
        {title}
      </h3>
      <p className="text-xs text-white/35 leading-relaxed line-clamp-2">{body}</p>
    </a>
  );
}

export default function CommunitySection() {
  const [stats, setStats] = useState({ stars: "—", forks: "—", issues: "—" });

  useEffect(() => {
    fetch("https://api.github.com/repos/Far-Beyond-Pulsar/Pulsar-Native")
      .then((r) => r.json())
      .then((d) => {
        if (d.stargazers_count !== undefined) {
          setStats({
            stars: d.stargazers_count >= 1000
              ? `${(d.stargazers_count / 1000).toFixed(1)}k`
              : String(d.stargazers_count),
            forks: String(d.forks_count ?? "—"),
            issues: String(d.open_issues_count ?? "—"),
          });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="py-28 px-5 bg-[#030303]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0ea5e9] mb-4">
            Community
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight max-w-md">
              Built in the open, by the community.
            </h2>
            <a
              href="https://github.com/Far-Beyond-Pulsar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors flex-shrink-0"
            >
              <Github className="w-4 h-4" />
              Far-Beyond-Pulsar
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left — stats + links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            {/* Stats */}
            <div className="bg-[#0c0c0c] border border-white/[0.07] rounded-xl p-6 mb-5">
              <div className="grid grid-cols-3 gap-4">
                <StatCard icon={Star} value={stats.stars} label="Stars" />
                <StatCard icon={GitFork} value={stats.forks} label="Forks" />
                <StatCard icon={MessageSquare} value={stats.issues} label="Issues" />
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-[#0c0c0c] border border-white/[0.07] rounded-xl overflow-hidden">
              {[
                { label: "GitHub Discussions", href: "https://github.com/orgs/Far-Beyond-Pulsar/discussions", icon: MessageSquare },
                { label: "Open Issues", href: "https://github.com/Far-Beyond-Pulsar/Pulsar-Native/issues", icon: Github },
                { label: "Contribute", href: "https://github.com/Far-Beyond-Pulsar/Pulsar-Native/blob/main/CONTRIBUTING.md", icon: GitFork },
              ].map(({ label, href, icon: Icon }, i) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between px-5 py-3.5 hover:bg-white/[0.03] transition-colors group ${i > 0 ? "border-t border-white/[0.05]" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-3.5 h-3.5 text-white/25" />
                    <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">{label}</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-white/15 group-hover:text-white/40 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — discussions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {STATIC_DISCUSSIONS.map((d) => (
              <DiscussionCard key={d.title} {...d} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
