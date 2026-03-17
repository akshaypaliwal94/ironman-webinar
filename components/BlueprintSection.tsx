"use client";

import { useTickets } from "@/contexts/TicketContext";

const steps = [
  {
    side: "left",
    icon: "🎯",
    step: "Step 1",
    title: "Are You Ready for Ironman Goa 70.3?",
    desc: (
      <>
        An honest assessment designed for the executive athlete — your current baseline, your
        calendar, and a realistic training plan that{" "}
        <strong>doesn&apos;t require quitting your life</strong> to follow it.
      </>
    ),
  },
  {
    side: "right",
    icon: "📋",
    step: "Step 2",
    title: "The 10-Month Training Structure Built Around Your Schedule",
    desc: (
      <>
        A periodised build that works in <strong>60–90 minute daily windows.</strong> Technique
        first, endurance second, race simulation third — because you don&apos;t have three-hour
        training blocks.
      </>
    ),
  },
  {
    side: "left",
    icon: "⚡",
    step: "Step 3",
    title: "The Three Physical Skills That Transfer to Performance",
    desc: (
      <>
        Swim technique that conserves energy. Cycling efficiency that protects your run. Run drills
        that hold form under fatigue.{" "}
        <strong>
          The same skills that separate executives who finish strong from those who suffer through
          it.
        </strong>
      </>
    ),
  },
  {
    side: "right",
    icon: "🌡️",
    step: "Step 4",
    title: "Race-Day Strategy for Goa's Conditions",
    desc: (
      <>
        The exact pacing and nutrition protocol for a hot, humid race.{" "}
        <strong>No guesswork, no improvising</strong> — so your months of preparation don&apos;t
        fall apart on the day that matters most.
      </>
    ),
  },
  {
    side: "left",
    icon: "🏅",
    step: "Step 5",
    title: "Your Personal Race Plan — Live Q&A with Satyam & Mitch",
    desc: (
      <>
        Satyam and Mitch map your specific path — around your schedule, your baseline, and your
        race goal. <strong>You leave with a plan, not just inspiration.</strong>
      </>
    ),
  },
] as const;

export default function BlueprintSection() {
  const tickets = useTickets();
  return (
    <section className="blueprint-section">
      <div className="blueprint-inner">
        <span className="section-label reveal">What We Cover</span>
        <h2 className="section-headline reveal">
          We&apos;ll Cover Your Complete <span className="accent">Race Blueprint</span> in 3 Hours
        </h2>
        <p className="section-sub reveal">
          Built specifically for people with demanding schedules and{" "}
          <strong>zero margin for wasted training time.</strong>
        </p>

        <div className="timeline">
          {steps.map((step, i) => (
            <div className={`t-row ${step.side} reveal`} key={i}>
              {step.side === "left" ? (
                <>
                  <div className="t-content">
                    <div className="t-step-label">{step.step}</div>
                    <div className="t-title">{step.title}</div>
                    <p className="t-desc">{step.desc}</p>
                  </div>
                  <div className="t-icon">{step.icon}</div>
                  <div className="t-empty" />
                </>
              ) : (
                <>
                  <div className="t-empty" />
                  <div className="t-icon">{step.icon}</div>
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
          <a href="#" className="cta">
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
