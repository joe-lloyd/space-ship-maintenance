import GameInterface from '../../scenes/GameInterface';
import MageInterface from '../mage/MageInterface';

interface PlayerInterface {
  scene: GameInterface;
  character: MageInterface;
}

export default PlayerInterface;
