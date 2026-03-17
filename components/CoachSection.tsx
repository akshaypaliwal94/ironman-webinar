"use client";

import Image from "next/image";
import { useTickets } from "@/contexts/TicketContext";

export default function CoachSection() {
  const tickets = useTickets();
  return (
    <section className="coach-section">
      <div className="coach-inner">
        <span className="section-label reveal">Meet Your Coach</span>
        <h2 className="section-headline reveal" style={{ marginBottom: 48 }}>
          The People Behind Your <span className="accent">Race Blueprint</span>
        </h2>

        {/* ── Satyam ── */}
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
              <p>I didn&apos;t become an Ironman by having more time than you.</p>
              <p>
                I became one by building a system that works inside the constraints of running a
                company — not around them.
              </p>
              <p>
                At 30 I was overweight, leading a business, and had never run more than a kilometre.
                What changed wasn&apos;t my schedule. It was the system. Marathon first. Then
                triathlon. Then Ironman. Then 17 of them — all while staying active as a CEO.
              </p>
              <p>
                I know exactly what it feels like to train at 5am, lead a team by 9, and still show
                up at the start line ready to race. I&apos;ve spent years refining a training
                approach that fits the life you actually have — not the one you wish you had.
              </p>
              <p>
                If you&apos;re waiting until things slow down, they won&apos;t. This is the system
                that makes it possible now.
              </p>
            </div>
            <div className="coach-pills">
              {["🏅 17× Ironman Finisher", "🇮🇳 Former Mr. India", "💼 Active CEO", "🎯 Ironman Goa 70.3"].map(
                (pill) => (
                  <span className="coach-pill" key={pill}>
                    {pill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* ── Mitch ── */}
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
            <div className="mitch-title">
              Professional Triathlete · Director, i4 Coaching Australia
            </div>
            <p className="mitch-quote">
              &ldquo;Satyam&apos;s training methodology is built on the same system I&apos;ve used
              with professional and amateur athletes globally. What makes it unique for executives is
              how it&apos;s been engineered around real-life constraints — demanding schedules,
              limited training windows, and the mental pressure of high-performance careers.
              Everything in this webinar is grounded in sport science — and I&apos;ll be in the room
              to answer your questions live.&rdquo;
            </p>
            <div className="mitch-pills">
              {[
                "🇦🇺 World #16 Ranked Ironman",
                "🏆 Director, i4 Coaching Australia",
                "⏱️ 12 Years as a Pro Triathlete",
              ].map((pill) => (
                <span className="mitch-pill" key={pill}>
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="cta-block reveal">
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
