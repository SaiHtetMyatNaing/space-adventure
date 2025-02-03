import { multipleChoiceQuestion } from "@/lib/multiple-choice-question";
export default class Question  {
  public scene: Phaser.Scene;
  private colliders?: Phaser.Tilemaps.TilemapLayer;
  private text?: Phaser.GameObjects.Text; // Made text optional

  public constructor(
    scene: Phaser.Scene,
    colliders?: Phaser.Tilemaps.TilemapLayer,
  ) {
    this.scene = scene; // Reference to the Phaser scene
    this.colliders = colliders;
  }

  // Method to create stars from the object layer
  createQuestion(objectLayer: Phaser.Tilemaps.ObjectLayer) {
    if (!objectLayer) return; // Check if objectLayer is valid

    objectLayer.objects.forEach((object) => {
      if (object.name === "question-area") {
        // Get the width and height of the object and center the text
        const width = object.width !== undefined ? object.width : 0; 
        const height = object.height !== undefined ? object.height : 0;

        this.text = this.scene.add.text(
          Number(object.x) + width/2,
          Number(object.y) + height/2,
          "Hello World!",
          { fontSize: "32px", color: "#ffffff" }
        );
        // Ensuring colliders is defined before adding
        if (this.colliders) {
          this.scene.physics.add.collider(this.text, this.colliders);
        }
      }
    });
  }

    createAnswers(objectLayer: Phaser.Tilemaps.ObjectLayer) {
        let optionCount = 0;

        objectLayer.objects.forEach((object) => {
        if (object.name === "options") {
            this.scene.add.text(
            Number(object.x) + 100,
            Number(object.y),
            multipleChoiceQuestion[0].options[optionCount],
            { fontSize: "32px", color: "#ffffff" }
            );
            optionCount++;
        }
        });
    }
}
