import { useEffect, useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      className={`theme-toggle ${
        isDarkMode ? "theme-toggle-dark" : ""
      }`}
      onClick={handleThemeToggle}
      aria-label="Toggle Theme"
    >
      <span className="theme-icon theme-icon-moon">
        <i className="bi bi-moon-fill"></i>
      </span>

      <span className="theme-icon theme-icon-sun">
        <i className="bi bi-brightness-high-fill"></i>
      </span>

      <span className="theme-toggle-slider"></span>
    </button>
  );
};

export default ThemeToggle;