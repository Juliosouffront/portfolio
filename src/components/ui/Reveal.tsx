"use client";

import { useRef } from "react";
import { useScrollSmootherReady } from "@/components/providers/scroll-smoother-context";
import { gsap, useGSAP, easePortfolio } from "@/lib/gsap";
import { scrollReveal } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
  id?: string;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = usePrefersReducedMotion();
  const scrollSmootherReady = useScrollSmootherReady();

  useGSAP(
    () => {
      if (shouldReduceMotion || !scrollSmootherReady || !ref.current) return;

      gsap.from(ref.current, {
        ...scrollReveal.from,
        duration: scrollReveal.to.duration,
        ease: easePortfolio,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [shouldReduceMotion, scrollSmootherReady, delay] },
  );

  return (
    <Tag ref={ref as never} id={id} className={className}>
      {children}
    </Tag>
  );
}
