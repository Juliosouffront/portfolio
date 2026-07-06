"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ScrollSmoother, ScrollTrigger } from "@/lib/gsap";
import { HashScrollSync } from "@/components/providers/HashScrollSync";
import { ScrollSmootherContext } from "@/components/providers/scroll-smoother-context";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type SmoothScrollProviderProps = {
  children: React.ReactNode;
  /** Rendered inside #smooth-wrapper but outside transformed #smooth-content (viewport-fixed layers). */
  fixed?: React.ReactNode;
};

function refreshScrollTriggers() {
  ScrollTrigger.refresh(true);
}

export function SmoothScrollProvider({ children, fixed }: SmoothScrollProviderProps) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(shouldReduceMotion);

  useLayoutEffect(() => {
    if (shouldReduceMotion || !wrapperRef.current || !contentRef.current) return;

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1,
      smoothTouch: 0.1,
      effects: false,
      normalizeScroll: true,
    });

    smoother.refresh();
    refreshScrollTriggers();
    setIsReady(true);

    let refreshTimer: number | undefined;

    const scheduleRefresh = () => {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(() => {
        smoother.refresh();
        refreshScrollTriggers();
      }, 150);
    };

    window.addEventListener("load", scheduleRefresh);

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
            scheduleRefresh();
          })
        : null;

    resizeObserver?.observe(contentRef.current);

    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("load", scheduleRefresh);
      resizeObserver?.disconnect();
      smoother.kill();
      setIsReady(false);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <ScrollSmootherContext.Provider value={{ isReady: true }}>
        {children}
        <HashScrollSync />
      </ScrollSmootherContext.Provider>
    );
  }

  return (
    <ScrollSmootherContext.Provider value={{ isReady }}>
      <div id="smooth-wrapper" ref={wrapperRef}>
        {fixed}
        <div id="smooth-content" ref={contentRef}>
          {children}
        </div>
      </div>
      <HashScrollSync />
    </ScrollSmootherContext.Provider>
  );
}
