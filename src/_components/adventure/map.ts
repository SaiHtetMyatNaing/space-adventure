  "use client";
  import { KAPLAYCtx } from "kaplay";
  import { createAstronaut } from "./astronaunt";

  export async function main(k: KAPLAYCtx) {
    k.loadSprite("map", "./adventure/map.png");
    k.loadSprite("star", "./adventure/star.png", {
      sliceX: 6,
      sliceY: 1,
      anims: {
        idle: { from: 0, to: 6, loop: true },
      },
    });

    const mapData = await (await fetch("./map.json")).json();

    const map = k.add([
      k.sprite('map' ),
      k.pos(0, 0),
      k.anchor('topleft')
    ]);


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

      if (layer.name === "Player") {
        for (const object of layer.objects) {
          if (object.name === "astronaunt") {
            const astronaunt = createAstronaut(k);
            const player = k.add([
              ...astronaunt.components,
              k.pos(object.x, object.y),
            ]);
            astronaunt.setup(player);

            continue;
          }
        }
      }
    }
  }
