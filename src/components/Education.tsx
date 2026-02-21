import { education } from "../data/portfolio";
import { useScrollFade } from "../hooks/useScrollFade";

export default function Education() {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section id="education">
      <div className="section-label">05 — Formation</div>
      <h2 className="section-title">
        MY
        <br />
        <span>ROOTS</span>
      </h2>
      <div className="edu-grid fade" ref={ref}>
        {education.map((e) => (
          <div key={e.name} className="edu-card">
            <div className="edu-year">{e.year}</div>
            <div className="edu-name">{e.name}</div>
            <div className="edu-school">{e.school}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
