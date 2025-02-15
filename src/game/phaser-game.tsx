"use client";
import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import { getEventBus } from "./EventBus";
import StartGame from "./main";
import { motion} from "framer-motion";

export interface IRefPhaserGame {
  game: Phaser.Game | null;
  scene: Phaser.Scene | null;
}
interface IProps {
  currentActiveScene?: (scene_instance: Phaser.Scene) => void;
}

export const PhaserGame = forwardRef<IRefPhaserGame, IProps>(
  function PhaserGame({ currentActiveScene }, ref) {
    const game = useRef<Phaser.Game | null>(null!);

    useLayoutEffect(() => {
      if (game.current === null) {
        game.current = StartGame("game-container");

        if (typeof ref === "function") {
          ref({ game: game.current, scene: null });
        } else if (ref) {
          ref.current = { game: game.current, scene: null };
        }
      }

      return () => {
        if (game.current) {
          game.current.destroy(true);
          if (game.current !== null) {
            game.current = null;
          }
        }
      };
    }, [ref]);

    useEffect(() => {
      const eventBus = getEventBus();
      if (eventBus) {
        eventBus.on("some-event", () => {
          console.log("Event received!");
        });
      }

      return () => {
        if (eventBus) {
          eventBus.removeListener("some-event");
        }
      };
    }, [currentActiveScene, ref]);

    return (
        <motion.div 
          initial={{opacity: 0 , x: -400}}
          animate={{opacity: 1 , x: 0 , y:0}}
          transition={{duration: 0.6}}
        id="game-container"
 />
    );
  }
);
