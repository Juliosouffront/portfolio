"use client";

import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const projectHoverPillClass = cn(
  typography.body,
  "rounded-pill bg-white/92 px-5 py-2.5 whitespace-nowrap text-neutral-30 shadow-[0_10px_32px_rgb(26_22_21_/_0.22),0_2px_8px_rgb(26_22_21_/_0.12)] backdrop-blur-sm",
);

export const projectHoverDimClass = cn(
  "pointer-events-none absolute inset-0 z-[7] bg-black/30 opacity-0 transition-opacity duration-300",
  "hoverable:group-hover:opacity-100 hoverable:group-focus-within:opacity-100",
);

export const projectHoverRevealClass = cn(
  "pointer-events-none opacity-0 transition-opacity duration-200 ease-out",
  "hoverable:group-hover:opacity-100 hoverable:group-focus-within:opacity-100",
);

export const projectHoverOverlayClass = cn(
  "pointer-events-none absolute inset-0 z-[2] bg-black/90",
  projectHoverRevealClass,
);

export const projectHoverCopyClass = cn(
  "absolute inset-x-0 bottom-0 z-[3] flex flex-col items-center px-6 pb-7 text-center",
  projectHoverRevealClass,
);

export const projectCardShellClass = "overflow-hidden rounded-card";

export const projectCardHoverClass = cn(
  "relative origin-center",
  "hoverable:transition-transform hoverable:duration-300 hoverable:ease-[cubic-bezier(0.44,0,0.56,1)]",
  "hoverable:will-change-transform hoverable:hover:scale-[1.04] hoverable:focus-within:scale-[1.04]",
  "hoverable:hover:z-10 hoverable:focus-within:z-10",
  "motion-reduce:transform-none motion-reduce:transition-none",
);

export const projectContentMediaClass = "h-full w-full origin-center";
