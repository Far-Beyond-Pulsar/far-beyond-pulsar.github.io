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
import { fetchDiscussionsAtBuildTime } from "@/lib/fetch-discussions";

function SectionBreak() {
  return (
    <div className="section-glow-break" aria-hidden="true" />
  );
}

export default async function Page() {
  // Fetch discussions at build time
  const discussions = await fetchDiscussionsAtBuildTime(5);

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
      <CommunityNews discussions={discussions} />
      <SectionBreak />
      <CTASection />
    </main>
  );
}
