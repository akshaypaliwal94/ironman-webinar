"use client";

import { useState } from "react";
import { useTickets } from "@/contexts/TicketContext";

const faqs = [
  {
    q: "I'm not a trained athlete. Can I really do an Ironman?",
    a: (
      <>
        Yes — if you can swim 25m, ride a bike, and run 3–5km, you have the physical foundation.
        The rest is <strong>structure, consistency, and the right coaching.</strong> This webinar
        shows you exactly what that looks like.
      </>
    ),
    defaultOpen: true,
  },
  {
    q: "I don't have hours to train every day. Is this realistic?",
    a: (
      <>
        This system was built by a CEO who trains around a demanding schedule. Sessions are designed
        to fit <strong>60–90 minute windows.</strong> You don&apos;t need to restructure your life —
        you need the right plan inside it.
      </>
    ),
  },
  {
    q: "Will this webinar be live or pre-recorded?",
    a: (
      <>
        <strong>100% Live.</strong> No recordings, no replays. Your ₹97 ticket is for the live
        session only — Satyam and Mitch will be in the room answering questions in real time.
      </>
    ),
  },
  {
    q: "How do I join the webinar?",
    a: (
      <>
        Once you register, you&apos;ll receive a Zoom link on <strong>WhatsApp and email.</strong>{" "}
        Join from any device — phone, tablet, or laptop.
      </>
    ),
  },
  {
    q: "Can I ask questions specific to my schedule and fitness level?",
    a: (
      <>
        Yes. The final segment is a <strong>live Q&amp;A with Satyam and Mitch.</strong> Bring your
        specific situation — they&apos;ll map a path for you on the call.
      </>
    ),
  },
  {
    q: "Why is the ticket only ₹97?",
    a: (
      <>
        To keep the room serious. Only committed people register for a paid session — which means
        better questions, better energy, and a Q&amp;A worth attending.{" "}
        <strong>Full refund if you feel it wasn&apos;t worth it.</strong>
      </>
    ),
  },
  {
    q: "What will I actually walk away with?",
    a: (
      <>
        A complete race blueprint — training structure, pacing strategy, nutrition framework, and a
        10-month plan{" "}
        <strong>personalised to your schedule and fitness level.</strong> Not notes. An actual plan
        you can act on the next morning.
      </>
    ),
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const tickets = useTickets();

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
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
