"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "./SiteHeader";

// The shared Pulsar header (SiteHeader.tsx is identical on every site).
export function Header() {
  const path = usePathname() || "/";
  const current = path.startsWith("/studio") ? "studio" : undefined;
  return <SiteHeader current={current} logoSrc="/logos/pulsar.png" />;
}

export default Header;
