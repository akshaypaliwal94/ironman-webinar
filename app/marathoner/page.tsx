"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Countdown from "@/components/Countdown";
import ScrollReveal from "@/components/ScrollReveal";
import FunnelPopup from "@/components/FunnelPopup";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import { useTickets } from "@/contexts/TicketContext";

// ── SVG icons (reused from Hero) ──────────────────────────────────────────
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

// ── Blueprint steps ───────────────────────────────────────────────────────
const steps = [
  {
    side: "left",
    icon: "🎯",
    step: "Step 1",
    title: "Are You Ready for Ironman Goa 70.3?",
    desc: "An honest assessment of your current swim, bike, and run baseline — and exactly what needs to happen between today and race day.",
  },
  {
    side: "right",
    icon: "📋",
    step: "Step 2",
    title: "The 10-Month Training Structure That Actually Works",
    desc: "A periodised build — technique first, endurance second, race simulation third — designed around your real life and Goa's conditions.",
  },
  {
    side: "left",
    icon: "⚡",
    step: "Step 3",
    title: "The Three Skills That Separate Finishers From Racers",
    desc: "Swim technique, cycling cadence, run drills. These aren't fitness gains — they're time gains.",
  },
  {
    side: "right",
    icon: "🌡️",
    step: "Step 4",
    title: "Race-Day Pacing & Nutrition for Indian Conditions",
    desc: "The nutrition protocol that keeps you running at kilometre 18 when everyone around you is walking. Built for Goa's heat.",
  },
  {
    side: "left",
    icon: "🏅",
    step: "Step 5",
    title: "Your Sub-6 Game Plan — Live Q&A with Satyam & Mitch",
    desc: "Satyam and Mitch map out your specific path live. You leave knowing exactly what to do from tomorrow.",
  },
] as const;

// ── FAQ data ──────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Will this webinar be live or pre-recorded?",
    a: <>This webinar is <strong>100% Live.</strong> No recordings, no replays. Your ₹97 ticket is for the live session only — Satyam and Mitch will be in the room answering questions in real time.</>,
  },
  {
    q: "I've never done a triathlon before. Is this too advanced for me?",
    a: <>Not at all. If you can swim 25m, ride a bike, and run 3–5km, you have everything you need to start. This webinar covers both first-timers and returning athletes — there&apos;s a <strong>clear path for both.</strong></>,
  },
  {
    q: "I'm already a triathlete. Will this be too basic for me?",
    a: <>No. The system covers <strong>VO2 zone training, brick sessions, race-day pacing, and Goa-specific nutrition</strong> — all built around getting you to Sub-6. If you&apos;ve been stuck at 6–8 hours, this is exactly where you need to be.</>,
  },
  {
    q: "How do I join the webinar?",
    a: <>Once you register, you&apos;ll receive a Zoom link on <strong>WhatsApp and email.</strong> Join from any device — phone, tablet, or laptop.</>,
  },
  {
    q: "Can I ask questions during the session?",
    a: <>Yes. The final segment is a <strong>live Q&A with Satyam and Mitch</strong> where you can ask anything specific to your training, timeline, or race goals.</>,
  },
  {
    q: "Why is the ticket only ₹97?",
    a: <>The ₹97 ensures only serious, committed athletes are in the room. It keeps the session focused, the Q&A valuable, and the energy high. If you attend and feel it wasn&apos;t worth it, <strong>we&apos;ll refund every rupee — no questions asked.</strong></>,
  },
  {
    q: "What exactly will I walk away with?",
    a: <>A complete race blueprint — your pacing strategy, nutrition framework, 10-month training structure, and a personalised path to Ironman Goa 70.3. <strong>Not notes. An actual plan</strong> you can act on the next morning.</>,
  },
];

// ── Page ──────────────────────────────────────────────────────────────────
export default function MarathonerPage() {
  const tickets = useTickets();

  // Blueprint scroll animation
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState<number>(-1);

  useEffect(() => {
    const updateLine = () => {
      if (!timelineRef.current || !lineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const progress = Math.min(
        Math.max((window.innerHeight * 0.65 - rect.top) / rect.height, 0),
        1
      );
      lineRef.current.style.height = `${progress * 100}%`;
      const lineTipY = rect.top + progress * rect.height;
      let current = -1;
      iconRefs.current.forEach((icon, i) => {
        if (!icon) return;
        const r = icon.getBoundingClientRect();
        if (lineTipY >= r.top + r.height / 2 - 10) current = i;
      });
      setActiveStep(current);
    };
    window.addEventListener("scroll", updateLine, { passive: true });
    updateLine();
    return () => window.removeEventListener("scroll", updateLine);
  }, []);

  // FAQ accordion
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <main className="has-sticky-cta">
      <ScrollReveal />
      <FunnelPopup />

      {/* ════════════════════════════════════════════════ HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="pill reveal">For Triathletes, Marathoners &amp; Endurance Athletes</div>

          <h1 className="hero-h1 reveal" style={{ fontSize: "clamp(38px, 5vw, 72px)" }}>
            Crush Your First or Next Ironman —<br />
            <AnimatedText
              text="Goa 70.3 in Sub-6 Hours"
              strokeColor="var(--red)"
              strokeWidth={3}
              underlineDuration={1.4}
              underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
              underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
              style={{ color: "var(--red)" }}
            />
          </h1>

          <p className="challenge-line reveal">
            Without guessing your training, gambling your pacing, or dying 10km from the finish
          </p>

          <p className="body-copy reveal">
            In one 3-hour webinar, a{" "}
            <strong>17× Ironman finisher</strong> hands you the complete race blueprint for Goa 70.3
            — the same Australian-coached system that most Indian athletes spend years trying to
            piece together on their own, and never quite get right.
          </p>

          <div className="social-proof reveal">
            <span>🇮🇳 Built by 17× Ironman — Satyam Sahai</span>
            <span className="sep">·</span>
            <span>🇦🇺 Verified by World #16 Ranked Ironman — Mitch</span>
          </div>

          <Countdown />

          <div className="hero-layout">
            <div className="person-wrap reveal">
              <Image
                src="/satyam-marathoner.png"
                alt="Satyam Sahai — 17× Ironman Finisher & Active CEO"
                fill
                style={{ objectFit: "contain", objectPosition: "center center" }}
                priority
              />
              <div className="person-badge">
                <span className="person-name">Satyam Sahai</span>
                <span className="person-sub">17× Ironman Finisher &amp; Active CEO</span>
              </div>
            </div>

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
            <a href="/thank-you?funnel=marathoner" className="cta">
              Grab Your Ticket Now <div className="cta-arrow">→</div>
            </a>
            <div className="guarantee">🛡️ 100% Money Back Guarantee — Zero Risk</div>
            <div className="urgency">
              🔥 Only <span className="urgency-num">{tickets}</span> tickets left — booking closes once full
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ WHO */}
      <section className="who-section">
        <div className="who-inner">
          <span className="section-label reveal">Who This Is For</span>
          <h2 className="section-headline reveal">This Webinar Is Built For You If —</h2>
          <p className="section-sub reveal">Read the one that sounds like you</p>

          <div className="who-grid">
            <div className="who-card reveal">
              <span className="who-card-icon">🏃</span>
              <div className="who-card-title">You&apos;re a Marathoner or Endurance Athlete</div>
              <ul className="who-list">
                {[
                  "You can swim 25m, ride a bike, and run 3–5km — not starting from zero, starting from ready",
                  "You've proven you can endure — now you want to test yourself against the biggest physical challenge of your life",
                  "The swim feels like the unknown and Ironman feels like a different universe",
                  "You don't know how to train three sports simultaneously without burning out",
                  "You're not perfect — maybe you drink socially, skip rest days — and you want someone who works with real life, not ideal conditions",
                ].map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
              <div className="who-card-footer">
                In 9–12 months, you can be crossing the finish line of your first Ironman 70.3. This webinar shows you exactly how.
              </div>
            </div>

            <div className="who-card reveal reveal-delay-2">
              <span className="who-card-icon">🏊</span>
              <div className="who-card-title">You&apos;re a Triathlete Leaving Time on the Course</div>
              <ul className="who-list">
                {[
                  "You've finished a 70.3 but the clock hasn't moved in seasons",
                  "Your swim is functional but bleeding energy you need for the bike and run",
                  "You go too hard on the bike and your run falls apart — every single time",
                  "You've never had your brick sessions, VO2 zones, and race-day pacing working as one system",
                  "Generic plans built for Western climates haven't accounted for Goa's heat — and you've felt it",
                ].map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
              <div className="who-card-footer">
                This webinar shows you exactly what&apos;s breaking your race and gives you the precise system to finally go Sub-6.
              </div>
            </div>
          </div>

          <div className="who-closing reveal">
            Different starting points.{" "}
            <span>One finish line. One webinar.</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ BLUEPRINT */}
      <section className="blueprint-section">
        <div className="blueprint-inner">
          <span className="section-label reveal">What We Cover</span>
          <h2 className="section-headline reveal">
            We&apos;ll Cover Your Complete <span className="accent">Race Blueprint</span> in 3 Hours
          </h2>
          <p className="section-sub reveal">
            Built specifically for athletes who want a <strong>real result</strong> — not just another finish.
          </p>

          <div className="timeline" ref={timelineRef}>
            <div className="timeline-line" ref={lineRef} />
            {steps.map((step, i) => (
              <div className={`t-row ${step.side} reveal`} key={i}>
                {step.side === "left" ? (
                  <>
                    <div className="t-content">
                      <div className="t-step-label">{step.step}</div>
                      <div className="t-title">{step.title}</div>
                      <p className="t-desc">{step.desc}</p>
                    </div>
                    <div
                      className={`t-icon${activeStep === i ? " t-icon--active" : ""}`}
                      ref={(el) => { iconRefs.current[i] = el; }}
                    >
                      {step.icon}
                    </div>
                    <div className="t-empty" />
                  </>
                ) : (
                  <>
                    <div className="t-empty" />
                    <div
                      className={`t-icon${activeStep === i ? " t-icon--active" : ""}`}
                      ref={(el) => { iconRefs.current[i] = el; }}
                    >
                      {step.icon}
                    </div>
                    <div className="t-content">
                      <div className="t-step-label">{step.step}</div>
                      <div className="t-title">{step.title}</div>
                      <p className="t-desc">{step.desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="cta-block reveal">
            <div className="price-row">
              <span className="price-was">₹999</span>
              <span className="price-badge">Today Only</span>
              <span className="price-now">₹97</span>
            </div>
            <a href="/thank-you?funnel=marathoner" className="cta">
              Grab Your Ticket Now <div className="cta-arrow">→</div>
            </a>
            <div className="guarantee">🛡️ 100% Money Back Guarantee — Zero Risk</div>
            <div className="urgency">
              🔥 Only <span className="urgency-num">{tickets}</span> tickets left — booking closes once full
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ COACHES */}
      <section className="coach-section">
        <div className="coach-inner">
          <span className="section-label reveal">Meet Your Coach</span>
          <h2 className="section-headline reveal" style={{ marginBottom: 48 }}>
            The People Behind Your <span className="accent">Race Blueprint</span>
          </h2>

          {/* Satyam */}
          <div className="satyam-layout">
            <div className="satyam-img-wrap reveal">
              <Image
                src="/satyam2.png"
                alt="Satyam Sahai at Ironman finish line"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div className="satyam-content reveal reveal-delay-2">
              <div className="coach-name">Satyam Sahai</div>
              <div className="coach-title">17× Ironman Finisher · Entrepreneur · Active CEO</div>
              <div className="coach-divider" />
              <div className="coach-bio">
                <p>I didn&apos;t start as an athlete. At 30, I was overweight, running a business, and had never run more than a kilometre in my life.</p>
                <p>What started as a desperate attempt to get fit turned into a marathon. Then a triathlon. Then Ironman. Then 17 of them.</p>
                <p>Today at 49, I run a company and train daily. I&apos;ve built a system that works around the reality of a demanding life — not despite it.</p>
                <p>I&apos;ve seen what breaks Indian athletes on race day — not lack of effort, but lack of the right structure. Wrong pacing. Wrong nutrition. Wrong plan for the wrong climate. I&apos;ve made every one of those mistakes myself. And I&apos;ve spent years building the system that fixes them.</p>
                <p>This webinar is that system — handed directly to you.</p>
              </div>
              <div className="coach-pills">
                {["🏅 17× Ironman Finisher", "🇮🇳 Former Mr. India", "💼 Active CEO", "🎯 Ironman Goa 70.3"].map(
                  (pill) => <span className="coach-pill" key={pill}>{pill}</span>
                )}
              </div>
            </div>
          </div>

          {/* Mitch */}
          <div className="mitch-block reveal">
            <div className="mitch-img-wrap">
              <Image
                src="/mitch.png"
                alt="Mitch Kibby"
                width={180}
                height={180}
                style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "100%" }}
              />
            </div>
            <div className="mitch-content">
              <div className="mitch-eyebrow">The Coaching Science Behind the System</div>
              <div className="mitch-name">Mitch Kibby</div>
              <div className="mitch-title">Professional Triathlete · Director, i4 Coaching Australia</div>
              <p className="mitch-quote">
                &ldquo;Satyam&apos;s training methodology is built on the same Australian coaching system I&apos;ve used with professional and amateur athletes globally. What makes it unique for Indian athletes is how it&apos;s been adapted for real-life schedules, Indian race conditions, and the specific demands of Ironman Goa 70.3. Everything taught in this webinar is grounded in sport science — and I&apos;ll be in the room to answer your questions live.&rdquo;
              </p>
              <div className="mitch-pills">
                {[
                  "🇦🇺 World #16 Ranked Ironman",
                  "🏆 Director i4 Coaching Australia",
                  "⏱️ 12 Years as a Pro Triathlete",
                ].map((pill) => <span className="mitch-pill" key={pill}>{pill}</span>)}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-block reveal">
            <div className="price-row">
              <span className="price-was">₹999</span>
              <span className="price-badge">Today Only</span>
              <span className="price-now">₹97</span>
            </div>
            <a href="/thank-you?funnel=marathoner" className="cta">
              Grab Your Ticket Now <div className="cta-arrow">→</div>
            </a>
            <div className="guarantee">🛡️ 100% Money Back Guarantee — Zero Risk</div>
            <div className="urgency">
              🔥 Only <span className="urgency-num">{tickets}</span> tickets left — booking closes once full
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ FAQ */}
      <section className="faq-section">
        <div className="faq-inner">
          <h2 className="faq-headline reveal">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div className={`faq-item${isOpen ? " open" : ""}`} key={i}>
                  <button className="faq-question" onClick={() => toggle(i)} aria-expanded={isOpen}>
                    {faq.q}
                    <div className="faq-icon">{isOpen ? "−" : "+"}</div>
                  </button>
                  <div className="faq-answer">{faq.a}</div>
                </div>
              );
            })}
          </div>

          <div className="faq-cta-wrap reveal">
            <div className="price-row">
              <span className="price-was">₹999</span>
              <span className="price-badge">Today Only</span>
              <span className="price-now">₹97</span>
            </div>
            <a href="/thank-you?funnel=marathoner" className="cta">
              Grab Your Ticket Now <div className="cta-arrow">→</div>
            </a>
            <div className="guarantee">🛡️ 100% Money Back Guarantee — Zero Risk</div>
            <div className="urgency">
              🔥 Only <span className="urgency-num">{tickets}</span> tickets left — booking closes once full
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <MobileCTABar funnel="marathoner" />
    </main>
  );
}
