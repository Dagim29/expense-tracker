import React from "react";

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;