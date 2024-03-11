"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";


const ThemeWiseImageLoader = ({
  srcLight,
  srcDark,
  alt,
  width,
  height,
}: {
  srcLight: any;
  srcDark: any;
  alt: string;
  width?: number;
  height?: number;
}) => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState("light")

  useEffect(()=> {
    setTheme(resolvedTheme!)
  }, [resolvedTheme])

  return (
    <>
      {theme === "light" ? (
        <Image
          src={srcLight}
          alt={alt}
          width={200}
          height={100}
          priority={true}
          placeholder="empty"
        />
      ) : (
        <Image
          src={srcDark}
          alt={alt}
          width={200}
          height={100}
          priority={true}
          placeholder="empty"
        />
      )}
    </>
  );
};

export default ThemeWiseImageLoader;
