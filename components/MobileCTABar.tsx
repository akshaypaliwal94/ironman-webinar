"use client";
import { useTickets } from "@/contexts/TicketContext";

export default function MobileCTABar({ funnel = "executive" }: { funnel?: string }) {
  const tickets = useTickets();
  return (
    <div className="mobile-cta-bar" aria-label="Register now">
      <div className="mobile-cta-left">
        <div className="mobile-cta-pricing">
          <span className="mobile-cta-was">₹999</span>
          <span className="mobile-cta-now">₹97</span>
        </div>
        <div className="mobile-cta-urgency">🔥 Only {tickets} seats left</div>
      </div>
      <a href={`/thank-you?funnel=${funnel}`} className="mobile-cta-btn">
        Grab Your Seat <span className="mobile-cta-arrow">→</span>
      </a>
    </div>
  );
}
