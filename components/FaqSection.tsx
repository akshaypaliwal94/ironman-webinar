"use client";

import { useState } from "react";
import { useTickets } from "@/contexts/TicketContext";
import { clientConfig } from "@/client.config";

const { funnel1, pricing } = clientConfig;

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const tickets = useTickets();

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section">
      <div className="faq-inner">
        <h2 className="faq-headline reveal">Frequently Asked Questions</h2>

        <div className="faq-list">
          {funnel1.faqs.map((faq, i) => {
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
