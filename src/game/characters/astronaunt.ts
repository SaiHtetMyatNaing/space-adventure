import Phaser from "phaser";

export default class Astronaut extends Phaser.Physics.Arcade.Sprite {
  private spriteName: string;

  constructor(config: {
    scene: Phaser.Scene;
    x: number;
    y: number;
    name: string;
  }) {
    super(config.scene, config.x, config.y, config.name);
    config.scene.add.existing(this);

    // Adding this object to the physical world
    this.scene.physics.world.enable(this);
    this.setCollideWorldBounds(true);

    this.spriteName = config.name;
    this.scene = config.scene;

    // Create animations once during initialization
    this.createAnimations();
    this.setOrigin(0.5, 0.5);
  }

  // Create all animations for the astronaut
  private createAnimations(): void {
    // Right run animation
    this.scene.anims.create({
      key: "right-run",
      frames: this.scene.anims.generateFrameNumbers(this.spriteName, {
        start: 8,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Left run animation
    this.scene.anims.create({
      key: "left-run",
      frames: this.scene.anims.generateFrameNumbers(this.spriteName, {
        start: 12,
        end: 15,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Idle animation
    this.scene.anims.create({
      key: "idle-right",
      frames: this.scene.anims.generateFrameNumbers(this.spriteName, {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "idle-left",
      frames: this.scene.anims.generateFrameNumbers(this.spriteName, {
        start: 4,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // right jump animation
    this.scene.anims.create({
      key: "right-jump",
      frames: this.scene.anims.generateFrameNumbers(this.spriteName, {
        start: 9,
        end: 9,
      }),
      frameRate: 10,
    });

    // left jump animation
    this.scene.anims.create({
      key: "left-jump",
      frames: this.scene.anims.generateFrameNumbers(this.spriteName, {
        start: 13,
        end: 13,
      }),

      frameRate: 10,
    });
  }

  protected preUpdate(time: number, delta: number): void {
    super.preUpdate(time, delta);

    const cursors = this.scene.input.keyboard?.createCursorKeys();
    // added body as we need the astronaunt physical body to be able to check if it is on the floor
    const body = this.body as Phaser.Physics.Arcade.Body;
    body.setSize(32, 64, true);

    // check the animation for running
    if (cursors?.right.isDown) {
      if (this.anims.currentAnim?.key !== "right-run") {
        this.play("right-run", true);
        this.setVelocityX(200);
      }
    } else if (cursors?.left.isDown) {
      if (this.anims.currentAnim?.key !== "left-run") {
        this.play("left-run", true);
        this.setVelocityX(-200);
      }
    } else {
      // reset the animation to the idle animation
      if (this.anims.currentAnim?.key.includes("right") && body.onFloor()) {
        this.play("idle-right", true);
        this.setVelocityX(0);
      } else if (body.onFloor()) {
        this.play("idle-left", true);
        this.setVelocityX(0);
      }
    }

    // checking for jumping and add the animation
    if (cursors?.up.isDown && body.onFloor()) {
      this.scene.sound.play("jump-sound");
      if (this.anims.currentAnim?.key.includes("right")) {
        this.setVelocityY(-500); // Jump up
        this.play("right-jump", true);
      } else if(this.anims.currentAnim?.key.includes("left")) {
        this.setVelocityY(-500); // Jump up
        this.play("left-jump", true);
      }
    }
  }
}
