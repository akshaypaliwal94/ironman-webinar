"use client";

import Image from "next/image";
import Countdown from "./Countdown";
import ScrollReveal from "./ScrollReveal";
import { useTickets } from "@/contexts/TicketContext";
import { clientConfig } from "@/client.config";

const { funnel1, event, pricing } = clientConfig;

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const ChatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const metaCards = [
  { icon: <CalendarIcon />, label: "Date",  value: event.dateDisplay, delay: "reveal-delay-1" },
  { icon: <ClockIcon />,    label: "Time",  value: event.timeDisplay, delay: "reveal-delay-2" },
  { icon: <ChatIcon />,     label: "Venue", value: event.platform,    delay: "reveal-delay-3" },
  { icon: <UsersIcon />,    label: "Hosts", value: funnel1.heroPersonName, delay: "reveal-delay-4" },
];

export default function Hero() {
  const tickets = useTickets();
  return (
    <section className="hero">
      <ScrollReveal />
      <div className="hero-inner">
        <div className="pill reveal">{funnel1.pill}</div>

        <h1 className="hero-h1 reveal">
          {funnel1.heroH1Line1}<br />
          <span className="accent">{funnel1.heroH1Accent}</span>
        </h1>

        <p className="challenge-line reveal">{funnel1.heroChallengeLine}</p>

        <p className="body-copy reveal">{funnel1.heroBodyCopy}</p>

        <div className="social-proof reveal">
          <span>{funnel1.socialProof1}</span>
          <span className="sep">·</span>
          <span>{funnel1.socialProof2}</span>
        </div>

        <Countdown />

        <div className="hero-layout">
          {/* Photo */}
          <div className="person-wrap reveal">
            <Image
              src={funnel1.heroImage}
              alt={funnel1.heroImageAlt}
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
            <div className="person-badge">
              <span className="person-name">{funnel1.heroPersonName}</span>
              <span className="person-sub">{funnel1.heroPersonSub}</span>
            </div>
          </div>

          {/* Meta cards */}
          <div className="meta-grid">
            {metaCards.map((card) => (
              <div className={`meta-card reveal ${card.delay}`} key={card.label}>
                <div className="meta-icon-wrap">{card.icon}</div>
                <div className="meta-label">{card.label}</div>
                <div className="meta-value">{card.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-cta-block reveal">
          <div className="price-row">
            <span className="price-was">{pricing.currency}{pricing.priceWas}</span>
            <span className="price-badge">Today Only</span>
            <span className="price-now">{pricing.currency}{pricing.priceNow}</span>
          </div>
          <a href={`/thank-you?funnel=${funnel1.slug}`} className="cta">
            Grab Your Ticket Now <div className="cta-arrow">→</div>
          </a>
          <div className="guarantee">🛡️ 100% Money Back Guarantee — Zero Risk</div>
          <div className="urgency">
            🔥 Only <span className="urgency-num">{tickets}</span> tickets left — booking closes once full
          </div>
        </div>
      </div>
    </section>
  );
}
