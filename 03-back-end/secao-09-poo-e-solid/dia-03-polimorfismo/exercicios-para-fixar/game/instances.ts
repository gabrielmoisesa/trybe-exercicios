import MeleeCharacter from "./MeleeCharacter";
import LongRangeCharacter from "./LongRangeCharacter";
import Character from "./Character";

const yoshi = new MeleeCharacter();
const samus = new LongRangeCharacter();

console.log("===== Yoshi =====");
Character.introduce(yoshi);

console.log("===== Samus =====");
Character.introduce(samus);
