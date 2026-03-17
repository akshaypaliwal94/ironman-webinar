import { clientConfig } from "@/client.config";

const { funnel1 } = clientConfig;

export default function WhoSection() {
  return (
    <section className="who-section">
      <div className="who-inner">
        <span className="section-label reveal">Who This Is For</span>
        <h2 className="section-headline reveal">{funnel1.whoHeadline}</h2>
        <p className="section-sub reveal">{funnel1.whoSubline}</p>

        <div className="who-grid">
          <div className="who-card reveal">
            <span className="who-card-icon">{funnel1.whoCard1.icon}</span>
            <div className="who-card-title">{funnel1.whoCard1.title}</div>
            <ul className="who-list">
              {funnel1.whoCard1.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="who-card-footer">{funnel1.whoCard1.footer}</div>
          </div>

          <div className="who-card reveal reveal-delay-2">
            <span className="who-card-icon">{funnel1.whoCard2.icon}</span>
            <div className="who-card-title">{funnel1.whoCard2.title}</div>
            <ul className="who-list">
              {funnel1.whoCard2.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="who-card-footer">{funnel1.whoCard2.footer}</div>
          </div>
        </div>

        <div className="who-closing reveal">
          {funnel1.whoClosingText}{" "}
          <span>{funnel1.whoClosingAccent}</span>
        </div>
      </div>
    </section>
  );
}
