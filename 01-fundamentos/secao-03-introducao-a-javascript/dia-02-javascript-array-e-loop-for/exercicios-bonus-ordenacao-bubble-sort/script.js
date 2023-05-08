let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ordene o array numbers em ordem crescente e imprima seus valores. 
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
console.log(numbers);

// Ordene o array numbers em ordem decrescente e imprima seus valores.
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
console.log(numbers);

/* Crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do 
novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. */
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (index < (numbers.length - 1)) {
        newArray.push(numbers[index] * numbers[index + 1]);
    } else {
        newArray.push(numbers[index] * 2);
    }
}
console.log(newArray);

/* Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, 
imprima na tela um quadrado feito de asteriscos de tamanho n. */
let n = 5;
let asterisk = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    inputLine = inputLine + asterisk;
}
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    console.log(inputLine);
}
console.log(' ');

/* Faça o mesmo algoritmo que antes, mas de modo que imprima 
um triângulo retângulo com 5 asteriscos de base. */
size = 5;
let inputLine02 = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
    console.log(inputLine02);
    inputLine02 = inputLine02 + asterisk
}
console.log(' ');

// Agora, inverta o lado do triângulo. 
size = 5;
let inputLine03 = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
        if (columnIndex < inputPosition) {
            inputLine03 = inputLine03 + ' ';
        } else {
            inputLine03 = inputLine03 + asterisk;
        }
    }
    console.log(inputLine03);
    inputLine03 = '';
    inputPosition -= 1;
}

// Faça uma pirâmide com n asteriscos de base.
let inputLine04 = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine04 = inputLine04 + asterisk;
    } else {
      inputLine04 = inputLine04 + ' ';
    }
  }
  console.log(inputLine04);
  inputLine04 = '';
  controlRight += 1;
  controlLeft -= 1
}
console.log(' ');

/* Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
Para isso, assuma que o valor de n será sempre ímpar. */
let n1 = 5;
let middle = (n + 1) / 2;
let controlLeft1 = middle;
let controlRight1 = middle;

for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n1; col += 1) {
    if (col == controlLeft1 || col == controlRight1 || line == middle) {
      outputLine += asterisk;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft1 -= 1;
  controlRight1 += 1;
  console.log(outputLine);
}
console.log(' ');

// Faça um algoritmo que indique se um número definido em uma variável é primo ou não. 
let divisors = 1;
let numberToCheck = 30;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');