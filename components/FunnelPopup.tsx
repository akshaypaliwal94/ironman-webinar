"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function FunnelPopup() {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("funnelChosen")) return;
    const t = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimateIn(true)));
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  const choose = (route: string) => {
    sessionStorage.setItem("funnelChosen", "true");
    setAnimateIn(false);
    setTimeout(() => {
      setVisible(false);
      router.push(route);
    }, 300);
  };

  if (!visible) return null;

  return (
    <div className="fp-overlay">
      <div className={`fp-card${animateIn ? " fp-card--in" : ""}`}>
        {/* Eyebrow */}
        <div className="fp-eyebrow">
          <span className="fp-eyebrow-line" />
          THE FINISH STRONG PROJECT
          <span className="fp-eyebrow-line" />
        </div>

        {/* Headline */}
        <h2 className="fp-headline">
          Have You Done a Triathlon<br />or Marathon{" "}
          <span className="fp-accent">Before?</span>
        </h2>

        {/* Options */}
        <div className="fp-options">
          <button className="fp-option" onClick={() => choose("/marathoner")}>
            <div className="fp-option-icon">✅</div>
            <div className="fp-option-body">
              <div className="fp-option-title">Yes, I Have</div>
              <div className="fp-option-sub">I want to race stronger and finally go Sub-5</div>
            </div>
          </button>

          <button className="fp-option" onClick={() => choose("/executive")}>
            <div className="fp-option-icon">🚀</div>
            <div className="fp-option-body">
              <div className="fp-option-title">No, This Is My First Time</div>
              <div className="fp-option-sub">
                I want to take on Ironman 70.3 as my next big challenge
              </div>
            </div>
          </button>
        </div>

        {/* Footer */}
        <p className="fp-footer">
          Takes 1 second · Shows you the right blueprint instantly
        </p>
      </div>
    </div>
  );
}
