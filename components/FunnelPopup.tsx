"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { clientConfig } from "@/client.config";

const { popup } = clientConfig;

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
          {popup.eyebrow}
          <span className="fp-eyebrow-line" />
        </div>

        {/* Headline */}
        <h2 className="fp-headline">
          {popup.headline.split("\n").map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h2>

        {/* Options */}
        <div className="fp-options">
          <button className="fp-option" onClick={() => choose(popup.option1.route)}>
            <div className="fp-option-icon">{popup.option1.icon}</div>
            <div className="fp-option-body">
              <div className="fp-option-title">{popup.option1.title}</div>
              <div className="fp-option-sub">{popup.option1.sub}</div>
            </div>
          </button>

          <button className="fp-option" onClick={() => choose(popup.option2.route)}>
            <div className="fp-option-icon">{popup.option2.icon}</div>
            <div className="fp-option-body">
              <div className="fp-option-title">{popup.option2.title}</div>
              <div className="fp-option-sub">{popup.option2.sub}</div>
            </div>
          </button>
        </div>

        {/* Footer */}
        <p className="fp-footer">{popup.footer}</p>
      </div>
    </div>
  );
}
