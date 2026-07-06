export const typography = {
  /** Hero H1 — 56–72px */
  h1: "font-serif text-[clamp(3.5rem,8vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-neutral-30",
  /** Section heading — 40–48px */
  h2: "font-serif text-[clamp(2.5rem,5vw,3rem)] leading-[1.1] tracking-[-0.035em] text-neutral-30",
  /** Medium heading — 28–32px */
  h3: "font-serif text-[clamp(1.75rem,3vw,2rem)] leading-[1.2] tracking-[-0.03em] text-neutral-30",
  /** Card title / small heading — 24px */
  h4: "font-serif text-2xl leading-[1.35] tracking-[-0.025em] text-neutral-30",
  /** Body — 16px */
  body: "font-sans text-base leading-[1.6] text-brown-dark",
  /** Large body — 18–20px */
  bodyLg: "font-sans text-lg leading-[1.6] text-brown-dark tablet:text-xl",
  /** Caption — 14px */
  caption: "font-sans text-sm leading-[1.5] text-neutral-20",
  /** Small label — 12px */
  label: "font-display text-xs font-semibold uppercase tracking-[0.08em]",
  /** Pull quote — 22–28px */
  quote:
    "font-serif text-[clamp(1.375rem,2.5vw,1.75rem)] leading-[1.5] tracking-[-0.02em] text-neutral-30",
  /** Footer headline */
  footerHeadline:
    "font-sans text-[clamp(1.25rem,2.5vw,1.5rem)] font-normal leading-[1.4] text-neutral-30",
  nav: "font-sans text-base leading-[1.5] text-neutral-30",
  /** Readable paragraph width — ~65 characters */
  measure: "max-w-[65ch]",
} as const;
