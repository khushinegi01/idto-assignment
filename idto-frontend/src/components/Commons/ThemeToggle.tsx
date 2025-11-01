import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 z-50 rounded-full border border-gray-300 bg-white p-2 text-gray-800 shadow-md transition-all duration-300 hover:scale-105 dark:border-gray-700 dark:bg-[#1C1C1C] dark:text-yellow-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
