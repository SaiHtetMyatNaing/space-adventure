import Phaser from "phaser";
import Astronaunt from "../characters/astronaunt";
export class SpaceJumper extends Phaser.Scene {
  private map!: Phaser.Tilemaps.Tilemap;
  private tileset!: Phaser.Tilemaps.Tileset;
  private tileset2!: Phaser.Tilemaps.Tileset;

  constructor() {
    super({ key: "space-jumper" });
  }

  preload(): void {
    this.load.image("bg-tileset", "/adventure/background-tile.png"); // Ensure correct key
    this.load.image("collider-tileset", "/adventure/collider-tileset.png"); // Ensure correct key
    this.load.tilemapTiledJSON("map", "./map.json");

    //astronaunt sprite
    this.load.spritesheet("astronaunt", "./adventure/astronaunt.png", {
      frameWidth: 64, // total width / number of column 256/4
      frameHeight: 64,
    });

    //audio loading
    this.load.audio('jump-sound' , ['/sounds/jump-up.mp3'])
  }

  create(): void {
    this.map = this.make.tilemap({ key: "map" });
    // Ensure the tileset name matches what is in the map.json file
    this.tileset = this.map.addTilesetImage("background", "bg-tileset")!;
    this.tileset2 = this.map.addTilesetImage("topdownset", "collider-tileset")!;
    // Ensure layer names match those in Tiled
    this.map.createLayer("Background", this.tileset);

    // For player to collide with / to be able to jump on/ run on
    const obstacles =this.map.createLayer("Colliders", this.tileset2)
    obstacles?.setCollisionByProperty({ collides: true });

    //Setting up the colliders and enabling them

    const astronaunt = new Astronaunt({
      scene: this,
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY,
      name: "astronaunt",
    });
    
    this.physics.add.collider(astronaunt, obstacles!);

//     // temporary debugging code
//     const debugGraphics = this.add.graphics().setAlpha(0.75);
//     this.map.renderDebug(debugGraphics, {
//       tileColor: null, // Color of non-colliding tiles
//       collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
//       faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Color of colliding face edges
//     });
 }

  update(): void {
    // Update logic goes here
  }
}
