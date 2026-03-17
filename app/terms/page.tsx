"use client";

import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <main className="legal-page">
        <div className="legal-inner">
          <h1 className="legal-heading">Terms &amp; Conditions</h1>
          <div className="legal-body">
            <p>
              By registering for The Finish Strong Project webinar, you agree to the following: Your
              ₹97 ticket is for a single live session on 5th April 2026 at 11:00 AM IST. The session
              will not be recorded or replayed. A full refund will be issued if requested before the
              session date. The content of this webinar is the intellectual property of The Finish
              Strong Project and may not be recorded, shared, or reproduced. Satyam Sahai and Mitch
              Kibby&apos;s coaching advice is for informational purposes. Please consult a medical
              professional before starting any endurance training programme.
            </p>
          </div>
          <button className="legal-back" onClick={() => window.history.back()}>← Back</button>
        </div>
      </main>
      <Footer />
    </>
  );
}
