import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);

    const root = document.documentElement;
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const root = document.documentElement;

    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        relative w-11 h-6 rounded-full
        bg-gray-300 dark:bg-gray-700
        transition-colors duration-300
        focus:outline-none
      "
    >
      <span
        className={`
          absolute top-0.5 left-0.5 w-5 h-5 rounded-full
          bg-white dark:bg-black
          shadow-md
          transform transition-transform duration-300
          ${isDark ? "translate-x-5" : "translate-x-0"}
        `}
      />

      {/* icons */}
      <span className="absolute left-1 top-1 text-[10px]">☀️</span>
      <span className="absolute right-1 top-1 text-[10px]">🌙</span>
    </button>
  );
}
