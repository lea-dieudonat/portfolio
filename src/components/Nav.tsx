import { useEffect, useRef, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [logoClicks, setLogoClicks] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const menuId = "primary-navigation";

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const navElement = navRef.current;
      if (!navElement) {
        return;
      }

      const target = event.target;
      if (target instanceof Node && !navElement.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isMenuOpen);
    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [isMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (next >= 7) {
      setLogoClicks(0);
      window.dispatchEvent(new CustomEvent("konami"));
    }
  };

  return (
    <nav ref={navRef}>
      <a href="#hero" className="nav-logo" onClick={handleLogoClick}>
        HU<em>BB</em>LE
      </a>
      <button
        type="button"
        className={`nav-burger ${isMenuOpen ? "open" : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls={menuId}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul id={menuId} className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} onClick={() => setIsMenuOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
