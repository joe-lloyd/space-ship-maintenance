import GameInterface from '../../scenes/game/GameInterface.types';
import InputsInterface from './Inputs.types';

class Inputs implements InputsInterface {
  scene: GameInterface;

  constructor(scene: GameInterface) {
    this.scene = scene;
  }

  keyInputs(): void {
    this.scene.input.keyboard.on('keydown_LEFT', this.scene.player.moveLeft, this.scene.player);
    this.scene.input.keyboard.on('keydown_RIGHT', this.scene.player.moveRight, this.scene.player);
    this.scene.input.keyboard.on('keydown_UP', this.scene.player.moveUp, this.scene.player);
    this.scene.input.keyboard.on('keydown_DOWN', this.scene.player.moveDown, this.scene.player);
    this.scene.input.keyboard.on('keyup_LEFT', this.scene.player.stopMovingX, this.scene.player);
    this.scene.input.keyboard.on('keyup_RIGHT', this.scene.player.stopMovingX, this.scene.player);
    this.scene.input.keyboard.on('keyup_UP', this.scene.player.stopMovingY, this.scene.player);
    this.scene.input.keyboard.on('keyup_DOWN', this.scene.player.stopMovingY, this.scene.player);
  }
}

export default Inputs;
