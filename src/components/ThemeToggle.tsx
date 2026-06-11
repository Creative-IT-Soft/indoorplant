"use client";

import { useTheme } from "@/app/ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";

type ThemeToggleProps = {
  overHero?: boolean;
};

export default function ThemeToggle({ overHero = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={[
        "theme-toggle",
        overHero ? "theme-toggle--hero" : "theme-toggle--default",
      ].join(" ")}
    >
      <span className="theme-toggle__icon">
        {theme === "dark" ? <FiSun /> : <FiMoon />}
      </span>
    </button>
  );
}
