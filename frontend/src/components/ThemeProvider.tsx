"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "system" | "dark" | "light";
type ResolvedTheme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "system",
  resolvedTheme: "dark",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");
  const [mounted, setMounted] = useState(false);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("smb-theme", newTheme);
    } catch {}
  }, []);

  // Load saved theme on mount
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("smb-theme") as Theme | null;
      if (saved && ["system", "dark", "light"].includes(saved)) {
        setThemeState(saved);
      }
    } catch {}
  }, []);

  // Resolve and apply theme
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const resolveAndApply = () => {
      const resolved: ResolvedTheme =
        theme === "system"
          ? mediaQuery.matches
            ? "dark"
            : "light"
          : theme;

      setResolvedTheme(resolved);
      document.documentElement.setAttribute("data-theme", resolved);
    };

    resolveAndApply();

    // Listen for OS theme changes only when in "system" mode
    const handleChange = () => {
      if (theme === "system") {
        resolveAndApply();
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, mounted]);

  // Prevent flash of unstyled content
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
