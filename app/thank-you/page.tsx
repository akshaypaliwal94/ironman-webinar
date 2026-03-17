"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

const steps = [
  {
    num: "1",
    title: "Check Your WhatsApp & Email",
    desc: "Your Zoom link will be sent to you within the next few minutes. If you don't see it, check your spam folder.",
  },
  {
    num: "2",
    title: "Save the Date",
    desc: "Block 5th April, 11:00 AM IST in your calendar right now. This is a live session — no recording, no replay.",
  },
  {
    num: "3",
    title: "Come Prepared",
    desc: "Think about your current fitness baseline, your schedule constraints, and your race goal. Satyam and Mitch will map your exact path live.",
  },
];

function ThankYouContent() {
  const searchParams = useSearchParams();
  const funnel = searchParams.get("funnel") || "executive";

  const subheadline =
    funnel === "marathoner"
      ? "Your seat for the Athlete Ironman Blueprint is confirmed."
      : "Your seat for the Executive Ironman Blueprint is confirmed.";

  const backHref = funnel === "marathoner" ? "/marathoner" : "/executive";

  return (
    <main>
      <ScrollReveal />

      {/* ── TOP — navy ── */}
      <section className="ty-hero">
        <div className="ty-hero-inner">
          <div className="ty-check-icon reveal">✅</div>
          <h1 className="ty-headline reveal">You&apos;re In.</h1>
          <p className="ty-subheadline reveal">{subheadline}</p>
          <div className="ty-pill reveal">5th April 2026 · 11:00 AM IST · Live Zoom</div>

          <div className="ty-hero-cta reveal">
            <p className="ty-hero-cta-label">One last step — join the community:</p>
            <a href="#" className="cta cta--amber">
              Click Here to Join Our WhatsApp Community
              <div className="cta-arrow">→</div>
            </a>
            <p className="ty-wa-note" style={{ marginTop: "12px" }}>Takes 10 seconds · Get your session reminder here</p>
          </div>
        </div>
      </section>

      {/* ── MIDDLE — white ── */}
      <section className="ty-body">
        <div className="ty-body-inner">

          {/* What happens next */}
          <div className="ty-block reveal">
            <h2 className="ty-block-title">What Happens Next</h2>
            <div className="ty-steps">
              {steps.map((step) => (
                <div className="ty-step" key={step.num}>
                  <div className="ty-step-num">{step.num}</div>
                  <div className="ty-step-body">
                    <div className="ty-step-title">{step.title}</div>
                    <p className="ty-step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* One more step */}
          <div className="ty-whatsapp-box reveal">
            <div className="ty-wa-title">Join the Exclusive WhatsApp Community</div>
            <p className="ty-wa-body">
              Get race updates, training tips, and a reminder before the session. This is where
              Satyam shares things he doesn&apos;t post publicly.
            </p>
            <a href="#" className="cta cta--amber">
              Click Here to Join Our Community Now
              <div className="cta-arrow">→</div>
            </a>
            <p className="ty-wa-note">Takes 10 seconds · Don&apos;t miss the session reminder</p>
          </div>

        </div>
      </section>

      {/* ── BOTTOM — navy ── */}
      <Footer />
      <section className="ty-bottom">
        <p className="ty-bottom-text reveal">
          Questions? Message us on WhatsApp and we&apos;ll respond within a few hours.
        </p>
        <a href={backHref} className="ty-back-link reveal">
          ← Back to the webinar page
        </a>
      </section>
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense>
      <ThankYouContent />
    </Suspense>
  );
}
