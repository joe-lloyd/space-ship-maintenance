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
    this.character.setCollideWorldBounds(true);
    this.speed = 500;
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
    this.scene.input.keyboard.on('keyup_LEFT', this.stopMovingX, this);
    this.scene.input.keyboard.on('keyup_RIGHT', this.stopMovingX, this);
    this.scene.input.keyboard.on('keyup_UP', this.stopMovingY, this);
    this.scene.input.keyboard.on('keyup_DOWN', this.stopMovingY, this);
  }

  moveLeft = (): void => {
    this.character.setVelocityX(-this.speed);
    this.scene.tile.tilePositionX += this.speed;
  };

  moveRight = (): void => {
    this.character.setVelocityX(this.speed);
    this.scene.tile.tilePositionX -= this.speed;
  };

  moveUp = (): void => {
    this.character.setVelocityY(-this.speed);
    this.scene.tile.tilePositionY += this.speed;
  };

  moveDown = (): void => {
    this.character.setVelocityY(this.speed);
    this.scene.tile.tilePositionY -= +this.speed;
  };

  stopMovingX = (): void => {
    this.character.setVelocityX(0);
  };

  stopMovingY = (): void => {
    this.character.setVelocityY(0);
  };
}

export default Player;
