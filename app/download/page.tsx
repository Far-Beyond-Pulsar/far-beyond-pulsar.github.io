"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Download,
  ChevronDown,
  Copy,
  Check,
  RefreshCw,
  ExternalLink,
} from "lucide-react";

export const dynamic = "force-static";

type Platform = "macos" | "windows" | "linux";
type Arch = "x86_64" | "arm64";

interface Asset {
  name: string;
  browserDownloadUrl: string;
  size: number;
}

interface ReleaseData {
  tagName: string;
  name: string;
  publishedAt: string;
  body: string;
  assets: Asset[];
}

interface ParsedAsset {
  name: string;
  bin: string;
  platform: Platform;
  arch: Arch;
  isBundle: boolean;
  url: string;
  size: number;
  sigUrl: string | null;
}

const CACHE_KEY = "pulsar-release-cache";
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

const PLATFORM_INFO: Record<Platform, { label: string }> = {
  macos: { label: "macOS" },
  windows: { label: "Windows" },
  linux: { label: "Linux" },
};

const BIN_LABELS: Record<string, string> = {
  "pulsar-relay": "Pulsar Relay",
  pulsar_engine: "Pulsar Engine",
};

const BIN_DESCRIPTIONS: Record<string, string> = {
  "pulsar-relay": "Lightweight relay service for Pulsar Native",
  pulsar_engine: "Full game engine with editor and runtime",
};

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function parseAssetName(
  name: string
): { bin: string; platform: Platform; arch: Arch; isBundle: boolean } | null {
  let n = name;
  let isBundle = false;
  if (n.endsWith(".app.zip")) {
    n = n.slice(0, -8);
    isBundle = true;
  } else if (n.endsWith(".exe")) {
    n = n.slice(0, -4);
  }
  const parts = n.split("-");
  if (parts.length < 3) return null;
  const archStr = parts[parts.length - 1];
  const platformStr = parts[parts.length - 2];
  if (!["x86_64", "arm64"].includes(archStr)) return null;
  if (!["macos", "windows", "linux"].includes(platformStr)) return null;
  const bin = parts.slice(0, -2).join("-");
  if (bin !== "pulsar-relay" && bin !== "pulsar_engine") return null;
  return {
    bin,
    platform: platformStr as Platform,
    arch: archStr as Arch,
    isBundle,
  };
}

function groupAssets(assets: Asset[]) {
  const parsed: ParsedAsset[] = [];
  const sigCandidates: Record<string, string> = {};

  for (const a of assets) {
    if (a.name.endsWith(".sig")) {
      sigCandidates[a.name.slice(0, -4)] = a.browserDownloadUrl;
    }
  }

  for (const a of assets) {
    if (a.name.endsWith(".sig")) continue;
    const p = parseAssetName(a.name);
    if (!p) continue;
    parsed.push({
      name: a.name,
      ...p,
      url: a.browserDownloadUrl,
      size: a.size,
      sigUrl: sigCandidates[a.name] ?? null,
    });
  }

  return parsed;
}

function detectPlatform() {
  if (typeof window === "undefined") return { platform: "macos" as Platform, arch: "arm64" as Arch };
  const ua = navigator.userAgent;
  if (/mac/i.test(ua)) return { platform: "macos" as Platform, arch: "arm64" as Arch };
  if (/win/i.test(ua))
    return {
      platform: "windows" as Platform,
      arch: (/arm64|aarch64/i.test(ua) ? "arm64" : "x86_64") as Arch,
    };
  return { platform: "linux" as Platform, arch: "x86_64" as Arch };
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 814 1000" className="w-full h-full" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-194.3 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
    </svg>
  );
}

function PlatformLogo({ platform }: { platform: Platform }) {
  if (platform === "macos")
    return (
      <div className="w-8 h-8">
        <AppleIcon />
      </div>
    );
  return (
    <Image
      src={platform === "windows" ? "/logos/windows.png" : "/logos/linux.png"}
      alt={PLATFORM_INFO[platform].label}
      width={32}
      height={32}
      className="object-contain w-8 h-8 opacity-90"
    />
  );
}

function DownloadPage() {
  const [releaseData, setReleaseData] = useState<ReleaseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cacheInfo, setCacheInfo] = useState<string | null>(null);
  const [detected, setDetected] = useState({ platform: "macos" as Platform, arch: "arm64" as Arch });
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("macos");
  const [selectedArch, setSelectedArch] = useState<Arch>("arm64");
  const [selectedBin, setSelectedBin] = useState("pulsar_engine");
  const [copied, setCopied] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const d = detectPlatform();
    setDetected(d);
    setSelectedPlatform(d.platform);
    setSelectedArch(d.arch);
  }, []);

  const fetchRelease = useCallback(async (forceRefresh = false) => {
    if (!forceRefresh) {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_TTL) {
            setReleaseData(data);
            setCacheInfo(`Cached ${Math.round((Date.now() - timestamp) / 60000)}m ago`);
            setLoading(false);
            return;
          }
        }
      } catch {}
    }

    try {
      const res = await fetch(
        "https://api.github.com/repos/Far-Beyond-Pulsar/Pulsar-Native/releases/latest",
        {
          headers: { Accept: "application/vnd.github.v3+json" },
        }
      );
      if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
      const json = await res.json();
      const data: ReleaseData = {
        tagName: json.tag_name,
        name: json.name,
        publishedAt: json.published_at,
        body: json.body,
        assets: json.assets.map((a: any) => ({
          name: a.name,
          browserDownloadUrl: a.browser_download_url,
          size: a.size,
        })),
      };
      setReleaseData(data);
      setCacheInfo("Fetched just now");
      setError(null);
      try {
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data, timestamp: Date.now() })
        );
      } catch {}
    } catch (e: any) {
      setError(e.message ?? "Failed to load release data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRelease();
  }, [fetchRelease]);

  const handleRefresh = async () => {
    setRefreshing(true);
    setLoading(true);
    await fetchRelease(true);
    setRefreshing(false);
  };

  const parsedAssets = useMemo(() => {
    if (!releaseData) return [] as ParsedAsset[];
    return groupAssets(releaseData.assets);
  }, [releaseData]);

  const currentVariants = useMemo(() => {
    if (!parsedAssets.length) return [] as ParsedAsset[];
    const key = `${selectedPlatform}-${selectedArch}`;
    return parsedAssets
      .filter((a) => a.bin === selectedBin && `${a.platform}-${a.arch}` === key)
      .sort((a, b) => (a.isBundle ? 1 : -1));
  }, [parsedAssets, selectedPlatform, selectedArch, selectedBin]);

  const currentAsset = currentVariants[0] ?? null;

  const availablePlatforms = useMemo(() => {
    if (!parsedAssets.length) return [] as Platform[];
    const seen = new Set<Platform>();
    for (const a of parsedAssets) {
      if (a.bin === selectedBin) seen.add(a.platform);
    }
    return Array.from(seen);
  }, [parsedAssets, selectedBin]);

  const availableArches = useMemo(() => {
    if (!parsedAssets.length) return [] as Arch[];
    const seen = new Set<Arch>();
    for (const a of parsedAssets) {
      if (a.bin === selectedBin && a.platform === selectedPlatform)
        seen.add(a.arch);
    }
    return Array.from(seen);
  }, [parsedAssets, selectedPlatform, selectedBin]);

  const availableBins = useMemo(() => {
    if (!parsedAssets.length) return [] as string[];
    const bins = new Set<string>();
    for (const a of parsedAssets) {
      if (a.bin === "pulsar_engine" || a.bin === "pulsar-relay")
        bins.add(a.bin);
    }
    return Array.from(bins);
  }, [parsedAssets]);

  const downloadUrl = currentAsset?.url ?? null;

  const sha256 = useMemo(() => {
    if (!releaseData || !currentAsset) return null;
    const escaped = currentAsset.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(
      `${escaped}\\s*\\nsha256:([a-f0-9]{64})`,
      "i"
    );
    const match = releaseData.body.match(re);
    return match ? match[1] : null;
  }, [releaseData, currentAsset]);

  const handleCopySha = async () => {
    if (!sha256) return;
    try {
      await navigator.clipboard.writeText(sha256);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handleDownload = () => {
    if (!downloadUrl) return;
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = currentAsset!.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const pageKey = `${selectedPlatform}-${selectedArch}-${selectedBin}`;
  const isAutoDetected =
    selectedPlatform === detected.platform && selectedArch === detected.arch;

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 px-5">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-center">
          <p className="text-sm text-amber-300/80 font-medium">
            Pulsar is in early development &mdash; not yet ready for production game development.
          </p>
        </div>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-center mb-5">
            <div className="relative w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-center overflow-hidden">
              <Image
                src="/logos/pulsar.png"
                alt="Pulsar"
                width={36}
                height={36}
                className="opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/10 to-transparent" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Download Pulsar
          </h1>
          <p className="text-white/45 text-base">
            {loading
              ? "Fetching the latest release..."
              : releaseData
                ? `Latest: ${releaseData.tagName} — ${new Date(releaseData.publishedAt).toLocaleDateString()}`
                : "Select your platform and download"}
          </p>
          {cacheInfo && !loading && (
            <p className="text-xs text-white/20 mt-1.5">{cacheInfo}</p>
          )}
        </motion.div>

        <motion.div
          className="rounded-xl bg-[#0c0c0c] border border-white/[0.07] p-6 mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlatform}
                className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/70 shrink-0"
                initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 10, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <PlatformLogo platform={selectedPlatform} />
              </motion.div>
            </AnimatePresence>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-white font-semibold text-lg">
                  {PLATFORM_INFO[selectedPlatform].label}
                </span>
                <span className="text-white/35 text-sm font-mono">
                  {selectedArch}
                </span>
                <span
                  className={`inline-flex items-center px-2 py-0.5 text-[11px] font-medium rounded-full ${
                    isAutoDetected
                      ? "text-[#0ea5e9] bg-[#0ea5e9]/15"
                      : "text-white/40 bg-white/[0.06]"
                  }`}
                >
                  {isAutoDetected ? "Auto-detected" : "Selected"}
                </span>
              </div>
              <p className="text-white/40 text-sm mt-0.5">
                {BIN_DESCRIPTIONS[selectedBin] ?? ""}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            {(["macos", "windows", "linux"] as Platform[]).map((p) => {
              const isAvail = availablePlatforms.includes(p);
              return (
                <button
                  key={p}
                  onClick={() => {
                    setSelectedPlatform(p);
                    const arches = parsedAssets
                      .filter(
                        (a) => a.bin === selectedBin && a.platform === p
                      )
                      .map((a) => a.arch);
                    const deduped = [...new Set(arches)];
                    if (deduped.length && !deduped.includes(selectedArch)) {
                      setSelectedArch(deduped[0]);
                    }
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedPlatform === p
                      ? "bg-[#0ea5e9] text-white shadow-lg shadow-[#0ea5e9]/20"
                      : isAvail
                        ? "bg-white/[0.04] text-white/50 hover:text-white hover:bg-white/[0.08]"
                        : "bg-white/[0.02] text-white/20 cursor-not-allowed"
                  }`}
                >
                  <PlatformLogo platform={p} />
                  {PLATFORM_INFO[p].label}
                </button>
              );
            })}
          </div>

          {availableArches.length > 1 && (
            <div className="flex gap-2 mt-3">
              {availableArches.map((arch) => (
                <button
                  key={arch}
                  onClick={() => setSelectedArch(arch)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    selectedArch === arch
                      ? "bg-white/10 text-white"
                      : "bg-white/[0.03] text-white/40 hover:text-white/70"
                  }`}
                >
                  {arch}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          className="rounded-xl bg-[#0c0c0c] border border-white/[0.07] p-6 mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-2">
                Binary
              </label>
              <div className="relative">
                <select
                  value={selectedBin}
                  onChange={(e) => setSelectedBin(e.target.value)}
                  className="w-full appearance-none bg-white/[0.04] border border-white/[0.07] rounded-lg px-3.5 py-2.5 pr-10 text-white text-sm focus:outline-none focus:border-[#0ea5e9]/50 focus:ring-1 focus:ring-[#0ea5e9]/20 transition-colors cursor-pointer"
                >
                  {availableBins.map((bin) => {
                    const variant = parsedAssets.find(
                      (a) =>
                        a.bin === bin &&
                        a.platform === selectedPlatform &&
                        a.arch === selectedArch &&
                        !a.isBundle
                    );
                    return (
                      <option key={bin} value={bin} className="bg-[#0c0c0c]">
                        {BIN_LABELS[bin] ?? bin}
                        {variant ? ` (${formatSize(variant.size)})` : ""}
                      </option>
                    );
                  })}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-2">
                Release
              </label>
              <div className="relative">
                <select
                  disabled
                  className="w-full appearance-none bg-white/[0.04] border border-white/[0.07] rounded-lg px-3.5 py-2.5 pr-10 text-white/60 text-sm cursor-not-allowed"
                >
                  {releaseData && (
                    <option className="bg-[#0c0c0c]">
                      {releaseData.tagName}
                    </option>
                  )}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
              </div>
            </div>
          </div>

          {currentAsset?.isBundle && (
            <p className="mt-3 text-xs text-white/40 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]/60" />
              macOS .app bundle &mdash; drag to Applications folder
            </p>
          )}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={pageKey}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {loading ? (
              <div className="rounded-xl bg-[#0c0c0c] border border-white/[0.07] p-8 text-center">
                <div className="w-8 h-8 border-2 border-[#0ea5e9]/30 border-t-[#0ea5e9] rounded-full animate-spin mx-auto" />
                <p className="text-white/40 text-sm mt-3">
                  Fetching release data...
                </p>
              </div>
            ) : error ? (
              <div className="rounded-xl bg-[#0c0c0c] border border-white/[0.07] p-8 text-center">
                <p className="text-red-400/80 text-sm mb-3">{error}</p>
                <button
                  onClick={handleRefresh}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white/70 text-sm rounded-lg transition-colors"
                >
                  <RefreshCw
                    className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`}
                  />
                  Retry
                </button>
              </div>
            ) : !downloadUrl ? (
              <div className="rounded-xl bg-[#0c0c0c] border border-white/[0.07] p-8 text-center">
                <p className="text-white/40 text-sm">
                  No download available for{" "}
                  {PLATFORM_INFO[selectedPlatform].label} ({selectedArch})
                </p>
              </div>
            ) : (
              <button
                onClick={handleDownload}
                className="group relative w-full overflow-hidden rounded-xl bg-[#0ea5e9] hover:bg-[#0284c7] transition-all duration-300"
              >
                <div className="relative px-6 py-5 flex items-center justify-center gap-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    <Download className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="relative text-white font-semibold text-lg">
                    Download {BIN_LABELS[selectedBin] ?? selectedBin}
                  </span>
                  <span className="relative text-white/60 text-sm font-medium">
                    {currentAsset ? formatSize(currentAsset.size) : ""}
                  </span>
                </div>
              </button>
            )}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {sha256 && (
            <motion.div
              className="mt-4 rounded-xl bg-[#0c0c0c] border border-white/[0.07] p-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-white/30 uppercase tracking-wider shrink-0">
                  SHA-256
                </span>
                <code className="flex-1 text-xs font-mono text-white/50 truncate">
                  {sha256}
                </code>
                <button
                  onClick={handleCopySha}
                  className="shrink-0 p-1.5 rounded-md hover:bg-white/[0.06] text-white/40 hover:text-white transition-colors"
                  title="Copy SHA-256"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="mt-6 flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {currentAsset?.sigUrl && (
            <a
              href={currentAsset.sigUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Signature file
            </a>
          )}
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors disabled:opacity-50"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 ${refreshing ? "animate-spin" : ""}`}
            />
            {refreshing ? "Checking..." : "Check for updates"}
          </button>
          <a
            href={`https://github.com/Far-Beyond-Pulsar/Pulsar-Native/releases/tag/${releaseData?.tagName ?? ""}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            GitHub release
          </a>
        </motion.div>

        {releaseData && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <details className="group cursor-pointer">
              <summary className="text-xs text-white/30 hover:text-white/50 transition-colors flex items-center gap-1.5">
                <ChevronDown className="w-3.5 h-3.5 group-open:rotate-180 transition-transform" />
                All assets ({releaseData.assets.length})
              </summary>
              <div className="mt-3 space-y-1">
                {releaseData.assets
                  .filter((a) => !a.name.endsWith(".sig"))
                  .map((asset) => (
                    <a
                      key={asset.name}
                      href={asset.browserDownloadUrl}
                      className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/[0.03] transition-colors group/asset"
                    >
                      <span className="text-xs text-white/40 font-mono group-hover/asset:text-white/60 transition-colors">
                        {asset.name}
                      </span>
                      <span className="text-[11px] text-white/20 font-mono">
                        {formatSize(asset.size)}
                      </span>
                    </a>
                  ))}
              </div>
            </details>
          </motion.div>
        )}
      </div>
    </main>
  );
}

export default DownloadPage;
