import GameInterface from '../../scenes/game/GameInterface.types';
import CameraInterface from './Camera.types';

class Camera implements CameraInterface {
  scene: GameInterface;

  constructor(scene: GameInterface) {
    this.scene = scene;
  }

  setFollowPlayer(): void {
    this.scene.cameras.main.startFollow(this.scene.player.character);
  }
}

export default Camera;
