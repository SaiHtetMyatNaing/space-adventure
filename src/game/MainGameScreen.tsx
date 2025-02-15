"use client";
import { useRef } from "react";
import { IRefPhaserGame } from "./phaser-game";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

export const Wrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div
   className="relative w-full h-[750px]">
    <div className="absolute inset-0">{children}</div>
  </div>
);

// Dynamically import PhaserGame to avoid SSR issues
const PhaserGame = dynamic(
  () => import("./phaser-game").then((mod) => mod.PhaserGame),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center w-full h-full">
        <div className="loader"></div>
      </div>
    ),
  }
);

function MainGame() {
  const phaserRef = useRef<IRefPhaserGame | null>(null);

  return (
    <Wrapper>
      {" "}
      <PhaserGame ref={phaserRef} />
    </Wrapper>
  );
}

export default MainGame;
