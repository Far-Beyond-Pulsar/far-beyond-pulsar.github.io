"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Wifi,
  Users,
  Shield,
  Server,
  Cloud,
  Building2,
  Check,
  Github,
  ArrowRight,
  Globe,
  Lock,
  GitBranch,
  HardDrive,
  Radio,
} from "lucide-react";
import { StudioHero } from "@/components/studio/StudioHero";

export const dynamic = "force-static";

function PricingSlider({
  label,
  icon: Icon,
  value,
  setValue,
  unit,
  min,
  max,
  step = 1,
  majorEvery = 5,
}) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(String(value));

  const commit = (raw) => {
    const n = parseInt(raw, 10);
    if (!isNaN(n) && n >= min && n <= max) setValue(n);
    setEditing(false);
  };

  const handleChange = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    setText(raw);
    const n = parseInt(raw, 10);
    if (!isNaN(n) && n >= min && n <= max) setValue(n);
  };

  const current = editing ? text : String(value);

  const steps = Math.round((max - min) / step);
  const pct = ((value - min) / (max - min)) * 100;

  // Determine tick spacing: major ticks at majorEvery, minor ticks at majorEvery/5
  const minorEvery =
    majorEvery > 0 && steps > 0
      ? Math.max(step, Math.round(majorEvery / 5 / step) * step)
      : step;
  const ticks = [];
  for (let i = 0; i <= steps; i++) {
    const val = min + i * step;
    const isMajor = majorEvery > 0 && val % majorEvery === 0;
    const isMinor = !isMajor && majorEvery > 0 && val % minorEvery === 0;
    if (!isMajor && !isMinor && majorEvery > 0) continue;
    ticks.push(
      <div
        key={i}
        className="absolute"
        style={{
          left: `${(i / steps) * 100}%`,
          top: "50%",
          transform: "translateY(-50%)",
          width: "1px",
          height: isMajor ? "16px" : "8px",
          background:
            i * step + min <= value
              ? "rgba(14,165,233,0.5)"
              : "rgba(255,255,255,0.08)",
          transition: "background 0.15s",
        }}
      />,
    );
  }

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <span className="flex items-center gap-1.5 text-white/60">
          <Icon className="w-3.5 h-3.5 text-[#0ea5e9]" />
          {label}
        </span>
        {editing ? (
          <input
            autoFocus
            value={current}
            onChange={handleChange}
            onBlur={() => commit(current)}
            onKeyDown={(e) => {
              if (e.key === "Enter") commit(current);
              if (e.key === "Escape") setEditing(false);
            }}
            className="w-20 text-right font-mono text-sm text-white bg-black border border-white/[0.15] rounded-lg px-2 py-0.5 focus:outline-none focus:border-[#0ea5e9]"
          />
        ) : (
          <button
            onClick={() => {
              setText(String(value));
              setEditing(true);
            }}
            className="font-mono text-sm text-white/80 hover:text-white transition-colors cursor-text"
          >
            {value}
            {unit}
          </button>
        )}
      </div>
      <div className="relative h-5">
        <div className="absolute inset-0 flex items-center pointer-events-none">
          {ticks}
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => {
            setValue(Number(e.target.value));
            setText(e.target.value);
          }}
          className="relative w-full h-full appearance-none bg-transparent cursor-pointer z-10
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-[#0ea5e9]
            [&::-webkit-slider-thumb]:shadow-lg
            [&::-webkit-slider-thumb]:shadow-[#0ea5e9]/30
            [&::-webkit-slider-thumb]:hover:scale-110
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-track]:appearance-none
            [&::-webkit-slider-track]:bg-transparent
            [&::-moz-range-track]:appearance-none
            [&::-moz-range-track]:bg-transparent"
        />
      </div>
    </div>
  );
}

function CalculatorToggle() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PricingCalculator open={open} onClose={() => setOpen(false)} />
      <button
        onClick={() => setOpen(true)}
        className="block w-full text-center text-sm font-medium py-2.5 rounded-xl bg-[#0ea5e9] hover:bg-[#0284c7] text-white transition-colors mb-2"
      >
        Estimate your bill
      </button>
    </>
  );
}

function tiered(amount, tiers) {
  let total = 0;
  let remaining = amount;
  for (const { cap, rate } of tiers) {
    const qty = cap === Infinity ? remaining : Math.min(remaining, cap);
    total += qty * rate;
    remaining -= qty;
    if (remaining <= 0) break;
  }
  return total;
}

function PricingCalculator({ open, onClose }) {
  const [storage, setStorage] = useState(50);
  const [bandwidth, setBandwidth] = useState(100);
  const [seats, setSeats] = useState(5);

  const storagePrice = tiered(storage, [
    { cap: 100, rate: 0.1 },
    { cap: 400, rate: 0.08 },
    { cap: Infinity, rate: 0.06 },
  ]);
  const bandwidthPrice = tiered(bandwidth, [
    { cap: 200, rate: 0.05 },
    { cap: 800, rate: 0.04 },
    { cap: Infinity, rate: 0.03 },
  ]);
  const seatsPrice = tiered(seats, [
    { cap: 10, rate: 15 },
    { cap: 15, rate: 12 },
    { cap: Infinity, rate: 10 },
  ]);
  const total = storagePrice + bandwidthPrice + seatsPrice;

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#0c0c0c] border border-white/[0.08] rounded-2xl shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-sm font-semibold">Estimate your monthly bill</h4>
          <button
            onClick={onClose}
            className="text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <PricingSlider
              label="Team members"
              icon={Users}
              value={seats}
              setValue={setSeats}
              unit=""
              min={1}
              max={50}
              majorEvery={5}
            />
            <PricingSlider
              label="Storage"
              icon={HardDrive}
              value={storage}
              setValue={setStorage}
              unit=" GB"
              min={5}
              max={2000}
              step={5}
              majorEvery={100}
            />
            <PricingSlider
              label="Bandwidth / mo"
              icon={Radio}
              value={bandwidth}
              setValue={setBandwidth}
              unit=" GB"
              min={10}
              max={5000}
              step={10}
              majorEvery={250}
            />
          </div>

          <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 flex flex-col justify-center space-y-3">
            <div className="text-[10px] uppercase tracking-wider text-white/30 font-medium text-center">
              Estimated total
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-center text-[#38bdf8]">
              ${total.toFixed(2)}
              <span className="text-sm font-normal text-white/30">/mo</span>
            </div>
            <div className="space-y-1.5 pt-3 border-t border-white/[0.06] text-xs">
              <div className="flex justify-between text-white/40">
                <span>Storage</span>
                <span className="text-white/70">
                  ${storagePrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-white/40">
                <span className="text-[10px] text-white/20 pl-2">
                  First 100 GB × $0.10, next 400 × $0.08, beyond × $0.06
                </span>
              </div>
              <div className="flex justify-between text-white/40">
                <span>Bandwidth</span>
                <span className="text-white/70">
                  ${bandwidthPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-white/40">
                <span className="text-[10px] text-white/20 pl-2">
                  First 200 GB × $0.05, next 800 × $0.04, beyond × $0.03
                </span>
              </div>
              <div className="flex justify-between text-white/40">
                <span>Seats</span>
                <span className="text-white/70">${seatsPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white/40">
                <span className="text-[10px] text-white/20 pl-2">
                  First 10 × $15, next 15 × $12, beyond × $10
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[10px] text-white/15 text-center pt-4">
          All prices exclude applicable taxes.
        </p>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    icon: Wifi,
    title: "Real-time collaboration",
    desc: "Every edit is shared instantly across your team. No file locks, no merge conflicts — just open a room and work together.",
  },
  {
    icon: GitBranch,
    title: "Git-backed storage",
    desc: "Under the hood, everything is stored in git. You get full history, branching, and the option to sync with an external remote whenever you want.",
  },
  {
    icon: Shield,
    title: "Per-environment rooms",
    desc: "Each branch gets its own live worktree. Multiple team members can edit the same project simultaneously without stepping on each other.",
  },
  {
    icon: Globe,
    title: "Self-host or cloud",
    desc: "Deploy on your own infrastructure for full control, or let us host it. Either way, your data stays yours.",
  },
  {
    icon: Lock,
    title: "Enterprise-grade auth",
    desc: "JWT-based authentication with optional SSO/SAML. Role-based access control per workspace.",
  },
  {
    icon: Server,
    title: "Web dashboard included",
    desc: "Manage workspaces, browse files, review code, and monitor activity — all from the browser. No client install needed for admins.",
  },
];

const TIERS = [
  {
    name: "Studio Cloud",
    price: "From $15",
    unit: "/seat / mo + usage",
    features: [
      "Real-time multi-user editing",
      "Unlimited workspaces",
      "Pay for what you use — storage & bandwidth",
      "Git-backed with external remote sync",
      "Team management dashboard",
      "Community support",
    ],
    cta: "Start free trial",
    href: "#",
    calculator: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "per seat / year",
    featured: true,
    features: [
      "Self-hosted on your infrastructure",
      "Unlimited seats & storage",
      "SSO / SAML / OIDC",
      "Audit logging",
      "On-premise, optional git remote sync",
      "99.95% SLA",
    ],
    cta: "Contact sales",
    href: "#",
  },
];

export default function StudioPage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <StudioHero />

      {/* ── Divider ── */}
      <div className="divider mx-auto max-w-4xl" />

      {/* ── How it works ── */}
      <section className="max-w-5xl mx-auto px-5 py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          How it works
        </h2>
        <p className="text-sm text-white/40 text-center max-w-xl mx-auto mb-14">
          Pulsar Engine connects directly to Studio. There&apos;s no clone, no
          push, no pull — just open a project and start editing with your team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Wifi,
              step: "01",
              title: "Connect",
              desc: "Launch Pulsar Engine, enter your server address and credentials. Your workspace list loads instantly.",
            },
            {
              icon: Users,
              step: "02",
              title: "Collaborate",
              desc: "Every file save is shared in real time. See who's in the same room and what they're editing.",
            },
            {
              icon: Shield,
              step: "03",
              title: "History & sync",
              desc: "Git tracks every change. Branch, merge, or push to an external remote — all without leaving the editor.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <span className="text-[10px] font-mono text-white/15 mb-2 block">
                {item.step}
              </span>
              <div className="flex items-center gap-2 mb-3">
                <item.icon className="w-4 h-4 text-[#0ea5e9]" />
                <h3 className="font-semibold text-sm">{item.title}</h3>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="divider mx-auto max-w-4xl" />

      {/* ── Features ── */}
      <section className="max-w-5xl mx-auto px-5 py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Everything your studio needs
        </h2>
        <p className="text-sm text-white/40 text-center max-w-xl mx-auto mb-14">
          Studio isn&apos;t just version control. It&apos;s a real-time
          collaboration layer built specifically for game development workflows.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]"
            >
              <feature.icon className="w-5 h-5 text-[#0ea5e9] mb-3" />
              <h3 className="text-sm font-semibold mb-1.5">{feature.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="divider mx-auto max-w-4xl" />

      {/* ── Pricing ── */}
      <section id="pricing" className="max-w-6xl mx-auto px-5 py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          Tentative pricing
        </h2>
        <p className="text-xs text-white/30 text-center max-w-xl mx-auto mb-14">
          Pricing is not yet finalized and is subject to change.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`relative rounded-2xl border p-6 flex flex-col h-full ${
                tier.featured
                  ? "border-[#0ea5e9]/40 bg-gradient-to-b from-[#0ea5e9]/[0.06] to-transparent shadow-[0_0_40px_-12px_rgba(14,165,233,0.15)]"
                  : "border-white/[0.07] bg-white/[0.02]"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#0ea5e9] rounded-full text-[10px] font-semibold text-white tracking-wide">
                  Most popular
                </div>
              )}
              <div className="flex items-center gap-2 mb-1">
                {tier.name === "Studio Cloud" ? (
                  <Cloud className="w-4 h-4 text-[#0ea5e9]" />
                ) : (
                  <Building2 className="w-4 h-4 text-[#0ea5e9]" />
                )}
                <h3 className="text-lg font-bold">{tier.name}</h3>
              </div>
              <div className="mb-5 mt-2">
                <span className="text-3xl font-bold">{tier.price}</span>
                <span className="text-xs text-white/30 ml-1">{tier.unit}</span>
              </div>
              <ul className="space-y-2 flex-1 mb-6">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-xs text-white/60"
                  >
                    <Check className="w-3.5 h-3.5 text-[#0ea5e9] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div
                className="block w-full text-center text-sm font-medium py-2.5 rounded-xl mb-3 bg-white/[0.04] text-white/30 border border-white/[0.06] cursor-not-allowed"
                title="Coming on release"
              >
                {tier.cta} &mdash; coming on release
              </div>
              {tier.calculator && <CalculatorToggle />}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="divider mx-auto max-w-4xl" />

      {/* ── CTA ── */}
      <section className="max-w-3xl mx-auto px-5 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to try it?
        </h2>
        <p className="text-sm text-white/40 max-w-lg mx-auto mb-8 leading-relaxed">
          Pulsar Studio is available now in early access. Deploy on your own
          servers or let us handle the infrastructure.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-medium text-sm rounded-xl transition-colors"
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com/Far-Beyond-Pulsar/Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/[0.15] hover:border-white/30 bg-white/[0.04] hover:bg-white/[0.07] text-white/80 hover:text-white font-medium text-sm rounded-xl transition-all backdrop-blur-sm"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
