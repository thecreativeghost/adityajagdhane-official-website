import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex items-center w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors"
    >
      <span
        className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white dark:bg-black transition-transform ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />
      <span className="absolute left-1 text-xs">☀️</span>
      <span className="absolute right-1 text-xs">🌙</span>
    </button>
  );
}
