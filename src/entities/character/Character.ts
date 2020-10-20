import * as Phaser from 'phaser';
import CharacterInterface from './CharacterInterface.types';
import GameInterface from '../../scenes/game/GameInterface.types';

class Character extends Phaser.Physics.Arcade.Sprite implements CharacterInterface {
  scene: GameInterface;

  constructor(scene: GameInterface, x: number, y: number, texture: string) {
    super(scene, x, y, texture);
    this.scene = scene;
  }

  move(): void {
    console.log('move me daddy', this);
  }
}

export default Character;
