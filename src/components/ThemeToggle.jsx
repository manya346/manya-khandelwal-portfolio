import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasVisitedBefore, setHasVisitedBefore] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore");

    if (!hasVisited) {
      // Show toast first
      setTimeout(() => {
        toast({
          title: "Welcome! 👋",
          description:
            "Try toggling between light and dark modes to find your perfect view!",
          duration: 4000,
        });
      }, 1000);

      // Start animation after toast
      setTimeout(() => {
        setHasVisitedBefore(false); // Ensure animation is visible
      }, 2000);

      setTimeout(() => {
        setHasVisitedBefore(true);
        localStorage.setItem("hasVisitedBefore", "true");
      }, 8000);
    } else {
      setHasVisitedBefore(true);
    }
  }, [toast]);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-5 z-50 p-2 rounded-full transition-all duration-300",
        "focus:outline-hidden",
        !hasVisitedBefore &&
          (isDarkMode
            ? "animate-pulse-soft ring-2 ring-yellow-300/30 bg-gradient-to-r from-yellow-200/10 to-orange-200/10"
            : "animate-pulse-soft ring-2 ring-indigo-500/30 bg-gradient-to-r from-indigo-200/10 to-purple-200/10")
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
