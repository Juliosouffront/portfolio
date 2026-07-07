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

/** Slide 1 — Qik PRO premium ecosystem (qik.do/pro) */
const qikPro: CaseStudy = {
  slug: "qik-pro",
  name: "Qik PRO",
  themeColor: "#0c1f4a",
  heroTitle: "“Qik was the bank I needed 10 years ago.”",
  tags: ["0 to 1", "Product Design", "Design Systems", "Shipped", "Qik PRO"],
  description:
    "At first, we thought Miguel was talking about simplicity. But after asking why, we discovered something deeper — and a question that shaped Qik PRO: How can Qik continue to grow with customers as their needs evolve?",
  meta: [
    { label: "surface", value: "Qik mobile app · Qik PRO ecosystem" },
    { label: "role", value: "Product Designer · Qik Banco Digital" },
    { label: "team members", value: "Product · Marketing · Technology · Business" },
    { label: "scope", value: "0 to 1 UX/UI · Premium tier · Brand touchpoints · Cross-functional alignment" },
  ],
  summary: [
    {
      label: "Problem",
      title: "Customers wanted a bank that reflected who they had become",
      body: "As customers became more financially experienced, they wanted more recognition, relevant benefits, and experiences that matched their lifestyle — without a more complicated bank.",
    },
    {
      label: "Solution",
      title: "Premium banking without losing simplicity",
      body: "We built Qik PRO as an experience for professionals that feels valuable and personalized, while keeping Qik's accessibility and human approach.",
    },
    {
      label: "Result",
      title: "More than a premium card",
      body: "Qik PRO became one of the strongest-performing products in the bank — with exceptional satisfaction, sustained utilization, and recognition from two international technology impact awards.",
    },
  ],
  impact: [
    {
      value: "75",
      label: "Net Promoter Score",
      footnote: "Exceptional customer satisfaction",
    },
    {
      value: "127%",
      label: "Transaction value lift",
      footnote: "Compared to the regular card base",
    },
    {
      value: "$13.6M",
      label: "Incremental deposits",
      footnote: "Generated through the Qik PRO ecosystem",
    },
  ],
  sections: [
    {
      id: "opening",
      label: "Qik PRO",
      title: "“Qik was the bank I needed 10 years ago.”",
      body: [
        "— Miguel",
        "At first, we thought Miguel was talking about simplicity.",
        "But after asking why, we discovered something deeper.",
        "Qik gave him a better way to understand money. It was human, approachable, and built for learning.",
        "But Miguel was in a different stage of life. He was no longer learning about finance. He was already confident. He was already a professional.",
        "And that raised a question: How can Qik continue to grow with customers as their needs evolve?",
      ],
    },
    {
      id: "problem",
      label: "The problem",
      title: "Customers wanted a bank that reflected who they had become.",
      body: [
        "Qik helped people build financial confidence with a simple and human experience.",
        "But as customers became more financially experienced, they started looking for more: more recognition, more relevant benefits, and more experiences that matched their lifestyle.",
        "They didn't want a more complicated bank. They wanted a bank that understood their next stage.",
      ],
    },
    {
      id: "challenge",
      label: "The challenge",
      title: "Create premium banking without losing simplicity.",
      body: [
        "How might we build an experience for professionals that feels valuable and personalized, while keeping Qik's accessibility and human approach?",
      ],
    },
    {
      id: "insight",
      label: "The insight",
      title: "Premium is not about status. It is about confidence.",
      body: [
        "Through research, we discovered that our customers didn't define themselves by wealth. They defined themselves by what they do.",
        "They are professionals. Travelers. Creators. Builders.",
        "Being \"Pro\" was not just a product tier. It was a mindset.",
      ],
    },
    {
      id: "opportunity",
      label: "The opportunity",
      title: "Redefining what premium banking means.",
      body: [
        "The market had two extremes: traditional premium banking offered status, but often lacked relevance. Reward-based products offered benefits, but many customers struggled to use them.",
        "The opportunity was clear: create a premium experience built around real life, not just financial status.",
      ],
    },
    {
      id: "building",
      label: "Building the experience",
      title: "Creating together.",
      body: [
        "Qik PRO was not just a product design project. It required alignment across product, marketing, technology, and business.",
        "Through workshops and collaboration, teams helped shape the experience and created ownership from the beginning. This allowed us to move faster, reduce friction, and build a stronger product together.",
      ],
    },
    {
      id: "process",
      label: "The process",
      title: "From assumptions to customer truth.",
      body: [
        "We started by understanding the landscape — market benchmarks, competitor experiences, and international references.",
        "Then we listened to customers through user interviews, field research, and behavioral insights.",
        "Finally, we connected product experience, benefits, brand moments, and physical interactions into one unified Pro experience.",
      ],
    },
    {
      id: "impact-narrative",
      label: "The impact",
      title: "More than a premium card.",
      body: [
        "Qik PRO became one of the strongest-performing products in the bank.",
      ],
      bullets: [
        "NPS: 75 — exceptional customer satisfaction",
        "22–24% monthly card utilization sustained over 8 months",
        "Increased average customer ticket from RD$1,500 to RD$2,500",
        "127% transaction value lift compared to the regular card base",
        "$13.6M incremental deposits generated",
        "Winner of two international technology impact awards",
      ],
    },
    {
      id: "unexpected",
      label: "The unexpected outcome",
      title: "Design became the bridge.",
      body: [
        "The biggest impact went beyond the product.",
        "Design connected marketing and brand expression, technology and scalable systems, and business goals and customer needs.",
        "Qik PRO showed that a digital bank can evolve with its customers — helping them start their financial journey and creating experiences for where they go next.",
      ],
    },
  ],
  designFeatures: [
    {
      index: 1,
      total: 3,
      title: "Professionals don't have one routine",
      body: "Our customers were managing multiple parts of their lives — their careers, goals, families, and experiences. They didn't need more financial complexity. They needed a bank that understood their reality and made things simpler.",
      image: assets.work.qikPro.screens[0],
    },
    {
      index: 2,
      total: 3,
      title: "The journey matters as much as the destination",
      body: "Travel became a key opportunity. Customers cared about every moment — before, during, and after. We designed Qik PRO experiences around the complete journey, helping customers choose Qik as the card they actively use, not just another card they carry.",
      image: assets.work.qikPro.screens[1],
    },
    {
      index: 3,
      total: 3,
      title: "Being Pro should feel everywhere",
      body: "Customers don't separate products from experiences. The card, packaging, app, and communication — every interaction shapes how they perceive the brand. We translated the Pro feeling across every touchpoint, creating a consistent experience from the physical world to the digital one.",
      image: assets.work.qikPro.screens[2],
    },
  ],
  reflections: [
    {
      title: "Premium is a mindset",
      body: "Our customers didn't define themselves by wealth — they defined themselves by what they do. Pro had to reflect that confidence, not just a tier on a pricing page.",
    },
    {
      title: "Design became the bridge",
      body: "The biggest impact went beyond the product — design connected marketing, technology, and business around one customer truth.",
    },
    {
      title: "Growing with customers",
      body: "Qik PRO showed that a digital bank can evolve with its people — from their first financial steps to the life they build next.",
    },
  ],
  nextSteps: [],
  closing:
    "Qik was built to make banking simpler. Qik PRO was built to make banking evolve with people.",
  heroMedia: {
    desktop: assets.work.qikPro.banner,
    mobile: assets.work.qikPro.banner,
    alt: "Qik PRO case study banner",
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
