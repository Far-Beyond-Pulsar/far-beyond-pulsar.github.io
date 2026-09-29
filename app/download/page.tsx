"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Clipboard, Download, ExternalLink, LoaderCircle, MonitorDown, Pause, Play, RefreshCw } from "lucide-react";

const REPO = "https://api.github.com/repos/Far-Beyond-Pulsar/Pulsar-Hub";
const RELEASES = "https://github.com/Far-Beyond-Pulsar/Pulsar-Hub/releases/latest";
const CACHE_KEY = "pulsar-hub-releases-v2";
const PLATFORM_CACHE_KEY = "pulsar-hub-platform-releases-v1";
const LIVE_WATCH_PAUSED_KEY = "pulsar-hub-live-watch-paused-v1";
const CACHE_TTL = 15 * 60 * 1000;
const ACTIONS_API = `${REPO}/actions`;

type Platform = "windows" | "linux" | "macos";
type Asset = { id: number; name: string; size: number; browser_download_url: string; digest?: string | null };
type Release = { tag_name: string; name: string; published_at: string; html_url: string; assets: Asset[] };
type Arch = "x86_64" | "arm64";
type LiveBuild = { platform: Platform; arch: Arch; status: "queued" | "in_progress"; runUrl: string; headSha: string };

const PLATFORM_LABEL: Record<Platform, string> = { windows: "Windows", linux: "Linux", macos: "macOS" };
const ARCH_LABEL: Record<Arch, string> = { x86_64: "x86_64", arm64: "ARM64" };

function detectPlatform(): Platform {
  if (/win/i.test(navigator.userAgent)) return "windows";
  if (/mac/i.test(navigator.userAgent)) return "macos";
  return "linux";
}

function detectArch(): Arch {
  return /arm64|aarch64/i.test(navigator.userAgent) ? "arm64" : "x86_64";
}

function formatSize(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(bytes > 100 * 1024 * 1024 ? 0 : 1)} MB`;
}

function checksum(asset: Asset) {
  return asset.digest?.replace(/^sha256:/i, "") ?? null;
}

function assetArch(name: string): Arch | null {
  if (/arm64|aarch64/i.test(name)) return "arm64";
  if (/x86_64|amd64|x64/i.test(name)) return "x86_64";
  return null;
}

function platformForAsset(name: string): Platform | null {
  if (/\.dmg$/i.test(name) || /pulsar\.hub/i.test(name)) return "macos";
  if (/windows/i.test(name) || /\.exe$/i.test(name)) return "windows";
  if (/linux/i.test(name) || /\.(appimage|deb)$/i.test(name)) return "linux";
  return null;
}

function kind(asset: Asset): "setup" | "standalone" | "appimage" | "deb" | "dmg" | null {
  const n = asset.name.toLowerCase();
  if (n.endsWith(".sha256")) return null;
  if (n.includes("setup.exe")) return "setup";
  if (n.endsWith(".appimage")) return "appimage";
  if (n.endsWith(".deb")) return "deb";
  if (n.endsWith(".dmg")) return "dmg";
  if (n.includes("pulsar-installer-windows-") || n.includes("pulsar-installer-linux-")) return "standalone";
  return null;
}

function mergePlatformReleases(releaseList: Release[]): Release[] {
  const byTag = new Map(releaseList.map((release) => [release.tag_name, release]));
  try {
    const cached = JSON.parse(localStorage.getItem(PLATFORM_CACHE_KEY) ?? "{}") as Partial<Record<Platform, Release>>;
    for (const platform of ["windows", "linux", "macos"] as const) {
      const latest = releaseList.find((release) => release.assets.some((asset) => kind(asset) && platformForAsset(asset.name) === platform));
      const previous = cached[platform];
      const selected = latest && previous
        ? Date.parse(latest.published_at) >= Date.parse(previous.published_at) ? latest : previous
        : latest ?? previous;
      if (selected) byTag.set(selected.tag_name, selected);
      if (selected) cached[platform] = selected;
    }
    localStorage.setItem(PLATFORM_CACHE_KEY, JSON.stringify(cached));
  } catch {}
  return Array.from(byTag.values()).sort((a, b) => Date.parse(b.published_at) - Date.parse(a.published_at));
}

function kindLabel(value: ReturnType<typeof kind>) {
  if (value === "setup") return "Setup executable";
  if (value === "standalone") return "Standalone";
  if (value === "appimage") return "AppImage · standalone";
  if (value === "deb") return "Debian package";
  return "Disk image";
}

function DownloadOption({ asset, title, description }: { asset: Asset; title: string; description: string }) {
  const [copied, setCopied] = useState(false);
  const hash = checksum(asset);
  const copyHash = async () => {
    if (!hash) return;
    await navigator.clipboard.writeText(hash);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <article className="group rounded-xl border border-white/[0.09] bg-[#101010] p-4 transition-colors hover:border-[#0ea5e9]/35 hover:bg-[#111] sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-1.5 flex items-center gap-2">
            <h3 className="font-medium text-white">{title}</h3>
            <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/40">{kindLabel(kind(asset))}</span>
          </div>
          <p className="text-sm text-white/45">{description}</p>
          <p className="mt-2 break-all font-mono text-[11px] text-white/25">{asset.name} <span className="px-1 text-white/15">·</span> {formatSize(asset.size)}</p>
        </div>
        <a href={asset.browser_download_url} className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#0ea5e9] px-3.5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0284c7]" download>
          <Download className="h-4 w-4" /> Download
        </a>
      </div>
      <div className="mt-4 border-t border-white/[0.07] pt-3">
        <div className="mb-1 text-[10px] font-semibold uppercase tracking-[.16em] text-white/35">SHA-256</div>
        {hash ? (
          <div className="flex items-center gap-2">
            <code className="min-w-0 flex-1 break-all font-mono text-[11px] leading-relaxed text-white/55">{hash}</code>
            <button onClick={copyHash} aria-label="Copy SHA-256" title="Copy SHA-256" className="shrink-0 rounded-md p-2 text-white/45 transition-colors hover:bg-white/10 hover:text-white">
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Clipboard className="h-4 w-4" />}
            </button>
          </div>
        ) : (
          <p className="text-xs text-white/35">Checksum is not published for this file.</p>
        )}
      </div>
    </article>
  );
}

export default function DownloadPage() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [platform, setPlatform] = useState<Platform | null>(null);
  const [detectedPlatform, setDetectedPlatform] = useState<Platform | null>(null);
  const [arch, setArch] = useState<Arch | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [liveBuilds, setLiveBuilds] = useState<LiveBuild[]>([]);
  const [watchPaused, setWatchPaused] = useState(false);
  const [watchReady, setWatchReady] = useState(false);
  const hadActiveBuilds = useRef(false);

  useEffect(() => {
    const detected = detectPlatform();
    setDetectedPlatform(detected);
    setPlatform(detected);
    setArch(detectArch());
  }, []);

  const loadRelease = async (forceRefresh = false) => {
    setLoading(true);
    setError(null);
    if (!forceRefresh) {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Array.isArray(data) && typeof timestamp === "number" && Date.now() - timestamp < CACHE_TTL) {
            setReleases(mergePlatformReleases(data));
            setLoading(false);
            return;
          }
        }
      } catch {
        try { localStorage.removeItem(CACHE_KEY); } catch {}
      }
    }
    try {
      const response = await fetch(`${REPO}/releases?per_page=20`, { headers: { Accept: "application/vnd.github+json" }, cache: "no-store" });
      if (!response.ok) throw new Error(`GitHub returned ${response.status}.`);
      const data: Release[] = await response.json();
      setReleases(mergePlatformReleases(data));
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
      } catch {}
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Could not load the latest release.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadRelease(); }, []);

  useEffect(() => {
    try {
      setWatchPaused(localStorage.getItem(LIVE_WATCH_PAUSED_KEY) === "true");
    } catch {}
    setWatchReady(true);
  }, []);

  useEffect(() => {
    if (!watchReady || watchPaused) return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    const poll = async () => {
      try {
        const runsResponse = await fetch(`${ACTIONS_API}/workflows/release.yml/runs?per_page=5`, { headers: { Accept: "application/vnd.github+json" }, cache: "no-store" });
        if (!runsResponse.ok) throw new Error("Could not read release workflow status");
        const runsData = await runsResponse.json();
        const run = (runsData.workflow_runs ?? []).find((item: any) => item.status === "in_progress");
        if (!run) {
          if (!cancelled) {
            setLiveBuilds([]);
            if (hadActiveBuilds.current) {
              hadActiveBuilds.current = false;
              void loadRelease(true);
            }
          }
        } else {
          hadActiveBuilds.current = true;
          const jobsResponse = await fetch(`${ACTIONS_API}/runs/${run.id}/jobs?per_page=100`, { headers: { Accept: "application/vnd.github+json" }, cache: "no-store" });
          if (!jobsResponse.ok) throw new Error("Could not read release job status");
          const jobsData = await jobsResponse.json();
          const jobs: LiveBuild[] = (jobsData.jobs ?? []).flatMap((job: any) => {
            const match = /^Package (Linux|Windows|macOS) (x86_64|ARM64)$/i.exec(job.name);
            if (!match || !["queued", "in_progress"].includes(job.status)) return [];
            const label = match[1].toLowerCase();
            const platform: Platform = label === "macos" ? "macos" : label as Platform;
            return [{ platform, arch: match[2].toLowerCase() === "arm64" ? "arm64" : "x86_64", status: job.status, runUrl: run.html_url, headSha: run.head_sha }];
          });
          if (!cancelled) setLiveBuilds(jobs);
        }
      } catch {
        if (!cancelled) setLiveBuilds([]);
      } finally {
        if (!cancelled) timer = setTimeout(poll, 60_000);
      }
    };
    poll();
    return () => { cancelled = true; clearTimeout(timer); };
  }, [watchPaused, watchReady]);

  const toggleLiveWatch = () => {
    const nextPaused = !watchPaused;
    setWatchPaused(nextPaused);
    try { localStorage.setItem(LIVE_WATCH_PAUSED_KEY, String(nextPaused)); } catch {}
  };

  const platforms = Array.from(new Set(releases.flatMap((release) => release.assets
    .filter((asset) => kind(asset))
    .map((asset) => platformForAsset(asset.name))
    .filter((item): item is Platform => item !== null))));
  const currentPlatform = platform && platforms.includes(platform) ? platform : platforms[0] ?? "windows";
  const platformReleases = releases.filter((release) => release.assets.some((asset) => kind(asset) && platformForAsset(asset.name) === currentPlatform));
  const architectures = Array.from(new Set(platformReleases.flatMap((release) => release.assets
    .filter((asset) => kind(asset) && platformForAsset(asset.name) === currentPlatform)
    .map((asset) => assetArch(asset.name))
    .filter((item): item is Arch => item !== null))));
  const currentArch = arch && architectures.includes(arch) ? arch : architectures[0] ?? "x86_64";
  const release = platformReleases.find((candidate) => candidate.assets.some((asset) => kind(asset) && platformForAsset(asset.name) === currentPlatform && assetArch(asset.name) === currentArch)) ?? platformReleases[0] ?? null;
  const selected = (release?.assets ?? []).flatMap((asset) => {
    const fileKind = kind(asset);
    const assetPlatform = platformForAsset(asset.name);
    const assetArchitecture = assetArch(asset.name);
    return fileKind && assetPlatform === currentPlatform && assetArchitecture === currentArch ? [{ asset, fileKind }] : [];
  });
  const orderedKinds: Array<"setup" | "standalone" | "appimage" | "deb" | "dmg"> = currentPlatform === "windows" ? ["setup", "standalone"] : currentPlatform === "macos" ? ["dmg"] : ["appimage", "deb", "standalone"];

  return (
    <main className="min-h-screen bg-black px-5 pb-20 pt-24 text-white sm:pt-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-7 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[.18em] text-[#38bdf8]/70"><span className="h-px w-8 bg-[#0ea5e9]/60" /> Pulsar Hub <span className="text-white/20">/</span> Downloads</div>
        <div className="grid gap-8 md:grid-cols-[1fr_300px] md:items-end">
          <div>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Get Pulsar Hub</h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/55 sm:text-lg">Install and manage the Pulsar engine, projects, and updates from one place.</p>
          </div>
          <div className="rounded-xl border border-[#0ea5e9]/20 bg-[#0ea5e9]/[0.06] p-4 text-sm leading-6 text-white/55">
            <div className="mb-1 flex items-center gap-2 text-[#7dd3fc]"><MonitorDown className="h-4 w-4" /> Detected system</div>
            {detectedPlatform ? <span className="text-white">{PLATFORM_LABEL[detectedPlatform]} · {ARCH_LABEL[currentArch]}</span> : <span>Detecting your system…</span>}
            <span className="text-white/40"> — you can change this below.</span>
          </div>
        </div>

        <section className="mt-10 rounded-2xl border border-white/[0.09] bg-[#0c0c0c] p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
            <div>
              <h2 className="text-lg font-medium">Choose your download</h2>
              <p className="mt-1 text-sm text-white/40">Latest Pulsar Hub release</p>
            </div>
            <div className="flex items-center gap-2">
              {release && <span className="rounded-full border border-[#0ea5e9]/25 bg-[#0ea5e9]/[0.08] px-3 py-1 font-mono text-xs text-[#7dd3fc]">{release.tag_name}</span>}
              <button onClick={toggleLiveWatch} disabled={!watchReady} aria-label={watchPaused ? "Resume live release watch" : "Pause live release watch"} title={watchPaused ? "Resume live watch" : "Pause live watch"} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-2 text-xs text-white/45 transition-colors hover:border-[#0ea5e9]/35 hover:text-white disabled:opacity-40">{watchPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}<span className="hidden sm:inline">{watchPaused ? "Resume watch" : "Pause watch"}</span></button>
              <button onClick={() => loadRelease(true)} disabled={loading} aria-label="Force refresh release data" title="Force refresh" className="rounded-lg border border-white/10 p-2 text-white/45 transition-colors hover:border-[#0ea5e9]/35 hover:text-white disabled:opacity-40"><RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} /></button>
            </div>
          </div>

          {loading ? <div className="flex min-h-44 items-center justify-center gap-3 text-sm text-white/45"><LoaderCircle className="h-4 w-4 animate-spin" /> Loading the latest release…</div> : error ? (
            <div className="py-8 text-center"><p className="text-sm text-rose-200">{error}</p><button onClick={() => loadRelease()} className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-white/70 hover:bg-white/5"><RefreshCw className="h-4 w-4" /> Try again</button></div>
          ) : (
            <>
              <div className="flex flex-wrap gap-2 py-5">
                {platforms.map((item) => <button key={item} onClick={() => setPlatform(item)} className={`rounded-lg px-4 py-2 text-sm transition-colors ${currentPlatform === item ? "bg-white text-black" : "border border-white/10 text-white/55 hover:text-white"}`}>{PLATFORM_LABEL[item]}{item === detectedPlatform ? " · detected" : ""}</button>)}
                <span className="mx-1 hidden w-px self-stretch bg-white/10 sm:block" />
                {architectures.map((item) => <button key={item} onClick={() => setArch(item)} className={`rounded-lg border px-3 py-2 font-mono text-xs transition-colors ${currentArch === item ? "border-[#0ea5e9]/40 bg-[#0ea5e9]/10 text-[#bae6fd]" : "border-white/10 text-white/45 hover:text-white"}`}>{ARCH_LABEL[item]}</button>)}
              </div>
              {liveBuilds.some((build) => build.platform === currentPlatform) && <div className="mb-4 overflow-hidden rounded-xl border border-dashed border-[#0ea5e9]/30 bg-[#0ea5e9]/[0.035] p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div><div className="font-mono text-[10px] uppercase tracking-[.16em] text-[#7dd3fc]/70">{watchPaused ? "Live watch paused · last status" : "New build in progress"}</div><p className="mt-1 text-xs text-white/40">Showing the latest published {PLATFORM_LABEL[currentPlatform]} build below until this release is ready.</p></div>
                  <span className={`h-2 w-2 shrink-0 rounded-full bg-[#38bdf8] ${watchPaused ? "opacity-35" : "animate-pulse"}`} />
                </div>
                <div className="grid gap-2 sm:grid-cols-2">{liveBuilds.filter((build) => build.platform === currentPlatform).map((build) => <a key={`${build.platform}-${build.arch}`} href={build.runUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2.5 hover:bg-white/[0.05]"><span className="h-7 w-7 animate-pulse rounded-md bg-white/[0.08]" /><span className="min-w-0 flex-1"><span className="block text-sm text-white/70">{ARCH_LABEL[build.arch]} build</span><span className="block font-mono text-[10px] text-white/30">{build.status === "queued" ? "Queued" : "Building"} · {build.headSha.slice(0, 7)}</span></span><LoaderCircle className="h-4 w-4 animate-spin text-[#38bdf8]/60" /></a>)}</div>
              </div>}
              <div className="space-y-3">
                {orderedKinds.map((fileKind) => selected.filter((item) => item.fileKind === fileKind).map(({ asset }) => {
                  const labels: Record<string, [string, string]> = {
                    setup: ["Install Pulsar Hub", "Recommended · guided setup and shortcuts"],
                    standalone: ["Standalone executable", "Run directly without a setup wizard"],
                    appimage: ["Pulsar Hub AppImage", "Portable Linux app · no package installation required"],
                    deb: ["Pulsar Hub for Debian / Ubuntu", "Install using your system package manager"],
                    dmg: ["Pulsar Hub for macOS", "Open the disk image and drag Pulsar Hub into Applications"],
                  };
                  const [title, description] = labels[fileKind];
                  return <DownloadOption key={asset.id} asset={asset} title={title} description={description} />;
                }))}
                {!selected.length && <p className="rounded-xl border border-white/10 p-5 text-sm text-white/45">No downloads are available for this system yet. Check the GitHub release for all published files.</p>}
              </div>
              {release && <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/35"><span>Released {new Date(release.published_at).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</span><button onClick={() => setShowAll(!showAll)} className="inline-flex items-center gap-1.5 hover:text-white/65"><ChevronDown className={`h-3.5 w-3.5 transition-transform ${showAll ? "rotate-180" : ""}`} /> All release files</button></div>}
              {showAll && <div className="mt-3 space-y-1 rounded-xl border border-white/[0.07] bg-black/20 p-3">{release?.assets.filter((a) => !a.name.endsWith(".sha256")).map((asset) => <a key={asset.id} href={asset.browser_download_url} className="flex items-center justify-between gap-3 rounded-md px-2 py-2 text-xs text-white/55 hover:bg-white/5 hover:text-white"><span className="break-all font-mono">{asset.name}</span><span className="shrink-0">{formatSize(asset.size)} <Download className="ml-1 inline h-3 w-3" /></span></a>)}</div>}
            </>
          )}
        </section>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/35">
          <a href={RELEASES} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white/70">View releases on GitHub <ExternalLink className="h-3 w-3" /></a>
          <span>SHA-256 hashes are provided by GitHub for each release asset.</span>
        </div>
        <p className="mt-8 text-center text-xs leading-5 text-white/25">Pulsar is in early development and is not yet recommended for production game development.</p>
      </div>
    </main>
  );
}
