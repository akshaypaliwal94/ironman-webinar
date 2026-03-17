import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <main className="legal-page">
        <div className="legal-inner">
          <h1 className="legal-heading">Privacy Policy</h1>
          <div className="legal-body">
            <p>
              This website is operated by The Finish Strong Project. We collect only the information
              you voluntarily provide (name, email, phone) when registering for our webinar. This
              information is used solely to send you your Zoom link and session reminders. We do not
              sell or share your data with third parties. For questions, contact us on WhatsApp.
            </p>
          </div>
          <a href="javascript:history.back()" className="legal-back">← Back</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
