import GameInterface from '../../scenes/game/GameInterface';
import Mage from '../mage/Mage';
import MageInterface from '../mage/MageInterface';
import PlayerInterface from './PlayerInterface';

class Player implements PlayerInterface {
  scene: GameInterface;

  character: MageInterface;

  constructor(scene: GameInterface) {
    this.scene = scene;
    this.character = new Mage(scene, 50, 50);
  }

  static preload(scene: GameInterface): void {
    Mage.preload(scene);
  }

  setCameraFollow(): void {
    this.scene.cameras.main.startFollow(this.character);
  }
}

export default Player;
