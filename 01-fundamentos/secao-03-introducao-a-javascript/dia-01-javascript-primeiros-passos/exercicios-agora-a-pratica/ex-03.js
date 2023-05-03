let number01 = 6;
let number02 = 7;
let number03 = 5;

if (number01 > number02 && number01 > number03) {
    console.log("O número " + number01 + " é maior que os números " + number02 + " e " + number03);
} else if (number02 > number01 && number02 > number03) {
    console.log("O número " + number02 + " é maior que os números " + number01 + " e " + number03);
} else if (number03 > number01 && number03 > number02) {
    console.log("O número " + number03 + " é maior que os números " + number01 + " e " + number02);
}