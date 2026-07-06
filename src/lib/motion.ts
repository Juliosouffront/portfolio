import { durations, easePortfolio } from "@/lib/gsap";

export const transitions = {
  defaultSpring: {
    duration: durations.default,
    ease: easePortfolio,
  },
  navSpring: {
    duration: 0.35,
    ease: easePortfolio,
  },
  ease: {
    duration: durations.default,
    ease: easePortfolio,
  },
};

export const motionPresets = {
  fadeUp: {
    from: { opacity: 0, y: 24 },
    to: { opacity: 1, y: 0, duration: 0.6, ease: easePortfolio },
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.5 },
    to: { opacity: 1, scale: 1, duration: durations.default, ease: "back.out(1.4)" },
  },
  scrollReveal: {
    from: { opacity: 0, y: 64 },
    to: { opacity: 1, y: 0, duration: durations.reveal, ease: easePortfolio },
  },
  heroSpring: {
    from: { opacity: 0.001, scale: 1 },
    to: { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.2)" },
  },
  heroFade: {
    from: { opacity: 0.001 },
    to: { opacity: 1, duration: 0.7, delay: 1.25, ease: easePortfolio },
  },
  slide: {
    from: { opacity: 1, x: 48 },
    to: { opacity: 1, x: 0, duration: durations.slide, ease: easePortfolio },
    exit: { opacity: 1, x: -48, duration: durations.slide, ease: easePortfolio },
  },
  testimonial: {
    from: { opacity: 0, y: 16 },
    to: { opacity: 1, y: 0, duration: durations.default, ease: easePortfolio },
    exit: { opacity: 0, y: -16, duration: durations.default, ease: easePortfolio },
  },
};

export const scrollReveal = motionPresets.scrollReveal;
