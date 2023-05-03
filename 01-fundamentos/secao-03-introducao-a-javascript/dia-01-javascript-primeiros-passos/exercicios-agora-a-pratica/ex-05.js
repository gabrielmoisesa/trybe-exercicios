let angleA = 80;
let angleB = 60;
let angleC = 40;

if (angleA + angleB + angleC == 180) {
    console.log(true);
} else if (angleA < 0 || angleB < 0 || angleC < 0) {
    console.log("Erro: ângulo inválido!");
} else {
    console.log(false);
}