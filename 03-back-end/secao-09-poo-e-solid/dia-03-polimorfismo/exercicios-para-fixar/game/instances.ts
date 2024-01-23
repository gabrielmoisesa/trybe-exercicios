import MeleeCharacter from "./MeleeCharacter";
import LongRangeCharacter from "./LongRangeCharacter";

const yoshi = new MeleeCharacter();
const samus = new LongRangeCharacter();

console.log("===== Yoshi =====");
yoshi.talk();
yoshi.specialMove();

console.log("===== Samus =====");
samus.talk();
samus.specialMove();
