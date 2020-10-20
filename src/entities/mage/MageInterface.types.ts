import CharacterInterface from '../character/CharacterInterface.types';

interface MageInterface extends CharacterInterface {
  castSpell: () => void;
}

export default MageInterface;
