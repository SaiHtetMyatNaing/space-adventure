import Astronaunt from "../characters/astronaunt";
import Question from "../objects/question";
import Star from "../objects/star";
export class SpaceJumper extends Phaser.Scene {
  private map!: Phaser.Tilemaps.Tilemap;
  private tileset!: Phaser.Tilemaps.Tileset;
  private tileset2!: Phaser.Tilemaps.Tileset;
  private astronaunt!: Astronaunt;
  private star!: Star;
  private question!: Question;
 

  constructor() {
    super({ key: "space-jumper" });
  }

 preload(): void {
    this.load.image("bg-tileset", "/adventure/background-tile.png"); // Ensure correct key
    this.load.image("collider-tileset", "/adventure/collider-tileset.png"); // Ensure correct key
    this.load.tilemapTiledJSON("map", "./map.json");

  

    this.load.image('start-btn' , './adventure/play-btn.png');

    //astronaunt sprite
    this.load.spritesheet("astronaunt", "./adventure/astronaunt.png", {
      frameWidth: 64, // total width / number of column 256/4
      frameHeight: 64,
    });

    //start sprite
    this.load.spritesheet("star", "./adventure/star.png", {
      frameWidth: 16, // total width / number of column 256/4
      frameHeight: 16,
    });

    //audio loading
    this.load.audio("jump-sound", ["/sounds/jump-up.mp3"]);
  }

  create(): void {
    this.map = this.make.tilemap({ key: "map", tileWidth: 64, tileHeight: 64 });
    // Ensure the tileset name matches what is in the map.json file
    this.tileset = this.map.addTilesetImage("background", "bg-tileset")!;
    this.tileset2 = this.map.addTilesetImage("topdownset", "collider-tileset")!;
    // Ensuring layer names match those in Tiled
    this.map.createLayer("Background", this.tileset);
    // For player to collide with / to be able to jump on/ run on
    const obstacles = this.map.createLayer("Colliders", this.tileset2);
    obstacles?.setCollisionByProperty({ collides: true });

    obstacles?.postFX.addShine(0.3, 0.2, 5);

    //For adding platform to jump on
    const objectLayer = this.map.getObjectLayer("Objects");

    //Setting up the colliders and enabling them
    this.astronaunt = new Astronaunt({
      scene: this,
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY,
      name: "astronaunt",
    });

    // adding colliders
    this.physics.add.collider(this.astronaunt, obstacles!);

    //adding star
    const starManager = new Star(this, obstacles!);
    starManager.createAnimation();
    starManager.createStars(objectLayer!);

    // adjusing the camera for sideway scrolling game
    this.cameras.main.setBounds(
      0,
      0,
      this.map.widthInPixels,
      this.map.heightInPixels
    );
    // expanding the world of horizontal scrolling game
    this.physics.world.setBounds(
      0,
      0,
      this.map.widthInPixels,
      this.map.heightInPixels
    );

      this.cameras.main.startFollow(this.astronaunt);




    // adding text
    // Instantiate Question and create text
    this.question = new Question(this, obstacles!); // Pass scene and colliders
    this.question.createQuestion(objectLayer!); // Call createStars with
    this.question.createAnswers(objectLayer!);
    // // temporary debugging code
    // const debugGraphics = this.add.graphics().setAlpha(0.75);
    // this.map.renderDebug(debugGraphics, {
    //   tileColor: null, // Color of non-colliding tiles
    //   collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    //   faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Color of colliding face edges
    // });
  }

  update(time: number, delta: number): void {
    // Update logic goes here
    this.astronaunt.update(delta);

    // if the player is on the right side of the screen, stop following
    if(this.cameras.main.worldView.x >= 1824){
      this.cameras.main.stopFollow()
    }
  }
}
