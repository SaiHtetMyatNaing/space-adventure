import { AUTO, Game} from 'phaser';
import { SpaceJumper } from './scenes/space-jumper-game';


const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 960,
    height: 640,
    parent: 'game-container',
    scale: {
        zoom : 1.2
    },
    physics : {
        default : 'arcade',
        arcade :{
            gravity: {x: 0, y :600},
            debug : true,
        }, 
    },
    scene: [SpaceJumper]}


const StartGame = (parent: string)  : Game => {
  

    return new Game({ ...config, parent });

}

export default StartGame;