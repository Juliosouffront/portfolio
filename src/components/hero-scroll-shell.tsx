"use client";

import { type ReactNode } from "react";
import { HeroFixedStage, HeroPortrait } from "@/components/sections/HeroSection";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type HeroScrollShellProps = {
  children: ReactNode;
};

export function HeroScrollShell({ children }: HeroScrollShellProps) {
  const shouldReduceMotion = usePrefersReducedMotion();

  return (
    <div className="relative [--hero-sheet-pull:clamp(128px,23svh,214px)] [--hero-portrait-drop:calc(clamp(1.25rem,4.5vh,2.5rem)+0.5rem+2px)] [--hero-portrait-max-w:1000px]">
      {shouldReduceMotion ? (
        <div className="relative z-0 h-svh w-full">
          <HeroFixedStage />
        </div>
      ) : (
        <div
          className="h-[calc(100svh+var(--hero-sheet-pull))] shrink-0"
          aria-hidden
        />
      )}

      <div className="relative z-10 mt-[calc(var(--hero-sheet-pull)*-1)]">
        <div className="portfolio-shell relative z-0 rounded-t-[48px] pb-6 tablet:rounded-t-[56px] tablet:pb-8 desktop:rounded-t-[64px] desktop:pb-10">
          <HeroPortrait className="bottom-full z-[60]" />

          <div className="sheet-grabber" aria-hidden="true">
            <div className="sheet-handle" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
