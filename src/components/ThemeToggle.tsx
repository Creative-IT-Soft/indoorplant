"use client";

import { useTheme } from "@/app/ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="
        inline-flex items-center justify-center
        h-10 w-10 md:h-11 md:w-11
        rounded-lg
        bg-[color:var(--hover)]
        text-[color:var(--text)]
        hover:opacity-90
        transition
      "
    >
      <span className="text-xl">{theme === "dark" ? <FiSun /> : <FiMoon />}</span>
    </button>
  );
}
