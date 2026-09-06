"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

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

function getSavedTheme(): Theme {
  if (typeof window === "undefined") return "system";

  try {
    const saved = localStorage.getItem("smb-theme") as Theme | null;

    return saved && ["system", "dark", "light"].includes(saved)
      ? saved
      : "system";
  } catch {
    return "system";
  }
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // IMPORTANT:
  // Keep the initial values identical on server and client.
  const [theme, setThemeState] = useState<Theme>("system");
  const [systemTheme, setSystemTheme] =
    useState<ResolvedTheme>("dark");

  const resolvedTheme =
    theme === "system" ? systemTheme : theme;

  // Load saved theme only after hydration.
  useEffect(() => {
    const savedTheme = getSavedTheme();
    setThemeState(savedTheme);

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const resolved = mediaQuery.matches ? "dark" : "light";

    setSystemTheme(resolved);

    if (savedTheme === "system") {
      document.documentElement.setAttribute(
        "data-theme",
        resolved
      );
    } else {
      document.documentElement.setAttribute(
        "data-theme",
        savedTheme
      );
    }
  }, []);

  // Follow operating-system changes only when system theme is selected.
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleChange = () => {
      if (theme === "system") {
        const resolved = mediaQuery.matches
          ? "dark"
          : "light";

        setSystemTheme(resolved);

        document.documentElement.setAttribute(
          "data-theme",
          resolved
        );
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () =>
      mediaQuery.removeEventListener(
        "change",
        handleChange
      );
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);

    const resolved =
      newTheme === "system"
        ? window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches
          ? "dark"
          : "light"
        : newTheme;

    document.documentElement.setAttribute(
      "data-theme",
      resolved
    );

    if (newTheme === "system") {
      setSystemTheme(resolved);
    }

    try {
      localStorage.setItem("smb-theme", newTheme);
    } catch {}
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
