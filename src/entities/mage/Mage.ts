import Character from '../character/Character';
import MageAsset from '../../assets/images/mage.png';
import MageInterface from './MageInterface.types';
import GameInterface from '../../scenes/game/GameInterface.types';

class Mage extends Character implements MageInterface {
  scene: GameInterface;

  constructor(scene: GameInterface, x: number, y: number) {
    super(scene, x, y, 'mage');
    this.scene = scene;
  }

  static preload(scene: GameInterface): void {
    scene.load.image('mage', MageAsset);
  }

  castSpell(): void {
    console.log('abra-ka-boom');
  }
}

export default Mage;
export { MageInterface };
