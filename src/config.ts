import * as Phaser from 'phaser';
import Game from './scenes/game/Game';
import Splash from './scenes/Splash';
import GameOver from './scenes/GameOver';

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.RESIZE,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: process.env.DEBUGMODE === 'true',
    },
  },
  scene: [Splash, Game, GameOver],
};

export default config;
