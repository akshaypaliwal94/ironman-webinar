const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Row 1 — brand + socials */}
        <div className="footer-row1">
          <div className="footer-brand">
            <div className="footer-brand-name">The Finish Strong Project</div>
            <div className="footer-tagline">Ironman 70.3 · 5th April 2026 · Live Zoom</div>
          </div>

          <div className="footer-socials">
            <a href="#" className="footer-social-btn" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" className="footer-social-btn" aria-label="YouTube">
              <YouTubeIcon />
            </a>
          </div>
        </div>

        {/* Disclaimer block */}
        <div className="footer-disclaimer">
          <p>
            <strong>Disclaimer:</strong> The Finish Strong Project is an endurance education and
            coaching webinar programme. The information shared in this webinar does not replace
            professional medical advice, diagnosis, or treatment. Individual results may vary.
            Always consult your physician before starting any endurance or triathlon training
            programme.
          </p>
          <p>
            This website is operated and maintained by The Finish Strong Project. Use of this
            website is governed by our{" "}
            <a href="/terms" className="footer-disclaimer-link">Terms &amp; Conditions</a> and{" "}
            <a href="/privacy" className="footer-disclaimer-link">Privacy Policy</a>. We do not
            guarantee specific race times or finishing results. Results vary and depend on
            individual effort, fitness baseline, consistency of training, and other factors outside
            our control. The coaching guidance provided by Satyam Sahai and Mitch Kibby is for
            informational and educational purposes only.
          </p>
          <p>
            All content — including the race blueprint, training framework, and session materials —
            is the intellectual property of The Finish Strong Project. Any duplication,
            reproduction, or distribution without written permission is strictly prohibited. By
            continuing to use this site, you agree to our privacy policy and terms of use.
          </p>
          <p>
            This website is owned and operated by{" "}
            <strong>The Finish Strong Project.</strong>
          </p>
        </div>

        {/* Row 2 — copyright + links */}
        <div className="footer-row2">
          <p className="footer-copy">© 2026 The Finish Strong Project. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy" className="footer-link">Privacy Policy</a>
            <a href="/terms" className="footer-link">Terms &amp; Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
