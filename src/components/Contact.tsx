import { meta } from "../data/portfolio";
import { useScrollFade } from "../hooks/useScrollFade";

const links = [
  { icon: "✉", label: meta.email, href: `mailto:${meta.email}` },
  { icon: "⌥", label: "github.com/lea-dieudonat", href: meta.github },
  { icon: "◈", label: "linkedin.com/in/leadieudonat", href: meta.linkedin },
];

export default function Contact() {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section id="contact">
      <div className="section-label">04 — Contact</div>
      <div className="contact-inner fade" ref={ref}>
        <div className="contact-left">
          <div className="big-text">
            LET'S
            <br />
            <span>WORK</span>
            <br />
            TOGETHER.
          </div>
        </div>
        <div className="contact-right">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="contact-link"
            >
              <span className="icon">{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
