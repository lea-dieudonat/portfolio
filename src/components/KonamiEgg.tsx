import { useEffect } from "react";

interface Props {
  active: boolean;
}

export default function KonamiEgg({ active }: Props) {
  useEffect(() => {
    if (!active) return;
    const rain = document.getElementById("kanji-rain");
    if (!rain) return;

    const chars = "死生好悪ジュース코드ルビーアイ力夢愛";
    rain.innerHTML = "";

    for (let i = 0; i < 60; i++) {
      const d = document.createElement("div");
      d.className = "kanji-drop";
      d.style.left = Math.random() * 100 + "vw";
      d.style.animationDelay = Math.random() * 1.2 + "s";
      d.style.fontSize = 14 + Math.random() * 16 + "px";
      d.textContent = chars[Math.floor(Math.random() * chars.length)];
      rain.appendChild(d);
    }

    const timer = setTimeout(() => {
      rain.innerHTML = "";
    }, 3500);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <>
      <div id="kanji-rain" className="kanji-rain" />
      {active && (
        <div className="konami-overlay">
          <div className="k-skull">💀</div>
          <div className="k-text">STAY DEAD. OK!</div>
          <div className="k-sub">// easter egg unlocked — ↑↑↓↓←→←→BA</div>
        </div>
      )}
    </>
  );
}
