import { Scene } from 'phaser';
import PlayerInterface from '../../entities/player/PlayerInterface';

interface GameInterface extends Scene {
  player: PlayerInterface;
  tile: Phaser.GameObjects.TileSprite;
}

export default GameInterface;
