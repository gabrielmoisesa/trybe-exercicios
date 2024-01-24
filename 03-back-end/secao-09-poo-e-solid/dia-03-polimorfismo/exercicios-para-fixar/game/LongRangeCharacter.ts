import Character from "./Character";

export default class LongRangeCharacter extends Character {
  talk(): void {
    console.log("I'm a Long Range Character!");
  }

  specialMove(): void {
    console.log("Fire Arrow");
  }
}
