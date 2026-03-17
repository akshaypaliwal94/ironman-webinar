"use client";

import Footer from "@/components/Footer";
import { clientConfig } from "@/client.config";

const { brand, event, pricing } = clientConfig;

export default function TermsPage() {
  return (
    <>
      <main className="legal-page">
        <div className="legal-inner">
          <h1 className="legal-heading">Terms &amp; Conditions</h1>
          <div className="legal-body">
            <p>
              By registering for the {brand.name} webinar, you agree to the following: Your{" "}
              {pricing.currency}{pricing.priceNow} ticket is for a single live session on{" "}
              {event.dateDisplay} at {event.timeDisplay}. The session will not be recorded or
              replayed. A full refund will be issued if requested before the session date. The
              content of this webinar is the intellectual property of {brand.name} and may not be
              recorded, shared, or reproduced. Coaching advice is for informational purposes. Please
              consult a medical professional before starting any training programme.
            </p>
          </div>
          <button className="legal-back" onClick={() => window.history.back()}>← Back</button>
        </div>
      </main>
      <Footer />
    </>
  );
}
