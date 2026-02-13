import {
  HeroSection,
  FeaturesSection,
  DemoSection,
  InteractiveShowcase,
  QuickWins,
  CommunityNews,
  CTASection
} from "@/components/home";
import EngineDeepDive from "@/components/home/EngineDeepDive";
import WIPBanner from "@/components/WIPBanner";

function SectionBreak() {
  return (
    <div className="section-glow-break" aria-hidden="true" />
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <WIPBanner />
      <HeroSection />
      <SectionBreak />
      <FeaturesSection />
      <SectionBreak />
      <EngineDeepDive />
      <SectionBreak />
      <DemoSection />
      <SectionBreak />
      <InteractiveShowcase />
      <SectionBreak />
      <QuickWins />
      <SectionBreak />
      <CommunityNews />
      <SectionBreak />
      <CTASection />
    </main>
  );
}
