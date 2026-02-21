import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";
import { meta } from "../data/portfolio";
import { useScrollFade } from "../hooks/useScrollFade";

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const links = [
  { icon: <SiGmail size={18} />, label: meta.email, href: `mailto:${meta.email}` },
  { icon: <SiGithub size={18} />, label: "github.com/lea-dieudonat", href: meta.github },
  { icon: <LinkedInIcon />, label: "linkedin.com/in/leadieudonat", href: meta.linkedin },
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
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noreferrer"
            className="status-badge status-badge-lg"
          >
            <div className="status-dot" />
            {meta.status}
          </a>
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
