export default class HomeScene extends Phaser.Scene {
    constructor() {
        super("home");

    }
    preload() {
        // Load your assets here
        this.load.image('background' , './adventure/background-tile.png');
        this.load.image('start-btn', '/adventure/play-btn.png');
    }
    create() {

    this.add.image(0 , 0, 'background').setOrigin(0,0).setScale(0.8)
    const startBtn= this.add.image(480, 320 , 'start-btn').setScale(0.5).setInteractive({useHandCursor : true})
    const text = this.add.text(
        480,
        200,
        'Welcome to the Space Jumper!',
        {
            fontSize: '32px',
            color: '#ffffff',
            align: 'center',

        }
    ).setOrigin(0.5);



    this.tweens.add({
        targets : text,
        alpha : { froma : 0 , to : 1 },
        yoyo : true,
        duration : 1000,
        repeat : -1,
        scale: { from: 1, to: 1.3 },// Scale X from 1 to 1.5
        ease : 'Sine.easeInOut',
    })






    startBtn.on('pointerdown', () => {
        this.scene.start('space-jumper'); // Replace 'NextScene' with your actual next scene key
    });
    
    // using tween to transform the button
    startBtn.on('pointerover', () => {
        this.tweens.add({
            targets: startBtn,
            scale: 0.3,
            duration: 200, // Duration in milliseconds
            ease: 'Power2'
        });
    });

    startBtn.on('pointerout', () => {
        this.tweens.add({
            targets: startBtn,
            scale: 0.5,
            duration: 200, // Duration in milliseconds
            ease: 'Power2'
        });
    });

    }
}