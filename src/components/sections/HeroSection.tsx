"use client";

import { AppImage as Image } from "@/components/ui/app-image";
import { useRef } from "react";
import { hero } from "@/lib/content";
import { gsap, useGSAP } from "@/lib/gsap";
import { motionPresets } from "@/lib/motion";
import { typography } from "@/lib/typography";
import { SlideInButton } from "@/components/ui/slide-in-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

export function HeroCopy() {
  const copyRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion || !copyRef.current) return;

      gsap.fromTo(copyRef.current, motionPresets.heroSpring.from, motionPresets.heroSpring.to);
    },
    { scope: copyRef, dependencies: [shouldReduceMotion] },
  );

  return (
    <div ref={copyRef} className="hero-copy w-full max-w-[640px]">
      <h1 className={cn(typography.h1, "hero-title text-center")}>{hero.title}</h1>

      <div className="hero-intro flex w-full flex-col items-center">
        <div className={cn("hero-subcopy text-measure", typography.bodyLg, "text-neutral-20 leading-[1.25]")}>
          <p>
            {hero.subtitle}
            <br />
            {hero.subtitleLine2}{" "}
            <a
              href={hero.subtitleHighlightHref}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-neutral-20/30 underline-offset-4 transition-opacity hover:opacity-60"
              data-cursor-hover
            >
              {hero.subtitleHighlight}
            </a>
          </p>
        </div>

        <div className="hero-cta">
          <SlideInButton
            href={hero.cta.href}
            external
            size="md"
            variant="dark"
            className="min-w-[132px] justify-center px-6 py-2.5"
          >
            {hero.cta.label}
          </SlideInButton>
        </div>
      </div>
    </div>
  );
}

export function HeroFixedOverlay() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-svh w-full overflow-hidden">
      <HeroFixedStage className="pointer-events-auto" />
    </div>
  );
}

type HeroFixedStageProps = {
  className?: string;
};

export function HeroFixedStage({ className }: HeroFixedStageProps) {
  return (
    <div
      id="hero"
      aria-label="Introduction"
      className={cn("relative z-0 h-svh w-full overflow-hidden hero-gradient", className)}
    >
      <div
        className={cn(
          "container-site absolute inset-x-0 flex flex-col items-center justify-start",
          "top-[max(10.5rem,calc(env(safe-area-inset-top,0px)+10rem))]",
          "tablet:top-[max(11.5rem,calc(env(safe-area-inset-top,0px)+11rem))]",
          "desktop:top-[max(12.5rem,calc(env(safe-area-inset-top,0px)+12rem))]",
          "bottom-[clamp(15rem,36svh,21rem)] tablet:bottom-[clamp(16rem,38svh,22rem)]",
        )}
      >
        <HeroCopy />
      </div>
    </div>
  );
}

type HeroPortraitProps = {
  className?: string;
};

export function HeroPortrait({ className }: HeroPortraitProps) {
  const portraitRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion || !portraitRef.current) return;

      gsap.fromTo(portraitRef.current, motionPresets.heroFade.from, motionPresets.heroFade.to);
    },
    { scope: portraitRef, dependencies: [shouldReduceMotion] },
  );

  return (
    <div
      ref={portraitRef}
      data-hero-portrait
      className={cn(
        "pointer-events-none absolute inset-x-0 flex items-end justify-center",
        className,
      )}
    >
      <Image
        src={hero.portrait}
        alt="Julio Souffront portrait"
        width={5320}
        height={5320}
        priority
        sizes="(min-width: 1200px) 1000px, 88vw"
        className="h-auto w-full max-w-[var(--hero-portrait-max-w,1000px)]"
      />
    </div>
  );
}

/** @deprecated Use HeroFixedStage — kept for static / reduced-motion layouts */
export function HeroSection() {
  return (
    <section aria-label="Introduction" className="relative min-h-svh">
      <HeroFixedStage />
    </section>
  );
}
