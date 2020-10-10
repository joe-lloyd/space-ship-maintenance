import GameInterface from '../../scenes/game/GameInterface';
import Mage from '../mage/Mage';
import MageInterface from '../mage/MageInterface';
import PlayerInterface from './PlayerInterface';

class Player implements PlayerInterface {
  scene: GameInterface;

  character: MageInterface;

  speed: number;

  constructor(scene: GameInterface) {
    this.scene = scene;
    this.character = new Mage(scene, 50, 50);
    this.scene.add.existing(this.character);
    this.scene.physics.add.existing(this.character);
    this.speed = 10;
  }

  static preload(scene: GameInterface): void {
    Mage.preload(scene);
  }

  setCameraFollow(): void {
    this.scene.cameras.main.startFollow(this.character);
  }

  keyInputs(): void {
    this.scene.input.keyboard.on('keydown_LEFT', this.moveLeft, this);
    this.scene.input.keyboard.on('keydown_RIGHT', this.moveRight, this);
    this.scene.input.keyboard.on('keydown_UP', this.moveUp, this);
    this.scene.input.keyboard.on('keydown_DOWN', this.moveDown, this);
  }

  moveLeft = (): void => {
    this.character.setVelocityX(-this.speed);
    console.log('moveLeft');
  };

  moveRight = (): void => {
    this.character.setVelocityX(this.speed);
    console.log('moveRight');
  };

  moveUp = (): void => {
    this.character.setVelocityY(-this.speed);
    console.log('moveUp');
  };

  moveDown = (): void => {
    this.character.setVelocityY(this.speed);
    console.log('moveDown');
  };
}

export default Player;
