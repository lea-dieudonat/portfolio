import { meta } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-kanji" aria-hidden="true">
        忍
      </div>
      <div className="hero-inner">
        <div className="hero-eyebrow">
          {meta.role} — Based in {meta.location}
        </div>
        <h1 className="hero-name">
          <span className="outline">FULL</span>
          <span className="solid">STACK</span>
          <span className="accent glitch" data-t="MONSTER">
            MONSTER
          </span>
        </h1>
        <p className="hero-sub">
          Fuelled by <strong>coffee & Monster</strong>. Allergic to pollen &
          spaghetti code.
          <br />I build things that don't crash at 3am. Usually.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-green">
            Voir mes projets
          </a>
          <a href="#contact" className="btn btn-ghost">
            Me contacter
          </a>
          <div className="status-badge">
            <div className="status-dot" />
            {meta.status}
          </div>
        </div>
      </div>
    </section>
  );
}
