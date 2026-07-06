import { assets } from "./assets";

export type CaseStudyMetaItem = {
  label: string;
  value: string;
};

export type CaseStudySummaryCard = {
  label: string;
  title: string;
  body: string;
};

export type CaseStudyImpactStat = {
  value: string;
  valueSecondary?: string;
  label: string;
  footnote: string;
};

export type CaseStudyNarrativeSection = {
  id: string;
  label: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export type CaseStudyDesignFeature = {
  index: number;
  total: number;
  title: string;
  body: string;
  image: string;
  captions?: string[];
};

export type CaseStudyReflection = {
  title: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  themeColor: string;
  heroTitle: string;
  tags: string[];
  description: string;
  meta: CaseStudyMetaItem[];
  summary: CaseStudySummaryCard[];
  impact: CaseStudyImpactStat[];
  sections: CaseStudyNarrativeSection[];
  designFeatures: CaseStudyDesignFeature[];
  reflections: CaseStudyReflection[];
  nextSteps: { title: string; body: string }[];
  closing: string;
  heroMedia: {
    desktop: string;
    mobile: string;
    alt: string;
    vimeoId?: string;
  };
};

/** Slide 1 — Qik Pro premium ecosystem (qik.do/pro) */
const qikPro: CaseStudy = {
  slug: "qik-pro",
  name: "Qik Pro",
  themeColor: "#0c1f4a",
  heroTitle: "A premium financial ecosystem for customers who want more from every Qik product",
  tags: ["0 to 1", "Product Design", "Design Systems", "Shipped", "Qik Pro"],
  description:
    "Qik Pro is the premium tier of Qik Banco Digital Dominicano — a neobank ecosystem with personalized cashback, preferential rates, Pro Agent support, and a Mastercard Platinum card with Artlight technology.",
  meta: [
    { label: "surface", value: "Qik mobile app · Qik Pro ecosystem" },
    { label: "role", value: "Product Designer · Qik Banco Digital" },
    { label: "team members", value: "Product · Engineering · Brand · Legal" },
    { label: "scope", value: "0 to 1 UX/UI · Onboarding · Card & benefits · Design system" },
  ],
  summary: [
    {
      label: "Problem",
      title: "Power users outgrew the base experience",
      body: "High-intent Qik customers wanted deeper benefits, clearer premium value, and faster support — without losing the simplicity that made Qik different.",
    },
    {
      label: "Solution",
      title: "A unified Pro ecosystem",
      body: "We designed Qik Pro as a single premium layer across credit, savings, certificates, and loans — anchored by the Qik Pro credit card as the entry point.",
    },
    {
      label: "Result",
      title: "A differentiated premium tier",
      body: "The ecosystem launched with personalized cashback, preferential financial rates, Pro Agent support, and a card that became a regional innovation story.",
    },
  ],
  impact: [
    {
      value: "5%",
      label: "Personalized cashback",
      footnote: "On a chosen spend category — or 2% + 3% across two categories",
    },
    {
      value: "1st",
      label: "Artlight card in the Caribbean",
      footnote: "Illuminates on payment · no magnetic stripe in the DR",
    },
    {
      value: "3",
      valueSecondary: "1",
      label: "Products in one ecosystem",
      footnote: "Card, rates, and support unified under Qik Pro",
    },
  ],
  sections: [
    {
      id: "context",
      label: "Context",
      title: "Qik is the Dominican Republic's first digital-only bank.",
      body: [
        "Qik Banco Digital Dominicano — a Grupo Popular subsidiary — launched in 2022 with a credit-first, mobile-native model. By 2025 the bank had grown into a full financial ecosystem with dozens of in-app capabilities.",
        "Qik Pro was created for customers who already trusted Qik but wanted a more personalized, high-benefit experience across every product.",
      ],
    },
    {
      id: "problem",
      label: "Problem",
      title: "Premium value was hard to see before Pro existed.",
      body: ["Research and business goals pointed to three gaps:"],
      bullets: [
        "Benefits were scattered across products with no single 'why upgrade' story",
        "Cashback and rate advantages needed to feel personal, not generic",
        "High-value customers expected human-grade support inside a digital bank",
      ],
    },
    {
      id: "goals",
      label: "Goals + north star",
      title: "Make Pro feel like a natural step up — not a different bank.",
      body: [
        "Unify benefits: One ecosystem story across card, savings, certificates, and loans.",
        "Personalize rewards: Let users choose the cashback categories that match their life.",
        "Design for trust: Premium should feel secure, modern, and unmistakably Qik.",
      ],
    },
    {
      id: "process",
      label: "Process + key insights",
      title: "We mapped the full Pro journey from application to everyday use.",
      body: [
        "We ran stakeholder workshops with product and brand, audited premium fintech competitors, and tested early prototypes with existing Qik power users.",
        "Key insights that shaped the MVP:",
      ],
      bullets: [
        "The credit card is the front door — activation should unlock the whole ecosystem",
        "Cashback choice is emotional — users want control over where they 'win'",
        "Pro support must feel immediate inside the app, not like a call center handoff",
      ],
    },
    {
      id: "solution",
      label: "Solution",
      title: "Qik Pro — premium benefits woven through the entire Qik experience.",
      body: [
        "Customers access Pro by applying for and activating the Qik Pro credit card. From there they unlock better savings rates (3–6% annual), +1% on new certificates, −2% on new loans, and priority support from Pro Agents.",
        "The Qik Pro card includes Mastercard Platinum travel benefits, international cashback boosts, and Artlight — a visual payment confirmation unique in the region.",
      ],
    },
    {
      id: "branding",
      label: "Branding",
      title: "Premium, but still Qik.",
      body: [
        "We leaned into deeper blues and platinum accents, subtle motion on Artlight payment confirmations, and a calmer typographic rhythm than the base Qik experience.",
        "The Pro tier needed to signal elevation without breaking the warm, accessible Qik brand people already loved.",
      ],
    },
  ],
  designFeatures: [
    {
      index: 1,
      total: 3,
      title: "Pro onboarding & cashback personalization",
      body: "Users choose the cashback categories that match their spending before activation. A benefits summary walks them through rates, Pro Agent access, and card perks so the upgrade feels tangible — not buried in fine print.",
      image: assets.work.qikPro.screens[0],
      captions: [
        "Category picker with live benefit preview",
        "Benefits summary before card activation",
      ],
    },
    {
      index: 2,
      total: 3,
      title: "The Qik Pro card & Artlight payment moment",
      body: "Card management covers virtual and physical delivery, limit visibility, and the Artlight payment confirmation — a regional first that turns every tap into a visible, reassuring brand moment.",
      image: assets.work.qikPro.screens[1],
    },
    {
      index: 3,
      total: 3,
      title: "Pro Agent support inside the app",
      body: "Preferential support is surfaced from high-intent moments — card issues, limit questions, travel prep — with clear response states and escalation paths that keep users inside Qik instead of hunting a phone number.",
      image: assets.work.qikPro.screens[2],
      captions: ["Pro Agent entry from card settings", "In-conversation status and handoff states"],
    },
  ],
  reflections: [
    {
      title: "Designing a tier, not a feature",
      body: "Pro only works when every touchpoint reinforces the same story — card, rates, support, and copy all need to feel like one ecosystem.",
    },
    {
      title: "Premium without intimidation",
      body: "Financial products can feel exclusionary. We had to communicate eligibility and value clearly while keeping Qik's inclusive tone.",
    },
    {
      title: "Hardware moments matter",
      body: "Artlight turned a payment into a brand moment — a reminder that physical card design and digital UX are one experience.",
    },
  ],
  nextSteps: [
    {
      title: "Deeper Pro analytics",
      body: "A dashboard showing cashback earned, rate advantages, and Pro-only savings over time.",
    },
    {
      title: "Expanded travel benefits UX",
      body: "Surfacing lounge access, insurance, and Mastercard Platinum perks contextually before trips.",
    },
  ],
  closing: "Pro customers don't just bank more. They bank better.",
  heroMedia: {
    desktop: assets.work.qikPro.banner,
    mobile: assets.work.qikPro.banner,
    alt: "Qik Pro case study banner",
  },
};

/** Slide 2 — Crea Crédito financial inclusion program (qik.do/creacreditoqik) */
const createCredit: CaseStudy = {
  slug: "create-credit",
  name: "Crea Crédito",
  themeColor: "#018370",
  heroTitle: "Helping thousands of Dominicans build formal credit history — 100% digitally",
  tags: ["0 to 1", "Inclusion", "Product Design", "Shipped", "Crea Crédito"],
  description:
    "Crea Crédito is Qik's secured-credit program for people creating, restoring, or strengthening their credit history — using a deposit-backed Qik credit card, in-app coaching, and a graduation path back to unlocked funds.",
  meta: [
    { label: "surface", value: "Qik mobile app · Crea Crédito program" },
    { label: "role", value: "Product Designer · Qik Banco Digital" },
    { label: "team members", value: "Product · Risk · Engineering · Compliance" },
    { label: "scope", value: "Program UX · Onboarding · Education · Graduation flows" },
  ],
  summary: [
    {
      label: "Problem",
      title: "No credit history, no access",
      body: "Thousands of Dominicans were locked out of formal credit — not because they were irresponsible, but because they had no score to show.",
    },
    {
      label: "Solution",
      title: "Credit backed by your own guarantee",
      body: "Users deposit funds as collateral, receive a Qik credit card with a matching limit, earn interest while funds are held, and graduate after responsible use.",
    },
    {
      label: "Result",
      title: "Inclusion at scale",
      body: "The program reached 29,900+ participants with 8,000+ successful graduations — the country's only fully digital financial inclusion program of its kind.",
    },
  ],
  impact: [
    {
      value: "29.9k+",
      label: "People enrolled",
      footnote: "Building formal credit history through Qik",
    },
    {
      value: "8k+",
      label: "Graduated",
      footnote: "Completed the program and unlocked their guarantee",
    },
    {
      value: "RD$7k–50k",
      label: "Credit limits",
      footnote: "Based on the guarantee amount deposited",
    },
  ],
  sections: [
    {
      id: "context",
      label: "Context",
      title: "Financial inclusion is structural in the Dominican Republic.",
      body: [
        "Qik's mission is to democratize access to credit through technology. Crea Crédito was built for people who need a first chance — or a second one — at formal banking.",
        "The program uses the same Tarjeta de Crédito Qik, but with a guarantee-based limit instead of traditional underwriting.",
      ],
    },
    {
      id: "problem",
      label: "Problem",
      title: "Traditional credit models leave people behind.",
      body: ["We heard recurring barriers in research:"],
      bullets: [
        "No credit file means automatic rejection — even with stable income",
        "Past mistakes block access for years without a clear recovery path",
        "Secured products elsewhere feel punitive, not educational",
      ],
    },
    {
      id: "goals",
      label: "Goals + north star",
      title: "Turn credit-building into a guided journey — not a trap.",
      body: [
        "Make entry accessible: Clear eligibility, transparent guarantee rules, and instant digital onboarding.",
        "Teach along the way: In-app financial education and milestone celebrations.",
        "Celebrate graduation: Unlocking funds should feel like an achievement, not admin.",
      ],
    },
    {
      id: "process",
      label: "Process + key insights",
      title: "We designed for anxiety, not just compliance.",
      body: [
        "We interviewed thin-file applicants, reviewed support tickets from declined users, and mapped the emotional peaks of depositing a guarantee for the first time.",
        "Three insights drove the experience:",
      ],
      bullets: [
        "Users need to see their guarantee is still theirs — it earns interest while frozen",
        "Progress must be visible — credit-building is invisible without feedback",
        "Language matters — 'garantía' and 'graduación' need plain explanations",
      ],
    },
    {
      id: "solution",
      label: "Solution",
      title: "Crea Crédito — learn, spend responsibly, graduate.",
      body: [
        "Users accept an in-app invitation, deposit a guarantee (RD$7,000–50,000), and receive a credit limit equal to that amount. The deposit stays in their Cuenta Qik earning interest while they use the card.",
        "After a period of responsible use, they graduate: funds return to their available balance and they continue with a strengthened credit profile.",
      ],
    },
    {
      id: "branding",
      label: "Branding",
      title: "Hopeful, not clinical.",
      body: [
        "Milestone badges, a progress ring, and celebratory graduation screens made slow credit-building feel active. Greens and warm neutrals kept the tone hopeful — never clinical.",
        "The program needed to feel like a partnership with the user, not a probation period.",
      ],
    },
  ],
  designFeatures: [
    {
      index: 1,
      total: 3,
      title: "Program invitation & guarantee setup",
      body: "Users accept an in-app invitation, choose a guarantee amount between RD$7,000 and RD$50,000, and see their matching credit limit before confirming — no surprises after the deposit.",
      image: assets.work.createCredit.screens[0],
    },
    {
      index: 2,
      total: 3,
      title: "Learning milestones & in-app coaching",
      body: "Achievement badges, bite-sized financial tips, and a visible progress ring turn months of responsible use into a journey users can actually follow — not a black box.",
      image: assets.work.createCredit.screens[1],
    },
    {
      index: 3,
      total: 3,
      title: "Graduation & funds unlocked",
      body: "Completion triggers a celebration state, confirms funds returning to the available balance, and offers clear next steps toward standard credit products.",
      image: assets.work.createCredit.screens[2],
      captions: [
        "Graduation screen with unlocked guarantee summary",
        "Updated Cuenta Qik balance after completion",
      ],
    },
  ],
  reflections: [
    {
      title: "Design for dignity",
      body: "Inclusion products fail when they feel like charity. Crea Crédito had to respect users as future graduates, not edge cases.",
    },
    {
      title: "Make the invisible visible",
      body: "Credit scores change slowly. The UI had to show progress weekly, not quarterly.",
    },
    {
      title: "Compliance is UX",
      body: "Legal copy and risk rules only work if people actually understand them.",
    },
  ],
  nextSteps: [
    {
      title: "Post-graduation product paths",
      body: "Smoother transitions from Crea Crédito into standard credit limits and Qik Pro.",
    },
    {
      title: "Community success stories",
      body: "In-app stories from graduates to reduce fear for new applicants.",
    },
  ],
  closing:
    "Thousands of Dominicans now have a credit story — and it started with a deposit they never lost.",
  heroMedia: {
    desktop: assets.work.createCredit.desktop,
    mobile: assets.work.createCredit.mobile,
    alt: "Crea Crédito program design",
  },
};

/** Slide 3 — Tarjetas de Crédito Adicionales (qik.do additional cards) */
const additionals: CaseStudy = {
  slug: "additionals",
  name: "Additionals",
  themeColor: "#614a44",
  heroTitle: "Letting families share a Qik card — with control, limits, and peace of mind",
  tags: ["Product Design", "Credit Card", "Shipped", "Tarjetas Adicionales"],
  description:
    "Additional Qik credit cards let primary cardholders extend their account to family members — with per-card limits, freeze controls, and spending visibility, all managed from the app.",
  meta: [
    { label: "surface", value: "Qik mobile app · Credit card settings" },
    { label: "role", value: "Product Designer · Qik Banco Digital" },
    { label: "team members", value: "Product · Engineering · Operations" },
    { label: "scope", value: "Request flow · Limits · Monitoring · Card controls" },
  ],
  summary: [
    {
      label: "Problem",
      title: "Shared spending, zero control",
      body: "Families wanted to share credit access — but existing solutions meant handing over the primary card or losing visibility on who spent what.",
    },
    {
      label: "Solution",
      title: "Additional cards, primary control",
      body: "Titulars request additional cards for approved family members, set individual limits, freeze cards instantly, and filter statements by card.",
    },
    {
      label: "Result",
      title: "Shared benefits, clear accountability",
      body: "Launched as part of Qik's ecosystem expansion — giving 500k+ customers a native way to manage household spending.",
    },
  ],
  impact: [
    {
      value: "∞",
      label: "Per-card limits",
      footnote: "Titular sets custom spending caps for each additional",
    },
    {
      value: "1 tap",
      label: "Freeze / unfreeze",
      footnote: "Instant control on any additional card",
    },
    {
      value: "RD$600",
      label: "Physical delivery",
      footnote: "Optional plastic for additional cardholders",
    },
  ],
  sections: [
    {
      id: "context",
      label: "Context",
      title: "Qik launched additional cards to expand its credit ecosystem.",
      body: [
        "Announced during Qik's second anniversary, Tarjetas de Crédito Adicionales let existing cardholders share benefits with trusted family members — without sharing login credentials.",
        "Both the titular and the additional holder must be Qik customers and over 18.",
      ],
    },
    {
      id: "problem",
      label: "Problem",
      title: "Household finance is shared — products rarely are.",
      body: ["Titulars told us they needed:"],
      bullets: [
        "A card for a partner or child without giving up account control",
        "Visibility into who spent what, without spreadsheet reconciliation",
        "Emergency freeze power when a card is lost or misused",
      ],
    },
    {
      id: "goals",
      label: "Goals + north star",
      title: "Sharing should feel safe, not reckless.",
      body: [
        "Simple request flow: Cédula, relationship, delivery — done in minutes.",
        "Granular control: Limits, freeze, and consumption filters per card.",
        "Clear responsibility: Titular pays — additional spends — everyone understands the rules.",
      ],
    },
    {
      id: "process",
      label: "Process + key insights",
      title: "We designed for the titular's anxiety, not just the additional's convenience.",
      body: [
        "Usability tests surfaced confusion around limit-setting math and freeze discoverability. We iterated on defaults, inline examples, and persistent status chips on the card list.",
      ],
      bullets: [
        "Titulars want limits upfront, not buried in settings",
        "Statement filtering by card is the killer feature for trust",
        "Additional holders still need a normal card experience — it's not a 'lite' product",
      ],
    },
    {
      id: "solution",
      label: "Solution",
      title: "Additional cards managed like a mini fleet.",
      body: [
        "From credit card settings, titulars tap 'Solicita una tarjeta adicional', enter the recipient's cédula and relationship, confirm delivery, and track the request.",
        "Once active, each additional appears in a dedicated tab with its own limit controls, freeze toggle, and filtered transaction history.",
      ],
    },
    {
      id: "branding",
      label: "Branding",
      title: "Same Qik card, clear roles.",
      body: [
        "Additional cards share the Qik design language but are always labeled in statements, settings, and the card switcher so titulars never confuse whose spending they're viewing.",
      ],
    },
  ],
  designFeatures: [
    {
      index: 1,
      total: 3,
      title: "Request flow — from settings to submitted",
      body: "From credit card settings, titulars enter the recipient's cédula, pick a relationship, confirm delivery, and track the request through submitted, approved, and shipped states.",
      image: assets.work.additionals.screens[0],
    },
    {
      index: 2,
      total: 3,
      title: "Per-card limits & freeze controls",
      body: "Each additional card gets its own limit slider, freeze toggle, and status chip on the card list — so control is always one tap away, not buried in sub-menus.",
      image: assets.work.additionals.screens[1],
    },
    {
      index: 3,
      total: 3,
      title: "Filtered statements & consumption by card",
      body: "Titulars filter transactions by card from the main dashboard, with per-card summaries that make household spending accountable without spreadsheet work.",
      image: assets.work.additionals.screens[2],
      captions: ["Card switcher inside transaction history", "Per-card spending summary for titulars"],
    },
  ],
  reflections: [
    {
      title: "Design for the person who pays",
      body: "The titular is the real user of the management UI — their peace of mind is the product.",
    },
    {
      title: "Limits need context",
      body: "A number without examples ('≈ 3 supermarket trips') is hard to trust.",
    },
    {
      title: "Freeze is a brand moment",
      body: "Instant freeze should feel as reliable as instant pay — it's a security promise.",
    },
  ],
  nextSteps: [
    {
      title: "Spending alerts per additional",
      body: "Push notifications when an additional approaches their limit.",
    },
    {
      title: "Qik Pro additional cards",
      body: "Extend the same control patterns to Qik Pro adicionales.",
    },
  ],
  closing: "One account. Several cards. Zero guesswork.",
  heroMedia: {
    desktop: assets.work.additionals.desktop,
    mobile: assets.work.additionals.mobile,
    alt: "Qik additional credit cards design",
  },
};

export const caseStudies: CaseStudy[] = [qikPro, createCredit, additionals];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
