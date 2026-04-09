"use client";

import { useEffect, useState } from "react";
import ColorThief from "color-thief-browser";

export function useThemeColor(imageUrl: string) {
  const [color, setColor] = useState("rgb(59,130,246)"); // default blue

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = () => {
      try {
        const colorThief = new ColorThief();
        const result = colorThief.getColor(img);
        setColor(`rgb(${result[0]}, ${result[1]}, ${result[2]})`);
      } catch (e) {
        console.log("Color extraction failed");
      }
    };
  }, [imageUrl]);

  return color;
}