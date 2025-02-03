import { AUTO, Game} from 'phaser';
import { SpaceJumper } from './scenes/space-jumper-game';


const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 960,
    height: 640,
    parent: 'game-container',
    min: {
        width: 480,
        height: 720,
    },
    max: {
        width: 1024,
        height: 1280,
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    dom: {
        createContainer: true
    },
    physics : {
        default : 'arcade',
        arcade :{
            gravity: {x: 0, y :700},
            debug: !false,
         
        }, 
    },
    scene: [SpaceJumper]}


const StartGame = (parent: string)  : Game => {
  

    return new Game({ ...config, parent });

}

export default StartGame;