import { Scene } from 'phaser';
import PlayerInterface from '../../entities/player/PlayerInterface';

interface GameInterface extends Scene {
  player: PlayerInterface;
}

export default GameInterface;
