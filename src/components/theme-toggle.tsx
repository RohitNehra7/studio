"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = React.useState(theme === 'dark');

  React.useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme])

  const toggleTheme = (checked: boolean) => {
    const newTheme = checked ? 'dark' : 'light';
    setTheme(newTheme);
    setIsDark(checked);
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-[1.2rem] w-[1.2rem]"/>
      <Switch 
        id="theme-toggle" 
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    </div>
  )
}
