'use client';

import { useState, useEffect } from 'react';

// Real fallback discussions from your actual GitHub (if RSS fails)
const fallbackDiscussions = [
  {
    emoji: "🚀",
    tag: "Development",
    tagColor: "6366f1",
    replies: "5+",
    title: "GPUI Bring-Your-Own-Window",
    desc: "Working on adding Bring-Your-Own-Window support to GPUI. This will allow us to establish a Winit window and render the 3D game scene...",
    author: "tristanpoland",
    time: "1 month ago",
    href: "https://github.com/orgs/Far-Beyond-Pulsar/discussions/25"
  },
  {
    emoji: "📢",
    tag: "Announcements",
    tagColor: "0ea5e9",
    replies: "3+",
    title: "Temporarily loss of support for non-Windows platforms",
    desc: "Due to recent changes in GPUI integration, we're temporarily focusing on Windows platform support...",
    author: "tristanpoland",
    time: "1 month ago",
    href: "https://github.com/orgs/Far-Beyond-Pulsar/discussions/17"
  },
  {
    emoji: "💬",
    tag: "General",
    tagColor: "f472b6",
    replies: "View",
    title: "Join the discussion",
    desc: "Have questions or ideas? Start a discussion and connect with the community...",
    author: "Community",
    time: "Active",
    href: "https://github.com/orgs/Far-Beyond-Pulsar/discussions"
  },
  {
    emoji: "💡",
    tag: "Ideas",
    tagColor: "0ea5e9",
    replies: "View",
    title: "Share your ideas",
    desc: "Help shape the future of Pulsar by sharing your feature requests and improvement ideas...",
    author: "Community",
    time: "Active",
    href: "https://github.com/orgs/Far-Beyond-Pulsar/discussions/categories/ideas"
  }
];

export default function Discussions() {
  const [discussions, setDiscussions] = useState(fallbackDiscussions);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDiscussions() {
      try {
        const { fetchDiscussionsFromRSS, formatRelativeTime } = await import('@/lib/github');
        console.log('Fetching discussions from RSS...');
        const rssData = await fetchDiscussionsFromRSS(4);
        console.log('RSS Data received:', rssData);
        
        if (rssData && rssData.length > 0) {
          const formatted = rssData.map(disc => ({
            emoji: disc.emoji,
            tag: disc.category,
            tagColor: disc.tagColor, // Use the color from RSS parser
            replies: 'View',
            title: disc.title,
            desc: disc.body,
            author: disc.author,
            time: formatRelativeTime(disc.updated),
            href: disc.url
          }));
          
          setDiscussions(formatted);
          console.log('Discussions set:', formatted.length, formatted);
        } else {
          console.warn('No RSS data received, using fallbacks');
        }
      } catch (error) {
        console.error('Error loading discussions:', error);
      } finally {
        setLoading(false);
      }
    }

    loadDiscussions();
  }, []);
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Community Discussions</h2>
        <a href="https://github.com/orgs/Far-Beyond-Pulsar/discussions" target="_blank" rel="noopener" className="text-[#0ea5e9] hover:text-[#0284c7] font-semibold">View All Discussions →</a>
      </div>
      {loading && <div className="text-center text-slate-400 mb-6">Loading latest discussions...</div>}
      {!loading && discussions.length === 0 && (
        <div className="text-center text-slate-400 mb-6">No discussions found. Check the fallback links below.</div>
      )}
      <div className="grid md:grid-cols-2 gap-6">
        {!loading && discussions.map((disc, i) => (
          <a key={i} href={disc.href} target="_blank" rel="noopener" className={`bg-black border border-white/10 rounded-xl p-6 hover:border-[#${disc.tagColor}]/50 transition group`}>
            <div className="flex items-start gap-4">
              <div className="text-3xl">{disc.emoji}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 bg-[#${disc.tagColor}]/20 text-[#${disc.tagColor}] text-xs rounded`}>{disc.tag}</span>
                  <span className="text-xs text-slate-500">{disc.replies}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#0ea5e9] transition">{disc.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{disc.desc}</p>
                <div className="text-xs text-slate-500">{disc.author} • {disc.time}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-slate-400 text-sm mb-4">
          {loading ? 'Loading discussions...' : discussions.length > 4 ? 'Showing latest discussions. ' : ''}
          Browse all categories on GitHub!
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="https://github.com/orgs/Far-Beyond-Pulsar/discussions" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold transition">
            <span>All Discussions</span>
            <span>→</span>
          </a>
          <a href="https://github.com/orgs/Far-Beyond-Pulsar/discussions/new" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#0ea5e9] hover:bg-[#0ea5e9]/10 text-[#0ea5e9] font-semibold transition">
            <span>Start Discussion</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
