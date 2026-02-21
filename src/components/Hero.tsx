import { meta } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-kanji" aria-hidden="true">
        死<br />生<br />コ
      </div>
      <div className="hero-inner">
        <div className="hero-eyebrow">
          {meta.role} — Based in {meta.location}
        </div>
        <h1 className="hero-name">
          <span className="outline">FULL</span>
          <span className="solid">STACK</span>
          <span className="accent glitch" data-t={meta.name}>
            {meta.name}
          </span>
        </h1>
        <p className="hero-sub">
          <strong>3+ ans</strong> à builder des plateformes SaaS B2B critiques.
          <br />
          Du backend PHP au frontend React — architecture propre, tests, zéro
          compromis.
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
