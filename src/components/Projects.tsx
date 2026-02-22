import { projects } from "../data/portfolio";
import { useScrollFade } from "../hooks/useScrollFade";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">03 — Projects</div>
      <h2 className="section-title">
        MY
        <br />
        <span>WORK</span>
      </h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.num} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: (typeof projects)[0] }) {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <div className="project-card fade" ref={ref}>
      <div className="project-stripe" />
      <div className="project-card-header">
        <div className="project-num">{p.num}</div>
        <div className="project-links">
          {p.links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="project-body">
        <div className="project-title">{p.title}</div>
        <p className="project-desc">{p.desc}</p>
        <div className="project-tags">
          {p.tags.map((t) => (
            <span key={t.label} className={`tag ${t.color}`}>
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
