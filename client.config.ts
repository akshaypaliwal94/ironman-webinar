// ─────────────────────────────────────────────────────────────────────────────
// CLIENT CONFIG — fill this file for every new client
// Source of truth for all client-specific content across the funnel
// ─────────────────────────────────────────────────────────────────────────────

export interface WhoCard {
  icon: string;
  title: string;
  points: string[];
  footer: string;
}

export interface BlueprintStep {
  side: "left" | "right";
  icon: string;
  step: string;
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface NextStep {
  title: string;
  desc: string;
}

export const clientConfig = {
  // ── Metadata ──────────────────────────────────────────────────────────────
  meta: {
    title: "[CLIENT_NAME] — [EVENT_TYPE] Webinar",
    description: "[META_DESCRIPTION]",
    ogTitle: "[OG_TITLE]",
    ogDescription: "[OG_DESCRIPTION]",
  },

  // ── Brand / Footer ────────────────────────────────────────────────────────
  brand: {
    name: "[CLIENT_BRAND_NAME]",
    instagramUrl: "#",
    youtubeUrl: "#",
    whatsappUrl: "#",
    copyrightYear: "[YEAR]",
  },

  // ── Event ─────────────────────────────────────────────────────────────────
  event: {
    dateDisplay: "[EVENT_DATE]",           // e.g. "5th April 2026"
    timeDisplay: "[EVENT_TIME] [TIMEZONE]", // e.g. "11:00 AM IST"
    platform: "[PLATFORM]",               // e.g. "Live Zoom Session"
    countdownTarget: "[EVENT_DATETIME_ISO]", // e.g. "2026-04-05T05:30:00Z"
    thankYouCommunityUrl: "#",
  },

  // ── Pricing ───────────────────────────────────────────────────────────────
  pricing: {
    currency: "[CURRENCY_SYMBOL]",   // e.g. "₹"
    priceNow: "[PRICE_NOW]",         // e.g. "97"
    priceWas: "[PRICE_WAS]",         // e.g. "999"
    seatsTotal: 12,
  },

  // ── Audience Popup ────────────────────────────────────────────────────────
  popup: {
    eyebrow: "[POPUP_EYEBROW]",
    headline: "[POPUP_HEADLINE]",
    option1: {
      icon: "[OPTION_1_ICON]",
      title: "[OPTION_1_TITLE]",
      sub: "[OPTION_1_SUB]",
      route: "/[FUNNEL_1_SLUG]",
    },
    option2: {
      icon: "[OPTION_2_ICON]",
      title: "[OPTION_2_TITLE]",
      sub: "[OPTION_2_SUB]",
      route: "/[FUNNEL_2_SLUG]",
    },
    footer: "[POPUP_FOOTER]",
  },

  // ── Coaches ───────────────────────────────────────────────────────────────
  coaches: {
    primary: {
      name: "[COACH_1_NAME]",
      title: "[COACH_1_TITLE]",
      actionImage: "/coach1-action.png",
      bio: [
        "[COACH_1_BIO_P1]",
        "[COACH_1_BIO_P2]",
        "[COACH_1_BIO_P3]",
        "[COACH_1_BIO_P4]",
        "[COACH_1_BIO_P5]",
      ],
      credentials: [
        "[COACH_1_CREDENTIAL_1]",
        "[COACH_1_CREDENTIAL_2]",
        "[COACH_1_CREDENTIAL_3]",
        "[COACH_1_CREDENTIAL_4]",
      ],
    },
    secondary: {
      name: "[COACH_2_NAME]",
      title: "[COACH_2_TITLE]",
      image: "/coach2.png",
      eyebrow: "[COACH_2_EYEBROW]",
      quote: "[COACH_2_QUOTE]",
      credentials: [
        "[COACH_2_CREDENTIAL_1]",
        "[COACH_2_CREDENTIAL_2]",
        "[COACH_2_CREDENTIAL_3]",
      ],
    },
  },

  // ── Thank-You Page ────────────────────────────────────────────────────────
  thankYou: {
    headline: "[THANK_YOU_HEADLINE]",
    steps: [
      { title: "[NEXT_STEP_1_TITLE]", desc: "[NEXT_STEP_1_DESC]" },
      { title: "[NEXT_STEP_2_TITLE]", desc: "[NEXT_STEP_2_DESC]" },
      { title: "[NEXT_STEP_3_TITLE]", desc: "[NEXT_STEP_3_DESC]" },
    ] as NextStep[],
    communityBoxTitle: "[COMMUNITY_BOX_TITLE]",
    communityBoxBody: "[COMMUNITY_BOX_BODY]",
    communityCtaText: "[COMMUNITY_CTA_TEXT]",
    communityHeroCtaText: "[COMMUNITY_HERO_CTA_TEXT]",
    communityHeroNote: "[COMMUNITY_HERO_NOTE]",
    communityNote: "[COMMUNITY_NOTE]",
    bottomNote: "[THANK_YOU_BOTTOM_NOTE]",
  },

  // ── Funnel 1 ──────────────────────────────────────────────────────────────
  funnel1: {
    slug: "[FUNNEL_1_SLUG]",
    pill: "[FUNNEL_1_PILL_TEXT]",
    heroH1Line1: "[FUNNEL_1_HERO_HEADLINE_LINE_1]",
    heroH1Accent: "[FUNNEL_1_HERO_HEADLINE_ACCENT]",
    heroChallengeLine: "[FUNNEL_1_CHALLENGE_LINE]",
    heroBodyCopy: "[FUNNEL_1_BODY_COPY]",
    heroImage: "/coach1.png",
    heroImageAlt: "[FUNNEL_1_HERO_IMAGE_ALT]",
    heroPersonName: "[FUNNEL_1_HERO_PERSON_NAME]",
    heroPersonSub: "[FUNNEL_1_HERO_PERSON_SUB]",
    socialProof1: "[SOCIAL_PROOF_LINE_1]",
    socialProof2: "[SOCIAL_PROOF_LINE_2]",
    whoHeadline: "[WHO_SECTION_HEADLINE]",
    whoSubline: "Read the one that sounds like you",
    whoCard1: {
      icon: "[WHO_CARD_1_ICON]",
      title: "[WHO_CARD_1_TITLE]",
      points: [
        "[WHO_CARD_1_POINT_1]",
        "[WHO_CARD_1_POINT_2]",
        "[WHO_CARD_1_POINT_3]",
        "[WHO_CARD_1_POINT_4]",
        "[WHO_CARD_1_POINT_5]",
      ],
      footer: "[WHO_CARD_1_FOOTER]",
    } as WhoCard,
    whoCard2: {
      icon: "[WHO_CARD_2_ICON]",
      title: "[WHO_CARD_2_TITLE]",
      points: [
        "[WHO_CARD_2_POINT_1]",
        "[WHO_CARD_2_POINT_2]",
        "[WHO_CARD_2_POINT_3]",
        "[WHO_CARD_2_POINT_4]",
        "[WHO_CARD_2_POINT_5]",
      ],
      footer: "[WHO_CARD_2_FOOTER]",
    } as WhoCard,
    whoClosingText: "[WHO_CLOSING_TEXT]",
    whoClosingAccent: "[WHO_CLOSING_ACCENT]",
    blueprintHeadline: "[BLUEPRINT_HEADLINE]",
    blueprintSub: "[BLUEPRINT_SUBHEADLINE]",
    blueprintSteps: [
      { side: "left",  icon: "🎯", step: "Step 1", title: "[STEP_1_TITLE]", desc: "[STEP_1_DESC]" },
      { side: "right", icon: "📋", step: "Step 2", title: "[STEP_2_TITLE]", desc: "[STEP_2_DESC]" },
      { side: "left",  icon: "⚡", step: "Step 3", title: "[STEP_3_TITLE]", desc: "[STEP_3_DESC]" },
      { side: "right", icon: "🌡️", step: "Step 4", title: "[STEP_4_TITLE]", desc: "[STEP_4_DESC]" },
      { side: "left",  icon: "🏅", step: "Step 5", title: "[STEP_5_TITLE]", desc: "[STEP_5_DESC]" },
    ] as BlueprintStep[],
    faqs: [
      { q: "[FAQ_1_QUESTION]", a: "[FAQ_1_ANSWER]" },
      { q: "[FAQ_2_QUESTION]", a: "[FAQ_2_ANSWER]" },
      { q: "[FAQ_3_QUESTION]", a: "[FAQ_3_ANSWER]" },
      { q: "[FAQ_4_QUESTION]", a: "[FAQ_4_ANSWER]" },
      { q: "[FAQ_5_QUESTION]", a: "[FAQ_5_ANSWER]" },
      { q: "[FAQ_6_QUESTION]", a: "[FAQ_6_ANSWER]" },
      { q: "[FAQ_7_QUESTION]", a: "[FAQ_7_ANSWER]" },
      { q: "[FAQ_8_QUESTION]", a: "[FAQ_8_ANSWER]" },
    ] as FaqItem[],
    thankYouSubheadline: "[FUNNEL_1_THANK_YOU_SUBHEADLINE]",
  },

  // ── Funnel 2 ──────────────────────────────────────────────────────────────
  funnel2: {
    slug: "[FUNNEL_2_SLUG]",
    pill: "[FUNNEL_2_PILL_TEXT]",
    heroH1Main: "[FUNNEL_2_HERO_HEADLINE_MAIN]",
    heroH1AnimatedText: "[FUNNEL_2_HERO_ANIMATED_TEXT]",
    heroChallengeLine: "[FUNNEL_2_CHALLENGE_LINE]",
    heroBodyCopy: "[FUNNEL_2_BODY_COPY]",
    heroImage: "/coach1.png",
    heroImageAlt: "[FUNNEL_2_HERO_IMAGE_ALT]",
    heroPersonName: "[FUNNEL_2_HERO_PERSON_NAME]",
    heroPersonSub: "[FUNNEL_2_HERO_PERSON_SUB]",
    socialProof1: "[SOCIAL_PROOF_LINE_1]",
    socialProof2: "[SOCIAL_PROOF_LINE_2]",
    whoHeadline: "[WHO_SECTION_HEADLINE]",
    whoSubline: "Read the one that sounds like you",
    whoCard1: {
      icon: "[WHO_CARD_1_ICON]",
      title: "[WHO_CARD_1_TITLE]",
      points: [
        "[WHO_CARD_1_POINT_1]",
        "[WHO_CARD_1_POINT_2]",
        "[WHO_CARD_1_POINT_3]",
        "[WHO_CARD_1_POINT_4]",
        "[WHO_CARD_1_POINT_5]",
      ],
      footer: "[WHO_CARD_1_FOOTER]",
    } as WhoCard,
    whoCard2: {
      icon: "[WHO_CARD_2_ICON]",
      title: "[WHO_CARD_2_TITLE]",
      points: [
        "[WHO_CARD_2_POINT_1]",
        "[WHO_CARD_2_POINT_2]",
        "[WHO_CARD_2_POINT_3]",
        "[WHO_CARD_2_POINT_4]",
        "[WHO_CARD_2_POINT_5]",
      ],
      footer: "[WHO_CARD_2_FOOTER]",
    } as WhoCard,
    whoClosingText: "[WHO_CLOSING_TEXT]",
    whoClosingAccent: "[WHO_CLOSING_ACCENT]",
    blueprintHeadline: "[BLUEPRINT_HEADLINE]",
    blueprintSub: "[BLUEPRINT_SUBHEADLINE]",
    blueprintSteps: [
      { side: "left",  icon: "🎯", step: "Step 1", title: "[STEP_1_TITLE]", desc: "[STEP_1_DESC]" },
      { side: "right", icon: "📋", step: "Step 2", title: "[STEP_2_TITLE]", desc: "[STEP_2_DESC]" },
      { side: "left",  icon: "⚡", step: "Step 3", title: "[STEP_3_TITLE]", desc: "[STEP_3_DESC]" },
      { side: "right", icon: "🌡️", step: "Step 4", title: "[STEP_4_TITLE]", desc: "[STEP_4_DESC]" },
      { side: "left",  icon: "🏅", step: "Step 5", title: "[STEP_5_TITLE]", desc: "[STEP_5_DESC]" },
    ] as BlueprintStep[],
    faqs: [
      { q: "[FAQ_1_QUESTION]", a: "[FAQ_1_ANSWER]" },
      { q: "[FAQ_2_QUESTION]", a: "[FAQ_2_ANSWER]" },
      { q: "[FAQ_3_QUESTION]", a: "[FAQ_3_ANSWER]" },
      { q: "[FAQ_4_QUESTION]", a: "[FAQ_4_ANSWER]" },
      { q: "[FAQ_5_QUESTION]", a: "[FAQ_5_ANSWER]" },
      { q: "[FAQ_6_QUESTION]", a: "[FAQ_6_ANSWER]" },
      { q: "[FAQ_7_QUESTION]", a: "[FAQ_7_ANSWER]" },
    ] as FaqItem[],
    thankYouSubheadline: "[FUNNEL_2_THANK_YOU_SUBHEADLINE]",
  },
};
