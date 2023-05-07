// Variáveis
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;
let maiorNumber = 0;
let impares = 0;
let menorNumber = numbers[0];
let array = [];

function barras() {
    return console.log("-----")
}

// Percorra o array imprimindo todos os valores contidos nele com a função console.log().
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// Some todos os valores contidos no array e imprima o resultado. 
for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}
barras();
console.log(sum);

// Calcule e imprima a média aritmética dos valores contidos no array.
media = sum / numbers.length;
barras();
console.log(media);
barras();

/* Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, 
imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.*/
if (media > 20) {
    console.log("O valor da média aritmética é maior que 20");
} else if (media <= 20) {
    console.log("O valor da média aritmética é menor ou igual a 20");
}

// Utilizando for, descubra o maior valor contido no array e imprima-o.
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumber) {
        maiorNumber = numbers[index];
    }
} 
barras();
console.log(maiorNumber);
barras();

/* Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”. */
for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 2) !== 0) {
        impares += 1;
    } 
}

if (impares === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(impares);
}

// Utilizando for, descubra o menor valor contido no array e imprima-o. 
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumber) {
        menorNumber = numbers[index];
    }
}
barras();
console.log(menorNumber);

// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado. 
for (let index = 1; index <= 25; index += 1) {
    array.push(index);
}
barras();
console.log(array);
barras();

/* Utilizando o array que acabou de criar, imprima o resultado da divisão 
de cada um dos elementos por 2. */
for (let index = 0; index < array.length; index += 1) {
    console.log(array[index] / 2);
}

