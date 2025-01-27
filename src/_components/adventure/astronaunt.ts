import { KAPLAYCtx } from "kaplay";

// src/game/entities/astronaut.js
export const createAstronaut = (k: KAPLAYCtx) => {
  // Load astronaut sprite
  k.loadSprite("astronaunt", "./adventure/astronaunt.png", {
    sliceX: 4,
    sliceY: 4,
    anims: {
      "right-idle-sprite": { from: 0, to: 3, loop: true },
      "left-idle-sprite": { from: 4, to: 7, loop: true },
      "right-jump-idle": 10,
      "left-jump-idle": 12,
      "right-run-idle": { from: 8, to: 11, loop: true },
      "left-run-idle": { from: 15, to: 12, loop: true },
    },
  });
  // loadingSOund
  k.loadSound("jump-up", "./sounds/jump-up.mp3");
  k.loadSound("run", "./sounds/running-sound.mp3");
  // Create astronaut
  const player = k.add([
    k.sprite("astronaunt"),
    k.scale(1.5),
    k.pos(200, 200),
    k.area(),
    k.body(),
    k.anchor("center"),
    k.rotate(0),
    k.doubleJump(),
    {
      speed: 300,
      direction: "right",
    },
  ]);

  // Set initial animation
  player.play("right-idle-sprite");

  //sound controls
  const handleRunningSound = () => k.play("run", { volume: 0.5 });

  // Movement controls(x-axis)
  k.onKeyDown("right", () => {
    if (player.getCurAnim()?.name !== "right-run-idle" && player.isGrounded()) {
      player.play("right-run-idle");
    }
    if (player.direction === "right") player.direction = "right";
    player.move(player.speed, 0);
  });

  k.onKeyDown("left", () => {
    if (player.getCurAnim()?.name !== "left-run-idle" && player.isGrounded()) {
      player.play("left-run-idle");
    }
    if (player.direction === "right") player.direction = "right";
    player.move(-player.speed, 0);
  });

  // handle sound
  const handleJumpSound = () => k.play("jump-up", { volume: 0.5 });

  k.onKeyPress('up', ()=> {
    handleJumpSound();
  })

  // handle jumping controls
  k.onKeyDown("up", () => {
    if (player.isGrounded() && player.getCurAnim()?.name.includes("right")) {
      player.play("right-jump-idle");
      player.jump();
    } else if (
      player.isGrounded() &&
      player.getCurAnim()?.name.includes("left")
    ) {
      player.play("left-jump-idle");
      player.jump();

    }
  });

  // Landing animation
  player.on("ground", () => {
    if (player.getCurAnim()?.name.includes("right")) {
      player.play("right-idle-sprite");
      handleJumpSound().stop();
    } else if (player.getCurAnim()?.name.includes("left")) {
      handleJumpSound().stop();

      player.play("left-idle-sprite");
    }
  });

  // Key release animations
  k.onKeyRelease("right", () => {
    if (player.getCurAnim()?.name === "right-run-idle") {
      handleRunningSound().stop();
      player.play("right-idle-sprite");
    }
  });

  k.onKeyRelease("left", () => {
    if (player.getCurAnim()?.name === "left-run-idle") {
      handleRunningSound().stop();
      player.play("left-idle-sprite");
    }
  });

  return player;
};
