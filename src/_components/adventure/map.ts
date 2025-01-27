"use client";
import { KAPLAYCtx } from "kaplay";
import { createAstronaut } from "./astronaunt";

export async function main(k: KAPLAYCtx) {
  k.loadSprite("map", "./adventure/map.png");

  const mapData = await (await fetch("./map.json")).json();
  const map = k.add([k.pos(0, 0) , k.scale(4)]);
  console.log(mapData);
  k.add([k.sprite("map"), k.scale(4)]);
  createAstronaut(k);

  for (const layer of mapData.layers) {
    if (layer.type === "tilelayer") continue;

    if (layer.name === "Colliders") {
      for (const object of layer.objects) {
        map.add([
          k.area({ shape: new k.Rect(k.vec2(0), object.width, object.height) }),
          k.body({ isStatic: true }),
          k.pos(object.x, object.y),
        ]);
      }
      continue;
    }

    if (layer.name === "Positions") {
      for (const object of layer.objects) {
        if (object.name === "player") {
          map.add([
            k.sprite("spritesheet", { frame: 936 }), // idle frame of the player sprite
            k.area(),
            k.pos(object.x, object.y),
          ]);
          continue;
        }
      }
    }
  }
}
