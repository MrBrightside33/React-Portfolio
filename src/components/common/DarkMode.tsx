"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-theme";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label={`Current theme: ${isDark ? "dark" : "light"}`}>
          <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${isDark ? "scale-0 -rotate-90" : "scale-100 rotate-0"}`} />
          <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isDark ? "scale-100 rotate-0" : "scale-0 rotate-90"}`} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} data-selected={resolvedTheme === "light"}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} data-selected={resolvedTheme === "dark"}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} data-selected={theme === "system"}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}