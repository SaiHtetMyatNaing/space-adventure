"use client";
import React, { useEffect } from "react";
import initKaplay from "../kaplayCtx";
import { main } from "../map";

const SpaceAdventure = () => {
  useEffect(() => {
    // Init Canvas & Type Check
    const canvas = document.querySelector<HTMLCanvasElement>("#game");

    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }
    // Init Kaplay
    const k = initKaplay(canvas);

    // Adding Sprite Section
    k.loadSprite("background", "./adventure/space-bg.png");
    k.loadSound("space-wave", "./sounds/space-waves.mp3");
    k.loadSprite("astronaunt", "./adventure/astronaunt.png", {
      sliceX: 4,
      sliceY: 4,
      anims: {
        "right-idle-sprite": { from: 0, to: 3, loop: true },
        "left-idle-sprite": { from: 4, to: 7, loop: true },
        "right-jump-idle": 10,
        "left-jump-idle": 12,
        "right-run-idle": { from: 8, to: 11, loop: true },
        "left-run-idle": { from: 15, to: 12, loop: true },
      },
    });

    k.setGravity(1200);
    

    main(k);
   
  }, []);

  return (
      <canvas id="game" />
  );
};

export default SpaceAdventure;
