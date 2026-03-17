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

        {/* Row 1 */}
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

        {/* Row 2 */}
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
