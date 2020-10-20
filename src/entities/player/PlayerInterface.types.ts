import MageInterface from '../mage/MageInterface.types';

interface PlayerInterface {
  character: MageInterface;
  speed: number;
  moveLeft: () => void;
  moveRight: () => void;
  moveUp: () => void;
  moveDown: () => void;
  stopMovingX: () => void;
  stopMovingY: () => void;
}

export default PlayerInterface;
