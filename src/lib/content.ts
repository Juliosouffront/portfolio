import { assets } from "./assets";

export const sectionLabels = {
  work: { text: "Work", color: "#ec75ad", bg: "#fff5fa" },
  play: { text: "Playground", color: "#409fff", bg: "#ffffff" },
  mentors: { text: "Mentors & Friends", color: "#018370", bg: "#fafffe" },
  about: { text: "About", color: "#fd4c22", bg: "#fcfcfc" },
} as const;

export const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Play", href: "/#play" },
  { label: "Mentors", href: "/#friends-mentors" },
  { label: "About", href: "/#about" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/juliosouffront/", external: true },
] as const;

export const hero = {
  title: "I'm Julio Souffront",
  subtitle: "A senior product designer with one goal,",
  subtitleLine2: "to build with an",
  subtitleHighlight: "unreasonable amount of care.",
  subtitleHighlightHref:
    "https://www.amazon.com/Unreasonable-Hospitality-Remarkable-Giving-People/dp/0593418573/ref=pd_bxgy_thbs_d_sccl_1/139-1189101-9674742?pd_rd_w=DETxN&content-id=amzn1.sym.dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_p=dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_r=A3N2DZJBN6KRJ8XE8BVY&pd_rd_wg=nzc7M&pd_rd_r=af5ec99c-341b-48ed-9061-44ba1e393cd6&pd_rd_i=0593418573&psc=1",
  cta: {
    label: "Let's Meet",
    href: "https://cal.com/juliosouffront/30min?user=juliosouffront",
  },
  portrait: assets.heroPortrait,
} as const;

export const work = {
  label: "Work",
  title: [
    { text: "Creating with " },
    { text: "purpose.", color: sectionLabels.work.color },
  ],
  description: "International award-winning products, built for people and their moments.",
  slides: [
    {
      id: "qik-pro",
      name: "Qik Pro",
      category: "0 to 1 · Product Design",
      description:
        "Qik Pro is the premium tier of Qik Banco Digital Dominicano — a neobank ecosystem with personalized cashback, preferential rates, Pro Agent support, and a Mastercard Platinum card with Artlight technology.",
      desktopImage: assets.work.qikPro.desktop,
      mobileImage: assets.work.qikPro.mobile,
      alt: "Qik Pro product design",
      vimeo: {
        id: "1179002856",
        url: "https://vimeo.com/1179002856",
        title: "Qik Pro",
      },
    },
    {
      id: "create-credit",
      name: "Crea Crédito",
      category: "Inclusion · Product Design",
      description:
        "Crea Crédito is Qik's secured-credit program for people creating, restoring, or strengthening their credit history — using a deposit-backed Qik credit card, in-app coaching, and a graduation path back to unlocked funds.",
      desktopImage: assets.work.createCredit.desktop,
      mobileImage: assets.work.createCredit.mobile,
      alt: "Create Credit product design",
    },
    {
      id: "additionals",
      name: "Tarjetas Adicionales",
      category: "Product Design · Credit Card",
      description:
        "Additional Qik credit cards let primary cardholders extend their account to family members — with per-card limits, freeze controls, and spending visibility, all managed from the app.",
      desktopImage: assets.work.additionals.desktop,
      mobileImage: assets.work.additionals.mobile,
      alt: "Additional product design work",
    },
  ],
  awards: assets.awards,
} as const;

export const play = {
  label: "Playground",
  title: [
    { text: "Start small. " },
    { text: "See big.", color: sectionLabels.play.color },
  ],
  description: {
    prefix: "A space to build",
    link: {
      text: "simple ideas",
      href: "https://www.youtube.com/watch?v=9uOMectkCCs&t=294s",
    },
    suffix: "that go a bit further.",
  },
  projects: [
    {
      id: "uncurrify",
      category: "App",
      title: "UnCurrify",
      description:
        "What if every price in the world felt familiar? Just point your camera at a menu, a tag, or a screen, and instantly see prices in your own currency no converting, no calculations, just understanding.",
      image: assets.play.uncurrify,
      mediaBg: "#7CA9DA",
      mediaPadding: "12px 32px",
      cta: { label: "View Proof of Concept", href: "https://www.instagram.com/p/C_6MkrfPuJe/" },
    },
    {
      id: "on-me",
      category: "AI Browser Extension",
      title: "On Me",
      description:
        "Every outfit looks good on the right person. Online shopping makes you judge clothes on someone else. Now you can see every piece on yourself and shop with confidence.",
      image: assets.play.onMe,
      mediaBg: "#dc59a0",
      mediaPadding: "64px 32px",
      cta: { label: "View Trailer", href: "https://www.instagram.com/p/DT5Nn59EV9F/?img_index=1" },
    },
    {
      id: "mates",
      category: "Physical, Game, Character & Interface Design",
      title: "Mates",
      description:
        "Cure boredom with your playful companion that pushes you and your friends to be more social, adventurous, curious, active, and spontaneous through fun side quests and shared real-world experiences.",
      image: assets.play.mates,
      mediaBg: "#f7cc3d",
      mediaPadding: "54px",
      cta: {
        label: "Buy Now",
        href: "https://mate-by-thewarmthco-nfc.netlify.app/",
      },
    },
    {
      id: "the-handoff",
      category: "Figma Plugin",
      title: "HandsOff",
      description:
        "Get your HandsOff the handoff process, it removes the messy, manual work of thinking, naming, and organizing screens, and turns it into a fast drag-and-drop flow that prepares clean handoffs for developers and analytics tools.",
      mediaBg: "#C8BCE5",
      mediaPadding: "0",
      cta: { label: "Coming Soon", href: null },
    },
    {
      id: "sos",
      category: "Outdoor Product Design",
      title: "Sky Orientation Scout",
      description:
        "A drone case you set on top when camping — a visible marker from above so you can find your spot and never get lost in the wild.",
      mediaBg: "#D15156",
      mediaPadding: "0",
      cta: { label: "Coming Soon", href: null },
    },
    {
      id: "present",
      category: "Packaging Design",
      title: "Present",
      description:
        "Wrapping became fast, disposable, and forgettable. But a present is more than what's inside, it's the moment itself, hence the word \"present.\" So I wanted to make wrapping feel personal, warm, and thoughtful again, while preserving the mystery of a gift.",
      image: assets.play.present,
      mediaBg: "#58aa9e",
      mediaPadding: "0",
      cta: { label: "Coming Soon", href: null },
    },
  ],
} as const;

export const mentors = {
  label: "Mentors & Friends",
  title: [
    { text: "Every creation is " },
    { text: "shared", color: sectionLabels.mentors.color },
  ],
  description:
    "Every product and experience carries the lessons of those around me, thanks to my family, friends, and mentors.",
  portrait: assets.mentors.portrait,
  community: assets.mentors.community,
  testimonials: [
    {
      id: "saulo",
      quote:
        "Wow. I just received my Qik Pro, along with a handwritten letter. Such a small gesture, yet it says so much. It's the kind of detail that truly sets them apart from everyone else.",
      author: "Saulo V.",
    },
    {
      id: "jose",
      quote:
        "I am a product of the Create Credit program and can personally testify to how effective it has been for me and my family.",
      author: "Jose A.",
    },
    {
      id: "mildres",
      quote:
        "I'm proof of it. Thanks for giving me the opportunity to rebuild my credit. I'll always be part of this.",
      author: "Mildres M.",
    },
    {
      id: "abraham",
      quote:
        "I'm living proof that this really works. It completely changed my finances. That's why I'll always be grateful 🙌❤️",
      author: "Abraham T.",
    },
  ],
} as const;

export const about = {
  label: "About",
  title: [
    { text: "Other ways " },
    { text: "I care", color: sectionLabels.about.color },
  ],
  description:
    "Outside of building, I try to show up where I can, volunteering, speaking at universities, and being out in the world around different people and perspectives.",
  image: assets.about.polaroid,
  quote: {
    segments: [
      {
        text: "Building something wonderful means creating with an unreasonable amount of ",
      },
      { text: "care", color: sectionLabels.about.color },
      { text: " and " },
      { text: "purpose", color: sectionLabels.work.color },
      { text: ", " },
      { text: "seeing big", color: sectionLabels.play.color },
      { text: " even when others don't yet, working toward a " },
      { text: "shared", color: sectionLabels.mentors.color },
      {
        text: " goal, and doing so in a way where, even if you never meet the person you're making it for, that care and love are somehow transmitted.",
      },
    ],
    attribution: "-S.J.",
  },
  footer: {
    headline: "Feel free to reach out, I'll always make time.",
    socialsLabel: "Socials",
    tagline: "Made with Warmth and Care.",
    handle: "All socials @juliosouffront",
    links: [
      {
        label: "Books I'm Reading",
        href: "https://www.goodreads.com/user/show/101307229-julio-souffront",
      },
      { label: "Gmail", href: "mailto:juliosouffront@gmail.com" },
      { label: "X (Twitter)", href: "https://x.com/juliosouffront" },
      { label: "Instagram", href: "https://www.instagram.com/juliosouffront/" },
    ],
  },
} as const;
