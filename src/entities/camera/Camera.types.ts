import GameInterface from '../../scenes/game/GameInterface.types';

interface CameraInterface {
  scene: GameInterface;
  setFollowPlayer: () => void;
}

export default CameraInterface;
