'use client';

import { useState, useEffect } from 'react';
import { fetchRepoStats, fetchLatestRelease, formatNumber } from '@/lib/github';

const fallbackNews = [
  { date: "Nov 18, 2025", title: "Pulsar v0.1.47 Released", desc: "Latest improvements to the native engine. Check out the release notes for details.", url: "https://github.com/Far-Beyond-Pulsar/Pulsar-Native/releases" },
  { date: "Recent", title: "Join the Discussion", desc: "Visit our GitHub Discussions to connect with the community and share your projects.", url: "https://github.com/orgs/Far-Beyond-Pulsar/discussions" },
  { date: "Ongoing", title: "Contributing to Pulsar", desc: "We welcome contributions! Check out our repositories and open issues.", url: "https://github.com/Far-Beyond-Pulsar" },
];

function formatAnnouncementDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function CommunityNews() {
  const [stats, setStats] = useState({ stars: '0', forks: '0', contributors: '0', projects: '0' });
  const [release, setRelease] = useState(null);
  const [announcements, setAnnouncements] = useState(fallbackNews);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const { fetchAnnouncementsFromRSS } = await import('@/lib/github');
        console.log('Loading community news data...');
        
        const [repoStats, latestRelease, announcementsData] = await Promise.all([
          fetchRepoStats(),
          fetchLatestRelease(),
          fetchAnnouncementsFromRSS(3) // Get announcements from dedicated category feed
        ]);

        if (repoStats) {
          setStats({
            stars: repoStats.stars,
            forks: repoStats.forks,
            contributors: Math.max(10, repoStats.forks * 2), // Estimate
            projects: '15+' // Approximate community projects
          });
        } else {
          // Use fallback values
          setStats({
            stars: 58,
            forks: 6,
            contributors: '10+',
            projects: '15+'
          });
        }

        if (latestRelease) {
          setRelease(latestRelease);
        }

        // Set announcements from dedicated category feed
        console.log('Announcements data:', announcementsData);
        if (announcementsData && announcementsData.length > 0) {
          const recentItems = announcementsData.map(disc => ({
            date: formatAnnouncementDate(disc.updated),
            title: disc.title,
            desc: disc.body,
            url: disc.url,
            author: disc.author
          }));
          setAnnouncements(recentItems);
          console.log('Set announcements:', recentItems);
        }
      } catch (error) {
        console.error('Error loading GitHub data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const displayRelease = release || { version: 'v0.1.47', name: 'Release v0.1.47' };
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Community Updates & News</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-black border border-[#0ea5e9]/50 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">🚧</div>
            <div>
              <div className="text-sm text-[#0ea5e9] font-semibold">LATEST DEV BUILD</div>
              <h3 className="text-2xl font-bold">{loading ? 'Loading...' : displayRelease.version}</h3>
            </div>
          </div>
          <p className="text-slate-300 mb-2">
            {loading ? 'Fetching release information...' : displayRelease.name || 'Latest development build. Check out the release notes for details.'}
          </p>
          <p className="text-xs text-yellow-400 mb-4">⚠️ Alpha version - expect breaking changes</p>
          <div className="flex gap-3">
            <a href={release?.htmlUrl || "https://github.com/Far-Beyond-Pulsar/Pulsar-Native/releases"} target="_blank" rel="noopener" className="px-4 py-2 rounded-lg bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold text-sm transition">
              Release Notes
            </a>
            <a href="/docs/installation" className="px-4 py-2 rounded-lg border border-white/20 hover:border-[#0ea5e9]/50 text-white font-semibold text-sm transition">
              Install Now
            </a>
          </div>
        </div>

        <div className="bg-black border border-[#6366f1]/50 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">🌟</div>
            <div>
              <div className="text-sm text-[#6366f1] font-semibold">COMMUNITY</div>
              <h3 className="text-2xl font-bold">Join the Movement</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-3xl font-bold text-[#6366f1]">
                {loading ? '...' : `${formatNumber(stats.stars)}+`}
              </div>
              <div className="text-sm text-slate-400">GitHub Stars</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#6366f1]">
                {loading ? '...' : `${formatNumber(stats.forks)}+`}
              </div>
              <div className="text-sm text-slate-400">Forks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#6366f1]">
                {loading ? '...' : typeof stats.contributors === 'number' ? `${formatNumber(stats.contributors)}+` : stats.contributors}
              </div>
              <div className="text-sm text-slate-400">Contributors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#6366f1]">{stats.projects}</div>
              <div className="text-sm text-slate-400">Community Projects</div>
            </div>
          </div>
          <a href="https://github.com/Far-Beyond-Pulsar" target="_blank" rel="noopener" className="block w-full px-4 py-2 rounded-lg bg-[#6366f1] hover:bg-[#4338ca] text-white font-semibold text-sm text-center transition">
            View on GitHub
          </a>
        </div>

        <div className="md:col-span-2 bg-black border border-white/10 rounded-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Recent Announcements</h3>
            <a href="https://github.com/orgs/Far-Beyond-Pulsar/discussions/categories/announcements" target="_blank" rel="noopener" className="text-sm text-[#0ea5e9] hover:text-[#0284c7]">
              View All →
            </a>
          </div>
          {loading && <div className="text-slate-400 text-sm mb-4">Loading announcements...</div>}
          <div className="space-y-4">
            {announcements.map((item, i) => (
              <div key={i} className={`flex gap-4 ${i < announcements.length - 1 ? "pb-4 border-b border-white/10" : ""}`}>
                <div className="text-sm text-slate-400 min-w-[100px]">{item.date}</div>
                <div className="flex-1">
                  <a href={item.url} target="_blank" rel="noopener" className="font-semibold mb-1 hover:text-[#0ea5e9] transition block">{item.title}</a>
                  <p className="text-sm text-slate-400 mb-1">{item.desc}</p>
                  {item.author && <p className="text-xs text-slate-500">By {item.author}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
