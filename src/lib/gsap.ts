import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

/** Site-wide easing — matches legacy cubic-bezier(0.44, 0, 0.56, 1) */
export const easePortfolio = "power2.inOut";

export const durations = {
  fast: 0.25,
  default: 0.4,
  reveal: 0.8,
  slide: 0.5,
} as const;

export { gsap, useGSAP, ScrollTrigger, ScrollSmoother };
