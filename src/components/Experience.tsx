import { experiences } from "../data/portfolio";
import { useScrollFade } from "../hooks/useScrollFade";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">04 — Expériences</div>
      <h2 className="section-title">
        MY
        <br />
        <span>XP</span>
      </h2>
      <div className="timeline">
        {experiences.map((xp) => (
          <TimelineItem key={xp.company} xp={xp} />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({ xp }: { xp: (typeof experiences)[0] }) {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <div className="timeline-item fade" ref={ref}>
      <div>
        <div className="tl-date">{xp.date}</div>
        <div className="tl-company">{xp.company}</div>
      </div>
      <div className="tl-right">
        <div className="tl-role">{xp.role}</div>
        <div className="tl-stack">{xp.stack}</div>
        <ul className="tl-points">
          {xp.points.map((point, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>
      </div>
    </div>
  );
}
