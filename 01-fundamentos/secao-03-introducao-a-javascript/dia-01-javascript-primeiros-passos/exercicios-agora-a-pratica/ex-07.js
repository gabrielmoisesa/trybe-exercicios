let score = 80;

if (score < 0 || score > 100) {
    console.log("Erro: nota inválida!");
} else if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D") 
} else if (score >= 50) {
    console.log("E")
} else if (score < 50) {
    console.log("F")
} else {
    console.log ("Erro: a nota precisa ser um número!")
}

