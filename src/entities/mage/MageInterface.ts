import CharacterInterface from '../character/CharacterInterface';

interface MageInterface extends CharacterInterface {
  castSpell: () => void;
}

export default MageInterface;
