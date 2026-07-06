export const SITE = {
  name: "Julio Souffront",
  title: "Julio Souffront - Portfolio",
  description:
    "More than a place to share my work this is a glimpse into what it feels to work with me: a simple and honest space where I share how I think, what I've learned, and the work I've been lucky to be part of.",
  url: "https://www.hellojulio.com",
  email: "juliosouffront@gmail.com",
  socialHandle: "@juliosouffront",
  gaId: "G-2TM0PYZENG",
} as const;

export const BREAKPOINTS = {
  mobile: 809.98,
  tablet: 810,
  desktop: 1200,
} as const;

export const COLORS = {
  blue: "#9cc1e7",
  warmBeige: "#eddfd0",
  cream: "#faf5f0",
  dark: "#1a1615",
  darkMuted: "#453f3d",
  muted: "#757170",
  body: "#614a44",
  background: "#f9f8f8",
  white: "#ffffff",
  workBg: "#fff5fa",
  workLabel: "#ec75ad",
  playLabel: "#409fff",
  mentorsLabel: "#018370",
  aboutLabel: "#fd4c22",
  black: "#000000",
} as const;

export const LAYOUT = {
  maxWidth: 1072,
  heroHeight: 1078,
  heroShellInset: {
    mobile: 267,
    tablet: 334,
    desktop: 400,
  },
  cardRadius: 202,
  pillRadius: 100,
  cardRadiusSm: 24,
} as const;

export const TYPOGRAPHY = {
  h1: {
    size: "76px",
    lineHeight: "91.2px",
    letterSpacing: "-2.28px",
    mobileSize: "48px",
    mobileLineHeight: "57.6px",
    mobileLetterSpacing: "-1.44px",
  },
  h2: {
    size: "52px",
    lineHeight: "62.4px",
    letterSpacing: "-1.56px",
    mobileSize: "36px",
    mobileLineHeight: "43.2px",
    mobileLetterSpacing: "-1.08px",
  },
  h5: {
    size: "28px",
    lineHeight: "39.2px",
    letterSpacing: "-0.84px",
    mobileSize: "22px",
    mobileLineHeight: "30.8px",
    mobileLetterSpacing: "-0.66px",
  },
} as const;
