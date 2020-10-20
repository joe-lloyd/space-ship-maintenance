import { Scene } from 'phaser';
import PlayerInterface from '../../entities/player/PlayerInterface.types';
import CameraInterface from '../../entities/camera/Camera.types';
import InputsInterface from '../../entities/inputs/Inputs.types';

interface GameInterface extends Scene {
  player: PlayerInterface;
  camera: CameraInterface;
  inputs: InputsInterface;
}

export default GameInterface;
