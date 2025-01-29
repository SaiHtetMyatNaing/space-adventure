"use client";

import { useEffect, useRef } from "react";
import pixiInit from "./main";

export const PixiComponent = () => {
  const pixiContainer = useRef<HTMLDivElement | null>(null);

  
  useEffect(() => {
    if (!pixiContainer.current) return;

    (async () => {
      const {canvas} = await pixiInit();
      pixiContainer.current?.appendChild(canvas);

    })();
      
  },[]);
  return <div ref={pixiContainer} />;
};
