import * as Phaser from 'phaser';

interface CharacterInterface extends Phaser.Physics.Arcade.Sprite {
  move: () => void;
}

export default CharacterInterface;
