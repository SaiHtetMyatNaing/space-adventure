import {
  Application,
  Graphics,
  Text,
  Assets,
  Sprite,
  Spritesheet,
  Texture,
  AnimatedSprite,
} from "pixi.js";
import { atlasData } from "./sprite-sheet/player-sprite-sheet";

const app = new Application();

export default async function pixiInit() {
  await app.init({
    resizeTo: window,
    autoStart: true,
    backgroundAlpha: 1,
    backgroundColor: 0xffea00,
  });

  const texture = await Assets.load(atlasData.meta.image);

  const spriteSheet = new Spritesheet(
    texture,
    atlasData
  );
  await spriteSheet.parse();

  const astronaunt = new AnimatedSprite(spriteSheet.animations.idle);
  astronaunt.play()
  astronaunt.animationSpeed = 0.13

  app.stage.addChild(astronaunt);

  return app;
}
