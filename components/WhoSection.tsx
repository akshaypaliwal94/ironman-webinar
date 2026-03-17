const founderPoints = [
  "You've built something significant — now you want a physical challenge that matches what you've built mentally",
  "You train inconsistently because nobody has given you a structure that works around a founder's schedule",
  "You want something genuinely hard — not a weekend hobby, but a real test of mind and body",
  "You want to walk into every room knowing you've done something most people never attempt",
  "You've watched others do Ironman and thought — if they can, I absolutely can",
];

const executivePoints = [
  "You're 40+ and physically capable of far more than your current routine is demanding of you",
  "Your work performance is strong — but your body hasn't had a real challenge in years",
  "You've tried gym routines and running plans that don't stick because they weren't built for your schedule",
  "You want the mental clarity, better sleep, and sharper focus that comes from serious physical training",
  "Ironman feels ambitious — but something in you knows you could do it if someone showed you exactly how",
];

export default function WhoSection() {
  return (
    <section className="who-section">
      <div className="who-inner">
        <span className="section-label reveal">Who This Is For</span>
        <h2 className="section-headline reveal">This Webinar Is Built For You If —</h2>
        <p className="section-sub reveal">Read the one that sounds like you</p>

        <div className="who-grid">
          <div className="who-card reveal">
            <span className="who-card-icon">💼</span>
            <div className="who-card-title">You&apos;re an Entrepreneur or Founder</div>
            <ul className="who-list">
              {founderPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="who-card-footer">
              In 10–12 months, you can cross an Ironman finish line. This webinar shows you the
              exact system to get there without burning out or breaking down.
            </div>
          </div>

          <div className="who-card reveal reveal-delay-2">
            <span className="who-card-icon">🏢</span>
            <div className="who-card-title">You&apos;re a Senior Executive or CXO</div>
            <ul className="who-list">
              {executivePoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="who-card-footer">
              Ironman 70.3 is not as far away as it feels. This webinar is your first real step
              toward the finish line.
            </div>
          </div>
        </div>

        <div className="who-closing reveal">
          Different titles. Different starting points.{" "}
          <span>One finish line that changes everything.</span>
        </div>
      </div>
    </section>
  );
}
