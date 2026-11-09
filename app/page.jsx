import {
  HeroSection,
  TechPillars,
  EditorPreview,
  BlueprintsShowcase,
  HelioShowcase,
  VoxelShowcase,
  AtmosphereShowcase,
  PluginArchitecture,
  DemoSection,
  PlatformBar,
  BlogPreview,
  CommunitySection,
  CTASection,
} from "@/components/home";

export const dynamic = "force-static";

export default function Page() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Status notice — sits just below the fixed header */}
      <div className="mt-14 border-b border-[#0ea5e9]/20 bg-[#0ea5e9]/[0.06]">
        <p className="max-w-6xl mx-auto px-5 py-2.5 text-center font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.12em] text-white/70 leading-relaxed">
          <span className="text-[#38bdf8]">Heads up —</span> Pulsar isn&apos;t ready to make games just
          yet. A beta is expected in Q1–Q2 2027.
        </p>
      </div>

      <HeroSection />

      {/* Thin accent rule */}
      <div className="divider mx-auto max-w-4xl" />

      <TechPillars />

      <div className="divider mx-auto max-w-4xl" />

      <EditorPreview />

      <PlatformBar />

      <BlueprintsShowcase />

      <HelioShowcase />

      <div className="divider mx-auto max-w-4xl" />

      <VoxelShowcase />

      <AtmosphereShowcase />

      <PluginArchitecture />

      <div className="divider mx-auto max-w-4xl" />

      <DemoSection />

      <div className="divider mx-auto max-w-4xl" />

      <BlogPreview />

      <div className="divider mx-auto max-w-4xl" />

      <CommunitySection />

      <CTASection />
    </main>
  );
}
