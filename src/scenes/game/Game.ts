import { Scene } from 'phaser';
import Player from '../../entities/player/Player';
import GameInterface from './GameInterface.types';
import TilesAsset from '../../assets/tiles/dungeon-tile-set.png';
import * as MapJSON from '../../assets/tiles/dungeon-map-set.json';
import PlayerInterface from '../../entities/player/PlayerInterface.types';
import CameraInterface from '../../entities/camera/Camera.types';
import Camera from '../../entities/camera/Camera';
import InputsInterface from '../../entities/inputs/Inputs.types';
import Inputs from '../../entities/inputs/Inputs';

class Game extends Scene implements GameInterface {
  player: PlayerInterface;

  camera: CameraInterface;

  inputs: InputsInterface;

  constructor() {
    super({
      key: 'Game',
    });
    this.player = new Player(this);
    this.camera = new Camera(this);
    this.inputs = new Inputs(this);
  }

  preload(): void {
    Player.preload(this);
    this.load.image('tiles', TilesAsset);
    this.load.tilemapTiledJSON('map', MapJSON);
  }

  create(): void {
    // const map = this.make.tilemap({ key: 'map' });
    // const tileset = map.addTilesetImage('dungeon-tile-set', 'tiles');
    // const belowLayer = map.createStaticLayer(0, tileset, 0, 0);
    // this.cameras.main.setBounds(0, 0, 3600, 1800);

    this.camera.setFollowPlayer();
    this.inputs.keyInputs();
  }
}

export default Game;
