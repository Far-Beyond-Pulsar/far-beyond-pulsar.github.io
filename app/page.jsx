import {
  HeroSection,
  FeaturesSection,
  InteractiveShowcase,
  DemoSection,
  UseCasesGallery,
  MetricsSection,
  PlatformSupport,
  QuickWins,
  ShowcaseGallery,
  VideoTutorials,
  DocHighlights,
  TechStack,
  BlogPosts,
  FeatureComparison,
  CommunityNews,
  Discussions,
  Spotlight,
  FAQ,
  CTASection
} from "@/components/home";
import WIPBanner from "@/components/WIPBanner";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <WIPBanner />
      <HeroSection />
      <FeaturesSection />
      <InteractiveShowcase />
      <DemoSection />
      <UseCasesGallery />
      <MetricsSection />
      <PlatformSupport />
      <QuickWins />
      <ShowcaseGallery />
      <VideoTutorials />
      <DocHighlights />
      <TechStack />
      <BlogPosts />
      <FeatureComparison />
      <CommunityNews />
      <Discussions />
      <Spotlight />
      <FAQ />
      <CTASection />
    </main>
  );
}
