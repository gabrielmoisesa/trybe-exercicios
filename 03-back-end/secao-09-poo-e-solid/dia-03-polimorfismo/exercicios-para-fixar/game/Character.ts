export default abstract class Character {
  abstract talk(): void;

  abstract specialMove(): void;

  static introduce(character: Character) {
    character.talk();
    character.specialMove();
  }
}
