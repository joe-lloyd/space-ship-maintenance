import { Scene } from 'phaser';
import Player from '../../entities/player/Player';
import GameInterface from './GameInterface';
import TileAsset from '../../assets/images/tile-small.png';

class Game extends Scene implements GameInterface {
  player: Player;

  tile: Phaser.GameObjects.TileSprite;

  constructor() {
    super({
      key: 'Game',
    });
  }

  preload(): void {
    Player.preload(this);
    this.load.image('tile', TileAsset);
  }

  create(): void {
    this.physics.world.setBounds(0, 0, 3600, 1800);
    this.cameras.main.setBounds(0, 0, 3600, 1800);
    this.tile = this.add.tileSprite(0, 0, 3600, 1800, 'tile').setOrigin(0);

    this.player = new Player(this);
    this.player.setCameraFollow();
    this.player.keyInputs();
  }
}

export default Game;
