"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const ANIMATION_SPEED = 1.2;
const REVEAL_MS = 900 / ANIMATION_SPEED;
const BLOCKS_X = 48;
const BLOCKS_Y = 24;

type PageIntroCurtainProps = {
  color: string;
  onComplete: () => void;
};

export function PageIntroCurtain({ color, onComplete }: PageIntroCurtainProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisible(false);
      onCompleteRef.current();
      return;
    }

    const fallback = window.setTimeout(() => {
      setVisible(false);
      onCompleteRef.current();
    }, 2500);

    return () => window.clearTimeout(fallback);
  }, [shouldReduceMotion]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      if (shouldReduceMotion) return;

      const blocks = containerRef.current.querySelectorAll<HTMLElement>("[data-intro-block]");

      gsap.to(blocks, {
        scaleY: 0,
        transformOrigin: "50% 0%",
        duration: REVEAL_MS / 1000,
        stagger: { amount: REVEAL_MS / 1000, from: "start", grid: [BLOCKS_X, BLOCKS_Y] },
        ease: "power2.inOut",
        onComplete: () => {
          setVisible(false);
          onCompleteRef.current();
        },
      });
    },
    { scope: containerRef, dependencies: [shouldReduceMotion, color] },
  );

  if (!visible) return null;

  const blocks = Array.from({ length: BLOCKS_X * BLOCKS_Y }, (_, index) => (
    <div
      key={index}
      data-intro-block
      className="intro-curtain-block h-full w-full"
      style={{ backgroundColor: color }}
    />
  ));

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] grid"
      style={{
        backgroundColor: color,
        gridTemplateColumns: `repeat(${BLOCKS_X}, 1fr)`,
        gridTemplateRows: `repeat(${BLOCKS_Y}, 1fr)`,
      }}
    >
      {blocks}
    </div>
  );
}
