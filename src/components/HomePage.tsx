import { SiteNav } from "@/components/site-nav";
import { Footer } from "@/components/footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { HeroScrollShell } from "@/components/hero-scroll-shell";
import { HeroFixedOverlay } from "@/components/sections/HeroSection";
import { WorkShowcase } from "@/components/sections/work-showcase";
import { PlaySection } from "@/components/sections/PlaySection";
import { MentorsSection } from "@/components/sections/MentorsSection";
import { AboutSection } from "@/components/sections/AboutSection";

export function HomePage() {
  return (
    <>
      <SiteNav />
      <SmoothScrollProvider fixed={<HeroFixedOverlay />}>
        <main id="main" className="relative bg-page text-neutral-30">
          <HeroScrollShell>
            <WorkShowcase />
            <PlaySection />
            <MentorsSection />
            <AboutSection />
            <Footer />
          </HeroScrollShell>
        </main>
      </SmoothScrollProvider>
    </>
  );
}
