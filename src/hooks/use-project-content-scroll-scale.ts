"use client";

import { type RefObject } from "react";
import { useScrollSmootherReady } from "@/components/providers/scroll-smoother-context";
import { gsap, useGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export const PROJECT_CONTENT_SCALE = 1.03;

export function useProjectContentScrollScale(
  triggerRef: RefObject<HTMLElement | null>,
  contentRef: RefObject<HTMLElement | null>,
) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const scrollSmootherReady = useScrollSmootherReady();

  useGSAP(
    () => {
      if (shouldReduceMotion || !scrollSmootherReady || !contentRef.current) return;

      const content = contentRef.current;
      const trigger = triggerRef.current ?? content;

      gsap.set(content, { scale: 1, transformOrigin: "center center" });

      const tween = gsap.fromTo(
        content,
        { scale: PROJECT_CONTENT_SCALE, transformOrigin: "center center" },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger,
            start: "top 94%",
            end: "top 60%",
            scrub: 0.45,
            invalidateOnRefresh: true,
          },
        },
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: triggerRef, dependencies: [shouldReduceMotion, scrollSmootherReady] },
  );
}
