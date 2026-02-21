import { useEffect, useState } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function useKonami() {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    let index = 0;

    const handler = (e: KeyboardEvent) => {
      if (e.key === KONAMI[index]) {
        index++;
      } else {
        index = 0;
      }

      if (index === KONAMI.length) {
        index = 0;
        setTriggered(true);
        setTimeout(() => setTriggered(false), 3500);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return triggered;
}