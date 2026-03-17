"use client";

import Footer from "@/components/Footer";
import { clientConfig } from "@/client.config";

const { brand } = clientConfig;

export default function PrivacyPage() {
  return (
    <>
      <main className="legal-page">
        <div className="legal-inner">
          <h1 className="legal-heading">Privacy Policy</h1>
          <div className="legal-body">
            <p>
              This website is operated by {brand.name}. We collect only the information you
              voluntarily provide (name, email, phone) when registering for our webinar. This
              information is used solely to send you your session link and reminders. We do not sell
              or share your data with third parties. For questions, contact us on WhatsApp.
            </p>
          </div>
          <button className="legal-back" onClick={() => window.history.back()}>← Back</button>
        </div>
      </main>
      <Footer />
    </>
  );
}
