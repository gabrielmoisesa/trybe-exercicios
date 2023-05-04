// Algoritimo que calcula o salário líquido:

// Salário bruto:
let salarioBruto = 3000;

// INSS
let aliquotaInss;

if (salarioBruto <= 1556.94 && salarioBruto > 0) {
    aliquotaInss = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaInss = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
    aliquotaInss = 570.88;
} else {
    console.log("Erro: Salário bruto inválido!");
}

// Salário base:
let salarioBase = salarioBruto - aliquotaInss;

// IR
let aliquotaIr;

if (salarioBase <= 1903.98) {
    aliquotaIr = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    aliquotaIr = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliquotaIr = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliquotaIr = (salarioBase * 0.225) - 636.13;
} else if (salarioBase > 4664.68) {
    aliquotaIr = (salarioBase * 0.275) - 869.36;
}

// Salário líquido:
let salarioLiquido = salarioBase - aliquotaIr

console.log("Salário líquido: " + salarioLiquido)
