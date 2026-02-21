import { useEffect, useState } from "react";
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

const TERMINAL_LINES = [
  "$ whoami",
  "",
  "  Initializing WHOAMI.exe...",
  "",
  "  name         : Léa Dieudonat",
  "  alias        : HUBBLE",
  "  role         : Full-Stack Developer",
  "  location     : Antibes, France",
  "  caffeine     : dangerously high ☕",
  "  open_to_work : true",
  "  bugs_fixed   : classified",
  "  bugs_created : see above",
  "",
  "  [WARN] do not talk before coffee, do not talk before 10am",
  "  [WARN] dubious humour & office karaoke singer",
  "  [WARN] will refactor your whole codebase",
  "",
  "$ _",
];

function getLineClass(line: string) {
  if (line.startsWith("$")) return "t-cmd";
  if (line.includes("[WARN]")) return "t-warn";
  if (line.includes("Initializing")) return "t-info";
  return "";
}

function WhoamiTerminal({ onClose }: { onClose: () => void }) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const done = lineIdx >= TERMINAL_LINES.length;

  useEffect(() => {
    if (done) return;
    const line = TERMINAL_LINES[lineIdx];

    if (line === "") {
      const t = setTimeout(() => {
        setDisplayed((d) => [...d, ""]);
        setLineIdx((i) => i + 1);
        setCharIdx(0);
      }, 60);
      return () => clearTimeout(t);
    }

    if (charIdx < line.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 18);
      return () => clearTimeout(t);
    }

    const pause = line.startsWith("$") ? 250 : 60;
    const t = setTimeout(() => {
      setDisplayed((d) => [...d, line]);
      setLineIdx((i) => i + 1);
      setCharIdx(0);
    }, pause);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx, done]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const allLines = done
    ? displayed
    : [...displayed, TERMINAL_LINES[lineIdx].slice(0, charIdx)];

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-titlebar">
          <button className="terminal-dot red" onClick={onClose} />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot green" />
          <span className="terminal-title">WHOAMI.exe — bash</span>
        </div>
        <div className="terminal-body">
          {allLines.map((line, i) => (
            <div key={i} className={`terminal-line ${getLineClass(line)}`}>
              {line || "\u00A0"}
              {!done && i === allLines.length - 1 && (
                <span className="terminal-cursor" />
              )}
            </div>
          ))}
          {done && <span className="terminal-cursor" />}
        </div>
        <div className="terminal-footer">ESC or click outside to close</div>
      </div>
    </div>
  );
}

export default function About() {
  const ref = useScrollFade<HTMLDivElement>();
  const [showTerminal, setShowTerminal] = useState(false);

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
          <button
            className="avatar-tag avatar-tag-btn"
            onClick={() => setShowTerminal(true)}
          >
            WHOAMI.exe
          </button>
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

      {showTerminal && (
        <WhoamiTerminal onClose={() => setShowTerminal(false)} />
      )}
    </section>
  );
}
