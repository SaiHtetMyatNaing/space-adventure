"use client";
import React, { useEffect } from "react";
import initKaplay from "../kaplayCtx";
import { createAstronaut } from "../astronaunt";
import BackgroundBeamsWithCollision from "@/components/ui/background-beams-with-collision";

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
    k.loadSprite("astroid", "./adventure/astroid.png");
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

    k.add([k.sprite("background"), k.scale(1.5), k.fixed()]);

    k.setGravity(1200);

    // player
    createAstronaut(k);

    // astroid section
    for (let i = 0; i < 10; i++) {
      const astroid = k.add([
        k.sprite("astroid"),
        k.scale(0.3),
        k.pos(300 * i, 500 + i),
        k.body({ isStatic: true }),
        k.area(),
        k.rotate(20),
        k.anchor("center"),
        k.anchor("center"),
      ]);
      k.loop(0.4, () => {
        astroid.rotateBy(20 * i);
      });
    }
  }, []);

  return (
    <BackgroundBeamsWithCollision>
      <canvas id="game" />;
    </BackgroundBeamsWithCollision>
  );
};

export default SpaceAdventure;
