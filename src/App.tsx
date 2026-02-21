import { useEffect } from "react";
import { useKonami } from "./hooks/useKonami";
import Cursor from "./components/Cursor";
import KonamiEgg from "./components/KonamiEgg";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  const konamiActive = useKonami();

  // Also listen to the custom event fired by logo clicks
  useEffect(() => {
    const handler = () => {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
    };
    window.addEventListener("konami", handler);
    return () => window.removeEventListener("konami", handler);
  }, []);

  // Console easter egg
  useEffect(() => {
    console.log(
      "%c💀 HUBBLE.EXE",
      "font-size:28px;font-weight:bold;color:#39FF14;background:#060608;padding:8px 18px;",
    );
    console.log(
      "%c// You found the dev console. Respect.",
      "font-size:12px;color:#A855F7;font-family:monospace;",
    );
    console.log(
      "%c// Stack: React · Symfony · Node.js · TypeScript · Docker",
      "font-size:11px;color:#00F5D4;font-family:monospace;",
    );
    console.log(
      "%c// github.com/lea-dieudonat",
      "font-size:11px;color:#888;font-family:monospace;",
    );
  }, []);

  return (
    <>
      <Cursor />
      <KonamiEgg active={konamiActive} />
      <div className="grid-bg" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer>
        <span className="copy">© 2025 Hubble — All rights reserved</span>
        <span className="made-with">// try: ↑↑↓↓←→←→BA</span>
      </footer>
    </>
  );
}
