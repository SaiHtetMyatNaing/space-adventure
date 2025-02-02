export default class Star {
  public scene: Phaser.Scene;
  private colliders?: Phaser.Tilemaps.TilemapLayer;

  constructor(scene: Phaser.Scene , colliders?:  Phaser.Tilemaps.TilemapLayer) {
    this.scene = scene; // Reference to the Phaser scene
    this.colliders = colliders
  }

  // Method to create the animation
  createAnimation() {
    this.scene.anims.create({
      key: "star-animation",
      frames: this.scene.anims.generateFrameNumbers("star", {
        start: 0,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  // Method to create stars from the object layer
  createStars(objectLayer : Phaser.Tilemaps.ObjectLayer) {
    objectLayer?.objects.forEach((object) => {
      if (object.name === "star") {
        const star = this.scene.physics.add.sprite(
          Number(object.x),
          Number(object.y),
          "star"
        );
        star.setScale(1.7);
        star.play("star-animation", true);
        // Assuming obstacles is defined in the scene
        this.scene.physics.add.collider(star, this.colliders!);
      }
    });
  }
}
