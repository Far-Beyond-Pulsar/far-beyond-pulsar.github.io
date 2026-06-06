import {
  HeroSection,
  TechPillars,
  EditorPreview,
  BlueprintsShowcase,
  DemoSection,
  PlatformBar,
  CommunitySection,
  CTASection,
} from "@/components/home";

export const dynamic = "force-static";

export default function Page() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <HeroSection />

      {/* Thin accent rule */}
      <div className="divider mx-auto max-w-4xl" />

      <TechPillars />

      <div className="divider mx-auto max-w-4xl" />

      <EditorPreview />

      <PlatformBar />

      <BlueprintsShowcase />

      <div className="divider mx-auto max-w-4xl" />

      <DemoSection />

      <div className="divider mx-auto max-w-4xl" />

      <CommunitySection />

      <CTASection />
    </main>
  );
}
