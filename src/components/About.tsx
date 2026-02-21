import { about } from "../data/portfolio";
import { useScrollFade } from "../hooks/useScrollFade";
import avatar from "../assets/avatar.jpg";

export default function About() {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section id="about">
      <div className="section-label">01 — À propos</div>
      <h2 className="section-title">
        WHO
        <br />
        <span>AM I</span>
      </h2>
      <div className="about-grid fade" ref={ref}>
        <div className="about-avatar">
          <div className="avatar-frame">
            <div className="corner corner-tl" />
            <div className="corner corner-tr" />
            <div className="corner corner-bl" />
            <div className="corner corner-br" />
            <img src={avatar} alt="Hubble avatar" />
            <div className="avatar-tag">Hubble.exe</div>
          </div>
        </div>
        <div className="about-text">
          <h3>Développeuse Full-Stack</h3>
          {about.bio.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <div className="lang-badges">
            {about.languages.map((l) => (
              <span key={l.label} className="lang-badge">
                {l.flag} {l.label} — {l.level}
              </span>
            ))}
          </div>
          <div className="xp-bar">
            {about.skills_bars.map((s) => (
              <div key={s.label} className="xp-item">
                <div className="label">
                  {s.label} <span>{"⬛".repeat(Math.round(s.pct / 20))}</span>
                </div>
                <div className="xp-track">
                  <div className="xp-fill" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
