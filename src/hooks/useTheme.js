// hooks/useTheme.js
import { useState, useEffect } from "react";

export default function useTheme() {
  // Read what the inline script already decided, so React and the page agree
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (e) {}
  };

  return { theme, handleThemeToggle };
}
