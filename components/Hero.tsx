"use client";

import Image from "next/image";
import Countdown from "./Countdown";
import ScrollReveal from "./ScrollReveal";
import { useTickets } from "@/contexts/TicketContext";

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
  { icon: <CalendarIcon />, label: "Date", value: "5th April 2026", delay: "reveal-delay-1" },
  { icon: <ClockIcon />, label: "Time", value: "11:00 AM IST", delay: "reveal-delay-2" },
  { icon: <ChatIcon />, label: "Venue", value: "Live Zoom Session", delay: "reveal-delay-3" },
  { icon: <UsersIcon />, label: "Hosts", value: "Satyam & Mitch", delay: "reveal-delay-4" },
];

export default function Hero() {
  const tickets = useTickets();
  return (
    <section className="hero">
      <ScrollReveal />
      <div className="hero-inner">
        <div className="pill reveal">For Entrepreneurs &amp; Senior Executives</div>

        <h1 className="hero-h1 reveal">
          Elite in Business.<br />
          <span className="accent">Mediocre in Stamina, Strength &amp; Grit?</span>
        </h1>

        <p className="challenge-line reveal">
          Challenge Yourself to Conquer Ironman 70.3 — Even If You&apos;ve Never Run a Marathon.
        </p>

        <p className="body-copy reveal">
          In one 3-hour webinar, a{" "}
          <strong>17× Ironman finisher and active CEO</strong> hands you the exact system he built
          to conquer the world&apos;s toughest endurance race — while running a company. The same
          elite-level blueprint most executives never access, because{" "}
          <strong>nobody ever designed one around a schedule like yours.</strong>
        </p>

        <div className="social-proof reveal">
          <span>🇮🇳 Built by 17× Ironman — Satyam Sahai</span>
          <span className="sep">·</span>
          <span>🇦🇺 Verified by World #16 Ranked Ironman — Mitch</span>
        </div>

        <Countdown />

        <div className="hero-layout">
          {/* Photo */}
          <div className="person-wrap reveal">
            <Image
              src="/satyam.png"
              alt="Satyam Sahai — 17× Ironman Finisher & Active CEO"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
            <div className="person-badge">
              <span className="person-name">Satyam Sahai</span>
              <span className="person-sub">17× Ironman Finisher &amp; Active CEO</span>
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
            <span className="price-was">₹999</span>
            <span className="price-badge">Today Only</span>
            <span className="price-now">₹97</span>
          </div>
          <a href="/thank-you?funnel=executive" className="cta">
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
