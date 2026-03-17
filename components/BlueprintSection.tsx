"use client";

import { useRef, useEffect, useState } from "react";
import { useTickets } from "@/contexts/TicketContext";
import { clientConfig } from "@/client.config";

const { funnel1, pricing } = clientConfig;

export default function BlueprintSection() {
  const tickets = useTickets();
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
        const iconRect = icon.getBoundingClientRect();
        const iconCenter = iconRect.top + iconRect.height / 2;
        if (lineTipY >= iconCenter - 10) current = i;
      });
      setActiveStep(current);
    };

    window.addEventListener("scroll", updateLine, { passive: true });
    updateLine();
    return () => window.removeEventListener("scroll", updateLine);
  }, []);

  return (
    <section className="blueprint-section">
      <div className="blueprint-inner">
        <span className="section-label reveal">What We Cover</span>
        <h2 className="section-headline reveal">
          {funnel1.blueprintHeadline}
        </h2>
        <p className="section-sub reveal">{funnel1.blueprintSub}</p>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-line" ref={lineRef} />
          {funnel1.blueprintSteps.map((step, i) => (
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
