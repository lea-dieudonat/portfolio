import { about, skillCategories } from "../data/portfolio";
import { useScrollFade } from "../hooks/useScrollFade";
import {
  SiReact,
  SiTypescript,
  SiNuxt,
  SiTailwindcss,
  SiChartdotjs,
  SiPhp,
  SiSymfony,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiPostman,
} from "@icons-pack/react-simple-icons";

const iconMap: Record<string, React.ReactNode> = {
  SiReact: <SiReact size={24} />,
  SiTypescript: <SiTypescript size={24} />,
  SiNuxt: <SiNuxt size={24} />,
  SiTailwindcss: <SiTailwindcss size={24} />,
  SiChartdotjs: <SiChartdotjs size={24} />,
  SiPhp: <SiPhp size={24} />,
  SiSymfony: <SiSymfony size={24} />,
  SiNodedotjs: <SiNodedotjs size={24} />,
  SiPython: <SiPython size={24} />,
  SiApachekafka: (
    <span style={{ fontSize: 14, fontFamily: "monospace" }}>API</span>
  ),
  SiMysql: <SiMysql size={24} />,
  SiPostgresql: <SiPostgresql size={24} />,
  SiDocker: <SiDocker size={24} />,
  SiGit: <SiGit size={24} />,
  SiPostman: <SiPostman size={24} />,
};

export default function About() {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section id="about">
      <div className="section-label">01 — À propos & Stack</div>
      <h2 className="section-title">
        WHO
        <br />
        <span>AM I</span>
      </h2>
      <div className="about-grid fade" ref={ref}>
        {/* BIO — cadre cyberpunk */}
        <div className="bio-frame">
          <div className="corner corner-tl" />
          <div className="corner corner-tr" />
          <div className="corner corner-bl" />
          <div className="corner corner-br" />
          <div className="bio-content">
            {about.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="lang-badges">
              {about.languages.map((l) => (
                <span key={l.label} className="lang-badge">
                  {l.flag} {l.label} — {l.level}
                </span>
              ))}
            </div>
          </div>
          <div className="avatar-tag">WHOAMI.exe</div>
        </div>

        {/* SKILLS */}
        <div className="about-skills">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`skill-group ${cat.title === "Database & Tools" ? "wide" : ""}`}
            >
              <div className="skill-group-title">{cat.title}</div>
              <div className="skill-group-grid">
                {cat.skills.map((s) => (
                  <div key={s.name} className="skill-item">
                    <span className="skill-icon">{iconMap[s.icon]}</span>
                    <span className="skill-name">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
