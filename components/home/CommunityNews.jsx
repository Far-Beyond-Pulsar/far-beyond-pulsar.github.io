'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchRepoStats, fetchLatestRelease } from '@/lib/github';

const fallbackNews = [
  {
    date: "Nov 18, 2025",
    title: "Pulsar v0.1.47 Released",
    desc: "Latest improvements to the native engine.",
    url: "https://github.com/Far-Beyond-Pulsar/Pulsar-Native/releases",
  },
  {
    date: "Ongoing",
    title: "Join the Discussion",
    desc: "Connect with the community and share your projects on GitHub Discussions.",
    url: "https://github.com/orgs/Far-Beyond-Pulsar/discussions",
  },
  {
    date: "Ongoing",
    title: "Contributing to Pulsar",
    desc: "We welcome contributions — check out open issues and repositories.",
    url: "https://github.com/Far-Beyond-Pulsar",
  },
];

function formatDate(str) {
  try {
    return new Date(str).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return str;
  }
}

export default function CommunityNews() {
  const [stats, setStats] = useState(null);
  const [release, setRelease] = useState(null);
  const [announcements, setAnnouncements] = useState(fallbackNews);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const { fetchAnnouncementsFromRSS } = await import('@/lib/github');
        const [repoStats, latestRelease, announcementsData] = await Promise.all([
          fetchRepoStats(),
          fetchLatestRelease(),
          fetchAnnouncementsFromRSS(3),
        ]);

        if (repoStats) setStats(repoStats);
        if (latestRelease) setRelease(latestRelease);
        if (announcementsData?.length > 0) {
          setAnnouncements(
            announcementsData.map((d) => ({
              date: formatDate(d.updated),
              title: d.title,
              desc: d.body,
              url: d.url,
              author: d.author,
            }))
          );
        }
      } catch {
        // fallbacks already set
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const displayRelease = release || { version: 'v0.1.47', name: 'Latest development build' };

  return (
    <section className="max-w-5xl mx-auto py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-xs tracking-[0.2em] uppercase text-[#0ea5e9] font-semibold mb-4">
          Community
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
          What's Happening
        </h2>
        <p className="text-slate-400 max-w-sm mx-auto text-base">
          Follow along as Pulsar grows — releases, discussions, and contributions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
        {/* Latest release card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:w-64 bg-[#080808] border border-[#0ea5e9]/20 rounded-2xl p-6"
        >
          <p className="text-xs tracking-[0.15em] uppercase text-[#0ea5e9] font-semibold mb-3">
            Latest Build
          </p>
          <p className="text-2xl font-black text-white mb-1">
            {loading ? '—' : displayRelease.version}
          </p>
          <p className="text-sm text-slate-400 mb-1">
            {loading ? 'Fetching...' : displayRelease.name}
          </p>
          <p className="text-xs text-amber-400/70 mb-5">Alpha — expect breaking changes</p>
          <div className="flex flex-col gap-2">
            <a
              href={release?.htmlUrl || "https://github.com/Far-Beyond-Pulsar/Pulsar-Native/releases"}
              target="_blank"
              rel="noopener"
              className="px-4 py-2 rounded-lg bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold text-xs text-center transition"
            >
              Release Notes
            </a>
            <a
              href="/docs/installation"
              className="px-4 py-2 rounded-lg border border-slate-700 hover:border-slate-600 text-slate-300 font-semibold text-xs text-center transition"
            >
              Install
            </a>
          </div>

          {stats && (
            <div className="mt-6 pt-5 border-t border-slate-800 flex gap-5">
              <div>
                <p className="text-base font-bold text-white">{stats.stars}</p>
                <p className="text-xs text-slate-600">Stars</p>
              </div>
              <div>
                <p className="text-base font-bold text-white">{stats.forks}</p>
                <p className="text-xs text-slate-600">Forks</p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Announcements */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#080808] border border-slate-800 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm font-semibold text-white">Recent Announcements</p>
            <a
              href="https://github.com/orgs/Far-Beyond-Pulsar/discussions/categories/announcements"
              target="_blank"
              rel="noopener"
              className="text-xs text-[#0ea5e9] hover:text-[#38bdf8] transition"
            >
              View all →
            </a>
          </div>

          {loading && (
            <p className="text-xs text-slate-600 mb-4">Loading announcements...</p>
          )}

          <div className="space-y-5">
            {announcements.map((item, i) => (
              <div
                key={i}
                className={`flex gap-4 ${
                  i < announcements.length - 1 ? "pb-5 border-b border-slate-800/60" : ""
                }`}
              >
                <div className="text-xs text-slate-600 min-w-[90px] pt-0.5 font-mono">
                  {item.date}
                </div>
                <div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener"
                    className="text-sm font-semibold text-slate-200 hover:text-white transition block mb-1"
                  >
                    {item.title}
                  </a>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  {item.author && (
                    <p className="text-xs text-slate-700 mt-1">By {item.author}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
