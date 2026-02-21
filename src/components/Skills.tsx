import { skills } from "../data/portfolio";
import { useScrollFade } from "../hooks/useScrollFade";

export default function Skills() {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section id="skills">
      <div className="section-label">02 — Stack technique</div>
      <h2 className="section-title">
        MY
        <br />
        <span>SKILLS</span>
      </h2>
      <div className="skills-grid fade" ref={ref}>
        {skills.map((s) => (
          <div key={s.name} className="skill-card">
            <div className="skill-cat">{s.cat}</div>
            <div className="skill-name">{s.name}</div>
            <div className={`skill-dot ${s.dot}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
