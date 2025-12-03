'use client';

import { useState, useEffect } from 'react';

export default function WIPBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has seen the banner before
    const hasSeenBanner = localStorage.getItem('pulsar-wip-banner-seen');
    
    if (!hasSeenBanner) {
      setShowBanner(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('pulsar-wip-banner-seen', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500/50 rounded-xl max-w-2xl w-full p-8 shadow-2xl">
        <div className="flex items-start gap-4 mb-6">
          <div className="text-5xl">🚧</div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2 text-yellow-400">Website Under Construction</h2>
            <p className="text-lg text-slate-300">
              This website is a work in progress, just like the Pulsar Engine itself!
            </p>
          </div>
        </div>

        <div className="bg-black/50 border border-white/10 rounded-lg p-4 mb-6 space-y-2">
          <div className="flex items-start gap-3">
            <span className="text-yellow-400 font-bold">⚠️</span>
            <p className="text-sm text-slate-300">
              <strong>Pulsar is in early alpha development.</strong> Not recommended for production game development.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">ℹ️</span>
            <p className="text-sm text-slate-300">
              <strong>Only Windows is currently stable.</strong> Other platforms are experimental or planned.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-400 font-bold">🤝</span>
            <p className="text-sm text-slate-300">
              <strong>We welcome contributors!</strong> Join us in building the future of game engines.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleDismiss}
            className="flex-1 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition"
          >
            I Understand
          </button>
          <a
            href="https://github.com/orgs/Far-Beyond-Pulsar/discussions"
            target="_blank"
            rel="noopener"
            className="px-6 py-3 border border-white/20 hover:border-[#0ea5e9] hover:bg-[#0ea5e9]/10 text-white font-semibold rounded-lg transition text-center"
          >
            Join Discussion
          </a>
        </div>

        <p className="text-xs text-slate-500 text-center mt-4">
          This message will only show once
        </p>
      </div>
    </div>
  );
}
