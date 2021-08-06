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

  setBounds(): void {
    this.scene.cameras.main.setBounds(0, 0, 3600, 1800);
  }
}

export default Camera;
