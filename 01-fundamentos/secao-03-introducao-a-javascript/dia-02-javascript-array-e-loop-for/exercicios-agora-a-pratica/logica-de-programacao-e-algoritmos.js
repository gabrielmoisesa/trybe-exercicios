let fatorial = 1;

// Crie um algoritmo que imprima na tela o fatorial de 10.
for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}
console.log(fatorial);

/* Utilize a estrutura de repetição for para desenvolver um algoritmo que 
seja  capaz de inverter uma palavra, como a palavra “banana” para “ananab”. */
let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
    reverseWord += word[word.length - 1 - index];
}
console.log(reverseWord)

/* Utilize a estrutura de repetição for para escrever dois algoritmos: um que 
imprima no console a maior palavra desse array e outro que imprima a menor. 
Considere o número de caracteres de cada palavra. */
let array = ['java', 'javascript', 'python', 'html', 'css'];
maiorPalavra = array[0];
menorPalavra = array[0];
// Maior palavra
for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}
console.log(maiorPalavra);
// Menor palavra
for (let index = 1; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
}
console.log(menorPalavra);

/* Um número primo é um número inteiro maior que 1 que possui somente dois 
divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva 
um algoritmo que imprima no console o maior número primo entre 2 e 50. */ 
maiorNumeroPrimo = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
    let isPrime = true
    for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
        if (currentNumber % currentDivisor === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        maiorNumeroPrimo = currentNumber;
    }
}
console.log(maiorNumeroPrimo);