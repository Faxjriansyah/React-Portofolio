import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Check localStorage for saved theme
    const storedTheme = localStorage.getItem("theme");

    // Check system preference
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Determine initial theme
    if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggleTheme = () => {
    const newDarkMode = !isDarkMode;

    // Update state
    setIsDarkMode(newDarkMode);

    // Update DOM
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <button
        className={cn(
          "p-2 rounded-lg bg-background/50 border border-border",
          "flex items-center justify-center w-10 h-10",
          "transition-all duration-300"
        )}
        aria-label="Theme toggle loading"
      >
        <div className="h-5 w-5 bg-transparent" />
      </button>
    );
  }

  return (
    <button
      onClick={handleToggleTheme}
      className={cn(
        "p-2 rounded-lg transition-all duration-300",
        "hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50",
        "border border-border hover:border-primary/30",
        "flex items-center justify-center w-10 h-10",
        "active:scale-95 transform"
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-all duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600 transition-all duration-300" />
      )}
    </button>
  );
};
