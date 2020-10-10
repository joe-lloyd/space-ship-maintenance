import GameInterface from '../../scenes/game/GameInterface';
import MageInterface from '../mage/MageInterface';

interface PlayerInterface {
  scene: GameInterface;
  character: MageInterface;
  speed: number;
}

export default PlayerInterface;
