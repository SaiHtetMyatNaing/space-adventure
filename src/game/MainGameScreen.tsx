"use client";
import { useRef } from "react";
import { IRefPhaserGame } from "./phaser-game";
import dynamic from "next/dynamic";
import BackgroundBeamsWithCollision from "@/components/ui/background-beams-with-collision";

// Dynamically import PhaserGame to avoid SSR issues
const PhaserGame = dynamic(
  () => import("./phaser-game").then((mod) => mod.PhaserGame),
  {
    ssr: false,
  }
);

function MainGame() {
  const phaserRef = useRef<IRefPhaserGame | null>(null);

  return (
    <BackgroundBeamsWithCollision>
      {" "}
      <PhaserGame ref={phaserRef} />
    </BackgroundBeamsWithCollision>
  );
}

export default MainGame;
