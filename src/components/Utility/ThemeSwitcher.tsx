// app/components/ThemeSwitcher.tsx
"use client";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Button, Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isSelected, setIsSelected] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (isSelected) {
    setTheme("light");
  } else {
    setTheme("dark");
  }

  return (
    <>
      <Switch
        isSelected={isSelected}
        onValueChange={setIsSelected}
       color="primary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <CiLight
              className={`${className ? "size-4 text-slate-900 " : ""}`}
            />
          ) : (
            <MdDarkMode className={`${className ? "size-4 text-primary " : ""}`} />
          )
        }
      ></Switch>
    </>
  );
}
