import {
  HeroSection,
  FeaturesSection,
  UseCasesGallery,
  MetricsSection,
  PlatformSupport,
  DemoSection,
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

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <UseCasesGallery />
      <MetricsSection />
      <PlatformSupport />
      <DemoSection />
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
