// components/ThemeToggle/ThemeToggle.jsx
import useTheme from "../../hooks/useTheme";
import SunIcon from "../../icons/SunIcon";
import MoonIcon from "../../icons/MoonIcon";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { theme, handleThemeToggle } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleThemeToggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      {isLight ? (
        <MoonIcon aria-hidden="true" />
      ) : (
        <SunIcon aria-hidden="true" />
      )}
    </button>
  );
}
