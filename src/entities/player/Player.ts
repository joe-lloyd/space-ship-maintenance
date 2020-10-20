import GameInterface from '../../scenes/game/GameInterface.types';
import Mage from '../mage/Mage';
import MageInterface from '../mage/MageInterface.types';
import PlayerInterface from './PlayerInterface.types';

class Player implements PlayerInterface {
  character: MageInterface;

  speed: number;

  constructor(scene: GameInterface) {
    this.character = new Mage(scene, 50, 50);
    scene.add.existing(this.character);
    scene.physics.add.existing(this.character);
    this.character.setCollideWorldBounds(true);
    this.speed = 500;
  }

  static preload(scene: GameInterface): void {
    Mage.preload(scene);
  }

  moveLeft = (): void => {
    this.character.setVelocityX(-this.speed);
  };

  moveRight = (): void => {
    this.character.setVelocityX(this.speed);
  };

  moveUp = (): void => {
    this.character.setVelocityY(-this.speed);
  };

  moveDown = (): void => {
    this.character.setVelocityY(this.speed);
  };

  stopMovingX = (): void => {
    this.character.setVelocityX(0);
  };

  stopMovingY = (): void => {
    this.character.setVelocityY(0);
  };

  spellSlotOne = (): void => {
    this.character.castSpell();
  };
}

export default Player;
