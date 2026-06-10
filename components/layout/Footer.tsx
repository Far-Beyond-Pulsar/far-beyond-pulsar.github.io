"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github } from "lucide-react";

const SECTIONS = [
  {
    title: "Learn",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Getting Started", href: "/docs/getting-started/installation/windows" },
      { label: "Blog", href: "/blog" },
      { label: "Examples", href: "https://github.com/Far-Beyond-Pulsar/Pulsar-Native/tree/main/examples" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub Discussions", href: "https://github.com/orgs/Far-Beyond-Pulsar/discussions" },
      { label: "Contribute", href: "https://github.com/Far-Beyond-Pulsar/Pulsar-Native/blob/main/CONTRIBUTING.md" },
      { label: "Roadmap", href: "https://github.com/orgs/Far-Beyond-Pulsar/projects" },
      { label: "Releases", href: "https://github.com/Far-Beyond-Pulsar/Pulsar-Native/releases" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "GitHub", href: "https://github.com/Far-Beyond-Pulsar" },
      { label: "Issues", href: "https://github.com/Far-Beyond-Pulsar/Pulsar-Native/issues" },
      { label: "Security", href: "https://github.com/Far-Beyond-Pulsar/Pulsar-Native/security" },
      { label: "License", href: "https://github.com/Far-Beyond-Pulsar/Pulsar-Native/blob/main/LICENSE" },
    ],
  },
];

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-widest uppercase text-white/25 mb-4">{title}</p>
      <ul className="space-y-2.5">
        {links.map(({ label, href }) => {
          const isExternal = href.startsWith("http");
          return (
            <li key={label}>
              {isExternal ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/45 hover:text-white/80 transition-colors"
                >
                  {label}
                </a>
              ) : (
                <Link href={href} className="text-sm text-white/45 hover:text-white/80 transition-colors">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/studio")) return null;

  return (
    <footer className="border-t border-white/[0.07] bg-black">
      <div className="max-w-7xl mx-auto px-5 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logos/pulsar.png" alt="Pulsar" width={24} height={24} className="opacity-90" />
              <span className="text-sm font-semibold text-white">Pulsar</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-[220px]">
              A high-performance game engine built entirely in Rust — custom GPU-driven renderer, ECS core, visual scripting. Open source.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://github.com/Far-Beyond-Pulsar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/35 hover:text-white/70 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {SECTIONS.map((s) => (
            <FooterCol key={s.title} title={s.title} links={s.links} />
          ))}
        </div>

        <div className="divider mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Far Beyond Dev. Open source under MIT.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.githubstatus.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Status
            </a>
            <a
              href="https://github.com/Far-Beyond-Pulsar/Pulsar-Native/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
