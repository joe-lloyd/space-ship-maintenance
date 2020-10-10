import { Scene } from 'phaser';
import Player from '../../entities/player/Player';
import GameInterface from './GameInterface';

class Game extends Scene implements GameInterface {
  player: Player;

  constructor() {
    super({
      key: 'Game',
    });
  }

  preload(): void {
    Player.preload(this);
  }

  create(): void {
    this.player = new Player(this);
  }

  update(): void {

  }
}

export default Game;
