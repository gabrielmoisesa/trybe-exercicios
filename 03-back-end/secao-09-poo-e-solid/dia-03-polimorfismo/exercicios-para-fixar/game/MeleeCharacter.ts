import Character from "./Character";

export default class MeleeCharacter extends Character {
  talk(): void {
    console.log("I'm a Melee Character!");
  }

  specialMove(): void {
    console.log("Super Punch");
  }
}
